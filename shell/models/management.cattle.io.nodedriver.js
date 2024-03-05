import { NORMAN } from '@shell/config/types';
import Driver from '@shell/models/driver';

export default class NodeDriver extends Driver {
  deactivate() {
    this.$dispatch('promptModal', {
      componentProps: { url: `v3/nodeDrivers/${ escape(this.id) }?action=deactivate`, name: this.nameDisplay },
      component:      'DeactivateDriverDialog'
    });
  }

  activate() {
    return this.$dispatch('rancher/request', {
      url:    `v3/nodeDrivers/${ escape(this.id) }?action=activate`,
      method: 'post',
    }, { root: true });
  }

  get basicNorman() {
    if (this.id) {
      return this.$dispatch(`rancher/find`, { id: this.id, type: NORMAN.NODE_DRIVERS }, { root: true });
    }

    return this.$dispatch(`rancher/create`, { type: NORMAN.NODE_DRIVERS, name: this.metadata.name }, { root: true });
  }
}
