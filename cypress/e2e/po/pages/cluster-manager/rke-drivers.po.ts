import PagePo from '@/cypress/e2e/po/pages/page.po';
import EmberSortableTablePo from '@/cypress/e2e/po/components/ember/ember-sortable-table.po';
import EmberSelectPo from '@/cypress/e2e/po/components/ember/ember-select.po';
export default class RkeDriversPagePo extends PagePo {
  private static createPath(clusterId: string) {
    return `/c/${ clusterId }/manager/pages/rke-drivers`;
  }

  static goTo(clusterId: string): Cypress.Chainable<Cypress.AUTWindow> {
    return super.goTo(RkeDriversPagePo.createPath(clusterId));
  }

  constructor(clusterId: string) {
    super(RkeDriversPagePo.createPath(clusterId));
  }

  list(): EmberSortableTablePo {
    return new EmberSortableTablePo('table.grid.sortable-table');
  }

  refreshKubMetadata() {
    return cy.iFrame().contains('.right-buttons .btn', 'Refresh Kubernetes Metadata');
  }

  addClusterDriver() {
    return cy.iFrame().contains('.right-buttons .btn', 'Add Cluster Driver');
  }

  /**
   * Get tab by name
   * @param tabName Cluster Drivers or Node Drivers
   * @returns
   */
  tabs(tabName: string) {
    return cy.iFrame().contains('.tab-nav li', tabName);
  }

  actionMenu(): EmberSelectPo {
    return new EmberSelectPo('.ember-basic-dropdown-content');
  }
}
