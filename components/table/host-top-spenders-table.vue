<template>
  <TableContainer
    :heading="heading"
    :data="spenders"
    :loading="status === 'pending'"
    class="hidden md:block"
  >
    <tr
      class="!h-20 text-muted-foreground"
      v-for="(spender, index) in spenders"
      :key="spender.audience_name + index"
    >
      <td>{{ index + 1 }}</td>
      <td>
        <div class="flex gap-x-2 items-center">
          <Avatar
            :initials="getInitials(spender?.audience_name)"
            class="font-bold text-lg"
            :style="{
              backgroundColor: getHexColor(
                spender?.audience_name?.charAt(0) ?? 'A'
              ),
              color: 'black',
            }"
          />
          <div class="font-semibold">{{ spender.audience_name }}</div>
        </div>
      </td>
      <td>₦{{ formatMoney(spender.song_earnings ?? 0) }}</td>
      <td>₦{{ formatMoney(spender.hype_earnings ?? 0) }}</td>
      <td>₦{{ formatMoney(spender.total_earnings ?? 0) }}</td>
    </tr>
    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No paying audience
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You don't have any paying audience yet. Once you do, your they will
            appear here
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
  <div class="space-y-1 md:hidden">
    <template v-if="status === 'pending'">
      <div class="h-10 bg-white/5 animate-pulse" v-for="i in 4" :key="i"></div>
    </template>
    <template v-else>
      <CollapsibleRoot
        v-for="(spender, index) in spenders"
        :key="spender.audience_name + index"
        class="rounded-lg bg-white/5"
      >
        <CollapsibleTrigger
          class="grid grid-cols-[auto_1fr_15px] gap-x-4 items-center w-full p-4 [&[data-state='open']_.caret]:rotate-180"
        >
          <Avatar
            :initials="getInitials(spender?.audience_name)"
            class="font-bold text-lg"
            :style="{
              backgroundColor: getHexColor(
                spender?.audience_name?.charAt(0) ?? 'A'
              ),
              color: 'black',
            }"
          />

          <div class="font-semibold text-left">
            {{ spender.audience_name }}
          </div>

          <ChevronDown class="size-5 caret transition-transform relative" />
        </CollapsibleTrigger>
        <CollapsibleContent
          class="data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden"
        >
          <div class="space-y-4 px-4 pb-4">
            <div class="space-y-1">
              <div class="text-sm text-muted-foreground">SONG REQUESTS</div>
              <div class="">₦{{ formatMoney(spender.song_earnings ?? 0) }}</div>
            </div>
            <div class="space-y-1">
              <div class="text-sm text-muted-foreground">HYPE REQUESTS</div>
              <div class="">₦{{ formatMoney(spender.hype_earnings ?? 0) }}</div>
            </div>
            <div class="space-y-1">
              <div class="text-sm text-muted-foreground">TOTAL</div>
              <div class="">
                ₦{{ formatMoney(spender.total_earnings ?? 0) }}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </CollapsibleRoot>
      <div
        class="min-h-[297px] grid place-items-center"
        v-if="!spenders.length"
      >
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No paying audience
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You don't have any paying audience yet. Once you do, your they will
            appear here
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ChevronDown } from "lucide-vue-next";
import TableContainer from "~/components/table/container.vue";
import { XCircle } from "lucide-vue-next";
import type { ApiResponse } from "~/types";
import type { HostAudience } from "~/types/event";
const heading = ref(["#", "NAME", "SONG REQUEST", "HYPE REQUESTS", "TOTAL"]);
const { data, status } =
  useCustomFetch<ApiResponse<HostAudience[]>>("/user/top-audience");
const spenders = computed(() => data.value?.data ?? []);
</script>
