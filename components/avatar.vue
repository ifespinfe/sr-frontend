<template>
  <AvatarRoot
    class="bg-muted inline-flex max-w-full max-h-full size-[40px] text-[15px] font-medium leading-1 uppercase select-pointer items-center justify-center overflow-hidden rounded-full align-middle"
  >
    <AvatarImage :src="image" class="h-full w-full object-cover" />
    <AvatarFallback class="flex h-full w-full items-center justify-center">
      {{ initials }}
    </AvatarFallback>
  </AvatarRoot>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{ initials?: string; image?: string }>(), {
  image: "",
  initials: "",
});
const image_fallback = ref("");
</script>
