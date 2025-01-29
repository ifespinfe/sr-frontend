import { _ as _sfc_main$8 } from './live-banner-DN459kJ6.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { _ as _sfc_main$9 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$a } from './loading-area-BCC1xwyu.mjs';
import { _ as _sfc_main$b } from './svg-icon-CvfuI_SP.mjs';
import { c as useRoute, b as useAuth, a as useNuxtApp, e as useSeoMeta, _ as _sfc_main$4, k as cn, v as getInitials, h as formatMoney } from './server.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, isRef, useModel } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './avatar-BNYzPSiu.mjs';
import { _ as _sfc_main$c } from './NuxtImg-EJZQGAs-.mjs';
import { _ as _sfc_main$7 } from './summary-pgNK0JTY.mjs';
import { Dot } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$d } from './modal-BEorc3YA.mjs';
import { _ as _sfc_main$6 } from './confirm-dialog-LIDX9onR.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { u as useFollowActions } from './useFollowActions-DlzAamUr.mjs';
import './client-only-Db1Q_2tj.mjs';
import './auto-scroll-carousel-DN-Q2yRb.mjs';
import 'embla-carousel-auto-scroll';
import 'embla-carousel-vue';
import './index-CNLs9n-l.mjs';
import './index-twTXuIJ-.mjs';
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
import 'clsx';
import 'tailwind-merge';
import './popover-DcCqGT5R.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "request-item",
  __ssrInlineRender: true,
  props: {
    type: { default: "song" },
    request: {},
    detailed: { type: Boolean, default: true }
  },
  setup(__props) {
    const { authEmail } = useAuth();
    const avatar_variant = cva(
      "size-16 scale-75  shrink-0 rounded-full grid place-items-center",
      {
        variants: {
          type: {
            song: "bg-[#FFEE99]/10",
            hype: "bg-[#FF99F1]/10"
          }
        },
        defaultVariants: {
          type: "song"
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      var _a;
      const _component_SvgIcon = _sfc_main$b;
      const _component_SharedSummary = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-1 items-center border border-border/30 rounded-2xl px-0" }, _attrs))}><div class="${ssrRenderClass(unref(avatar_variant)({ type: _ctx.type }))}">`);
      _push(ssrRenderComponent(_component_SvgIcon, {
        name: _ctx.type == "song" ? "music" : "mic",
        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(_ctx.request.status === "now-playing" ? "animate-bounce" : "")
      }, null, _parent));
      _push(`</div><div class="space-y-1 w-full">`);
      if (_ctx.request.type === "hype" && _ctx.detailed) {
        _push(ssrRenderComponent(_component_SharedSummary, {
          content: _ctx.request.description,
          class: "font-medium"
        }, null, _parent));
      } else if (_ctx.detailed) {
        _push(`<div class="flex items-end gap-2 text-base">`);
        _push(ssrRenderComponent(_component_SharedSummary, {
          content: (_a2 = (_a = _ctx.request) == null ? undefined : _a.song_title) != null ? _a2 : "",
          class: "font-medium text-foreground"
        }, null, _parent));
        _push(ssrRenderComponent(_component_SharedSummary, {
          content: `by ${_ctx.request.artist}`,
          class: "font-medium text-muted-foreground"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center text-muted-foreground"><div class="flex items-center gap-1 text-primary-foreground">`);
      _push(ssrRenderComponent(_component_SvgIcon, { name: "money" }, null, _parent));
      _push(`<div class="text-primary-foreground font-medium"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price))}</div></div>`);
      _push(ssrRenderComponent(unref(Dot), null, null, _parent));
      _push(`<div class="text-muted-foreground text-sm">${ssrInterpolate(_ctx.request.type == "hype" ? "HYPE" : "SONG")}</div>`);
      _push(ssrRenderComponent(unref(Dot), null, null, _parent));
      if (unref(authEmail) === _ctx.request.audience.email) {
        _push(`<div class="text-primary text-sm"> Your request </div>`);
      } else {
        _push(`<div class="text-muted-foreground text-sm"> From ${ssrInterpolate((_b = _ctx.request.nickname) != null ? _b : _ctx.request.audience.name)}</div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request-item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "request-queue.card",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    const props = __props;
    const { authEmail } = useAuth();
    const eventRequests = computed(() => {
      var _a, _b;
      const requests = ((_b = (_a = props == null ? undefined : props.event) == null ? undefined : _a.requests) == null ? undefined : _b.length) ? [...props.event.requests] : [];
      return requests.sort((req) => {
        var _a2;
        if (((_a2 = req == null ? undefined : req.audience) == null ? undefined : _a2.email) === (authEmail == null ? undefined : authEmail.value)) return -1;
        return 0;
      }).slice(0, 3);
    });
    const hasPendingRequest = computed(
      () => eventRequests.value.some((req) => req.audience.email === authEmail.value)
    );
    const activeRequest = computed(
      () => {
        var _a, _b;
        return (_b = (_a = props == null ? undefined : props.event) == null ? undefined : _a.requests) == null ? undefined : _b.find((item) => (item == null ? undefined : item.status) === "now-playing");
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_SvgIcon = _sfc_main$b;
      const _component_NuxtImg = _sfc_main$c;
      const _component_RequestItem = _sfc_main$3;
      if (_ctx.event) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full rounded-xl relative" }, _attrs))}><div class="py-4 px-3 sm:px-6 bg-[#1C1B1F] rounded-t-[inherit]"><div class="font-display font-semibold text-2xl mb-2">Request Queue</div><div class="flex items-center gap-4 text-muted-foreground text-sm -ml-1"><div class="flex items-center gap-px">`);
        _push(ssrRenderComponent(_component_SvgIcon, {
          name: "celebration",
          class: "relative scale-75"
        }, null, _parent));
        _push(`<div>${ssrInterpolate((_a = _ctx.event) == null ? undefined : _a.title)}</div></div><div class="flex items-center gap-px">`);
        _push(ssrRenderComponent(_component_SvgIcon, {
          name: "location",
          class: "relative scale-75"
        }, null, _parent));
        _push(`<div>${ssrInterpolate((_b = _ctx.event) == null ? undefined : _b.address)}</div></div></div></div><div class="relative px-3 sm:px-6 py-8 bg-white/5 rounded-b-[inherit]"><div class="bg-sp-purple/50 blur-[200px] size-56 absolute left-1/2 -translate-x-1/2"></div><div class="space-y-1 grid justify-center text-center mb-8 relative z-[3]">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/disco.png",
          class: ("cn" in _ctx ? _ctx.cn : unref(cn))("size-[120px] mx-auto", unref(activeRequest) ? "animate-spin" : null)
        }, null, _parent));
        if (unref(activeRequest) && unref(hasPendingRequest)) {
          _push(ssrRenderComponent(_sfc_main$7, {
            class: "font-semibold text-base",
            content: ((_c = unref(activeRequest)) == null ? undefined : _c.type) === "hype" ? (_d = unref(activeRequest)) == null ? undefined : _d.description : (_a2 = (_e = unref(activeRequest)) == null ? undefined : _e.song_title) != null ? _a2 : ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeRequest)) {
          _push(`<div class="text-sm text-muted-foreground"> Now ${ssrInterpolate(((_f = unref(activeRequest)) == null ? undefined : _f.type) === "song" ? "playing" : "performing hype")}... </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(activeRequest) && unref(authEmail) === ((_h = (_g = unref(activeRequest)) == null ? undefined : _g.audience) == null ? undefined : _h.email)) {
          _push(`<div class="p-1 absolute -translate-y-4 left-0 right-0 text-center text-background font-medium text-sm bg-gradient-to-r from-[#844AFF] from-[1.28%] via-[#E991DD] via-[58.26%] to-[#FCF0AF] to-[100%]">${ssrInterpolate(((_i = unref(activeRequest)) == null ? undefined : _i.type) === "hype" ? "Performing" : "Playing")} your ${ssrInterpolate((_j = unref(activeRequest)) == null ? undefined : _j.type)} request </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass(
          ("cn" in _ctx ? _ctx.cn : unref(cn))(
            "text-muted-foreground mb-4",
            unref(activeRequest) && unref(authEmail) === ((_l = (_k = unref(activeRequest)) == null ? undefined : _k.audience) == null ? undefined : _l.email) ? "mt-16" : null
          )
        )}"> PREVIOUS REQUESTS </div>`);
        if ((_m = unref(eventRequests)) == null ? undefined : _m.length) {
          _push(`<div class="space-y-6"><!--[-->`);
          ssrRenderList(unref(eventRequests), (item) => {
            _push(ssrRenderComponent(_component_RequestItem, {
              key: item.id,
              request: item,
              type: item.type,
              detailed: unref(hasPendingRequest)
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="p-3 text-center grid place-items-center"> No requests yet, hang tight </div>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request-queue.card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "rejected-request",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$d;
      const _component_SvgIcon = _sfc_main$b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$4;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        size: "md",
        controlled: "",
        "hide-trigger": "",
        "model-value": __props.modelValue,
        "onUpdate:modelValue": ($event) => model.value = $event
      }, _attrs), {
        default: withCtx(({ toggle }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-[25px]"${_scopeId}><div class="grid place-items-center gap-4"${_scopeId}><div class="mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "sad" }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-2xl font-display font-semibold text-center"${_scopeId}> Sorry, your request was rejected </div><div class="text-muted-foreground text-center"${_scopeId}> We are sorry your request was rejected by the DJ. It may not have fit their flow, event, or capacity. We have sent a refund to your Spin Request wallet here </div></div><div class="grid grid-cols-2 items-center gap-2 [&amp;_&gt;_button]:w-full mt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "order-history",
              class: "block w-full"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "secondary",
                    class: "w-full"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Go to My wallet `);
                      } else {
                        return [
                          createTextVNode(" Go to My wallet ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "secondary",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Go to My wallet ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiButton, {
              onClick: ($event) => model.value = false
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` OKAY `);
                } else {
                  return [
                    createTextVNode(" OKAY ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-[25px]" }, [
                createVNode("div", { class: "grid place-items-center gap-4" }, [
                  createVNode("div", { class: "mx-auto" }, [
                    createVNode(_component_SvgIcon, { name: "sad" })
                  ]),
                  createVNode("div", { class: "text-2xl font-display font-semibold text-center" }, " Sorry, your request was rejected "),
                  createVNode("div", { class: "text-muted-foreground text-center" }, " We are sorry your request was rejected by the DJ. It may not have fit their flow, event, or capacity. We have sent a refund to your Spin Request wallet here ")
                ]),
                createVNode("div", { class: "grid grid-cols-2 items-center gap-2 [&_>_button]:w-full mt-8" }, [
                  createVNode(_component_NuxtLink, {
                    to: "order-history",
                    class: "block w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        variant: "secondary",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Go to My wallet ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiButton, {
                    onClick: ($event) => model.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" OKAY ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/rejected-request.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { data, error, status, refresh } = useCustomFetch(`/user/host/${route.params.host}`);
    const host = computed(() => {
      var _a, _b;
      return (_b = (_a = data == null ? undefined : data.value) == null ? undefined : _a.data) == null ? undefined : _b.user;
    });
    const { authEmail } = useAuth();
    const liveEventRequests = computed(() => {
      var _a2;
      var _a, _b, _c;
      return (_a2 = (_c = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.live_event) == null ? undefined : _c.requests) != null ? _a2 : [];
    });
    const followingHost = computed(() => {
      var _a;
      if (!((_a = data.value) == null ? undefined : _a.data)) return false;
      return data.value.data.total_followers.some(
        (user) => user.user.email === authEmail.value
      );
    });
    const {
      followUser,
      following,
      unFollowUser,
      unfollowing,
      subOrUnsubscribeUser,
      subscribing
    } = useFollowActions();
    const followHost = () => {
      var _a, _b;
      const id = (_b = (_a = data == null ? undefined : data.value) == null ? undefined : _a.data) == null ? undefined : _b.user.id;
      if (!id) return;
      followingHost.value ? unFollowUser(id, refresh) : followUser(id, refresh);
    };
    const subscibeHandler = () => {
      var _a, _b;
      const id = (_b = (_a = data == null ? undefined : data.value) == null ? undefined : _a.data) == null ? undefined : _b.user.id;
      if (!id) return;
      subOrUnsubscribeUser(id, "subscribe", refresh);
    };
    const request_rejected = ref(false);
    const hasPendingRequest = computed(() => {
      var _a;
      return (_a = liveEventRequests.value) == null ? undefined : _a.some(
        (item) => item.audience.email === authEmail.value
      );
    });
    const {
      $config: {
        public: { APP_BASE_URL }
      }
    } = useNuxtApp();
    const ended = ref(false);
    useSeoMeta({
      title: () => {
        var _a2;
        var _a;
        return `${(_a2 = (_a = host == null ? undefined : host.value) == null ? undefined : _a.stage_name) != null ? _a2 : "Live event"}`;
      },
      ogTitle: () => {
        var _a2, _b2;
        var _a, _b, _c, _d;
        return `${(_a2 = (_c = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.live_event) == null ? undefined : _c.title) != null ? _a2 : ""} | ${(_b2 = (_d = host.value) == null ? undefined : _d.stage_name) != null ? _b2 : ""}`;
      },
      ogDescription: () => "Make your requests and take spotlight of this event",
      ogImage: () => {
        var _a2;
        var _a;
        return `${(_a2 = (_a = host.value) == null ? undefined : _a.profile_picture) != null ? _a2 : "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"}`;
      },
      ogImageAlt: () => "Live Event",
      ogImageSecureUrl: () => {
        var _a2;
        var _a;
        return `${(_a2 = (_a = host.value) == null ? undefined : _a.profile_picture) != null ? _a2 : "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"}`;
      },
      twitterImage: () => {
        var _a2;
        var _a;
        return `${(_a2 = (_a = host.value) == null ? undefined : _a.profile_picture) != null ? _a2 : "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg"}`;
      },
      twitterTitle: () => {
        var _a2, _b2;
        var _a, _b, _c, _d;
        return `${(_a2 = (_c = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.live_event) == null ? undefined : _c.title) != null ? _a2 : ""} | ${(_b2 = (_d = host.value) == null ? undefined : _d.stage_name) != null ? _b2 : ""}`;
      },
      ogType: "article",
      ogUrl: () => {
        var _a2;
        var _a;
        return `${APP_BASE_URL}/${(_a2 = (_a = host.value) == null ? undefined : _a.slug) != null ? _a2 : ""}`;
      },
      ogSiteName: "SpinRequest"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_LiveBanner = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SharedBackButton = _sfc_main$9;
      const _component_SharedLoadingArea = _sfc_main$a;
      const _component_SvgIcon = _sfc_main$b;
      const _component_UiButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-6 pb-20" }, _attrs))}>`);
      if (((_a = unref(data)) == null ? undefined : _a.data.live_event) && !unref(ended)) {
        _push(ssrRenderComponent(_component_LiveBanner, {
          class: "-translate-y-6",
          user: "audience",
          "start-date": (_d = (_c = (_b = unref(data)) == null ? undefined : _b.data) == null ? undefined : _c.live_event) == null ? undefined : _d.start_date,
          animate: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/${unref(route).params.host}/${(_c2 = (_b2 = (_a2 = unref(data)) == null ? undefined : _a2.data) == null ? undefined : _b2.live_event) == null ? undefined : _c2.id}/make-a-request`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Make ${ssrInterpolate(unref(hasPendingRequest) ? "another" : "a")} request`);
                        } else {
                          return [
                            createTextVNode("Make " + toDisplayString(unref(hasPendingRequest) ? "another" : "a") + " request", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$4, null, {
                        default: withCtx(() => [
                          createTextVNode("Make " + toDisplayString(unref(hasPendingRequest) ? "another" : "a") + " request", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: `/${unref(route).params.host}/${(_f2 = (_e2 = (_d2 = unref(data)) == null ? undefined : _d2.data) == null ? undefined : _e2.live_event) == null ? undefined : _f2.id}/make-a-request`
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, null, {
                      default: withCtx(() => [
                        createTextVNode("Make " + toDisplayString(unref(hasPendingRequest) ? "another" : "a") + " request", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["to"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SharedBackButton, {
        to: "/audience",
        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(((_f = (_e = unref(data)) == null ? undefined : _e.data) == null ? undefined : _f.live_event) ? "mt-10" : "")
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$;
          if (_push2) {
            if (unref(host)) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-[1fr_400px] justify-between gap-6 mt-10"${_scopeId}><div${_scopeId}><div class="grid lg:grid-cols-[auto_1fr] items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl",
                initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a2 = unref(host)) == null ? undefined : _a2.stage_name),
                image: unref(host).profile_picture,
                onClick: ($event) => ended.value = true
              }, null, _parent2, _scopeId));
              _push2(`<div class="py-2"${_scopeId}><div class="font-display text-3xl md:text-4xl font-semibold"${_scopeId}>${ssrInterpolate((_b2 = unref(host)) == null ? undefined : _b2.stage_name)}</div><div class="flex flex-wrap gap-4 items-center my-4 mb-6"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "account_circle" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_e2 = (_d2 = (_c2 = unref(data)) == null ? undefined : _c2.data) == null ? undefined : _d2.total_followers) == null ? undefined : _e2.length)}</span><span class="text-muted-foreground"${_scopeId}>FOLLOWERS</span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "celebration" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_g = (_f2 = unref(data)) == null ? undefined : _f2.data) == null ? undefined : _g.total_events)}</span><span class="text-muted-foreground"${_scopeId}>EVENTS</span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "genres" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_i = (_h = unref(data)) == null ? undefined : _h.data) == null ? undefined : _i.total_requests)}</span><span class="text-muted-foreground"${_scopeId}>REQUESTS</span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "genres" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_k = (_j = unref(data)) == null ? undefined : _j.data) == null ? undefined : _k.total_fulfilled_requests)}</span><span class="text-muted-foreground"${_scopeId}>FUFILLED</span></div></div></div><div class="flex flex-col md:flex-row items-center gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                variant: unref(followingHost) ? "destructive" : "secondary",
                class: "w-full md:w-auto",
                size: "lg",
                onClick: followHost,
                loading: unref(following) || unref(unfollowing),
                hide_loading_text: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(followingHost) ? "Unfollow" : "follow")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(followingHost) ? "Unfollow" : "follow"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (((_l = unref(data)) == null ? undefined : _l.data.live_event) && !unref(ended)) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/${unref(route).params.host}/${(_o = (_n = (_m = unref(data)) == null ? undefined : _m.data) == null ? undefined : _n.live_event) == null ? undefined : _o.id}/make-a-request`,
                  class: "w-full md:w-auto"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$4, {
                        size: "lg",
                        class: "w-full"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Make ${ssrInterpolate(unref(hasPendingRequest) ? "another" : "a")} request `);
                          } else {
                            return [
                              createTextVNode(" Make " + toDisplayString(unref(hasPendingRequest) ? "another" : "a") + " request ", 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$4, {
                          size: "lg",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Make " + toDisplayString(unref(hasPendingRequest) ? "another" : "a") + " request ", 1)
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  class: "w-full md:w-auto",
                  size: "lg",
                  onClick: subscibeHandler,
                  loading: unref(subscribing)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Notify me when Host Goes Live. `);
                    } else {
                      return [
                        createTextVNode(" Notify me when Host Goes Live. ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div></div></div><div class="mt-10 space-y-2 text-muted-foreground hidden md:block"${_scopeId}><div${_scopeId}>ABOUT ME</div><div class="max-w-[550px]"${_scopeId}>${ssrInterpolate(unref(host).bio)}</div><div class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "badge" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><div class="text-lg font-semibold text-foreground"${_scopeId}>${ssrInterpolate((_q = (_p = unref(data)) == null ? undefined : _p.data) == null ? undefined : _q.total_fulfilled_requests)} of ${ssrInterpolate((_s = (_r = unref(data)) == null ? undefined : _r.data) == null ? undefined : _s.total_requests)}</div><div class="text-muted-foreground"${_scopeId}>Request fufilled</div></div></div></div></div><div${_scopeId}>`);
              if ((_u = (_t = unref(data)) == null ? undefined : _t.data) == null ? undefined : _u.live_event) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  event: (_w = (_v = unref(data)) == null ? undefined : _v.data) == null ? undefined : _w.live_event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(ended)) {
                _push2(`<div class="flex justify-center gap-x-2 mt-4 items-center animate-in slide-in-from-top-4"${_scopeId}><div${_scopeId}>Unfufilled requests?</div>`);
                _push2(ssrRenderComponent(_sfc_main$6, { message: "Was your song or hype requests completed?" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiButton, {
                        variant: "ghost",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="text-red-500 underline hover:no-underline"${_scopeId3}> REPORT </div>`);
                          } else {
                            return [
                              createVNode("div", { class: "text-red-500 underline hover:no-underline" }, " REPORT ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiButton, {
                          variant: "ghost",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-red-500 underline hover:no-underline" }, " REPORT ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-4 space-y-4 text-muted-foreground md:hidden"${_scopeId}><div${_scopeId}>ABOUT ME</div><div class="max-w-[550px]"${_scopeId}>${ssrInterpolate(unref(host).bio)}</div><div class="inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "badge" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><div class="text-lg font-semibold text-foreground"${_scopeId}>${ssrInterpolate((_y = (_x = unref(data)) == null ? undefined : _x.data) == null ? undefined : _y.total_fulfilled_requests)} of ${ssrInterpolate((_A = (_z = unref(data)) == null ? undefined : _z.data) == null ? undefined : _A.total_requests)}</div><div class="text-muted-foreground"${_scopeId}>Request fufilled</div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(host) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid grid-cols-1 md:grid-cols-[1fr_400px] justify-between gap-6 mt-10"
              }, [
                createVNode("div", null, [
                  createVNode("div", { class: "grid lg:grid-cols-[auto_1fr] items-center gap-4" }, [
                    createVNode(_sfc_main$5, {
                      class: "!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl",
                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_B = unref(host)) == null ? undefined : _B.stage_name),
                      image: unref(host).profile_picture,
                      onClick: ($event) => ended.value = true
                    }, null, 8, ["initials", "image", "onClick"]),
                    createVNode("div", { class: "py-2" }, [
                      createVNode("div", { class: "font-display text-3xl md:text-4xl font-semibold" }, toDisplayString((_C = unref(host)) == null ? undefined : _C.stage_name), 1),
                      createVNode("div", { class: "flex flex-wrap gap-4 items-center my-4 mb-6" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_SvgIcon, { name: "account_circle" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_F = (_E = (_D = unref(data)) == null ? undefined : _D.data) == null ? undefined : _E.total_followers) == null ? undefined : _F.length), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "FOLLOWERS")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_SvgIcon, { name: "celebration" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_H = (_G = unref(data)) == null ? undefined : _G.data) == null ? undefined : _H.total_events), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "EVENTS")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_SvgIcon, { name: "genres" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_J = (_I = unref(data)) == null ? undefined : _I.data) == null ? undefined : _J.total_requests), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "REQUESTS")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_SvgIcon, { name: "genres" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_L = (_K = unref(data)) == null ? undefined : _K.data) == null ? undefined : _L.total_fulfilled_requests), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "FUFILLED")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col md:flex-row items-center gap-4" }, [
                        createVNode(_sfc_main$4, {
                          variant: unref(followingHost) ? "destructive" : "secondary",
                          class: "w-full md:w-auto",
                          size: "lg",
                          onClick: followHost,
                          loading: unref(following) || unref(unfollowing),
                          hide_loading_text: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(followingHost) ? "Unfollow" : "follow"), 1)
                          ]),
                          _: 1
                        }, 8, ["variant", "loading"]),
                        ((_M = unref(data)) == null ? undefined : _M.data.live_event) && !unref(ended) ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: `/${unref(route).params.host}/${(_P = (_O = (_N = unref(data)) == null ? undefined : _N.data) == null ? undefined : _O.live_event) == null ? undefined : _P.id}/make-a-request`,
                          class: "w-full md:w-auto"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4, {
                              size: "lg",
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Make " + toDisplayString(unref(hasPendingRequest) ? "another" : "a") + " request ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])) : (openBlock(), createBlock(_sfc_main$4, {
                          key: 1,
                          class: "w-full md:w-auto",
                          size: "lg",
                          onClick: subscibeHandler,
                          loading: unref(subscribing)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Notify me when Host Goes Live. ")
                          ]),
                          _: 1
                        }, 8, ["loading"]))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-10 space-y-2 text-muted-foreground hidden md:block" }, [
                    createVNode("div", null, "ABOUT ME"),
                    createVNode("div", { class: "max-w-[550px]" }, toDisplayString(unref(host).bio), 1),
                    createVNode("div", { class: "inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4" }, [
                      createVNode(_component_SvgIcon, { name: "badge" }),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-lg font-semibold text-foreground" }, toDisplayString((_R = (_Q = unref(data)) == null ? undefined : _Q.data) == null ? undefined : _R.total_fulfilled_requests) + " of " + toDisplayString((_T = (_S = unref(data)) == null ? undefined : _S.data) == null ? undefined : _T.total_requests), 1),
                        createVNode("div", { class: "text-muted-foreground" }, "Request fufilled")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  ((_V = (_U = unref(data)) == null ? undefined : _U.data) == null ? undefined : _V.live_event) ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    event: (_X = (_W = unref(data)) == null ? undefined : _W.data) == null ? undefined : _X.live_event
                  }, null, 8, ["event"])) : createCommentVNode("", true),
                  unref(ended) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-center gap-x-2 mt-4 items-center animate-in slide-in-from-top-4"
                  }, [
                    createVNode("div", null, "Unfufilled requests?"),
                    createVNode(_sfc_main$6, { message: "Was your song or hype requests completed?" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          variant: "ghost",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-red-500 underline hover:no-underline" }, " REPORT ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "mt-4 space-y-4 text-muted-foreground md:hidden" }, [
                  createVNode("div", null, "ABOUT ME"),
                  createVNode("div", { class: "max-w-[550px]" }, toDisplayString(unref(host).bio), 1),
                  createVNode("div", { class: "inline-flex bg-white/10 items-center rounded-xl py-4 px-6 gap-4" }, [
                    createVNode(_component_SvgIcon, { name: "badge" }),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-lg font-semibold text-foreground" }, toDisplayString((_Z = (_Y = unref(data)) == null ? undefined : _Y.data) == null ? undefined : _Z.total_fulfilled_requests) + " of " + toDisplayString((_$ = (__ = unref(data)) == null ? undefined : __.data) == null ? undefined : _$.total_requests), 1),
                      createVNode("div", { class: "text-muted-foreground" }, "Request fufilled")
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(request_rejected),
        "onUpdate:modelValue": ($event) => isRef(request_rejected) ? request_rejected.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[host]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CI6NVPIl.mjs.map
