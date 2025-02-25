<template>
  <div class="bg-[#1C1B1F] py-[100px]">
    <div class="container max-w-[1248px]">
      <h4 class="font-display font-semibold text-4xl md:text-5xl mb-[40px]">
        Frequently Asked Questions
      </h4>
      <AccordionRoot
        default-value="item-1"
        type="single"
        collapsible
        class="space-y-2"
      >
        <template v-for="item in faqs" :key="item.value">
          <AccordionItem
            class="bg-[#252528] rounded-xl py-4 faq-item"
            :value="item.value"
          >
            <AccordionHeader class="px-4">
              <AccordionTrigger
                class="flex w-full items-center justify-between"
              >
                <div class="font-medium text-left">{{ item.title }}</div>
                <SvgIcon
                  name="arrow_forward"
                  class="arrow relative -rotate-180 will-change-transform transition-transform"
                />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              class="px-4 text-muted-foreground overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            >
              <div class="pt-4" v-html="item.content"></div>
            </AccordionContent>
          </AccordionItem>
        </template>
      </AccordionRoot>
      <div class="text-lg text-muted-foreground mt-2">
        Can’t find the answer you're looking for?
        <a href="mailto:spinrequestsupp@gmail.com" class="text-primary"
          >Chat with us</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Thing, WithContext } from "schema-dts";
const faqs = ref([
  {
    value: "what_is_spin_request",
    title: "What is Spin Request?",
    content:
      "Spin Request is an innovative platform that connects Event Hosts, such as DJs, MCs, and show hosts, with their audiences. It enables real-time song and hype requests during live performances. Using Spin Request, audience members can submit song requests directly to Event Hosts through their mobile devices, enhancing engagement and creating unforgettable experiences.",
  },
  {
    value: "how_does_spin_request_work",
    title: "How does Spin Request work?",
    content:
      "DJs create an event on the platform, Audience members can locate the DJ by entering the DJ’s name or scanning their QR code, Once connected, audience members submit song or hype requests, DJs review and play these requests, tailoring their performance to audience preferences.",
  },
  {
    value: "who_is_spin_request_for",
    title: "Who is Spin Request for?",
    content:
      "Event Hosts & Performers – DJs, MCs, hypemen, TV and radio hosts, and performers can easily manage song and hype requests during live events. <br/> Event Attendees, Guests & Fans –  Anyone attending a live event  who wants  to Make song or shoutout requests directly to the host",
  },
  {
    value: "are_there_any_fees_for_using_spin_request",
    title: "Are there any fees for using Spin Request?",
    content:
      "Creating an account on Spin Request is completely free. The platform operates on a commission-based model, where DJs pay a small percentage of their earnings from song and hype requests processed through the platform.",
  },
  {
    value: "is_payment_secure_on_spin_request",
    title: "Is Payment Secure on Spin Request?",
    content:
      "Absolutely! At Spin Request, we take your security seriously. We use top-level encryption to protect your data and ensure your transactions are safe. Payments are securely processed through trusted partners like Paystack, so you can confidently enjoy using the platform without worrying about your financial information. We've got you covered!",
  },
  {
    value: "can_i_request_any_song_on_spin_request",
    title: "Can I request any song on Spin Request?",
    content:
      "You can request almost any song on Spin Request! While the platform accommodates a wide range of requests, DJs have the discretion to accept or reject requests based on their playlist, event theme, or other considerations.",
  },
  {
    value: "how_do_i_become_a_dj_on_spin_request",
    title: "How do I become a DJ on Spin Request?",
    content:
      "Sign up – Create your account in minutes.<br/>Set up your profile – Add your details, including payment details.<br/>Start hosting – Create events and accept song or hype requests.<br/>Get paid – Manage gigs and earn seamlessly.",
  },
  {
    value: "what_happens_if_my_song_request_is_not_played",
    title: "What happens if my song request is not played?",
    content:
      "If your song request is not played, don’t worry—your money will be automatically refunded to your Spin Request wallet. You can use this credit for future requests.",
  },
  {
    value: "can_a_dj_be_live_on_multiple_events_at_the_same_time",
    title: "Can a DJ Be Live on Multiple Events at the Same Time?",
    content:
      "A DJ on Spin Request cannot be live on multiple events simultaneously. While DJs can create multiple events to organize and plan their performances in advance, they can only go live on one event at a time. To start a new live event, the current one must be ended first. This ensures that DJs can fully focus on delivering a high-quality and engaging experience for their audience during each live performance.",
  },
  {
    value: "how_do_i_know_if_my_song_request_has_been_accepted",
    title: "How do I know if my song request has been accepted?",
    content:
      "Once your song request is reviewed, you’ll receive an in-app notification letting you know if the DJ has accepted or rejected your request. This ensures you stay updated in real time.",
  },
  {
    value: "is_there_a_limit_to_the_number_of_song_requests_i_can_make",
    title: "Is there a limit to the number of song requests I can make?",
    content:
      "No, there’s no limit! You can make as many song requests as you’d like during an event, as long as the event host is accepting new requests.",
  },
  {
    value: "how_do_i_get_paid_as_a_host_account",
    title: "How Do I Get Paid as a Host Account?",
    content:
      "As a host on Spin Request, getting paid is seamless and stress-free. All the money you earn from song requests and hype requests is securely processed and debited into your account weekly. Every Tuesday, your earnings are automatically calculated, and payments are made directly to your linked account. Make sure your payment details are correctly filled during account setup. Monitor your earnings and transactions through your dashboard for full transparency.",
  },
]);

const jsonLdFaq = computed(() => {
  return faqs.value?.map((faq) => {
    return {
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content,
      },
    };
  });
});

useJsonld(
  () =>
    ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: jsonLdFaq.value,
    } as WithContext<Thing>)
);
</script>

<style scoped>
.faq-item[data-state="open"] .arrow {
  transform: rotate(0);
}
</style>
