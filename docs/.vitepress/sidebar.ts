import type { DefaultTheme } from 'vitepress'

export const sideBar: DefaultTheme.Config['sidebar'] = {
  '/note/': [
    {
      text: '前端',
      collapsed: false,
      items: [
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'ECMAScript-2023', link: '/note/js/ECMAScript-2023' },
          ],
        },
        {
          text: 'TypeScript',
          link: '/note/ts/',
        },
        {
          text: 'Css',
          collapsed: false,
          items: [
            { text: 'Grid 布局', link: '/note/css/grid' },
          ],
        },
      ],
    },
    {
      text: '工具',
      collapsed: false,
      items: [
        {
          text: 'MarkDown 基本语法',
          link: '/note/MarkDown 基本语法',
        },
      ],
    },
  ],
}
