import PagePo from '@/cypress/e2e/po/pages/page.po';
import BaseResourceList from '@/cypress/e2e/po/lists/base-resource-list.po';
import LabeledInputPo from '@/cypress/e2e/po/components/labeled-input.po';
import AsyncButtonPo from '@/cypress/e2e/po/components/async-button.po';
import LabeledSelectPo from '@/cypress/e2e/po/components/labeled-select.po';
import WorkloadPo from '@/cypress/e2e/po/pages/explorer/workloads.po';


export class workloadDetailsPageBasePo extends PagePo {
  static url: string;

  private static createPath(
    workloadId: string,
    clusterId: string,
    workloadType: string,
    namespaceId: string,
    queryParams?: { [key: string]: string }
  ) {
    const urlStr = `/c/${clusterId}/explorer/${workloadType}/${namespaceId}/${workloadId}`;

    if (!queryParams) {
      return urlStr;
    }

    const params = new URLSearchParams(queryParams);

    return `${urlStr}?${params.toString()}`;
  }

  static goTo(): Cypress.Chainable<Cypress.AUTWindow> {
    return super.goTo(this.url);
  }

  constructor(workloadId: string, clusterId: string, workloadType: string, queryParams?: { [key: string]: string }, namespaceId = 'default') {
    super(workloadDetailsPageBasePo.createPath(workloadId, clusterId, workloadType, namespaceId, queryParams));

    workloadDetailsPageBasePo.url = workloadDetailsPageBasePo.createPath(
      workloadId,
      clusterId,
      workloadType,
      namespaceId,
      queryParams
    );
  }

  private workload() {
    return new WorkloadPo();
  }

  deleteWithKubectl(name: string, namespace: string = 'default') {
    this.workload().deleteWithKubectl(name, namespace);
  }

  createWithKubectl(blueprintJson: string | Object, wait = 6000) {
    this.workload().createWithKubectl(blueprintJson, wait);
  }
}


export class WorkloadsListPageBasePo extends PagePo {

  static createPath(clusterId: string, workloadType: string, queryParams?: { [key: string]: string }) {
    const urlStr = `/c/${clusterId}/explorer/${workloadType}`;

    if (!queryParams) {
      return urlStr;
    }

    const params = new URLSearchParams(queryParams);

    return `${urlStr}?${params.toString()}`;
  }

  constructor(clusterId: string = 'local', workloadType: string, queryParams?: { [key: string]: string }) {
    super(WorkloadsListPageBasePo.createPath(clusterId, workloadType, queryParams));
  }

  navigateToCreatePage() {
    const baseResourceList = new BaseResourceList(this.self());

    return baseResourceList.masthead().actions().eq(0).click();
  }

  resourceSortableTable() {
    const baseResourceList = new BaseResourceList(this.self());
    return baseResourceList.resourceTable().sortableTable()

  }

  listElementWithName(name: string) {
    this.resourceSortableTable().rowElementWithName(name);
  }

  goToDetailsPage(elemName: string) {
    return this.resourceSortableTable().detailsPageLinkWithName(elemName).click();
  }
}


export class WorkloadsCreatePageBasePo extends PagePo {

  static createPath(clusterId: string, workloadType: string, queryParams?: { [key: string]: string }) {
    const urlStr = `/c/${clusterId}/explorer/${workloadType}/create`;

    if (!queryParams) {
      return urlStr;
    }

    const params = new URLSearchParams(queryParams);

    return `${urlStr}?${params.toString()}`;
  }

  constructor(clusterId: string = 'local', workloadType: string, queryParams?: { [key: string]: string }) {
    super(WorkloadsCreatePageBasePo.createPath(clusterId, workloadType, queryParams));
  }

  selectNamespaceOption(index: number) {
    const selectVerb = new LabeledSelectPo(`[data-testid="name-ns-description-namespace"]`, this.self());

    selectVerb.toggle();
    selectVerb.clickOption(index);
  }

  namespace(): LabeledInputPo {
    return LabeledInputPo.byLabel(this.self(), 'Namespace');
  }

  name() {
    return LabeledInputPo.bySelector(this.self(), '[data-testid="name-ns-description-name"]');
  }

  containerImage(): LabeledInputPo {
    return LabeledInputPo.byLabel(this.self(), 'Container Image');
  }

  saveCreateForm(): AsyncButtonPo {
    return new AsyncButtonPo('[data-testid="form-save"]', this.self());
  }

  createWithUI(name: string, containerImage: string, namespace: string = 'default', namespaceOption = 1) {
    this.selectNamespaceOption(namespaceOption);
    this.namespace().set(namespace);
    this.name().set(name);
    this.containerImage().set(containerImage);
    this.saveCreateForm().click();
  }

  private workload() {
    return new WorkloadPo();
  }

  deleteWithKubectl(name: string, namespace: string = 'default') {
    this.workload().deleteWithKubectl(name, namespace);
  }

  createWithKubectl(blueprintJson: string | Object, wait = 6000) {
    this.workload().createWithKubectl(blueprintJson, wait);
  }

  // waitForCreate() {
  //   cy.interceptAny
  // }

}
