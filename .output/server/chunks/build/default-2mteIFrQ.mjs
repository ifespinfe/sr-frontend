import { _ as _sfc_main$1 } from './navigation-D3301pYE.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-Dggp6fVd.mjs';
import './server.mjs';
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
import 'lucide-vue-next';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './svg-icon-CvfuI_SP.mjs';
import './tooltip-BOPp73dK.mjs';
import './index-twTXuIJ-.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navigation = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "debu-screens" }, _attrs))}><div class="fixed py-4 left-0 top-0 right-0 border-b bg-background z-[100]">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</div><div class="relative top-[72px] h-[calc(100vh-160px)] sm:h-[calc(100vh-80px)]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-2mteIFrQ.mjs.map
