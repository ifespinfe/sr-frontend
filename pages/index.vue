<template>
  <div>
    <HeroSection />
    <FeatureSection />
    <HowItWorksSection />
    <HighlightSection />
    <AudiencePerksSection />
    <HostPerksSection />
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
import {
  HeroSection,
  FeatureSection,
  HowItWorksSection,
  HighlightSection,
  AudiencePerksSection,
  HostPerksSection,
  FaqSection,
} from "@spinlander";

useHead({
  titleTemplate: "Request Songs or Hypes from DJs & Hosts",
});

definePageMeta({
  layout: "lander",
});
</script>
