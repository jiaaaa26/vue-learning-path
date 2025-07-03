import { defineStore } from "pinia";
import { useUserStore } from "./user";
export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(product) {
      const userStore = useUserStore();
      if (!userStore.isLogin) {
        alert("请先登录后再添加商品");
        return;
      }
      const exist = this.items.find((item) => item.id === product.id);
      if (exist) {
        exist.count += 1;
      } else {
        this.items.push({ ...product, count: 1 });
      }
    },
    removeItem(productId) {
      const userStore = useUserStore();
      if (!userStore.isLogin) {
        alert("请先登录后再删除商品！");
        return;
      }
      this.items = this.items.filter((item) => item.id !== productId);
    },
    clearCart() {
      const userStore = useUserStore();
      if (!userStore.isLogin) {
        alert("请先登录后再清空购物车！");
        return;
      }
      this.items = [];
    },
  },
  getters: {
    totalCount: (state) =>
      state.items.reduce((sum, item) => sum + item.count, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.count * item.price, 0),
  },
});
