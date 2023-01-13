/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  // Items name and page should be same.
  // For eg. if you rename a page you should also change that page name in item attribute under the tutorialSidebar.

  mainSidebar: [
    'home',
    {
      type:  'category',
      label: 'Getting Started',
      items: [
        'getting-started/quickstart',
        'getting-started/concepts',
        'getting-started/development_environment',
        'getting-started/ui-walkthrough'
      ],
    },
    {
      type:  'category',
      label: 'Guide',
      items: [
        'guide/build-for-container-registry',
        'guide/package-management',
        'guide/auth-providers',
      ],
    },
    {
      type:  'category',
      label: 'How the Code Base Works',
      items: [
        'code-base-works/api-resources-and-schemas',
        'code-base-works/auth-sessions-and-tokens',
        'code-base-works/cluster-management-resources',
        'code-base-works/customising-how-k8s-resources-are-presented',
        'code-base-works/directory-structure',
        'code-base-works/products-and-navigation',
        'code-base-works/forms-and-validation',
        'code-base-works/helm-chart-apps',
        'code-base-works/keyboard-shortcuts',
        'code-base-works/kubernetes-resources-data-load',
        'code-base-works/machine-drivers',
        'code-base-works/performance',
        'code-base-works/sortable-table',
        'code-base-works/on-screen-text-and-translations',
        'code-base-works/style',
      ],
    },
    {
      type:  'category',
      label: 'Extensions',
      items: [
        'plugins/introduction',
        'plugins/plugins-getting-started',
        'plugins/initializing-plugins',
        'plugins/advanced',
      ]
    },
    'storybook',
    {
      type:  'category',
      label: 'Testing',
      items: [
        'testing/unit-test',
        'testing/e2e-test',
        'testing/stress-test',
      ],
    },
    'terminology',
  ],
};

module.exports = sidebars;
