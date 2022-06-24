export default defineNuxtPlugin(() => {
  const token = useCookie("token", {
    sameSite: "lax",
  });

  const loggedIn = computed(() => !!token.value);

  return {
    provide: {
      auth: {
        login: async (payload: Record<string, any>) => {
          await $fetch("/api/auth/login", {
            method: "POST",
            body: payload,
          });
          token.value = useCookie("token").value;
        },

        register: async (payload: Record<string, any>) => {
          await $fetch("/api/auth/register", {
            method: "POST",
            body: payload,
          });
          token.value = useCookie("token").value;
        },

        logout: async () => {
          token.value = "";
          await navigateTo("/login");
        },
        loggedIn,
      },
    },
  };
});
