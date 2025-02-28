<template>
  <div class="container py-20">
    <h3 class="text-5xl font-semibold text-center">How it works</h3>

    <TabsRoot class="space-y-6" default-value="audience">
      <TabsList
        class="flex gap-x-px items-center justify-center my-10 mx-auto border max-w-fit p-1 rounded-full"
        aria-label="How to use spin request"
      >
        <TabsTrigger
          class="border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground"
          value="audience"
          as-child
        >
          <button>Audience</button>
        </TabsTrigger>

        <TabsTrigger
          class="border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground"
          value="host"
          as-child
        >
          <button>Host</button>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4"
        value="audience"
      >
        <div
          class="rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]"
          v-for="(step, index) in audience_steps"
          :key="step.title + index"
        >
          <div class="rounded-[inherit] bg-background p-4 h-full">
            <div class="aspect-video relative">
              <NuxtImg
                src="/images/cloud-wings.png"
                class="absolute w-full h-full object-cover"
                alt="cloud-wings"
              />
              <div
                class="absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5"
              >
                <span class="text-muted-foreground text-sm font-medium"
                  >STEP {{ index + 1 }}</span
                >
              </div>
              <div
                class="size-[72px] rounded-full bg-primary grid place-items-center place-center"
              >
                <SvgIcon :name="step.icon" />
              </div>
            </div>

            <div class="space-y-2 mt-6 pb-8">
              <h5 class="font-display text-xl">{{ step.title }}</h5>
              <p class="text-muted-foreground">
                {{ step.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4"
        value="host"
      >
        <div
          class="rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]"
          v-for="(step, index) in host_steps"
          :key="step.title + index"
        >
          <div class="rounded-[inherit] bg-background p-4 h-full">
            <div class="aspect-video relative">
              <NuxtImg
                src="/images/cloud-wings.png"
                class="absolute w-full h-full object-cover"
                alt="cloud-wings"
              />
              <div
                class="absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5"
              >
                <span class="text-muted-foreground text-sm font-medium"
                  >STEP {{ index + 1 }}</span
                >
              </div>
              <div
                class="size-[72px] rounded-full bg-primary grid place-items-center place-center"
              >
                <SvgIcon :name="step.icon" />
              </div>
            </div>

            <div class="space-y-2 mt-6 pb-8">
              <h5 class="font-display text-xl">{{ step.title }}</h5>
              <p class="text-muted-foreground">
                {{ step.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
    </TabsRoot>
  </div>
</template>

<script lang="ts" setup>
const audience_steps = ref([
  {
    icon: "bubble-search",
    title: "Find Your DJ or Host",
    subtitle:
      "Search for the DJ you want to request from at the event, or scan their unique QR code.",
  },
  {
    icon: "bubble-question-mark",
    title: "Request a Song or Hype",
    subtitle:
      "Search for your favorite song title or enter your hype details and your name",
  },
  {
    icon: "bubble-dollar",
    title: "Finalize your order",
    subtitle:
      "See the price set by the DJ for your request (some DJs offer free requests!). Confirm your order and payment method.",
  },
  {
    icon: "bubble-play",
    title: "Hear Your Songs & Hypes",
    subtitle:
      "Relax and enjoy! We'll notify you when the DJ plays your song or delivers your hype shoutout. If your request is rejected, you'll get an immediate refund.",
  },
]);

const host_steps = ref([
  {
    icon: "bubble-search",
    title: "Sign Up & Create",
    subtitle:
      "Join Spin Request for free! Set up events with clear names and decide your prices for song requests and hype shouts.",
  },
  {
    icon: "bubble-question-mark",
    title: "Go Live & Take Requests",
    subtitle:
      "Launch your event and SpinRequest will display incoming requests on your dashboard.",
  },
  {
    icon: "bubble-play",
    title: "Manage with a Click",
    subtitle:
      "Review song titles, hype details, and usernames. Accept requests you want to play or politely decline with a single click.",
  },
  {
    icon: "bubble-dollar",
    title: "Cash out",
    subtitle:
      "Receive your earnings after the event. Spin Request handles secure payments",
  },
]);
</script>
