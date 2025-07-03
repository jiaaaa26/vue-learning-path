<!--
  任务2：评分组件 StarRating
  支持自定义星星数量、双向绑定、插槽自定义星星样式
-->
<script setup>
import { computed } from 'vue'

/**
 * props:
 *  - maxStars: 星星总数，默认5
 *  - modelValue: 当前选中星数
 */
const props = defineProps({
  maxStars: {
    type: Number,
    default: 5
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

/**
 * emits:
 *  - update:modelValue: 双向绑定事件
 */
const emit = defineEmits(['update:modelValue'])

/**
 * 处理点击星星
 * @param {number} idx
 */
function setRating(idx) {
  emit('update:modelValue', idx)
}

/**
 * 生成星星数组
 */
const stars = computed(() => Array.from({ length: props.maxStars }, (_, i) => i + 1))
</script>

<template>
  <div>
    <h2>任务2：评分组件开发</h2>
    <span
      v-for="star in stars"
      :key="star"
      @click="setRating(star)"
      style="cursor:pointer;"
    >
      <!-- 插槽自定义星星样式 -->
      <slot
        name="star"
        :active="star <= props.modelValue"
        :index="star"
      >
        <span :style="{color: star <= props.modelValue ? '#f90' : '#ccc'}">
          ★
        </span>
      </slot>
    </span>
  </div>
</template>