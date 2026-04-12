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
    // 过滤掉 index.md 或 README.md 文件（包括任何子目录下的）
    const filtered = raw.filter(({ url }) => {
      // url 格式如 /docs/.../文件名，不含 .md 后缀
      return !url.endsWith('/index') && !url.endsWith('/README')
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