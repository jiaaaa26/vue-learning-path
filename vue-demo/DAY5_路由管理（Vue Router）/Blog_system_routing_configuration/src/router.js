// 路由配置文件，定义博客系统的所有路由
import { createRouter, createWebHistory } from "vue-router";
import PostList from "./components/PostList.vue";
import PostDetail from "./components/PostDetail.vue";
import CategoryPosts from "./components/CategoryPosts.vue";

// 定义路由规则
const routes = [
  {
    path: "/",
    name: "PostList",
    component: PostList,
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true, // 通过props接收id参数
  },
  {
    path: "/category/:tag",
    name: "CategoryPosts",
    component: CategoryPosts,
    props: true, // 通过props接收tag参数
  },
];

// 创建并导出路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
