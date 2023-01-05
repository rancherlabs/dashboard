import { ADDRESSES, CAPI, NODE } from '@shell/config/types';
import { CAPI as CAPI_LABELS, MACHINE_ROLES } from '@shell/config/labels-annotations';
import { NAME as EXPLORER } from '@shell/config/product/explorer';
import { listNodeRoles } from '@shell/models/cluster/node';
import { escapeHtml } from '@shell/utils/string';
import { insertAt, findBy } from '@shell/utils/array';
import { get } from '@shell/utils/object';
import { downloadUrl } from '@shell/utils/download';
import SteveModel from '@shell/plugins/steve/steve-class';

/**
 * Prevent scaling down control plane or etcd machines to zero
 *
 * @param {machine | machineDeployment} current
 * @param {machine[]} all
 * @returns
 */
export function notOnlyOfRole(current, all) {
  // This is a little overly optimised but avoids iterating over all machines every time

  const foundType = { };

  if (current.isControlPlane) {
    foundType.isControlPlane = false;
  }
  if (current.isEtcd) {
    foundType.isEtcd = false;
  }
  if (Object.keys(foundType).length === 0) {
    return true; // It's neither type, so can always scale down
  }

  // If we have more than one of the required types then it's not the last of that type and can be scaled down
  for (const m of all) {
    Object.keys(foundType).forEach((type) => {
      // Have we found this type?
      if (m[type]) {
        if (foundType[type]) {
          // Another of this type exists, we don't need to check for it further
          delete foundType[type];
        } else {
          // Record that we've found type
          foundType[type] = true;
        }
      }
    });

    // Are there no types left to look for?
    if (Object.keys(foundType).length === 0) {
      return true;
    }
  }

  return false;
}
export default class CapiMachine extends SteveModel {
  get _availableActions() {
    const out = super._availableActions;

    const openSsh = {
      action:  'openSsh',
      enabled: !!this.links.shell && this.isRunning,
      icon:    'icon icon-fw icon-chevron-right',
      label:   'SSH Shell',
    };
    const downloadKeys = {
      action:  'downloadKeys',
      enabled: !!this.links.sshkeys,
      icon:    'icon icon-fw icon-download',
      label:   this.t('node.actions.downloadSSHKey'),
    };
    const forceRemove = {
      action:    'toggleForceRemoveModal',
      altAction: 'forceMachineRemove',
      enabled:   !!this.isRemoveForceable,
      label:     this.t('node.actions.forceDelete'),
      icon:      'icon icon-trash',
    };
    const scaleDown = {
      action:     'toggleScaleDownModal',
      bulkAction: 'toggleScaleDownModal',
      enabled:    !!this.canScaleDown,
      icon:       'icon icon-minus icon-fw',
      label:      this.t('node.actions.scaleDown'),
      bulkable:   true
    };

    const canForceUpdate = this.stateObj.name !== 'running';
    const forceUpdate = {
      action:     'forceUpdate',
      bulkAction: 'forceUpdate',
      label:      this.t('action.forceUpdate'),
      icon:       'icon icon-history',
      enabled:    !!canForceUpdate,
      bulkable:   true
    };

    insertAt(out, 0, { divider: true });
    insertAt(out, 0, downloadKeys);
    insertAt(out, 0, openSsh);
    insertAt(out, 0, scaleDown);
    insertAt(out, 0, forceRemove);
    insertAt(out, 0, forceUpdate);

    return out;
  }

  get canClone() {
    return false;
  }

  openSsh() {
    this.$dispatch('wm/open', {
      id:        `${ this.id }-ssh`,
      label:     this.nameDisplay,
      icon:      'terminal',
      component: 'MachineSsh',
      attrs:     { machine: this, pod: {} }
    }, { root: true });
  }

  downloadKeys() {
    downloadUrl(this.links.sshkeys);
  }

  toggleForceRemoveModal(resources = this) {
    this.$dispatch('promptModal', {
      componentProps: { machine: resources },
      component:      'ForceMachineRemoveDialog'
    });
  }

