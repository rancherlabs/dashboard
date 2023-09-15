import HomePagePo from '@/cypress/e2e/po/pages/home.po';
import SupportPagePo from '@/cypress/e2e/po/pages/get-support.po';
import BurgerMenuPo from '@/cypress/e2e/po/side-bars/burger-side-menu.po';

const burgerMenu = new BurgerMenuPo();
const supportPage = new SupportPagePo();

describe('Support Page', { testIsolation: 'off' }, () => {
  before(() => {
    cy.login();
  });

  it('can navigate to Support page', { tags: '@adminUser' }, () => {
    HomePagePo.goToAndWaitForGet();
    SupportPagePo.navTo();
    supportPage.waitForPage();
  });

  it('standard user does not have access to Support page', { tags: '@standardUser' }, () => {
    HomePagePo.goToAndWaitForGet();
    BurgerMenuPo.toggle();
    burgerMenu.support().should('not.exist');
  });

  describe('Support Links', { tags: '@adminUser' }, () => {
    // Click the support links and verify user lands on the correct page
    before(() => {
      cy.login();
    });

    beforeEach(() => {
      supportPage.goTo();
    });

    it.skip('can click on Docs link', () => {
      supportPage.supportLinks().should('have.length', 6);

      // click Docs link -- this test will sometimes fail due to https://github.com/rancher/rancher-docs/issues/727
      // skipping this test until issue is resolved
      supportPage.clickSupportLink(0, true);
      cy.origin('https://ranchermanager.docs.rancher.com', () => {
        cy.url().should('include', 'ranchermanager.docs.rancher.com');
      });
    });

    it('can click on Forums link', () => {
    // click Forums link
      supportPage.clickSupportLink(1, true);
      cy.origin('https://forums.rancher.com', () => {
        cy.url().should('include', 'forums.rancher.com/');
      });
    });

    it('can click on Slack link', () => {
    // click Slack link
      supportPage.clickSupportLink(2, true);
      cy.origin('https://slack.rancher.io', () => {
        cy.url().should('include', 'slack.rancher.io/');
      });
    });

    it('can click on File an Issue link', () => {
    // click File an Issue link
      supportPage.clickSupportLink(3, true);
      cy.origin('https://github.com', () => {
        cy.url().should('include', 'github.com/login');
      });
    });

    it('can click on Get Started link', () => {
    // click Get Started link
      supportPage.clickSupportLink(4);
      cy.url().should('include', 'docs/getting-started');
    });

    it('can click on Contact us for pricing link', () => {
      supportPage.clickExternalSupportLinks(1);
      cy.origin('https://www.rancher.com/pricing', () => {
        cy.url().should('include', 'pricing');
      });
    });

    it('can click on Suse Rancher Support link', () => {
      supportPage.clickExternalSupportLinks(0);
      cy.origin('https://www.suse.com/suse-rancher/support-matrix', () => {
        cy.on('uncaught:exception', () => false);
        cy.url().should('include', 'suse-rancher/support-matrix');
      });
    });
  });
});
