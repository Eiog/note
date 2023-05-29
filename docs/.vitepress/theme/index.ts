import { h } from 'vue'
import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './vars.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    const className = frontmatter.value.className ?? ''
    return h(DefaultTheme.Layout, { class: className }, {
      'nav-bar-title-after': () => h('span', {}, { default: () => '🎉' }),
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('DemoPreview', NaiveUIContainer)
  },
}
