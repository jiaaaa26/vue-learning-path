import { createVNode, render, reactive } from "vue";
import Notification from "./components/Notification.vue";
// 通知队列，最多显示3条
const notifications = reactive([]);
/**
 * 通知容器组件，负责渲染所有通知
 */
const NotificationContainer = {};
