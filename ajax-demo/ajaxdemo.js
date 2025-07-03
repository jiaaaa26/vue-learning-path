/**
 * 使用 XMLHttpRequest 发送 GET 请求并处理响应
 * @param {string} url 请求的地址
 */
function loadData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true); // true 表示异步
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 处理服务器返回的数据
      console.log('服务器响应:', xhr.responseText);
    }
  };
  xhr.send();
}

// 调用示例
loadData('https://jsonplaceholder.typicode.com/posts/1');
