<!--
  任务1-子组件 TodoItem
  接收单个todo和删除事件
-->
<script setup>
/**
 * props:
 *  - todo: 单个任务对象
 */
defineProps({
  todo: {
    type: Object,
    required: true
  }
})
/**
 * emits:
 *  - remove: 触发删除事件
 */
const emit = defineEmits(['remove'])
</script>

<template>
  <li>
    <span :style="{textDecoration: todo.done ? 'line-through' : 'none'}">{{ todo.text }}</span>
    <button @click="emit('remove')">删除</button>
  </li>
</template>