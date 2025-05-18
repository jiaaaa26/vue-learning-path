// tableWorker.js
// Web Worker用于表格排序和筛选，避免主线程阻塞

// 监听主线程消息
self.onmessage = function (e) {
  const { type, key, asc, data } = e.data;
  if (type === "sort") {
    // 排序逻辑
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return asc ? -1 : 1;
      if (a[key] > b[key]) return asc ? 1 : -1;
      return 0;
    });
    // 返回排序结果
    self.postMessage({ type: "sorted", data: sorted });
  }
  // 可扩展筛选等功能
};
