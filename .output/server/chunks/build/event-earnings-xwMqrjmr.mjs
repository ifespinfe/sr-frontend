import { _ as _sfc_main$6 } from './back-button-CIinn8c8.mjs';
import { _ as _sfc_main$7 } from './loading-area-BCC1xwyu.mjs';
import { _ as _sfc_main$8 } from './svg-icon-CvfuI_SP.mjs';
import { c as useRoute, r as readableTimeDifference, e as useSeoMeta, k as cn, h as formatMoney, _ as _sfc_main$4$1, y as yg, i as gg, C as Cg, j as bg } from './server.mjs';
import { _ as _sfc_main$9 } from './tooltip-BOPp73dK.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { CopyCheck, Copy } from 'lucide-vue-next';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { Chart, Title, Tooltip, Legend, PointElement, CategoryScale, LinearScale, LineElement } from 'chart.js';
import { u as useDateFormat, p as promiseTimeout } from './index-twTXuIJ-.mjs';
import saveAs from 'file-saver';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { u as useNodeToImage } from './useNodeToImage-Ci3SXweI.mjs';
import { u as useSocialShare } from './useSocialShare-ZpPVAG52.mjs';
import './nuxt-link-BvHIOyM7.mjs';
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
import 'dom-to-image';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "line-graph",
  __ssrInlineRender: true,
  props: {
    history: {},
    type: {}
  },
  setup(__props) {
    Chart.register(
      Title,
      Tooltip,
      Legend,
      PointElement,
      CategoryScale,
      LinearScale,
      LineElement
    );
    const props = __props;
    const normalizedPriceTimes = computed(() => {
      var _a;
      if (!((_a = props.history) == null ? undefined : _a.length)) return [];
      return [...props.history].map((item) => {
        const [hours, minutes] = useDateFormat(item.created_at, "H_m").value.split("_").map(Number);
        const normalized_time = (hours * 60 + minutes) / 1440;
        return {
          ...item,
          x: normalized_time,
          y: Number(item.new_price)
        };
      }).sort((a, b) => b.x - a.x).filter((item) => item.new_price !== item.old_price);
    });
    const normalizedHypePriceTimes = computed(() => {
      return normalizedPriceTimes.value.filter((item) => item.type === "hype");
    });
    const normalizedSongPriceTimes = computed(() => {
      return normalizedPriceTimes.value.filter((item) => item.type === "song");
    });
    const datasets = computed(() => {
      const type = props.type;
      switch (type) {
        case "both":
          return [
            {
              label: "Hype",
              data: [...normalizedHypePriceTimes.value],
              borderColor: "#FFEE99",
              borderWidth: 1,
              backgroundColor: "#FFEE99",
              tension: 0.5
            },
            {
              label: "Song",
              data: [...normalizedSongPriceTimes.value],
              borderColor: "#FF99F1",
              borderWidth: 1,
              tension: 0.5,
              backgroundColor: "#FF99F1"
            }
          ];
        case "hype":
          return [
            {
              label: "Hype",
              data: [...normalizedHypePriceTimes.value],
              borderColor: "#FFEE99",
              borderWidth: 1,
              backgroundColor: "#FFEE99",
              tension: 0.5
            }
          ];
        default:
          return [
            {
              label: "Song",
              data: [...normalizedSongPriceTimes.value],
              borderColor: "#FF99F1",
              borderWidth: 1,
              tension: 0.5,
              backgroundColor: "#FF99F1"
            }
          ];
      }
    });
    computed(() => {
      return {
        datasets: [...datasets.value]
      };
    });
    computed(() => {
      return {
        scales: {
          x: {
            type: "linear",
            ticks: {
              callback(normalized) {
                const totalMinutes = Math.round(normalized * 1440);
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                return `${String(hours).padStart(2, "0")}:${String(
                  minutes
                ).padStart(2, "0")}`;
              }
            }
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#000",
            titleFont: { weight: 400, size: 15 },
            titleMarginBottom: 10,
            bodyColor: "#000",
            boxPadding: 10,
            padding: 10,
            caretSize: 10,
            cornerRadius: 14,
            callbacks: {
              title(tooltipItems) {
                const normalizedValue = tooltipItems[0].parsed.x;
                const totalMinutes = Math.round(normalizedValue * 1440);
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                return `${String(hours).padStart(2, "0")}:${String(
                  minutes
                ).padStart(2, "0")}`;
              }
            }
          }
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/price-history/line-graph.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "all",
  __ssrInlineRender: true,
  props: {
    history: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        history: _ctx.history,
        type: "both"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/price-history/all.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "hypes",
  __ssrInlineRender: true,
  props: {
    history: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        history: _ctx.history,
        type: "hype"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/price-history/hypes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "song",
  __ssrInlineRender: true,
  props: {
    history: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        history: _ctx.history,
        type: "song"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/price-history/song.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tab",
  __ssrInlineRender: true,
  props: {
    history: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsRoot = yg;
      const _component_TabsList = gg;
      const _component_TabsTrigger = Cg;
      const _component_TabsContent = bg;
      _push(ssrRenderComponent(_component_TabsRoot, mergeProps({ "default-value": "all" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-lg font-semibold"${_scopeId}>Price history</div>`);
            _push2(ssrRenderComponent(_component_TabsList, { class: "rounded-full flex text-sm p-1 bg-background/20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    value: "all",
                    class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` All `);
                      } else {
                        return [
                          createTextVNode(" All ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    value: "songs",
                    class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Songs `);
                      } else {
                        return [
                          createTextVNode(" Songs ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    value: "hypes",
                    class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Hypes `);
                      } else {
                        return [
                          createTextVNode(" Hypes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, {
                      value: "all",
                      class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" All ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, {
                      value: "songs",
                      class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Songs ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, {
                      value: "hypes",
                      class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Hypes ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_TabsContent, { value: "all" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, { history: _ctx.history }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, { history: _ctx.history }, null, 8, ["history"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "songs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$2, { history: _ctx.history }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$2, { history: _ctx.history }, null, 8, ["history"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "hypes" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, { history: _ctx.history }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, { history: _ctx.history }, null, 8, ["history"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", { class: "text-lg font-semibold" }, "Price history"),
                createVNode(_component_TabsList, { class: "rounded-full flex text-sm p-1 bg-background/20" }, {
                  default: withCtx(() => [
                    createVNode(_component_TabsTrigger, {
                      value: "all",
                      class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" All ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, {
                      value: "songs",
                      class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Songs ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, {
                      value: "hypes",
                      class: "rounded-[inherit] min-w-[45px] px-2 py-1 hover:bg-secondary data-[state='active']:bg-primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Hypes ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_TabsContent, { value: "all" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, { history: _ctx.history }, null, 8, ["history"])
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, { value: "songs" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, { history: _ctx.history }, null, 8, ["history"])
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, { value: "hypes" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, { history: _ctx.history }, null, 8, ["history"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/price-history/tab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const APP_BASE_URL = "https://dev.spinrequest.com";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-earnings",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { data, error, status, refresh } = useCustomFetch(`/events/receipt/${route.params.id}`);
    const eventDetails = computed(() => {
      var _a2, _b2;
      var _a, _b, _c, _d;
      const today = /* @__PURE__ */ new Date();
      const duration = {
        name: "Duration",
        value: readableTimeDifference(
          (_a2 = (_a = data.value) == null ? undefined : _a.data.event.start_date) != null ? _a2 : today,
          (_b2 = (_b = data.value) == null ? undefined : _b.data.event.end_date) != null ? _b2 : today
        )
      };
      const location = {
        name: "Location",
        value: (_c = data.value) == null ? undefined : _c.data.event.address
      };
      const date = {
        name: "Date",
        value: useDateFormat(
          (_d = data.value) == null ? undefined : _d.data.event.start_date,
          "dddd, MMMM D, YYYY"
        )
      };
      return [duration, location, date];
    });
    const ready_to_print = ref(false);
    const downloadReceipt = (blob) => {
      var _a2;
      var _a, _b, _c;
      saveAs(blob, `spin-event-summary-${(_a2 = (_c = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.event) == null ? undefined : _c.title) != null ? _a2 : ""}`);
    };
    const { converting, convertNodeToImage } = useNodeToImage(
      "#EVENT_SUMMARY",
      downloadReceipt,
      ["PRICE-HISTORY", "SHARE-BUTTON", "ACTION-ROW"]
    );
    const loadEventReceipt = async () => {
      ready_to_print.value = true;
      convertNodeToImage();
      await promiseTimeout(1);
      ready_to_print.value = false;
    };
    const shareTitle = computed(() => {
      return "I just hosted an event on Spin request. Follow me here and put on my post notifcation";
    });
    const shareLink = computed(() => {
      return `${APP_BASE_URL}`;
    });
    const {
      copyLink,
      copied,
      whatsappShareLink,
      twitterShareLink,
      externalNavigate
    } = useSocialShare(shareLink, shareTitle);
    useSeoMeta({
      title: "Event Earnings"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$6;
      const _component_SharedLoadingArea = _sfc_main$7;
      const _component_SvgIcon = _sfc_main$8;
      const _component_UiButton = _sfc_main$4$1;
      const _component_UiTooltip = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pb-20 pt-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        class: "fixed top-24",
        to: "/dashboard"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(
              ("cn" in _ctx ? _ctx.cn : unref(cn))(
                unref(ready_to_print) ? "bg-background w-[850px]" : " bg-white/5 max-w-full w-[867px] mx-auto",
                "rounded-3xl border p-4 sm:p-10"
              )
            )}" id="EVENT_SUMMARY"${_scopeId}><div class="text-3xl font-semibold mb-1"${_scopeId}>${ssrInterpolate((_a = unref(data)) == null ? undefined : _a.data.event.title)}</div><div class="text-muted-foreground"${_scopeId}>Event sum</div><div class="space-y-4 mt-6"${_scopeId}><div class="p-2 sm:p-4 rounded-xl border bg-white/5 grid gap-y-4 md:grid-cols-[2fr_3fr]"${_scopeId}><div class="space-y-2"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Amount earned</div><div class="text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a2 = (_b = unref(data)) == null ? undefined : _b.data.total_earnings) != null ? _a2 : 0))}</div></div><div class="space-y-4 pt-4 border-t md:pl-6 md:pt-0 md:border-t-0 md:border-l border-muted-foreground/20"${_scopeId}><div class="grid grid-cols-[30px_60px_110px_130px] items-center gap-x-2"${_scopeId}><div class="aspect-square rounded-full bg-[#FF99F1]/10 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SvgIcon, {
              name: "mic",
              class: "place-center scale-50"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-lg font-medium"${_scopeId}>Hypes</div><div class="text-muted-foreground"${_scopeId}>${ssrInterpolate((_b2 = (_g = (_f = (_e = (_d = (_c = unref(data)) == null ? undefined : _c.data) == null ? undefined : _d.event) == null ? undefined : _e.types) == null ? undefined : _f.hype) == null ? undefined : _g.count) != null ? _b2 : 0)} requests </div><div class="tabular-nums text-muted-foreground"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(
              (_c2 = (_l = (_k = (_j = (_i = (_h = unref(data)) == null ? undefined : _h.data) == null ? undefined : _i.event) == null ? undefined : _j.types) == null ? undefined : _k.hype) == null ? undefined : _l.total_price) != null ? _c2 : 0
            ))}</div></div><div class="grid grid-cols-[30px_60px_110px_130px] items-center gap-x-2"${_scopeId}><div class="aspect-square rounded-full bg-[#FF99F1]/10 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SvgIcon, {
              name: "music",
              class: "place-center scale-50"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-lg font-medium"${_scopeId}>Songs</div><div class="text-muted-foreground"${_scopeId}>${ssrInterpolate((_d2 = (_q = (_p = (_o = (_n = (_m = unref(data)) == null ? undefined : _m.data) == null ? undefined : _n.event) == null ? undefined : _o.types) == null ? undefined : _p.song) == null ? undefined : _q.count) != null ? _d2 : 0)} requests </div><div class="tabular-nums text-muted-foreground"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(
              (_e2 = (_v = (_u = (_t = (_s = (_r = unref(data)) == null ? undefined : _r.data) == null ? undefined : _s.event) == null ? undefined : _t.types) == null ? undefined : _u.song) == null ? undefined : _v.total_price) != null ? _e2 : 0
            ))}</div></div></div></div><div class="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(eventDetails), (item) => {
              _push2(`<div class="p-4 rounded-2xl bg-white/5 border"${_scopeId}><div class="space-y-px"${_scopeId}><div class="text-muted-foreground"${_scopeId}>${ssrInterpolate(item.name)}</div><div${_scopeId}>${ssrInterpolate(item.value)}</div></div></div>`);
            });
            _push2(`<!--]--></div><div class="rounded-3xl border p-4 bg-white/5"${_scopeId}><div class="flex justify-between items-center mb-4"${_scopeId}><div class="text-lg font-semibold"${_scopeId}>Top Spenders</div>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "ghost",
              class: "gap-x-2 translate-x-4",
              id: "SHARE-BUTTON",
              onClick: unref(refresh)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>Share</div>`);
                  _push3(ssrRenderComponent(_component_SvgIcon, { name: "share" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, "Share"),
                    createVNode(_component_SvgIcon, { name: "share" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] gap-6"${_scopeId}><!--[-->`);
            ssrRenderList((_w = unref(data)) == null ? undefined : _w.data.top_spenders, (spender, index) => {
              var _a3;
              _push2(`<div class="grid grid-cols-[10px_1fr_auto] gap-x-2 text-muted-foreground"${_scopeId}><div class="text-foreground/80"${_scopeId}>${ssrInterpolate(index + 1)}.</div><div${_scopeId}>${ssrInterpolate((_a3 = spender == null ? undefined : spender.name) != null ? _a3 : spender.email)}</div><div${_scopeId}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(spender.total))}</div></div>`);
            });
            _push2(`<!--]-->`);
            if (!((_z = (_y = (_x = unref(data)) == null ? undefined : _x.data) == null ? undefined : _y.top_spenders) == null ? undefined : _z.length)) {
              _push2(`<div class="p-8 text-center col-span-full"${_scopeId}> Sorry, no one paid for this event. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="rounded-3xl border p-4 bg-white/5" id="PRICE-HISTORY"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              history: (_A = unref(data)) == null ? undefined : _A.data.price_histories
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-[1fr,_auto,_auto,_auto] gap-4 items-center" id="ACTION-ROW"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              size: "lg",
              class: "uppercase",
              loading: unref(converting),
              onClick: loadEventReceipt
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Download Receipt `);
                } else {
                  return [
                    createTextVNode(" Download Receipt ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTooltip, { message: "Share to twitter/X" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "icon",
                    variant: "secondary",
                    class: "!size-[40px]",
                    onClick: ($event) => unref(externalNavigate)(unref(twitterShareLink))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SvgIcon, { name: "x" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SvgIcon, { name: "x" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTooltip, { message: "Share to whatsapp" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "icon",
                    variant: "secondary",
                    class: "!size-[40px]",
                    onClick: ($event) => unref(externalNavigate)(unref(whatsappShareLink))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SvgIcon, {
                          name: "whatsapp",
                          class: "scale-[0.7]"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTooltip, { message: "Copy link" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "icon",
                    variant: "secondary",
                    class: "!size-[40px]",
                    onClick: unref(copyLink)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(copied)) {
                          _push4(ssrRenderComponent(unref(CopyCheck), { class: "text-muted-foreground size-4" }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(Copy), { class: "text-muted-foreground size-4" }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                  unref(ready_to_print) ? "bg-background w-[850px]" : " bg-white/5 max-w-full w-[867px] mx-auto",
                  "rounded-3xl border p-4 sm:p-10"
                ),
                id: "EVENT_SUMMARY"
              }, [
                createVNode("div", { class: "text-3xl font-semibold mb-1" }, toDisplayString((_B = unref(data)) == null ? undefined : _B.data.event.title), 1),
                createVNode("div", { class: "text-muted-foreground" }, "Event sum"),
                createVNode("div", { class: "space-y-4 mt-6" }, [
                  createVNode("div", { class: "p-2 sm:p-4 rounded-xl border bg-white/5 grid gap-y-4 md:grid-cols-[2fr_3fr]" }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("div", { class: "text-muted-foreground" }, "Amount earned"),
                      createVNode("div", { class: "text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_f2 = (_C = unref(data)) == null ? undefined : _C.data.total_earnings) != null ? _f2 : 0)), 1)
                    ]),
                    createVNode("div", { class: "space-y-4 pt-4 border-t md:pl-6 md:pt-0 md:border-t-0 md:border-l border-muted-foreground/20" }, [
                      createVNode("div", { class: "grid grid-cols-[30px_60px_110px_130px] items-center gap-x-2" }, [
                        createVNode("div", { class: "aspect-square rounded-full bg-[#FF99F1]/10 relative" }, [
                          createVNode(_component_SvgIcon, {
                            name: "mic",
                            class: "place-center scale-50"
                          })
                        ]),
                        createVNode("div", { class: "text-lg font-medium" }, "Hypes"),
                        createVNode("div", { class: "text-muted-foreground" }, toDisplayString((_g2 = (_H = (_G = (_F = (_E = (_D = unref(data)) == null ? undefined : _D.data) == null ? undefined : _E.event) == null ? undefined : _F.types) == null ? undefined : _G.hype) == null ? undefined : _H.count) != null ? _g2 : 0) + " requests ", 1),
                        createVNode("div", { class: "tabular-nums text-muted-foreground" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(
                          (_h2 = (_M = (_L = (_K = (_J = (_I = unref(data)) == null ? undefined : _I.data) == null ? undefined : _J.event) == null ? undefined : _K.types) == null ? undefined : _L.hype) == null ? undefined : _M.total_price) != null ? _h2 : 0
                        )), 1)
                      ]),
                      createVNode("div", { class: "grid grid-cols-[30px_60px_110px_130px] items-center gap-x-2" }, [
                        createVNode("div", { class: "aspect-square rounded-full bg-[#FF99F1]/10 relative" }, [
                          createVNode(_component_SvgIcon, {
                            name: "music",
                            class: "place-center scale-50"
                          })
                        ]),
                        createVNode("div", { class: "text-lg font-medium" }, "Songs"),
                        createVNode("div", { class: "text-muted-foreground" }, toDisplayString((_i2 = (_R = (_Q = (_P = (_O = (_N = unref(data)) == null ? undefined : _N.data) == null ? undefined : _O.event) == null ? undefined : _P.types) == null ? undefined : _Q.song) == null ? undefined : _R.count) != null ? _i2 : 0) + " requests ", 1),
                        createVNode("div", { class: "tabular-nums text-muted-foreground" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(
                          (_j2 = (_W = (_V = (_U = (_T = (_S = unref(data)) == null ? undefined : _S.data) == null ? undefined : _T.event) == null ? undefined : _U.types) == null ? undefined : _V.song) == null ? undefined : _W.total_price) != null ? _j2 : 0
                        )), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(eventDetails), (item) => {
                      return openBlock(), createBlock("div", {
                        class: "p-4 rounded-2xl bg-white/5 border",
                        key: item.name
                      }, [
                        createVNode("div", { class: "space-y-px" }, [
                          createVNode("div", { class: "text-muted-foreground" }, toDisplayString(item.name), 1),
                          createVNode("div", null, toDisplayString(item.value), 1)
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "rounded-3xl border p-4 bg-white/5" }, [
                    createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                      createVNode("div", { class: "text-lg font-semibold" }, "Top Spenders"),
                      createVNode(_component_UiButton, {
                        variant: "ghost",
                        class: "gap-x-2 translate-x-4",
                        id: "SHARE-BUTTON",
                        onClick: unref(refresh)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, "Share"),
                          createVNode(_component_SvgIcon, { name: "share" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] gap-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_X = unref(data)) == null ? undefined : _X.data.top_spenders, (spender, index) => {
                        var _a3;
                        return openBlock(), createBlock("div", {
                          class: "grid grid-cols-[10px_1fr_auto] gap-x-2 text-muted-foreground",
                          key: spender.user_id
                        }, [
                          createVNode("div", { class: "text-foreground/80" }, toDisplayString(index + 1) + ".", 1),
                          createVNode("div", null, toDisplayString((_a3 = spender == null ? undefined : spender.name) != null ? _a3 : spender.email), 1),
                          createVNode("div", null, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(spender.total)), 1)
                        ]);
                      }), 128)),
                      !((__ = (_Z = (_Y = unref(data)) == null ? undefined : _Y.data) == null ? undefined : _Z.top_spenders) == null ? undefined : __.length) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-8 text-center col-span-full"
                      }, " Sorry, no one paid for this event. ")) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", {
                    class: "rounded-3xl border p-4 bg-white/5",
                    id: "PRICE-HISTORY"
                  }, [
                    createVNode(_sfc_main$1, {
                      history: (_$ = unref(data)) == null ? undefined : _$.data.price_histories
                    }, null, 8, ["history"])
                  ]),
                  createVNode("div", {
                    class: "grid grid-cols-[1fr,_auto,_auto,_auto] gap-4 items-center",
                    id: "ACTION-ROW"
                  }, [
                    createVNode(_component_UiButton, {
                      size: "lg",
                      class: "uppercase",
                      loading: unref(converting),
                      onClick: loadEventReceipt
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Download Receipt ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(_component_UiTooltip, { message: "Share to twitter/X" }, {
                      default: withCtx(() => [
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
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTooltip, { message: "Share to whatsapp" }, {
                      default: withCtx(() => [
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
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTooltip, { message: "Copy link" }, {
                      default: withCtx(() => [
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
                      ]),
                      _: 1
                    })
                  ])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(event)/events/[id]/event-earnings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=event-earnings-xwMqrjmr.mjs.map
