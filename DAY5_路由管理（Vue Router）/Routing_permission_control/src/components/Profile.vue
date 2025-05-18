<template>
  <div class="profile-container">
    <h2>个人中心</h2>
    <p>欢迎，您已成功登录！</p>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// 退出登录函数，清除登录状态并跳转到登录页
function handleLogout() {
  localStorage.removeItem("isLogin");
  router.replace("/login");
}
</script>

<style scoped>
.profile-container {
  max-width: 320px;
  margin: 60px auto;
  padding: 32px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafbfc;
  text-align: center;
}
button {
  margin-top: 24px;
  padding: 8px 16px;
  background: #e67e22;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
</style>
