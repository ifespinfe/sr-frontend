<template>
  <button
    :class="buttonVariants({ variant, size })"
    :disabled="loading || disabled"
  >
    <slot name="loader" v-if="loading">
      <div class="flex gap-x-2 items-center">
        <Loader class="size-4 animate-spin" />
        <span v-if="size != 'icon' && !hide_loading_text">Please wait...</span>
      </div>
    </slot>
    <slot v-else />
  </button>
</template>

<script lang="ts" setup>
import { Loader } from "lucide-vue-next";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 bg-gradient-to-l from-sp-purple-200 to-sp-purple hover:to-sp-purple-200",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-[#38373A] shadow-sm hover:bg-accent hover:text-accent-foreground",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    loading?: boolean;
    disabled?: boolean;
    hide_loading_text?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    loading: false,
    disabled: false,
    hide_loading_text: false,
  }
);
</script>
