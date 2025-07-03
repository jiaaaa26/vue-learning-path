<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ref, computed } from "vue";

// 任务1：动态文本绑定
// 当前时间字符串
const now = ref(new Date().toLocaleString());

// 定时更新时间
setInterval(() => {
  now.value = new Date().toLocaleString();
}, 1000);

// 任务2：条件渲染
// 控制文本显示的变量
const showTextIf = ref(true);
const showTextShow = ref(true);

// 任务3：列表渲染
// 商品列表
const products = ref([
  { id: 1, name: "鼠标", stock: 10 },
  { id: 2, name: "键盘", stock: 5 },
  { id: 3, name: "显示器", stock: 0 },
]);

// 计算商品的样式
function stockClass(stock) {
  // 库存大于5为绿色，5及以下为红色
  return {
    green: stock > 5,
    red: stock <= 5,
  };
}
</script>

<template>
  <main>
    <!-- 任务1：动态文本绑定 -->
    <section style="margin-top: 2rem">
      <h2>任务1：动态文本绑定</h2>
      <div>
        当前时间：<span>{{ now }}</span>
      </div>
    </section>

    <!-- 任务2：条件渲染 -->
    <section style="margin-top: 2rem">
      <h2>任务2：条件渲染</h2>
      <!-- v-if 实现 -->
      <div>
        <button @click="showTextIf = !showTextIf">切换 v-if 文本显示</button>
        <!-- v-if 控制 -->
        <p v-if="showTextIf">这是通过 v-if 控制显示的文本</p>
      </div>
      <!-- v-show 实现 -->
      <div style="margin-top: 1rem">
        <button @click="showTextShow = !showTextShow">
          切换 v-show 文本显示
        </button>
        <!-- v-show 控制 -->
        <p v-show="showTextShow">这是通过 v-show 控制显示的文本</p>
      </div>
    </section>

    <!-- 任务3：列表渲染 -->
    <section style="margin-top: 2rem">
      <h2>任务3：商品列表渲染</h2>
      <ul>
        <li v-for="item in products" :key="item.id">
          <!-- :class 绑定样式，库存>5绿色，<=5红色，0显示缺货 -->
          <span :class="stockClass(item.stock)">
            {{ item.name }} -
            <span v-if="item.stock === 0">缺货</span>
            <span v-else>库存：{{ item.stock }}</span>
          </span>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* 任务3：商品库存样式 */
.green {
  color: green;
}
.red {
  color: red;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
