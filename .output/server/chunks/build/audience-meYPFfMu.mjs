import { _ as _sfc_main$1 } from './host-search-input-DlwBe-ss.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { e as useSeoMeta } from './server.mjs';
import './nuxt-link-BvHIOyM7.mjs';
import './avatar-w1P8IEWG.mjs';
import 'lucide-vue-next';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "audience",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({ title: "Request A Song or Hype" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HostSearchInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-20 h-full relative" }, _attrs))}><div class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"></div><div class="max-w-full w-[600px] mx-auto"><div class="font-display text-3xl md:text-4xl font-semibold text-center mb-12"> Who do you want to request a song from? </div>`);
      _push(ssrRenderComponent(_component_HostSearchInput, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/audience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=audience-meYPFfMu.mjs.map
