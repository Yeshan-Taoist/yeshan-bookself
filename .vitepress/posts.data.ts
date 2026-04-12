// .vitepress/posts.data.ts
import { createContentLoader } from 'vitepress'
import fs from 'fs'
import path from 'path'

export interface Post {
  url: string
  title: string
  date: string
  summary: string
}

export interface CategoryNode {
  name: string
  label: string
  order: number
  children: CategoryNode[]
  posts: Post[]
}

// 读取 _category_.json 配置
function getCategoryConfig(dirPath: string): { label?: string; order?: number } | null {
  const configPath = path.join(dirPath, '_category_.json')
  if (fs.existsSync(configPath)) {
    try {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    } catch (e) {
      console.warn(`Failed to parse ${configPath}:`, e)
    }
  }
  return null
}

// 递归构建分类树（基于目录结构和 _category_.json）
function buildCategoryTree(baseDir: string, currentDir: string): CategoryNode[] {
  const nodes: CategoryNode[] = []
  const entries = fs.readdirSync(currentDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const fullPath = path.join(currentDir, entry.name)
    const config = getCategoryConfig(fullPath)
    if (config) {
      const node: CategoryNode = {
        name: entry.name,
        label: config.label || entry.name,
        order: config.order || 0,
        children: [],
        posts: []
      }
      // 递归处理子目录（可能包含子分类）
      node.children = buildCategoryTree(baseDir, fullPath)
      nodes.push(node)
    } else {
      // 非分类节点，递归但不会生成新节点，只是为了收集更深层的分类
      const subNodes = buildCategoryTree(baseDir, fullPath)
      nodes.push(...subNodes)
    }
  }
  nodes.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name))
  return nodes
}

// 将文章归属到最近的分类节点
function assignPostsToCategories(categories: CategoryNode[], posts: Post[], docsDir: string) {
  // 构建路径到分类节点的映射
  const categoryMap = new Map<string, CategoryNode>()
  function traverse(node: CategoryNode, parentPath: string) {
    const nodePath = path.join(parentPath, node.name)
    categoryMap.set(nodePath, node)
    for (const child of node.children) {
      traverse(child, nodePath)
    }
  }
  for (const cat of categories) {
    traverse(cat, '')
  }

  for (const post of posts) {
    // post.url 格式：/docs/相对路径（不含 .md）
    const relativePath = post.url.replace(/^\/docs\//, '')
    const dirPath = path.dirname(relativePath) // 文章所在目录
    let currentDir = dirPath
    let found: CategoryNode | null = null
    while (currentDir !== '.' && currentDir !== '') {
      if (categoryMap.has(currentDir)) {
        found = categoryMap.get(currentDir)!
        break
      }
      currentDir = path.dirname(currentDir)
    }
    if (found) {
      found.posts.push(post)
    }
  }

  // 对每个分类内的文章按日期排序
  function sortPostsInNode(node: CategoryNode) {
    node.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    for (const child of node.children) {
      sortPostsInNode(child)
    }
  }
  for (const cat of categories) {
    sortPostsInNode(cat)
  }
}

export default createContentLoader('docs/**/*.md', {
  transform(raw) {
    // 构建文章数组
    const posts: Post[] = raw.map(({ url, frontmatter }) => ({
      url,
      title: frontmatter.title || url.split('/').pop() || '无标题',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      summary: frontmatter.summary || '请添加文章摘要'
    }))

    // 构建分类树（基于 _category_.json）
    const docsDir = path.resolve(process.cwd(), 'docs')
    const categories = buildCategoryTree(docsDir, docsDir)

    // 将文章归属到分类
    assignPostsToCategories(categories, posts, docsDir)

    // 全局文章按日期倒序排序
    const allPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return { categories, allPosts }
  }
})