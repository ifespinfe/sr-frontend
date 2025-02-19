<template>
  <ListboxRoot>
    <ListboxContent class="relative">
      <div class="font-display text-3xl font-bold pb-4 border-b border-input">
        Top Spenders
      </div>
      <ListboxItem
        v-for="(spender, index) in sortedSpenders"
        :key="spender.user_id + spender.email"
        :value="spender.user_id + spender.email"
        @select="handleSelection"
      >
        <div class="grid grid-cols-[auto,_1fr,_auto] gap-4 items-center my-8">
          <div class="flex gap-x-4 items-center">
            <div class="relative bg-foreground size-[30px] rounded-full">
              <!-- <SvgIcon name="trophy" class="place-center" /> -->
              <div class="place-center text-lg font-bold text-background">
                {{ spender.position }}
              </div>
            </div>
            <Avatar
              :initials="getInitials(spender.name)"
              class="font-bold text-lg"
              :style="{
                backgroundColor: getHexColor(spender?.name?.charAt(0) ?? 'A'),
                color: 'black',
              }"
            />
          </div>

          <div class="space-y-px">
            <div>{{ spender.name }}</div>
            <div class="text-[#FFEE99]" v-if="spender.active">You</div>
          </div>
          <div class="font-semibold">
            ₦{{ formatMoney(spender?.total ?? 0) }}
          </div>
        </div>
      </ListboxItem>
      <div
        class="py-20 absolute -top-2 inset-0 grid place-items-center"
        v-if="loading"
      >
        <Loader class="size-4 animate-spin" />
      </div>
    </ListboxContent>
  </ListboxRoot>
</template>

<script lang="ts" setup>
import type { EventSpender } from "~/types/event";
import { Loader } from "lucide-vue-next";
import { mockEventSpenders } from "~/constants/mocks";
import Avatar from "./avatar.vue";

const props = withDefaults(
  defineProps<{
    spenders?: EventSpender[];
    loading?: boolean;
  }>(),
  {
    spenders: () => mockEventSpenders,
    loading: false,
  }
);

const handleSelection = (e: Event) => {
  e.preventDefault();
};

const { authEmail } = useAuth();

const sortedSpenders = computed(() => {
  if (!props?.spenders) return [];
  const spenders = props.spenders.map((spender, index) => ({
    ...spender,
    position: index + 1,
    active: spender.email === authEmail.value,
    name:
      spender?.name ??
      spender?.user_name ??
      spender?.nickname ??
      spender?.email ??
      "",
  }));
  const me = spenders.find((spender) => spender.email === authEmail.value);
  const topSixSpenders = spenders.slice(0, 6);
  const amongTopSix =
    !!me && topSixSpenders.some((spender) => spender.email === authEmail.value);
  if (me && !amongTopSix)
    topSixSpenders.splice(topSixSpenders.length - 1, 1, me);
  return topSixSpenders;
});
</script>
