<template>
  <Form
    :validation-schema="HypeRequestSchema"
    :initial-values="formInitialValue"
    @submit="handleSubmit"
    class="space-y-7 scroll-m-40"
    :id="`hype-${event_id}`"
  >
    <FormHiddenInput name="event_id" />
    <FormHiddenInput name="type" />
    <FormTextarea
      name="description"
      placeholder="Enter hype description"
      label="Tell us about your hype"
      type="text"
    />
    <FormInput
      name="nickname"
      placeholder="Enter your username"
      label="Username"
      :disabled="!!formInitialValue.nickname"
    />
    <Button
      type="submit"
      :size="'lg'"
      class="max-w-full w-[400px] mx-auto !flex uppercase"
      :loading="creating"
    >
      Request Hype For
      {{
        Number(request?.price) > 0 ? `₦${formatMoney(request.price)}` : "FREE"
      }}
    </Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import FormInput from "./form-input.vue";
import FormHiddenInput from "./form-hidden-input.vue";
import FormTextarea from "./form-textarea.vue";
import Button from "../ui/button.vue";
import type { EventType } from "~/types/event";
import {
  type HypeRequestPayload,
  HypeRequestSchema,
} from "~/schemas/request-schema";
const props = defineProps<{
  request: EventType;
  event_id: string;
  host_slug: string;
}>();

const { auth_user } = useAuth();

const formInitialValue = computed(() => ({
  type: props.request.name,
  event_id: Number(props.event_id),
  nickname: auth_user.value?.user_name,
}));

const { createEventRequest, creating } = useLiveEvent();

const handleSubmit = (data: HypeRequestPayload) => {
  createEventRequest(data, props.host_slug);
};
</script>
