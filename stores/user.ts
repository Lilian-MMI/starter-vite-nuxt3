import { defineStore } from "pinia";

interface IUser {
  id: number;
  username: string;
  email: string;
}

export const useUserStore = defineStore({
  id: "userStore",

  state: () => ({
    currentUser: null as IUser,
  }),

  getters: {
    isLogin(): boolean {
      return this.currentUser ?? false;
    },
  },

  actions: {
    login() {
      this.currentUser = {
        id: 1,
        name: "John Doe",
        email: "johndoe@email.com",
      };
    },
  },
});
