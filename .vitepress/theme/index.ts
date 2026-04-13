// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import ArticleLayout from './layouts/ArticleLayout.vue'
import Layout from './layouts/Layout.vue'          // 导入自定义布局
import './style.css'
import { initComponent } from 'vitepress-plugin-legend/component'
import 'vitepress-plugin-legend/dist/index.css'

export default {
  extends: DefaultTheme,
  Layout,                                 // 使用自定义布局
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('ArticleLayout', ArticleLayout)
    initComponent(app)
  },
} satisfies Theme