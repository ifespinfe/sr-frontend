<template>
  <div class="container pt-6 pb-20">
    <LiveBanner
      class="-translate-y-6"
      :user="'audience'"
      :start-date="data?.data?.live_event?.start_date"
      animate
      v-if="data?.data?.live_event && !ended"
    >
      <NuxtLink
        :to="`/${route.params.host}/${data?.data?.live_event?.id}/make-a-request`"
      >
        <Button>Make {{ hasPendingRequest ? "another" : "a" }} request</Button>
      </NuxtLink>
    </LiveBanner>
    <SharedBackButton
      to="/audience"
      :class="cn(data?.data?.live_event ? 'mt-10' : '', 'relative z-10')"
    />
    <SharedLoadingArea
      :loading="!!data ? false : status === 'pending'"
      :error="error"
      class="z-10 relative"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr_400px] justify-between gap-6 mt-10"
        v-if="host"
      >
        <div>
          <div class="grid lg:grid-cols-[auto_1fr] items-center gap-4">
            <Avatar
              class="!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl"
              :initials="
                getInitials(
                  host?.stage_name ?? host.name ?? host.user_name ?? ''
                )
              "
              :image="host.profile_picture"
              @click="ended = true"
            />
            <div class="py-2">
              <div class="font-display text-3xl md:text-4xl font-semibold">
                {{ host?.user_name ?? host?.stage_name ?? host.name ?? "" }}
              </div>
              <div class="flex flex-wrap gap-4 items-center my-4 mb-6">
                <div class="flex items-center gap-2">
                  <SvgIcon name="account_circle" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.total_followers?.length
                    }}</span>
                    <span class="text-muted-foreground">FOLLOWERS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2" v-if="isHost">
                  <SvgIcon name="celebration" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.total_events
                    }}</span>
                    <span class="text-muted-foreground">EVENTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.total_requests
                    }}</span>
                    <span class="text-muted-foreground">REQUESTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2" v-if="isHost">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.total_fulfilled_requests
                    }}</span>
                    <span class="text-muted-foreground">FUFILLED</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center gap-4">
                <Button
                  :variant="followingHost ? 'secondary' : 'primary'"
                  class="w-full md:w-auto"
                  :size="'lg'"
                  @click="followHost"
                  :loading="following || unfollowing"
                  hide_loading_text
                >
                  {{ followingHost ? "Unfollow" : "follow" }}
                </Button>
                <NuxtLink
                  v-if="data?.data?.live_event && !ended"
                  :to="`/${route.params.host}/${data?.data?.live_event?.id}/make-a-request`"
                  class="w-full md:w-auto"
                >
                  <Button :size="'lg'" class="w-full">
                    Make {{ hasPendingRequest ? "another" : "a" }} request
                  </Button>
                </NuxtLink>

                <Button
                  class="w-full md:w-auto"
                  :size="'lg'"
                  v-else-if="!data?.data?.live_event && false"
                  @click="subscibeHandler"
                  :loading="subscribing"
                >
                  Notify me when Host Goes Live.
                </Button>
              </div>
            </div>
          </div>
          <div
            class="mt-10 space-y-2 text-muted-foreground hidden md:block"
            v-if="data?.data?.live_event && isHost"
          >
            <div>ABOUT ME</div>
            <div class="max-w-[450px]">
              {{ host.bio }}
            </div>
            <div
              class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"
            >
              <SvgIcon name="badge" />
              <div>
                <div class="text-lg font-semibold text-foreground">
                  {{ data?.data?.total_fulfilled_requests }} of
                  {{ data?.data?.total_requests }}
                </div>
                <div class="text-muted-foreground">Request fufilled</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <RequestQueueCard
            :requests="host_events_data?.data?.requests || []"
            :event="data?.data?.live_event"
            v-if="data?.data?.live_event"
          />
          <div
            class="mt-10 space-y-2 text-muted-foreground hidden md:block"
            v-else-if="isHost"
          >
            <div>ABOUT ME</div>
            <div class="max-w-[450px]">
              {{ host.bio }}
            </div>
            <div
              class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"
            >
              <SvgIcon name="badge" />
              <div>
                <div class="text-lg font-semibold text-foreground">
                  {{ data?.data?.total_fulfilled_requests }} of
                  {{ data?.data?.total_requests }}
                </div>
                <div class="text-muted-foreground">Request fufilled</div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-center gap-x-2 mt-4 items-center animate-in slide-in-from-top-4"
            v-if="ended"
          >
            <div>Unfufilled requests?</div>
            <ConfirmDialog message="Was your song or hype requests completed?">
              <UiButton :variant="'ghost'" :size="'sm'">
                <div class="text-red-500 underline hover:no-underline">
                  REPORT
                </div>
              </UiButton>
            </ConfirmDialog>
          </div>
        </div>

        <div
          class="mt-4 space-y-4 text-muted-foreground md:hidden"
          v-if="isHost"
        >
          <div>ABOUT ME</div>
          <div class="max-w-[450px]">
            {{ host.bio }}
          </div>
          <div
            class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"
          >
            <SvgIcon name="badge" />
            <div>
              <div class="text-lg font-semibold text-foreground">
                {{ data?.data?.total_fulfilled_requests }} of
                {{ data?.data?.total_requests }}
              </div>
              <div class="text-muted-foreground">Request fufilled</div>
            </div>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
    <RejectedRequestModal v-model="request_rejected" />
    <div
      class="fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-r from-[#4a1520] via-[#462454] to-[#2d4163]"
      v-if="!data?.data?.live_event"
    />
    <div
      class="fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-b from-[#4a1520] via-[#462454] to-background"
      v-if="!data?.data?.live_event"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from "../../components/ui/button.vue";
