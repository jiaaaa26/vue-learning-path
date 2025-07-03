# Vue3 学习路径 - 第九天：自定义指令与插件

欢迎来到我的 Vue3 学习路径项目！本仓库将记录我连续十天学习 Vue3 的过程，每天一个主题，最终所有代码和笔记都会同步到 [vue-learning-path](https://github.com/jiaaaa26/vue-learning-path) 仓库，欢迎大家 star 和交流。

---

## 📅 Day9：自定义指令与插件

### 主要内容

- 掌握 Vue3 插件开发规范与实现原理
- 开发全局通知系统插件（支持成功/警告/错误类型）
- 实现自定义指令（自动关闭、自动聚焦等）
- 学习插件挂载机制和响应式队列管理

### 练习任务

#### 1. **全局通知插件开发**

```javascript:src%2FnotificationPlugin.js
/**
 * 插件主入口
 * @param {App} app - Vue应用实例
 */
export default {
  install(app) {
    // 创建通知容器并挂载到body
    const container = document.createElement("div");
    document.body.appendChild(container);

    // 注册全局$notify方法
    app.config.globalProperties.$notify = (options) => {
      // 队列管理逻辑（最多显示3条）
      // 通知创建与动画处理
    };
  }
};
```
