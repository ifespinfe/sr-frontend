import { a as useNuxtApp, s as showToast } from './server.mjs';
import { ref } from 'vue';

const useFollowActions = () => {
  const {
    $repo: { user }
  } = useNuxtApp();
  const following = ref(false);
  const unfollowing = ref(false);
  const subscribing = ref(false);
  const followUser = async (parent_id, onDone) => {
    var _a2;
    var _a;
    try {
      following.value = true;
      const response = await user.followUser({ parent_id });
      following.value = false;
      onDone == null ? void 0 : onDone();
    } catch (e) {
      following.value = false;
      const error = e;
      showToast({
        title: (_a2 = (_a = error == null ? undefined : error.data) == null ? undefined : _a.message) != null ? _a2 : "Failed",
        variant: "warning"
      });
      console.error("COULD NOT FOLLOW USER", e);
    }
  };
  const unFollowUser = async (parent_id, onDone) => {
    var _a2;
    var _a;
    try {
      unfollowing.value = true;
      const response = await user.unFollowUser({ parent_id });
      unfollowing.value = false;
      onDone == null ? void 0 : onDone();
    } catch (e) {
      unfollowing.value = false;
      const error = e;
      showToast({
        title: (_a2 = (_a = error == null ? undefined : error.data) == null ? undefined : _a.message) != null ? _a2 : "Failed",
        variant: "warning"
      });
      console.error("COULD NOT UNFOLLOW USER", e);
    }
  };
  const subOrUnsubscribeUser = async (id, type, onDone) => {
    var _a2;
    var _a;
    try {
      subscribing.value = true;
      const response = type === "subscribe" ? await user.subscribeUser(id) : await user.unSubscribeUser(id);
      subscribing.value = false;
      onDone == null ? void 0 : onDone();
    } catch (e) {
      subscribing.value = false;
      const error = e;
      showToast({
        title: (_a2 = (_a = error == null ? undefined : error.data) == null ? undefined : _a.message) != null ? _a2 : "Failed",
        variant: "warning"
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
    subscribing
  };
};

export { useFollowActions as u };
//# sourceMappingURL=useFollowActions-DlzAamUr.mjs.map
