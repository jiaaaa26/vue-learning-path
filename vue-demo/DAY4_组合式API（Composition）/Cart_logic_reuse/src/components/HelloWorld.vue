<script setup>
import { ref } from "vue";
import useCart from "../useCart";

// 商品列表，模拟数据
const products = ref([
  { id: 1, name: "苹果", price: 3 },
  { id: 2, name: "香蕉", price: 2 },
  { id: 3, name: "橙子", price: 4 },
]);

// 使用购物车逻辑 Hook
const { cartItems, addToCart, removeFromCart, totalPrice } = useCart();

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- 商品列表 -->
  <h2>商品列表</h2>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }} - ￥{{ product.price }}
      <button @click="addToCart(product)">加入购物车</button>
    </li>
  </ul>

  <!-- 购物车 -->
  <h2>购物车</h2>
  <ul>
    <li v-for="item in cartItems" :key="item.id">
      {{ item.name }} x {{ item.quantity }}
      <button @click="removeFromCart(item.id)">移除</button>
    </li>
  </ul>
  <div v-if="cartItems.length">总价：￥{{ totalPrice }}</div>
  <div v-else>购物车为空</div>
</template>

<style scoped></style>
