<template>
  <div>
    <div v-if="userStore.isLogin">
      已登录，欢迎：{{ userStore.name }}
      <button @click="logout">退出登录</button>
    </div>
    <div v-else>
      <input v-model="username" placeholder="请输入用户名" />
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
const username = ref("");

function login() {
  if (username.value.trim()) {
    userStore.login(username.value.trim());
    username.value = "";
  } else {
    alert("请输入用户名");
  }
}

function logout() {
  userStore.isLogin = false;
  userStore.name = "Guest";
}
</script>
<style scoped>
div {
  margin-bottom: 20px;
  padding: 16px;
  background: #f6f8fa;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(60, 60, 60, 0.06);
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}
input {
  padding: 8px 12px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  margin-right: 8px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.2s;
}
input:focus {
  border-color: #646cff;
}
button {
  background: linear-gradient(90deg, #646cff 0%, #535bf2 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: linear-gradient(90deg, #535bf2 0%, #646cff 100%);
}
</style>
