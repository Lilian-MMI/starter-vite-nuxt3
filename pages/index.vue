<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@@/stores";

const { login } = useUserStore();
const { currentUser } = storeToRefs(useUserStore());

const inputCopy = ref("");

const { $auth } = useNuxtApp();
const logout = () => $auth.logout();
</script>

<template>
  <div>
    <form @submit.prevent="">
      <h1>Hello in Nuxt3 starter</h1>
      <p>user store : {{ currentUser ?? "{}" }}</p>
      <button @click="login">UPDATE USER STORE</button>

      <hr />

      <span>
        <input
          v-model="inputCopy"
          type="text"
          placeholder="Type something to copy..."
        />
        <ButtonCopy :text="inputCopy" />
      </span>
    </form>

    <button @click="logout" class="logout">
      Logout
      <span class="i-carbon:logout"></span>
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 20px;
  background: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: #f5f5f5;
  }
}

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;

  span {
    display: flex;

    input {
      border-radius: 8px 0 0 8px;
    }

    button {
      border-radius: 0 8px 8px 0;
      border-left: none;
    }
  }
}

button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fafafa;
  cursor: pointer;

  &.logout {
    background: #f7afaf;
    color: #333;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-top: 2rem;

    > span {
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
  }
}
</style>
