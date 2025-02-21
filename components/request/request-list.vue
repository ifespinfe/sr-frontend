<template>
  <ListboxRoot>
    <ListboxContent class="space-y-2 relative">
      <ListboxItem
        v-for="(request, index) in requests"
        :key="request.id"
        :value="request.id"
        @select="handleSelection"
      >
        <RequestCollapsibleItem
          :request="request"
          class="min-[880px]:hidden"
          :index="index + 1"
          :onUpdate="onUpdate"
          :default-open="request.status === 'now-playing'"
          :disabled="request.status === 'now-playing'"
        />
        <RequestItem
          :request="request"
          class="hidden min-[880px]:grid"
          :index="index + 1"
          :onUpdate="onUpdate"
        />
      </ListboxItem>
      <div class="min-h-[350px]" v-if="!requests.length && !loading">
        <div class="place-center grid place-items-center gap-2">
          <div class="size-12 rounded-full bg-white/40 relative">
            <SvgIcon
              class="scale-75 place-center"
              :name="type == 'song' ? 'music' : 'mic'"
            />
          </div>
          <div class="text-xl text-muted-foreground font-medium text-center">
            No {{ type }} requests
          </div>
          <div class="text-muted-foreground text-center">
            Get prepared, requests may come soon
          </div>
        </div>
      </div>
    </ListboxContent>
  </ListboxRoot>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { eventRequests } from "~/constants/mocks";
import RequestCollapsibleItem from "./request-collapsible-item.vue";
import RequestItem from "./request-line-item.vue";

withDefaults(
  defineProps<{
    requests?: EventRequest[];
    onUpdate?: () => void;
    type?: "hype" | "song";
    loading?: boolean;
  }>(),
  {
    requests: () => eventRequests,
    type: "song",
    loading: false,
  }
);

const handleSelection = (e: Event) => {
  e.preventDefault();
};
</script>
