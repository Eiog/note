import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '@Eiog/Note',
  description: '笔记',
  head: [
    ['link', { rel: 'svg', href: '/favicon.svg' }],
  ],
  themeConfig: {
    siteTitle: '@Eiog/Note',
    logo: '/favicon.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Eiog',
      },
    ],
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: '前端',
      },
    ],
  },

})
