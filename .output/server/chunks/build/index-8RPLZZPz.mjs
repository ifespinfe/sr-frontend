import { useSSRContext, defineComponent, unref, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, computed, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$b } from './host-search-input-DlwBe-ss.mjs';
import { _ as _sfc_main$9 } from './NuxtImg-CYc9Gd-X.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BvHIOyM7.mjs';
import { u as useHead$2, at as useJsonld, y as yg, i as gg, C as Cg, j as bg, au as _v, av as xv, aw as Ev, ax as Pv, ay as Sv, _ as _sfc_main$4$1 } from './server.mjs';
import { _ as _sfc_main$a } from './svg-icon-CvfuI_SP.mjs';
import { _ as _sfc_main$8 } from './auto-scroll-carousel-DN-Q2yRb.mjs';
import { Dot } from 'lucide-vue-next';
import './avatar-w1P8IEWG.mjs';
import 'lodash-es/debounce.js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'consola/core';
import 'ipx';
import 'unhead';
import 'vue-router';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'embla-carousel-auto-scroll';
import 'embla-carousel-vue';

const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_HostSearchInput = _sfc_main$b;
  const _component_NuxtImg = _sfc_main$9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-gradient-to-b from-[#111014] to-[#111014]/5" }, _attrs))}><div class="container pt-20 relative"><h1 class="text-center text-4xl md:text-6xl w-full max-w-[842px] mx-auto font-display"> Request <b>Songs or Hypes</b> from DJs &amp; Hosts </h1><p class="text-center my-6 text-xl md:text-2xl w-full max-w-[616px] mx-auto text-foreground"> Request songs and shoutouts directly from DJs, Hypemen seamlessly at clubs, events, parties, lounges and bars! </p><div class="max-w-[600px] mx-auto">`);
  _push(ssrRenderComponent(_component_HostSearchInput, null, null, _parent));
  _push(`</div><div class="w-full max-w-[842px] aspect-video relative left-1/2 -translate-x-1/2 -translate-y-1/3 opacity-40">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/ring-light.png",
    class: "w-full h-full object-contain",
    loading: "lazy"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/hero-section.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$9;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_UiButton = _sfc_main$4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-10" }, _attrs))}><div class="space-y-2 text-center font-display mb-8"><h3 class="text-5xl font-semibold">DJ, Play My Song!</h3><p class="text-2xl text-muted-foreground"> SpinRequest Makes You the Party Hero </p></div><div class="grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-4 gap-y-8"><div class="relative w-full"><div class="aspect-square w-full max-h-[300px] bg-accent rounded-t-3xl">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/masked-dj.png",
    class: "w-full h-full object-cover rounded-[inherit]"
  }, null, _parent));
  _push(`</div><div class="space-y-3 p-4 md:p-5 relative z-10"><h3 class="font-display text-3xl">Turn the Fun to your tune!</h3><p class="text-muted-foreground"> No more begging the DJ for your favorite song. Take charge with SpinRequest! Request your jams live and get the party grooving to your beat. </p></div><div class="absolute bottom-0 h-1/2 left-0 right-0 px-10 pb-10 pt-[120px] bg-gradient-to-t from-background to-background/0"></div></div><div class="relative w-full"><div class="aspect-square w-full max-h-[300px] bg-accent rounded-t-3xl">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/joyful-woman.png",
    class: "w-full h-full object-cover rounded-[inherit]"
  }, null, _parent));
  _push(`</div><div class="space-y-3 p-4 md:p-5 relative z-10"><h3 class="font-display text-3xl">Steal the spotlight</h3><p class="text-muted-foreground"> Request hype shouts from DJs and Hypemen, Get your name out there and be the centre of attention without grabbing the mic!. </p></div><div class="absolute bottom-0 h-1/2 left-0 right-0 px-10 pb-10 pt-[120px] bg-gradient-to-t from-background to-background/0"></div></div><div class="relative w-full"><div class="aspect-square w-full max-h-[300px] bg-accent rounded-t-3xl">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/jolly.png",
    class: "w-full h-full object-cover rounded-[inherit]"
  }, null, _parent));
  _push(`</div><div class="space-y-3 p-4 md:p-5 relative z-10"><h3 class="font-display text-3xl">Make Memories that Matter</h3><p class="text-muted-foreground"> Birthdays, anniversaries, apology missions - make any celebration unforgettable. Request a special song for your friends and loved ones, and show them you care with the perfect soundtrack to the moment. </p></div><div class="absolute bottom-0 h-1/2 left-0 right-0 px-10 pb-10 pt-[120px] bg-gradient-to-t from-background to-background/0"></div></div></div><div class="flex justify-center my-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/audience" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UiButton, { size: "lg" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` REQUEST A SONG `);
            } else {
              return [
                createTextVNode(" REQUEST A SONG ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UiButton, { size: "lg" }, {
            default: withCtx(() => [
              createTextVNode(" REQUEST A SONG ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/feature-section.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const FeatureSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "how-it-works-section",
  __ssrInlineRender: true,
  setup(__props) {
    const audience_steps = ref([
      {
        icon: "bubble-search",
        title: "Find Your DJ or Host",
        subtitle: "Look for the DJ you want to request from at the event, or scan their unique QR code."
      },
      {
        icon: "bubble-question-mark",
        title: "Request a Song or Hype",
        subtitle: "Search for your favorite song title or enter your hype details and your name"
      },
      {
        icon: "bubble-dollar",
        title: "Finalize your order",
        subtitle: "See the price set by the DJ for your request (some DJs offer free requests!). Confirm your order and payment method."
      },
      {
        icon: "bubble-play",
        title: "Hear Your Songs & Hypes",
        subtitle: "Relax and enjoy! We'll notify you once the DJ plays your song or delivers your hype shoutout. If your request is rejected, you'll get an immediate refund."
      }
    ]);
    const host_steps = ref([
      {
        icon: "bubble-search",
        title: "Sign Up & Create",
        subtitle: "Join Spin Request for free! Set up events with clear names and decide your prices for song requests and hype shouts."
      },
      {
        icon: "bubble-question-mark",
        title: "Go Live & Take Requests",
        subtitle: "Launch your event and SpinRequest will display incoming requests on your dashboard."
      },
      {
        icon: "bubble-play",
        title: "Manage with a Click",
        subtitle: "Review song titles, hype details, and usernames. Accept requests you want to play or politely decline with a single click."
      },
      {
        icon: "bubble-dollar",
        title: "Cash out",
        subtitle: "Receive your earnings after the event. Spin Request handles secure payments"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsRoot = yg;
      const _component_TabsList = gg;
      const _component_TabsTrigger = Cg;
      const _component_TabsContent = bg;
      const _component_NuxtImg = _sfc_main$9;
      const _component_SvgIcon = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20" }, _attrs))}><h3 class="text-5xl font-semibold text-center">How it works</h3>`);
      _push(ssrRenderComponent(_component_TabsRoot, {
        class: "space-y-6",
        "default-value": "audience"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, {
              class: "flex gap-x-px items-center justify-center my-10 mx-auto border max-w-fit p-1 rounded-full",
              "aria-label": "How to use spin request"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    class: "border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground",
                    value: "audience",
                    "as-child": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button${_scopeId3}>Audience</button>`);
                      } else {
                        return [
                          createVNode("button", null, "Audience")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    class: "border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground",
                    value: "host",
                    "as-child": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button${_scopeId3}>Host</button>`);
                      } else {
                        return [
                          createVNode("button", null, "Host")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, {
                      class: "border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground",
                      value: "audience",
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("button", null, "Audience")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, {
                      class: "border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground",
                      value: "host",
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("button", null, "Host")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, {
              class: "grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4",
              value: "audience"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(audience_steps), (step, index) => {
                    _push3(`<div class="rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]"${_scopeId2}><div class="rounded-[inherit] bg-background p-4 h-full"${_scopeId2}><div class="aspect-video relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: "/images/cloud-wings.png",
                      class: "absolute w-full h-full object-cover"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5"${_scopeId2}><span class="text-muted-foreground text-sm font-medium"${_scopeId2}>STEP ${ssrInterpolate(index + 1)}</span></div><div class="size-[72px] rounded-full bg-primary grid place-items-center place-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SvgIcon, {
                      name: step.icon
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="space-y-2 mt-6 pb-8"${_scopeId2}><h5 class="font-display text-xl"${_scopeId2}>${ssrInterpolate(step.title)}</h5><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(step.subtitle)}</p></div></div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(audience_steps), (step, index) => {
                      return openBlock(), createBlock("div", {
                        class: "rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]",
                        key: step.title + index
                      }, [
                        createVNode("div", { class: "rounded-[inherit] bg-background p-4 h-full" }, [
                          createVNode("div", { class: "aspect-video relative" }, [
                            createVNode(_component_NuxtImg, {
                              src: "/images/cloud-wings.png",
                              class: "absolute w-full h-full object-cover"
                            }),
                            createVNode("div", { class: "absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5" }, [
                              createVNode("span", { class: "text-muted-foreground text-sm font-medium" }, "STEP " + toDisplayString(index + 1), 1)
                            ]),
                            createVNode("div", { class: "size-[72px] rounded-full bg-primary grid place-items-center place-center" }, [
                              createVNode(_component_SvgIcon, {
                                name: step.icon
                              }, null, 8, ["name"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-2 mt-6 pb-8" }, [
                            createVNode("h5", { class: "font-display text-xl" }, toDisplayString(step.title), 1),
                            createVNode("p", { class: "text-muted-foreground" }, toDisplayString(step.subtitle), 1)
                          ])
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, {
              class: "grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4",
              value: "host"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(host_steps), (step, index) => {
                    _push3(`<div class="rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]"${_scopeId2}><div class="rounded-[inherit] bg-background p-4 h-full"${_scopeId2}><div class="aspect-video relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: "/images/cloud-wings.png",
                      class: "absolute w-full h-full object-cover"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5"${_scopeId2}><span class="text-muted-foreground text-sm font-medium"${_scopeId2}>STEP ${ssrInterpolate(index + 1)}</span></div><div class="size-[72px] rounded-full bg-primary grid place-items-center place-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SvgIcon, {
                      name: step.icon
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="space-y-2 mt-6 pb-8"${_scopeId2}><h5 class="font-display text-xl"${_scopeId2}>${ssrInterpolate(step.title)}</h5><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(step.subtitle)}</p></div></div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(host_steps), (step, index) => {
                      return openBlock(), createBlock("div", {
                        class: "rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]",
                        key: step.title + index
                      }, [
                        createVNode("div", { class: "rounded-[inherit] bg-background p-4 h-full" }, [
                          createVNode("div", { class: "aspect-video relative" }, [
                            createVNode(_component_NuxtImg, {
                              src: "/images/cloud-wings.png",
                              class: "absolute w-full h-full object-cover"
                            }),
                            createVNode("div", { class: "absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5" }, [
                              createVNode("span", { class: "text-muted-foreground text-sm font-medium" }, "STEP " + toDisplayString(index + 1), 1)
                            ]),
                            createVNode("div", { class: "size-[72px] rounded-full bg-primary grid place-items-center place-center" }, [
                              createVNode(_component_SvgIcon, {
                                name: step.icon
                              }, null, 8, ["name"])
                            ])
                          ]),
                          createVNode("div", { class: "space-y-2 mt-6 pb-8" }, [
                            createVNode("h5", { class: "font-display text-xl" }, toDisplayString(step.title), 1),
                            createVNode("p", { class: "text-muted-foreground" }, toDisplayString(step.subtitle), 1)
                          ])
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TabsList, {
                class: "flex gap-x-px items-center justify-center my-10 mx-auto border max-w-fit p-1 rounded-full",
                "aria-label": "How to use spin request"
              }, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, {
                    class: "border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground",
                    value: "audience",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("button", null, "Audience")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, {
                    class: "border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground",
                    value: "host",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("button", null, "Host")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, {
                class: "grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4",
                value: "audience"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(audience_steps), (step, index) => {
                    return openBlock(), createBlock("div", {
                      class: "rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]",
                      key: step.title + index
                    }, [
                      createVNode("div", { class: "rounded-[inherit] bg-background p-4 h-full" }, [
                        createVNode("div", { class: "aspect-video relative" }, [
                          createVNode(_component_NuxtImg, {
                            src: "/images/cloud-wings.png",
                            class: "absolute w-full h-full object-cover"
                          }),
                          createVNode("div", { class: "absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5" }, [
                            createVNode("span", { class: "text-muted-foreground text-sm font-medium" }, "STEP " + toDisplayString(index + 1), 1)
                          ]),
                          createVNode("div", { class: "size-[72px] rounded-full bg-primary grid place-items-center place-center" }, [
                            createVNode(_component_SvgIcon, {
                              name: step.icon
                            }, null, 8, ["name"])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2 mt-6 pb-8" }, [
                          createVNode("h5", { class: "font-display text-xl" }, toDisplayString(step.title), 1),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(step.subtitle), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, {
                class: "grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4",
                value: "host"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(host_steps), (step, index) => {
                    return openBlock(), createBlock("div", {
                      class: "rounded-3xl relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]",
                      key: step.title + index
                    }, [
                      createVNode("div", { class: "rounded-[inherit] bg-background p-4 h-full" }, [
                        createVNode("div", { class: "aspect-video relative" }, [
                          createVNode(_component_NuxtImg, {
                            src: "/images/cloud-wings.png",
                            class: "absolute w-full h-full object-cover"
                          }),
                          createVNode("div", { class: "absolute top-0 left-0 border py-x px-2 rounded-full bg-white/5" }, [
                            createVNode("span", { class: "text-muted-foreground text-sm font-medium" }, "STEP " + toDisplayString(index + 1), 1)
                          ]),
                          createVNode("div", { class: "size-[72px] rounded-full bg-primary grid place-items-center place-center" }, [
                            createVNode(_component_SvgIcon, {
                              name: step.icon
                            }, null, 8, ["name"])
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2 mt-6 pb-8" }, [
                          createVNode("h5", { class: "font-display text-xl" }, toDisplayString(step.title), 1),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(step.subtitle), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/how-it-works-section.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "highlights",
  __ssrInlineRender: true,
  setup(__props) {
    const highlights = ref([
      {
        icon: "money-mouth",
        title: "Turn requests to revenue",
        subtitle: "Monetize your sets by charging for song requests and hype shouts. Set your own prices and maximize your earning potential!"
      },
      {
        icon: "woman-dancing",
        title: "Engaged Crowd, Seamless Flow",
        subtitle: "Keep your audience hyped by letting them take centre stage with requests. SpinRequest streamlines the process, making it easy to manage requests without interrupting your flow. Focus on delivering an exceptional performance while the party stays pumped."
      },
      {
        icon: "pink-heart",
        title: "Grow Your Fan Base",
        subtitle: "Get discovered by a wider audience! SpinRequest allows you to build your following, attracting new fans who appreciate your interaction and crowd control."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20 flex flex-wrap justify-center gap-10 items-start relative" }, _attrs))}><div class="w-full md:w-[416px] text-center"><h3 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold"> Level Up Your Gigs &amp; Get Paid </h3></div><div class="w-full max-w-[616px] grid gap-y-4 relative z-10"><div class="bg-sp-purple/50 blur-[200px] size-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"></div><!--[-->`);
      ssrRenderList(unref(highlights), (item) => {
        _push(`<div class="p-6 md:p-8 rounded-3xl border backdrop-blur-lg bg-background"><div class="grid place-items-center ring ring-muted size-[56px] rounded-full shadow-lg">`);
        _push(ssrRenderComponent(_component_SvgIcon, {
          name: item.icon
        }, null, _parent));
        _push(`</div><div class="mt-4 space-y-2"><h2 class="font-display text-3xl">${ssrInterpolate(item.title)}</h2><p class="text-muted-foreground">${ssrInterpolate(item.subtitle)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="absolute bottom-[200px] left-0 right-0 rotate-[-3deg] border-t-2 border-b-2 py-4 bg-white/5 text-primary">`);
      _push(ssrRenderComponent(_sfc_main$8, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(30, (i) => {
              _push2(`<div class="font-semibold mx-2 flex items-center gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Dot), null, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>HYPEMAN</span>`);
              _push2(ssrRenderComponent(unref(Dot), null, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>MCS</span>`);
              _push2(ssrRenderComponent(unref(Dot), null, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>HOSTS</span>`);
              _push2(ssrRenderComponent(unref(Dot), null, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>OAPS</span>`);
              _push2(ssrRenderComponent(unref(Dot), null, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>DJS</span></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(30, (i) => {
                return createVNode("div", {
                  key: i,
                  class: "font-semibold mx-2 flex items-center gap-x-2"
                }, [
                  createVNode(unref(Dot)),
                  createVNode("span", null, "HYPEMAN"),
                  createVNode(unref(Dot)),
                  createVNode("span", null, "MCS"),
                  createVNode(unref(Dot)),
                  createVNode("span", null, "HOSTS"),
                  createVNode(unref(Dot)),
                  createVNode("span", null, "OAPS"),
                  createVNode(unref(Dot)),
                  createVNode("span", null, "DJS")
                ]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/highlights.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SvgIcon = _sfc_main$a;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_UiButton = _sfc_main$4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-10" }, _attrs))}><div class="rounded-[30px] lg:rounded-[40px] relative bg-gradient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[1px]"><div class="bg-background rounded-[inherit] h-full p-[25px] md:p-[35px] lg:p-[60px] flex flex-wrap justify-between items-center gap-8"><div class="space-y-8"><h3 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold max-w-full w-[650px]"> Request Songs &amp; Get Hyped with SpinRequest </h3><div class="flex items-start gap-4 flex-wrap"><div class="flex gap-x-3 items-start"><div class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted">`);
  _push(ssrRenderComponent(_component_SvgIcon, { name: "star" }, null, _parent));
  _push(`</div><p class="text-muted-foreground text-lg md:text-xl max-w-[302px]"> Be the centre of attention and show off your music taste </p></div><div class="flex gap-x-3 items-start"><div class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted">`);
  _push(ssrRenderComponent(_component_SvgIcon, { name: "star" }, null, _parent));
  _push(`</div><p class="text-muted-foreground text-lg md:text-xl max-w-[302px]"> Request songs and shout outs from DJsand Hypemen at clubs, bars, and parties! </p></div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "w-full sm:w-auto block",
    to: "/signup/audience"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UiButton, {
          size: "lg",
          class: "w-full sm:w-auto"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Create an audience account`);
            } else {
              return [
                createTextVNode("Create an audience account")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UiButton, {
            size: "lg",
            class: "w-full sm:w-auto"
          }, {
            default: withCtx(() => [
              createTextVNode("Create an audience account")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/audience-perks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const AudiencePerksSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SvgIcon = _sfc_main$a;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_UiButton = _sfc_main$4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-10" }, _attrs))}><div class="rounded-[30px] lg:rounded-[40px] relative overflow-hidden bg-radient-to-br from-[#A799FF]/70 via-[#FFEE99]/70 to-[#FF9EEB]/70 p-[0px]"><div class="bg-sp-purple/50 blur-[150px] w-[60%] h-full border absolute -bottom-[70%] left-1/2 -translate-x-1/2 z-[2]"></div><div class="bg-white/5 rounded-[inherit] h-full p-[25px] md:p-[35px] lg:p-[60px] flex flex-wrap justify-between items-center gap-8 relative z-10"><div class="space-y-8 w-full"><h3 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-center"> Become a SpinRequest Host &amp; Get Paid </h3><div class="flex items-start justify-center gap-4 flex-wrap"><div class="flex gap-x-3 items-start"><div class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted">`);
  _push(ssrRenderComponent(_component_SvgIcon, { name: "star" }, null, _parent));
  _push(`</div><p class="text-muted-foreground text-lg md:text-xl max-w-[302px]"> Connect with audience ready to request their favourite songs and hype </p></div><div class="flex gap-x-3 items-start"><div class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted">`);
  _push(ssrRenderComponent(_component_SvgIcon, { name: "star" }, null, _parent));
  _push(`</div><p class="text-muted-foreground text-lg md:text-xl max-w-[302px]"> Set your prices, manage requests, and get paid </p></div><div class="flex gap-x-3 items-start"><div class="size-[48px] shrink-0 rounded-full grid place-items-center ring-2 ring-muted">`);
  _push(ssrRenderComponent(_component_SvgIcon, { name: "star" }, null, _parent));
  _push(`</div><p class="text-muted-foreground text-lg md:text-xl max-w-[302px]"> Build your fanbase and create unforgettable experiences </p></div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "w-full sm:w-auto mx-auto block",
    to: "/signup/host"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UiButton, {
          size: "lg",
          class: "w-full sm:w-auto mx-auto"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Create an Host account`);
            } else {
              return [
                createTextVNode("Create an Host account")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UiButton, {
            size: "lg",
            class: "w-full sm:w-auto mx-auto"
          }, {
            default: withCtx(() => [
              createTextVNode("Create an Host account")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/host-perks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const HostPerksSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = ref([
      {
        value: "what_is_spin_request",
        title: "What is Spin Request?",
        content: "Spin Request is an innovative platform that connects Event Hosts, such as DJs, MCs, and show hosts, with their audiences. It enables real-time song and hype requests during live performances. Using Spin Request, audience members can submit song requests directly to Event Hosts through their mobile devices, enhancing engagement and creating unforgettable experiences."
      },
      {
        value: "how_does_spin_request_work",
        title: "How does Spin Request work?",
        content: "DJs create an event on the platform, Audience members can locate the DJ by entering the DJ\u2019s name or scanning their QR code, Once connected, audience members submit song or hype requests, DJs review and play these requests, tailoring their performance to audience preferences."
      },
      {
        value: "who_can_use_spin_request",
        title: "Who can use Spin Request?",
        content: "Event Hosts: DJs, MCs, hypemen, TV and radio hosts, and other performers who want to manage song and hype requests during live events. Event Attendees: Anyone attending a live event who wants to make a song or shoutout requests directly to the host."
      },
      {
        value: "are_there_any_fees_for_using_spin_request",
        title: "Are there any fees for using Spin Request?",
        content: "Creating an account on Spin Request is completely free. The platform operates on a commission-based model, where DJs pay a small percentage of their earnings from song and hype requests processed through the platform."
      },
      {
        value: "is_payment_secure_on_spin_request",
        title: "Is Payment Secure on Spin Request?",
        content: "Absolutely! At Spin Request, we take your security seriously. We use top-level encryption to protect your data and ensure your transactions are safe. Payments are securely processed through trusted partners like Paystack, so you can confidently enjoy using the platform without worrying about your financial information. We've got you covered!"
      },
      {
        value: "can_i_request_any_song_on_spin_request",
        title: "Can I request any song on Spin Request?",
        content: "You can request almost any song on Spin Request! While the platform accommodates a wide range of requests, DJs have the discretion to accept or reject requests based on their playlist, event theme, or other considerations."
      },
      {
        value: "how_do_i_become_a_dj_on_spin_request",
        title: "How do I become a DJ on Spin Request?",
        content: "Sign up on the platform and create an account, Complete your profile, including payment details, Start creating events and accepting song or hype requests, and Begin earning and managing your gigs seamlessly."
      },
      {
        value: "what_happens_if_my_song_request_is_not_played",
        title: "What happens if my song request is not played?",
        content: "If your song request is not played, don\u2019t worry\u2014your money will be automatically refunded to your Spin Request wallet. You can use this credit for future requests."
      },
      {
        value: "can_a_dj_be_live_on_multiple_events_at_the_same_time",
        title: "Can a DJ Be Live on Multiple Events at the Same Time?",
        content: "A DJ on Spin Request cannot be live on multiple events simultaneously. While DJs can create multiple events to organize and plan their performances in advance, they can only go live on one event at a time. To start a new live event, the current one must be ended first. This ensures that DJs can fully focus on delivering a high-quality and engaging experience for their audience during each live performance."
      },
      {
        value: "how_do_i_know_if_my_song_request_has_been_accepted",
        title: "How do I know if my song request has been accepted?",
        content: "Once your song request is reviewed, you\u2019ll receive an in-app notification letting you know if the DJ has accepted or rejected your request. This ensures you stay updated in real time."
      },
      {
        value: "is_there_a_limit_to_the_number_of_song_requests_i_can_make",
        title: "Is there a limit to the number of song requests I can make?",
        content: "No, there\u2019s no limit! You can make as many song requests as you\u2019d like during an event, as long as the event host is accepting new requests."
      },
      {
        value: "how_do_i_get_paid_as_a_host_account",
        title: "How Do I Get Paid as a Host Account?",
        content: "As a host on Spin Request, getting paid is seamless and stress-free. All the money you earn from song requests and hype requests is securely processed and debited into your account weekly. Every Tuesday, your earnings are automatically calculated, and payments are made directly to your linked account. Make sure your payment details are correctly filled during account setup. Monitor your earnings and transactions through your dashboard for full transparency."
      }
    ]);
    const jsonLdFaq = computed(() => {
      var _a;
      return (_a = faqs.value) == null ? undefined : _a.map((faq) => {
        return {
          "@type": "Question",
          name: faq.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.content
          }
        };
      });
    });
    useJsonld(
      () => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: jsonLdFaq.value
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccordionRoot = _v;
      const _component_AccordionItem = xv;
      const _component_AccordionHeader = Ev;
      const _component_AccordionTrigger = Pv;
      const _component_SvgIcon = _sfc_main$a;
      const _component_AccordionContent = Sv;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#1C1B1F] py-[100px]" }, _attrs))} data-v-5a6d7a98><div class="container max-w-[1248px]" data-v-5a6d7a98><h4 class="font-display font-semibold text-4xl md:text-5xl text-center mb-[40px]" data-v-5a6d7a98> Frequently Asked Questions </h4>`);
      _push(ssrRenderComponent(_component_AccordionRoot, {
        "default-value": "item-1",
        type: "single",
        collapsible: "",
        class: "space-y-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(faqs), (item) => {
              _push2(ssrRenderComponent(_component_AccordionItem, {
                class: "bg-[#252528] rounded-xl py-4 faq-item",
                value: item.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_AccordionHeader, { class: "px-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AccordionTrigger, { class: "flex w-full items-center justify-between" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="font-medium text-left" data-v-5a6d7a98${_scopeId4}>${ssrInterpolate(item.title)}</div>`);
                                _push5(ssrRenderComponent(_component_SvgIcon, {
                                  name: "arrow_forward",
                                  class: "arrow relative -rotate-180 will-change-transform transition-transform"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "font-medium text-left" }, toDisplayString(item.title), 1),
                                  createVNode(_component_SvgIcon, {
                                    name: "arrow_forward",
                                    class: "arrow relative -rotate-180 will-change-transform transition-transform"
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AccordionTrigger, { class: "flex w-full items-center justify-between" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "font-medium text-left" }, toDisplayString(item.title), 1),
                                createVNode(_component_SvgIcon, {
                                  name: "arrow_forward",
                                  class: "arrow relative -rotate-180 will-change-transform transition-transform"
                                })
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_AccordionContent, { class: "px-4 text-muted-foreground overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="pt-4" data-v-5a6d7a98${_scopeId3}>${ssrInterpolate(item.content)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "pt-4" }, toDisplayString(item.content), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_AccordionHeader, { class: "px-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_AccordionTrigger, { class: "flex w-full items-center justify-between" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "font-medium text-left" }, toDisplayString(item.title), 1),
                              createVNode(_component_SvgIcon, {
                                name: "arrow_forward",
                                class: "arrow relative -rotate-180 will-change-transform transition-transform"
                              })
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_AccordionContent, { class: "px-4 text-muted-foreground overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "pt-4" }, toDisplayString(item.content), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (item) => {
                return openBlock(), createBlock(_component_AccordionItem, {
                  key: item.value,
                  class: "bg-[#252528] rounded-xl py-4 faq-item",
                  value: item.value
                }, {
                  default: withCtx(() => [
                    createVNode(_component_AccordionHeader, { class: "px-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_AccordionTrigger, { class: "flex w-full items-center justify-between" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "font-medium text-left" }, toDisplayString(item.title), 1),
                            createVNode(_component_SvgIcon, {
                              name: "arrow_forward",
                              class: "arrow relative -rotate-180 will-change-transform transition-transform"
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_AccordionContent, { class: "px-4 text-muted-foreground overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pt-4" }, toDisplayString(item.content), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-lg text-muted-foreground mt-2" data-v-5a6d7a98> Can\u2019t find the answer you&#39;re looking for? <a href="mailto:spinrequestsupp@gmail.com" class="text-primary" data-v-5a6d7a98>Chat with us</a></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/faq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5a6d7a98"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead$2({
      titleTemplate: "Request Songs or Hypes from DJs & Hosts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(HeroSection), null, null, _parent));
      _push(ssrRenderComponent(unref(FeatureSection), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(AudiencePerksSection), null, null, _parent));
      _push(ssrRenderComponent(unref(HostPerksSection), null, null, _parent));
      _push(ssrRenderComponent(unref(FaqSection), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8RPLZZPz.mjs.map
