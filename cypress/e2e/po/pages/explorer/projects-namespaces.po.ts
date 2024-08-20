import PagePo from '@/cypress/e2e/po/pages/page.po';
import LabeledInputPo from '@/cypress/e2e/po/components/labeled-input.po';
import ResourceListMastheadPo from '@/cypress/e2e/po/components/ResourceList/resource-list-masthead.po';
import NameNsDescription from '@/cypress/e2e/po/components/name-ns-description.po';
import AsyncButtonPo from '@/cypress/e2e/po/components/async-button.po';
import TabbedPo from '@/cypress/e2e/po/components/tabbed.po';
import SortableTablePo from '@/cypress/e2e/po/components/sortable-table.po';

class ProjectNamespaceDetailPagePo extends PagePo {
  private static createPath(clusterId: string, id: string) {
    return `/c/${ clusterId }/explorer/namespace/${ id }`;
  }

  goTo(clusterId: string, id: string): Cypress.Chainable<Cypress.AUTWindow> {
    return super.goTo(ProjectNamespaceDetailPagePo.createPath(clusterId, id));
  }

  constructor(clusterId: string, id: string) {
    super(ProjectNamespaceDetailPagePo.createPath(clusterId, id));
  }

  clickComplianceTab() {
    return new TabbedPo().clickTabWithSelector('[data-testid="btn-policy-report-tab"]');
  }

  complianceSortableTable() {
    return new SortableTablePo(this.self().get('#policy-report-tab .sortable-table'));
  }
}

export default class ProjectNamespacePagePo extends PagePo {
  private static createPath(clusterId: string) {
    return `/c/${ clusterId }/explorer/projectsnamespaces`;
  }

  static goTo(clusterId: string): Cypress.Chainable<Cypress.AUTWindow> {
    return super.goTo(ProjectNamespacePagePo.createPath(clusterId));
  }

  constructor(clusterId: string) {
    super(ProjectNamespacePagePo.createPath(clusterId));
  }

  namespaceDetail(clusterId: string, id: string) {
    return new ProjectNamespaceDetailPagePo(clusterId, id);
  }

  flatListButton() {
    return this.self().getId('button-group-child-0');
  }

  flatListClick(): Cypress.Chainable {
    return this.flatListButton().click();
  }

  createProjectNamespaceButton() {
    return this.self().getId('create_project_namespaces');
  }

  createProjectNamespaceClick(): Cypress.Chainable {
    return this.createProjectNamespaceButton().click();
  }

  createProjectButtonClick(): Cypress.Chainable {
    return new ResourceListMastheadPo(this.self()).create();
  }

  nameNsDescription() {
    return new NameNsDescription(this.self());
  }

  nsProject() {
    return this.nameNsDescription().project();
  }

  name() {
    return this.nameNsDescription().name();
  }

  tabResourceQuotas() {
    return this.self().getId('btn-resource-quotas');
  }

  btnAddResource() {
    return this.self().getId('array-list-button');
  }

  inputProjectLimit() {
    return new LabeledInputPo(cy.get('[data-testid="projectrow-project-quota-input"]'));
  }

  inputNamespaceDefaultLimit() {
    return new LabeledInputPo(cy.get('[data-testid="projectrow-namespace-quota-input"]'));
  }

  buttonSubmit() {
    return new AsyncButtonPo(this.self().getId('form-save'));
  }

  tabContainerDefaultResourceLimit() {
    return this.self().getId('btn-container-default-resource-limit');
  }

  inputCpuReservation() {
    return new LabeledInputPo(cy.get('[data-testid="cpu-reservation"]'));
  }

  inputMemoryReservation() {
    return new LabeledInputPo(cy.get('[data-testid="memory-reservation"]'));
  }

  inputCpuLimit() {
    return new LabeledInputPo(cy.get('[data-testid="cpu-limit"]'));
  }

  inputMemoryLimit() {
    return new LabeledInputPo(cy.get('[data-testid="memory-limit"]'));
  }

  bannerError(n: number) {
    return this.self().getId(`error-banner${ n }`);
  }
}
