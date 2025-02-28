<template>
  <div
    :class="
      cn(
        ' rounded-xl',
        print
          ? 'p-4 border-2 border-primary bg-background'
          : 'p-4 md:p-8 bg-white/5'
      )
    "
  >
    <div
      :class="
        cn(
          'flex flex-col items-center gap-6',
          print ? '' : 'md:flex-row md:justify-between'
        )
      "
    >
      <div
        :class="
          cn('text-center order-2', print ? '' : 'md:text-left md:order-1')
        "
      >
        <div class="font-display text-3xl font-medium capitalize">
          {{ request?.type }} Request receipt
        </div>
        <div
          :class="
            cn(
              'text-muted-foreground leading-tight my-2',
              print ? '' : 'md:w-3/4'
            )
          "
        >
          {{
            request?.type === "hype"
              ? "Your request has been submitted, we will notify you when your hype has been performed"
              : "Your request has been submitted, we will notify you when your song has been played"
          }}
        </div>
      </div>
      <div
        :class="
          cn(
            'flex items-center shrink-0 text-primary gap-x-1 order-1',
            print ? '' : 'md:order-2'
          )
        "
      >
        <SvgIcon name="spin-logo" />
        <div class="text-base font-medium">SpinRequest</div>
      </div>
    </div>

    <div class="space-y-4 my-4">
      <div
        class="py-4 px-6 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 border bg-white/5 rounded-2xl"
      >
        <div class="space-y-1">
          <div class="text-muted-foreground">Total amount</div>
          <div class="text-4xl font-semibold text-primary">
            ₦{{ formatMoney(request?.price ?? 0) }}
          </div>
        </div>
        <div class="space-y-px">
          <template v-if="request?.type === 'hype'">
            <div class="text-muted-foreground">Hype request for</div>
            <SharedSummary
              class="font-medium"
              :content="request?.description ?? ''"
            />
          </template>
          <template v-else>
            <div class="text-muted-foreground">Song title</div>

            <div class="font-medium">
              {{ request?.song_title ?? "" }}
            </div>
            <div>by {{ request?.artist ?? "" }}</div>
          </template>
        </div>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        <div
          class="p-4 rounded-2xl bg-white/5 border"
          v-for="item in eventDetails"
          :key="item.name"
        >
          <div class="space-y-px">
            <div class="text-muted-foreground">{{ item.name }}</div>
            <div>{{ item.value }}</div>
          </div>
        </div>
      </div>
      <div
        class="p-4 rounded-2xl bg-white/5 border animate-in slide-in-from-top-1"
        v-if="currentSpender"
      >
        <div>
          You rank <span class="font-medium">{{ position }}</span> in spending
          on
          <span class="font-medium">{{ event?.title }}</span>
        </div>

        <div class="grid gap-x-4 grid-cols-[auto,_1fr,_auto] items-center mt-6">
          <div><SvgIcon name="trophy" /></div>
          <div class="text-lg font-medium">
            {{ currentSpender?.name ?? "" }}
          </div>
          <Avatar
            :initials="getInitials(currentSpender?.name ?? '')"
            class="!bg-[#FF99F1] !text-black"
          >
          </Avatar>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,_auto,_auto,_auto] gap-4 items-center"
        v-if="!print"
      >
        <UiButton
          :size="'lg'"
          class="uppercase hidden sm:inline-flex"
          :loading="converting"
          @click="convertNodeToImage"
        >
          Download Receipt
          <span class="hidden md:inline ml-1"> & loud IT</span>
        </UiButton>
        <UiTooltip message="Download receipt and loud it" class="sm:hidden">
          <UiButton
            :size="'icon'"
            class="uppercase sm:hidden"
            :loading="converting"
            @click="convertNodeToImage"
          >
            <Download class="size-4" />
          </UiButton>
        </UiTooltip>

        <UiTooltip message="Share to twitter/X">
          <UiButton
            :size="'icon'"
            :variant="'secondary'"
            class="!size-[40px]"
            @click="externalNavigate(twitterShareLink)"
          >
            <SvgIcon name="x" />
          </UiButton>
        </UiTooltip>
        <UiTooltip message="Share to whatsapp">
          <UiButton
            :size="'icon'"
            :variant="'secondary'"
            class="!size-[40px]"
            @click="externalNavigate(whatsappShareLink)"
          >
            <SvgIcon name="whatsapp" class="scale-[0.7]" />
          </UiButton>
        </UiTooltip>
        <UiTooltip message="Copy link">
          <UiButton
            :size="'icon'"
            :variant="'secondary'"
            class="!size-[40px]"
            @click="copyLink"
          >
            <CopyCheck v-if="copied" class="text-muted-foreground size-4" />
            <Copy v-else class="text-muted-foreground size-4" />
          </UiButton>
        </UiTooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Copy, CopyCheck, Download } from "lucide-vue-next";
import saveAs from "file-saver";
import { useNodeToImage } from "~/composables/useNodeToImage";
import type { EventRequest, EventSpender, OrderEvent } from "~/types/event";
const props = defineProps<{
  request?: EventRequest;
  event?: OrderEvent | null;
  print?: boolean;
  spenders?: EventSpender[] | null;
}>();

const {
  public: { APP_BASE_URL },
} = useRuntimeConfig();

const { authEmail } = useAuth();

const currentSpender = computed(() => {
  const spender = props.spenders?.find(
    (item) => item.email === authEmail.value
  );
  if (spender) {
    return {
      ...spender,
      name:
        spender?.name ??
        spender?.user_name ??
        spender?.stage_name ??
        spender?.nickname ??
        spender?.email ??
        "",
    };
  }
  return spender;
});

const position = computed(() => {
  if (!currentSpender.value?.position) return "-";
  const _position = `${currentSpender.value.position}`?.slice(-1);
  switch (_position) {
    case "1":
      return `${_position}st`;
    case "2":
      return `${_position}nd`;
    case "3":
      return `${_position}rd`;
    default:
      return `${_position}th`;
  }
});

const eventDetails = computed(() => {
  const event = {
    name: "Event",
    value: props.event?.title,
  };
  const host = {
    name: "Host",
    value: props.request?.host.stage_name,
  };
  const location = {
    name: "Location",
    value: props.event?.address,
  };
  const date = {
    name: "Date",
    value: useDateFormat(props.event?.start_date, "dddd, MMMM D, YYYY"),
  };
  return [event, host, location, date];
});

const downloadReceipt = (blob: Blob) => {
  saveAs(blob, `spin-request-receipt-${props.event?.title}`);
};

const { converting, convertNodeToImage } = useNodeToImage(
  "#RECEIPT_PRINT",
  downloadReceipt
);

const shareTitle = computed(() => {
  return `I just made a ${
    props.request?.type ?? "song"
  } request on SpinRequest. Join ${
    props.request?.host.stage_name
  } live event to make yours.`;
});

const shareLink = computed(() => {
  return `${APP_BASE_URL}/${props.request?.host.slug ?? ""}`;
});

const {
  copyLink,
  copied,
  whatsappShareLink,
  twitterShareLink,
  externalNavigate,
} = useSocialShare(shareLink, shareTitle);
</script>
