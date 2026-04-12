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
  // 移除 BOM（如果存在）
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1)
  }
  // 更宽松的匹配：允许 --- 前有空白行或 BOM，但捕获第一个有效的 frontmatter
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

  // 先处理子目录（分类节点）
  const subDirs = entries.filter(e => e.isDirectory() && e.name !== '_category_')
  for (const subDir of subDirs) {
    const subDirPath = path.join(dirPath, subDir.name)
    const config = getCategoryConfig(subDirPath)
    if (config) {
      // 这是一个分类节点
      const subRelative = relativePath ? `${relativePath}/${subDir.name}` : subDir.name
      const subItems = buildSidebarItems(subDirPath, subRelative)
      items.push({
        text: config.label || subDir.name,
        collapsed: true,   // 默认折叠
        items: subItems.items
      })
    } else {
      // 非分类节点，但可能包含文章或子分类（递归但不创建分类节点）
      const subItems = buildSidebarItems(subDirPath, relativePath ? `${relativePath}/${subDir.name}` : subDir.name)
      items.push(...subItems.items)
    }
  }

  // 再处理 Markdown 文件（文章）—— 不再排除 index.md / README.md
  const files = entries.filter(e => e.isFile() && e.name.endsWith('.md'))
  for (const file of files) {
    const filePath = path.join(dirPath, file.name)
    const fileName = file.name.replace(/\.md$/, '')
    const link = `/docs/${relativePath ? `${relativePath}/${fileName}` : fileName}`
    const title = getTitleFromFile(filePath)
    items.push({ text: title, link })
  }

  return { items }
}

// 主函数：生成全局侧边栏数组（只处理 docs 下的一级分类节点）
function generateSidebar() {
  // 获取 docs 下的一级子目录
  const topLevelDirs = fs.readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)

  const sidebar = []

  for (const dirName of topLevelDirs) {
    const dirPath = path.join(DOCS_DIR, dirName)
    const config = getCategoryConfig(dirPath)
    if (!config) continue   // 只处理有 _category_.json 的目录作为顶层分类

    const { items } = buildSidebarItems(dirPath, dirName)
    sidebar.push({
      text: config.label || dirName,
      collapsed: true,      // 一级分类默认折叠
      items
    })
  }

  // 写入 TypeScript 文件
  const content = `// 自动生成，请勿手动修改\n\nexport const sidebar = ${JSON.stringify(sidebar, null, 2)}`
  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8')
  console.log(`✅ Sidebar generated at ${OUTPUT_FILE}`)
}

generateSidebar()