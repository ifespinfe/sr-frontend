<template>
  <div class="container pt-16 pb-40 relative">
    <div class="max-w-full w-[912px] mx-auto">
      <div
        class="flex gap-x-2 items-center text-muted-foreground fixed top-24 z-10"
      >
        <SharedBackButton to="/audience" />
        <div class="font-display sm:text-xl">
          Showing results for
          <span class="font-semibold ml-2">"{{ search }}"</span>
        </div>
        <Dot class="size-12" />
        <div class="sm:text-xl shrink-0">{{ hosts.length }} results</div>
      </div>
      <div class="relative mt-6">
        <ListboxRoot class="w-full">
          <ListboxContent class="w-full space-y-1">
            <template v-if="hosts.length">
              <ListboxItem
                v-for="(host, index) in hosts"
                :key="host.id + index"
                :value="host.id"
                @select="(e) => handleSelection(e, host.slug)"
              >
                <NuxtLink
                  :to="`/${host?.slug}`"
                  :class="
                    cn(
                      host.is_live
                        ? 'grid-cols-host-item__live'
                        : 'grid-cols-host-item__live',
                      'w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer'
                    )
                  "
                >
                  <Avatar
                    :initials="getInitials(host?.stage_name ?? host?.email)"
                    :image="host.profile_picture"
                  />
                  <div
                    class="grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base"
                  >
                    <span class="text-base font-semibold">{{
                      host?.stage_name ?? host?.email
                    }}</span>
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold">{{
                          host?.stats?.followers ?? 0
                        }}</span>
                        followers
                      </div>
                      <div>
                        <span class="font-semibold">{{
                          host?.stats?.events ?? 0
                        }}</span>
                        events
                      </div>
                      <div>
                        <span class="font-semibold">{{
                          host?.stats?.requests ?? 0
                        }}</span>
                        requests
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      :class="
                        cn(
                          'inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1',
                          host.is_live ? 'opacity-100' : 'opacity-0'
                        )
                      "
                    >
                      <span>LIVE</span>
                      <span class="size-2 rounded-full bg-destructive"></span>
                    </div>
                  </div>
                  <ArrowUpLeft
                    class="goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"
                  />
                </NuxtLink>
                <NuxtLink
                  :to="`/${host?.slug}`"
                  :class="
                    cn(
                      'w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer'
                    )
                  "
                >
                  <div class="flex items-center gap-x-4">
                    <Avatar
                      :initials="getInitials(host?.stage_name ?? host?.email)"
                      :image="host.profile_picture"
                    />
                    <span class="text-base font-semibold">{{
                      host?.stage_name ?? host?.email
                    }}</span>
                  </div>

                  <div class="flex justify-between items-center">
                    <div class="space-y-px">
                      <div class="font-semibold">
                        {{ host.stats?.followers ?? 0 }}
                      </div>
                      <div>followers</div>
                    </div>
                    <div class="space-y-px">
                      <div class="font-semibold">
                        {{ host.stats?.events ?? 0 }}
                      </div>
                      <div>events</div>
                    </div>
                    <div class="space-y-px">
                      <div class="font-semibold">
                        {{ host.stats?.requests ?? 0 }}
                      </div>
                      <div>requests</div>
                    </div>

                    <div
                      :class="
                        cn(
                          'inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1',
                          host.is_live ? 'opacity-100' : 'opacity-0'
                        )
                      "
                    >
                      <span>LIVE</span>
                      <span class="size-2 rounded-full bg-destructive"></span>
                    </div>

                    <div class="min-w-4">
                      <ArrowUpLeft
                        class="goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </ListboxItem>
            </template>
            <template v-if="!hosts.length && status !== 'pending'">
              <div class="p-4 text-center text-base text-muted-foreground">
                No match found
              </div>
            </template>
          </ListboxContent>
        </ListboxRoot>
        <div class="place-center" v-if="status === 'pending'">
          <Loader class="animate-spin size-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dot, Loader, ArrowUpLeft } from "lucide-vue-next";
import type { ApiResponse } from "~/types";
import type { Host } from "~/types/user";
useSeoMeta({ title: "Search Results" });

const search = useRoute().query?.search;
const { data, status } = useCustomFetch<ApiResponse<{ hosts: Host[] }>>(
  `user/search-user?name=${search}&per_page=100&page=1`
);
const hosts = computed(() => data.value?.data?.hosts ?? []);

const handleSelection = (e: Event, slug: string) => {
  e.preventDefault();
  navigateTo(`/${slug}`);
};
</script>
