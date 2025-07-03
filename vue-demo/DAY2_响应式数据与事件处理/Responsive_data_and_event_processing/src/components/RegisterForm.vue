<script setup>
import { reactive, ref, computed } from "vue";

// #用户注册表单-开始
// 表单数据响应式对象
const formData = reactive({
  name: "",
  email: "",
  password: "",
});

// 密码强度提示
const passwordStrength = computed(() => {
  return formData.password.length >= 8 ? "强" : "弱";
});

// 邮箱格式校验
const emailValid = computed(() => {
  return formData.email.includes("@");
});

// 表单提交处理
function handleSubmit() {
  // 校验邮箱格式
  if (!emailValid.value) {
    alert("邮箱格式不正确，必须包含@");
    return;
  }
  alert("注册成功！\n" + JSON.stringify(formData, null, 2));
}
// #用户注册表单-结束
</script>

<template>
  <!-- #用户注册表单-开始 -->
  <form @submit.prevent="handleSubmit">
    <div>
      <label>姓名：</label>
      <input v-model="formData.name" type="text" required />
    </div>
    <div>
      <label>邮箱：</label>
      <input v-model="formData.email" type="email" required />
      <span v-if="formData.email && !emailValid" style="color: red"
        >邮箱格式错误</span
      >
    </div>
    <div>
      <label>密码：</label>
      <input v-model="formData.password" type="password" required />
      <span>密码强度：{{ passwordStrength }}</span>
    </div>
    <button type="submit">注册</button>
  </form>
  <!-- #用户注册表单-结束 -->
</template>
