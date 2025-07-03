// 引入 createApp 和 createPinia
import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

// 创建应用实例
const app = createApp(App);
// 创建 Pinia 实例并挂载
app.use(createPinia());
// 挂载应用到 #app
app.mount("#app");
// 以上确保 Pinia 插件已注册，主题状态管理可用
