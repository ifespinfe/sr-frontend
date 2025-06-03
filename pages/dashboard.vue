<template>
  <div class="container pt-10 pb-40">
    <div class="flex gap-x-2 items-center mb-8">
      <Avatar
        class="!bg-[#FF99F1] size-[56px] shrink-0 text-background text-xl font-bold"
        :initials="getInitials(auth_user?.stage_name ?? '')"
        :image="auth_user?.profile_picture"
      />
      <div
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display tracking-wide"
      >
        Welcome, <b>{{ auth_user?.stage_name }}</b>
      </div>
    </div>

    <div
      v-if="status === 'pending'"
      class="flex justify-center mac:hidden py-2"
    >
      <Loader class="size-5 animate-spin" />
    </div>

    <div class="sticky mac:hidden w-scree -trnslate-x-[var(--cp)] mb-6 z-20">
      <EventCarousel
        :events="allEvents"
        @done="refresh"
        @delete="deleteEvent"
      />
    </div>

    <div class="grid mac:grid-cols-[1fr_auto] items-start gap-4">
      <div class="order-2 mac:order-1 space-y-6">
        <ProfileCompletion />
        <div
          class="relative bg-white/5 rounded-2xl p-3 sm:p-6 border flex flex-col gap-4 sm:flex-row sm:items-center justify-between overflow-hidden"
        >
          <div
            class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:z-[2]"
          ></div>
          <div class="space-y-2 relative z-10">
            <div class="text-muted-foreground">Withdrawable balance</div>
            <div class="flex gap-2 justify-between items-center">
              <div v-if="wallet_status === 'pending'">
                <Loader class="size-5 animate-spin" />
              </div>

              <div v-else class="text-3xl md:text-4xl font-semibold">
                ₦{{
                  active ? formatMoney(wallet?.wallet_balance ?? 0) : "******"
                }}
              </div>
              <SvgIcon name="eye" @click="toggle" v-if="active" />
              <SvgIcon name="eye-off" @click="toggle" v-else />
            </div>
          </div>
          <NuxtLink to="/wallet" class="w-full sm:w-auto relative z-10">
            <Button class="w-full">MY WALLET</Button>
          </NuxtLink>
        </div>

        <div class="bg-white/5 p-6 rounded-2xl border">
          <div class="flex justify-between items-center mb-10">
            <div class="font-semibold text-2xl">Previous events</div>
            <NuxtLink
              :to="
                !past_events?.event_details.length ? '/dashboard' : '/events'
              "
              class="hidden md:block"
            >
              <UiButton
                :variant="'secondary'"
                class="gap-x-1"
                :disabled="!past_events?.event_details.length"
              >
                <span>SEE ALL</span>
                <SvgIcon name="arrow_right_alt" />
              </UiButton>
            </NuxtLink>
          </div>
          <EventHistoryTable :onDone="updatePastEvents" />
          <NuxtLink
            :to="!past_events?.event_details.length ? '/dashboard' : '/events'"
            class="w-full md:hidden"
          >
            <UiButton
              :variant="'secondary'"
              class="gap-x-1 w-full mt-6"
              :disabled="!past_events?.event_details.length"
            >
              <span>SEE ALL</span>
              <SvgIcon name="arrow_right_alt" />
            </UiButton>
          </NuxtLink>
        </div>

        <div class="bg-white/5 p-6 rounded-2xl border">
          <div class="font-semibold text-2xl mb-10">Top Audience</div>
          <HostTopSpendersTable />
        </div>
      </div>

      <div
        class="max-w-full w-full hidden mac:grid mac:w-[380px] order-1 mac:order-2 space-y-6"
      >
        <div class="sticky top-[80px] left-0 right-0 z-10 space-y-6">
          <CreateEventCard />
          <EventCard
            :event="hostLiveEvent"
            v-if="hostLiveEvent"
            @delete="deleteEvent"
            @done="refresh"
          />
        </div>

        <div class="my-6 grid place-items-center" v-if="status === 'pending'">
          <Loader class="size-5 animate-spin" />
        </div>

        <template
          v-if="
            !!data &&
            !error &&
            Array.isArray(hostNewEvents) &&
            hostNewEvents.length
          "
        >
          <EventCard
            v-for="event in hostNewEvents"
            :key="event.id"
            :event="event"
            @delete="deleteEvent"
            @done="refresh"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/button.vue";
import type { ApiResponse } from "~/types";
import type { EventHistory, LiveEvent } from "~/types/event";
import { Loader } from "lucide-vue-next";
import EventCard from "~/components/cards/event-card.vue";
import CreateEventCard from "~/components/cards/create-event-card.vue";
import EventHistoryTable from "~/components/table/event-history-table.vue";
import HostTopSpendersTable from "~/components/table/host-top-spenders-table.vue";
import ProfileCompletion from "~/components/cards/profile-completion.vue";
import type { Wallet } from "~/types/payment";
import type { Pagination } from "~/types/pagination";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";

const currentPage = ref(1);
const perPage = ref(100);

definePageMeta({
  middleware: ["host"],
});

const { active, toggle } = useToggle();
const { auth_user } = useAuth();
const { data, status, error, refresh } = useCustomFetch<
  ApiResponse<Pagination<LiveEvent, "event_details">>
>("/events", {
  params: computed(() => ({
    page: currentPage.value,
    per_page: perPage.value,
    only_events: true,
  })),
  watch: [currentPage, perPage],
  immediate: true,
  // onResponse: (data) => {
  //   props.onDone?.(data.response._data?.data);
  // },
});

console.log("55555eb=ventssssss", data.value?.data?.event_details);

const { data: wallet, status: wallet_status } =
  useCustomFetch<Wallet>("/wallets");

const deleteEvent = (id: number | string) => {
  if (!data.value) return;
  const updatedEvents = data.value?.data?.event_details?.filter(
    (item) => item.id !== id
  );
  Object.assign(data.value, { data: updatedEvents });
};

const hostNewEvents = computed(() =>
  data.value?.data?.event_details?.length
    ? data.value?.data?.event_details.filter((event) => event.status === "new")
    : []
);

const past_events = ref<EventHistory>();
const updatePastEvents = (state?: EventHistory) => {
  past_events.value = state;
};

const hostLiveEvent = computed(() =>
  data.value?.data?.event_details?.find((item) => item.status === "live")
);

const allEvents = computed(() =>
  hostLiveEvent.value
    ? [hostLiveEvent.value, ...hostNewEvents.value]
    : [...hostNewEvents.value]
);

useSeoMeta({
  title: "Host Dashboard | Spin Request",
});
</script>
