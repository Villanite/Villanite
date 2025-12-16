import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aries Villanite',
  tagline: 'Emperor of the Empire of Avinadal',
  favicon: 'img/favicon.ico',
  titleDelimiter: ' - ',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://villanite.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'villanite', // Usually your GitHub org/user name.
  projectName: 'villanite', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGKD6Z9F');`,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Hide dates from blog posts
          blogPostComponent: '@theme/BlogPostPage',
          blogListComponent: '@theme/BlogListPage',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/pengu.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Aries Villanite',
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/blog', label: 'Imperial Blog', position: 'left'},
        {to: '/links', label: 'Links', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'The Empire',
          items: [
            {
              label: 'About His Majesty',
              to: '/about',
            },
          ],
        },
        {
          title: 'Imperial Communications',
          items: [
            {
              label: 'Imperial Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/villanite.me',
            },
            {
              label: 'Twitch',
              href: 'https://twitch.tv/villanite',
            },
            {
              label: 'More Links',
              to: '/links',
            },
          ],
        },
      ],
      copyright: `<span class="villanite-footer">Content maintained by Ulmina Arielle Villanite on behalf of Emperor Aries Villanite and the Empire of Avinadal.</span><br/><span class="real-footer" xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"> <a property="dct:title" rel="cc:attributionURL" href="https://villanite.com">Villanite</a> © 2025-${new Date().getFullYear()} by <a href="https://avinadal.com">Avinadal LLC</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://avinadal.com" target="_blank">Avinadal LLC</a> </span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
