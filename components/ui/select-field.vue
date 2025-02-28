<template>
  <SelectRoot
    :model-value="selected_option ?? ''"
    @update:model-value="selected_option = $event"
    :disabled="disabled || loading"
    :name="name"
  >
    <SelectTrigger
      :class="
        cn(
          `inline-flex relative border data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&[data-state='open']_.trigger-icon]:rotate-180 w-full rounded-lg min-w-[160px] items-center justify-between px-3 text-[14px] leading-none h-[58px] gap-[5px] bg-white/5 shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none`,
          state === 'error' ? `border-destructive` : `border-border`
        )
      "
    >
      <SelectValue
        :placeholder="placeholder"
        :class="
          cn(
            selected_option && !!label && 'mt-4',
            selected_option ? 'text-foreground ' : 'text-muted-foreground',
            'text-base'
          )
        "
      />
      <Loader class="size-4 animate-spin" v-if="loading" />
      <ChevronDown
        class="trigger-icon size-4 relative transition-transform"
        v-else
      />
      <span
        v-if="selected_option && label"
        :class="
          cn(
            'absolute text-sm font-medium top-3 left-3 animate-in slide-in-from-bottom-1 -translate-y-1/2 label-text transition-all',
            state === 'error' ? 'text-destructive' : ' text-muted-foreground'
          )
        "
      >
        {{ label }}
      </span>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] max-h-[300px] overflow-auto w-[var(--radix-select-trigger-width)] bg-[#252528] border rounded shadow-lg will-change-[opacity,transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=top]:slide-in-from-bottom-1 data-[side=right]:slide-in-from-left-1 z-[100]"
        :position="'popper'"
        :side="'bottom'"
        :side-offset="5"
      >
        <SelectViewport class="p-3">
          <SelectItem
            v-for="(option, index) in options"
            :key="index"
            :value="option"
            class="text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
          >
            <SelectItemIndicator
              class="absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center"
            >
            </SelectItemIndicator>
            <SelectItemText>
              {{ option }}
            </SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import { ChevronDown, Loader } from "lucide-vue-next";
const selected_option = defineModel<string | undefined | null>();

withDefaults(
  defineProps<{
    options?: string[];
    label?: string;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    state?: "normal" | "error";
    loading?: boolean;
  }>(),
  {
    options: () => [],
    disabled: false,
    state: "normal",
    label: "",
    loading: false,
  }
);
</script>
