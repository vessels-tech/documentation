const { assert } = require('console');
const { childrenForPath } = require('./util');

module.exports = {
  description: 'Open Source Software for Financial Inclusion',
  // we may need this... but it seems to mess up the asset rendering
  // base: '/documentation/',
  themeConfig: {
    home: true,
    // this file is copied out of `/public` for us
    logo: '/mojaloop_logo_med.png',
    repo: "mojaloop/documentation",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guides',
        ariaLabel: 'Guides',
        items: [
          {
            text: 'General',
            items: [
              { text: 'Up and Running With Mojaloop', link: '/deployment-guide/' },
              { text: 'Contributing to Mojaloop', link: '/contributors-guide/new-contributor-checklist' },
              // { text: 'Deploying Mojaloop Locally', link: '/deployment-guide/' },
            ]
          },
          {
            text: 'DFSPs',
            items: [
              { text: 'Testing my DFSP with the Testing Toolkit', link: 'https://github.com/mojaloop/ml-testing-toolkit/blob/master/documents/User-Guide.md' },
              { text: 'Speed Up Development with the SDK-Scheme-Adapter', link: 'https://github.com/mojaloop/sdk-scheme-adapter' },
              // { text: 'Integrating my DFSP with Mojaloop', link: '/getting_started/' },
              // { text: 'PISP development guide', link: '/getting_started/' },
            ]
          }
        ]
      },
      {
        text: 'API Reference',
        link: '/guide/',
        items: [
          {
            text: 'Mojaloop APIs',
            items: [
              { text: 'FSPIOP API v1.0', link: '/api/mojaloop-api-specification' },
              { text: 'Thirdparty-PISP v0.1', link: '/api/thirdparty-pisp.html' },
              { text: 'Thirdparty-DFSP v0.1', link: '/api/thirdparty-dfsp.html' },
            ],
          },
          {
            text: 'Internal APIs',
            items: [
              { link: '/api/als-oracle-api-specification', text: 'ALS Oracle'},
              { link: '/api/central-ledger-api-specification', text: 'Central Ledger API'},
              { link: '/api/central-settlements-api-specification', text: 'Central Settlement API'},
            ],
          },
        ]
      },
      { text: 'Releases', link: 'https://github.com/mojaloop/helm/releases' },
    ],
    displayAllHeaders: false,
    /* Left Sidebar */
    sidebar: [
      {
        title: 'Home',
        sidebarDepth: 0,
        children: [
          '/',
          ['/mojaloop-background', 'Background'],
          ['/mojaloop-background/core-scenarios', 'Core Scenarios'],
          ['/mojaloop-background/level-one-principles', 'Level One Principles'],
        ]
      },
      // ['/getting_started', 'Getting Started'],
      {
        title: 'Deployment Guide',
        path: '/deployment-guide/',
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          ['/deployment-guide/local-setup-linux', 'Local Setup Linux'],
          ['/deployment-guide/local-setup-mac', 'Local Setup MacOS'],
          ['/deployment-guide/local-setup-windows', 'Local Setup Windows'],
          ['/deployment-guide/helm-legacy-deployment', 'Legacy Helm Deployment'],
          ['/deployment-guide/helm-legacy-migration', 'Legacy Helm Migration'],
          ['/deployment-guide/deployment-troubleshooting', 'Deployment Troubleshooting'],
          ['/deployment-guide/releases', 'Releases'],
        ],
      },
      {
        title: 'Contributor\'s Guide',
        path: '/contributors-guide/',
        sidebarDepth: 0,
        children: [
          '/contributors-guide/new-contributor-checklist',
          '/contributors-guide/code-of-conduct',
          '/contributors-guide/signing-the-cla',
          {
            title: 'Standards',
            path: '/contributors-guide/standards/',
            sidebarDepth: 0,
            children: [
              '/contributors-guide/standards/creating-new-features',
              '/contributors-guide/standards/triaging-ml-oss-bugs',
              '/contributors-guide/standards/versioning',
            ]
          },
          {
            title: 'Documentation',
            path: '/contributors-guide/documentation/',
            sidebarDepth: 0,
            children: [
              '/contributors-guide/documentation/api-documentation',
              '/contributors-guide/documentation/documentation-style-guide',
            ]
          },
          '/contributors-guide/tools-and-technologies/',
        ]
      },
      ['/glossary', 'Concepts'],
      {
        title: 'Technology Overview',
        path: '/mojaloop-technical-overview/',
        sidebarDepth: 0,
        // Render dynamically based on file paths
        children: childrenForPath('/mojaloop-technical-overview')
      },
      {
        title: 'API Reference',
        path: '/api/',
        children: [
          {
            title: 'Mojaloop APIs',
            collapsable: false,
            children: [
              ['/api/mojaloop-api-specification', 'FSPIOP v1.0'],
              // Just as examples, we probably don't want thirdparty-api stuff here just yet
              [ '/api/thirdparty-pisp', 'Thirdparty-PISP v0.1'],
              [ '/api/thirdparty-dfsp', 'Thirdparty-DFSP v0.1'],
              ['https://docs.mojaloop.io/mojaloop-specification/', 'Mojaloop Specification'],
              ['https://docs.mojaloop.io/mojaloop-specification/documents/API%20Definition%20v1.0.html', 'FSPIOP API Definition']
            ]
          },
          {
            title: 'Internal APIs',
            collapsable: false,
            children: [
              ['/api/als-oracle-api-specification', 'ALS Oracle'],
              ['/api/central-ledger-api-specification', 'Central Ledger API'],
              ['/api/central-settlements-api-specification', 'Central Settlement API'],
            ]
          }
        ]
      },
      {
        title: 'Discussions & Notes',
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          {
            title: 'Discussions',
            path: '/discussions/',
            collapsable: true,
            sidebarDepth: 0,
            children: [
              [ '/discussions/ISO_Integration', 'ISO Integration'],
              [ '/discussions/decimal', 'Decimals'],
              [ '/discussions/workbench', 'Sandboxes/Workbenches'],
            ]
          },
          ['/code_quality_security/', 'Code Quality + Security'],
          {
            title: 'Meeting Notes',
            path: '/meeting-notes/',
            collapsable: true,
            sidebarDepth: 0,
            children: [
              ['/meeting-notes/ccb-notes', 'Change Control Board'],
              ['/meeting-notes/da-notes', 'Design Authority'],
              ['/meeting-notes/scrum-of-scrum-notes', 'Scrum of Scrums'],
            ]
          },
        ],
      },
      {
        title: 'FAQs',
        path: '/contributors-guide/frequently-asked-questions',
        sidebarDepth: 0,
        collapsable: false
      }
    ]
  },
  plugins: [
    // Checks for broken links
    // https://github.com/ulivz/vuepress-plugin-check-md
    'check-md',

    // Allow nice zooming on images
    // https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html#install
    '@vuepress/medium-zoom',

    // Beta - export site as PDF
    // https://github.com/ulivz/vuepress-plugin-export
    'vuepress-plugin-export',
  ],
  // Configure webpack for custom rendering (e.g. OpenAPI/Swagger Plugin)
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // mutate the config for client
      config.node.global = true;
      config.node.process = "mock";
      config.module.rules.push({
        test: /\.ya?ml$/,
        loader: "js-yaml-loader"
      });
    }
  },
  postcss: {
    plugins: require("../../postcss.config.js").plugins
  }
}