  async forceMachineRemove() {
    const machine = await this.machineRef();

    machine.setAnnotation(CAPI_LABELS.FORCE_MACHINE_REMOVE, 'true');
    await machine.save();
  }

  toggleScaleDownModal(resources = this) {
    this.$dispatch('promptModal', {
      resources,
      component:  'ScaleMachineDownDialog',
      modalWidth: '450px'
    });
  }

  forceUpdate(resources = this) {
    this.$dispatch('promptModal', {
      resources,
      component:  'ForceUpdateMachinePlanDialog',
      modalWidth: '350px'
    });
  }

  async machineRef() {
    const ref = this.spec.infrastructureRef;
    const id = `${ ref.namespace }/${ ref.name }`;
    const kind = `rke-machine.cattle.io.${ ref.kind.toLowerCase() }`;

    return await this.$dispatch('find', { type: kind, id });
  }

  get cluster() {
    if ( !this.spec.clusterName ) {
      return null;
    }

    const clusterId = `${ this.metadata.namespace }/${ this.spec.clusterName }`;

    const cluster = this.$rootGetters['management/byId'](CAPI.RANCHER_CLUSTER, clusterId);

    return cluster;
  }

  get poolName() {
    return this.metadata?.labels?.[ CAPI_LABELS.DEPLOYMENT_NAME ] || '';
  }

  get poolId() {
    const poolId = `${ this.metadata.namespace }/${ this.poolName }`;

    return poolId;
  }

  get pool() {
    return this.$rootGetters['management/byId'](CAPI.MACHINE_DEPLOYMENT, this.poolId);
  }

  get operatingSystem() {
    return this.metadata?.labels['cattle.io/os'] || 'linux';
  }

  get kubeNodeDetailLocation() {
    const kubeId = this.status?.nodeRef?.name;
    const cluster = this.cluster?.status?.clusterName;

    if ( kubeId && cluster ) {
      return {
        name:   'c-cluster-product-resource-id',
        params: {
          cluster:  this.cluster.status.clusterName,
          product:  EXPLORER,
          resource: NODE,
          id:       kubeId
        }
      };
    }

    return kubeId;
  }

  get groupByLabel() {
    const name = this.cluster?.nameDisplay || this.spec.clusterName;

    return this.$rootGetters['i18n/t']('resourceTable.groupLabel.cluster', { name: escapeHtml(name) });
  }

  get labels() {
    return this.metadata?.labels || {};
  }

  get isWorker() {
    return `${ this.labels[MACHINE_ROLES.WORKER] }` === 'true';
  }

  get isControlPlane() {
    return `${ this.labels[MACHINE_ROLES.CONTROL_PLANE] }` === 'true';
  }

  get isEtcd() {
    return `${ this.labels[MACHINE_ROLES.ETCD] }` === 'true';
  }

  get isRemoveForceable() {
    const conditions = get(this, 'status.conditions');
    const reasonMessage = (findBy(conditions, 'type', 'InfrastructureReady') || {}).reason;

    if (reasonMessage === 'DeleteError') {
      return true;
    }

    return null;
  }

  get canScaleDown() {
    if (!this.canUpdate || !this.pool?.canUpdate) {
      return false;
    }

    return notOnlyOfRole(this, this.cluster.machines);
  }

  get roles() {
    const { isControlPlane, isWorker, isEtcd } = this;

    return listNodeRoles(isControlPlane, isWorker, isEtcd, this.t('generic.all'));
  }

  get isRunning() {
    return this.status?.phase === 'Running';
  }

  get internalIp() {
    // This shows in the IP address column for RKE2 nodes in the
    // list of nodes in the cluster detail page of Cluster Management.
    const internal = this.status?.addresses?.find(({ type }) => {
      return type === ADDRESSES.INTERNAL_IP;
    })?.address;

    if (internal) {
      return internal;
    }

    return this.t('generic.none');
  }

  get externalIp() {
    const external = this.status?.addresses?.find(({ type }) => {
      return type === ADDRESSES.EXTERNAL_IP;
    })?.address;

    if (external) {
      return external;
    }

    return this.t('generic.none');
  }
}
