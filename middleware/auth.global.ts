export default defineNuxtRouteMiddleware((to) => {
  const { $auth } = useNuxtApp();

  const publicPaths = ["/login", "/register"];

  if (!$auth.loggedIn.value && !publicPaths.includes(to.path)) {
    return navigateTo("/login");
  }

  if ($auth.loggedIn.value && publicPaths.includes(to.path)) {
    return navigateTo("/");
  }
});
