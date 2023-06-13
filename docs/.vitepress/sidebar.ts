import type { DefaultTheme } from 'vitepress'

export const sideBar: DefaultTheme.Config['sidebar'] = {
  '/note/': [
    {
      text: '前端',
      collapsed: false,
      items: [
        {
          text: '各种配置',
          collapsed: false,
          items: [
            { text: '为ts项目添加commit规范', link: '/note/各种配置/为ts项目添加commit规范' },
            { text: '使用simple-git-hooks替换husky', link: '/note/各种配置/使用simple-git-hooks替换husky' },
          ],
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'ECMAScript-2023', link: '/note/js/ECMAScript-2023' },
          ],
        },
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: '基础类型', link: '/note/ts/基础类型' },
          ],
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
