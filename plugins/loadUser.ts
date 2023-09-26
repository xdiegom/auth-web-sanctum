// import {useAuthStore} from "~/stores/useAuthStore";

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuth();

  if (!auth.isLoggedIn.value) {
    await auth.fetchUser()
  }
})