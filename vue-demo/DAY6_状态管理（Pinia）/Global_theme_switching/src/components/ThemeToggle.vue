<script setup>
import { useThemeStore } from "../stores/themeStore";
import { storeToRefs } from "pinia";

// 获取主题 store
const themeStore = useThemeStore();
const { mode } = storeToRefs(themeStore);

// 切换主题
function toggleTheme() {
  themeStore.toggleTheme();
}
</script>

<template>
  <button
    @click="toggleTheme"
    :aria-label="mode === 'light' ? '切换为暗色模式' : '切换为亮色模式'"
  >
    {{ mode === "light" ? "🌞 亮色模式" : "🌙 暗色模式" }}
  </button>
</template>

<style scoped>
button {
  padding: 0.5em 1.2em;
  border-radius: 6px;
  border: none;
  background: var(--theme-btn-bg);
  color: var(--theme-btn-text);
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
button:hover {
  opacity: 0.85;
}
</style>
