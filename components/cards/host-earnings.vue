<template>
  <div class="bg-white/5 border p-6 rounded-3xl">
    <div class="flex flex-col md:flex-row gap-5 justify-between items-center">
      <div class="text-2xl font-semibold mr-auto">Earnings</div>
      <div class="flex flex-wrap items-center gap-4 sm:ml-auto">
        <RadioGroupRoot
          class="flex gap-x-px rounded-full border bg-white/5 text-sm"
          @update:model-value="resetDate"
          v-model="filter"
        >
          <RadioGroupItem
            value="weekly"
            class="py-2 px-4 transition-colors rounded-3xl hover:bg-primary/70 data-[state=checked]:bg-primary"
          >
            Weekly
          </RadioGroupItem>
          <RadioGroupItem
            value="monthly"
            class="py-2 px-4 transition-colors rounded-3xl hover:bg-primary/70 data-[state=checked]:bg-primary"
          >
            Monthly
          </RadioGroupItem>
          <RadioGroupItem
            value="yearly"
            class="py-2 px-4 transition-colors rounded-3xl hover:bg-primary/70 data-[state=checked]:bg-primary"
          >
            Yearly
          </RadioGroupItem>
        </RadioGroupRoot>
        <div class="max-w-[200px]">
          <VueDatePicker
            v-model="date"
            :year-picker="filter === 'yearly'"
            :month-picker="filter === 'monthly'"
            :week-picker="filter === 'weekly'"
            :clearable="false"
            auto-apply
            :format="formatter"
            dark
          ></VueDatePicker>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-x-4 border-t border-b py-4 my-8">
      <div class="flex gap-2 items-center flex-wrap [&_>_div]:shrink-0">
        <div class="size-2 bg-[#8878E9]"></div>
        <div>Expenses</div>
      </div>
      <div class="flex gap-x-2 items-center">
        <div class="size-2 bg-[#FF99F1]"></div>
        <div>Song <span class="hidden sm:inline">request</span></div>
      </div>
      <div class="flex gap-x-2 items-center">
        <div class="size-2 bg-[#FFEE99]"></div>
        <div>Hype <span class="hidden sm:inline">request</span></div>
      </div>
    </div>
    <div
      class="flex gap-x-4 justify-between items-baseline [&_>div]:w-16"
      v-if="status === 'pending'"
    >
      <div class="h-32 bg-muted animate-pulse"></div>
      <div class="h-40 bg-muted animate-pulse"></div>
      <div class="h-56 bg-muted animate-pulse"></div>
      <div class="h-64 bg-muted animate-pulse"></div>
      <div class="h-44 bg-muted animate-pulse"></div>
      <div class="h-32 bg-muted animate-pulse"></div>
      <div class="h-40 bg-muted animate-pulse"></div>
      <div class="h-56 bg-muted animate-pulse"></div>
      <div class="h-64 bg-muted animate-pulse"></div>
      <div class="h-44 bg-muted animate-pulse"></div>
    </div>
    <div class="overflow-x-auto" v-else>
      <WalletHistoryGraph :chart="chartData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import WalletHistoryGraph from "../wallet-history-graph.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const filter = ref<"yearly" | "monthly" | "weekly">("yearly");

const date = ref<number | [Date, Date] | { month: number; year: string }>(
  new Date().getFullYear()
);

const getDateDetails = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const diffInDays = date.getDate() - startOfMonth.getDate();
  const week = Math.ceil((diffInDays + startOfMonth.getDay() + 1) / 7);

  return {
    year,
    month,
    week,
  };
};

const formatter = (date: Date) => {
  const details = getDateDetails(date);
  switch (filter.value) {
    case "yearly":
      return useDateFormat(date, "YYYY").value;
    case "monthly":
      return useDateFormat(date, "MMM, YYYY").value;
    default:
      return `Week ${details.week} ${useDateFormat(date, "MMM, YYYY").value}`;
  }
};

const todayDate = computed(() => {
  return getDateDetails();
});

const selectedDate = computed(() => {
  switch (filter.value) {
    case "yearly":
      return {
        week_no: 1,
        month: 1,
        year: date.value ? date.value : todayDate.value.year,
      };
    case "monthly":
      return {
        week_no: 1,
        month: date.value ? date.value.month : todayDate.value.month,
        year: date.value ? date.value?.year : todayDate.value.year,
      };
    default: {
      const _date = date.value?.[0] ? date.value?.[0] : new Date();
      const details = getDateDetails(_date);

      return {
        week_no: details.week,
        month: details.month,
        year: details.year,
      };
    }
  }
});

const resetDate = (type: string) => {
  if (type === filter.value) return;
  if (type === "yearly") {
    date.value = todayDate.value.year;
    return;
  }
  if (type === "monthly") {
    date.value = {
      year: todayDate.value.year,
      month: todayDate.value.month,
    };
    return;
  }
  date.value = [new Date(), new Date()];
};

const weekNumber = computed(() => {
  return selectedDate.value.week_no;
});

const selectedMonth = computed(() => {
  return selectedDate.value.month + 1;
});

const selectedYear = computed(() => {
  return selectedDate.value.year;
});

const { data, status } = useCustomFetch("/user/earnings", {
  query: {
    filter: filter,
    week_no: weekNumber,
    month: selectedMonth,
    year: selectedYear,
  },
});

const labels = computed(() => {
  switch (filter.value) {
    case "yearly":
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    case "monthly":
      return ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    case "weekly":
      return [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    default:
      return [];
  }
});

const graphLabels = computed(() => {
  switch (filter.value) {
    case "yearly":
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    case "monthly":
      return ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
    case "weekly":
      return [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    default:
      return [];
  }
});

const chartData = computed(() => {
  const categories = [
    "expenseEarnings",
    "hypeEarnings",
    "songEarnings",
  ] as const;

  const chart = data?.value?.data ?? {};
  const datasets = categories.map((category) => {
    const label =
      category === "expenseEarnings"
        ? "Expense"
        : category === "hypeEarnings"
        ? "Hype"
        : "Song";
    const bg =
      category === "expenseEarnings"
        ? "#8878E9"
        : category === "hypeEarnings"
        ? "#FFEE99"
        : "#FF99F1";
    const data = labels.value.map((label) => {
      return chart?.[label]?.[category] ?? 0;
    });
    return {
      label,
      backgroundColor: bg,
      data,
    };
  });
  return {
    labels: graphLabels.value,
    datasets,
  };
});
</script>
