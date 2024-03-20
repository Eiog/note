import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { withPwa } from '@vite-pwa/vitepress'

import { sideBar } from './sidebar'

export default withPwa(defineConfig({
  title: '@Eiog/Note',
  description: '笔记',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, workbox, Vite, vite-plugin',
    }],
    ['link', { rel: 'apple-touch-icon', href: '/pwa-192x192.png', sizes: '192x192' }],
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
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  pwa: {
    mode: 'development',
    base: '/',
    scope: '/',
    registerType: 'autoUpdate',
    // injectRegister: 'inline',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
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
}))
