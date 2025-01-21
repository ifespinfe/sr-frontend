import { _ as _sfc_main$2 } from './back-button-CIinn8c8.mjs';
import { _ as _sfc_main$3 } from './loading-area-BCC1xwyu.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './event-history-table-SSk47Lwm.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { e as useSeoMeta } from './server.mjs';
import './nuxt-link-BvHIOyM7.mjs';
import 'lucide-vue-next';
import './container-Ck9YaQTT.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, status, error } = useCustomFetch("/past/events");
    const event = computed(() => {
      var _a;
      return (_a = data.value) == null ? undefined : _a.data;
    });
    const totalEventCount = computed(() => {
      var _a2;
      var _a, _b;
      return (_a2 = (_b = (_a = event.value) == null ? undefined : _a.event_details) == null ? undefined : _b.length) != null ? _a2 : 0;
    });
    const totalSongRequestCount = computed(
      () => {
        var _a2;
        var _a;
        return (_a2 = (_a = event.value) == null ? undefined : _a.song_requests_count) != null ? _a2 : 0;
      }
    );
    const totalHypeRequestCount = computed(
      () => {
        var _a2;
        var _a;
        return (_a2 = (_a = event.value) == null ? undefined : _a.hype_requests_count) != null ? _a2 : 0;
      }
    );
    useSeoMeta({
      title: "Previous events"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      const _component_SharedLoadingArea = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20" }, _attrs))}><div class="flex gap-x-2 items-center fixed top-24">`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/dashboard" }, null, _parent));
      _push(`<div class="text-2xl font-medium font-display">Previous events</div></div>`);
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="grid grid-cols-[repeat(auto-fill,_minmax(369px,_1fr))] gap-6"${_scopeId}><div class="bg-white/5 p-6 rounded-2xl border space-y-2"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Total Events</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(totalEventCount))}</div></div><div class="bg-white/5 p-6 rounded-2xl border space-y-2"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Total Song Requests</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(totalSongRequestCount))}</div></div><div class="bg-white/5 p-6 rounded-2xl border space-y-2"${_scopeId}><div class="text-muted-foreground"${_scopeId}>Total Hype Request</div><div class="text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(totalHypeRequestCount))}</div></div></div><div class="bg-white/5 p-6 rounded-2xl border mt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              event_history: (_a = unref(data)) == null ? undefined : _a.data,
              loading: unref(status) === "pending",
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-[repeat(auto-fill,_minmax(369px,_1fr))] gap-6" }, [
                createVNode("div", { class: "bg-white/5 p-6 rounded-2xl border space-y-2" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Total Events"),
                  createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(unref(totalEventCount)), 1)
                ]),
                createVNode("div", { class: "bg-white/5 p-6 rounded-2xl border space-y-2" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Total Song Requests"),
                  createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(unref(totalSongRequestCount)), 1)
                ]),
                createVNode("div", { class: "bg-white/5 p-6 rounded-2xl border space-y-2" }, [
                  createVNode("div", { class: "text-muted-foreground" }, "Total Hype Request"),
                  createVNode("div", { class: "text-2xl font-semibold" }, toDisplayString(unref(totalHypeRequestCount)), 1)
                ])
              ]),
              createVNode("div", { class: "bg-white/5 p-6 rounded-2xl border mt-10" }, [
                createVNode(_sfc_main$1, {
                  event_history: (_b = unref(data)) == null ? undefined : _b.data,
                  loading: unref(status) === "pending",
                  disabled: ""
                }, null, 8, ["event_history", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(event)/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DQCG-t7R.mjs.map
