import { _ as _sfc_main$1 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$2 } from './loading-area-BCC1xwyu.mjs';
import { c as useRoute, e as useSeoMeta, h as formatMoney } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-payout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const reference = computed(() => route.params.reference);
    const { data, status, error } = useCustomFetch(
      `/transactions/payout/${reference.value}`
    );
    useSeoMeta({
      title: () => "Payout"
    });
    const copied = ref(false);
    const copyTransactionID = async (id) => {
      await (undefined).clipboard.writeText(id);
      copied.value = true;
      await promiseTimeout(1200);
      copied.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$1;
      const _component_SharedLoadingArea = _sfc_main$2;
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
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
          if (_push2) {
            _push2(`<div class="grid md:grid-cols-3 lg:grid-cols-[1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl"${_scopeId}><div class="space-y-2"${_scopeId}><div class="text-[#38F08D]"${_scopeId}>PAYOUT</div><div class="text-4xl font-semibold"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a2 = (_b = (_a = unref(data)) == null ? undefined : _a.data) == null ? undefined : _b.amount) != null ? _a2 : 0))}</div></div><div class="flex items-center gap-2 md:flex-col md:space-x-0 md:items-start relative"${_scopeId}><div class="absolute left-0 translate-x-full"${_scopeId}>`);
            if (unref(copied)) {
              _push2(`<div class="py-2 px-4 bg-background border rounded-full animate-in slide-in-from-top-3"${_scopeId}> Copied </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="text-muted-foreground"${_scopeId}>Transaction id</div><div class="flex items-center gap-x-1 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Copy), { class: "size-4 shrink-0" }, null, _parent2, _scopeId));
            _push2(`<div class="shrink-0"${_scopeId}>${ssrInterpolate((_b2 = (_d = (_c = unref(data)) == null ? undefined : _c.data) == null ? undefined : _d.reference) != null ? _b2 : "")}</div></div></div></div><div class="bg-white/5 p-6 rounded-3xl grid gap-y-4 gap-x-20 mt-6"${_scopeId}><div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Date</div><div class="font-semibold"${_scopeId}>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))((_c2 = (_f = (_e = unref(data)) == null ? undefined : _e.data) == null ? undefined : _f.date) != null ? _c2 : "", "YY-MM-DD"))}</div></div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Time</div><div class="font-semibold"${_scopeId}>${ssrInterpolate((_d2 = (_h = (_g = unref(data)) == null ? undefined : _g.data) == null ? undefined : _h.time) != null ? _d2 : "")}</div></div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Status</div><div class="font-semibold"${_scopeId}>${ssrInterpolate((_e2 = (_j = (_i = unref(data)) == null ? undefined : _i.data) == null ? undefined : _j.status) != null ? _e2 : "")}</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid md:grid-cols-3 lg:grid-cols-[1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl" }, [
                createVNode("div", { class: "space-y-2" }, [
                  createVNode("div", { class: "text-[#38F08D]" }, "PAYOUT"),
                  createVNode("div", { class: "text-4xl font-semibold" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_f2 = (_l = (_k = unref(data)) == null ? undefined : _k.data) == null ? undefined : _l.amount) != null ? _f2 : 0)), 1)
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
                    createVNode("div", { class: "shrink-0" }, toDisplayString((_g2 = (_n = (_m = unref(data)) == null ? undefined : _m.data) == null ? undefined : _n.reference) != null ? _g2 : ""), 1)
                  ])
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "bg-white/5 p-6 rounded-3xl grid gap-y-4 gap-x-20 mt-6" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Date"),
                    createVNode("div", { class: "font-semibold" }, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))((_h2 = (_p = (_o = unref(data)) == null ? undefined : _o.data) == null ? undefined : _p.date) != null ? _h2 : "", "YY-MM-DD")), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Time"),
                    createVNode("div", { class: "font-semibold" }, toDisplayString((_i2 = (_r = (_q = unref(data)) == null ? undefined : _q.data) == null ? undefined : _r.time) != null ? _i2 : ""), 1)
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-foreground" }, "Status"),
                    createVNode("div", { class: "font-semibold" }, toDisplayString((_j2 = (_t = (_s = unref(data)) == null ? undefined : _s.data) == null ? undefined : _t.status) != null ? _j2 : ""), 1)
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wallet/[reference]/event-payout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=event-payout-D3-dWvw4.mjs.map
