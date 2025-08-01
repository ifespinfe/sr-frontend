<template>
  <div
    class="grid lg:grid-cols-[auto,_1fr,_auto] gap-6 bg-white/5 items-center border p-6 rounded-2xl"
    v-if="showCard"
  >
    <div class="size-[120px] bg-[#A799FF1A] rounded-full">
      <ArcProgress :size="120" :progress="progress">
        <template #progress>
          <p class="absolute text-2xl font-bold">{{ progress * 100 }}%</p>
        </template>
      </ArcProgress>
    </div>
    <div class="space-y-4">
      <div class="text-2xl font-semibold">
        Your profile is {{ progress * 100 }}% complete
      </div>
      <div class="text-muted-foreground text-lg">
        Fill in additional details to let your audience know more about you and
        allow us to pay you your earnings
      </div>
    </div>
    <NuxtLink to="/profile" class="w-full sm:w-auto">
      <UiButton :variant="'secondary'" :size="'lg'" class="w-full">
        Complete profile
      </UiButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import ArcProgress from "~/components/shared/arc-progress.vue";
import type { ApiResponse } from "~/types";
import type { AuthUser } from "~/types/auth";
const { data, status } = useCustomFetch<ApiResponse<AuthUser>>("/user");

const required_fields = [
  "stage_name",
  "bio",
  "dob",
  "gender",
  "profession",
  "country",
  "bank_account.bank_name",
  "bank_account.account_number",
];

const profile = computed(() => data.value?.data);

const getValue = (key: string) => {
  return profile.value
    ? key.split(".").reduce((o, k) => (o ? o[k] : undefined), profile.value)
    : null;
};

const completed_fields = computed(() =>
  required_fields.filter((field) => {
    return !!getValue(field);
  })
);

const progress = computed(() => {
  const ratio = completed_fields.value.length / required_fields.length;
  return Number.parseFloat(ratio.toFixed(2));
});

const showCard = computed(() => {
  if (status.value === "pending") return false;
  if (!data.value?.data) return false;
  return progress.value < 1;
});
</script>
