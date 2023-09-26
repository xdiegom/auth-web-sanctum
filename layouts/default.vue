<script lang="ts" setup>
// import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuth();

async function handleLogout() {
  await auth.logout();
}
</script>

<template>
  <div>
    <button v-if="auth.isLoggedIn.value" @click="handleLogout">Logout</button>

    <pre>{{ auth.user }}</pre>

    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/register">Register</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/auth-only">Auth only</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/guest-only">Guest only</NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
