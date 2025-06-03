<template>
  <TableContainer
    :heading="heading"
    :data="history"
    :loading="loading"
    :pagination-meta="{
      page: meta?.page || 1,
      per_page: meta?.per_page || DEFAULT_PAGE_LIMIT,
      total: meta?.total || 0,
      onPageChange: meta.onPageChange,
    }"
  >
    <NuxtLink
      custom
      v-for="item in history"
      :key="item.reference"
      v-slot="{ navigate }"
      :to="
        item.type === 'credit'
          ? `/wallet/${item.reference}/event-earnings`
          : `/wallet/${item.reference}/event-payout`
      "
    >
      <tr
        @click="navigate"
        class="text-muted-foreground [&:hover_.arrow]:block"
      >
        <td>
          <div
            :class="
              cn(
                ' size-10 rounded-full grid place-items-center',
                item.type === 'credit' ? 'bg-[#38F08D]/15' : 'bg-[#F04438]/15'
              )
            "
          >
            <SvgIcon
              :name="
                item.type === 'credit' ? 'dotted-arrow-down' : 'dotted-arrow-up'
              "
            />
          </div>
        </td>
        <td class="text-xl font-semibold text-foreground">
          ₦{{ formatMoney(item.amount) }}
        </td>
        <td>{{ item.description }}</td>
        <td>{{ useDateFormat(item.created_at, "YY-MM-DD") }}</td>
        <td>{{ useDateFormat(item.created_at, "HH:mm") }}</td>

        <td
          :class="{
            'text-[#38F08D]': !!item.reference,
            'text-[white]': order.status === 'pending-',
            'text-[#E66840]': order.status === 'failed=',
          }"
        >
          {{ item.reference ? "Successful" : "Pending" }}
        </td>
        <td>
          <div class="size-6 grid place-items-center">
            <ArrowRight
              class="size-4 hidden animate-in slide-in-from-left-4 arrow"
            />
          </div>
        </td>
      </tr>
    </NuxtLink>

    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No transactions yet
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You haven’t been credited for any event or performed any payouts yet
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
</template>

<script lang="ts" setup>
import TableContainer from "~/components/table/container.vue";
import { XCircle, ArrowRight } from "lucide-vue-next";
import type { WalletHistory } from "~/types/payment";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";
interface PaginationMeta {
  page: number;
  per_page: number;
  total: number;
  onPageChange: (page: number) => void;
}

defineProps<{
  loading: boolean;
  history: WalletHistory[];
  meta: PaginationMeta;
}>();
const heading = ref(["", "AMOUNT", "TYPE", "DATE", "TIME", "STATUS", ""]);
const order = ref({ status: "pending" });
</script>
