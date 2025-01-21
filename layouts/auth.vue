<template>
  <div class="grid md:grid-cols-2 gap-10 min-h-full containe">
    <div class="relative z-10">
      <div
        class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
      ></div>
      <div
        class="relative z-[3] pt-32 px-[var(--cp)] md:pt-0 md:grid md:place-items-center h-full w-full -translate-y-10"
      >
        <slot />
      </div>
    </div>
    <div
      class="md:h-full min-h-[300px] hidden md:block md:min-h-0 bottom-0 w-full absolute md:relative bg-background rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl"
    >
      <NuxtImg
        src="/images/night-life.jpg"
        class="object-fill md:object-cover w-full h-full absolute rounded-[inherit]"
      />
    </div>
  </div>
</template>
