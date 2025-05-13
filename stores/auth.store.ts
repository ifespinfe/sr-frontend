const AUTH_TOKEN_KEY = "SPIN_TOKEN";
const AUTH_USER_KEY = "SPIN_AUTH_USER";
import type { AuthUser } from "~/types/auth";

export const useAuthStore = defineStore(
  "auth-store",
  () => {
    const cookie_token = useCookie(AUTH_TOKEN_KEY);
    const auth_token = ref<string | null | undefined>(cookie_token.value);
    const auth_user = ref<AuthUser | null>(null);
    const isLoggedIn = computed(() => !!auth_token.value);

    const saveAuthUser = (token: string, user: AuthUser) => {
      auth_token.value = token;
      auth_user.value = user;
      cookie_token.value = token; // persist token in cookie
    };

    const resetAuthUser = () => {
      auth_token.value = null;
      auth_user.value = null;
      cookie_token.value = null;
    };

    return {
      auth_token,
      auth_user,
      isLoggedIn,
      saveAuthUser,
      resetAuthUser,
    };
  },
  {
    persist: {
      key: AUTH_USER_KEY,
      omit: ["auth_token", "auth_user.qrcode", "auth_user.bank_account"],
    },
  }
);

export const useAuth = () => {
  const store = useAuthStore();
  const { saveAuthUser, resetAuthUser } = store;

  const logOut = (onDone?: () => void) => {
    resetAuthUser();
    onDone?.();
  };

  const isEmailVerified = computed(() => {
    return !!store?.auth_user?.email_verified;
  });

  const authEmail = computed(() => store?.auth_user?.email ?? "");

  return {
    auth_token: computed(() => store.auth_token),
    auth_user: computed(() => store.auth_user),
    isLoggedIn: computed(() => store.isLoggedIn),
    authEmail,
    isEmailVerified,
    saveAuthUser,
    logOut,
  };
};
