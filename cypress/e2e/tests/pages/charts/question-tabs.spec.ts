import { ChartPage } from '@/cypress/e2e/po/pages/chart.po';
import HomePagePo from '@/cypress/e2e/po/pages/home.po';

describe('Charts Install', { tags: ['@charts', '@adminUser'] }, () => {
  describe('Question tabs', () => {
    beforeEach(() => {
      cy.login();
      HomePagePo.goTo();
    });

    const chartPage = new ChartPage();

    describe('Vsphere Cpi chart install - Tabs visibility', () => {
      it('Should not show any tabs on "Edit Options" screen if there is only 1 group', () => {
        ChartPage.navTo(null, 'vSphere CPI');
        chartPage.waitForPage(`repo-type=cluster&repo=rancher-charts&chart=rancher-vsphere-cpi&version=`);
        chartPage.goToInstall().nextPage();

        chartPage.tabsCountOnInstallQuestions().should('not.have.length');
      });
    });

    describe('NeuVector chart install - Tabs visibility', () => {
      it('Should show tabs on "Edit Options" screen because there is more than 1 group', () => {
        ChartPage.navTo(null, 'NeuVector');
        chartPage.waitForPage(`repo-type=cluster&repo=rancher-charts&chart=neuvector&version=`);

        chartPage.goToInstall().nextPage();

        chartPage.tabsCountOnInstallQuestions().should('have.length.above', 3);
      });
    });
  });
});
