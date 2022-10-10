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

  tutorialSidebar: [
    {
      type:  'category',
      label: 'Getting Started',
      items: ['getting-started/concepts', 'getting-started/development_environment', 'getting-started/ui-walkthrough'],
    },
    {
      type:  'category',
      label: 'Guide',
      items: [
        'guide/build-for-container-registry',
        'guide/customising-how-k8s-resources-are-presented',
        'guide/forms-and-validation',
        'guide/package-management',
        'guide/plugins'
      ],
    },
    {
      type:  'category',
      label: 'How code base works',
      items: [
        'code-base-works/api-resources-and-schemas',
        'code-base-works/auth-providers',
        'code-base-works/auth-sessions-and-tokens',
        'code-base-works/cluster-management-resources',
        'code-base-works/directory-structure',
        'code-base-works/helm-chart-apps',
        'code-base-works/keyboard-shortcuts',
        'code-base-works/machine-drivers',
        'code-base-works/performance',
      ],
    },
    'on-screen-text-and-translations',
    'products-and-navigation',
    'server-side-rendering',
    'sortable-table',
    'style',
    'terminology',
    {
      type:  'category',
      label: 'Testing',
      items: ['testing/stress-test', 'testing/e2e-testing'],
    },
  ],
};

module.exports = sidebars;
