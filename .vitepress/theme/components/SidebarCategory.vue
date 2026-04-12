<!-- .vitepress/theme/components/SidebarCategory.vue -->
<template>
  <li class="sidebar-category">
    <div class="category-header" @click="toggle">
      <span class="toggle-icon">{{ isOpen ? '▼' : '▶' }}</span>
      <span class="category-label">{{ category.label }}</span>
    </div>
    <ul v-if="isOpen" class="category-children">
      <!-- 递归渲染子分类 -->
      <SidebarCategory v-for="child in category.children" :key="child.name" :category="child" />
      <!-- 渲染当前分类下的文章 -->
      <li v-for="post in category.posts" :key="post.url" class="post-item">
        <a :href="post.url">{{ post.title }}</a>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['category'])
const isOpen = ref(true)   // 默认展开，可根据需要调整

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* 样式已在父组件中定义，此处可留空或继承 */
</style>