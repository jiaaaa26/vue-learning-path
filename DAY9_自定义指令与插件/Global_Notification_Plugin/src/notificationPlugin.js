import { createVNode, render, reactive } from "vue";
import Notification from "./components/Notification.vue";

// 通知队列，最多显示3条
const notifications = reactive([]);

/**
 * 通知容器组件，负责渲染所有通知
 */
const NotificationContainer = {
  setup() {
    return () =>
      notifications.map((item) =>
        // 通过 key 保证每条通知唯一
        createVNode(Notification, {
          ...item,
          key: item.id,
          // 通知关闭时的回调
          onClose: () => remove(item.id),
        })
      );
  },
};

/**
 * 移除通知
 * @param {number} id - 通知唯一标识
 */
function remove(id) {
  const idx = notifications.findIndex((item) => item.id === id);
  if (idx !== -1) {
    notifications.splice(idx, 1);
  }
}

/**
 * 插件主入口
 * @param {App} app - Vue应用实例
 */
export default {
  install(app) {
    // 创建并挂载通知容器
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "24px";
    container.style.right = "24px";
    container.style.zIndex = "9999";
    document.body.appendChild(container);
    render(createVNode(NotificationContainer), container);

    /**
     * 全局$notify方法
     * @param {Object} options - 通知参数
     * @param {string} options.type - 通知类型 success/warning/error
     * @param {string} options.message - 通知内容
     * @param {number} options.duration - 显示时长(ms)
     */
    app.config.globalProperties.$notify = function (options) {
      // 队列管理，最多显示3条
      if (notifications.length >= 3) {
        // 超出队列，移除最早的一条
        notifications.shift();
      }
      // 生成唯一id
      const id = Date.now() + Math.random();
      // 添加通知到队列
      notifications.push({
        ...options,
        id,
        // 传递关闭回调
        onClose: () => remove(id),
      });
    };
  },
};
