// .vitepress/config.ts
import { sidebar } from './sidebar'
import { vitepressPluginLegend } from 'vitepress-plugin-legend'

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
    outline: false,
    sidebar
  },
  // 关键：通过 markdown 配置启用插件
  markdown: {
    config(md) {
      vitepressPluginLegend(md, {
        markmap: {
          showToolbar: true,
          // 其他 markmap 选项
        },
        mermaid: false, // 或 false 禁用
        infographic: {
          showToolbar: false,
          // 其他 infographic 选项
        },
      });
    },
  },
}