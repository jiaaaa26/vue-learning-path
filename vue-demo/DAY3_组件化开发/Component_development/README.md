# DAY3：Vue3 组件化开发实践

本项目为 [vue-learning-path](https://github.com/jiaaaa26/vue-learning-path) 仓库的第三天内容，聚焦于 Vue3 的组件化开发。通过实际编码练习，掌握组件拆分、props 传递、事件通信、插槽等核心知识点。

## 今日目标

- 理解并掌握 Vue3 组件化开发的基本思想
- 学会父子组件通信、事件传递与插槽用法
- 实践开发常见的 TodoList 和评分组件

## 主要内容

### 1. TodoList 组件化重构

- 拆分为 TodoList 父组件和 TodoItem 子组件
- 父组件通过 props 向子组件传递任务数据
- 子组件通过自定义事件实现任务删除
- 使用插槽显示“无任务”时的默认内容

### 2. StarRating 评分组件开发

- 支持自定义星星数量（maxStars）和双向绑定（v-model）
- 点击星星触发 `update:modelValue` 事件
- 通过插槽自定义激活/未激活星星的显示样式
