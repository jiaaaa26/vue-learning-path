<script setup>
import { createPinia } from "pinia";
import { onMounted } from "vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import { useThemeStore } from "./stores/themeStore";

// 创建 Pinia 实例
const pinia = createPinia();
// 获取主题 store
const themeStore = useThemeStore();
// 页面加载时应用主题
onMounted(() => {
  themeStore.applyTheme();
});
</script>

<template>
  <ThemeToggle />
</template>

<style scoped>
W.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
