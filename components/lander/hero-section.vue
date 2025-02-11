<template>
  <div class="relative bg-gradient-to-b from-[#111014] to-[#111014]/5">
    <div class="container pt-20 relative">
      <h1
        class="text-center text-4xl md:text-6xl w-full max-w-[842px] mx-auto font-display"
      >
        Request <b>Songs or Hypes</b> from DJs & Hosts
      </h1>
      <p
        class="text-center my-6 text-xl md:text-2xl w-full max-w-[616px] mx-auto text-foreground"
      >
        Request songs and shoutouts directly from DJs, Hypemen seamlessly at
        clubs, events, parties, lounges and bars!
      </p>
      <div class="max-w-[600px] mx-auto">
        <HostSearchInput />
      </div>
      <div
        class="w-full max-w-[842px] aspect-video relative left-1/2 -translate-x-1/2 -translate-y-1/3 opacity-40"
      >
        <NuxtImg
          src="/images/ring-light.png"
          class="w-full h-full object-contain"
          loading="lazy"
          alt="RingLight"
        />
      </div>
    </div>
  </div>
</template>
