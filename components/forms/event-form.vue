<template>
  <Form
    class="space-y-6"
    :validation-schema="EventSchema"
    :initial-values="formInitialValues"
    @submit="handleSubmit"
  >
    <FormInput
      name="title"
      placeholder="Enter event title"
      label="Event title"
    />

    <FormInput
      name="address"
      placeholder="Enter event address"
      label="Address"
    />
    <div class="flex flex-col sm:flex-row gap-4 w-full">
      <FormSelect
        :options="countries"
        name="country"
        placeholder="Choose event country"
        label="Country"
        class="w-full"
      />
      <FormSelect
        :options="states"
        name="state"
        placeholder="Choose event state"
        label="State"
        class="w-full"
      />
    </div>
    <div>
      <div class="mb-3 font-medium">What type of request are you taking</div>
      <RadioGroupRoot
        class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground"
        name="type"
        required
        v-model="type"
      >
        <RadioGroupItem as-child value="song">
          <Button
            type="button"
            :variant="'outline'"
            :size="'lg'"
            class="ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
          >
            Song
          </Button>
        </RadioGroupItem>
        <RadioGroupItem as-child value="hype">
          <Button
            type="button"
            :variant="'outline'"
            :size="'lg'"
            class="ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
          >
            Hype
          </Button>
        </RadioGroupItem>
        <RadioGroupItem as-child value="both">
          <Button
            type="button"
            :variant="'outline'"
            :size="'lg'"
            class="col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"
          >
            Song & Hype
          </Button>
        </RadioGroupItem>
      </RadioGroupRoot>
    </div>

    <!-- <InputCheck label="Mark as free event" v-model="free" /> -->

    <div
      class="bg-white/5 rounded-2xl p-4 !mt-8 border animate-in slide-in-from-top-1 animate-out fade-in-0"
      v-if="type && !free"
    >
      <div class="text-sm text-muted-foreground">Set your starting prices</div>

      <div class="my-4 space-y-4">
        <div
          class="flex justify-between items-center"
          v-if="type == 'both' || type == 'song'"
        >
          <div class="text-2xl font-semibold">
            Song <span class="hidden sm:inline">request</span>
          </div>

          <NumberInput v-model="song_price" id="SONG_PRICE" :step="100" />
        </div>
        <div
          class="flex justify-between items-center"
          v-if="type == 'both' || type == 'hype'"
        >
          <div class="text-2xl font-semibold">
            Hype <span class="hidden sm:inline">request</span>
          </div>
          <NumberInput v-model="hype_price" id="HYPE_PRICE" :step="100" />
        </div>
      </div>

      <div
        class="py-1 px-2 mt-8 border border-destructive bg-[#64200A] flex items-center rounded-md justify-between"
        v-if="show_tip && !edit"
      >
        <div class="text-sm sm:text-base">
          You can always change the price at any time during the event
        </div>
        <X class="size-4 cursor-pointer" @click="show_tip = false" />
      </div>
    </div>
    <Button
      class="max-w-full w-[450px] !flex !mt-8 mx-auto border"
      :size="'lg'"
      :disabled="disabled"
      :loading="loading"
    >
      {{ props.edit ? "Update" : "Create" }} event
    </Button>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from "vee-validate";
import Button from "../ui/button.vue";
import { X } from "lucide-vue-next";
import FormInput from "~/components/forms/form-input.vue";
import FormSelect from "~/components/forms/form-select.vue";
import NumberInput from "~/components/ui/number-input.vue";
import { EventSchema, type HostEvent } from "~/schemas/event-schema";
import type { EventFormDetails } from "~/types/event";
import type { ApiError } from "~/types";

interface FormProps extends EventFormDetails {
  edit?: boolean;
  id?: string | number;
}
const props = withDefaults(defineProps<FormProps>(), {
  title: "",
  address: "",
  song_price: 100,
  hype_price: 100,
  edit: false,
});

const emit = defineEmits(["done"]);

const formInitialValues = computed(() => {
  return {
    title: props.title,
    address: props.address,
    country: props.country,
    state: props.state,
  };
});

const { all_countries: countries, nigerian_states: states } = useCountry();

const type = ref<"song" | "hype" | "both" | undefined>(props.type);
const song_price = ref(props.song_price);
const hype_price = ref(props.hype_price);
const show_tip = ref(true);
const disabled = computed(
  () =>
    !type.value || Number(song_price.value) < 0 || Number(hype_price.value) < 0
);
const loading = ref(false);
const free = ref(false);

const types = computed<{ name: "hype" | "song"; price: number }[]>(() => {
  switch (type.value) {
    case "both":
      return [
        {
          name: "song",
          price: free.value ? 0 : Number(song_price.value),
        },
        {
          name: "hype",
          price: free.value ? 0 : Number(hype_price.value),
        },
      ];
    case "hype":
      return [
        {
          name: "hype",
          price: free.value ? 0 : Number(hype_price.value),
        },
      ];
    case "song":
      return [
        {
          name: "song",
          price: free.value ? 0 : Number(song_price.value),
        },
      ];
    default:
      return [];
  }
});

const {
  $repo: { event: eventModule },
} = useNuxtApp();

const handleSubmit = async (event: HostEvent) => {
  const payload = {
    ...event,
    types: types.value,
  };

  try {
    loading.value = true;
    const response = props.edit
      ? await eventModule.editEvent(payload, props.id as string)
      : await eventModule.createEvent(payload);
    loading.value = false;
    showToast({ title: response.message, variant: "normal" });
    if (props.edit) {
      emit("done");
      return;
    }
    if (response?.data?.id) {
      navigateTo("/dashboard");
    }
  } catch (error) {
    const e = error as ApiError;
    loading.value = false;
    showToast({
      title:
        e.data?.message ?? props.edit
          ? "Failed to update event"
          : "Failed to create event",
      variant: "warning",
    });
    console.error("FAILED", e);
  }
};
</script>
