<template>
  <div class="zhenfa-container">
    <table>
      <caption>阵法图鉴</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>作用</th>
          <th>价格</th>
          <th>出处</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in zhenfaData" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.effect }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.source || '—' }}</td>
        </tr>
        <tr v-if="zhenfaData.length === 0">
          <td colspan="4" class="empty-row">暂无阵法记录</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { zhenfaData } from '../../../data/zhenfa'
</script>

<style scoped>
.zhenfa-container {
  font-family: "Noto Serif SC", "楷体", "KaiTi", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
}

table {
  border-collapse: collapse;
  max-width: 800px;
  width: 100%;
  background: #fffef7;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
}

caption {
  font-size: 1.3rem;
  font-weight: bold;
  color: #4a3620;
  margin-bottom: 1rem;
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