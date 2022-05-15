import { defineStore } from "pinia";
export const auth = defineStore("main", {
  state: () => ({
    hasAuthorizedUser: false,
  }),
  getters: {
    getTest: (state) => state.hasAuthorizedUser,
  },
  actions: {
    checkStatusUser() {
      const user = window.localStorage.getItem("user");
      this.hasAuthorizedUser = user;
    },
    isLogin() {
      this.hasAuthorizedUser = !this.hasAuthorizedUser;
    },
  },
});
