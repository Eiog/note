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
          link: '/note/css/',
        },
      ],
    },
  ],
}
