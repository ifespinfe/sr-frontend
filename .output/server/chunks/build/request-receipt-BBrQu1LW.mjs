import { _ as _sfc_main$4 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$5 } from './loading-area-BCC1xwyu.mjs';
import { c as useRoute, e as useSeoMeta, k as cn, h as formatMoney, b as useAuth, v as getInitials, w as getHexColor, _ as _sfc_main$4$1, t as useRuntimeConfig, o as kh, M as Mh, F as Fh } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { useSSRContext, defineComponent, watch, computed, mergeProps, unref, createSlots, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './svg-icon-CvfuI_SP.mjs';
import { m as mockEventSpenders, _ as _sfc_main$7 } from './summary-pgNK0JTY.mjs';
import { _ as _sfc_main$8 } from './tooltip-BOPp73dK.mjs';
import { Download, CopyCheck, Copy, Loader } from 'lucide-vue-next';
import saveAs from 'file-saver';
import { u as useNodeToImage } from './useNodeToImage-Ci3SXweI.mjs';
import { u as useSocialShare } from './useSocialShare-ZpPVAG52.mjs';
import { p as promiseTimeout, u as useDateFormat } from './index-twTXuIJ-.mjs';
import { _ as _sfc_main$3 } from './avatar-BNYzPSiu.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
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
import './popover-DcCqGT5R.mjs';
import './index-CNLs9n-l.mjs';
import 'dom-to-image';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "request-receipt-item",
  __ssrInlineRender: true,
  props: {
    request: {},
    event: {},
    print: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const {
      public: { APP_BASE_URL }
    } = useRuntimeConfig();
    const eventDetails = computed(() => {
      var _a, _b, _c, _d;
      const event = {
        name: "Event",
        value: (_a = props.event) == null ? undefined : _a.title
      };
      const host = {
        name: "Host",
        value: (_b = props.request) == null ? undefined : _b.host.stage_name
      };
      const location = {
        name: "Location",
        value: (_c = props.event) == null ? undefined : _c.address
      };
      const date = {
        name: "Date",
        value: useDateFormat((_d = props.event) == null ? undefined : _d.start_date, "dddd, MMMM D, YYYY")
      };
      return [event, host, location, date];
    });
    const downloadReceipt = (blob) => {
      var _a;
      saveAs(blob, `spin-request-receipt-${(_a = props.event) == null ? undefined : _a.title}`);
    };
    const { converting, convertNodeToImage } = useNodeToImage(
      "#RECEIPT_PRINT",
      downloadReceipt
    );
    const shareTitle = computed(() => {
      var _a2;
      var _a, _b;
      return `I just made a ${(_a2 = (_a = props.request) == null ? undefined : _a.type) != null ? _a2 : "song"} request on SpinRequest. Join ${(_b = props.request) == null ? undefined : _b.host.stage_name} live event to make yours.`;
    });
    const shareLink = computed(() => {
      var _a2;
      var _a;
      return `${APP_BASE_URL}/${(_a2 = (_a = props.request) == null ? undefined : _a.host.slug) != null ? _a2 : ""}`;
    });
    const {
      copyLink,
      copied,
      whatsappShareLink,
      twitterShareLink,
      externalNavigate
    } = useSocialShare(shareLink, shareTitle);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_SvgIcon = _sfc_main$6;
      const _component_SharedSummary = _sfc_main$7;
      const _component_UiButton = _sfc_main$4$1;
      const _component_UiTooltip = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
          " rounded-xl",
          _ctx.print ? "p-4 border-2 border-primary bg-background" : "p-4 md:p-8 bg-white/5"
        )
      }, _attrs))}><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          "flex flex-col items-center gap-6",
          _ctx.print ? "" : "md:flex-row md:justify-between"
        )
      )}"><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))("text-center order-2", _ctx.print ? "" : "md:text-left md:order-1")
      )}"><div class="font-display text-3xl font-medium capitalize">${ssrInterpolate((_a = _ctx.request) == null ? undefined : _a.type)} Request receipt </div><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          "text-muted-foreground leading-tight my-2",
          _ctx.print ? "" : "md:w-3/4"
        )
      )}">${ssrInterpolate(((_b = _ctx.request) == null ? undefined : _b.type) === "hype" ? "Your request has been submitted, we will notify you when your hype has been performed" : "Your request has been submitted, we will notify you when your song has been played")}</div></div><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          "flex items-center shrink-0 text-primary gap-x-1 order-1",
          _ctx.print ? "" : "md:order-2"
        )
      )}">`);
      _push(ssrRenderComponent(_component_SvgIcon, { name: "spin-logo" }, null, _parent));
      _push(`<div class="text-base font-medium">SpinRequest</div></div></div><div class="space-y-4 my-4"><div class="py-4 px-6 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 border bg-white/5 rounded-2xl"><div class="space-y-1"><div class="text-muted-foreground">Total amount</div><div class="text-4xl font-semibold text-primary"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a2 = (_c = _ctx.request) == null ? undefined : _c.price) != null ? _a2 : 0))}</div></div><div class="space-y-px">`);
      if (((_d = _ctx.request) == null ? undefined : _d.type) === "hype") {
        _push(`<!--[--><div class="text-muted-foreground">Hype request for</div>`);
        _push(ssrRenderComponent(_component_SharedSummary, {
          class: "font-medium",
          content: (_b2 = (_e = _ctx.request) == null ? undefined : _e.description) != null ? _b2 : ""
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><div class="text-muted-foreground">Song title</div><div class="font-medium">${ssrInterpolate((_c2 = (_f = _ctx.request) == null ? undefined : _f.song_title) != null ? _c2 : "")}</div><div>by ${ssrInterpolate((_d2 = (_g = _ctx.request) == null ? undefined : _g.artist) != null ? _d2 : "")}</div><!--]-->`);
      }
      _push(`</div></div><div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4"><!--[-->`);
      ssrRenderList(unref(eventDetails), (item) => {
        _push(`<div class="p-4 rounded-2xl bg-white/5 border"><div class="space-y-px"><div class="text-muted-foreground">${ssrInterpolate(item.name)}</div><div>${ssrInterpolate(item.value)}</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (!_ctx.print) {
        _push(`<div class="grid grid-cols-[1fr,_auto,_auto,_auto] gap-4 items-center">`);
        _push(ssrRenderComponent(_component_UiButton, {
          size: "lg",
          class: "uppercase hidden sm:inline-flex",
          loading: unref(converting),
          onClick: unref(convertNodeToImage)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download Receipt <span class="hidden md:inline ml-1"${_scopeId}> &amp; loud IT</span>`);
            } else {
              return [
                createTextVNode(" Download Receipt "),
                createVNode("span", { class: "hidden md:inline ml-1" }, " & loud IT")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiTooltip, {
          message: "Download receipt and loud it",
          class: "sm:hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "icon",
                class: "uppercase sm:hidden",
                loading: unref(converting),
                onClick: unref(convertNodeToImage)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Download), { class: "size-4" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Download), { class: "size-4" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "icon",
                  class: "uppercase sm:hidden",
                  loading: unref(converting),
                  onClick: unref(convertNodeToImage)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Download), { class: "size-4" })
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiTooltip, { message: "Share to twitter/X" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "icon",
                variant: "secondary",
                class: "!size-[40px]",
                onClick: ($event) => unref(externalNavigate)(unref(twitterShareLink))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_SvgIcon, { name: "x" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_SvgIcon, { name: "x" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "secondary",
                  class: "!size-[40px]",
                  onClick: ($event) => unref(externalNavigate)(unref(twitterShareLink))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SvgIcon, { name: "x" })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiTooltip, { message: "Share to whatsapp" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "icon",
                variant: "secondary",
                class: "!size-[40px]",
                onClick: ($event) => unref(externalNavigate)(unref(whatsappShareLink))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_SvgIcon, {
                      name: "whatsapp",
                      class: "scale-[0.7]"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_SvgIcon, {
                        name: "whatsapp",
                        class: "scale-[0.7]"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "secondary",
                  class: "!size-[40px]",
                  onClick: ($event) => unref(externalNavigate)(unref(whatsappShareLink))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SvgIcon, {
                      name: "whatsapp",
                      class: "scale-[0.7]"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiTooltip, { message: "Copy link" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "icon",
                variant: "secondary",
                class: "!size-[40px]",
                onClick: unref(copyLink)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(copied)) {
                      _push3(ssrRenderComponent(unref(CopyCheck), { class: "text-muted-foreground size-4" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(Copy), { class: "text-muted-foreground size-4" }, null, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      unref(copied) ? (openBlock(), createBlock(unref(CopyCheck), {
                        key: 0,
                        class: "text-muted-foreground size-4"
                      })) : (openBlock(), createBlock(unref(Copy), {
                        key: 1,
                        class: "text-muted-foreground size-4"
                      }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "secondary",
                  class: "!size-[40px]",
                  onClick: unref(copyLink)
                }, {
                  default: withCtx(() => [
                    unref(copied) ? (openBlock(), createBlock(unref(CopyCheck), {
                      key: 0,
                      class: "text-muted-foreground size-4"
                    })) : (openBlock(), createBlock(unref(Copy), {
                      key: 1,
                      class: "text-muted-foreground size-4"
                    }))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/request-receipt-item.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "event-top-spenders",
  __ssrInlineRender: true,
  props: {
    spenders: { default: () => mockEventSpenders },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const handleSelection = (e) => {
      e.preventDefault();
    };
    const { authEmail } = useAuth();
    const sortedSpenders = computed(() => {
      if (!(props == null ? undefined : props.spenders)) return [];
      const spenders = props.spenders.map((spender, index) => {
        var _a, _b;
        return {
          ...spender,
          position: index + 1,
          active: spender.email === authEmail.value,
          name: (_b = (_a = spender == null ? undefined : spender.name) != null ? _a : spender == null ? undefined : spender.email) != null ? _b : ""
        };
      });
      const me = spenders.find((spender) => spender.email === authEmail.value);
      const topSixSpenders = spenders.slice(0, 6);
      const amongTopSix = !!me && topSixSpenders.some((spender) => spender.email === authEmail.value);
      if (me && !amongTopSix)
        topSixSpenders.splice(topSixSpenders.length - 1, 1, me);
      return topSixSpenders;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListboxRoot = kh;
      const _component_ListboxContent = Mh;
      const _component_ListboxItem = Fh;
      _push(ssrRenderComponent(_component_ListboxRoot, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListboxContent, { class: "relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="font-display text-3xl font-bold pb-4 border-b border-input"${_scopeId2}> Top Spenders </div><!--[-->`);
                  ssrRenderList(unref(sortedSpenders), (spender, index) => {
                    _push3(ssrRenderComponent(_component_ListboxItem, {
                      key: spender.user_id + spender.email,
                      value: spender.user_id + spender.email,
                      onSelect: handleSelection
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c, _d;
                        var _a, _b;
                        if (_push4) {
                          _push4(`<div class="grid grid-cols-[auto,_1fr,_auto] gap-4 items-center my-8"${_scopeId3}><div class="flex gap-x-4 items-center"${_scopeId3}><div class="relative bg-foreground size-[30px] rounded-full"${_scopeId3}><div class="place-center text-lg font-bold text-background"${_scopeId3}>${ssrInterpolate(spender.position)}</div></div>`);
                          _push4(ssrRenderComponent(_sfc_main$3, {
                            initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender.name),
                            class: "font-bold text-lg",
                            style: {
                              backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = spender == null ? undefined : spender.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                              color: "black"
                            }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="space-y-px"${_scopeId3}><div${_scopeId3}>${ssrInterpolate(spender.name)}</div>`);
                          if (spender.active) {
                            _push4(`<div class="text-[#FFEE99]"${_scopeId3}>You</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="font-semibold"${_scopeId3}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b2 = spender == null ? undefined : spender.total) != null ? _b2 : 0))}</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "grid grid-cols-[auto,_1fr,_auto] gap-4 items-center my-8" }, [
                              createVNode("div", { class: "flex gap-x-4 items-center" }, [
                                createVNode("div", { class: "relative bg-foreground size-[30px] rounded-full" }, [
                                  createVNode("div", { class: "place-center text-lg font-bold text-background" }, toDisplayString(spender.position), 1)
                                ]),
                                createVNode(_sfc_main$3, {
                                  initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender.name),
                                  class: "font-bold text-lg",
                                  style: {
                                    backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_c = (_b = spender == null ? undefined : spender.name) == null ? undefined : _b.charAt(0)) != null ? _c : "A"),
                                    color: "black"
                                  }
                                }, null, 8, ["initials", "style"])
                              ]),
                              createVNode("div", { class: "space-y-px" }, [
                                createVNode("div", null, toDisplayString(spender.name), 1),
                                spender.active ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-[#FFEE99]"
                                }, "You")) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_d = spender == null ? undefined : spender.total) != null ? _d : 0)), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (_ctx.loading) {
                    _push3(`<div class="py-20 absolute -top-2 inset-0 grid place-items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "font-display text-3xl font-bold pb-4 border-b border-input" }, " Top Spenders "),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sortedSpenders), (spender, index) => {
                      return openBlock(), createBlock(_component_ListboxItem, {
                        key: spender.user_id + spender.email,
                        value: spender.user_id + spender.email,
                        onSelect: handleSelection
                      }, {
                        default: withCtx(() => {
                          var _a2, _b;
                          var _a;
                          return [
                            createVNode("div", { class: "grid grid-cols-[auto,_1fr,_auto] gap-4 items-center my-8" }, [
                              createVNode("div", { class: "flex gap-x-4 items-center" }, [
                                createVNode("div", { class: "relative bg-foreground size-[30px] rounded-full" }, [
                                  createVNode("div", { class: "place-center text-lg font-bold text-background" }, toDisplayString(spender.position), 1)
                                ]),
                                createVNode(_sfc_main$3, {
                                  initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender.name),
                                  class: "font-bold text-lg",
                                  style: {
                                    backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = spender == null ? undefined : spender.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                    color: "black"
                                  }
                                }, null, 8, ["initials", "style"])
                              ]),
                              createVNode("div", { class: "space-y-px" }, [
                                createVNode("div", null, toDisplayString(spender.name), 1),
                                spender.active ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-[#FFEE99]"
                                }, "You")) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = spender == null ? undefined : spender.total) != null ? _b : 0)), 1)
                            ])
                          ];
                        }),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128)),
                    _ctx.loading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "py-20 absolute -top-2 inset-0 grid place-items-center"
                    }, [
                      createVNode(unref(Loader), { class: "size-4 animate-spin" })
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListboxContent, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "font-display text-3xl font-bold pb-4 border-b border-input" }, " Top Spenders "),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sortedSpenders), (spender, index) => {
                    return openBlock(), createBlock(_component_ListboxItem, {
                      key: spender.user_id + spender.email,
                      value: spender.user_id + spender.email,
                      onSelect: handleSelection
                    }, {
                      default: withCtx(() => {
                        var _a2, _b;
                        var _a;
                        return [
                          createVNode("div", { class: "grid grid-cols-[auto,_1fr,_auto] gap-4 items-center my-8" }, [
                            createVNode("div", { class: "flex gap-x-4 items-center" }, [
                              createVNode("div", { class: "relative bg-foreground size-[30px] rounded-full" }, [
                                createVNode("div", { class: "place-center text-lg font-bold text-background" }, toDisplayString(spender.position), 1)
                              ]),
                              createVNode(_sfc_main$3, {
                                initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender.name),
                                class: "font-bold text-lg",
                                style: {
                                  backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = spender == null ? undefined : spender.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                  color: "black"
                                }
                              }, null, 8, ["initials", "style"])
                            ]),
                            createVNode("div", { class: "space-y-px" }, [
                              createVNode("div", null, toDisplayString(spender.name), 1),
                              spender.active ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-[#FFEE99]"
                              }, "You")) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = spender == null ? undefined : spender.total) != null ? _b : 0)), 1)
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128)),
                  _ctx.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "py-20 absolute -top-2 inset-0 grid place-items-center"
                  }, [
                    createVNode(unref(Loader), { class: "size-4 animate-spin" })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/event-top-spenders.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "request-receipt",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    var _a;
    const route = useRoute();
    const { data, status, error } = useCustomFetch(
      `events/${route.params.event_id}`
    );
    const reference = (_a2 = (_a = route == null ? undefined : route.query) == null ? undefined : _a.reference) != null ? _a2 : "";
    const {
      data: verification,
      status: verification_status,
      error: verification_error,
      refresh
    } = useCustomFetch(`transactions/${reference}/verify`, {
      immediate: !!reference
    });
    const {
      data: top_spenders,
      status: top_spenders_status,
      refresh: refreshTopSpenders
    } = useCustomFetch(
      `/events/top/spenders/${route.params.event_id}?includeLiveEvent=1`
    );
    watch(
      () => verification_status.value,
      async (data2) => {
        await promiseTimeout(500);
        data2 === "success" && refreshTopSpenders();
      },
      {
        immediate: true
      }
    );
    const loading = computed(
      () => status.value === "pending" || verification_status.value === "pending"
    );
    const pageError = computed(() => {
      var _a3;
      return (_a3 = error.value) != null ? _a3 : verification_error.value;
    });
    const request_id = route.params.request_id;
    const request = computed(() => {
      var _a22;
      return (_a22 = data.value) == null ? undefined : _a22.data.requests.find(
        (item) => `${item.id}` === `${request_id}`
      );
    });
    useSeoMeta({
      title: "Request Receipt"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$4;
      const _component_SharedLoadingArea = _sfc_main$5;
      const _component_UiButton = _sfc_main$4$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pb-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        class: "fixed top-20",
        to: `/${unref(route).params.host}`
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(loading),
        error: unref(pageError)
      }, createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          var _a22, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-x-20 gap-y-6 mt-20"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              request: unref(request),
              event: (_a22 = unref(data)) == null ? undefined : _a22.data
            }, null, _parent2, _scopeId));
            _push2(`<div class="absolute w-[450px] h-0 overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              request: unref(request),
              event: (_b = unref(data)) == null ? undefined : _b.data,
              print: "",
              id: "RECEIPT_PRINT"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-center my-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `/${unref(route).params.host}`,
              class: "underline hover:no-underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` CONTINUE `);
                } else {
                  return [
                    createTextVNode(" CONTINUE ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              loading: unref(top_spenders_status) === "pending",
              spenders: (_a3 = (_c = unref(top_spenders)) == null ? undefined : _c.data) != null ? _a3 : []
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-x-20 gap-y-6 mt-20" }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$2, {
                    request: unref(request),
                    event: (_d = unref(data)) == null ? undefined : _d.data
                  }, null, 8, ["request", "event"]),
                  createVNode("div", { class: "absolute w-[450px] h-0 overflow-hidden" }, [
                    createVNode(_sfc_main$2, {
                      request: unref(request),
                      event: (_e = unref(data)) == null ? undefined : _e.data,
                      print: "",
                      id: "RECEIPT_PRINT"
                    }, null, 8, ["request", "event"])
                  ]),
                  createVNode("div", { class: "flex justify-center my-4" }, [
                    createVNode(_component_NuxtLink, {
                      to: `/${unref(route).params.host}`,
                      class: "underline hover:no-underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" CONTINUE ")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_sfc_main$1, {
                    loading: unref(top_spenders_status) === "pending",
                    spenders: (_b2 = (_f = unref(top_spenders)) == null ? undefined : _f.data) != null ? _b2 : []
                  }, null, 8, ["loading", "spenders"])
                ])
              ])
            ];
          }
        }),
        _: 2
      }, [
        unref(verification_error) ? {
          name: "error",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            var _a22, _b, _c, _d;
            if (_push2) {
              _push2(`<div class="place-center text-center grid place-items-center gap-4"${_scopeId}><div class="text-destructive text-clip"${_scopeId}>${ssrInterpolate((_a3 = (_b = (_a22 = unref(verification_error)) == null ? undefined : _a22.data) == null ? undefined : _b.message) != null ? _a3 : "Payment verification failed")}</div>`);
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "outline",
                onClick: unref(refresh),
                loading: unref(loading)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Confirm again `);
                  } else {
                    return [
                      createTextVNode(" Confirm again ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "place-center text-center grid place-items-center gap-4" }, [
                  createVNode("div", { class: "text-destructive text-clip" }, toDisplayString((_b2 = (_d = (_c = unref(verification_error)) == null ? undefined : _c.data) == null ? undefined : _d.message) != null ? _b2 : "Payment verification failed"), 1),
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    onClick: unref(refresh),
                    loading: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm again ")
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ])
              ];
            }
          }),
          key: "0"
        } : undefined
      ]), _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[host]/[event_id]/[request_id]/request-receipt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=request-receipt-BBrQu1LW.mjs.map
