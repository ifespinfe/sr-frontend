<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Toast
        :open="store.open"
        :title="store.toast_title"
        :description="store.toast_description"
        :variant="store.toast_variant"
        :action="store.toast_action"
        :onAction="toastOnAction"
        :update-open="toggleToast"
      />
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
import Toast from "./components/shared/toast.vue";
import { provideNotification } from "./components/notification";

const { isLoggedIn } = useAuth();
const store = useToastStore();
const { toastOnAction, toggleToast } = store;
const {
  $config: {
    public: { APP_BASE_URL },
  },
} = useNuxtApp();
provideNotification();
const path = useRoute().path;
useHead({
  titleTemplate: "%s | Spin Request",
  link: [
    {
      id: "canonical",
      rel: "canonical",
      href: `${APP_BASE_URL}${path}`,
    },
  ],
});

useSeoMeta({
  title: "Spin Request",
  ogTitle: "Spin Request",
  ogDescription:
    "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
  description:
    "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
  keywords: "DJ, hype man, hosts, song request, hype request",
  ogSiteName: "Spin Request",
  ogUrl: () => APP_BASE_URL,
  ogImage: () => `${APP_BASE_URL}/images/SpinRequest.jpg`,
  ogImageSecureUrl: () => `${APP_BASE_URL}/images/SpinRequest.jpg`,
  ogImageAlt: "Spin Request",
  ogImageWidth: 217,
  ogImageHeight: 217,
  ogImageType: "image/png",
  twitterSite: "@spinrequest",
  twitterImage: () => `${APP_BASE_URL}/images/SpinRequest.jpg`,
  twitterImageAlt: "Spin Request",
  twitterCard: "summary",
  fbAppId: "ugz8d26lc8x4eun1fw9a2xtzefo974",
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spin Request",
  alternateName: "SpinRequest",
  url: APP_BASE_URL,
  description:
    "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
  sameAs: [
    "https://www.facebook.com/spinrequest",
    "https://www.linkedin.com/company/spinrequest",
    "https://www.twitter.com/spinrequest",
    "https://www.instagram.com/spinrequest/",
    "https://www.tiktok.com/@spinrequest",
    "https://www.youtube.com/@spinrequest",
  ],
  logo: `${APP_BASE_URL}/images/SpinRequest.jpg`,
  keywords: ["DJ", "hype man", "hosts", "song request", "hype request"],
  foundingDate: "June 2023",
  address: "Nigeria",
}));

//enables inactivity tracking if user is logged in
if (isLoggedIn) {
  useInactivityLogout(30);
}
</script>
