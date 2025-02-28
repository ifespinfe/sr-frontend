<template>
  <ListboxRoot class="w-full rounded-2xl bg-[#252528]">
    <ListboxContent class="max-h-[296px] overflow-auto w-full p-2">
      <template v-if="hosts.length">
        <ListboxItem
          v-for="(host, index) in hosts"
          :key="host.id + index"
          :value="host.id"
          @select="(e) => handleSelection(e, host.slug)"
        >
          <NuxtLink
            :to="`/${host?.slug ?? host.user_name}`"
            :class="
              cn(
                host.is_live
                  ? 'grid-cols-host-item__live'
                  : 'grid-cols-host-item',
                'w-full grid gap-2 items-center border-0 py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer'
              )
            "
          >
            <Avatar
              :initials="
                getInitials(host?.stage_name ?? host.user_name ?? host?.email)
              "
              :image="host.profile_picture"
            />
            <span class="text-base font-semibold">{{
              host?.stage_name ?? host.user_name ?? host?.email
            }}</span>
            <div
              v-if="host.is_live"
              class="inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"
            >
              <span>LIVE</span>
              <span class="size-2 rounded-full bg-destructive"></span>
            </div>
            <ArrowUpLeft
              class="goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2"
            />
          </NuxtLink>
        </ListboxItem>
      </template>
      <template v-else>
        <div class="p-4 text-center text-base text-muted-foreground">
          No match found
        </div>
      </template>
    </ListboxContent>
  </ListboxRoot>
</template>

<script setup lang="ts">
import { ArrowUpLeft } from "lucide-vue-next";
import type { Host } from "~/types/user";
withDefaults(defineProps<{ hosts: Host[] }>(), { hosts: () => [] });

const handleSelection = (e: Event, slug: string) => {
  e.preventDefault();
  navigateTo(`/${slug}`);
};
</script>
