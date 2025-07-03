import { createApp } from "vue";
import App from "./App.vue";
import notificationPlugin from "./notificationPlugin";
const app = createApp(App);
app.use(notificationPlugin);
app.mount("#app");
