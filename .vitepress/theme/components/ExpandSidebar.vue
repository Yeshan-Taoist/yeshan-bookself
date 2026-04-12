<!-- .vitepress/theme/components/ExpandSidebar.vue -->
<template>
  <div style="display: none;"></div>
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

function expandSidebarForCurrentRoute() {
  const currentPath = route.path
  if (!currentPath) return

  const allLinks = document.querySelectorAll('.VPSidebarItem a.VPLink')
  let targetLink = null
  for (const link of allLinks) {
    if (link.getAttribute('href') === currentPath) {
      targetLink = link
      break
    }
  }
  if (!targetLink) return

  let parentItem = targetLink.closest('.VPSidebarItem')
  while (parentItem) {
    const caret = parentItem.querySelector('.caret')
    if (caret && parentItem.classList.contains('collapsed')) {
      caret.click()
    }
    parentItem = parentItem.parentElement?.closest('.VPSidebarItem')
  }
}

function runExpand() {
  nextTick(() => {
    // 延迟足够时间，确保侧边栏完全渲染（尤其是刷新时）
    setTimeout(expandSidebarForCurrentRoute, 200)
  })
}

// 监听路由变化（包括首次加载和点击链接）
watch(() => route.path, () => {
  runExpand()
}, { immediate: true })   // immediate 确保首次加载时立即执行

// 额外：当 DOM 完全加载后再次尝试（备用）
onMounted(() => {
  runExpand()
  // 监听侧边栏内容变化（例如异步加载的分类）
  const observer = new MutationObserver(() => {
    runExpand()
  })
  const sidebar = document.querySelector('.VPSidebar')
  if (sidebar) {
    observer.observe(sidebar, { childList: true, subtree: true })
  }
})
</script>