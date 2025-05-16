// 检测浏览器是否支持WebP格式，结果全局缓存
let _webpSupport = null;
/**
 * 检查浏览器是否支持WebP格式
 * @returns {Promise<boolean>}
 */
function checkWebpSupport() {
  if (_webpSupport !== null) return Promise.resolve(_webpSupport);
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = function () {
      _webpSupport = img.width > 0 && img.height > 0;
      resolve(_webpSupport);
    };
    img.onerror = function () {
      _webpSupport = false;
      resolve(false);
    };
    img.src =
      "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  });
}

export default {
  /**
   * 指令挂载时，支持低分辨率占位图、WebP自动检测和加载失败降级处理
   * @param {HTMLElement} el - 被绑定的img元素
   * @param {Object} binding - 绑定值，支持字符串或对象
   */
  async mounted(el, binding) {
    // 解析绑定值，支持字符串和对象
    let realSrc, lqipSrc, errorSrc, webpSrc;
    if (typeof binding.value === "object" && binding.value !== null) {
      realSrc = binding.value.src;
      lqipSrc = binding.value.lqip;
      errorSrc =
        binding.value.error ||
        "https://img.alicdn.com/imgextra/i4/O1CN01vZ7ZkC1wQvQnH3UXk_!!6000000006292-2-tps-600-400.png";
      webpSrc = binding.value.webp;
    } else {
      realSrc = binding.value;
      lqipSrc = "";
      errorSrc =
        "https://img.alicdn.com/imgextra/i4/O1CN01vZ7ZkC1wQvQnH3UXk_!!6000000006292-2-tps-600-400.png";
      webpSrc = "";
    }
    // 先显示低分辨率占位图
    if (lqipSrc) {
      el.src = lqipSrc;
      el.style.filter = "blur(20px)";
      el.style.transition = "filter 0.3s";
    }

    // 监听图片加载失败事件，降级为默认图片
    el.onerror = () => {
      el.src = errorSrc;
      el.style.filter = "";
    };

    // 检查WebP支持情况
    const supportWebp = await checkWebpSupport();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 优先加载webp格式
          if (supportWebp && webpSrc) {
            el.src = webpSrc;
          } else {
            el.src = realSrc;
          }
          // 图片加载完成后去除模糊
          el.onload = () => {
            el.style.filter = "";
          };
          observer.unobserve(el);
        }
      });
    });
    observer.observe(el);
    el._lazyObserver = observer;
  },
  unmounted(el) {
    if (el._lazyObserver) {
      el._lazyObserver.unobserve(el);
      delete el._lazyObserver;
    }
  },
};
