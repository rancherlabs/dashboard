import PagePo from '@/cypress/e2e/po/pages/page.po';
import ClusterManagerCreatePagePo from '@/cypress/e2e/po/edit/provisioning.cattle.io.cluster/create/cluster-create.po';
import EmberInputPo from '@/cypress/e2e/po/components/ember/ember-input.po';
import ClusterManagerCreateRKE1PagePo from '@/cypress/e2e/po/edit/provisioning.cattle.io.cluster/create/cluster-create-rke1.po';
import EmberAccordionPo from '@/cypress/e2e/po/components/ember/ember-accordion.po';
import EmberFormMembersPo from '@/cypress/e2e/po/components/ember/ember-form-members.po';
import EmberCheckboxInputPo from '@/cypress/e2e/po/components/ember/ember-checkbox-input.po';
import EmberSelectPo from '@/cypress/e2e/po/components/ember/ember-select.po';

/**
 * Create page for an RKE1 amazonec2 cluster
 */
export default class ClusterManagerCreateRke1Amazonec2PagePo extends ClusterManagerCreateRKE1PagePo {
  static url = `${ ClusterManagerCreatePagePo }/create?type=amazonec2`
  static goTo(): Cypress.Chainable<Cypress.AUTWindow> {
    return PagePo.goTo(ClusterManagerCreateRke1Amazonec2PagePo.url);
  }

  goToAmazonec2ClusterCreation(): Cypress.Chainable<Cypress.AUTWindow> {
    return PagePo.goTo(`${ ClusterManagerCreatePagePo }?type=amazonec2`);
  }

  clusterName(): EmberInputPo {
    return new EmberInputPo('[data-testid="form-name-description__name"]');
  }

  memberRoles(): EmberAccordionPo {
    return new EmberAccordionPo('cru-cluster__members');
  }

  memberRolesFormMembers(): EmberFormMembersPo {
    return new EmberFormMembersPo('[data-testid="cru-cluster__members__form"]') ;
  }

  clusterTemplateCheckbox(): EmberCheckboxInputPo {
    return new EmberCheckboxInputPo('.cluster-template-select');
  }

  nodeTemplateDropdown(): EmberSelectPo {
    return new EmberSelectPo('.main-row .new-select > select');
  }

  rkeTemplateAndRevisionDropdown(): EmberSelectPo {
    return new EmberSelectPo('.new-select > select');
  }

  selectedOption(): EmberSelectPo {
    return new EmberSelectPo('.new-select > select option:selected');
  }
}
