<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button @click="addToCart(product)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
// 模拟商品数据
const products = ref([
  { id: 1, name: "苹果", price: 5 },
  { id: 2, name: "香蕉", price: 3 },
  { id: 3, name: "橙子", price: 4 },
]);

function addToCart(product) {
  cartStore.addItem(product);
}
</script>
<style scoped>
h2 {
  color: #646cff;
  margin-bottom: 12px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(60, 60, 60, 0.08);
  margin-bottom: 12px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  background: linear-gradient(90deg, #42d392 0%, #647eff 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: linear-gradient(90deg, #647eff 0%, #42d392 100%);
}
</style>
