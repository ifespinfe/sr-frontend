<template>
  <div class="container pt-16 pb-40 relative">
    <div class="max-w-full w-[1112px] mx-auto">
      <div
        class="flex flex-wrap justify-between gap-6 items-center text-muted-foreground"
      >
        <div class="flex gap-x-2 items-center">
          <SharedBackButton to="/profile" />
          <div
            class="font-display text-xl sm:text-2xl font-semibold ml-2 text-white"
          >
            Following
          </div>
          <Dot class="size-12" />
          <div class="text-lg sm:text-xl shrink-0">0 people</div>
        </div>
        <div class="w-[450px] max-w-full ml-auto rounded-full relative">
          <Search
            class="size-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            class="!pl-12 !py-4 pr-4 w-full h-full bg-white/5 rounded-[inherit] border border-transparent outline-0 focus:border-input"
            placeholder="Search..."
          />
        </div>
      </div>
      <SharedLoadingArea :error="null">
        <ListboxRoot class="py-8">
          <ListboxContent class="space-y-1 relative">
            <ListboxItem
              v-for="spender in mockEventSpenders"
              :key="spender.user_id"
              :value="spender.user_id"
            >
              <NuxtLink
                :to="`/following/${spender.user_id}`"
                class="p-3 bg-white/5 border rounded-md transition-colors hover:bg-white/10 grid grid-cols-[50px,_1fr,_auto] gap-x-6 items-center [&:hover_>_.arrow]:block"
              >
                <Avatar
                  :initials="getInitials(spender.name)"
                  class="font-bold text-lg"
                  :style="{
                    backgroundColor: getHexColor(
                      spender?.name?.charAt(0) ?? 'A'
                    ),
                    color: 'black',
                  }"
                />
                <div class="text-muted-foreground font-semibold">
                  {{ spender.name }}
                </div>
                <ChevronRight
                  class="size-6 hidden animate-in slide-in-from-left-1 arrow"
                />
              </NuxtLink>
            </ListboxItem>
          </ListboxContent>
        </ListboxRoot>
      </SharedLoadingArea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dot } from "lucide-vue-next";
import { mockEventSpenders } from "~/constants/mocks";
import { ChevronRight, Search } from "lucide-vue-next";
</script>
