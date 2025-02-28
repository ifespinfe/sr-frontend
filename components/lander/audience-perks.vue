<template>
  <div class="container py-10">
    <div
      class="rounded-[30px] lg:rounded-[40px] relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]"
    >
      <div
        class="bg-background rounded-[inherit] h-full p-[25px] md:p-[35px] lg:p-[60px] flex flex-wrap justify-between items-center gap-8"
      >
        <div class="space-y-8">
          <h3
            class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold max-w-full w-[650px]"
          >
            Request Songs & Get Hyped with SpinRequest
          </h3>
          <div class="flex items-start gap-4 flex-wrap">
            <div class="flex gap-x-3 items-start">
              <div
                class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted"
              >
                <SvgIcon name="star" />
              </div>
              <p class="text-muted-foreground text-lg md:text-xl max-w-[302px]">
                Be the centre of attention and show off your music taste
              </p>
            </div>
            <div class="flex gap-x-3 items-start">
              <div
                class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted"
              >
                <SvgIcon name="star" />
              </div>
              <p class="text-muted-foreground text-lg md:text-xl max-w-[302px]">
                Request songs and shout outs from DJs and Hypemen at clubs,
                bars, and parties!
              </p>
            </div>
          </div>
        </div>
        <NuxtLink class="w-full sm:w-auto block" to="/signup/audience">
          <UiButton :size="'lg'" class="w-full sm:w-auto"
            >Create an audience account</UiButton
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
