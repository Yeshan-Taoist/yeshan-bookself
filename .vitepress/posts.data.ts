// .vitepress/posts.data.ts
import { createContentLoader } from 'vitepress'

export interface Post {
  url: string
  title: string
  date: string
  summary: string
}

export default createContentLoader('docs/**/*.md', {

  transform(raw) {
    // 过滤掉 index.md 生成的目录路径（以 / 结尾）以及 README
    const filtered = raw.filter(({ url }) => {
      // 排除目录路径（例如 /docs/分类/）
      if (url.endsWith('/')) return false
      // 排除可能的 README 文件
      if (url.endsWith('/README')) return false
      return true
    })

    const allPosts: Post[] = filtered.map(({ url, frontmatter }) => ({
      url,
      title: frontmatter.title || url.split('/').pop() || '无标题',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      summary: frontmatter.summary || '请添加文章摘要'
    }))

    // 按日期倒序排序
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return { allPosts }
  }
})