import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru',
  title: "Bitrix Kit",
  titleTemplate: ':title | Bitrix Kit',
  description: "Bitrix Kit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    aside: false,
    outlineTitle: 'Содержание:',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: null },
      { text: 'Snippets', link: '/snippets/' },
      // { text: 'Česnakas Inc.', link: 'https://cesnakas.com' }
    ],

    sidebar: [
      {
        text: 'Snippets',
        items: [
          { text: 'Get start', link: '/snippets/' },
          { text: 'Под Админом', link: '/snippets/is-admin' },
          { text: 'Фильтр', link: '/snippets/filter' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cesnakas' }
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023'
    },

    docFooter: {
      prev: false,
      next: false
    }
  }
})
