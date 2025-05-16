<template>
  <div>
    <!--
      使用 v-lazy-img 指令实现图片懒加载，支持高清图、低清图、webp 优先加载和加载失败占位图。
      指令参数说明：
      - src：高清图地址
      - lqip：低清图地址
      - webp：webp 格式图片地址（浏览器支持时优先加载）
      - error：加载失败时的占位图
    -->
    <img
      v-lazy-img="{
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
        lqip: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=20',
        webp: 'https://www.gstatic.com/webp/gallery/1.sm.webp',
        error:
          'https://img.alicdn.com/imgextra/i4/O1CN01vZ7ZkC1wQvQnH3UXk_!!6000000006292-2-tps-600-400.png',
      }"
      alt="示例图片1"
      style="width: 100%; margin-bottom: 20px"
    />
    <img
      v-lazy-img="{
        src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600',
        lqip: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=20',
        webp: 'https://www.gstatic.com/webp/gallery/2.sm.webp',
        error:
          'https://img.alicdn.com/imgextra/i4/O1CN01vZ7ZkC1wQvQnH3UXk_!!6000000006292-2-tps-600-400.png',
      }"
      alt="示例图片2"
      style="width: 100%; margin-bottom: 20px"
    />
    <img
      v-lazy-img="{
        src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600',
        lqip: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=20',
        webp: 'https://www.gstatic.com/webp/gallery/3.sm.webp',
        error:
          'https://img.alicdn.com/imgextra/i4/O1CN01vZ7ZkC1wQvQnH3UXk_!!6000000006292-2-tps-600-400.png',
      }"
      alt="示例图片3"
      style="width: 100%; margin-bottom: 20px"
    />
    <!-- 故意写错src地址，测试加载失败降级效果 -->
    <img
      v-lazy-img="{
        src: 'https://images.unsplash.com/photo-not-exist.jpg',
        lqip: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=20',
        webp: 'https://www.gstatic.com/webp/gallery/4.sm.webp',
        error:
          'https://img.alicdn.com/imgextra/i4/O1CN01vZ7ZkC1wQvQnH3UXk_!!6000000006292-2-tps-600-400.png',
      }"
      alt="加载失败测试"
      style="width: 100%; margin-bottom: 20px"
    />
  </div>
</template>

<script setup>
// 这里暂时无需引入任何内容，指令已全局注册
</script>
