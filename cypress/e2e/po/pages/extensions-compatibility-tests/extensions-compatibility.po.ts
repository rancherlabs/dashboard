import PagePo from '@/cypress/e2e/po/pages/page.po';
import { InstallChartPage } from '@/cypress/e2e/po/pages/explorer/charts/install-charts.po';
import Kubectl from '@/cypress/e2e/po/components/kubectl.po';
import ChartInstalledAppsPagePo from '@/cypress/e2e/po/pages/chart-installed-apps.po';
import ProductNavPo from '@/cypress/e2e/po/side-bars/product-side-nav.po';
import BaseResourceList from '@/cypress/e2e/po/lists/base-resource-list.po';
import CodeMirrorPo from '@/cypress/e2e/po/components/code-mirror.po';
import AsyncButtonPo from '@/cypress/e2e/po/components/async-button.po';
import LabeledInputPo from '@/cypress/e2e/po/components/labeled-input.po';
import CheckboxInputPo from '@/cypress/e2e/po/components/checkbox-input.po';
import TabbedPo from '@/cypress/e2e/po/components/tabbed.po';
import ResourceTablePo from '@/cypress/e2e/po/components/resource-table.po';
import LabeledSelectPo from '@/cypress/e2e/po/components/labeled-select.po';

const installChart = new InstallChartPage();
const terminal = new Kubectl();
const installedApps = new ChartInstalledAppsPagePo();

export default class ExtensionsCompatibiliyPo extends PagePo {
  title(selector: string): Cypress.Chainable<string> {
    return this.self().find(selector).invoke('text');
  }

  waitForTitle(selector: string, title: string) {
    return this.title(selector).should('contain', title);
  }

  goToInstallChartPage(clusterId:string, queryParams = '') {
    return installChart.goTo(clusterId, queryParams);
  }

  waitForInstallChartPage(repoName:string, chartName:string) {
    return installChart.waitForChartPage(repoName, chartName);
  }

  chartInstallNext() {
    return installChart.nextPage();
  }

  chartInstallClick() {
    return installChart.installChart();
  }

  chartInstallWaitForInstallationAndCloseTerminal(interceptName: string, installableParts: Array<String>, beforeTimeout = 15000, requestTimeout = 20000) {
    cy.wait(`@${ interceptName }`, { requestTimeout }).its('response.statusCode').should('eq', 201);

    // giving it a small buffer so that the install is properly triggered
    cy.wait(beforeTimeout); // eslint-disable-line cypress/no-unnecessary-waiting
    terminal.closeTerminal();

    installableParts.forEach((item:string) => {
      installedApps.list().state(item).should('contain', 'Deployed');
    });

    // timeout to give time for everything to be setup, otherwise the extension
    // won't find the chart and show the correct screen
    return cy.wait(10000); // eslint-disable-line cypress/no-unnecessary-waiting
  }

  chartInstallWaitForUpgradeAndCloseTerminal(interceptName: string, beforeTimeout = 15000) {
    cy.wait(`@${ interceptName }`, { requestTimeout: 20000 }).its('response.statusCode').should('eq', 201);

    // giving it a small buffer so that the install is properly triggered
    cy.wait(beforeTimeout); // eslint-disable-line cypress/no-unnecessary-waiting
    terminal.closeTerminal();

    cy.get('.masthead-state.badge-state').invoke('text').should('contain', 'Deployed');

    // timeout to give time for everything to be setup, otherwise the extension
    // won't find the chart and show the correct screen
    return cy.wait(10000); // eslint-disable-line cypress/no-unnecessary-waiting
  }

  genericWaitForAppToInstall(appName: string, isTerminalOp = true) {
    if (isTerminalOp) {
      cy.wait(20000); // eslint-disable-line cypress/no-unnecessary-waiting
      terminal.closeTerminal();
    }
    installedApps.list().state(appName).should('contain', 'Deployed');

    return cy.wait(10000); // eslint-disable-line cypress/no-unnecessary-waiting
  }

  sideMenuNavTo(label: string) {
    const sideNav = new ProductNavPo();

    sideNav.navToSideMenuEntryByExactLabel(label);
  }

  genericListView(): BaseResourceList {
    return new BaseResourceList(this.self());
  }

  goToDetailsPage(elemName: string) {
    const resourceTable = new ResourceTablePo(this.self());

    return resourceTable.sortableTable().detailsPageLinkWithName(elemName).click();
  }

  createFromYamlClick(): Cypress.Chainable {
    return this.genericListView().masthead().createYaml();
  }

  createClick(): Cypress.Chainable {
    return this.genericListView().masthead().create();
  }

  genericNameInput() {
    return LabeledInputPo.bySelector(this.self(), '[data-testid="name-ns-description-name"]');
  }

  genericNamespaceInput(): LabeledSelectPo {
    return new LabeledSelectPo('[data-testid="name-ns-description-namespace"]');
  }

  genericLabeledInputByLabel(label:string): LabeledInputPo {
    return LabeledInputPo.byLabel(this.self(), label);
  }

  genericYamlEditor(): CodeMirrorPo {
    return CodeMirrorPo.bySelector(this.self(), '[data-testid="yaml-editor-code-mirror"]');
  }

  saveEditYamlForm(): AsyncButtonPo {
    return new AsyncButtonPo('[data-testid="action-button-async-button"]', this.self());
  }

  saveOrCreateResource(): AsyncButtonPo {
    return new AsyncButtonPo('[data-testid="form-save"]', this.self());
  }

  saveOrCreateCluster(): AsyncButtonPo {
    return new AsyncButtonPo('[data-testid="rke2-custom-create-save"]', this.self());
  }

  genericCheckboxByLabel(label:string): CheckboxInputPo {
    return CheckboxInputPo.byLabel(this.self(), label);
  }

  clickGenericTab(selector: string) {
    const tab = new TabbedPo();

    return tab.clickTabWithSelector(selector);
  }
}
