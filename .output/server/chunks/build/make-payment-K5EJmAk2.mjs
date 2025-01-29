import { _ as _sfc_main$2 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$3 } from './loading-area-BCC1xwyu.mjs';
import { _ as _sfc_main$4 } from './summary-pgNK0JTY.mjs';
import { c as useRoute, e as useSeoMeta, h as formatMoney, k as cn, _ as _sfc_main$4$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './svg-icon-CvfuI_SP.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { u as useLiveEvent } from './useLiveEvent-DFcZSU5e.mjs';
import './nuxt-link-Dggp6fVd.mjs';
import 'lucide-vue-next';
import './popover-DcCqGT5R.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "make-payment",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { status, data, error } = useCustomFetch(
      `/requests/${route.params.request_id}`
    );
    const {
      status: walletStatus,
      data: wallet,
      error: walletError
    } = useCustomFetch("/wallets");
    const request = computed(() => {
      var _a;
      return (_a = data.value) == null ? undefined : _a.data;
    });
    const sufficient = computed(() => {
      var _a2, _b2;
      var _a, _b;
      return Number((_a2 = (_a = wallet.value) == null ? undefined : _a.wallet_balance) != null ? _a2 : 0) >= Number((_b2 = (_b = request.value) == null ? undefined : _b.price) != null ? _b2 : 0);
    });
    const { payForRequest, paying } = useLiveEvent();
    const balance = computed(() => {
      var _a2, _b2;
      var _a, _b;
      const remainder = Number((_a2 = (_a = request.value) == null ? undefined : _a.price) != null ? _a2 : 0) - Number((_b2 = (_b = wallet.value) == null ? undefined : _b.wallet_balance) != null ? _b2 : 0);
      return remainder < 0 ? 0 : remainder;
    });
    const makePayment = () => {
      var _a2;
      var _a;
      if (request.value) {
        payForRequest(
          request.value,
          route.params.host,
          (_a2 = (_a = wallet.value) == null ? undefined : _a.wallet_balance) != null ? _a2 : 0
        );
      }
    };
    useSeoMeta({
      title: "Payment"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SharedBackButton = _sfc_main$2;
      const _component_SharedLoadingArea = _sfc_main$3;
      const _component_SharedSummary = _sfc_main$4;
      const _component_UiButton = _sfc_main$4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        class: "fixed top-20",
        to: `/${unref(route).params.host}/${unref(route).params.event_id}/make-a-request`
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending" || unref(walletStatus) === "pending",
        error: (_a = unref(error)) != null ? _a : unref(walletError)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2;
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<div class="max-w-full w-[400px] mx-auto"${_scopeId}><div class="text-primary text-center"${_scopeId}>Payment</div><div class="text-center font-display font-semibold text-3xl my-6"${_scopeId}> Make payment to submit your request </div><div class="bg-white/5 border rounded-2xl p-6"${_scopeId}><div class="pb-6 space-y-1 text-center border-b"${_scopeId}><div class="text-muted-foreground text-sm"${_scopeId}>Total amount</div><div class="font-bold text-primary text-4xl"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a3 = (_a2 = unref(request)) == null ? undefined : _a2.price) != null ? _a3 : 0))}</div></div><div class="my-6 space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>Request</div><div class="${ssrRenderClass(
              ("cn" in _ctx ? _ctx.cn : unref(cn))(
                "px-1 rounded-[26px] flex items-center gap-x-px text-xs min-w-[120px] max-h-6",
                ((_b = unref(request)) == null ? undefined : _b.type) === "song" ? "bg-[#FFEE99]/20" : "bg-[#FF99F1]/20"
              )
            )}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              name: ((_c = unref(request)) == null ? undefined : _c.type) === "song" ? "music" : "mic",
              class: "scale-50"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>${ssrInterpolate(((_d = unref(request)) == null ? undefined : _d.type) === "song" ? "SONG" : "HYPE")} REQUEST </div></div></div>`);
            if (((_e = unref(request)) == null ? undefined : _e.type) === "hype") {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>Hype</div>`);
              _push2(ssrRenderComponent(_component_SharedSummary, {
                content: (_b2 = (_f = unref(request)) == null ? undefined : _f.description) != null ? _b2 : "",
                class: "max-w-[50%] text-right"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_g = unref(request)) == null ? undefined : _g.type) === "song") {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>Title</div>`);
              _push2(ssrRenderComponent(_component_SharedSummary, {
                content: (_c2 = (_h = unref(request)) == null ? undefined : _h.song_title) != null ? _c2 : "",
                class: "max-w-[50%] text-right"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_i = unref(request)) == null ? undefined : _i.type) === "song") {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>Artsite</div>`);
              _push2(ssrRenderComponent(_component_SharedSummary, {
                content: (_d2 = (_j = unref(request)) == null ? undefined : _j.artist) != null ? _d2 : "",
                class: "max-w-[50%] text-right"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>Your nickname</div><div${_scopeId}>${ssrInterpolate((_f2 = (_e2 = (_k = unref(request)) == null ? undefined : _k.nickname) != null ? _e2 : (_m = (_l = unref(request)) == null ? undefined : _l.audience) == null ? undefined : _m.stage_name) != null ? _f2 : "")}</div></div></div><div class="bg-white/5 border pt-1 pb-8 rounded-tr-3xl rounded-tl-3xl"${_scopeId}><div class="flex justify-center items-center gap-x-2"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Spin request balance</div><div class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(unref(sufficient) ? "text-[#38F08D]" : "text-[#E66840]"))}"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_g2 = (_n = unref(wallet)) == null ? undefined : _n.wallet_balance) != null ? _g2 : 0))}</div></div></div>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              size: "lg",
              class: "relative -translate-y-7 w-full",
              onClick: makePayment,
              loading: unref(paying)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b3;
                if (_push3) {
                  _push3(` PAY \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a4 = unref(balance)) != null ? _a4 : 0))}`);
                } else {
                  return [
                    createTextVNode(" PAY \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b3 = unref(balance)) != null ? _b3 : 0)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-full w-[400px] mx-auto" }, [
                createVNode("div", { class: "text-primary text-center" }, "Payment"),
                createVNode("div", { class: "text-center font-display font-semibold text-3xl my-6" }, " Make payment to submit your request "),
                createVNode("div", { class: "bg-white/5 border rounded-2xl p-6" }, [
                  createVNode("div", { class: "pb-6 space-y-1 text-center border-b" }, [
                    createVNode("div", { class: "text-muted-foreground text-sm" }, "Total amount"),
                    createVNode("div", { class: "font-bold text-primary text-4xl" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_h2 = (_o = unref(request)) == null ? undefined : _o.price) != null ? _h2 : 0)), 1)
                  ]),
                  createVNode("div", { class: "my-6 space-y-4" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm text-muted-foreground" }, "Request"),
                      createVNode("div", {
                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                          "px-1 rounded-[26px] flex items-center gap-x-px text-xs min-w-[120px] max-h-6",
                          ((_p = unref(request)) == null ? undefined : _p.type) === "song" ? "bg-[#FFEE99]/20" : "bg-[#FF99F1]/20"
                        )
                      }, [
                        createVNode(_sfc_main$1, {
                          name: ((_q = unref(request)) == null ? undefined : _q.type) === "song" ? "music" : "mic",
                          class: "scale-50"
                        }, null, 8, ["name"]),
                        createVNode("div", null, toDisplayString(((_r = unref(request)) == null ? undefined : _r.type) === "song" ? "SONG" : "HYPE") + " REQUEST ", 1)
                      ], 2)
                    ]),
                    ((_s = unref(request)) == null ? undefined : _s.type) === "hype" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "text-sm text-muted-foreground" }, "Hype"),
                      createVNode(_component_SharedSummary, {
                        content: (_i2 = (_t = unref(request)) == null ? undefined : _t.description) != null ? _i2 : "",
                        class: "max-w-[50%] text-right"
                      }, null, 8, ["content"])
                    ])) : createCommentVNode("", true),
                    ((_u = unref(request)) == null ? undefined : _u.type) === "song" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "text-sm text-muted-foreground" }, "Title"),
                      createVNode(_component_SharedSummary, {
                        content: (_j2 = (_v = unref(request)) == null ? undefined : _v.song_title) != null ? _j2 : "",
                        class: "max-w-[50%] text-right"
                      }, null, 8, ["content"])
                    ])) : createCommentVNode("", true),
                    ((_w = unref(request)) == null ? undefined : _w.type) === "song" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "text-sm text-muted-foreground" }, "Artsite"),
                      createVNode(_component_SharedSummary, {
                        content: (_k2 = (_x = unref(request)) == null ? undefined : _x.artist) != null ? _k2 : "",
                        class: "max-w-[50%] text-right"
                      }, null, 8, ["content"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm text-muted-foreground" }, "Your nickname"),
                      createVNode("div", null, toDisplayString((_m2 = (_l2 = (_y = unref(request)) == null ? undefined : _y.nickname) != null ? _l2 : (_A = (_z = unref(request)) == null ? undefined : _z.audience) == null ? undefined : _A.stage_name) != null ? _m2 : ""), 1)
                    ])
                  ]),
                  createVNode("div", { class: "bg-white/5 border pt-1 pb-8 rounded-tr-3xl rounded-tl-3xl" }, [
                    createVNode("div", { class: "flex justify-center items-center gap-x-2" }, [
                      createVNode("div", { class: "text-muted-foreground" }, "Spin request balance"),
                      createVNode("div", {
                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(unref(sufficient) ? "text-[#38F08D]" : "text-[#E66840]")
                      }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_n2 = (_B = unref(wallet)) == null ? undefined : _B.wallet_balance) != null ? _n2 : 0)), 3)
                    ])
                  ]),
                  createVNode(_component_UiButton, {
                    size: "lg",
                    class: "relative -translate-y-7 w-full",
                    onClick: makePayment,
                    loading: unref(paying)
                  }, {
                    default: withCtx(() => {
                      var _a4;
                      return [
                        createTextVNode(" PAY \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a4 = unref(balance)) != null ? _a4 : 0)), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[host]/[event_id]/[request_id]/make-payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=make-payment-K5EJmAk2.mjs.map
