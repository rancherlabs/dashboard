import Vue from 'vue';
import { withQuery } from 'ufo';

const sanitizeComponent = (Component) => {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = Vue.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
};

export const getMatchedComponents = (route, matches = false, prop = 'components') => {
  return Array.prototype.concat.apply([], route.matched.map((match, index) => {
    return Object.keys(match[prop]).map((key) => {
      matches && matches.push(index);

      return match[prop][key];
    });
  }));
};

const getComponent = async (unknownComponent) => {
  let componentView;
  // If component is a function, resolve it
  if (typeof unknownComponent === 'function' && !unknownComponent.options) {
    try {
      componentView = await unknownComponent();
    } catch (error) {
      // Handle webpack chunk loading errors
      // This may be due to a new deployment or a network problem
      if (
        error &&
        error.name === 'ChunkLoadError' &&
        typeof window !== 'undefined' &&
        window.sessionStorage
      ) {
        const timeNow = Date.now();
        const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

        // check for previous reload time not to reload infinitely
        if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
          window.sessionStorage.setItem('nuxt-reload', timeNow);
          window.location.reload(true /* skip cache */);
        }
      }

      throw error;
    }
  }

  return componentView || unknownComponent;
};

/**
 * Update matched components for a given route
 * @param {*} route 
 * @returns 
 */
export const cleanMatchedComponents = (route) =>
  Array.prototype.concat.apply([], route.matched.map((match, index) =>
    Object.keys(match.components).reduce(async(acc, key) => {
      if (match.components[key]) {
        const component = await getComponent(match.components[key], match.instances[key], match, key, index);
        const cleanComponent = sanitizeComponent(component);
        match.components[key] = cleanComponent;
        acc.push(cleanComponent);
      } else {
        delete match.components[key];
      }

      return acc;
    }, [])
  ));

  /**
   * Merge route meta with component meta and update matched components
   * @param {*} route 
   * @returns 
   */
export const getRouteData = async (route) => {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await Promise.all(cleanMatchedComponents(route));
  const meta = getMatchedComponents(route).map(
    (matchedComponent, index) => ({ ...matchedComponent.options.meta, ...(route.matched[index] || {}).meta })
  )

  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta
  };
};

export const setContext = async (app, context) => {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isDev:   true,
      isHMR:   false,
      app,
      store:   app.store,
      payload: context.payload,
      error:   context.error,
      base:    app.router.options.base,
      env:     {
        commit: 'head', version: '0.1.2', dev: true, pl: 1, perfTest: false, rancherEnv: 'web', api: 'http://localhost:8989'
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = withQuery(path, query);

        // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
        window.location.replace(path);

        // Throw a redirect error
        throw new Error('ERR_REDIRECT');
      }
    };
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = Boolean(context.isHMR);
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
};

/**
 * Imported from path-to-regexp
 * @param {*} err 
 * @returns 
 */
export const normalizeError = (err) => {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${ err.constructor.name }]`;
    }
  } else {
    message = err.message || err;
  }

  return {
    ...err,
    message,
    statusCode: (err.statusCode || err.status || (err.response && err.response.status) || 500)
  };
};