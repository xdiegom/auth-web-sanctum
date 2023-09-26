import { useApiFetch } from "~/composables/useApiFetch";

type User = {
  id: number;
  name: string;
  email: string;
}

type Credentials = {
  email: string;
  password: string;
}

type RegistrationInfo = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function () {
  const user = useState<User | null>('user', () => (null))
  const isLoggedIn = computed(() => !!user.value)

  async function logout() {
    await useApiFetch("/logout", { method: "POST" });
    user.value = null;
    navigateTo("/login");
  }

  async function fetchUser() {
    const { data, error } = await useApiFetch("/api/user");
    console.log(data.value, error.value)
    user.value = data.value as User;
  }

  async function login(credentials: Credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return login;
  }

  async function register(info: RegistrationInfo) {
    await useApiFetch("/sanctum/csrf-cookie");

    const register = await useApiFetch("/register", {
      method: "POST",
      body: info,
    });

    await fetchUser();

    return register;
  }

  return { user, login, isLoggedIn, fetchUser, logout, register }
}