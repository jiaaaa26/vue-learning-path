// useCart.js
// 购物车逻辑复用的自定义 Hook
import { ref, computed } from "vue";

/**
 * useCart 购物车逻辑复用 Hook
 * 提供添加商品、删除商品、计算总价等功能
 * @returns {Object} 购物车相关方法和数据
 */
export default function useCart() {
  // 购物车商品列表，格式：[{ id, name, price, quantity }]
  const cartItems = ref([]);

  /**
   * 添加商品到购物车
   * @param {Object} product 商品对象，需包含 id, name, price
   */
  function addToCart(product) {
    const existing = cartItems.value.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  }

  /**
   * 从购物车移除商品
   * @param {Number} id 商品 id
   */
  function removeFromCart(id) {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
  }

  /**
   * 计算购物车总价
   * @returns {Number}
   */
  const totalPrice = computed(() => {
    return cartItems.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  });

  return {
    cartItems,
    addToCart,
    removeFromCart,
    totalPrice,
  };
}
