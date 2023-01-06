/**
 * Advanced Worker is enabled by performance setting
 * relocates cluster resource sockets off the UI thread and into a webworker
 */

import { SCHEMA, COUNT } from '@shell/config/types';
import ResourceWatcher, { watchKeyFromMessage } from '@shell/plugins/steve/resourceWatcher';
import { EVENT_MESSAGE } from '@shell/utils/socket';
import { normalizeType } from '@shell/plugins/dashboard-store/normalize';

// import { CSRF } from '@shell/config/cookies';

const state = {
  watcher:      undefined,
  store:        '', // Store name
  workerQueue:  [],
  batchChanges: {},
  fetchConfig:  {}
};

const maintenanceInterval = setInterval(() => {
  if (Object.keys(state.batchChanges).length) {
    self.postMessage({ batchChanges: state.batchChanges });
    state.batchChanges = {};
  }
}, 5000); // 5 seconds

/**
 * These are things that we do when we get a message from the UI thread
 */
const workerActions = {
  loadSchemas:   () => {}, // TODO: RC handle schemas
  createWatcher: (metadata) => {
    const { connectionMetadata, maxTries, url } = metadata;

    if (!state.watcher) {
      state.watcher = new ResourceWatcher(url, true, null, null, maxTries);
      state.watcher.setConnectionMetadata(connectionMetadata);

      state.watcher.addEventListener(EVENT_MESSAGE, (e) => {
        const event = e.detail;

        if (event.data) {
          const msg = JSON.parse(event.data);

          if (msg.name) {
            if (resourceWatcherActions[msg.name]) {
              resourceWatcherActions[msg.name](msg);
            } else {
              resourceWatcherActions.dispatch(msg);
            }
          }
        }
      });

      while (state.workerQueue.length > 0) {
        const workerMessage = state.workerQueue.shift();
        const [action, msg] = Object.entries(workerMessage)[0];

        if (workerActions[action]) {
          workerActions[action](msg);
        } else {
          console.warn('no associated action for:', action); // eslint-disable-line no-console
        }
      }
    }
  },
  watch: (msg) => {
    // TODO: RC TEST - backend unreachable --> backend reachable (stop --> start mem-dev)

    const watchKey = watchKeyFromMessage(msg);

    if (msg.stop) {
      state.watcher.unwatch(watchKey);

      return;
    }

    // If socket is in error don't try to watch.... unless we `force` it
    if (!msg.force && !!state.watcher?.watches[watchKey]?.error) {
      // TODO: RC TEST the use case this covers
      return;
    }

    if (!state.watcher) {
      state.workerQueue.push({ watch: msg });

      return;
    }

    const {
      resourceType,
      namespace,
      id,
      selector,
      resourceVersion
    } = msg;

    const resourceVersionTime = resourceVersion ? Date.now() : undefined;
    const skipResourceVersion = [SCHEMA, COUNT].includes(resourceType);

    const watchObject = {
      resourceType,
      id,
      namespace,
      selector
    };

    state.watcher.watch(watchKey, resourceVersion, resourceVersionTime, watchObject, skipResourceVersion);
  },
  unwatch: (watchKey) => {
    if (!state.watcher) {
      return;
    }

    state.watcher.unwatch(watchKey);
  },
  initWorker: ({ storeName }) => {
    state.store = storeName;
  },
  destroyWorker: () => {
    clearInterval(maintenanceInterval);

    // disconnect takes a callback which we'll use to close the webworker
    state.watcher.disconnect().then(() => {
      delete self.onmessage;
      self.postMessage({ destroyWorker: true }); // we're only passing the boolean here because the key needs to be something truthy to ensure it's passed on the object.
    });
  },
};

/**
 * These are things that we do when we get a message from the resourceWatcher
 */
const resourceWatcherActions = {
  'resource.change': (msg) => {
    const { resourceType, data: { type, id }, data } = msg;
    const rawType = resourceType || type;
    const normalizedType = normalizeType(rawType === 'counts' ? COUNT : rawType);

    if (!state.batchChanges[normalizedType]) {
      state.batchChanges[normalizedType] = {};
    }
    state.batchChanges[normalizedType][id] = data;
  },
  'resource.create': (msg) => {
    const { resourceType, data: { type, id }, data } = msg;
    const rawType = resourceType || type;
    const normalizedType = normalizeType(rawType === 'counts' ? COUNT : rawType);

    if (!state.batchChanges[normalizedType]) {
      state.batchChanges[normalizedType] = {};
    }
    state.batchChanges[normalizedType][id] = data;
  },
  'ws.resource.start': (msg) => {
    // State is handled in the resourceWatcher, no need to bubble out to UI thread
  },
  'resource.remove': (msg) => {
    const { resourceType, data: { type, id } } = msg;
    const rawType = resourceType || type;
    const normalizedType = normalizeType(rawType === 'counts' ? COUNT : rawType);

    if (!state.batchChanges[normalizedType]) {
      state.batchChanges[normalizedType] = {};
    }
    state.batchChanges[normalizedType][id] = { remove: true }; // TODO: RC Q possibly overwrite of resource field?
  },
  'resource.stop': (msg) => {
    // State is handled in the resourceWatcher, no need to bubble out to UI thread

    // -----
    // const watchKey = watchKeyFromMessage(msg);

    // TODO: RC Q bug
    // forgetType --> watch(stop) --> advanced worker --> watcher --> rancher stop
    // rancher --> watcher stop
    // - watcher[key] deleted
    // rancher --> advanced worker stop (here)
    // - no watcher[key] so ui thread watcher state isn't udpated
    // if (state?.watcher?.watchExists(watchKey) && state.watcher.watches[watchKey].status !== 'removed') {
    //   console.error('RC: w-w.a: resource.stop: 3', state.watcher[watchKey]);
    //   // resourceWatcherActions.dispatch({ ...msg, fromWorker: true });
    // }
  },
  'resource.error': (msg) => {
    console.warn(`Resource error [${ state.store }]`, msg.resourceType, ':', msg.data.error); // eslint-disable-line no-console
  },
  dispatch: (msg) => {
    self.postMessage({ dispatch: msg });
  }
};

/**
 * Covers message from UI Thread to Worker
 */
onmessage = (e) => {
  /* on the off chance there's more than key in the message, we handle them in the order that they "keys" method provides which is
  // good enough for now considering that we never send more than one message action at a time right now */
  const messageActions = Object.keys(e?.data);

  messageActions.forEach((action) => {
    if (workerActions[action]) {
      workerActions[action](e?.data[action]);
    } else {
      console.warn('no associated action for:', action); // eslint-disable-line no-console
    }
  });
}; // bind everything to the worker's onmessage handler via the workerActions
