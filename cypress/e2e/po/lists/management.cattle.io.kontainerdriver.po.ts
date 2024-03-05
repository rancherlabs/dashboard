import AsyncButtonPo from '@/cypress/e2e/po/components/async-button.po';
import BaseResourceList from '@/cypress/e2e/po/lists/base-resource-list.po';

/**
 * List component for api key resources
 */
export default class KontainerDriversListPo extends BaseResourceList {
  create() {
    return this.masthead().actions().eq(0).click();
  }

  refreshKubernetesMetadata(): AsyncButtonPo {
    return new AsyncButtonPo('[data-testid="kontainer-driver-refresh"]', this.self());
  }

  deactivate() {
    return cy.getId('sortable-table-deactivate');
  }

  activate() {
    return cy.getId('sortable-table-activate');
  }

  selectAll() {
    return this.resourceTable().sortableTable().selectAllCheckbox();
  }

  elements() {
    return this.resourceTable().sortableTable().rowElements();
  }

  elementWithName(name: string) {
    return this.resourceTable().sortableTable().rowElementWithName(name);
  }

  details(name: string, index: number) {
    return this.resourceTable().sortableTable().rowWithName(name).column(index);
  }

  clickRowActionMenuItem(name: string, itemLabel:string) {
    return this.resourceTable().sortableTable().rowActionMenuOpen(name).getMenuItem(itemLabel)
      .click();
  }
}
