<script lang="ts" setup>
// import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: ["guest"],
});

const form = ref({
  email: "demo@email.com",
  password: "password",
});

const auth = useAuth();

async function handleLogin() {
  if (auth.isLoggedIn.value) {
    return navigateTo("/");
  }

  const { error } = await auth.login(form.value);

  if (!error.value) {
    return navigateTo("/");
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <label>
      Email
      <input v-model="form.email" type="email" />
    </label>
    <label>
      Password
      <input v-model="form.password" type="password" />
    </label>

    <button>Login</button>
  </form>
</template>

<style scoped></style>