import PagePo from '@/cypress/e2e/po/pages/page.po';
import YamlEditor from '@/cypress/e2e/po/components/yaml-editor.po';
import MachineSetsCreateEditPo from '@/cypress/e2e/po/edit/machine-sets.po';
import MachineSetsListPo from '@/cypress/e2e/po/lists/machine-set-list.po';

export default class MachineSetsPagePo extends PagePo {
  private static createPath(clusterId: string) {
    return `/c/${ clusterId }/manager/cluster.x-k8s.io.machineset`;
  }

  static goTo(clusterId: string): Cypress.Chainable<Cypress.AUTWindow> {
    return super.goTo(MachineSetsPagePo.createPath(clusterId));
  }

  constructor(private clusterId = 'local') {
    super(MachineSetsPagePo.createPath(clusterId));
  }

  create() {
    return this.self().find('[data-testid="masthead-create-yaml"]').click();
  }

  createEditMachineSet(nsName?: string, machineSetName?: string): MachineSetsCreateEditPo {
    return new MachineSetsCreateEditPo(this.clusterId, nsName, machineSetName);
  }

  list(): MachineSetsListPo {
    return new MachineSetsListPo('[data-testid="cluster-list-container"]');
  }

  yamlEditor(): YamlEditor {
    return new YamlEditor();
  }
}
