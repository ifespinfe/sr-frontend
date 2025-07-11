<template>
  <div class="max-w-xl">
    <div class="space-y-2 mb-4">
      <div class="font-semibold">My Links</div>
    </div>

    <div v-for="(op, idx) in userLinks" :key="idx">
      <div
        class="bg-[#FFFFFF0D] px-3 lg:px-5 py-2 lg:py-3 rounded-lg border shadow-sm flex justify-between items-center gap-4"
      >
        <Div class="flex gap-4 items-center">
          <div
            class="rounded-full p-2 bg-[#FFFFFF10] border shadow-sm flex justify-between items-center"
          >
            <Link2
              class="size-3 lg:size-6 -mb-1 stroke-2 text-muted-foreground"
            />
          </div>

          <p class="text-sm lg:text-lg">{{ op.url_name }}</p></Div
        >
        <div class="flex items-center gap-3.5">
          <a :href="op.url || '#'" target="_blank">
            <SquareArrowOutUpRight
              class="size-[15px] lg:size-[18px] stroke-2"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ApiError, ApiResponse } from "~/types";
import { Link2, SquareArrowOutUpRight } from "lucide-vue-next";

import { Form } from "vee-validate";
import FormInput from "../forms/form-input.vue";
import Button from "../ui/button.vue";
import ConfirmDialog from "../modals/confirm-dialog.vue";

interface LinksResponseType {
  url: string | null;
  url_name: string | null;
}

const { links } = defineProps<{ links: LinksResponseType[] }>();

const userLinks = computed(() => {
  if (!links || !links.length) {
    return [
      //   {
      //     url: "https://google.com",
      //     url_name: "My soundcloud mix",
      //   },
    ];
  }

  return links;
});
</script>
