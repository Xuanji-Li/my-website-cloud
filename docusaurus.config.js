// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hello World',
  tagline: 'I\'m Manny Li',
  url: 'https://Xuanji-Li.github.io',
  projectName: 'my-website-cloud', // Usually your repo name.
  organizationName: 'Xuanji-Li', // Usually your GitHub org/user name.

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dog.png',
  // plugins: ["posthog-docusaurus"],
  presets: [
    [
      'classic',
      // "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // pages: {
        //   path: 'src/pages',
        //   // ... configuration object here
        // },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Manny',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dog.png',
        },
        items: [
          {
            to:'about',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Xuanji-Li',
            label: 'GitHub',
            position: 'right',
          },
          {          
              label: 'Email',
              href: 'mailto:lixuanji2019@gmail.com',
              position:"right",            
          },
          {
            label:'LinkedIn',
            href:'https://www.linkedin.com/in/manny-li-b6b263220/',
            position:'right',
          },
          {
            href: 'http://manny-website.s3-website-us-east-1.amazonaws.com/pdf/resume4.PDF',
            label: "Resume",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Discover',
            items: [
              {
                label: 'About Me',
                to: 'about',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Contact Me',
            items: [
              {
                label: 'Email',
                href: 'mailto:lixuanji2019@gmail.com',
              },
              {
                label:'LinkedIn',
                href:'https://www.linkedin.com/in/manny-li-b6b263220/',
              },
              // {
              //   label: '+61 0423809010',
              // },
            ],
            
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Xuanji-Li',
              },
            ],
          },
        ],
        copyright: `Last updated on ${new Date().toDateString()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
