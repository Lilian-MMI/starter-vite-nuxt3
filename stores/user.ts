import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userStore",

  state: () => ({
    currentUser: null as any,
    loading: false,
    error: null,
  }),

  getters: {
    isLogin(): boolean {
      return this.currentUser ?? false;
    },
  },

  actions: {
    logMe() {
      this.currentUser = {
        id: 1,
        name: "John Doe",
      };
    },
  },
});
