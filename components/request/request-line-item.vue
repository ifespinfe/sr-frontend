<template>
  <div
    class="grid grid-cols-request-line-item gap-x-4 items-center px-2 sm:px-6 py-4 bg-white/5 rounded-2xl"
  >
    <div
      :class="
        cn(
          request.status === 'now-playing'
            ? 'text-primary text-base font-medium'
            : 'text-foreground'
        )
      "
    >
      {{ index ?? "-" }}
    </div>
    <div class="space-y-1">
      <Summary v-if="request.type === 'hype'" :content="request?.description" />
      <template v-else>
        <div class="font-medium">{{ request.song_title }}</div>
        <div class="text-sm text-muted-foreground">by {{ request.artist }}</div>
      </template>
    </div>

    <div class="space-y-1">
      <div class="text-sm text-muted-foreground">Requested by</div>
      <div class="text-white/80">
        {{ request.nickname ?? request.audience.name }}
      </div>
    </div>
    <div class="space-y-1">
      <div class="text-sm text-muted-foreground">Amount paid</div>
      <div class="tabular-nums text-white/80">
        ₦{{ formatMoney(request.price) }}
      </div>
    </div>
    <div class="flex gap-x-2 justify-self-end" v-if="request.status === 'new'">
      <Button
        @click="updateRequest('now-playing')"
        :disabled="updating"
        :loading="updating && update_status === 'now-playing'"
      >
        {{ request.type === "hype" ? "Perform" : "Play" }}

        <Check class="size-3 ml-2" />
      </Button>
      <ConfirmDialog
        :onConfirm="() => updateRequest('declined')"
        message="Are you sure you want to reject this request?"
      >
        <Button
          :variant="'secondary'"
          :disabled="updating"
          :loading="updating && update_status === 'declined'"
          class="!border-destructive !text-destructive"
        >
          Reject
          <X class="size-3 ml-2" />
        </Button>
      </ConfirmDialog>
    </div>
    <div
      class="py-1 px-6 bg-foreground text-background text-center text-sm rounded-2xl animate-pulse justify-self-end"
      v-else-if="request.status === 'now-playing'"
    >
      Now {{ request.type === "hype" ? "performing hype" : "playing" }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { EventRequest } from "~/types/event";
import { X, Check } from "lucide-vue-next";
import Button from "../ui/button.vue";
import ConfirmDialog from "../modals/confirm-dialog.vue";
import Summary from "../shared/summary.vue";
import { useEventRequests } from "~/composables/useLiveEvent";

const props = defineProps<{
  request: EventRequest;
  index?: number;
  onUpdate?: () => void;
}>();
const { updateEventRequest, update_status, updating } = useLiveEvent();
const { optimisticallyUpdateEventRequest } = useEventRequests();

const updateRequest = (status: EventRequest["status"]) => {
  optimisticallyUpdateEventRequest(props.request.id, status);
  updateEventRequest(props.request.id, status, props.onUpdate);
};
</script>
