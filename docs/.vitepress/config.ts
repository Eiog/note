import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { sideBar } from './sidebar'

export default defineConfig({
  title: '@Eiog/Note',
  description: '笔记',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  themeConfig: {
    siteTitle: '余月笔记',
    logo: '/favicon.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Eiog',
      },
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/nav/' },
      { text: '笔记', link: '/note/' },
      {
        text: '相关资源',
        items: [
          { text: 'VitePress', link: 'https://vitepress.vuejs.org/' },
        ],
      },
    ],
    sidebar: sideBar,
    sidebarMenuLabel: '目录',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
  },
  vite: {
    plugins: [

    ],
  },
})
