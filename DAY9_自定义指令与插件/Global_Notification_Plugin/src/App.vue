<script setup>
// 引入通知组件
import Notification from "./components/Notification.vue";
import { ref } from "vue";

// 定义响应式变量用于测试
const msg = ref("Hello，通知测试！");
const type = ref("success");
const duration = ref(3000);

// 切换不同类型和内容
function showSuccess() {
  msg.value = "操作成功！";
  type.value = "success";
}
function showWarning() {
  msg.value = "注意，这是一条警告！";
  type.value = "warning";
}
function showError() {
  msg.value = "出错了，请重试！";
  type.value = "error";
}
</script>

<template>
  <div>
    <button @click="showSuccess">显示成功通知</button>
    <button @click="showWarning">显示警告通知</button>
    <button @click="showError">显示错误通知</button>
    <!-- 传递props进行测试 -->
    <Notification :message="msg" :type="type" :duration="duration" />
  </div>
</template>

<style scoped>
button {
  margin: 0 8px 16px 0;
}
</style>
