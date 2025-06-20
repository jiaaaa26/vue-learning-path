   import './style.css'; //直接引入css文件
   import logo from './logo.jpg'
   // 这是一个简单的JavaScript代码
   const greeting = 'Hello, Webpack! 我在测试自动刷新哈哈哈哈哈';
   document.body.innerHTML = `<h1>${greeting}</h1>
  <input type="text" placeholder="试试输入点内容" />
`;

   const img = document.createElement('img');
   img.src=logo;
   img.alt='logo';
   img.style.width = '120px';
   document.body.appendChild(img);
