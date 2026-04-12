<!-- .vitepress/theme/layouts/ArticleLayout.vue -->
<template>
  <div class="custom-article-layout">
    <!-- 背景特效元素 -->
    <div class="noise"></div>
    <video id="leaves-overlay" src="/leaves.mp4" loop muted playsinline preload="none"></video>
    <audio id="forest-audio" src="/forest.mp3" loop preload="none"></audio>
    <div class="sun-glow"></div>
    <div class="light-shaft light-shaft-1"></div>
    <div class="light-shaft light-shaft-2"></div>
    <div class="light-shaft light-shaft-3"></div>

    <!-- 右上角模式指示器 -->
    <div class="mode-indicator">
      <span id="mode-label">{{ currentModeLabel }}</span>
      <div class="mode-dot" id="dot-night"></div>
      <div class="mode-dot" id="dot-day"></div>
      <div class="mode-dot" id="dot-sunny"></div>
    </div>

    <main class="page page-narrow">
      <section class="hero hero-compact">
        <div class="section-head">
          <a class="subtle-link" href="/">返回首页</a>
          <!-- 编辑链接可根据需要显示 -->
          <a v-if="editLink" :href="editLink" class="subtle-link">编辑文章</a>
        </div>
      </section>

      <article class="post-shell">
        <header class="post-header">
          <div class="section-title">Article</div>
          <h1 class="post-title">{{ frontmatter.title }}</h1>
          <div class="post-meta">
            <span v-if="frontmatter.date" class="meta-date meta-chip">{{ frontmatter.date }}</span>
            <span v-if="frontmatter.author" class="meta-date meta-chip"> | {{ frontmatter.author }}</span>
          </div>
        </header>
        <!-- 文章正文 -->
        <div class="VPContent VPDoc content vp-doc">
          <Content />
        </div>
      </article>

      <div class="divider"></div>

    </main>

    <div class="shortcuts-hint">
      <kbd>D</kbd> day &nbsp; <kbd>N</kbd> night &nbsp; <kbd>S</kbd> sunny
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'

// 获取当前页面的 frontmatter 和数据
const { frontmatter, page } = useData()
const editLink = computed(() => {
  // 可根据需要生成编辑链接，例如 GitHub 编辑地址
  return frontmatter.value.editLink || null
})

// 主题切换逻辑（与 HomePage 保持一致）
const currentModeLabel = ref('sunny')

function updateModeDots(mode) {
  const dotNight = document.getElementById('dot-night')
  const dotDay = document.getElementById('dot-day')
  const dotSunny = document.getElementById('dot-sunny')
  dotNight?.classList.remove('active')
  dotDay?.classList.remove('active')
  dotSunny?.classList.remove('active')
  if (mode === 'night') dotNight?.classList.add('active')
  else if (mode === 'day') dotDay?.classList.add('active')
  else if (mode === 'sunny') dotSunny?.classList.add('active')
  currentModeLabel.value = mode
}

function setTheme(mode) {
  const body = document.body
  body.classList.remove('light', 'sunny')
  if (mode === 'day') body.classList.add('light')
  else if (mode === 'sunny') body.classList.add('light', 'sunny')
  localStorage.setItem('xiaogai-display-mode', mode)
  updateModeDots(mode)
}

function getCurrentTheme() {
  const body = document.body
  if (body.classList.contains('light') && body.classList.contains('sunny')) return 'sunny'
  if (body.classList.contains('light')) return 'day'
  return 'night'
}

function initTheme() {
  const savedMode = localStorage.getItem('xiaogai-display-mode')
  if (savedMode === 'day') setTheme('day')
  else if (savedMode === 'sunny') setTheme('sunny')
  else setTheme('night')
}

function handleKeydown(e) {
  const key = e.key.toLowerCase()
  if (key === 'd') setTheme('day')
  else if (key === 'n') setTheme('night')
  else if (key === 's') setTheme('sunny')
}

// 留言表单（简单示例，需对接真实后端）
const commentAuthor = ref('')
const commentContent = ref('')
function submitComment() {
  // 这里可以调用 API 保存评论
  console.log('提交留言', commentAuthor.value, commentContent.value)
  alert('留言功能暂未开放，请稍后再试。')
  commentAuthor.value = ''
  commentContent.value = ''
}

onMounted(() => {
  initTheme()
  window.addEventListener('keydown', handleKeydown)

  const dotNight = document.getElementById('dot-night')
  const dotDay = document.getElementById('dot-day')
  const dotSunny = document.getElementById('dot-sunny')
  if (dotNight) dotNight.addEventListener('click', () => setTheme('night'))
  if (dotDay) dotDay.addEventListener('click', () => setTheme('day'))
  if (dotSunny) dotSunny.addEventListener('click', () => setTheme('sunny'))

  // 背景媒体播放（需要用户交互）
  const audio = document.getElementById('forest-audio')
  const video = document.getElementById('leaves-overlay')
  if (audio && video) {
    const playMedia = () => {
      audio.play().catch(e => console.log('Audio play prevented:', e))
      video.play().catch(e => console.log('Video play prevented:', e))
      window.removeEventListener('click', playMedia)
    }
    window.addEventListener('click', playMedia)
  }
})
</script>

<style scoped>
.post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
</style>