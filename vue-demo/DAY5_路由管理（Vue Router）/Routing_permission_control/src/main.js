import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// 挂载路由实例，启用路由权限控制
app.use(router);
app.mount("#app");
import "./style.css";
