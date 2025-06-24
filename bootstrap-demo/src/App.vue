<script setup>

</script>

<template>
  <!-- 练习1 -->
<!-- <div class="container">
  <div class="row">
    <div class="col-12 col-lg-4" >占4列</div>
    <div class="col-12 col-lg-4">占4列</div>
    <div class="col-12 col-lg-4">占4列</div>
  </div>
</div> -->
<!-- 练习2 列偏移（Offset） -->
<!-- <div class="container">
  <div class="row">
    <div class="col-4">第一列</div>
    <div class="col-4 offset-4">第二列(右侧偏移4列)</div>
  </div>

</div> -->
<!-- 练习3栅格嵌套 -->
 <!-- <div class="container">
  <div class="row">
    <div class="col-8">
      外层左侧（8列）
      <div class="row">
        <div class="col-6">内层左侧（6列）</div>
        <div class="col-6">内层右侧（6列）</div>
      </div>
    </div>
    <div class="col-4">外层右侧（4列）</div>
  </div>
  
 </div> -->

<!-- 练习4列对齐方式 -->
<!-- 水平对齐 -->
<!-- <div class="container">
  <div class="row justify-content-end">
    <div class="col-4">第一列</div>
    <div class="col-4">第二列</div>
  </div>
</div> -->
<!-- 垂直对齐 -->
<!-- <div class="container" style="height: 200px; background-color: skyblue;">
  <div class="row align-items-start" style="height: 200px;">
    <div class="col-4">
      <div style="background: #eee; height: 50px;">垂直居中</div>
    </div>
    <div class="col-4">
      <div style="background: #ccc; height: 100px;">垂直居中</div>
    </div>
  </div>
</div> -->

<!-- 创建一个两列布局，左侧占8列，右侧占4列，并让右侧列向右偏移2列（即右侧列不是紧贴左侧）。 -->
 <!-- <div class="container">
  <div class="row">
    <div class="col-8">外层左侧
      <div class="row">
        <div class="col-6">内层左侧</div>
        <div class="col-6">内层右侧</div>
      </div>
    </div>
    <div class="col-4 offset-2">外层右侧</div>
  </div>
 </div> -->

 <!-- 常用按钮 -->
  <!-- <div class="container" style="background-color: #eee; ">
    <button class="btn btn-primary">主按钮</button>
    <div class="btn btn-secondary">次按钮</div>
    <div class="btn btn-success">成功</div>
    <div class="btn btn-danger">危险</div>
    <div class="btn btn-warning">警告</div>
    <div class="btn btn-info">信息</div>
    <div class="btn btn-light">浅色</div>
    <div class="btn btn-dark">深色</div>
  </div> -->
  <!-- 表单 -->
   <!-- <form>
    <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
     <input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入邮箱地址">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
    </div>
    <button type="submit" class="btn btn-primary">登录</button>
   </form> -->
  <!-- 导航栏（navbar） -->
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">功能</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">关于</a>
        </li>
      </ul>
    </div>
  </div>
  </nav> -->
  <!-- 卡片（Card） -->
  <!-- <div class="card" style="width:18rem">
    <img src="https://cdn.pixabay.com/photo/2025/06/16/14/06/ring-necked-parakeet-9663360_1280.jpg" class="card-img-top" alt="图片">
    <div class="card-body">
      <h5 class="card-title">卡片标题</h5>
      <p class="card-text">这里是一些卡片内容。</p>
      <a href="#" class="btn btn-primary">操作按钮</a>
    </div>
  </div> -->
  <!-- 警告框 -->
   <div class="alert alert-success" role="alert">
    操作成功
   </div>
   <div class="alert alert-danger" role="alert">
    操作失败
   </div>

</template>

<style scoped>

</style>
