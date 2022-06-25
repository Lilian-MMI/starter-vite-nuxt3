<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@@/stores";

const { login } = useUserStore();
const { currentUser } = storeToRefs(useUserStore());

const inputCopy = ref("");
</script>

<template>
  <div>
    <form @submit.prevent="">
      <h1>Hello in Nuxt3 starter</h1>
      <p>user store : {{ currentUser ?? "{}" }}</p>
      <button @click="login">UPDATE USER STORE</button>

      <hr />

      <span>
        <input v-model="inputCopy" type="text" />
        <ButtonCopy :text="inputCopy" />
      </span>
    </form>
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
}
</style>
