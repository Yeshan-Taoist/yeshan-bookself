// .vitepress/config.ts
import { sidebar } from './sidebar'

export default {
  lang: "zh-CN",
  base: '/',
  title: "笔由随心",
  description: "📖笔由随心是一个个人笔记的集合",
  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>' }]
  ],
  appearance: false,
  themeConfig: {
    sidebar
  }
}