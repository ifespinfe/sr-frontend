<template>
  <CollapsibleRoot
    class="bg-white/5 rounded-2xl"
    :open="open"
    :disabled="disabled"
  >
    <CollapsibleTrigger asChild>
      <div
        @click="handleOpening"
        class="grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-4 sm:px-6 py-3 [&[data-state='open']_.caret]:rotate-180 cursor-pointer"
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
        <div class="space-y-1 text-left">
          <Summary
            v-if="request.type === 'hype'"
            :content="request?.description"
            v-model="popover_open"
          />
          <template v-else>
            <div class="font-medium">{{ request.song_title }}</div>
            <div class="text-sm text-muted-foreground">
              by {{ request.artist }}
            </div>
          </template>
        </div>
        <ChevronDown class="size-5 caret transition-transform relative" />
      </div>
    </CollapsibleTrigger>

    <CollapsibleContent
      class="data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden px-4 sm:px-6"
    >
      <div class="py-4 mt-4 border-t border-t-white/5">
        <div class="flex gap-x-2">
          <div class="space-y-1 w-full">
            <div class="text-sm text-muted-foreground">Requested by</div>
            <div class="text-white/80">
              {{ request.nickname ?? request.audience.name }}
            </div>
          </div>
          <div class="space-y-1 w-full">
            <div class="text-sm text-muted-foreground">Amount paid</div>
            <div class="tabular-nums text-white/80">
              ₦{{ formatMoney(request.price) }}
            </div>
          </div>
        </div>

        <div class="flex gap-x-4 mt-8" v-if="request.status === 'new'">
          <Button
            class="w-full"
            :disabled="updating"
            :loading="updating && update_status === 'now-playing'"
            @click="updateRequest('now-playing')"
          >
            {{ request.type === "hype" ? "Perform" : "Play" }}
            <Check class="size-4 ml-2" />
          </Button>
          <ConfirmDialog :onConfirm="() => updateRequest('declined')">
            <Button
              :variant="'secondary'"
              class="w-full !border-destructive !text-destructive"
              :disabled="updating"
              :loading="updating && update_status === 'declined'"
            >
              Reject
              <X class="size-4 ml-2" />
            </Button>
          </ConfirmDialog>
        </div>
        <div
          class="py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"
          v-else-if="request.status === 'now-playing'"
        >
          Now {{ request.type === "hype" ? "performing hype" : "playing" }}
        </div>
      </div>
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<script setup lang="ts">
import type { EventRequest } from "~/types/event";
import Button from "../ui/button.vue";
import { ChevronDown, Check, X } from "lucide-vue-next";
import ConfirmDialog from "../modals/confirm-dialog.vue";
import Summary from "../shared/summary.vue";
import { useEventRequests } from "~/composables/useLiveEvent";

const props = withDefaults(
  defineProps<{
    request: EventRequest;
    index?: number;
    onUpdate?: () => void;
    defaultOpen?: boolean;
    disabled?: boolean;
  }>(),
  { defaultOpen: false, disabled: false }
);

const open = ref(props.defaultOpen);
const popover_open = ref(false);
const { updateEventRequest, update_status, updating } = useLiveEvent();
const { optimisticallyUpdateEventRequest } = useEventRequests();
const handleOpening = () => {
  if (props.disabled || popover_open.value) return;
  open.value = !open.value;
};

const updateRequest = (status: EventRequest["status"]) => {
  optimisticallyUpdateEventRequest(props.request.id, status);
  updateEventRequest(props.request.id, status, props.onUpdate);
};
</script>
