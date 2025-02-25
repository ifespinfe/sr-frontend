<template>
  <div class="h-full">
    <NuxtLayout :name="'auth'">
      <div class="fixed top-20 left-0 container">
        <BackButton to="/signup" />
      </div>
      <div class="pt-2">
        <div class="text-primary text-center my-2 text-xl">
          Create your account
        </div>
        <div
          class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"
        >
          Create your free host account
        </div>
        <div class="max-w-[90%] mx-auto w-[400px]">
          <HostSignupForm />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import BackButton from "~/components/shared/back-button.vue";
import HostSignupForm from "~/components/forms/host-signup-form.vue";

useSeoMeta({
  title: "Sign Up As A host",
});
</script>
