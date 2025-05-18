<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
// 接收路由参数id
const props = defineProps({ id: [String, Number] });
const router = useRouter();
// 模拟文章数据
const posts = [
  { id: 1, title: "Vue3 路由入门", content: "这是关于Vue3路由的详细内容。" },
  { id: 2, title: "Vue3 组件通信", content: "这是关于组件通信的详细内容。" },
  { id: 3, title: "JavaScript 基础", content: "这是关于JS基础的详细内容。" },
];
// 查找当前文章
const post = posts.find((p) => String(p.id) === String(props.id));
// 返回列表
function goBack() {
  router.push({ name: "PostList" });
}
</script>

<template>
  <div>
    <h2>文章详情</h2>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
    <div v-else>
      <p>未找到该文章</p>
    </div>
    <button @click="goBack">返回列表</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 16px;
}
</style>
