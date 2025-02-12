<template>
  <div class="container py-10">
    <div
      class="rounded-[30px] lg:rounded-[40px] relative overflow-hidden bg-radient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[0px]"
    >
      <div
        class="bg-sp-purple/50 blur-[150px] w-[60%] h-full border absolute -bottom-[70%] left-1/2 -translate-x-1/2 z-[2]"
      ></div>
      <div
        class="bg-white/5 rounded-[inherit] h-full p-[25px] md:p-[35px] lg:p-[60px] flex flex-wrap justify-between items-center gap-8 relative z-10"
      >
        <div class="space-y-8 w-full">
          <h3
            class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            Become a SpinRequest Host & Get Paid
          </h3>
          <div class="flex items-start justify-center gap-4 flex-wrap">
            <div class="flex gap-x-3 items-start">
              <div
                class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted"
              >
                <SvgIcon name="star" />
              </div>
              <p class="text-muted-foreground text-lg md:text-xl max-w-[302px]">
                Connect with audience ready to request their favourite songs and
                hype
              </p>
            </div>
            <div class="flex gap-x-3 items-start">
              <div
                class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted"
              >
                <SvgIcon name="star" />
              </div>
              <p class="text-muted-foreground text-lg md:text-xl max-w-[302px]">
                Set your prices, manage requests, and get paid
              </p>
            </div>
            <div class="flex gap-x-3 items-start">
              <div
                class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted"
              >
                <SvgIcon name="star" />
              </div>
              <p class="text-muted-foreground text-lg md:text-xl max-w-[302px]">
                Build your fanbase and create unforgettable experiences
              </p>
            </div>
          </div>
        </div>
        <NuxtLink class="w-full sm:w-auto mx-auto block" to="/signup/host">
          <UiButton :size="'lg'" class="w-full sm:w-auto mx-auto"
            >Create a Host account</UiButton
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
