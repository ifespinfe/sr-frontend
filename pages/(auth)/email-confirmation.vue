<template>
  <div class="h-full container pt-6">
    <div
      class="fixed inset-0 z-10 bg-background grid place-items-center"
      v-if="userID && emailVerifyUrl"
    >
      <div class="bg-sp-purple/50 blur-[150px] size-56 absolute"></div>
      <div
        class="relative grid place-items-center gap-2"
        v-if="verificationStatus == 'pending'"
      >
        <Loader class="size-6 animate-spin" />
        <div class="text-base">Verifying email</div>
      </div>
      <div
        class="relative grid place-items-center gap-2 w-[700px] max-w-[100vw] mx-auto px-3"
        v-else-if="verificationError"
      >
        <AlertTriangle class="size-10 text-destructive" />
        <div class="text-2xl md:text-3xl font-semibold text-center">
          {{ verificationError?.data?.message ?? "Email verification failed" }}
        </div>
        <div class="text-muted-foreground">
          Failed to verify <span class="text-foreground">{{ authEmail }}</span>
        </div>
        <div class="flex gap-4 mt-4">
          <Button
            :variant="'secondary'"
            :disabled="resending"
            @click="resendVerificationEmail"
          >
            <Loader class="size-5 animate-spin" v-if="resending" />
            <span v-else>Resend email</span></Button
          >
          <Button @click="verifyEmail">
            <span>Try again</span>
          </Button>
        </div>
      </div>
      <div
        class="relative grid place-items-center gap-2 w-[700px] max-w-[100vw] mx-auto px-3"
        v-else
      >
        <CheckCircle2 class="size-10 text-primary" />
        <div class="text-2xl md:text-3xl font-semibold text-center mb-6">
          Email ({{ authEmail }}) verified
        </div>

        <NuxtLink :to="successRoute">
          <Button> Done </Button>
        </NuxtLink>
      </div>
    </div>
    <template v-else>
      <SharedBackButton to="/login" />
      <div
        class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div class="w-[700px] max-w-full mx-auto mt-8 space-y-6">
        <div class="text-4xl md:text-5xl font-semibold text-center">
          Check your inbox to confirm your email address
        </div>
        <div class="text-muted-foreground text-center">
          We sent a mail to
          <span class="text-foreground">{{ authEmail }}</span> click the link to
          access your account
        </div>
        <div
          class="rounded-xl bg-white/5 p-4 md:p-6 w-[480px] max-w-full mx-auto flex flex-col md:flex-row gap-4 items-center justify-between z-10 relative"
        >
          <div class="text-base">
            Didn't get the mail in your inbox or spam folder?
          </div>
          <UiButton
            :variant="'secondary'"
            class="w-full md:w-auto"
            :disabled="resending"
            @click="resendVerificationEmail"
          >
            <Loader class="size-5 animate-spin" v-if="resending" />
            <span v-else>Resend</span>
          </UiButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
import { Loader, AlertTriangle, CheckCircle2 } from "lucide-vue-next";
const { authEmail, auth_user, saveAuthUser } = useAuth();

const successRoute = computed(() => {
  const role = auth_user.value?.role;
  return role === "host"
    ? "/dashboard?successful-registration=true"
    : "/audience?successful-registration=true";
});

const userID = computed(() => auth_user.value?.id);
const route = useRoute();
const emailVerifyUrl = computed(() => route?.query?.email_verify_url);
const {
  verificationStatus,
  verificationError,
  resendVerificationEmail,
  resending,
  verifyEmail,
  authState,
} = useEmailVerification(userID.value, emailVerifyUrl.value as string);

watch(
  authState,
  (state) => {
    const user = state?.data?.user;
    const token = state?.data?.token;
    if (user && token) {
      saveAuthUser(token, user);
    }
  },
  {
    immediate: true,
  }
);

useSeoMeta({
  title: "Confirm your email",
});
</script>
