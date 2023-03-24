import { importTypes } from '@rancher/auto-import';
import { IPlugin, IProducts } from '@shell/core/types';

import Page1 from './pages/page1.vue';
import Page2 from './pages/page2.vue';
import Page3 from './pages/page3.vue';

import { MANAGEMENT, CAPI } from '@shell/config/types';
import { allHash } from '@shell/utils/promise';

import {
  STATE,
  AGE,
  NAME as NAME_COL,
} from '@shell/config/table-headers';

// Init the package
export default function(plugin: IPlugin) {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Register function that will register product and type information
  plugin.initProducts((products: IProducts) => {
    console.error('Product registration');

    // TODO: Product options, group options erc
    // TODO: modifying an existing product's navigation

    // Simple call to add a new product that shows up in the side nav
    const advancedProduct = products.add('advanced');
    const anotherProduct = products.add('another');

    console.log('--- ADVANCED PRODUCTION DEFINITION ---', advancedProduct);
    console.log('--- ANOTHER PROD PRODUCTION DEFINITION ---', anotherProduct);

    // Add routes for this product
    // 'names' are relative here to the product name - we will prepend with the product name and a hyphen
    // would be nice if name was optional
    advancedProduct.addRoutes([
      {
        name:      'page1',
        path:      'page1',
        component: Page1
      },
      {
        name:      'page2',
        path:      'page2',
        component: Page2
      },
      {
        name:      'page3',
        path:      'page3',
        component: Page3
      }
    ]);

    advancedProduct.addNavigation([
      {
        type:  'custom-page',
        name:  'page1',
        route: 'page1',
      },
      // {
      //   type: 'resource',
      //   name: 'provisioning.cattle.io.cluster',
      // },
      'provisioning.cattle.io.cluster'
    ]);

    advancedProduct.addNavigation([
      {
        type:     'custom-page',
        name:     'page2',
        route:    'page2',
        weight:   1,
        labelKey: 'tab.custom-group-label'
      },
      {
        type:     'custom-page',
        name:     'page3',
        route:    'page3',
        weight:   2,
        labelKey: 'tab.custom-group-label'
      },
      {
        type:     'virtual-resource',
        name:     'fake-resource',
        route:    'fake-resource',
        weight:   3,
        labelKey: 'tab.custom-group-label',
        options:  {
          icon:    'gear',
          schemas: [
            {
              id:                'fake-resource',
              type:              'schema',
              collectionMethods: [],
              resourceFields:    {},
              attributes:        { namespaced: true },
            },
          ],
          getInstances: async() => { // method responsible for getting the instance data when we need to access it
            const hash = {
              rancherClusters: advancedProduct.store.dispatch('management/findAll', { type: CAPI.RANCHER_CLUSTER }),
              clusters:        advancedProduct.store.dispatch('management/findAll', { type: MANAGEMENT.CLUSTER }),
            };

            if (advancedProduct.store.getters['management/schemaFor'](MANAGEMENT.NODE)) {
              hash.nodes = advancedProduct.store.dispatch('management/findAll', { type: MANAGEMENT.NODE });
            }

            const res = await allHash(hash);

            return res.rancherClusters.map((c) => {
              return {
                ...c,
                type: 'fake-resource',
              };
            });
          },
        },
      },
      {
        type:     'resource',
        name:     'provisioning.cattle.io.cluster',
        weight:   -1, // doesn't work in this case has weight's are set globally and already defined before...
        labelKey: 'tab.custom-group-label',
      }
    ], { labelKey: 'bananas', weight: 2 });

    // **************************************************************************************************************
    // **************************************************************************************************************
    // THIS PRODUCT HAS A POST-ADD NAVIGATION CONFIGURATION EXAMPLE...
    anotherProduct.addRoutes([
      {
        name:      'page1',
        path:      'page1',
        component: Page1
      },
      {
        name:      'page2',
        path:      'page2',
        component: Page2
      },
      {
        name:      'page3',
        path:      'page3',
        component: Page3
      }
    ]);

    anotherProduct.addNavigation([
      {
        type:  'custom-page',
        name:  'page1',
        route: 'page1'
      },
      // {
      //   type:     'resource',
      //   name:     'provisioning.cattle.io.cluster',
      //   listCols: [
      //     STATE,
      //     NAME_COL,
      //     AGE
      //   ]
      // },
      'provisioning.cattle.io.cluster'
    ]);

    anotherProduct.addNavigation([
      {
        type:  'custom-page',
        name:  'page2',
        route: 'page2'
      },
      {
        type:  'custom-page',
        name:  'page3',
        route: 'page3'
      },
      {
        type:  'virtual-resource',
        name:  'fake-resource',
        route: 'fake-resource'
      }
    ], { labelKey: 'tab.custom-group-label' });

    anotherProduct.configurePage('fake-resource', {
      schemas: [
        {
          id:                'fake-resource',
          type:              'schema',
          collectionMethods: [],
          resourceFields:    {},
          attributes:        { namespaced: true },
        },
      ],
      getInstances: async() => { // method responsible for getting the instance data when we need to access it
        const hash = {
          rancherClusters: advancedProduct.store.dispatch('management/findAll', { type: CAPI.RANCHER_CLUSTER }),
          clusters:        advancedProduct.store.dispatch('management/findAll', { type: MANAGEMENT.CLUSTER }),
        };

        if (advancedProduct.store.getters['management/schemaFor'](MANAGEMENT.NODE)) {
          hash.nodes = advancedProduct.store.dispatch('management/findAll', { type: MANAGEMENT.NODE });
        }

        const res = await allHash(hash);

        return res.rancherClusters.map((c) => {
          return {
            ...c,
            type: 'fake-resource',
          };
        });
      },
    });

    anotherProduct.configurePage('page3', { weight: 3 });

    anotherProduct.configurePage('fake-resource', { weight: 2 });

    anotherProduct.configurePage('page2', { weight: 1 });

    anotherProduct.configurePage('fake-resource', {
      listCols: [
        STATE,
        NAME_COL,
        AGE
      ]
    });
  });
}
