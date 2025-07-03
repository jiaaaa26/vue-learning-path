// 路由配置文件，包含权限控制的 meta 字段
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";

// 路由表配置
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true }, // 需要认证
  },
  {
    path: "/",
    redirect: "/profile",
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置守卫，进行权限校验
router.beforeEach((to, from, next) => {
  // 判断目标路由是否需要认证
  if (to.meta.requiresAuth) {
    // 检查本地登录状态
    const isLogin = localStorage.getItem("isLogin") === "true";
    if (!isLogin) {
      // 未登录，重定向到登录页，并记录原目标路由
      next({ path: "/login", query: { redirect: to.fullPath } });
      return;
    }
  }
  next();
});

export default router;
