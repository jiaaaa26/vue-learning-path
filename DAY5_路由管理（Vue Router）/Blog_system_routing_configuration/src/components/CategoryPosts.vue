<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
// 接收路由参数tag
const props = defineProps({ tag: String });
const router = useRouter();
// 模拟文章数据
const posts = [
  { id: 1, title: "Vue3 路由入门", tag: "vue" },
  { id: 2, title: "Vue3 组件通信", tag: "vue" },
  { id: 3, title: "JavaScript 基础", tag: "js" },
];
// 根据tag筛选文章
const filteredPosts = posts.filter((p) => p.tag === props.tag);
// 返回列表
function goBack() {
  router.push({ name: "PostList" });
}
</script>

<template>
  <div>
    <h2>分类：{{ props.tag }}</h2>
    <ul>
      <li v-for="post in filteredPosts" :key="post.id">{{ post.title }}</li>
    </ul>
    <button @click="goBack">返回列表</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 16px;
}
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}
</style>
