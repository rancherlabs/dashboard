import find from 'lodash/find';
import { POD } from '@shell/config/types';
import SteveModel from '@shell/plugins/steve/steve-class';
import { proxyUrlFromBase, _getPodRelationship, _getPods } from '@shell/plugins/steve/resourceUtils/service';

export const DEFAULT_SERVICE_TYPES = [
  {
    id:          'ClusterIP',
    label:       'servicesPage.serviceTypes.clusterIp.label',
    description: 'servicesPage.serviceTypes.clusterIp.description',
    bannerAbbrv: 'servicesPage.serviceTypes.clusterIp.abbrv',
  },
  {
    id:          'ExternalName',
    label:       'servicesPage.serviceTypes.externalName.label',
    description: 'servicesPage.serviceTypes.externalName.description',
    bannerAbbrv: 'servicesPage.serviceTypes.externalName.abbrv',
  },
  {
    id:          'Headless',
    label:       'servicesPage.serviceTypes.headless.label',
    description: 'servicesPage.serviceTypes.headless.description',
    bannerAbbrv: 'servicesPage.serviceTypes.headless.abbrv',
  },
  {
    id:          'LoadBalancer',
    label:       'servicesPage.serviceTypes.loadBalancer.label',
    description: 'servicesPage.serviceTypes.loadBalancer.description',
    bannerAbbrv: 'servicesPage.serviceTypes.loadBalancer.abbrv',
  },
  {
    id:          'NodePort',
    label:       'servicesPage.serviceTypes.nodePort.label',
    description: 'servicesPage.serviceTypes.nodePort.description',
    bannerAbbrv: 'servicesPage.serviceTypes.nodePort.abbrv',
  },
];

export const HEADLESS = (() => {
  const headless = find(DEFAULT_SERVICE_TYPES, ['id', 'Headless']);

  return headless.id;
})();

export const CLUSTERIP = (() => {
  const clusterIp = find(DEFAULT_SERVICE_TYPES, ['id', 'ClusterIP']);

  return clusterIp.id;
})();

export default class extends SteveModel {
  get customValidationRules() {
    return [
      {
        nullable:       false,
        path:           'metadata.name',
        required:       true,
        translationKey: 'generic.name',
        type:           'dnsLabel',
      },
      {
        nullable:   false,
        path:       'spec',
        required:   true,
        type:       'array',
        validators: ['servicePort'],
      },
      {
        nullable:   true,
        path:       'spec',
        required:   true,
        type:       'string',
        validators: ['clusterIp'],
      },
      {
        nullable:   true,
        path:       'spec',
        required:   true,
        type:       'array',
        validators: ['externalName'],
      },
    ];
  }

  get details() {
    const out = [{
      label:   this.t('generic.type'),
      content: this.serviceType?.id || this.serviceType,
    }];

    const {
      clusterIP, externalName, sessionAffinity, loadBalancerIP
    } = this.spec;

    if (clusterIP) {
      out.push({
        label:   this.t('servicesPage.serviceTypes.clusterIp.label'),
        content: clusterIP,
      });
    }

    if (this.serviceType === 'LoadBalancer') {
      const statusIps = this.status.loadBalancer?.ingress?.map(ingress => ingress.hostname || ingress.ip).join(', ');

      const loadbalancerInfo = loadBalancerIP || statusIps || '';

      if (loadbalancerInfo) {
        out.push({
          label:   this.t('servicesPage.ips.loadBalancer.label'),
          content: loadbalancerInfo
        });
      }
    }

    if (externalName) {
      out.push({
        label:   this.t('servicesPage.serviceTypes.externalName.label'),
        content: externalName,
      });
    }

    if (sessionAffinity) {
      out.push({
        label:   this.t('servicesPage.affinity.label'),
        content: sessionAffinity,
      });
    }

    return out;
  }

  get podRelationship() {
    return _getPodRelationship(this);
  }

  async fetchPods() {
    if (this.podRelationship) {
      await this.$dispatch('cluster/findMatching', {
        type:      POD,
        selector:  this.podRelationship.selector,
        namespace: this.namespace
      }, { root: true });
    }
  }

  get pods() {
    return _getPods(this, this.$getters, this.$rootGetters);
  }

  get serviceType() {
    const serviceType = this.spec?.type;
    const clusterIp = this.spec?.clusterIP;
    const defaultService = find(DEFAULT_SERVICE_TYPES, ['id', CLUSTERIP]);

    if (serviceType) {
      if (serviceType === CLUSTERIP && clusterIp === 'None') {
        return HEADLESS;
      } else {
        return serviceType;
      }
    }

    return defaultService;
  }

  proxyUrl(scheme, port) {
    const view = this.linkFor('view');
    const idx = view.lastIndexOf(`/`);

    return proxyUrlFromBase(view.slice(0, idx), scheme, this.metadata.name, port);
  }
}
