export interface NavData {
  title: string
  description?: string
  items: {
    label: string
    description?: string
    tag?: string
    icon: string
    link: string
  }[]
}
export const navData: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        label: 'Squoosh',
        description: '谷歌出品的免费开源图片压缩工具，图片大小减少90%！支持 API 开发调用',
        icon: 'https://squoosh.app/c/favicon-c9cf50ef.ico',
        link: 'https://squoosh.app/',
      },
      {
        label: 'Yandex',
        description: '俄罗斯第一、全球第五的搜索引擎',
        icon: 'https://yastatic.net/s3/home-static/_/64/64f5920e670ad193dcca0ed33500c7c4.png',
        link: 'https://yandex.com/',
      },

    ],

  },
  {
    title: 'Vue生态',
    description: '整合热门的Vue生态资源',
    items: [
      {
        label: 'Vue3',
        description: '渐进式JavaScript 框架',
        tag: '3.x',
        icon: '/logo/vue3',
        link: 'https://v3.cn.vuejs.org/',
      },
      {
        label: 'Vue2',
        description: '渐进式JavaScript 框架',
        tag: '2.x',
        icon: '/logo/vue2',
        link: 'https://v2.cn.vuejs.org/',
      },
    ],

  },
]
