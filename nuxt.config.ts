// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path";
const r = (p: string) => resolve(__dirname, p);
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/font.css"],
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-svgo-loader",
    "radix-vue/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "nuxt-jsonld",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      APP_BASE_URL:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : process.env.APP_BASE_URL,
    },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  alias: {
    "@spinlander": r("./components/lander"),
  },
  gtag: {
    id: "G-E298NRK4DP",
  },
  site: {
    url: process.env.APP_BASE_URL,
  },
  sitemap: {
    exclude: [
      "/audience",
      "/community-guidelines",
      "/create-event",
      "/dashboard",
      "/email-confirmation",
      "/events",
      "/forgot-password",
      "/login",
      "/order-history",
      "/privacy-policy",
      "/profile",
      "/reset-password",
      "/search",
      "/signup",
      "/terms",
      "/wallet",
      "/forgot-password/reset",
      "/signup/audience",
      "/signup/host",
    ],
    sources: ["/api/__sitemap__/urls"],
  },
});
