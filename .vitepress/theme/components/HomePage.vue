<template>
  <div class="custom-home">
    <!-- 背景特效元素 -->
    <div class="noise"></div>
    <video id="leaves-overlay" src="/leaves.mp4" loop muted playsinline preload="none"></video>
    <audio id="forest-audio" src="/forest.mp3" loop preload="none"></audio>
    <div class="sun-glow"></div>
    <div class="light-shaft light-shaft-1"></div>
    <div class="light-shaft light-shaft-2"></div>
    <div class="light-shaft light-shaft-3"></div>

    <!-- 右上角导航栏 -->
    <div class="mode-indicator">
      <a class="subtle-link mode-link" target="_blank" href="https://blog.yeshan-taoist.cn/">我的博客</a>
      <div class="mode-dot" id="dot-night"></div>
      <div class="mode-dot" id="dot-day"></div>
      <div class="mode-dot" id="dot-sunny"></div>
    </div>

    <main class="page">
      <!-- 标题 -->
      <section class="hero home-hero">
        <div class="logo">
          <button class="logo-letter" @click="cycleTheme">
            笔<span class="logo-hint">Bi</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            由<span class="logo-hint">You</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            随<span class="logo-hint">Sui</span>
          </button>
          <button class="logo-letter" @click="cycleTheme">
            心<span class="logo-hint">Xin</span>
          </button>
        </div>
        <p class="bio">📖笔由随心是一个个人笔记的集合。</p>
      </section>

      <div class="divider"></div>

      <!-- 文章列表 -->
      <section class="section home-stream-section">
        <div class="section-head">
          <div></div>
        </div>
        <div class="entries">
          <article v-for="post in paginatedPosts" :key="post.url" class="entry-card visible">
            <a class="entry-link" :href="post.url">
              <h2 class="entry-title">{{ post.title }}</h2>
              <p class="entry-excerpt">{{ post.summary }}</p>
              <div class="entry-meta"><span class="meta-chip" :datetime="post.date">{{ post.date }}</span></div>
            </a>
          </article>
        </div>
        <div v-if="latestPosts.length === 0" id="posts-empty" class="empty-state">还没有发布文章。你可以先去后台写第一篇。</div>
      </section>

      <!-- 翻页功能 -->
      <div v-if="totalPages > 1" id="home-posts-pagination" class="home-pagination">
        <button class="button button-ghost home-page-button" type="button" :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)">上一页</button>
        <div class="home-page-indicator">第 {{ currentPage }} / {{ totalPages }} 页</div>
        <button class="button button-ghost home-page-button" type="button" :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)">下一页</button>
      </div>

      <div class="divider"></div>

      <!-- Connect -->
      <section class="section connect-section">
        <div class="section-title">Connect</div>
        <div class="links links-connect">
          <a href="https://v.douyin.com/HsoNLClVVMk/" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://space.bilibili.com/628881884?spm_id_from=333.1007.0.0" target="_blank"
            rel="noreferrer">BiLiBiLi</a>
          <a href="mailto:mypotato90@outlook.com">邮箱</a>
        </div>
      </section>
    </main>

    <div class="shortcuts-hint">
      <kbd>D</kbd> day &nbsp; <kbd>N</kbd> night &nbsp; <kbd>S</kbd> sunny
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { postsData } from '/posts.ts'   // 确保你的数据文件是 posts.ts 并放在根目录

// 文章翻页功能
const latestPosts = postsData.allPosts
// 分页配置
const pageSize = 6           // 每页显示文章数，可根据需要调整
const currentPage = ref(1)

// 所有文章（从 postsData.allPosts 获取）
const allPosts = postsData.allPosts

// 总页数
const totalPages = computed(() => Math.ceil(allPosts.length / pageSize))

// 当前页显示的文章
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return allPosts.slice(start, start + pageSize)
})

// 切换页码
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // 可选：滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
// 核心主题设置函数

// 定义更新圆点的函数
function updateModeDots(mode) {
  // 在函数内部获取元素，避免使用外部变量
  const dotNight = document.getElementById('dot-night')
  const dotDay = document.getElementById('dot-day')
  const dotSunny = document.getElementById('dot-sunny')

  // 移除所有圆点的 active 类（使用可选链避免空值报错）
  dotNight?.classList.remove('active')
  dotDay?.classList.remove('active')
  dotSunny?.classList.remove('active')

  // 根据当前模式高亮对应圆点
  if (mode === 'night') {
    dotNight?.classList.add('active')
  } else if (mode === 'day') {
    dotDay?.classList.add('active')
  } else if (mode === 'sunny') {
    dotSunny?.classList.add('active')
  }
}
function setTheme(mode) {
  const body = document.body
  body.classList.remove('light', 'sunny')
  if (mode === 'day') {
    body.classList.add('light')
  } else if (mode === 'sunny') {
    body.classList.add('light', 'sunny')
  }
  // night 模式不添加任何额外类
  localStorage.setItem('xiaogai-display-mode', mode)
  updateModeDots(mode)   // 新增：更新圆点高亮
}

// 获取当前主题
function getCurrentTheme() {
  const body = document.body
  if (body.classList.contains('light') && body.classList.contains('sunny')) {
    return 'sunny'
  } else if (body.classList.contains('light')) {
    return 'day'
  } else {
    return 'night'
  }
}

// 循环切换主题
function cycleTheme() {
  const themeOrder = ['day', 'sunny', 'night']
  const current = getCurrentTheme()
  const nextIndex = (themeOrder.indexOf(current) + 1) % themeOrder.length
  const next = themeOrder[nextIndex]
  setTheme(next)
}

// 初始化主题（从 localStorage 恢复）
function initTheme() {
  const savedMode = localStorage.getItem('xiaogai-display-mode')
  if (savedMode === 'day') {
    document.body.classList.add('light')
  } else if (savedMode === 'sunny') {
    document.body.classList.add('light', 'sunny')
  } else {
    document.body.classList.remove('light', 'sunny')
  }
  updateModeDots(savedMode === 'day' ? 'day' : (savedMode === 'sunny' ? 'sunny' : 'night'))
}

// 键盘快捷键处理
function handleKeydown(e) {
  const key = e.key.toLowerCase()
  if (key === 'd') setTheme('day')
  else if (key === 'n') setTheme('night')
  else if (key === 's') setTheme('sunny')
}

onMounted(() => {
  initTheme()
  window.addEventListener('keydown', handleKeydown)

  // 为模式指示器圆点添加点击事件（可选）
  const dotNight = document.getElementById('dot-night')
  const dotDay = document.getElementById('dot-day')
  const dotSunny = document.getElementById('dot-sunny')
  if (dotNight) dotNight.addEventListener('click', () => setTheme('night'))
  if (dotDay) dotDay.addEventListener('click', () => setTheme('day'))
  if (dotSunny) dotSunny.addEventListener('click', () => setTheme('sunny'))

  // 背景音频和视频播放（需要用户首次点击）
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