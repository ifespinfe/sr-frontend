<template>
  <div class="container py-10">
    <div class="space-y-2 text-center font-display mb-8">
      <h3 class="text-5xl font-semibold">DJ, Play My Song!</h3>
      <p class="text-2xl text-muted-foreground">
        SpinRequest Makes You the Party Hero
      </p>
    </div>
    <div
      class="grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-4 gap-y-8"
    >
      <div class="relative w-full">
        <div class="aspect-square w-full max-h-[300px] bg-accent rounded-t-3xl">
          <NuxtImg
            src="/images/masked-dj.png"
            class="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
        <div class="space-y-3 p-4 md:p-5 relative z-10">
          <h3 class="font-display text-3xl">Turn the Fun to your tune!</h3>
          <p class="text-muted-foreground">
            No more begging the DJ for your favorite song. Take charge with
            SpinRequest! Request your jams live and get the party grooving to
            your beat.
          </p>
        </div>
        <div
          class="absolute bottom-0 h-1/2 left-0 right-0 px-10 pb-10 pt-[120px] bg-gradient-to-t from-background to-background/0"
        ></div>
      </div>
      <div class="relative w-full">
        <div class="aspect-square w-full max-h-[300px] bg-accent rounded-t-3xl">
          <NuxtImg
            src="/images/joyful-woman.png"
            class="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
        <div class="space-y-3 p-4 md:p-5 relative z-10">
          <h3 class="font-display text-3xl">Steal the spotlight</h3>
          <p class="text-muted-foreground">
            Request hype shouts from DJs and Hypemen, Get your name out there
            and be the centre of attention without grabbing the mic!.
          </p>
        </div>
        <div
          class="absolute bottom-0 h-1/2 left-0 right-0 px-10 pb-10 pt-[120px] bg-gradient-to-t from-background to-background/0"
        ></div>
      </div>

      <div class="relative w-full">
        <div class="aspect-square w-full max-h-[300px] bg-accent rounded-t-3xl">
          <NuxtImg
            src="/images/jolly.png"
            class="w-full h-full object-cover rounded-[inherit]"
          />
        </div>
        <div class="space-y-3 p-4 md:p-5 relative z-10">
          <h3 class="font-display text-3xl">Make Memories that Matter</h3>
          <p class="text-muted-foreground">
            Birthdays, anniversaries, apology missions - make any celebration
            unforgettable. Request a special song for your friends and loved
            ones, and show them you care with the perfect soundtrack to the
            moment.
          </p>
        </div>
        <div
          class="absolute bottom-0 h-1/2 left-0 right-0 px-10 pb-10 pt-[120px] bg-gradient-to-t from-background to-background/0"
        ></div>
      </div>
    </div>
    <div class="flex justify-center my-8">
      <NuxtLink to="/signup/audience">
        <UiButton :size="'lg'"> REQUEST A SONG </UiButton>
      </NuxtLink>
    </div>
  </div>
</template>
