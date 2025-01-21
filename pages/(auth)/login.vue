<template>
  <NuxtLayout :name="'auth'">
    <div>
      <div class="text-primary text-center mb-2 text-xl">Login deployment</div>
      <div
        class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"
      >
        Welcome, Log in to your account
      </div>
      <div class="max-w-[90%] mx-auto w-[400px]">
        <LoginForm />
        <div class="flex justify-center gap-x-4 mt-2">
          <NuxtLink
            to="/forgot-password"
            class="underline hover:no-underline ml-1"
            >Forgot password</NuxtLink
          >
          <div class="flex gap-x-2">
            Not a user?
            <NuxtLink to="/signup" class="underline hover:no-underline">
              Sign up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import LoginForm from "~/components/forms/login-form.vue";
useSeoMeta({
  title: "Login",
});
</script>
