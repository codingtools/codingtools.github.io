/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'CodingTools Documentation',
  tagline: 'Documentation for Coding Tools Utility',
  url: 'https://codingtools.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'codingtools', // Usually your GitHub org/user name.
  projectName: 'codingtools.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CodingTools',
      logo: {
        alt: 'CodingTools',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/cdt/installation', label: 'Cdt Documentations', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
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
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
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
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} CodingTools`,
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
