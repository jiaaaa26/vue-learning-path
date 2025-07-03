<script setup>
// 引入自定义Hook useSearch
import { useSearch } from "./useSearch.js";
import { ref } from "vue";

// 模拟原始数据列表
const originList = ref([
  "Vue3 组合式API",
  "React Hooks",
  "Angular 指令",
  "前端工程化",
  "TypeScript 类型系统",
  "Node.js 服务端",
  "Vite 极速构建",
  "Webpack 打包",
  "JavaScript 基础",
  "CSS3 动画",
]);

// 使用useSearch Hook，传入原始列表的ref
const { keyword, filteredList } = useSearch(originList);
</script>

<template>
  <div style="max-width: 400px; margin: 40px auto">
    <h2>实时搜索过滤器（组合式API练习）</h2>
    <!-- 搜索输入框，v-model绑定关键词 -->
    <input
      v-model="keyword"
      type="text"
      placeholder="请输入关键词..."
      style="
        width: 100%;
        padding: 8px;
        margin-bottom: 16px;
        border-radius: 4px;
        border: 1px solid #ccc;
      "
    />
    <!-- 展示过滤后的列表 -->
    <ul>
      <li
        v-for="item in filteredList"
        :key="item"
        style="padding: 6px 0; border-bottom: 1px solid #eee"
      >
        {{ item }}
      </li>
      <li v-if="filteredList.length === 0" style="color: #888">无匹配结果</li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 24px;
}
</style>
