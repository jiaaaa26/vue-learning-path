<script setup>
import { ref } from "vue";
import TodoList from "./components/TodoList.vue";
import StarRating from "./components/StarRating.vue";

/**
 * 评分组件的分数
 */
const rating = ref(3);
</script>

<template>
  <div>
    <!-- 任务1：TodoList组件化重构演示 -->
    <TodoList>
      <template #default>
        <div style="color: #888">无任务</div>
      </template>
    </TodoList>

    <hr />

    <!-- 任务2：评分组件开发演示 -->
    <StarRating v-model="rating" :maxStars="5">
      <template #star="{ active, index }">
        <!-- 自定义星星样式 -->
        <span :style="{ color: active ? 'gold' : '#ddd', fontSize: '2em' }">
          {{ active ? "★" : "☆" }}
        </span>
      </template>
    </StarRating>
    <div>当前评分：{{ rating }}</div>
  </div>
</template>

<style scoped>
hr {
  margin: 2em 0;
}
</style>
