<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@@/stores";
import { UseClipboard } from "@@/composables";

const { logMe } = useUserStore();
const { currentUser } = storeToRefs(useUserStore());

const { text, copy, copied } = UseClipboard;
</script>

<template>
  <div>
    <Header />
    <h1>Hello World</h1>
    <p>This is a simple example of a Vue.js component.</p>
    <p>user : {{ currentUser ?? "{}" }}</p>
    <button @click="logMe">UPDATE USER STORE</button>

    <br />

    <span>VUEUSE</span>
    <button @click="copy()">
      <span v-if="!copied">Copy {{ text }}</span>
      <span v-else>Copied!</span>
    </button>

    <br />
    <i class="i-geo:turf-union"></i>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 20px;
  background: #fafafa;

  &:hover {
    background: #f5f5f5;
  }
}
</style>
