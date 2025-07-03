<script setup>
import { ref, reactive } from "vue";

defineProps({
  msg: String,
});

// #计数器进阶版-开始
// 响应式计数变量
const count = ref(0);

/**
 * 增加1
 */
function increment() {
  count.value++;
}

/**
 * 减少1
 */
function decrement() {
  count.value--;
}

/**
 * 数值翻倍
 */
function double() {
  count.value *= 2;
}

/**
 * 重置为0
 */
function reset() {
  count.value = 0;
}
// #计数器进阶版-结束
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- #计数器进阶版-开始 -->
  <div class="card">
    <button @click="increment"><b>+1</b></button>
    <button @click="decrement"><b>-1</b></button>
    <button @click="double">×2</button>
    <button @click="reset">重置</button>
    <p :style="{ color: count < 0 ? 'red' : '' }">当前数值：{{ count }}</p>
  </div>
  <!-- #计数器进阶版-结束 -->
</template>

<style scoped></style>
