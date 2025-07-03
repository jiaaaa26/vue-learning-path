import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    name: "Guest",
  }),
  actions: {
    login(username) {
      this.isLogin = true;
      this.name = username;
    },
    logout() {
      this.isLogin = false;
      this.name = "Guest";
    },
  },
});
