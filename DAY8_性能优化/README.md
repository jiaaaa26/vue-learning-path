# Vue3 学习路径 - 第八天：性能优化

欢迎来到我的 Vue3 性能优化项目！本仓库包含两个性能优化场景的实现，所有代码和笔记都会同步到 [vue-learning-path](https://github.com/jiaaaa26/vue-learning-path) 仓库。

---

## 📅 Day8：性能优化实战

### 核心优化场景

#### 场景一：十万级数据表格优化

- **技术栈**：Vue3 + Web Worker + Intersection Observer
- **优化手段**：
  - 虚拟滚动（分块加载）：每次仅渲染 50 行数据
  - Web Worker 后台排序：避免主线程阻塞
  - Intersection Observer 懒加载：滚动到底部自动加载
  - 响应式数据优化：使用`ref`代替`reactive`

#### 场景二：图片懒加载指令

- **技术实现**：自定义指令 `v-lazy-img`
- **核心功能**：
  - 自动 WebP 格式检测与优先加载
  - 低分辨率占位图（LQIP）技术
  - 加载失败自动降级
  - Intersection Observer 实现可视区域检测

---
