# Vue3 学习路径 - 第四天：组合式 API（Composition API）

欢迎来到我的 Vue3 学习路径项目！本仓库将记录我连续十天学习 Vue3 的过程，每天一个主题，每天一个小项目，最终所有代码和笔记都会同步到 [vue-learning-path](https://github.com/jiaaaa26/vue-learning-path) 仓库，欢迎大家 star 和交流。

---

## 📅 Day4：组合式 API（Composition API）

### 主要内容

- 理解并掌握 Vue3 组合式 API 的基本用法
- 学习如何通过自定义 Hook（组合函数）实现逻辑复用
- 掌握 `ref`、`reactive`、`computed`、`watchEffect` 等核心 API
- 体验组合式 API 在实际开发中的优势

### 练习任务

#### 任务 1：购物车逻辑复用

1. 创建 `useCart` 自定义 Hook
2. 实现添加商品/删除商品/计算总价功能
3. 在不同组件中复用该逻辑

#### 任务 2：实时搜索过滤器

1. 创建 `useSearch` 自定义 Hook
2. 实现输入防抖（300ms）
3. 根据关键词过滤列表
4. 使用 `watchEffect` 自动追踪依赖

---

> 本项目为 Vue3 组合式 API 的实战练习，代码结构清晰，适合初学者参考和进阶。欢迎大家提出建议与交流心得！
