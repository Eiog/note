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
const toolsNav: NavData = {
  title: '常用工具',
  items: [
    {
      label: 'Vite',
      description: '下一代的前端工具链',
      icon: 'https://cn.vitejs.dev/logo.svg',
      link: 'https://cn.vitejs.dev/',
    },
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

}
const vueNav: NavData = {
  title: 'Vue生态',
  description: '整合热门的Vue生态资源',
  items: [
    {
      label: 'Vue3',
      description: '渐进式JavaScript 框架',
      tag: '3.x',
      icon: 'https://cn.vuejs.org/logo.svg',
      link: 'https://v3.cn.vuejs.org/',
    },
    {
      label: 'VueUse',
      description: 'Vue 组合实用程序的集合',
      tag: 'hot',
      icon: 'https://vueuse.org/favicon-32x32.png',
      link: 'https://vueuse.org/',
    },
    {
      label: 'VueRouter',
      description: 'Vue.js 的官方路由',
      tag: 'hot',
      icon: 'https://router.vuejs.org/logo.svg',
      link: 'https://router.vuejs.org/zh/',
    },
    {
      label: 'Pinia',
      description: '符合直觉的 Vue.js 状态管理库',
      tag: 'hot',
      icon: 'https://pinia.vuejs.org/logo.svg',
      link: 'https://pinia.vuejs.org/zh/',
    },
    {
      label: 'Naïve UI',
      description: '比较完整，主题可调，使用 TypeScript，快有点意思',
      tag: 'ui',
      icon: 'https://www.naiveui.com/assets/naivelogo-93278402.svg',
      link: 'https://www.naiveui.com/',
    },
    {
      label: 'Varlet',
      description: '一个基于 Vue3 开发的 Material 风格移动端组件库',
      tag: 'ui',
      icon: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
      link: 'https://varlet.gitee.io/',
    },
    {
      label: 'Vant',
      description: '轻量、可定制的移动端 Vue 组件库',
      tag: 'ui',
      icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
      link: 'https://vant-contrib.gitee.io/',
    },
    {
      label: 'Element Plus',
      description: '基于 Vue 3，面向设计师和开发者的组件库',
      tag: 'ui',
      icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
      link: 'https://element-plus.org/',
    },
  ],

}
export const navData: NavData[] = [
  toolsNav, vueNav,
]
