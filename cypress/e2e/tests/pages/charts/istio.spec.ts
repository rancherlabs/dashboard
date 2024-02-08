import { ChartsPage } from '@/cypress/e2e/po/pages/charts.po';
import ClusterDashboardPagePo from '@/cypress/e2e/po/pages/explorer/cluster-dashboard.po';
import ProductNavPo from '@/cypress/e2e/po/side-bars/product-side-nav.po';
import BurgerMenuPo from '@/cypress/e2e/po/side-bars/burger-side-menu.po';

describe('Charts', { tags: ['@charts', '@adminUser'] }, () => {
  const clusterName = 'local';
  const chartsPageUrl = '/c/local/apps/charts/chart?repo-type=cluster&repo=rancher-charts';

  describe('Istio', () => {
    const istioVersion = '103.1.0%2Bup1.19.5';

    const chartsIstioPage = `${ chartsPageUrl }&chart=rancher-istio&version=${ istioVersion }`;

    const chartsPage: ChartsPage = new ChartsPage(chartsIstioPage);

    beforeEach(() => {
      cy.login();
    });

    describe('Istio local provisioner config', () => {
      it('Should install Istio', () => {
        chartsPage.goTo();
        chartsPage.goToInstall().nextPage();

        // check if burguer menu nav is highlighted correctly for local cluster (apps is a different prod than explorer)
        BurgerMenuPo.checkIfClusterMenuLinkIsHighlighted('local');

        chartsPage.installChart();
      });

      it('Side-nav should contain Istio menu item', () => {
        const clusterDashboard = new ClusterDashboardPagePo(clusterName);

        clusterDashboard.goTo();

        const productMenu = new ProductNavPo();
        const IstioNavItem = productMenu.groups().contains('Istio');

        IstioNavItem.should('exist');

        IstioNavItem.click();

        cy.contains('Overview').should('exist');
        cy.contains('Powered by Istio').should('exist');
      });
    });
  });
});
