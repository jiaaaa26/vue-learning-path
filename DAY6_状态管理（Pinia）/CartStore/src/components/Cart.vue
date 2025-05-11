<template>
  <div>
    <h2>购物车</h2>
    <ul>
      <li v-for="item in cartStore.items" :key="item.id">
        {{ item.name }} - ${{ item.price }} x {{ item.count }}
        <button @click="cartStore.removeItem(item.id)">删除</button>
      </li>
    </ul>
    <div v-if="cartStore.items.length === 0">购物车为空</div>
    <div>
      总数量:{{ cartStore.totalCount }}，总价: ${{ cartStore.totalPrice }}
    </div>
    <button @click="cartStore.clearCart">清空购物车</button>
  </div>
</template>
<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>
<style scoped>
h2 {
  color: #535bf2;
  margin-bottom: 12px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(60,60,60,0.06);
  margin-bottom: 10px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: linear-gradient(90deg, #feb47b 0%, #ff7e5f 100%);
}
div {
  margin-bottom: 10px;
}
</style>
