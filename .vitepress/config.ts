// .vitepress/config.ts
import { sidebar } from './sidebar'

export default {
  lang: "zh-CN",
  base: '/',
  title: "笔由随心",
  description: "📖笔由随心是一个个人笔记的集合",
  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,...' }]
  ],
  appearance: true,
  themeConfig: {
    outline: [2, 3],
    sidebar
  }
  // markdown 部分可以直接删除，或者保留为空对象
}