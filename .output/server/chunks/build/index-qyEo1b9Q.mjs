import { _ as _sfc_main$d } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$e } from './loading-area-BCC1xwyu.mjs';
import { useSSRContext, defineComponent, computed, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, ref, watch, mergeProps, isRef, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Loader, ChevronDown, Check, X, Dot, ArrowLeft } from 'lucide-vue-next';
import { _ as _sfc_main$9 } from './confirm-dialog-LIDX9onR.mjs';
import { c as useRoute, e as useSeoMeta, _ as _sfc_main$4$1, l as useNotifications, a as useNuxtApp, k as cn, h as formatMoney, p as useAsyncData, s as showToast, m as ji, U as Ui, q as qi, o as kh, M as Mh, F as Fh, y as yg, i as gg, C as Cg, j as bg } from './server.mjs';
import { _ as _sfc_main$a } from './number-input-KDBkJw-x.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { _ as _sfc_main$f } from './svg-icon-CvfuI_SP.mjs';
import { _ as _sfc_main$c } from './tooltip-BOPp73dK.mjs';
import { _ as _sfc_main$b, e as eventRequests } from './summary-pgNK0JTY.mjs';
import { u as useLiveEvent } from './useLiveEvent-DFcZSU5e.mjs';
import { u as useDateFormat } from './index-twTXuIJ-.mjs';
import { _ as _sfc_main$8 } from './live-banner-DN459kJ6.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import './modal-BEorc3YA.mjs';
import 'class-variance-authority';
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
import './index-CNLs9n-l.mjs';
import './client-only-Db1Q_2tj.mjs';
import './auto-scroll-carousel-DN-Q2yRb.mjs';
import 'embla-carousel-auto-scroll';
import 'embla-carousel-vue';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "event-rate-card",
  __ssrInlineRender: true,
  props: {
    services: { default: () => [
      {
        id: 1,
        name: "song",
        price: 0
      },
      {
        id: 2,
        name: "hype",
        price: 0
      }
    ] },
    onUpdate: {}
  },
  setup(__props) {
    const props = __props;
    const { refreshNotifications } = useNotifications();
    const updating = ref(false);
    const host_services = ref([]);
    watch(
      () => props.services,
      (services) => {
        host_services.value = services;
      },
      {
        immediate: true
      }
    );
    const {
      $repo: { event }
    } = useNuxtApp();
    const updatePrice = async (id, price) => {
      return await event.updateEventPrice(id, price);
    };
    const updateAllPrice = async () => {
      var _a2;
      var _a;
      try {
        updating.value = true;
        const result = await Promise.all(
          host_services.value.map(
            (service) => updatePrice(service.id, service.price)
          )
        );
        refreshNotifications();
        updating.value = false;
        showToast({ title: "Prices updated" });
      } catch (error) {
        const e = error;
        updating.value = false;
        showToast({
          title: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to update prices",
          variant: "warning"
        });
        console.error("FAILED TO UPDATE PRICES", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full border rounded-3xl bg-white/5 px-6 py-4 relative" }, _attrs))}>`);
      if (unref(updating)) {
        _push(`<div class="absolute inset-0 grid place-items-center bg-background/65 rounded-[inherit] z-10">`);
        _push(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-2xl font-medium">Live prices</div><div class="space-y-6 my-8"><!--[-->`);
      ssrRenderList(unref(host_services), (service) => {
        _push(`<div class="flex justify-between items-center"><div class="text-lg text-muted-foreground capitalize min-w-fit">${ssrInterpolate(service.name)} <span class="hidden md:inline">request</span></div>`);
        _push(ssrRenderComponent(_sfc_main$a, {
          modelValue: service.price,
          "onUpdate:modelValue": ($event) => service.price = $event,
          id: `PRICE-FOR-${service.name}-${service.id}`,
          step: 100
        }, null, _parent));
        {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$4$1, {
        class: "w-full",
        onClick: updateAllPrice
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Update price`);
          } else {
            return [
              createTextVNode("Update price")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/event-rate-card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "request-collapsible-item",
  __ssrInlineRender: true,
  props: {
    request: {},
    index: {},
    onUpdate: {},
    defaultOpen: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const open = ref(props.defaultOpen);
    const popover_open = ref(false);
    const { updateEventRequest, update_status, updating } = useLiveEvent();
    const handleOpening = () => {
      if (props.disabled || popover_open.value) return;
      open.value = !open.value;
    };
    const updateRequest = (status) => {
      updateEventRequest(props.request.id, status, props.onUpdate);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CollapsibleRoot = ji;
      const _component_CollapsibleTrigger = Ui;
      const _component_CollapsibleContent = qi;
      _push(ssrRenderComponent(_component_CollapsibleRoot, mergeProps({
        class: "bg-white/5 rounded-2xl",
        open: unref(open),
        disabled: _ctx.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CollapsibleTrigger, { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-4 sm:px-6 py-3 [&amp;[data-state=&#39;open&#39;]_.caret]:rotate-180 cursor-pointer"${_scopeId2}><div class="${ssrRenderClass(
                    ("cn" in _ctx ? _ctx.cn : unref(cn))(
                      _ctx.request.status === "now-playing" ? "text-primary text-base font-medium" : "text-foreground"
                    )
                  )}"${_scopeId2}>${ssrInterpolate((_a2 = _ctx.index) != null ? _a2 : "-")}</div><div class="space-y-1 text-left"${_scopeId2}>`);
                  if (_ctx.request.type === "hype") {
                    _push3(ssrRenderComponent(_sfc_main$b, {
                      content: (_a = _ctx.request) == null ? undefined : _a.description,
                      modelValue: unref(popover_open),
                      "onUpdate:modelValue": ($event) => isRef(popover_open) ? popover_open.value = $event : null
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!--[--><div class="font-medium"${_scopeId2}>${ssrInterpolate(_ctx.request.song_title)}</div><div class="text-sm text-muted-foreground"${_scopeId2}> by ${ssrInterpolate(_ctx.request.artist)}</div><!--]-->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ChevronDown), { class: "size-5 caret transition-transform relative" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      onClick: handleOpening,
                      class: "grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-4 sm:px-6 py-3 [&[data-state='open']_.caret]:rotate-180 cursor-pointer"
                    }, [
                      createVNode("div", {
                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                          _ctx.request.status === "now-playing" ? "text-primary text-base font-medium" : "text-foreground"
                        )
                      }, toDisplayString((_b2 = _ctx.index) != null ? _b2 : "-"), 3),
                      createVNode("div", { class: "space-y-1 text-left" }, [
                        _ctx.request.type === "hype" ? (openBlock(), createBlock(_sfc_main$b, {
                          key: 0,
                          content: (_b = _ctx.request) == null ? undefined : _b.description,
                          modelValue: unref(popover_open),
                          "onUpdate:modelValue": ($event) => isRef(popover_open) ? popover_open.value = $event : null
                        }, null, 8, ["content", "modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("div", { class: "font-medium" }, toDisplayString(_ctx.request.song_title), 1),
                          createVNode("div", { class: "text-sm text-muted-foreground" }, " by " + toDisplayString(_ctx.request.artist), 1)
                        ], 64))
                      ]),
                      createVNode(unref(ChevronDown), { class: "size-5 caret transition-transform relative" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CollapsibleContent, { class: "data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden px-4 sm:px-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="py-4 mt-4 border-t border-t-white/5"${_scopeId2}><div class="flex gap-x-2"${_scopeId2}><div class="space-y-1 w-full"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>Requested by</div><div class="text-white/80"${_scopeId2}>${ssrInterpolate((_a = _ctx.request.nickname) != null ? _a : _ctx.request.audience.name)}</div></div><div class="space-y-1 w-full"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>Amount paid</div><div class="tabular-nums text-white/80"${_scopeId2}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price))}</div></div></div>`);
                  if (_ctx.request.status === "new") {
                    _push3(`<div class="flex gap-x-4 mt-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$4$1, {
                      class: "w-full",
                      disabled: unref(updating),
                      loading: unref(updating) && unref(update_status) === "now-playing",
                      onClick: ($event) => updateRequest("now-playing")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.request.type === "hype" ? "Perform" : "Play")} `);
                          _push4(ssrRenderComponent(unref(Check), { class: "size-4 ml-2" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.request.type === "hype" ? "Perform" : "Play") + " ", 1),
                            createVNode(unref(Check), { class: "size-4 ml-2" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$9, {
                      onConfirm: () => updateRequest("declined")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$4$1, {
                            variant: "secondary",
                            class: "w-full !border-destructive !text-destructive",
                            disabled: unref(updating),
                            loading: unref(updating) && unref(update_status) === "declined"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Reject `);
                                _push5(ssrRenderComponent(unref(X), { class: "size-4 ml-2" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createTextVNode(" Reject "),
                                  createVNode(unref(X), { class: "size-4 ml-2" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$4$1, {
                              variant: "secondary",
                              class: "w-full !border-destructive !text-destructive",
                              disabled: unref(updating),
                              loading: unref(updating) && unref(update_status) === "declined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reject "),
                                createVNode(unref(X), { class: "size-4 ml-2" })
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (_ctx.request.status === "now-playing") {
                    _push3(`<div class="py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"${_scopeId2}> Now ${ssrInterpolate(_ctx.request.type === "hype" ? "performing hype" : "playing")}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-4 mt-4 border-t border-t-white/5" }, [
                      createVNode("div", { class: "flex gap-x-2" }, [
                        createVNode("div", { class: "space-y-1 w-full" }, [
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "Requested by"),
                          createVNode("div", { class: "text-white/80" }, toDisplayString((_b = _ctx.request.nickname) != null ? _b : _ctx.request.audience.name), 1)
                        ]),
                        createVNode("div", { class: "space-y-1 w-full" }, [
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "Amount paid"),
                          createVNode("div", { class: "tabular-nums text-white/80" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)), 1)
                        ])
                      ]),
                      _ctx.request.status === "new" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-x-4 mt-8"
                      }, [
                        createVNode(_sfc_main$4$1, {
                          class: "w-full",
                          disabled: unref(updating),
                          loading: unref(updating) && unref(update_status) === "now-playing",
                          onClick: ($event) => updateRequest("now-playing")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.request.type === "hype" ? "Perform" : "Play") + " ", 1),
                            createVNode(unref(Check), { class: "size-4 ml-2" })
                          ]),
                          _: 1
                        }, 8, ["disabled", "loading", "onClick"]),
                        createVNode(_sfc_main$9, {
                          onConfirm: () => updateRequest("declined")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4$1, {
                              variant: "secondary",
                              class: "w-full !border-destructive !text-destructive",
                              disabled: unref(updating),
                              loading: unref(updating) && unref(update_status) === "declined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reject "),
                                createVNode(unref(X), { class: "size-4 ml-2" })
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        }, 8, ["onConfirm"])
                      ])) : _ctx.request.status === "now-playing" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"
                      }, " Now " + toDisplayString(_ctx.request.type === "hype" ? "performing hype" : "playing"), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CollapsibleTrigger, { asChild: "" }, {
                default: withCtx(() => {
                  var _a2;
                  var _a;
                  return [
                    createVNode("div", {
                      onClick: handleOpening,
                      class: "grid grid-cols-[auto_1fr_auto] gap-x-4 w-full items-center justify-start relative px-4 sm:px-6 py-3 [&[data-state='open']_.caret]:rotate-180 cursor-pointer"
                    }, [
                      createVNode("div", {
                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                          _ctx.request.status === "now-playing" ? "text-primary text-base font-medium" : "text-foreground"
                        )
                      }, toDisplayString((_a2 = _ctx.index) != null ? _a2 : "-"), 3),
                      createVNode("div", { class: "space-y-1 text-left" }, [
                        _ctx.request.type === "hype" ? (openBlock(), createBlock(_sfc_main$b, {
                          key: 0,
                          content: (_a = _ctx.request) == null ? undefined : _a.description,
                          modelValue: unref(popover_open),
                          "onUpdate:modelValue": ($event) => isRef(popover_open) ? popover_open.value = $event : null
                        }, null, 8, ["content", "modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("div", { class: "font-medium" }, toDisplayString(_ctx.request.song_title), 1),
                          createVNode("div", { class: "text-sm text-muted-foreground" }, " by " + toDisplayString(_ctx.request.artist), 1)
                        ], 64))
                      ]),
                      createVNode(unref(ChevronDown), { class: "size-5 caret transition-transform relative" })
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_CollapsibleContent, { class: "data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden px-4 sm:px-6" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "py-4 mt-4 border-t border-t-white/5" }, [
                      createVNode("div", { class: "flex gap-x-2" }, [
                        createVNode("div", { class: "space-y-1 w-full" }, [
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "Requested by"),
                          createVNode("div", { class: "text-white/80" }, toDisplayString((_a = _ctx.request.nickname) != null ? _a : _ctx.request.audience.name), 1)
                        ]),
                        createVNode("div", { class: "space-y-1 w-full" }, [
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "Amount paid"),
                          createVNode("div", { class: "tabular-nums text-white/80" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)), 1)
                        ])
                      ]),
                      _ctx.request.status === "new" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-x-4 mt-8"
                      }, [
                        createVNode(_sfc_main$4$1, {
                          class: "w-full",
                          disabled: unref(updating),
                          loading: unref(updating) && unref(update_status) === "now-playing",
                          onClick: ($event) => updateRequest("now-playing")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.request.type === "hype" ? "Perform" : "Play") + " ", 1),
                            createVNode(unref(Check), { class: "size-4 ml-2" })
                          ]),
                          _: 1
                        }, 8, ["disabled", "loading", "onClick"]),
                        createVNode(_sfc_main$9, {
                          onConfirm: () => updateRequest("declined")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$4$1, {
                              variant: "secondary",
                              class: "w-full !border-destructive !text-destructive",
                              disabled: unref(updating),
                              loading: unref(updating) && unref(update_status) === "declined"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Reject "),
                                createVNode(unref(X), { class: "size-4 ml-2" })
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        }, 8, ["onConfirm"])
                      ])) : _ctx.request.status === "now-playing" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "py-1 px-6 bg-foreground text-background text-center text-sm mt-8 rounded-3xl animate-pulse"
                      }, " Now " + toDisplayString(_ctx.request.type === "hype" ? "performing hype" : "playing"), 1)) : createCommentVNode("", true)
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request/request-collapsible-item.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "request-line-item",
  __ssrInlineRender: true,
  props: {
    request: {},
    index: {},
    onUpdate: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const { updateEventRequest, update_status, updating } = useLiveEvent();
    const updateRequest = (status) => {
      updateEventRequest(props.request.id, status, props.onUpdate);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-request-line-item gap-x-4 items-center px-2 sm:px-6 py-4 bg-white/5 rounded-2xl" }, _attrs))}><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          _ctx.request.status === "now-playing" ? "text-primary text-base font-medium" : "text-foreground"
        )
      )}">${ssrInterpolate((_a2 = _ctx.index) != null ? _a2 : "-")}</div><div class="space-y-1">`);
      if (_ctx.request.type === "hype") {
        _push(ssrRenderComponent(_sfc_main$b, {
          content: (_a = _ctx.request) == null ? undefined : _a.description
        }, null, _parent));
      } else {
        _push(`<!--[--><div class="font-medium">${ssrInterpolate(_ctx.request.song_title)}</div><div class="text-sm text-muted-foreground">by ${ssrInterpolate(_ctx.request.artist)}</div><!--]-->`);
      }
      _push(`</div><div class="space-y-1"><div class="text-sm text-muted-foreground">Requested by</div><div class="text-white/80">${ssrInterpolate((_b = _ctx.request.nickname) != null ? _b : _ctx.request.audience.name)}</div></div><div class="space-y-1"><div class="text-sm text-muted-foreground">Amount paid</div><div class="tabular-nums text-white/80"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price))}</div></div>`);
      if (_ctx.request.status === "new") {
        _push(`<div class="flex gap-x-2 justify-self-end">`);
        _push(ssrRenderComponent(_sfc_main$4$1, {
          onClick: ($event) => updateRequest("now-playing"),
          disabled: unref(updating),
          loading: unref(updating) && unref(update_status) === "now-playing"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.request.type === "hype" ? "Perform" : "Play")} `);
              _push2(ssrRenderComponent(unref(Check), { class: "size-3 ml-2" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.request.type === "hype" ? "Perform" : "Play") + " ", 1),
                createVNode(unref(Check), { class: "size-3 ml-2" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$9, {
          onConfirm: () => updateRequest("declined"),
          message: "Are you sure you want to reject this request?"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                variant: "secondary",
                disabled: unref(updating),
                loading: unref(updating) && unref(update_status) === "declined",
                class: "!border-destructive !text-destructive"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Reject `);
                    _push3(ssrRenderComponent(unref(X), { class: "size-3 ml-2" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createTextVNode(" Reject "),
                      createVNode(unref(X), { class: "size-3 ml-2" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4$1, {
                  variant: "secondary",
                  disabled: unref(updating),
                  loading: unref(updating) && unref(update_status) === "declined",
                  class: "!border-destructive !text-destructive"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Reject "),
                    createVNode(unref(X), { class: "size-3 ml-2" })
                  ]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (_ctx.request.status === "now-playing") {
        _push(`<div class="py-1 px-6 bg-foreground text-background text-center text-sm rounded-2xl animate-pulse justify-self-end"> Now ${ssrInterpolate(_ctx.request.type === "hype" ? "performing hype" : "playing")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request/request-line-item.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "request-list",
  __ssrInlineRender: true,
  props: {
    requests: { default: () => eventRequests },
    onUpdate: {},
    type: { default: "song" },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const handleSelection = (e) => {
      e.preventDefault();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListboxRoot = kh;
      const _component_ListboxContent = Mh;
      const _component_ListboxItem = Fh;
      const _component_SvgIcon = _sfc_main$f;
      _push(ssrRenderComponent(_component_ListboxRoot, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListboxContent, { class: "space-y-2 relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.requests, (request, index) => {
                    _push3(ssrRenderComponent(_component_ListboxItem, {
                      key: request.id,
                      value: request.id,
                      onSelect: handleSelection
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$6, {
                            request,
                            class: "min-[880px]:hidden",
                            index: index + 1,
                            onUpdate: _ctx.onUpdate,
                            "default-open": request.status === "now-playing",
                            disabled: request.status === "now-playing"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            request,
                            class: "hidden min-[880px]:grid",
                            index: index + 1,
                            onUpdate: _ctx.onUpdate
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$6, {
                              request,
                              class: "min-[880px]:hidden",
                              index: index + 1,
                              onUpdate: _ctx.onUpdate,
                              "default-open": request.status === "now-playing",
                              disabled: request.status === "now-playing"
                            }, null, 8, ["request", "index", "onUpdate", "default-open", "disabled"]),
                            createVNode(_sfc_main$5, {
                              request,
                              class: "hidden min-[880px]:grid",
                              index: index + 1,
                              onUpdate: _ctx.onUpdate
                            }, null, 8, ["request", "index", "onUpdate"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (!_ctx.requests.length && !_ctx.loading) {
                    _push3(`<div class="min-h-[350px]"${_scopeId2}><div class="place-center grid place-items-center gap-2"${_scopeId2}><div class="size-12 rounded-full bg-white/40 relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SvgIcon, {
                      class: "scale-75 place-center",
                      name: _ctx.type == "song" ? "music" : "mic"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="text-xl text-muted-foreground font-medium"${_scopeId2}> No ${ssrInterpolate(_ctx.type)} requests </div><div class="text-muted-foreground"${_scopeId2}> Get prepared, requests may come soon </div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.requests, (request, index) => {
                      return openBlock(), createBlock(_component_ListboxItem, {
                        key: request.id,
                        value: request.id,
                        onSelect: handleSelection
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            request,
                            class: "min-[880px]:hidden",
                            index: index + 1,
                            onUpdate: _ctx.onUpdate,
                            "default-open": request.status === "now-playing",
                            disabled: request.status === "now-playing"
                          }, null, 8, ["request", "index", "onUpdate", "default-open", "disabled"]),
                          createVNode(_sfc_main$5, {
                            request,
                            class: "hidden min-[880px]:grid",
                            index: index + 1,
                            onUpdate: _ctx.onUpdate
                          }, null, 8, ["request", "index", "onUpdate"])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128)),
                    !_ctx.requests.length && !_ctx.loading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-h-[350px]"
                    }, [
                      createVNode("div", { class: "place-center grid place-items-center gap-2" }, [
                        createVNode("div", { class: "size-12 rounded-full bg-white/40 relative" }, [
                          createVNode(_component_SvgIcon, {
                            class: "scale-75 place-center",
                            name: _ctx.type == "song" ? "music" : "mic"
                          }, null, 8, ["name"])
                        ]),
                        createVNode("div", { class: "text-xl text-muted-foreground font-medium" }, " No " + toDisplayString(_ctx.type) + " requests ", 1),
                        createVNode("div", { class: "text-muted-foreground" }, " Get prepared, requests may come soon ")
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListboxContent, { class: "space-y-2 relative" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.requests, (request, index) => {
                    return openBlock(), createBlock(_component_ListboxItem, {
                      key: request.id,
                      value: request.id,
                      onSelect: handleSelection
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          request,
                          class: "min-[880px]:hidden",
                          index: index + 1,
                          onUpdate: _ctx.onUpdate,
                          "default-open": request.status === "now-playing",
                          disabled: request.status === "now-playing"
                        }, null, 8, ["request", "index", "onUpdate", "default-open", "disabled"]),
                        createVNode(_sfc_main$5, {
                          request,
                          class: "hidden min-[880px]:grid",
                          index: index + 1,
                          onUpdate: _ctx.onUpdate
                        }, null, 8, ["request", "index", "onUpdate"])
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128)),
                  !_ctx.requests.length && !_ctx.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "min-h-[350px]"
                  }, [
                    createVNode("div", { class: "place-center grid place-items-center gap-2" }, [
                      createVNode("div", { class: "size-12 rounded-full bg-white/40 relative" }, [
                        createVNode(_component_SvgIcon, {
                          class: "scale-75 place-center",
                          name: _ctx.type == "song" ? "music" : "mic"
                        }, null, 8, ["name"])
                      ]),
                      createVNode("div", { class: "text-xl text-muted-foreground font-medium" }, " No " + toDisplayString(_ctx.type) + " requests ", 1),
                      createVNode("div", { class: "text-muted-foreground" }, " Get prepared, requests may come soon ")
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request/request-list.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "request-history-line-item",
  __ssrInlineRender: true,
  props: {
    request: {},
    index: {},
    onUpdate: { type: Function }
  },
  setup(__props) {
    useLiveEvent();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SvgIcon = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-[70px_1fr] gap-2 px-2 sm:px-6 py-4 b-white/5 rounded-2xl text-muted-foreground" }, _attrs))}><div>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(new Date(_ctx.request.created_at), "h:mma"))}</div><div class="grid md:grid-cols-[1fr_200px] gap-2 items-center"><div class="space-y-1"><div class="flex gap-x-2 items-center">`);
      if (_ctx.request.type === "hype") {
        _push(ssrRenderComponent(_sfc_main$b, {
          content: _ctx.request.description,
          class: "text-base text-foreground font-medium"
        }, null, _parent));
      } else {
        _push(`<!--[--><div class="text-base text-foreground font-medium">${ssrInterpolate(_ctx.request.song_title)}</div><div class="text-sm">by ${ssrInterpolate(_ctx.request.artist)}</div><!--]-->`);
      }
      _push(`</div><div class="flex gap-x- items-center"><div>${ssrInterpolate((_a = _ctx.request.nickname) != null ? _a : _ctx.request.audience.name)}</div>`);
      _push(ssrRenderComponent(unref(Dot), null, null, _parent));
      _push(`<div class="flex items-center gap-x-1">`);
      _push(ssrRenderComponent(_component_SvgIcon, {
        class: "scale-50",
        name: _ctx.request.type == "song" ? "music" : "mic"
      }, null, _parent));
      _push(`<div class="uppercase">${ssrInterpolate(_ctx.request.type)}</div></div>`);
      _push(ssrRenderComponent(unref(Dot), null, null, _parent));
      _push(`<div class="tabular-nums">\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price))}</div></div></div><div class="flex gap-x-1 md:justify-end items-center text-sm"><div class="capitalize">${ssrInterpolate(_ctx.request.status)}</div>`);
      if (["ignored", "declined"].includes(_ctx.request.status) && false) ;
      else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request/request-history-line-item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "request-history-list",
  __ssrInlineRender: true,
  props: {
    requests: { default: () => eventRequests },
    onUpdate: {},
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const handleSelection = (e) => {
      e.preventDefault();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListboxRoot = kh;
      const _component_ListboxContent = Mh;
      const _component_ListboxItem = Fh;
      const _component_SvgIcon = _sfc_main$f;
      _push(ssrRenderComponent(_component_ListboxRoot, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListboxContent, { class: "space-y-2 relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.requests, (request) => {
                    _push3(ssrRenderComponent(_component_ListboxItem, {
                      key: request.id,
                      value: request.id,
                      onSelect: handleSelection
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$3, {
                            request,
                            onUpdate: _ctx.onUpdate
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$3, {
                              request,
                              onUpdate: _ctx.onUpdate
                            }, null, 8, ["request", "onUpdate"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (!_ctx.requests.length && !_ctx.loading) {
                    _push3(`<div class="min-h-[350px]"${_scopeId2}><div class="place-center grid place-items-center gap-2 text-center"${_scopeId2}><div class="size-12 rounded-full bg-white/40 relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SvgIcon, {
                      class: "scale-75 place-center",
                      name: "history"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="text-xl text-muted-foreground font-medium"${_scopeId2}> Nothing yet </div><div class="text-muted-foreground"${_scopeId2}> Your completed/rejected requests will be here </div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.requests, (request) => {
                      return openBlock(), createBlock(_component_ListboxItem, {
                        key: request.id,
                        value: request.id,
                        onSelect: handleSelection
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, {
                            request,
                            onUpdate: _ctx.onUpdate
                          }, null, 8, ["request", "onUpdate"])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128)),
                    !_ctx.requests.length && !_ctx.loading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-h-[350px]"
                    }, [
                      createVNode("div", { class: "place-center grid place-items-center gap-2 text-center" }, [
                        createVNode("div", { class: "size-12 rounded-full bg-white/40 relative" }, [
                          createVNode(_component_SvgIcon, {
                            class: "scale-75 place-center",
                            name: "history"
                          })
                        ]),
                        createVNode("div", { class: "text-xl text-muted-foreground font-medium" }, " Nothing yet "),
                        createVNode("div", { class: "text-muted-foreground" }, " Your completed/rejected requests will be here ")
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListboxContent, { class: "space-y-2 relative" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.requests, (request) => {
                    return openBlock(), createBlock(_component_ListboxItem, {
                      key: request.id,
                      value: request.id,
                      onSelect: handleSelection
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3, {
                          request,
                          onUpdate: _ctx.onUpdate
                        }, null, 8, ["request", "onUpdate"])
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128)),
                  !_ctx.requests.length && !_ctx.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "min-h-[350px]"
                  }, [
                    createVNode("div", { class: "place-center grid place-items-center gap-2 text-center" }, [
                      createVNode("div", { class: "size-12 rounded-full bg-white/40 relative" }, [
                        createVNode(_component_SvgIcon, {
                          class: "scale-75 place-center",
                          name: "history"
                        })
                      ]),
                      createVNode("div", { class: "text-xl text-muted-foreground font-medium" }, " Nothing yet "),
                      createVNode("div", { class: "text-muted-foreground" }, " Your completed/rejected requests will be here ")
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request/request-history-list.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "requests-tab",
  __ssrInlineRender: true,
  props: {
    requests: { default: () => eventRequests },
    event_id: { default: "1" }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const active_tab = computed(
      () => {
        var _a;
        return (_a = route == null ? undefined : route.query) == null ? undefined : _a.request_tab;
      }
    );
    const request_type = computed(() => {
      var _a;
      return (_a = active_tab.value) != null ? _a : "song";
    });
    const { fetchEventRequests } = useLiveEvent();
    const {
      data: event_requests,
      status,
      error,
      refresh
    } = useAsyncData(
      `EVENT-${props.event_id}-REQUESTS`,
      () => fetchEventRequests(props.event_id),
      {
        transform: (data) => {
          const request_order_map = {
            "now-playing": 0,
            new: 1,
            "payment-pending": 2,
            completed: 3,
            declined: 4,
            ignored: 5
          };
          return data.data.sort(
            (a, b) => (request_order_map == null ? undefined : request_order_map[a.status]) - request_order_map[b.status]
          );
        }
      }
    );
    const activeRequests = computed(() => {
      var _a;
      if (!event_requests.value || error.value) return [];
      return (_a = event_requests.value) == null ? undefined : _a.filter((item) => item.status === "new" || item.status === "now-playing");
    });
    const inActiveRequests = computed(() => {
      var _a;
      if (!event_requests.value || error.value) return [];
      return (_a = event_requests.value) == null ? undefined : _a.filter((item) => item.status !== "new" && item.status !== "now-playing");
    });
    const songRequests = computed(() => {
      return activeRequests.value.filter((item) => item.type === "song");
    });
    const hypeRequests = computed(() => {
      return activeRequests.value.filter((item) => item.type === "hype");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsRoot = yg;
      const _component_TabsList = gg;
      const _component_TabsTrigger = Cg;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SvgIcon = _sfc_main$f;
      const _component_TabsContent = bg;
      _push(ssrRenderComponent(_component_TabsRoot, mergeProps({
        class: "border bg-white/5 rounded-3xl relative",
        "default-value": unref(request_type)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          var _a, _b, _c, _d;
          if (_push2) {
            if (unref(request_type) === "history") {
              _push2(ssrRenderComponent(_component_TabsList, { class: "p-4 border-b grid grid-cols-[auto_1fr] gap-x-4 items-center min-h-[73px] transition-opacity duration-1000" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-lg font-medium pl-6 hidden md:block"${_scopeId2}>Request history</div>`);
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "song",
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            replace: "",
                            to: { query: { ...unref(route).query, request_tab: "song" } },
                            class: "flex items-center gap-x-1 ml-auto pr-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4$1, {
                                  variant: "outline",
                                  size: "icon"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(ArrowLeft), null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(ArrowLeft))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}>Back to live request</div>`);
                              } else {
                                return [
                                  createVNode(_sfc_main$4$1, {
                                    variant: "outline",
                                    size: "icon"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ArrowLeft))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, "Back to live request")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              replace: "",
                              to: { query: { ...unref(route).query, request_tab: "song" } },
                              class: "flex items-center gap-x-1 ml-auto pr-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4$1, {
                                  variant: "outline",
                                  size: "icon"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ArrowLeft))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, "Back to live request")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "text-lg font-medium pl-6 hidden md:block" }, "Request history"),
                      createVNode(_component_TabsTrigger, {
                        value: "song",
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            replace: "",
                            to: { query: { ...unref(route).query, request_tab: "song" } },
                            class: "flex items-center gap-x-1 ml-auto pr-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4$1, {
                                variant: "outline",
                                size: "icon"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ArrowLeft))
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, "Back to live request")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_TabsList, { class: "p-4 border-b grid grid-cols-[auto_auto_1fr] gap-x-4 items-center -z-10" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "song",
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            replace: "",
                            to: { query: { ...unref(route).query, request_tab: "song" } },
                            class: "[&[data-state='active']_.count]:hidden"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4$1, {
                                  variant: unref(request_type) === "song" ? "primary" : "outline",
                                  class: "gap-x-2 md:min-w-[100px]"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div${_scopeId5}>song</div><div class="size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"${_scopeId5}>${ssrInterpolate(unref(songRequests).length)}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, "song"),
                                        createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(songRequests).length), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$4$1, {
                                    variant: unref(request_type) === "song" ? "primary" : "outline",
                                    class: "gap-x-2 md:min-w-[100px]"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, "song"),
                                      createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(songRequests).length), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["variant"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              replace: "",
                              to: { query: { ...unref(route).query, request_tab: "song" } },
                              class: "[&[data-state='active']_.count]:hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4$1, {
                                  variant: unref(request_type) === "song" ? "primary" : "outline",
                                  class: "gap-x-2 md:min-w-[100px]"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, "song"),
                                    createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(songRequests).length), 1)
                                  ]),
                                  _: 1
                                }, 8, ["variant"])
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "hype",
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            replace: "",
                            to: { query: { ...unref(route).query, request_tab: "hype" } },
                            class: "[&[data-state='active']_.count]:hidden"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4$1, {
                                  variant: unref(request_type) === "hype" ? "primary" : "outline",
                                  class: "gap-x-2 md:min-w-[100px]"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div${_scopeId5}>hype</div><div class="size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"${_scopeId5}>${ssrInterpolate(unref(hypeRequests).length)}</div>`);
                                    } else {
                                      return [
                                        createVNode("div", null, "hype"),
                                        createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(hypeRequests).length), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$4$1, {
                                    variant: unref(request_type) === "hype" ? "primary" : "outline",
                                    class: "gap-x-2 md:min-w-[100px]"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", null, "hype"),
                                      createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(hypeRequests).length), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["variant"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              replace: "",
                              to: { query: { ...unref(route).query, request_tab: "hype" } },
                              class: "[&[data-state='active']_.count]:hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4$1, {
                                  variant: unref(request_type) === "hype" ? "primary" : "outline",
                                  class: "gap-x-2 md:min-w-[100px]"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, "hype"),
                                    createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(hypeRequests).length), 1)
                                  ]),
                                  _: 1
                                }, 8, ["variant"])
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TabsTrigger, {
                      value: "history",
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: { query: { ...unref(route).query, request_tab: "history" } },
                            replace: "",
                            class: "ml-auto"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$4$1, {
                                  variant: "ghost",
                                  class: "gap-x-2 text-muted-foreground hidden md:inline-flex"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_SvgIcon, { name: "history" }, null, _parent6, _scopeId5));
                                      _push6(`<div${_scopeId5}>Request history</div>`);
                                    } else {
                                      return [
                                        createVNode(_component_SvgIcon, { name: "history" }),
                                        createVNode("div", null, "Request history")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="md:hidden"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_sfc_main$c, { message: "Request history" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$4$1, {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_SvgIcon, { name: "history" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_SvgIcon, { name: "history" })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$4$1, {
                                          variant: "ghost",
                                          size: "icon"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_SvgIcon, { name: "history" })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_sfc_main$4$1, {
                                    variant: "ghost",
                                    class: "gap-x-2 text-muted-foreground hidden md:inline-flex"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SvgIcon, { name: "history" }),
                                      createVNode("div", null, "Request history")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "md:hidden" }, [
                                    createVNode(_sfc_main$c, { message: "Request history" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4$1, {
                                          variant: "ghost",
                                          size: "icon"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_SvgIcon, { name: "history" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              to: { query: { ...unref(route).query, request_tab: "history" } },
                              replace: "",
                              class: "ml-auto"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4$1, {
                                  variant: "ghost",
                                  class: "gap-x-2 text-muted-foreground hidden md:inline-flex"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SvgIcon, { name: "history" }),
                                    createVNode("div", null, "Request history")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "md:hidden" }, [
                                  createVNode(_sfc_main$c, { message: "Request history" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$4$1, {
                                        variant: "ghost",
                                        size: "icon"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SvgIcon, { name: "history" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TabsTrigger, {
                        value: "song",
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            replace: "",
                            to: { query: { ...unref(route).query, request_tab: "song" } },
                            class: "[&[data-state='active']_.count]:hidden"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4$1, {
                                variant: unref(request_type) === "song" ? "primary" : "outline",
                                class: "gap-x-2 md:min-w-[100px]"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, "song"),
                                  createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(songRequests).length), 1)
                                ]),
                                _: 1
                              }, 8, ["variant"])
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, {
                        value: "hype",
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            replace: "",
                            to: { query: { ...unref(route).query, request_tab: "hype" } },
                            class: "[&[data-state='active']_.count]:hidden"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4$1, {
                                variant: unref(request_type) === "hype" ? "primary" : "outline",
                                class: "gap-x-2 md:min-w-[100px]"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", null, "hype"),
                                  createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(hypeRequests).length), 1)
                                ]),
                                _: 1
                              }, 8, ["variant"])
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TabsTrigger, {
                        value: "history",
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: { query: { ...unref(route).query, request_tab: "history" } },
                            replace: "",
                            class: "ml-auto"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4$1, {
                                variant: "ghost",
                                class: "gap-x-2 text-muted-foreground hidden md:inline-flex"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_SvgIcon, { name: "history" }),
                                  createVNode("div", null, "Request history")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "md:hidden" }, [
                                createVNode(_sfc_main$c, { message: "Request history" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4$1, {
                                      variant: "ghost",
                                      size: "icon"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SvgIcon, { name: "history" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            if (unref(status) == "pending" || unref(error)) {
              _push2(`<div class="py-8 absolute inset-0 bg-white/5 rounded-[inherit] grid place-items-center z-10"${_scopeId}>`);
              if (unref(status) === "pending") {
                _push2(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent2, _scopeId));
              } else if (unref(error)) {
                _push2(`<div class="grid place-items-center gap-y-4"${_scopeId}><div class="text-destructive text-center"${_scopeId}>${ssrInterpolate((_a2 = (_b = (_a = unref(error)) == null ? undefined : _a.data) == null ? undefined : _b.message) != null ? _a2 : "Failed to load request")}</div>`);
                _push2(ssrRenderComponent(_sfc_main$4$1, {
                  variant: "secondary",
                  onClick: () => unref(refresh)()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Retry `);
                    } else {
                      return [
                        createTextVNode(" Retry ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(error)) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_TabsContent, { value: "song" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      type: "song",
                      loading: unref(status) === "pending",
                      requests: unref(songRequests),
                      onUpdate: unref(refresh),
                      class: "p-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$4, {
                        type: "song",
                        loading: unref(status) === "pending",
                        requests: unref(songRequests),
                        onUpdate: unref(refresh),
                        class: "p-4"
                      }, null, 8, ["loading", "requests", "onUpdate"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: "hype",
                class: "p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      type: "hype",
                      loading: unref(status) === "pending",
                      requests: unref(hypeRequests),
                      onUpdate: unref(refresh)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$4, {
                        type: "hype",
                        loading: unref(status) === "pending",
                        requests: unref(hypeRequests),
                        onUpdate: unref(refresh)
                      }, null, 8, ["loading", "requests", "onUpdate"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_TabsContent, {
                value: "history",
                class: "p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      loading: unref(status) === "pending",
                      requests: unref(inActiveRequests),
                      onUpdate: unref(refresh)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$2, {
                        loading: unref(status) === "pending",
                        requests: unref(inActiveRequests),
                        onUpdate: unref(refresh)
                      }, null, 8, ["loading", "requests", "onUpdate"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(request_type) === "history" ? (openBlock(), createBlock(_component_TabsList, {
                key: 0,
                class: "p-4 border-b grid grid-cols-[auto_1fr] gap-x-4 items-center min-h-[73px] transition-opacity duration-1000"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-lg font-medium pl-6 hidden md:block" }, "Request history"),
                  createVNode(_component_TabsTrigger, {
                    value: "song",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        replace: "",
                        to: { query: { ...unref(route).query, request_tab: "song" } },
                        class: "flex items-center gap-x-1 ml-auto pr-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4$1, {
                            variant: "outline",
                            size: "icon"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ArrowLeft))
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, "Back to live request")
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_TabsList, {
                key: 1,
                class: "p-4 border-b grid grid-cols-[auto_auto_1fr] gap-x-4 items-center -z-10"
              }, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, {
                    value: "song",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        replace: "",
                        to: { query: { ...unref(route).query, request_tab: "song" } },
                        class: "[&[data-state='active']_.count]:hidden"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4$1, {
                            variant: unref(request_type) === "song" ? "primary" : "outline",
                            class: "gap-x-2 md:min-w-[100px]"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, "song"),
                              createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(songRequests).length), 1)
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, {
                    value: "hype",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        replace: "",
                        to: { query: { ...unref(route).query, request_tab: "hype" } },
                        class: "[&[data-state='active']_.count]:hidden"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4$1, {
                            variant: unref(request_type) === "hype" ? "primary" : "outline",
                            class: "gap-x-2 md:min-w-[100px]"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, "hype"),
                              createVNode("div", { class: "size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count" }, toDisplayString(unref(hypeRequests).length), 1)
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, {
                    value: "history",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: { query: { ...unref(route).query, request_tab: "history" } },
                        replace: "",
                        class: "ml-auto"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4$1, {
                            variant: "ghost",
                            class: "gap-x-2 text-muted-foreground hidden md:inline-flex"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_SvgIcon, { name: "history" }),
                              createVNode("div", null, "Request history")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "md:hidden" }, [
                            createVNode(_sfc_main$c, { message: "Request history" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4$1, {
                                  variant: "ghost",
                                  size: "icon"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SvgIcon, { name: "history" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              unref(status) == "pending" || unref(error) ? (openBlock(), createBlock("div", {
                key: 2,
                class: "py-8 absolute inset-0 bg-white/5 rounded-[inherit] grid place-items-center z-10"
              }, [
                unref(status) === "pending" ? (openBlock(), createBlock(unref(Loader), {
                  key: 0,
                  class: "size-5 animate-spin"
                })) : unref(error) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid place-items-center gap-y-4"
                }, [
                  createVNode("div", { class: "text-destructive text-center" }, toDisplayString((_b2 = (_d = (_c = unref(error)) == null ? undefined : _c.data) == null ? undefined : _d.message) != null ? _b2 : "Failed to load request"), 1),
                  createVNode(_sfc_main$4$1, {
                    variant: "secondary",
                    onClick: () => unref(refresh)()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Retry ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              !unref(error) ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                createVNode(_component_TabsContent, { value: "song" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      type: "song",
                      loading: unref(status) === "pending",
                      requests: unref(songRequests),
                      onUpdate: unref(refresh),
                      class: "p-4"
                    }, null, 8, ["loading", "requests", "onUpdate"])
                  ]),
                  _: 1
                }),
                createVNode(_component_TabsContent, {
                  value: "hype",
                  class: "p-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      type: "hype",
                      loading: unref(status) === "pending",
                      requests: unref(hypeRequests),
                      onUpdate: unref(refresh)
                    }, null, 8, ["loading", "requests", "onUpdate"])
                  ]),
                  _: 1
                }),
                createVNode(_component_TabsContent, {
                  value: "history",
                  class: "p-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, {
                      loading: unref(status) === "pending",
                      requests: unref(inActiveRequests),
                      onUpdate: unref(refresh)
                    }, null, 8, ["loading", "requests", "onUpdate"])
                  ]),
                  _: 1
                })
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request/requests-tab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { endEvent, ending } = useLiveEvent();
    const { data, error, status, refresh } = useCustomFetch(
      `/events/${route.params.id}`
    );
    const endLiveEvent = () => {
      endEvent(route.params.id);
    };
    const active_tab = computed(
      () => {
        var _a;
        return (_a = route == null ? undefined : route.query) == null ? undefined : _a.request_tab;
      }
    );
    const eventID = computed(() => route.params.id);
    const pendingRequests = computed(
      () => {
        var _a, _b, _c, _d, _e;
        return ((_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.requests) ? (_e = (_d = (_c = data.value) == null ? undefined : _c.data) == null ? undefined : _d.requests) == null ? undefined : _e.filter((req) => req.status === "new") : [];
      }
    );
    const confirmMessage = computed(() => {
      var _a;
      const count = (_a = pendingRequests == null ? undefined : pendingRequests.value) == null ? undefined : _a.length;
      return count ? `Ending the event will reject all pending ${count} requests. Are you sure you want to end event?` : "Are you sure you want to end event?";
    });
    useSeoMeta({
      title: () => active_tab.value === "history" ? "Request History" : "Song and Hype Request List"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_SharedBackButton = _sfc_main$d;
      const _component_SharedLoadingArea = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        ending: unref(ending),
        onEndEvent: endLiveEvent,
        "start-date": (_a = unref(data)) == null ? undefined : _a.data.start_date,
        animate: ""
      }, null, _parent));
      _push(`<div class="container py-20"><div class="flex items-center gap-x-2">`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/dashboard" }, null, _parent));
      _push(`<div class="text-foreground font-medium text-lg">${ssrInterpolate((_c = (_b = unref(data)) == null ? undefined : _b.data) == null ? undefined : _c.title)}</div></div>`);
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        error: unref(error),
        class: "mt-8",
        loading: unref(ending)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3;
          var _a2, _b2, _c2, _d;
          if (_push2) {
            _push2(`<div class="grid xl:grid-cols-[1fr_auto] items-start gap-4"${_scopeId}><div class="xl:max-w-[900px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { event_id: unref(eventID) }, null, _parent2, _scopeId));
            _push2(`</div><div class="max-w-[700px] mx-auto w-full xl:w-[380px] relative"${_scopeId}>`);
            if (unref(status) === "pending") {
              _push2(`<div class="absolute inset-0 grid place-items-center bg-background/40"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$7, {
              services: (_a3 = (_b2 = (_a2 = unref(data)) == null ? undefined : _a2.data) == null ? undefined : _b2.types) != null ? _a3 : [],
              onUpdate: unref(refresh)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, {
              onConfirm: endLiveEvent,
              message: unref(confirmMessage)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4$1, {
                    class: "w-full mt-6",
                    variant: "destructive",
                    size: "lg",
                    loading: unref(ending)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` END EVENT `);
                      } else {
                        return [
                          createTextVNode(" END EVENT ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4$1, {
                      class: "w-full mt-6",
                      variant: "destructive",
                      size: "lg",
                      loading: unref(ending)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" END EVENT ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid xl:grid-cols-[1fr_auto] items-start gap-4" }, [
                createVNode("div", { class: "xl:max-w-[900px]" }, [
                  createVNode(_sfc_main$1, { event_id: unref(eventID) }, null, 8, ["event_id"])
                ]),
                createVNode("div", { class: "max-w-[700px] mx-auto w-full xl:w-[380px] relative" }, [
                  unref(status) === "pending" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute inset-0 grid place-items-center bg-background/40"
                  }, [
                    createVNode(unref(Loader), { class: "size-5 animate-spin" })
                  ])) : createCommentVNode("", true),
                  createVNode(_sfc_main$7, {
                    services: (_b3 = (_d = (_c2 = unref(data)) == null ? undefined : _c2.data) == null ? undefined : _d.types) != null ? _b3 : [],
                    onUpdate: unref(refresh)
                  }, null, 8, ["services", "onUpdate"]),
                  createVNode(_sfc_main$9, {
                    onConfirm: endLiveEvent,
                    message: unref(confirmMessage)
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4$1, {
                        class: "w-full mt-6",
                        variant: "destructive",
                        size: "lg",
                        loading: unref(ending)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" END EVENT ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  }, 8, ["message"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(event)/events/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-qyEo1b9Q.mjs.map
