<template>
  <div class="uploader-container">
    <input type="file" @change="onFileChange" />
    <div v-if="file">
      <p>文件名：{{ file.name }}</p>
      <p>文件大小：{{ (file.size / 1024 / 1024).toFixed(2) }} MB</p>
      <button @click="startUpload" :disabled="uploading || progress === 100">
        开始上传
      </button>
      <button @click="pauseUpload" :disabled="!uploading || paused">
        暂停
      </button>
      <button
        @click="resumeUpload"
        :disabled="uploading || !paused || progress === 100"
      >
        继续
      </button>
      <div v-if="progress > 0" class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <p v-if="progress > 0">上传进度：{{ progress.toFixed(2) }}%</p>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { sliceFile } from "../utils/fileSlice";

const file = ref(null);
const chunks = ref([]);
const uploading = ref(false);
const progress = ref(0);
const paused = ref(false);
const currentChunkIndex = ref(0);

const onFileChange = (e) => {
  const f = e.target.files[0];
  if (f) {
    file.value = f;
    chunks.value = sliceFile(f);
    progress.value = 0;
    currentChunkIndex.value = 0;
    paused.value = false;
  }
};

function mockUploadChunk(formData, delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

const startUpload = async () => {
  if (!file.value || !chunks.value.length) return;
  uploading.value = true;
  paused.value = false;
  for (let i = currentChunkIndex.value; i < chunks.value.length; i++) {
    if (paused.value) {
      currentChunkIndex.value = i;
      uploading.value = false;
      return;
    }
    const formData = new FormData();
    formData.append("file", chunks.value[i]);
    formData.append("filename", file.value.name);
    formData.append("index", i);
    formData.append("total", chunks.value.length);
    await mockUploadChunk(formData);
    progress.value = ((i + 1) / chunks.value.length) * 100;
  }
  progress.value = 100;
  await nextTick();
  uploading.value = false;
  currentChunkIndex.value = 0;
  setTimeout(() => {
    alert("模拟上传完成！");
  }, 300);
};

const pauseUpload = () => {
  paused.value = true;
};

const resumeUpload = () => {
  if (!uploading.value && paused.value) {
    uploading.value = true;
    paused.value = false;
    startUpload();
  }
};
</script>

<style scoped>
.uploader-container {
  margin: 40px auto;
  max-width: 400px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}
.progress-bar {
  width: 100%;
  height: 16px;
  background: #eee;
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #4f8cff 0%, #38e6c5 100%);
  transition: width 0.3s;
}
</style>
