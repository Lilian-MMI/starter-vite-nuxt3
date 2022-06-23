<script setup lang="ts">
const { $auth } = useNuxtApp();
const error = ref();
const loading = ref(false);
async function handleLogin(e: Event) {
  try {
    error.value = null;
    loading.value = true;
    await $auth.register(
      Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
    );
    await navigateTo("/");
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div v-if="error">
        {{ error.message }}
      </div>
      <label>
        User name:
        <input name="username" type="text" required />
      </label>
      <label>
        Password:
        <input name="password" type="password" required />
      </label>
      <button :aria-busy="loading">Register</button>
    </form>
  </div>
</template>
