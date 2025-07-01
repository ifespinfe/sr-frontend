import type { ApiError } from "~/types";

export const useFollowActions = () => {
  const {
    $repo: { user },
  } = useNuxtApp();
  const following = ref(false);
  const unfollowing = ref(false);
  const subscribing = ref(false);

  const followUser = async (
    parent_id: string | number,
    onDone?: () => void,
    onInitiation?: () => void
  ) => {
    try {
      following.value = true;
      onInitiation?.();
      // following.value = true;
      const response = await user.followUser({ parent_id });
      following.value = false;
      // showToast({
      //   title: "You have followed host",
      //   variant: "normal",
      // });
      onDone?.();
    } catch (e) {
      following.value = false;
      const error = e as ApiError;
      showToast({
        title: error?.data?.message ?? "Failed",
        variant: "warning",
      });
      console.error("COULD NOT FOLLOW USER", e);
    }
  };

  const unFollowUser = async (
    parent_id: string | number,
    onDone?: () => void,
    onInitiation?: () => void
  ) => {
    try {
      unfollowing.value = true;
      onInitiation?.();
      // unfollowing.value = true;
      const response = await user.unFollowUser({ parent_id });
      unfollowing.value = false;
      // showToast({
      //   title: "You have unfollowed host",
      //   variant: "normal",
      // });
      onDone?.();
    } catch (e) {
      unfollowing.value = false;
      const error = e as ApiError;
      showToast({
        title: error?.data?.message ?? "Failed",
        variant: "warning",
      });
      console.error("COULD NOT UNFOLLOW USER", e);
    }
  };

  const subOrUnsubscribeUser = async (
    id: string | number,
    type: "subscribe" | "unsubscribe",
    onDone?: () => void
  ) => {
    try {
      subscribing.value = true;
      const response =
        type === "subscribe"
          ? await user.subscribeUser(id)
          : await user.unSubscribeUser(id);
      subscribing.value = false;
      onDone?.();
    } catch (e) {
      subscribing.value = false;
      const error = e as ApiError;
      showToast({
        title: error?.data?.message ?? "Failed",
        variant: "warning",
      });
      console.error("COULD NOT FOLLOW USER", e);
    }
  };

  return {
    followUser,
    following,
    unFollowUser,
    unfollowing,
    subOrUnsubscribeUser,
    subscribing,
  };
};
