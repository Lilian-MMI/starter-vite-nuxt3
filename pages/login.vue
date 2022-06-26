<script setup lang="ts">
const { $auth } = useNuxtApp();

const error = ref();
const loading = ref(false);

async function handleLogin(e: Event) {
  try {
    error.value = null;
    loading.value = true;
    await $auth.login(
      //@ts-ignore
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
      <label>
        Username:
        <input
          name="username"
          type="text"
          required
          placeholder="user"
          :class="{ error }"
          @focus="error = null"
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          required
          placeholder="pwd"
          :class="{ error }"
          @focus="error = null"
        />
      </label>

      <div v-if="error" class="form-error">
        {{ error.data.message }}
      </div>

      <button :aria-busy="loading" :disabled="loading">
        Login <span class="i-carbon:arrow-right"></span>
      </button>
    </form>

    <p>New user ? <router-link to="/register">Register</router-link></p>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  margin: auto;
  max-width: 500px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background: rgb(128, 229, 151);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;

  span {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
}
</style>
