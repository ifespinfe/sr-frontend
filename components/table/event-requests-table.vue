<template>
  <TableContainer
    :heading="heading"
    :data="requests"
    :loading="status === 'pending' || loading"
    class="hidden md:block"
    :pagination-meta="meta ? {
      page: meta?.page || 1,
      per_page: meta?.per_page || DEFAULT_PAGE_LIMIT,
      total: meta?.total || 0,
      onPageChange: meta?.onPageChange!,
    } : undefined"
  >
    <tr v-for="(request, index) in requests" :key="request.id">
      <td>{{ index + 1 }}</td>
      <td class="text-muted-foreground">
        {{ request.audience.name ?? request.audience.stage_name }}
      </td>
      <td class="text-muted-foreground">
        {{ useDateFormat(request.created_at, "HH:mm") }}
      </td>
      <td class="font-semibold">₦{{ formatMoney(request?.price ?? 0) }}</td>
      <td>
        <div
          :class="
            cn(
              'flex items-center',
              request.type === 'hype' ? ' text-[#FF99F1]' : 'text-[#FFEE99]'
            )
          "
        >
          <SvgIcon
            :name="request.type === 'hype' ? 'mic' : 'music'"
            class="scale-50 mt-1"
          />
          <span> {{ request?.type }} request</span>
        </div>
      </td>
      <td
        :class="{
          'text-destructive': ['ignored', 'declined'].includes(request.status),
          'text-green-500': ['completed'].includes(request.status),
        }"
      >
        {{ request.status }}
      </td>
    </tr>
    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No requests for this event
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
  <div class="md:hidden space-y-5">
    <!-- loading -->
    <template v-if="loading">
      <div v-for="i in 4" :key="i" class="border-b">
        <div class="h-12 animate-pulse bg-muted/50"></div>
      </div>
    </template>

    <template v-else>
      <div
        class="grid grid-cols-[15px_1fr_auto] gap-4 items-center"
        v-for="(request, index) in requests"
        :key="request.id"
      >
        <div>{{ index + 1 }}</div>
        <div class="flex items-center gap-x-2">
          <div class="space-y-px">
            <div>
              {{ request.audience.name ?? request.audience.stage_name }}
            </div>
            <div class="text-muted-foreground">
              {{ useDateFormat(request.created_at, "HH:mm") }}
            </div>
          </div>

          <div class="flex items-center gap-x-4">
            <div
              :class="
                cn(
                  'flex items-center  -mt-1 min-w-ful gap-x-4',
                  request.type === 'hype' ? ' text-[#FF99F1]' : 'text-[#FFEE99]'
                )
              "
            >
              <div class="flex items-center">
                <SvgIcon
                  :name="request.type === 'hype' ? 'mic' : 'music'"
                  class="scale-50 mt-1"
                />
                <div class="min-w-fit">{{ request?.type }}</div>
              </div>

              <div
                :class="{
                  'text-destructive': ['ignored', 'declined'].includes(
                    request.status
                  ),
                  'text-green-500': ['completed'].includes(request.status),
                }"
                class="text-xs"
              >
                {{ request.status }}
              </div>
            </div>
          </div>
        </div>
        <div class="font-semibold justify-self-end">
          ₦{{ formatMoney(request?.price ?? 0) }}
        </div>
      </div>

      <div
        class="min-h-[297px] grid place-items-center"
        v-if="!requests.length"
      >
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No requests for this event
          </div>
        </div>
      </div>
    </template>

    <div v-if="meta" class="pt-6 pb-2 w-full flex justify-center">
      <TablePagination
        :page="meta?.page || 1"
        :per_page="meta?.per_page || DEFAULT_PAGE_LIMIT"
        :total="meta?.total || 0"
        @page-change="meta.onPageChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableContainer from "@/components/table/container.vue";
import { XCircle } from "lucide-vue-next";
import type { ApiResponse } from "~/types";
import type { EventRequest, LiveEvent } from "~/types/event";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";

const props = defineProps<{
  event_id?: string;
  event_requests?: EventRequest[];
  loading?: boolean;
  disabled?: boolean;
  meta?: {
    page: number;
    per_page: number;
    total: number;
    onPageChange: (page: number) => void;
  };
}>();
const heading = ref([
  "#",
  "AUDIENCE NAME",
  "TIME",
  "AMOUNT",
  "REQUEST TYPE",
  "STATUS",
]);
const { data, status } = useCustomFetch<ApiResponse<LiveEvent>>(
  `/events/${props.event_id}`,
  { immediate: !props.disabled && !!props.event_id }
);
const requests = computed(
  () => props?.event_requests ?? data?.value?.data?.requests ?? []
);
</script>
