<!--
  任务1-父组件 TodoList
  管理任务列表，传递数据给子组件，处理删除
-->
<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

/**
 * todos: 任务列表数据
 */
const todos = ref([
  { id: 1, text: '学习组件', done: true },
  { id: 2, text: '练习Props', done: false }
])

/**
 * 删除指定id的任务
 * @param {number} id
 */
function removeTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<template>
  <div>
    <h2>任务1：TodoList组件化重构</h2>
    <ul v-if="todos.length">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo(todo.id)"
      />
    </ul>
    <!-- 插槽显示无任务 -->
    <slot v-else>无任务</slot>
  </div>
</template>