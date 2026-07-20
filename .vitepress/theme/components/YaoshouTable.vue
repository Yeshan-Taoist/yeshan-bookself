<template>
  <div class="yaoshou-container">

    <div class="filter-section">
      <div class="filter-bar">
        <button v-for="cat in categories" :key="cat.value"
          :class="['filter-btn', { active: currentCategory === cat.value }]" @click="currentCategory = cat.value">
          {{ cat.label }}
        </button>
      </div>
    </div>

    <table>
      <caption>妖兽图鉴</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>类别</th>
          <th>描述</th>
          <th>其他说明</th>
          <th>价格</th>
          <th>出处</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.notes || '—' }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.source || '—' }}</td>
        </tr>
        <tr v-if="filteredList.length === 0">
          <td colspan="6" class="empty-row">暂无对应妖兽</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { yaoshouData, categories } from '../../../data/yaoshou'

const currentCategory = ref('all')

const filteredList = computed(() => {
  if (currentCategory.value === 'all') return yaoshouData
  return yaoshouData.filter(item => item.category === currentCategory.value)
})
</script>

<style scoped>
.yaoshou-container {
  font-family: "Noto Serif SC", "楷体", "KaiTi", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-section {
  margin: 1.5rem 0;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
}

.filter-btn {
  background: #d9c8a8;
  border: 1px solid #8b7356;
  color: #3e2e1f;
  padding: 0.4rem 1.2rem;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
}

.filter-btn.active,
.filter-btn:hover {
  background: #b3946b;
  color: white;
  border-color: #5e4432;
}

table {
  border-collapse: collapse;
  max-width: 100%;
  background: #fffef7;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
}

caption {
  font-size: 1.3rem;
  font-weight: bold;
  color: #4a3620;
}

th,
td {
  border: 1px solid #c4b292;
  padding: 12px 16px;
  text-align: center;
}

thead th {
  background: #5e4b38;
  color: #f7eac9;
  font-weight: 500;
}

tbody tr:hover {
  background-color: #dfd2b6;
  color: #000000;
}

.empty-row {
  color: #8b7356;
  font-style: italic;
}
</style>