<template>
  <NuxtPage />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  background: #fafafa;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5;
  overflow-x: hidden;
}

input[type="text"],
input[type="password"] {
  border: 1px solid #ccc;
  background: transparent;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  letter-spacing: 0.1rem;
  transition: all 0.1s ease-in-out;

  &:focus {
    outline: none;
    border-color: rgb(128, 229, 151);
  }

  &.error {
    border-color: rgb(255, 59, 48);
  }
}

label:not(:first-of-type) {
  margin-top: 1rem;
}

.form-error {
  color: rgb(255, 59, 48);
  font-size: 0.8rem;
  margin-top: 1rem;
  align-self: start;
}
</style>
