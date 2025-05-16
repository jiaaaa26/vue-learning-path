<template>
  <div class="notification" :class="type" v-show="visible">
    <span class="icon" v-if="type === 'success'">✔️</span>
    <span class="icon" v-else-if="type === 'warning'">⚠️</span>
    <span class="icon" v-else-if="type === 'error'">❌</span>
    <span class="message">{{ message }}</span>
    <button class="close-btn" @click="close">x</button>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "success", // 支持 success/warning/error
  },
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000, // 默认3秒后自动关闭
  },
});
// 控制通知显示/隐藏
const visible = ref(true);
let timer = null;
// 关闭通知的方法
function close() {
  visible.value = false;
  clearTimeout(timer);
}
// 组件挂载时，启动自动关闭的定时器
onMounted(() => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close();
    }, props.duration);
  }
});

// 组件卸载时，清理定时器
onBeforeUnmount(() => {
  clearTimeout(timer);
});
// 监听message变化时重置显示和定时器
watch(
  () => props.message,
  () => {
    visible.value = true;
    clearTimeout(timer);
    if (props.duration > 0) {
      timer = setTimeout(() => {
        close();
      }, props.duration);
    }
  }
);
</script>
<style scoped>
.notification {
  min-width: 220px;
  max-width: 350px;
  margin: 10px auto;
  padding: 14px 24px 14px 16px;
  border-radius: 6px;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  animation: fadeIn 0.3s;
}
.notification.success {
  background: #52c41a;
}
.notification.warning {
  background: #faad14;
}
.notification.error {
  background: #ff4d4f;
}
.icon {
  margin-right: 10px;
  font-size: 20px;
}
.message {
  flex: 1;
}
.close-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
