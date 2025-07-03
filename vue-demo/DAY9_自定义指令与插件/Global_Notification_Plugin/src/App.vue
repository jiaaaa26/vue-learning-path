<script setup>
// 引入 getCurrentInstance 用于获取全局方法
import { ref, getCurrentInstance } from "vue";

// 获取当前组件实例，便于调用全局方法
const { proxy } = getCurrentInstance();

/**
 * 显示成功通知
 */
function showSuccess() {
  proxy.$notify({
    type: "success",
    message: "操作成功！",
    duration: 3000,
  });
}

/**
 * 显示警告通知
 */
function showWarning() {
  proxy.$notify({
    type: "warning",
    message: "注意，这是一条警告！",
    duration: 3000,
  });
}

/**
 * 显示错误通知
 */
function showError() {
  proxy.$notify({
    type: "error",
    message: "出错了，请重试！",
    duration: 3000,
  });
}
</script>

<template>
  <div>
    <button @click="showSuccess">显示成功通知</button>
    <button @click="showWarning">显示警告通知</button>
    <button @click="showError">显示错误通知</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 8px 16px 0;
}
</style>
