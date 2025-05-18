<script setup>
// 根组件无需特殊逻辑，主要用于承载路由视图
</script>

<template>
  <div>
    <h1>路由权限控制演示</h1>
    <!-- 路由出口，动态渲染当前路由对应的组件 -->
    <router-view />
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
  margin-bottom: 24px;
  text-align: center;
}
</style>
