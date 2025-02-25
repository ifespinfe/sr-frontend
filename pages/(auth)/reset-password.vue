<template>
  <div class="container pt-8">
    <SharedBackButton to="/login" />
    <div
      class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"
    >
      Change password
    </div>
    <div class="text-muted-foreground text-center mb-6">
      Create a new password
    </div>

    <div class="max-w-[90%] mx-auto w-[400px]">
      <Form
        :validation-schema="ResetPasswordSchema"
        @submit="handleSubmit"
        class="space-y-8"
      >
        <FormInput
          type="password"
          name="password"
          placeholder="Enter your new password"
          label="Set new password"
        />
        <FormInput
          type="password"
          name="password_confirmation"
          placeholder="Confirm password"
          label="Confirm password"
        />
        <Button
          class="w-full flex mt-6"
          :size="'lg'"
          :disabled="reseting || !token"
        >
          <Loader class="size-4 animate-spin mr-2" v-if="reseting" />
          <span>{{ reseting ? "Please wait" : "Reset password" }}</span>
        </Button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import Button from "~/components/ui/button.vue";
import FormInput from "~/components/forms/form-input.vue";
import { Loader } from "lucide-vue-next";
import { ResetPasswordSchema } from "~/schemas/user-schema";
import type { ApiError } from "~/types";

const {
  $repo: { auth },
} = useNuxtApp();

const reseting = ref(false);
const route = useRoute();
const token = route?.query?.token as string;
const email = decodeURIComponent(route?.query?.email as string);
const handleSubmit = async ({
  password,
  password_confirmation,
}: {
  password: string;
  password_confirmation: string;
}) => {
  try {
    const payload = {
      password,
      password_confirmation,
      token,
      email,
    };

    reseting.value = true;
    const response = await auth.resetPassword(payload);
    const message = response?.message;
    showToast({ title: "Success", description: message, variant: "normal" });
    useRouter().push("/login");
    reseting.value = false;
  } catch (error) {
    const e = error as ApiError;
    reseting.value = false;
    showToast({
      title: "Failed",
      description: e?.data?.message ?? "Failed to send reset link",
      variant: "warning",
    });
    console.error("ERROR RESETTING PASSWORD", e?.data?.message);
  }
};

useSeoMeta({
  title: "Input New Password",
});
</script>