import Avatar from "~/components/avatar.vue";
import type { ApiResponse } from "~/types";
import type { HostProfile, MakeARequestRes } from "~/types/user";
import RequestQueueCard from "~/components/request-queue.card.vue";
import type { PresenceChannel } from "pusher-js";
import RejectedRequestModal from "~/components/modals/rejected-request.vue";
import Pusher from "pusher-js";
import ConfirmDialog from "~/components/modals/confirm-dialog.vue";
import type { PusherEndEvent, PusherRequestUpdate } from "~/types/event";

const eventID = ref<string | number>();
const route = useRoute();
const conneected = ref(false);
const { data, error, status, refresh } = useCustomFetch<
  ApiResponse<HostProfile>
>(`/user/${route.params.host}`, {
  onResponse(data) {
    eventID.value = data?.response?._data?.data?.live_event?.id;
    connectPusher(data?.response?._data?.data?.live_event?.id);
  },
});
const {
  data: host_events_data,
  error: host_events_error,
  status: host_events_status,
  refresh: host_events_refresh,
} = useCustomFetch<ApiResponse<MakeARequestRes>>(
  `/user/live/event/${route.params.host}`,
  {
    onResponse() {
      connectPusher(eventID.value);
    },
  }
);

// console.log("33333pppp", host_events_data?.value?.data?.requests);
const host = computed(() => data?.value?.data?.user);

const { authEmail, auth_user } = useAuth();

const liveEventRequests = computed(() => {
  return host_events_data.value?.data?.requests ?? [];
});

const followingHost = computed(() => {
  if (!data.value?.data) return false;
  return data.value.data.total_followers.some(
    (user) => user.user.email === authEmail.value
  );
});

const onFollowOrUnfollow = (action: "FOLLOW" | "UNFOLLOW") => {
  if (!data.value || !auth_user.value) return;
  if (action === "FOLLOW" && data.value.data?.total_followers) {
    const authFollower = {
      id: auth_user.value?.id,
      parent: auth_user.value,
      parent_id: auth_user.value.id,
      user: auth_user.value,
      user_id: auth_user.value.id,
    };
    const updatedFollowers = [...data.value.data.total_followers, authFollower];
    Object.assign(data.value, {
      data: { ...data.value.data, total_followers: updatedFollowers },
    });
  } else {
    const updatedFollowers = data.value.data?.total_followers.filter(
      (item) => item.user.email !== auth_user.value?.email
    );
    Object.assign(data.value, {
      data: { ...data.value.data, total_followers: updatedFollowers },
    });
  }
};

const {
  followUser,
  following,
  unFollowUser,
  unfollowing,
  subOrUnsubscribeUser,
  subscribing,
} = useFollowActions();

