<template>
  <li class="tree-node">
    <div class="node-content" @click="$emit('toggle', node)">
      <span class="toggle-icon">{{ hasChildren ? (isCollapsed ? '▶' : '▼') : '●' }}</span>
      <span class="node-text">{{ node.text }}</span>
    </div>
    <ul v-if="hasChildren && !isCollapsed" class="children">
      <tree-node v-for="(child, index) in node.children" :key="index" :node="child" :collapsed="collapsed"
        @toggle="(n) => $emit('toggle', n)" />
    </ul>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  node: { type: Object, required: true },
  collapsed: { type: Map, required: true }
})

defineEmits(['toggle'])

const hasChildren = computed(() => props.node.children && props.node.children.length > 0)
const isCollapsed = computed(() => props.collapsed.get(props.node))
</script>

<style scoped>
.tree-node {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.5rem;
  position: relative;
}

.node-content {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;
  background: #faf3e6;
  margin: 2px 0;
  user-select: none;
  transition: background 0.2s;
}

.node-content:hover {
  background: #e8d8b4;
}

.toggle-icon {
  margin-right: 8px;
  font-size: 12px;
  color: #8b7356;
}

.node-text {
  font-weight: 500;
  color: #4a3620;
}

.children {
  margin: 0;
  padding: 0;
}

/* 连线样式 */
.tree-node::before,
.tree-node::after {
  content: '';
  position: absolute;
  left: 0.75rem;
}

.tree-node::before {
  top: 0;
  bottom: 0;
  width: 1px;
  background: #c4b292;
}

.tree-node:last-child::before {
  height: 1.5rem;
}

.tree-node::after {
  top: 1.2rem;
  width: 1rem;
  height: 1px;
  background: #c4b292;
}

.node-content {
  position: relative;
  z-index: 1;
}
</style>