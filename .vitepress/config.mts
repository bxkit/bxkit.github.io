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
      { text: 'Examples', link: '/markdown-examples' },
      // { text: 'Česnakas Inc.', link: 'https://cesnakas.com' }
    ],

    sidebar: [
      {
        text: 'Snippets',
        items: [
          { text: 'Get start', link: '/snippets/' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
