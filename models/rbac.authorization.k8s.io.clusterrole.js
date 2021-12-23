import Role from './rbac.authorization.k8s.io.role';
import { CATTLE_API_GROUP, SUBTYPE_MAPPING } from '@/models/management.cattle.io.roletemplate';
import { uniq } from '@/utils/array';

export default class ClusterRole extends Role {
  get subtype() {
    return SUBTYPE_MAPPING.RBAC_CLUSTER_ROLE.key;
  }

  get namespaceResources() {
    return this.allResources.filter(r => r.attributes.namespaced && !r.attributes.group.includes(CATTLE_API_GROUP));
  }

  get resources() {
    return uniq(this.namespaceResources.map(r => r.attributes?.kind)).sort();
  }
}
