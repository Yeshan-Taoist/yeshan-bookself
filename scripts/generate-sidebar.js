// scripts/generate-sidebar.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOCS_DIR = path.resolve(__dirname, '../docs')
const OUTPUT_FILE = path.resolve(__dirname, '../.vitepress/sidebar.ts')

// 读取 _category_.json 配置
function getCategoryConfig(dirPath) {
  const configPath = path.join(dirPath, '_category_.json')
  if (fs.existsSync(configPath)) {
    try {
      return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    } catch (e) {
      console.warn(`Failed to parse ${configPath}:`, e.message)
    }
  }
  return null
}

// 从 Markdown 文件中提取标题（必须存在 frontmatter 的 title，否则警告并使用占位符）
function getTitleFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1)
  }
  const frontmatterMatch = content.match(/^\s*---\s*\n([\s\S]*?)\n\s*---\s*\n/)
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1]
    const titleMatch = frontmatter.match(/title:\s*(.+)/)
    if (titleMatch) return titleMatch[1].trim()
  }
  console.warn(`⚠️ 文件缺少 title 字段: ${filePath}，将使用占位符“无标题”`)
  return '无标题'
}

// 递归构建侧边栏项（分类节点和文章）
function buildSidebarItems(dirPath, relativePath = '') {
  const items = []
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  // 1. 先处理 Markdown 文件（文章），并将 index.md 排在首位
  const files = entries.filter(e => e.isFile() && e.name.endsWith('.md'))
  files.sort((a, b) => {
    const aIsIndex = a.name.toLowerCase() === 'index.md'
    const bIsIndex = b.name.toLowerCase() === 'index.md'
    if (aIsIndex && !bIsIndex) return -1
    if (!aIsIndex && bIsIndex) return 1
    return a.name.localeCompare(b.name)
  })
  for (const file of files) {
    const filePath = path.join(dirPath, file.name)
    const fileName = file.name.replace(/\.md$/, '')
    let link
    if (fileName.toLowerCase() === 'index') {
      link = `/docs/${relativePath}/`
    } else {
      link = `/docs/${relativePath ? `${relativePath}/${fileName}` : fileName}`
    }
    const title = getTitleFromFile(filePath)
    items.push({ text: title, link })
  }

  // 2. 再处理子目录（分类节点）
  const subDirs = entries.filter(e => e.isDirectory() && e.name !== '_category_')
  for (const subDir of subDirs) {
    const subDirPath = path.join(dirPath, subDir.name)
    const config = getCategoryConfig(subDirPath)
    if (config) {
      const subRelative = relativePath ? `${relativePath}/${subDir.name}` : subDir.name
      const subItems = buildSidebarItems(subDirPath, subRelative)
      items.push({
        text: config.label || subDir.name,
        collapsed: true,
        items: subItems.items
      })
    } else {
      const subItems = buildSidebarItems(subDirPath, relativePath ? `${relativePath}/${subDir.name}` : subDir.name)
      items.push(...subItems.items)
    }
  }

  return { items }
}

// 主函数：生成全局侧边栏数组（只处理 docs 下的一级分类节点）
function generateSidebar() {
  const topLevelDirs = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)

  const sidebar = []

  for (const dirName of topLevelDirs) {
    const dirPath = path.join(DOCS_DIR, dirName)
    const config = getCategoryConfig(dirPath)
    if (!config) continue

    const { items } = buildSidebarItems(dirPath, dirName)
    sidebar.push({
      text: config.label || dirName,
      collapsed: true,
      items
    })
  }

  const content = `// 自动生成，请勿手动修改\n\nexport const sidebar = ${JSON.stringify(sidebar, null, 2)}`
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')
  console.log(`✅ Sidebar generated at ${OUTPUT_FILE}`)
}

generateSidebar()