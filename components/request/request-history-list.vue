<template>
  <ListboxRoot>
    <ListboxContent class="space-y-2 relative">
      <ListboxItem
        v-for="request in requests"
        :key="request.id"
        :value="request.id"
        @select="handleSelection"
      >
        <RequestHistoryLineItem :request="request" :onUpdate="onUpdate" />
      </ListboxItem>
      <div class="min-h-[350px]" v-if="!requests.length && !loading">
        <div
          class="place-center grid place-items-center gap-2 text-center w-full"
        >
          <div class="size-12 rounded-full bg-white/40 relative">
            <SvgIcon class="scale-75 place-center" name="history" />
          </div>
          <div class="text-xl text-muted-foreground font-medium">
            Nothing yet
          </div>
          <div class="text-muted-foreground">
            Your completed/rejected requests will be here
          </div>
        </div>
      </div>
    </ListboxContent>
  </ListboxRoot>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { eventRequests } from "~/constants/mocks";
import RequestHistoryLineItem from "./request-history-line-item.vue";

withDefaults(
  defineProps<{
    requests?: EventRequest[];
    onUpdate?: () => void;
    loading?: boolean;
  }>(),
  {
    requests: () => eventRequests,
    loading: false,
  }
);

const handleSelection = (e: Event) => {
  e.preventDefault();
};
</script>
