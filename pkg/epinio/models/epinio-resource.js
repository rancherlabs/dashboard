import Resource from '@shell/plugins/dashboard-store/resource-class';
import { createEpinioRoute } from '../utils/custom-routing';
import { epinioExceptionToErrorsArray } from '../utils/errors';
import { buildBulkLink } from '../utils/links';

export default class EpinioResource extends Resource {
  get listLocation() {
    return this.$rootGetters['type-map/optionsFor'](this.type).customRoute || createEpinioRoute(`c-cluster-resource`, {
      cluster:  this.$rootGetters['clusterId'],
      resource: this.type,
    });
  }

  get parentLocationOverride() {
    return this.listLocation;
  }

  get doneRoute() {
    return this.listLocation.name;
  }

  // ------------------------------------------------------------------

  get canClone() {
    return false;
  }

  get canYaml() {
    return false;
  }

  get canViewInApi() {
    return false;
  }

  // ------------------------------------------------------------------
  async _save(opt = {}) {
    try {
      return await super._save(opt);
    } catch (e) {
      throw epinioExceptionToErrorsArray(e);
    }
  }

  async remove(opt = {}) {
    if ( !opt.url ) {
      opt.url = (this.links || {})['self'];
    }

    opt.method = 'delete';

    try {
      await this.bulkRemove(opt);
      const res = await this.$dispatch('request', { opt, type: this.type });

      console.log('### Resource Remove', this.type, this.id, res);// eslint-disable-line no-console
      this.$dispatch('remove', this);
    } catch (e) {
      throw epinioExceptionToErrorsArray(e);
    }
  }

  async bulkRemove(items, opt = {}) {
    if ( !opt.url ) {
      opt.url = (this.links || {})['self'].replace(/\/[^\/]+$/, '?');
    }
    opt.method = 'delete';

    // Separates the resources by namespace
    const _byNamespace = items.reduce((acc, cur) => {
      const { namespace, name } = cur.meta;

      if (!acc[namespace]) {
        acc[namespace] = [];
      }

      acc[namespace].push(name);

      return acc;
    }, {});

    const resPerNS = buildBulkLink(_byNamespace, this.type);

    // Call the bulk remove for each namespace
    for await (const [key, value] of Object.entries(resPerNS)) {
      opt.url = `${ opt.url?.replace(/\/([^\/]*)\/([^\/]*)\/([^\/]*)\/([^\/]*)/, `/$1/$2/$3/${ key }`) }${ value }`;

      await this.$dispatch('request', { opt, type: this.type });

      console.log('### Resource Bulk Remove', this.type, this.id, opt); // eslint-disable-line no-console
    }

    this.$dispatch('remove', this);
  }
}
