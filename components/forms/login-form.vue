<template>
  <Form
    v-slot="{ handleSubmit }"
    :validation-schema="simpleLoginSchema"
    as="div"
  >
    <form @submit="handleSubmit($event, onSubmit)" class="space-y-7">
      <FormInput
        name="email"
        placeholder="Enter your email here"
        label="Email"
      />
      <FormInput
        name="password"
        placeholder="Enter your password here"
        type="password"
        label="Password"
      />
      <Button class="w-full" type="submit" :size="'lg'" :disabled="loading">
        <Loader v-if="loading" class="animate-spin mr-2" />
        <span>{{ loading ? "Please wait..." : "Submit" }}</span>
      </Button>
    </form>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import FormInput from "./form-input.vue";
import Button from "../ui/button.vue";
import { Loader } from "lucide-vue-next";
import type { ApiError } from "~/types";

const { $repo } = useNuxtApp();
const { saveAuthUser } = useAuth();
const route = useRoute();
const loading = ref(false);
const onSubmit = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const payload = {
    email,
    password,
  };
  try {
    loading.value = true;
    const response = await $repo.auth.loginUser(payload);
    console.log(response)
    const message = response?.message;
    showToast({ title: "Success", description: message, variant: "normal" });
    saveAuthUser(response.data.token, response.data.user);
    loading.value = false;
    const redirect_path = route.redirectedFrom?.fullPath;
    const destination = redirect_path
      ? redirect_path
      : response?.data?.role === "host"
      ? "/dashboard"
      : "/audience";
    return navigateTo(destination);
  } catch (e) {
    loading.value = false;
    showToast({
      title: "Failed",
      description: (e as ApiError)?.data?.message ?? "Invalid credentials",
      variant: "warning",
    });
    console.error("ERROR LOGGING IN", (e as ApiError)?.data?.message);
  }
};

const simpleLoginSchema = {
  email: (name: string) => {
    return name ? true : "Enter your email";
  },
  password: (pass: string) => {
    return pass ? true : "Enter your password";
  },
};
</script>
