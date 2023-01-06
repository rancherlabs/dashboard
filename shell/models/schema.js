import Resource from '@shell/plugins/dashboard-store/resource-class';
import { normalizeType } from '@shell/plugins/dashboard-store/normalize';

export default class Schema extends Resource {
  get groupName() {
    return this.attributes.namespaced ? 'ns' : 'cluster';
  }
}

/**
 * Inject special fields for indexing schemas
 */
export function addSchemaIndexFields(data) {
  return {
    ...data, // TODO: RC Q why spread and not just set?
    _id:    normalizeType(data.id),
    _group: normalizeType(data.attributes?.group)
  };
}

export function parseType(str) {
  if ( str.startsWith('array[') ) {
    return ['array', ...parseType(str.slice(6, -1))];
  } else if ( str.startsWith('map[') ) {
    return ['map', ...parseType(str.slice(4, -1))];
  } else {
    return [str];
  }
}
