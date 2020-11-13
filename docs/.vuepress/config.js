module.exports = {
  description: 'Just playing around',
  //full url is "docs.mojaloop.io/pisp"
  // base: '/',
  // theme: 'api',
  themeConfig: {
    home: true,
    // this file is copied out of `/public` for us
    logo: '/mojaloop_logo_med.png',
    repo: "mojaloop/documentation",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    // TODO: make nice nav bar
    nav: [
      { text: 'Getting Started', link: '/getting_started/' },
      {
        text: 'Guides',
        ariaLabel: 'Guides',
        items: [
          {
            text: 'General',
            items: [
              { text: 'Up and Running With Mojaloop', link: '/getting_started/' },
              { text: 'Contributing to Mojaloop', link: '/getting_started/' },
              { text: 'Deploying with Kubernetes', link: '/getting_started/' },
            ]
          },
          {
            text: 'Developers',
            items: [
              { text: 'Integrating my DFSP with a Deployment', link: '/getting_started/' },
              { text: 'PISP development guide', link: '/getting_started/' },
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
              { text: 'FSPIOP API v1.1', link: '/api/thirdparty-pisp.html' },
              { text: 'FSPIOP API v1.0', link: '/api/thirdparty-pisp.html' },
              { text: 'Thirdparty-PISP v0.1', link: '/api/thirdparty-pisp.html' },
              { text: 'Thirdparty-DFSP v0.1', link: '/api/thirdparty-pisp.html' },
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
    displayAllHeaders: true,
    // Note:
    // This could very well be improved, I just want to get started
    // so we can compare the tools effectively
    sidebar: [
      ['/home', 'Home'],
      ['/getting_started', 'Getting Started'],
      ['/mojaloop-background', 'Background'],
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
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          // TODO: this section is full of nested pages and sequence diagrams - how do we auto generate them?
          ['/mojaloop-technical-overview/central-ledger/', 'central-ledger'],
        ],
      },
      {
        title: 'API Reference',
        path: '/api/',
        children: [
          ['/api/mojaloop-api-specification', 'Mojaloop API Specification'],
          ['/api/als-oracle-api-specification', 'ALS Oracle'],
          ['/api/central-ledger-api-specification', 'Central Ledger API'],
          ['/api/central-settlements-api-specification', 'Central Settlement API'],
          // TODO: other docs

          ['https://docs.mojaloop.io/mojaloop-specification/', 'Spec Documentation'],
          ['https://docs.mojaloop.io/mojaloop-specification/documents/API%20Definition%20v1.0.html', 'FSPIOP API Definition']
        ]
      },
      // TODO: I don't think these belong here - isn't this what community.mojaloop.io is for?
      // {
      //   title: 'Discussions & Meeting Notes',
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 0,    // optional, defaults to 1
      //   children: [
      //     ['/discussions/', 'Discussions'],
      //     ['/code_quality_security/', 'Code Quality + Security'],
      //     ['/meeting-notes/', 'Meeting Notes']
      //   ],
      //   // initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      // },
      ['/contributors-guide/frequently-asked-questions', 'FAQs'],
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
    'vuepress-plugin-export'
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
  }
}