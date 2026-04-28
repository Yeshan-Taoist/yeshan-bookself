<template>
  <div class="zawu-container">
    <div class="filter-section">
      <div class="filter-bar">
        <button v-for="cat in zawuCategories" :key="cat.value"
          :class="['filter-btn', { active: currentCategory === cat.value }]" @click="currentCategory = cat.value">
          {{ cat.label }}
        </button>
      </div>
    </div>

    <table>
      <caption>修仙杂物一览</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>分类</th>
          <th>说明</th>
          <th>获取方式</th>
          <th>参考价格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.obtain }}</td>
          <td>{{ item.price }}</td>
        </tr>
        <tr v-if="filteredList.length === 0">
          <td colspan="5" class="empty-row">暂无对应杂物</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { zawuData, zawuCategories } from '../../../data/zawu'  // 路径按实际调整

const currentCategory = ref('all')

const filteredList = computed(() => {
  if (currentCategory.value === 'all') return zawuData
  return zawuData.filter(item => item.category === currentCategory.value)
})
</script>

<style scoped>
.zawu-container {
  font-family: "Noto Serif SC", "楷体", "KaiTi", serif;
  background: #f9f3e3;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-section {
  margin-bottom: 1.5rem;
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
  margin-bottom: 0.8rem;
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

tbody tr:nth-child(even) {
  background-color: #f3efe2;
}

tbody tr:hover {
  background-color: #dfd2b6;
}

.empty-row {
  color: #8b7356;
  font-style: italic;
}
</style>