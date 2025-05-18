- 项目简介（10天Vue3学习，每天一个主题）
- 每天的学习内容简要介绍
- 项目结构说明
- 如何在本地运行和体验每一天的项目
- 如何将项目部署到 GitHub 并展示
- 鼓励他人学习和参与
---

# vue-learning-path

> 🌟 10天精通Vue3，从零到实战，每天一个主题，逐步构建你的前端能力！

## 项目简介

本仓库是一个为期10天的Vue3学习路径，每天聚焦一个核心主题，配套实战项目，帮助你系统掌握Vue3及其生态。每个子文件夹对应一天的学习内容，适合初学者和进阶者自学、复盘或教学使用。

## 目录结构

```
vue-learning-path/
├── DAY1_环境搭建与基础语法/
├── DAY2_响应式数据与事件处理/
├── DAY3_组件化开发/
├── DAY4_组合式API（Composition）/
├── DAY5_路由管理（Vue Router）/
├── DAY6_状态管理（Pinia）/
├── DAY7_API与异步处理/
├── DAY8_性能优化/
├── DAY9_自定义指令与插件/
├── DAY10_部署与监控/
└── README.md
```

## 每日学习主题

- **DAY1 环境搭建与基础语法**  
  Vue3开发环境搭建、项目初始化、模板语法、指令基础。

- **DAY2 响应式数据与事件处理**  
  响应式原理、ref/reactive、事件绑定与处理。

- **DAY3 组件化开发**  
  组件注册、props/emit、插槽、组件通信。

- **DAY4 组合式API（Composition API）**  
  setup、生命周期、组合式函数、逻辑复用。

- **DAY5 路由管理（Vue Router）**  
  路由配置、动态路由、嵌套路由、路由守卫。

- **DAY6 状态管理（Pinia）**  
  Pinia基础、store设计、模块化、与组件联动。

- **DAY7 API与异步处理**  
  axios/fetch、数据请求、异步流程、错误处理。

- **DAY8 性能优化**  
  虚拟列表、懒加载、按需加载、性能分析。

- **DAY9 自定义指令与插件**  
  指令开发、插件封装、全局功能扩展。

- **DAY10 部署与监控**  
  项目打包、部署到GitHub Pages、基础监控方案。

## 如何本地运行

1. 克隆仓库：
   ```bash
   git clone https://github.com/你的用户名/vue-learning-path.git
   cd vue-learning-path
   ```
2. 进入对应天的项目文件夹，安装依赖并运行（以DAY1为例）：
   ```bash
   cd DAY1_环境搭建与基础语法/Environment_and_syntax
   npm install
   npm run dev
   ```
3. 其余天数同理，进入对应目录操作。

## 如何部署到GitHub Pages

1. 确保每个子项目都已打包（通常为`npm run build`）。
2. 将打包后的`dist`目录推送到GitHub仓库的`gh-pages`分支，或使用GitHub Actions自动部署。
3. 参考[官方文档](https://cli.vuejs.org/zh/guide/deployment.html#github-pages)进行配置。

## 贡献与交流

欢迎大家提Issue、PR，或在Discussions区交流学习心得。希望这个项目能帮助你高效掌握Vue3，迈向更高的前端水平！

---


