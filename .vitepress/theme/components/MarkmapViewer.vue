<template>
  <div class="mindmap-wrapper">
    <tree-node v-if="rootNode" :node="rootNode" :collapsed="collapsedMap" @toggle="toggleNode" />
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import TreeNode from './TreeNode.vue'  // 递归子组件

const props = defineProps({
  content: { type: String, required: true }
})

// 解析 Markdown 标题为树
const rootNode = computed(() => {
  const lines = props.content.split('\n')
  const headingLines = lines
    .filter(line => /^#{1,6}\s/.test(line))
    .map(line => {
      const match = line.match(/^(#{1,6})\s+(.*)/)
      return {
        level: match[1].length,
        text: match[2].trim()
      }
    })

  if (headingLines.length === 0) return null

  // 构建树
  const root = { text: headingLines[0].text, children: [] }
  const stack = [root]

  for (let i = 1; i < headingLines.length; i++) {
    const node = { text: headingLines[i].text, children: [] }
    const level = headingLines[i].level

    // 找到合适的父级
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop()
    }
    if (stack.length > 0) {
      const parent = stack[stack.length - 1]
      if (!parent.children) parent.children = []
      parent.children.push(node)
    }
    // 将当前节点压入栈，同时记录其级别
    node.level = level
    stack.push(node)
  }

  return root
})

// 折叠状态：用 Map 存储每个节点的折叠状态 (key: 节点引用)
const collapsedMap = reactive(new Map())

function toggleNode(node) {
  collapsedMap.set(node, !collapsedMap.get(node))
}
</script>

<style scoped>
.mindmap-wrapper {
  padding: 1.5rem;
  background: #fdf8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
}
</style>