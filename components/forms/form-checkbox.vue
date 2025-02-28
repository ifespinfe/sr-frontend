<template>
  <Field
    :name="name"
    v-slot="{ value, handleChange, errorMessage, meta }"
    class="relative"
    as="div"
  >
    <input
      type="checkbox"
      :name="name"
      :id="id"
      :checked="value"
      @change="handleChange"
      class="size-5"
    />
    <div
      class="text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"
      v-if="meta.touched || showErrorOnTouch"
    >
      {{ errorMessage }}
    </div>
  </Field>
</template>

<script lang="ts" setup>
//USE ONLY WITHIN A VEE-FORM
import { Field } from "vee-validate";
import type { InputTypeHTMLAttribute } from "vue";

withDefaults(
  defineProps<{
    name: string;
    label?: string;
    type?: InputTypeHTMLAttribute;
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    showErrorOnTouch?: boolean;
  }>(),
  {
    showErrorOnTouch: false,
  }
);
</script>
