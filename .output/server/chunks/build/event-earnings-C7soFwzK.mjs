import { _ as _sfc_main$2 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$3 } from './loading-area-BCC1xwyu.mjs';
import { c as useRoute, e as useSeoMeta, h as formatMoney } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './event-requests-table-BYSPToKd.mjs';
import { Copy } from 'lucide-vue-next';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { u as useDateFormat, p as promiseTimeout } from './index-twTXuIJ-.mjs';
import './nuxt-link-Dggp6fVd.mjs';
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
import './svg-icon-CvfuI_SP.mjs';
import './container-Ck9YaQTT.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-earnings",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const reference = computed(() => route.params.reference);
    const { data, status, error } = useCustomFetch(`/wallets/event/history/${reference.value}`);
    useSeoMeta({
      title: () => {
        var _a2;
        var _a, _b;
        return (_a2 = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.title) != null ? _a2 : "Earnings";
      }
    });
    const copied = ref(false);
    const copyTransactionID = async (id) => {
      await (undefined).clipboard.writeText(id);
      copied.value = true;
      await promiseTimeout(1200);
      copied.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      const _component_SharedLoadingArea = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        to: "/wallet",
        class: "fixed top-20"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v2;
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
          if (_push2) {
            _push2(`<div class="grid md:grid-cols-3 lg:grid-cols-[2fr,_1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl"${_scopeId}><div class="space-y-2"${_scopeId}><div class="text-[#38F08D]"${_scopeId}>EVENT EARNINGS</div><div class="text-4xl font-semibold"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a2 = (_b = (_a = unref(data)) == null ? undefined : _a.data) == null ? undefined : _b.earning) != null ? _a2 : 0))}</div></div><div class="flex items-center gap-2 md:flex-col md:space-x-0 md:items-start"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Event name</div><div${_scopeId}>${ssrInterpolate((_b2 = (_d = (_c = unref(data)) == null ? undefined : _c.data) == null ? undefined : _d.title) != null ? _b2 : "")}</div></div><div class="flex items-center gap-2 md:flex-col md:space-x-0 md:items-start relative"${_scopeId}><div class="absolute left-0 translate-x-full"${_scopeId}>`);
            if (unref(copied)) {
              _push2(`<div class="py-2 px-4 bg-background border rounded-full animate-in slide-in-from-top-3"${_scopeId}> Copied </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="text-muted-foreground"${_scopeId}>Transaction id</div><div class="flex items-center gap-x-1 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Copy), { class: "size-4 shrink-0" }, null, _parent2, _scopeId));
            _push2(`<div class="shrink-0"${_scopeId}>${ssrInterpolate((_c2 = (_f = (_e = unref(data)) == null ? undefined : _e.data) == null ? undefined : _f.reference) != null ? _c2 : "")}</div></div></div></div><div class="bg-white/5 p-6 rounded-3xl grid md:grid-cols-2 gap-y-4 gap-x-20 mt-6"${_scopeId}><div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Amount earned</div><div class="font-semibold"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_d2 = (_h = (_g = unref(data)) == null ? undefined : _g.data) == null ? undefined : _h["amount earned"]) != null ? _d2 : 0))}</div></div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}> Commissions (-${ssrInterpolate((_e2 = (_j = (_i = unref(data)) == null ? undefined : _i.data) == null ? undefined : _j.commission_percent) != null ? _e2 : 0)} %) </div><div class="font-semibold"${_scopeId}> -\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_f2 = (_l = (_k = unref(data)) == null ? undefined : _k.data) == null ? undefined : _l.commission) != null ? _f2 : 0))}</div></div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Withdrawable balance</div><div class="font-semibold"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_g2 = (_m = unref(data)) == null ? undefined : _m.data.earning) != null ? _g2 : 0))}</div></div></div><div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Date</div><div class="font-semibold"${_scopeId}>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))((_h2 = (_o = (_n = unref(data)) == null ? undefined : _n.data) == null ? undefined : _o.date) != null ? _h2 : "", "YY-MM-DD"))}</div></div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Time</div><div class="font-semibold"${_scopeId}>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))((_i2 = (_q = (_p = unref(data)) == null ? undefined : _p.data) == null ? undefined : _q.date) != null ? _i2 : "", "HH:mm"))}</div></div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Status</div><div class="font-semibold"${_scopeId}>${ssrInterpolate((_j2 = (_s = (_r = unref(data)) == null ? undefined : _r.data) == null ? undefined : _s.status) != null ? _j2 : "")}</div></div></div></div><div class="p-6 border bg-white/5 rounded-3xl mt-8"${_scopeId}><div class="text-2xl font-semibold mb-6"${_scopeId}>Event Requests</div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              loading: unref(status) === "pending",
              event_requests: (_k2 = (_t = unref(data)) == null ? undefined : _t.data.history) != null ? _k2 : [],
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid md:grid-cols-3 lg:grid-cols-[2fr,_1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl" }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("div", { class: "text-[#38F08D]" }, "EVENT EARNINGS"),
                  createVNode("div", { class: "text-4xl font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_l2 = (_v = (_u = unref(data)) == null ? undefined : _u.data) == null ? undefined : _v.earning) != null ? _l2 : 0)), 1)
                ]),
                createVNode("div", { class: "flex items-center gap-2 md:flex-col md:space-x-0 md:items-start" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Event name"),
                  createVNode("div", null, toDisplayString((_m2 = (_x = (_w = unref(data)) == null ? undefined : _w.data) == null ? undefined : _x.title) != null ? _m2 : ""), 1)
                ]),
                createVNode("div", {
                  class: "flex items-center gap-2 md:flex-col md:space-x-0 md:items-start relative",
                  onClick: ($event) => {
                    var _a3;
                    var _a22, _b22;
                    return copyTransactionID((_a3 = (_b22 = (_a22 = unref(data)) == null ? undefined : _a22.data) == null ? undefined : _b22.reference) != null ? _a3 : "");
                  }
                }, [
                  createVNode("div", { class: "absolute left-0 translate-x-full" }, [
                    unref(copied) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "py-2 px-4 bg-background border rounded-full animate-in slide-in-from-top-3"
                    }, " Copied ")) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "text-muted-foreground" }, "Transaction id"),
                  createVNode("div", { class: "flex items-center gap-x-1 cursor-pointer" }, [
                    createVNode(unref(Copy), { class: "size-4 shrink-0" }),
                    createVNode("div", { class: "shrink-0" }, toDisplayString((_n2 = (_z = (_y = unref(data)) == null ? undefined : _y.data) == null ? undefined : _z.reference) != null ? _n2 : ""), 1)
                  ])
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "bg-white/5 p-6 rounded-3xl grid md:grid-cols-2 gap-y-4 gap-x-20 mt-6" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Amount earned"),
                    createVNode("div", { class: "font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_o2 = (_B = (_A = unref(data)) == null ? undefined : _A.data) == null ? undefined : _B["amount earned"]) != null ? _o2 : 0)), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, " Commissions (-" + toDisplayString((_p2 = (_D = (_C = unref(data)) == null ? undefined : _C.data) == null ? undefined : _D.commission_percent) != null ? _p2 : 0) + " %) ", 1),
                    createVNode("div", { class: "font-semibold" }, " -\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_q2 = (_F = (_E = unref(data)) == null ? undefined : _E.data) == null ? undefined : _F.commission) != null ? _q2 : 0)), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Withdrawable balance"),
                    createVNode("div", { class: "font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_r2 = (_G = unref(data)) == null ? undefined : _G.data.earning) != null ? _r2 : 0)), 1)
                  ])
                ]),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Date"),
                    createVNode("div", { class: "font-semibold" }, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))((_s2 = (_I = (_H = unref(data)) == null ? undefined : _H.data) == null ? undefined : _I.date) != null ? _s2 : "", "YY-MM-DD")), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Time"),
                    createVNode("div", { class: "font-semibold" }, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))((_t2 = (_K = (_J = unref(data)) == null ? undefined : _J.data) == null ? undefined : _K.date) != null ? _t2 : "", "HH:mm")), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Status"),
                    createVNode("div", { class: "font-semibold" }, toDisplayString((_u2 = (_M = (_L = unref(data)) == null ? undefined : _L.data) == null ? undefined : _M.status) != null ? _u2 : ""), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "p-6 border bg-white/5 rounded-3xl mt-8" }, [
                createVNode("div", { class: "text-2xl font-semibold mb-6" }, "Event Requests"),
                createVNode(_sfc_main$1, {
                  loading: unref(status) === "pending",
                  event_requests: (_v2 = (_N = unref(data)) == null ? undefined : _N.data.history) != null ? _v2 : [],
                  disabled: ""
                }, null, 8, ["loading", "event_requests"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wallet/[reference]/event-earnings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=event-earnings-C7soFwzK.mjs.map
