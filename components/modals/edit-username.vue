<template>
  <Modal controlled v-model="open">
    <template #trigger>
      <UiButton :variant="'ghost'" :size="'icon'" :loading="updating">
        <Edit2 class="size-3 text-muted-foreground" />
      </UiButton>
    </template>
    <template #heading>
      <div class="font-display text-2xl font-medium">Change Username</div>
    </template>
    <template #default>
      <Form
        class="space-y-6 mt-2 p-6"
        :validation-schema="validationSchema"
        :initial-values="{ username }"
        @submit="handleUsernameChange"
      >
        <FormInput
          name="username"
          label="Username"
          placeholder="Enter your username"
          type="text"
        />

        <div class="pt-6">
          <UiButton :size="'lg'" type="submit" class="w-full">
            UPDATE USERNAME
          </UiButton>
        </div>
      </Form>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import { Edit2 } from "lucide-vue-next";
import { UsernameSchema } from "~/schemas/user-schema";
import FormInput from "../forms/form-input.vue";
import { object } from "yup";

const open = ref(false);
const emit = defineEmits<{ save: [username: string] }>();
defineProps<{ username: string; updating?: boolean }>();
const handleUsernameChange = async ({ username }: { username: string }) => {
  emit("save", username);
  open.value = false;
};

const validationSchema = object({
  username: UsernameSchema,
});
</script>
