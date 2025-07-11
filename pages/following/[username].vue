<template>
  <div class="container pt-6 pb-20">
    <SharedBackButton to="/following" class="relative z-10" />
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr_350px] justify-between gap-6 mt-10 relative"
      >
        <div
          class="fixed left-0 right-0 h-[60vh] top-0 bg-gradient-to-r from-[#4a1520] via-[#462454] to-[#2d4163]"
        />
        <div
          class="fixed left-0 right-0 h-[60vh] top-0 bg-gradient-to-b from-[#4a1520] via-[#462454] to-background"
        />

        <div class="relative z-10">
          <div
            v-if="data?.data?.following"
            class="grid lg:grid-cols-[auto_1fr] items-center gap-4"
          >
            <Avatar
              class="!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl"
              :initials="getInitials(data?.data?.following?.user_name ?? '')"
              :image="data?.data?.following?.profile_picture"
            />
            <div class="py-2">
              <div class="font-display text-3xl md:text-4xl font-semibold">
                {{ data?.data?.following?.user_name ?? "" }}
              </div>
              <div class="flex flex-wrap gap-4 items-center my-4 mb-6">
                <div class="flex items-center gap-2">
                  <SvgIcon name="account_circle" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.following?.followers
                    }}</span>
                    <span class="text-muted-foreground">FOLLOWERS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2" v-if="isHost">
                  <SvgIcon name="celebration" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.following?.total_events
                    }}</span>
                    <span class="text-muted-foreground">EVENTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.following?.requests
                    }}</span>
                    <span class="text-muted-foreground">REQUESTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2" v-if="isHost">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{
                      data?.data?.following?.fulfilled
                    }}</span>
                    <span class="text-muted-foreground">FUFILLED</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center gap-4">
                <Button
                  :variant="'secondary'"
                  class="w-full md:w-auto"
                  :size="'lg'"
                  @click="
                    data.data?.following?.followed
                      ? handleUnFollow()
                      : handleFollow()
                  "
                  :loading="following || unfollowing"
                  :disabled="following || unfollowing"
                  hide_loading_text
                >
                  {{ data.data?.following?.followed ? "Unfollow" : "Follow" }}
                </Button>

                <Button
                  class="w-full md:w-auto"
                  :size="'lg'"
                  @click="handleSubscription"
                  :loading="subscribing"
                  :disabled="subscribing"
                  hide_loading_text
                >
                  {{
                    data.data?.following?.subscribed
                      ? "Unsubscribe"
                      : "Notify me when Host Goes Live."
                  }}
                </Button>
              </div>
            </div>
          </div>

          <div
            v-if="status === 'success' && !data?.data?.following"
            class="bg-red h-40flex items-center justify-center"
          >
            <p>User not found</p>
          </div>

          <div class="mt-8 pb-4 lg:mt-32" v-if="userLinks.length">
            <ProfileViewLinks :links="userLinks" />
          </div>
        </div>

        <div
          class="mt-4 space-y-2 text-muted-foreground relative z-10"
          v-if="data?.data?.following?.role === 'host'"
        >
          <div>ABOUT ME</div>
          <div class="max-w-[550px]">
            {{ data.data?.following?.bio }}
          </div>
          <div
            class="inline-flex bg-white/10 items-center rounded-xl p-3 gap-4"
          >
            <SvgIcon name="badge" />
            <div>
              <div class="text-lg font-semibold text-foreground">
                {{ data.data?.following?.fulfilled }} of
                {{ data.data?.following?.requests }}
              </div>
              <div class="text-muted-foreground">Request fufilled</div>
            </div>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "~/types";
import Button from "../../components/ui/button.vue";
import Avatar from "~/components/avatar.vue";
import type { Fan } from "~/types/user";

const username = useRoute()?.params?.username;
const { status, data, error, refresh } = useCustomFetch<
  ApiResponse<{ following: Fan }>
>(`/following/details/${username}`);

const userLinks = computed(() => {
  if (!data?.value?.data?.following?.url) return [];

  return [
    {
      url: data?.value?.data?.following?.url,
      url_name: data?.value?.data?.following?.url_name,
    },
  ];
});
// console.log("statussss: ", userLinks);

const isHost = computed(() => {
  if (!data.value?.data) return false;
  return data.value.data?.following?.role === "host";
});

const {
  followUser,
  unFollowUser,
  following,
  unfollowing,
  subOrUnsubscribeUser,
  subscribing,
} = useFollowActions();

const handleFollow = () => {
  const id = data.value?.data?.following.id;
  if (!id) return;
  followUser(id, () => {
    showToast({ title: "Followed successfully", variant: "normal" });
    refresh();
  });
};
const handleUnFollow = () => {
  const id = data.value?.data?.following.id;
  if (!id) return;
  unFollowUser(id, () => {
    showToast({ title: "Unfollowed successfully", variant: "normal" });
    refresh();
  });
};

const handleSubscription = () => {
  const id = data.value?.data?.following.id;
  const isSubscrided = data.value?.data?.following?.subscribed;
  if (!id) return;
  subOrUnsubscribeUser(id, isSubscrided ? "unsubscribe" : "subscribe", () => {
    showToast({
      title: isSubscrided ? "You have unsubscribed" : "You have subscribed",
      variant: "normal",
    });
    refresh();
  });
};
</script>
