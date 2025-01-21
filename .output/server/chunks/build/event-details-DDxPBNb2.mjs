import { _ as _sfc_main$2 } from './back-button-CIinn8c8.mjs';
import { _ as _sfc_main$3 } from './loading-area-BCC1xwyu.mjs';
import { c as useRoute, e as useSeoMeta, h as formatMoney } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './event-requests-table-BYSPToKd.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import './nuxt-link-BvHIOyM7.mjs';
import 'lucide-vue-next';
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
import './index-twTXuIJ-.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-details",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const eventID = computed(() => route.params.id);
    const { data, status, error } = useCustomFetch(
      `/events/${eventID.value}`
    );
    useSeoMeta({
      title: () => {
        var _a2;
        var _a, _b;
        return (_a2 = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.title) != null ? _a2 : "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      const _component_SharedLoadingArea = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        to: "/events",
        class: "fixed top-24"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6"${_scopeId}><div class="space-y-4 rounded-3xl p-6 border bg-white/5"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Total earnings</div><div class="text-2xl font-semibold tabular-nums"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a2 = (_b = (_a = unref(data)) == null ? undefined : _a.data) == null ? undefined : _b.earnings) != null ? _a2 : 0))}</div></div><div class="space-y-4 rounded-3xl p-6 border bg-white/5"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Total song earnings</div><div class="text-2xl font-semibold tabular-nums"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b2 = (_d = (_c = unref(data)) == null ? undefined : _c.data) == null ? undefined : _d.song_earnings) != null ? _b2 : 0))}</div></div><div class="space-y-4 rounded-3xl p-6 border bg-white/5"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Total hype earnings</div><div class="text-2xl font-semibold tabular-nums"${_scopeId}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_c2 = (_f = (_e = unref(data)) == null ? undefined : _e.data) == null ? undefined : _f.hype_earnings) != null ? _c2 : 0))}</div></div></div><div class="p-6 border bg-white/5 rounded-3xl mt-8"${_scopeId}><div class="text-2xl font-semibold mb-6"${_scopeId}>Event Requests</div>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              loading: unref(status) === "pending",
              event_requests: (_d2 = (_g = unref(data)) == null ? undefined : _g.data.requests) != null ? _d2 : [],
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6" }, [
                createVNode("div", { class: "space-y-4 rounded-3xl p-6 border bg-white/5" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Total earnings"),
                  createVNode("div", { class: "text-2xl font-semibold tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_e2 = (_i = (_h = unref(data)) == null ? undefined : _h.data) == null ? undefined : _i.earnings) != null ? _e2 : 0)), 1)
                ]),
                createVNode("div", { class: "space-y-4 rounded-3xl p-6 border bg-white/5" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Total song earnings"),
                  createVNode("div", { class: "text-2xl font-semibold tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_f2 = (_k = (_j = unref(data)) == null ? undefined : _j.data) == null ? undefined : _k.song_earnings) != null ? _f2 : 0)), 1)
                ]),
                createVNode("div", { class: "space-y-4 rounded-3xl p-6 border bg-white/5" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Total hype earnings"),
                  createVNode("div", { class: "text-2xl font-semibold tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_g2 = (_m = (_l = unref(data)) == null ? undefined : _l.data) == null ? undefined : _m.hype_earnings) != null ? _g2 : 0)), 1)
                ])
              ]),
              createVNode("div", { class: "p-6 border bg-white/5 rounded-3xl mt-8" }, [
                createVNode("div", { class: "text-2xl font-semibold mb-6" }, "Event Requests"),
                createVNode(_sfc_main$1, {
                  loading: unref(status) === "pending",
                  event_requests: (_h2 = (_n = unref(data)) == null ? undefined : _n.data.requests) != null ? _h2 : [],
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(event)/events/[id]/event-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=event-details-DDxPBNb2.mjs.map
