<script setup>
import { ref, onMounted, watch, nextTick } from "vue";

// 表格每次渲染的行数
const CHUNK_SIZE = 50;
// 总行数
const TOTAL_ROWS = 100000;
// 列定义
const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "姓名" },
  { key: "age", label: "年龄" },
  { key: "address", label: "地址" },
];

// 生成模拟数据
function generateData(count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      id: i + 1,
      name: `用户${i + 1}`,
      age: 18 + (i % 50),
      address: `城市${(i % 100) + 1}`,
    });
  }
  return arr;
}

// 源数据
const rawData = ref(generateData(TOTAL_ROWS));
// 当前渲染的数据块
const visibleData = ref([]);
// 当前已渲染的块数
const chunkCount = ref(1);
// Intersection Observer 目标元素
const sentinel = ref(null);
// 排序状态
const sortState = ref({ key: "", asc: true });
// Web Worker 实例
let worker = null;

// 初始化渲染第一块数据
function initVisibleData() {
  visibleData.value = rawData.value.slice(0, CHUNK_SIZE);
  chunkCount.value = 1;
}

// 懒加载下一块数据
function loadNextChunk() {
  const start = chunkCount.value * CHUNK_SIZE;
  const end = start + CHUNK_SIZE;
  if (start < rawData.value.length) {
    visibleData.value = visibleData.value.concat(
      rawData.value.slice(start, end)
    );
    chunkCount.value++;
  }
}

// Intersection Observer 懒加载实现
function setupObserver() {
  if (!sentinel.value) return;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadNextChunk();
    }
  });
  observer.observe(sentinel.value);
}

// 排序/筛选（通过Web Worker）
function sortBy(key) {
  if (!worker) return;
  // 切换排序顺序
  if (sortState.value.key === key) {
    sortState.value.asc = !sortState.value.asc;
  } else {
    sortState.value.key = key;
    sortState.value.asc = true;
  }
  worker.postMessage({
    type: "sort",
    key,
    asc: sortState.value.asc,
    data: rawData.value,
  });
}

// 初始化Web Worker
function initWorker() {
  worker = new Worker(new URL("./tableWorker.js", import.meta.url), {
    type: "module",
  });
  worker.onmessage = (e) => {
    if (e.data.type === "sorted") {
      rawData.value = e.data.data;
      initVisibleData();
      nextTick(setupObserver);
    }
  };
}

onMounted(() => {
  initWorker();
  initVisibleData();
  nextTick(setupObserver);
});

watch(rawData, () => {
  initVisibleData();
  nextTick(setupObserver);
});
</script>

<template>
  <div class="table-container">
    <table class="virtual-table">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" @click="sortBy(col.key)">
            {{ col.label }}
            <span v-if="sortState.key === col.key">
              {{ sortState.asc ? "↑" : "↓" }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in visibleData" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.address }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 懒加载触发点 -->
    <div ref="sentinel" class="sentinel"></div>
  </div>
</template>

<style scoped>
.table-container {
  height: 600px;
  overflow: auto;
  border: 1px solid #ddd;
  position: relative;
}
.virtual-table {
  width: 100%;
  border-collapse: collapse;
}
.virtual-table th,
.virtual-table td {
  border: 1px solid #eee;
  padding: 8px 12px;
  text-align: left;
  background: #fff;
}
.virtual-table th {
  background: #f5f5f5;
  cursor: pointer;
  user-select: none;
}
.sentinel {
  height: 1px;
}
</style>
