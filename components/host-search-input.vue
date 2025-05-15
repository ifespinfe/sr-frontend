<template>
  <div
    class="relative rounded-full border border-input focus-within:ring-ring shadow-sm transition-colors bg-white/5 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1 pl-12 pr-8 py-6 h-[56px]"
  >
    <input
      type="text"
      :placeholder="searchPlaceholder || 'Search DJs MCs, Hypeman name'"
      class="focus-visible:outline-none bg-transparent text-base absolute inset-0 p-[inherit] z-[3]"
      v-model="search"
      @keyup="handleKeyEvent"
    />
    <Search
      class="absolute left-4 top-1/2 -translate-y-[52%] size-5 text-muted-foreground"
    />
    <div class="absolute right-4 top-1/2 -translate-y-[52%] z-[4]">
      <NuxtLink :to="`/search?search=${search}`">
        <Button
          :size="'icon'"
          :variant="'primary'"
          class="animate-in slide-in-from-left-1 fade-out-0"
          v-if="search || searching"
          :loading="searching"
          :disabled="!searched_hosts?.length"
        >
          <ArrowRight />
        </Button>
      </NuxtLink>
    </div>
    <div class="absolute left-0 translate-y-[35px] z-[5] w-full">
      <div
        v-if="searching"
        class="py-1 w-full flex justify-center bg-background/50 backdrop-blur"
      >
        <Loader class="size-5 animate-spin" />
        <sopan class="pl-1 text-sm tracking-wide">searching....</sopan>
      </div>
      <HostSearchList
        :hosts="searched_hosts"
        class="animate-in slide-in-from-top-1 fade-in-20"
        v-if="show_result && search"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search, ArrowRight } from "lucide-vue-next";
import Button from "./ui/button.vue";
import type { Host } from "~/types/user";
import debounce from "lodash-es/debounce";
import { Loader } from "lucide-vue-next";

const search = ref("");
const searching = ref(false);
const searched_hosts = ref<Host[]>([]);
const show_result = ref(false);

const {
  $repo: { user },
} = useNuxtApp();

const props = defineProps<{
  searchPlaceholder?: string;
}>();

const { searchPlaceholder } = props || {};

const handleSearch = async () => {
  try {
    searching.value = true;
    const response = await user.searchHost(search.value);
    searching.value = false;
    if (response?.data?.hosts) {
      searched_hosts.value = response?.data?.hosts;
    }
    show_result.value = true;
  } catch (e) {
    searching.value = false;
    searched_hosts.value = [];
    console.error("ERORO", e);
  }
};

const debouncedSearch = debounce(handleSearch, 1000);

watch(search, (data) => {
  if (data) {
    debouncedSearch();
  }
  if (!data) {
    searched_hosts.value = [];
    show_result.value = false;
  }
});

const handleKeyEvent = (e: KeyboardEvent) => {
  if (e.key === "Enter" && search.value) {
    return navigateTo(`/search?search=${search.value}`);
    // handleSearch();
  }
};
</script>
