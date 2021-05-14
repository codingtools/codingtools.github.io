/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'CodingTools',
  tagline: 'Documentation @codingtools/cdt',
  url: 'https://codingtools.github.io',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'codingtools', // Usually your GitHub org/user name.
  projectName: 'codingtools.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CodingTools',
      logo: {
        alt: 'CodingTools',
        src: 'img/cdt_docs_website.png',

      },
      links: [
        {to: 'docs/cdt/commands/avro', label: 'Docs', position: 'left'},
        {to: 'docs/cdt/installation', label: 'Installation', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'Slack', label: 'Join Slack', position: 'right'},
        {
          href: 'https://github.com/codingtools/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/cdt/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/codingtools/shared_invite/zt-qbls6zzm-ZN8VvlVTg3enPLUdw6yluA',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'CodingTools',
        // src: 'img/LogoMakr_logo2.png',
      },
      copyright: `Copyright ©CodingTools, 2019-${new Date().getFullYear()}.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
