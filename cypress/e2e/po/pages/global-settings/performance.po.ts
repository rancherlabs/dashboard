import AsyncButtonPo from '~/cypress/e2e/po/components/async-button.po';
import CheckboxInputPo from '~/cypress/e2e/po/components/checkbox-input.po';
import LabeledInputPo from '~/cypress/e2e/po/components/labeled-input.po';
import RootClusterPage from '~/cypress/e2e/po/pages/root-cluster-page';

export class PerformancePagePo extends RootClusterPage {
  static url: string = '/c/_/settings/performance'
  static goTo(): Cypress.Chainable<Cypress.AUTWindow> {
    return super.goTo(PerformancePagePo.url);
  }

  constructor() {
    super(PerformancePagePo.url);
  }

  inactivityCheckbox(): CheckboxInputPo {
    return CheckboxInputPo.byLabel(this.self(), 'Enable inactivity session expiration ');
  }

  inactivityInput() {
    return LabeledInputPo.byLabel(this.self(), 'Inactivity timeout (minutes) ');
  }

  inactivityModal() {
    return cy.get("[data-testid='mvc__card']");
  }

  inactivityModalCard() {
    return cy.get("[data-testid=card-title-slot']");
  }

  applyButton() {
    return new AsyncButtonPo('[data-testid="performance__save-btn"]', this.self());
  }

  restoresSettings() {
    this.inactivityInput().clear().type('900');
    this.inactivityCheckbox().set();
    this.applyButton().click();
  }
}
