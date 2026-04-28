<template>
  <div class="lingfu-container">

    <div class="filter-section">
      <div class="filter-bar">
        <button v-for="cat in categories" :key="cat.value"
          :class="['filter-btn', { active: currentCategory === cat.value }]" @click="currentCategory = cat.value">
          {{ cat.label }}
        </button>
      </div>
      <div class="filter-bar">
        <button v-for="grade in grades" :key="grade.value"
          :class="['filter-btn', { active: currentGrade === grade.value }]" @click="currentGrade = grade.value">
          {{ grade.label }}
        </button>
      </div>
    </div>

    <table>
      <caption>灵符等级、分类与价格总览</caption>
      <thead>
        <tr>
          <th>灵符名称</th>
          <th>类别</th>
          <th>等级</th>
          <th>属性</th>
          <th>效果说明</th>
          <th>价格 (低阶灵石)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ item.attribute }}</td>
          <td>{{ item.effect }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { lingfuData, categories, grades } from '../../../data/lingfu'

const currentCategory = ref('all')
const currentGrade = ref('all')

const filteredList = computed(() => {
  return lingfuData.filter(item => {
    const matchCat = currentCategory.value === 'all' || item.category === currentCategory.value
    const matchGrade = currentGrade.value === 'all' || item.grade === currentGrade.value
    return matchCat && matchGrade
  })
})
</script>

<style scoped>
.lingfu-container {
  font-family: "Noto Serif SC", "楷体", "KaiTi", serif;
  background: #f9f3e3;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #4a3620;
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
}

.filter-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
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
  margin-bottom: 0.8rem;
  font-weight: bold;
}

th,
td {
  border: 1px solid #c4b292;
  padding: 12px 18px;
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
</style>