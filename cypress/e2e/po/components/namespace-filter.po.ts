import ComponentPo from '@/cypress/e2e/po/components/component.po';
export class NamespaceFilterPo extends ComponentPo {
  constructor() {
    super('[data-testid="namespaces-filter"]');
  }

  toggle() {
    return this.self().click({ force: true });
  }

  getOptions(): Cypress.Chainable {
    return this.self().get('.ns-options');
  }

  clickOption(optionIndex: number, label: string) {
    return this.getOptions().find(`[data-testid="namespaces-option-${ optionIndex }"]`).contains(label).click();
  }

  isChecked(optionIndex: number, label: string) {
    return this.getOptions().find(`[data-testid="namespaces-option-${ optionIndex }"]`).contains(label).next('i')
      .then(($el) => expect($el).have.class('icon-checkmark'));
  }

  checkIcon() {
    return this.self().find('.icon-checkmark');
  }

  namespaceDropdown() {
    return cy.getId('namespaces-dropdown');
  }

  searchByName(label: string) {
    return this.self().find('.ns-controls > .ns-input').clear().type(label);
  }

  clearSearchFilter() {
    return this.self().find('.ns-filter-clear').click();
  }

  clearSelectionButton() {
    return this.self().find('.ns-controls > .ns-clear').click();
  }

  selectedValues() {
    return this.namespaceDropdown().find('[data-testid="namespaces-values"]');
  }

  moreOptionsSelected() {
    return this.namespaceDropdown().find('.ns-more');
  }

  closeDropdown() {
    this.namespaceDropdown().find('.icon-chevron-up').click();
  }
}
