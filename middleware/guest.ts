// import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();

  if (auth.isLoggedIn.value) {
    return navigateTo("/", { replace: true });
  }
})