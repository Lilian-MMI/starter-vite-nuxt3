<script setup lang="ts">
import { UseClipboard } from "~~/composables";
const { copy, copied } = UseClipboard;

defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button @click="copy(text)">
    <span v-if="!copied">Copy</span>
    <span v-else>Copied!</span>
  </button>
</template>

<style scoped>
button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fafafa;
  cursor: pointer;
}
</style>