const followHost = () => {
  const id = data?.value?.data?.user.id;
  if (!id) return;
  followingHost.value
    ? unFollowUser(id, refresh, () => onFollowOrUnfollow("UNFOLLOW"))
    : followUser(id, refresh, () => onFollowOrUnfollow("FOLLOW"));
};

const subscibeHandler = () => {
  const id = data?.value?.data?.user.id;
  if (!id) return;
  subOrUnsubscribeUser(id, "subscribe", refresh);
};

const request_rejected = ref(false);

const isHost = computed(() => {
  return data.value?.data?.user?.type === "host";
});

const hasPendingRequest = computed(() => {
  return liveEventRequests.value?.some(
    (item) => item?.audience.email === authEmail.value
  );
});

const {
  $config: {
    public: { APP_BASE_URL },
  },
} = useNuxtApp();

const ended = ref(false);

const connectPusher = (id?: number | string) => {
  if (conneected.value) return;
  const pusher = new Pusher("0259a0ebe407b648fd2f", {
    cluster: "mt1",
  });

  pusher.connection.bind("error", (err: any) => {
    console.log({ err, state: "ERROR" });
  });

  pusher.connection.bind("connected", (data: PusherEndEvent) => {
    console.log({ data, state: "CONNECTED" });
  });

  const channel = pusher.subscribe(
    `SPREvents.${id ?? data.value?.data?.live_event?.id ?? null}`
  );
  conneected.value = true;
  console.log({ channel });

  channel.bind("HostEndsEvent", (data: PusherEndEvent) => {
    console.log("HOST ENDED EVENT", data);
    showToast({ title: `${data.spr_event_name} ended`, duration: 5000 });
    refresh();
    host_events_refresh();
    ended.value = true;
  });

  channel.bind("HostGoesLive", (data: any) => {
    // console.log("HOST GONE LIVE", data);
    showToast({ title: "Host is now live" });
    refresh();
    host_events_refresh();
  });

  channel.bind("StatusChangedToCompleted", (data: PusherRequestUpdate) => {
    console.log("NOW COMPLETED", data);
  });

  channel.bind("StatusChangedToNowPlaying", (data: PusherRequestUpdate) => {
    // console.log("NOW PLAYING", data, auth_user.value);
    refresh();
    host_events_refresh();
    if (data.audience.id === auth_user.value?.id) {
      showToast({
        title: `${data.host.name ?? data.host.title} now playing your ${
          data.request.type
        } request`,
      });
    }
  });

  channel.bind("StatusChangedToPending", (data: PusherRequestUpdate) => {
    console.log("NOW PENDING", data);
  });

  channel.bind("StatusChangedToRejected", (data: PusherRequestUpdate) => {
    // console.log("NOW REJCTED", data);
    refresh();
    host_events_refresh();
    if (data.audience.id === auth_user.value?.id) {
      showToast({
        title: `${data.host.name ?? data.host.title} rejected your ${
          data.request.type
        } request ${data.request.description ?? data.request.song_title}`,
      });
      request_rejected.value = true;
    }
  });

  channel.bind_global((event, data) => {
    console.log(
      `The event ${event} was triggered with data ${data?.message || "--"}`,
      data
    );
  });
};

useSeoMeta({
  title: () =>
    `${host?.value?.user_name ?? host?.value?.stage_name ?? "Spin User"}`,
  ogTitle: () =>
    `${data.value?.data?.live_event?.title ?? ""} | ${
      host.value?.stage_name ?? ""
    }`,
  ogDescription: () => "Make your requests and take spotlight of this event",
  ogImage: () =>
    `${
      host.value?.profile_picture ??
      "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
    }`,
  ogImageAlt: () => "Live Event",
  ogImageSecureUrl: () =>
    `${
      host.value?.profile_picture ??
      "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
    }`,
  twitterImage: () =>
    `${
      host.value?.profile_picture ??
      "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"
    }`,
  twitterTitle: () =>
    `${data.value?.data?.live_event?.title ?? ""} | ${
      host.value?.stage_name ?? ""
    }`,
  ogType: "article",
  ogUrl: () => `${APP_BASE_URL}/${host.value?.slug ?? ""}`,
  ogSiteName: "SpinRequest",
});
</script>
