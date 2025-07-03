import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import lazyImg from "./directives/lazy-img";

const app = createApp(App);
// 全局注册懒加载图片指令
// 这样所有组件都可以直接用 v-lazy-img
app.directive("lazy-img", lazyImg);

app.mount("#app");
