<template>
  <div class="h-full">
    <NuxtLayout :name="'auth'">
      <div class="absolute top-20 left-[var(--cp)] container">
        <BackButton to="/signup" />
      </div>
      <div class="w-full">
        <div class="text-primary text-center mb-2 text-xl">
          Create your account
        </div>
        <div
          class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"
        >
          Create your free audience account
        </div>
        <div class="max-w-full w-[400px] mx-auto">
          <AudienceSignupForm />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import BackButton from "~/components/shared/back-button.vue";
import AudienceSignupForm from "~/components/forms/audience-signup-form.vue";

useSeoMeta({
  title: "Sign Up As An Audience",
});
</script>
