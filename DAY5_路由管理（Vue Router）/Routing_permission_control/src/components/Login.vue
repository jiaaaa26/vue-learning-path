<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label>用户名：</label>
        <input v-model="username" required />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

// 用户名和密码输入框的响应式变量
const username = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const route = useRoute();

// 登录处理函数，模拟登录并保存登录状态
function handleLogin() {
  if (username.value === "user" && password.value === "123") {
    // 登录成功，保存登录状态到 localStorage
    localStorage.setItem("isLogin", "true");
    // 跳转回原目标页或首页
    const redirect = route.query.redirect || "/";
    router.replace(redirect);
  } else {
    error.value = "用户名或密码错误（user/123）";
  }
}
</script>

<style scoped>
.login-container {
  max-width: 320px;
  margin: 60px auto;
  padding: 32px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafbfc;
}
label {
  display: inline-block;
  width: 60px;
}
input {
  margin-bottom: 12px;
  padding: 4px 8px;
}
button {
  width: 100%;
  padding: 8px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
.error {
  color: #e74c3c;
  margin-top: 10px;
}
</style>
