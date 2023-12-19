import PodSecurityPoliciesTemplatesPagePo from '@/cypress/e2e/po/pages/cluster-manager/pod-security-policy-templates.po';
import EmberPromptRemove from '@/cypress/e2e/po/components/ember/ember-prompt-remove.po';

describe('Pod Security Policy Templates', { testIsolation: 'off', tags: ['@manager', '@adminUser'] }, () => {
  const podSecurityTemplatesPage = new PodSecurityPoliciesTemplatesPagePo('_');
  const runTimestamp = +new Date();
  const templateName = `e2e-pod-security-template-name-${ runTimestamp }`;
  const templateDescription = `e2e-pod-security-template-description-${ runTimestamp }`;

  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.viewport(1380, 720);
  });

  it('can create a policy template', () => {
    PodSecurityPoliciesTemplatesPagePo.navTo();
    podSecurityTemplatesPage.waitForPage();
    podSecurityTemplatesPage.addPolicyTemplate().click();
    podSecurityTemplatesPage.addPodSecurityTemplateForm().templateName().set(templateName);
    cy.intercept('POST', '/v3/podsecuritypolicytemplate').as('createPolicyTemplate');
    podSecurityTemplatesPage.addPodSecurityTemplateForm().create();
    cy.wait('@createPolicyTemplate');

    // check list details
    podSecurityTemplatesPage.list().rowWithName(templateName).should('be.visible');
  });

  it('can edit a policy template', () => {
    PodSecurityPoliciesTemplatesPagePo.navTo();
    podSecurityTemplatesPage.list().rowActionMenuOpen(templateName);
    podSecurityTemplatesPage.actionMenu().selectMenuItemByLabel('Edit');

    // update template by adding a description
    podSecurityTemplatesPage.addPodSecurityTemplateForm().addDescription();
    podSecurityTemplatesPage.addPodSecurityTemplateForm().templateDescription().set(templateDescription);
    cy.intercept('PUT', '/v3/podSecurityPolicyTemplates/**').as('updatePolicyTemplate');
    podSecurityTemplatesPage.addPodSecurityTemplateForm().save();
    cy.wait('@updatePolicyTemplate');

    podSecurityTemplatesPage.list().rowWithName(templateName).find('a').click();

    podSecurityTemplatesPage.templateDescription(templateDescription).should('be.visible');
  });

  it('can delete a policy template', () => {
    PodSecurityPoliciesTemplatesPagePo.navTo();
    podSecurityTemplatesPage.list().rowActionMenuOpen(templateName);
    podSecurityTemplatesPage.actionMenu().selectMenuItemByLabel('Delete');

    const promptRemove = new EmberPromptRemove();

    cy.intercept('DELETE', '/v3/podSecurityPolicyTemplates/**').as('deletePolicyTemplate');
    promptRemove.delete();
    cy.wait('@deletePolicyTemplate');
    podSecurityTemplatesPage.waitForPage();

    // check list details
    cy.contains(templateName).should('not.exist');
  });
});
