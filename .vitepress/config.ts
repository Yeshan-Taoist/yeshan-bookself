import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "笔由随心",
  description: "📖笔由随心是一个个人笔记的集合",
  head: [
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>' }]
  ],
  appearance: false,   // 禁用默认的暗色模式切换按钮和自动类名
  themeConfig: {
  }
})
