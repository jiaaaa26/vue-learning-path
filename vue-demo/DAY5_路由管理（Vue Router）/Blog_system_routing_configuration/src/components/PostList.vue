<script setup>
import { useRouter } from "vue-router";
// 模拟文章数据
const posts = [
  { id: 1, title: "Vue3 路由入门", tag: "vue" },
  { id: 2, title: "Vue3 组件通信", tag: "vue" },
  { id: 3, title: "JavaScript 基础", tag: "js" },
];
const router = useRouter();
// 跳转到文章详情页
function goDetail(id) {
  router.push({ name: "PostDetail", params: { id } });
}
// 跳转到分类文章页
function goCategory(tag) {
  router.push({ name: "CategoryPosts", params: { tag } });
}
</script>

<template>
  <div>
    <h2>文章列表</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span @click="goDetail(post.id)" style="cursor: pointer; color: blue">{{
          post.title
        }}</span>
        <span
          style="margin-left: 10px; cursor: pointer; color: green"
          @click="goCategory(post.tag)"
          >[{{ post.tag }}]</span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 8px;
}
</style>
