<template>
  <div
    class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
  >
    <div class="space-y-2">
      <div class="font-semibold">My Links</div>
      <div class="text-muted-foreground lg:pr-2">
        Links allow you to showcase your work, mixtapes, and social media.
      </div>
    </div>

    <div class="space-y-4">
      <div
        class="space-y-4 lg:mt-4 hidden lg:block"
        v-if="userLinks.length === 0"
      >
        <XCircle class="size-8 block mx-auto stroke-2" />
        <div class="font-medium text-muted-foreground text-center">
          You have no links yet
        </div>
      </div>

      <div v-if="userLinks.length && !isDeleting && status !== 'pending'">
        <div
          v-for="(op, idx) in userLinks"
          :kry="idx"
          class="bg-[#FFFFFF0D] px-3 lg:px-5 py-3 lg:py-4 rounded-lg border shadow-sm flex justify-between items-center gap-4"
        >
          <Div class="flex gap-2.5 items-center">
            <Tally2
              class="size-4 lg:size-6 rotate-90 -mb-2.5 stroke-2 text-muted-foreground"
            />

            <p class="text-sm lg:text-lg">{{ op.url_name }}</p></Div
          >
          <div class="flex items-center gap-3.5">
            <a :href="op.url || '#'" target="_blank">
              <SquareArrowOutUpRight
                class="size-[15px] lg:size-[18px] stroke-2"
              />
            </a>
            <div
              role="button"
              tabindex="0"
              class="-mr-2"
              @click="
                () => {
                  linkToMutate = {
                    ...op,
                  };
                  open = true;
                }
              "
            >
              <Pencil class="size-[15px] lg:size-[18px] stroke-2" />
            </div>
            <ConfirmDialog
              message="Are you sure you want to delete this link"
              :on-confirm="deleteLink"
            >
              <Button :size="'icon'" :variant="'ghost'" :loading="isDeleting">
                <Trash2 class="size-[15px] lg:size-[18px] stroke-2" />
              </Button>
            </ConfirmDialog>
          </div>
        </div>
      </div>

      <div
        class="relative place-center h-10 w-6 text-white"
        v-if="isDeleting || status === 'pending'"
      >
        <Loader class="size-5 animate-spin" />
      </div>
    </div>

    <Modal :size="'md'" controlled v-model="open">
      <template #trigger>
        <slot>
          <Button
            :variant="'secondary'"
            :size="'md'"
            class="self-center"
            :class="userLinks.length ? 'hidden' : ''"
            @click="linkToMutate = initialLinkState"
            >Add Link</Button
          >
        </slot>
      </template>
      <template #heading>
        <div class="font-display text-2xl font-medium">
          {{ userLinks.length ? "Update Link" : "Add Link" }}
        </div>
      </template>
      <div class="p-6">
        <Form
          class="space-y-6 mt-2"
          :initial-values="{
            ...linkToMutate,
          }"
          @submit="handleSubmit"
        >
          <FormInput
            name="url_name"
            label="Link Name"
            placeholder="Name your link"
            type="text"
          />
          <FormInput
            name="url"
            label="Url"
            placeholder="Enter the full URL"
            type="text"
          />

          <div class="pt-6">
            <Button
              :size="'lg'"
              type="submit"
              class="w-full"
              :loading="loading"
            >
              {{ userLinks.length ? "Update Link" : "Add Link" }}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import type { ApiError, ApiResponse } from "~/types";
import {
  XCircle,
  Tally2,
  SquareArrowOutUpRight,
  Pencil,
  Trash2,
  Loader,
} from "lucide-vue-next";

import { Form } from "vee-validate";
import FormInput from "../forms/form-input.vue";
import Button from "../ui/button.vue";
import ConfirmDialog from "../modals/confirm-dialog.vue";

interface LinksResponseType {
  url: string | null;
  url_name: string | null;
}
const { data, status, refresh } = useCustomFetch<
  ApiResponse<LinksResponseType>
>("/user/profile/url", {
  server: true,
});
const userLinks = computed(() => {
  if (!data.value?.data?.url) {
    return [
      //   {
      //     url: "https://google.com",
      //     url_name: "My soundcloud mix",
      //   },
    ];
  }

  return [data.value?.data] as LinksResponseType[];
});
const initialLinkState = {
  url: "",
  url_name: "",
};
const linkToMutate = ref<LinksResponseType>(initialLinkState);

const open = ref(false);
const loading = ref(false);
const isDeleting = ref(false);

const handleSubmit = async (payload: { url_name: string; url: string }) => {
  loading.value = true;
  const res = await useCustomFetch("/user/url", {
    method: "PUT",
    body: {
      url_name: payload.url_name,
      url: payload.url,
    },
  });

  if (res.status.value === "error") {
    showToast({
      title: "Failed",
      description: res.error.value?.data?.message ?? "Operation Failed",
      variant: "warning",
    });
    loading.value = false;
    refresh();
  }

  if (res.status.value === "success") {
    showToast({
      title: "Updated",
      description: res.data.value?.message || "Successful",
    });
    refresh();
    loading.value = false;
    open.value = false;
    linkToMutate.value = initialLinkState;
  }
};

const deleteLink = async () => {
  isDeleting.value = true;
  const res = await useCustomFetch("/user/delete/url", {
    method: "PUT",
  });

  if (res.status.value === "error") {
    refresh();
    isDeleting.value = false;
    showToast({
      title: "Failed",
      description: res.error.value?.data?.message ?? "Operation Failed",
      variant: "warning",
    });
  }

  if (res.status.value === "success") {
    isDeleting.value = false;
    showToast({
      title: "Updated",
      description: "Successful",
    });
    refresh();
  }
};
</script>
