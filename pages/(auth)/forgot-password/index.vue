<template>
  <div class="container pt-8">
    <SharedBackButton to="/login" />
    <div class="mb-6 mt-10 animate-in slide-in-from-top-2" v-if="resetEmail">
      <div class="text-4xl md:text-5xl font-semibold text-center">
        Complete password reset
      </div>
      <div class="text-muted-foreground text-center text-base font-normal mt-2">
        We sent a mail to
        <span class="text-foreground">{{ resetEmail }}</span
        >. Click the link to complete your password reset
      </div>
    </div>
    <div class="mb-6" v-else>
      <div
        class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"
      >
        Forgot password?
      </div>
      <div class="text-muted-foreground text-center text-base font-normal">
        Enter your email and we will send you a reset link
      </div>
    </div>

    <div class="max-w-[90%] mx-auto w-[400px]">
      <Form
        :validation-schema="simpleEmailSchema"
        @submit="handleSubmit"
        :initial-values="{ email: resetEmail }"
        v-if="resetEmail"
      >
        <FormHiddenInput name="email" />
        <div
          class="flex justify-center gap-x-1 items-center mt-2 text-muted-foreground"
        >
          <span>Didn't receive the mail?</span>
          <button
            class="outline-none underline hover:no-underline"
            :disabled="requesting"
            type="submit"
          >
            <Loader class="animate-spin size-4" v-if="requesting" />
            <span v-else>RESEND</span>
          </button>
        </div>
      </Form>
      <Form
        :validation-schema="simpleEmailSchema"
        @submit="handleSubmit"
        v-else
      >
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Button class="w-full flex mt-6" :size="'lg'" :disabled="requesting">
          <Loader class="size-4 animate-spin mr-2" v-if="requesting" />
          <span>{{ requesting ? "Please wait" : "Send link" }}</span>
        </Button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import Button from "~/components/ui/button.vue";
import FormInput from "~/components/forms/form-input.vue";
import FormHiddenInput from "~/components/forms/form-hidden-input.vue";
import { Loader } from "lucide-vue-next";
import { string, object } from "yup";
import type { ApiError } from "~/types";

const simpleEmailSchema = object({
  email: string().required("Email is required").email("Enter a valid email"),
});

const {
  $repo: { auth },
} = useNuxtApp();

const resetEmail = ref("");

const requesting = ref(false);
const handleSubmit = async ({ email }: { email: string }) => {
  try {
    console.log({ email });
    requesting.value = true;
    const response = await auth.requestResetLink(email);
    resetEmail.value = email;
    const message = response?.message;
    showToast({ title: "Success", description: message, variant: "normal" });
    // useRouter().push("/login");
    requesting.value = false;
  } catch (error) {
    const e = error as ApiError;
    requesting.value = false;
    showToast({
      title: "Failed",
      description: e?.data?.message ?? "Failed to send reset link",
      variant: "warning",
    });
    console.error("ERROR", e?.data?.message);
  }
};

useSeoMeta({
  title: "Forget Password",
});
</script>
