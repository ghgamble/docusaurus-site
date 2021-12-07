// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LifeOmic Documentation',
  tagline: 'Find user guides, developer guides, API references, tutorials, and more.',
  url: 'https://ghgamble.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cropped-favicon-1.png',
  organizationName: 'ghgamble', // Usually your GitHub org/user name.
  projectName: 'ghgamble.github.io', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ghgamble/ghgamble.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ghgamble/ghgamble.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'LifeOmic Documentation',
          src: 'img/menu-logo.svg'
        },
        items: [
          {to: '/', label: 'Home', position: 'right'},
          {to: 'https://lifeomic.com/', label: 'About', position: 'right'},
          {to: 'https://info.lifeomic.com/lifeomic-contact-us', label: 'Contact', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `<p class="bottom-section-description">LifeOmic is the software company that leverages the cloud, machine learning and mobile devices to offer disruptive solutions to healthcare providers, researchers, employers, health coaches, health IT companies and individuals.</p>`
              },
              {
                html: `<div id="bottom-section-footer"><div><a href="https://lifeomic.com/" target="_blank" rel="noreferrer noopener"><img src="img/footer-logo.svg" /></a></div><p class="bottom-section-description" id="footer-copyright">© ${new Date().getFullYear()} LifeOmic Health, LLC</p></div>`
              }
            ]
          },
          {
            items: [
              {
                html: `<div id="bottom-section-social"><a href="https://www.youtube.com/channel/UCfOiisp_IiWB6bWJtgzh7OQ" target="_blank" rel="noopener noreferrer"><img src="img/you-tube.svg" /></a><a href="https://www.instagram.com/lifeomicif/?hl=en" target="_blank" rel="noopener noreferrer"><img src="img/instagram.svg" /></a><a href="https://twitter.com/lifeomic" target="_blank" rel="noopener noreferrer"><img src="img/twitter.svg" /></a></div>`
              }
            ]
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
    }),
};

module.exports = config;
