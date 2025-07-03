import { defineStore } from "pinia";

// 主题存储 key
const THEME_KEY = "theme-mode";

// 获取本地存储的主题，默认 light
function getInitialTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

// Pinia 主题 store，管理主题状态和切换逻辑
export const useThemeStore = defineStore("theme", {
  state: () => ({
    mode: getInitialTheme(), // light 或 dark
  }),
  actions: {
    // 切换主题方法
    toggleTheme() {
      this.mode = this.mode === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, this.mode);
      // 应用主题到根元素
      document.documentElement.setAttribute("data-theme", this.mode);
    },
    // 初始化时应用主题
    applyTheme() {
      document.documentElement.setAttribute("data-theme", this.mode);
    },
  },
});
