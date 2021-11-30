import { normalizeType } from './normalize';

const cache = {};

function find(cache, type, ctx) {
  const impl = cache[type];

  if ( impl ) {
    return impl;
  } else if ( typeof impl !== 'undefined' ) {
    return null;
  }

  try {
    const pluginModel = ctx.rootState.$extension.getDynamic('models', type);
    let base;

    if (!pluginModel) {
      base = require(`@shell/models/${ type }`);
    } else {
      base = pluginModel();
    }

    // New Class models
    if ( base?.default?.prototype ) {
      cache[type] = base.default;

      return base.default;
    }
  } catch (e) {
    if ( e?.code !== 'MODULE_NOT_FOUND' ) {
      // eslint-disable-next-line no-console
      console.error('Find error', type, e);
    }
  }

  cache[type] = null;

  return null;
}

/**
 * This will lookup and load a model based on the type
 *
 * @param {*} store the name of the store that the type comes from
 * @param {*} type the type we'd like to lookup
 */
export function lookup(store, type, _name, ctx) {
  type = normalizeType(type).replace(/\//g, '');

  let out;
  const tries = [
    `${ store }/${ type }`,
    type
  ];

  for ( const t of tries ) {
    out = find(cache, t, ctx);
    if ( out ) {
      return out;
    }
  }

  return null;
}
