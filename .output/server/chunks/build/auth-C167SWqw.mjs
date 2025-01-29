import { _ as _sfc_main$1 } from './NuxtImg-EJZQGAs-.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-2 gap-10 min-h-full containe" }, _attrs))}><div class="relative z-10"><div class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"></div><div class="relative z-[3] pt-32 px-[var(--cp)] md:pt-0 md:grid md:place-items-center h-full w-full -translate-y-10">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><div class="md:h-full min-h-[300px] hidden md:block md:min-h-0 bottom-0 w-full absolute md:relative bg-background rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/images/night-life.jpg",
    class: "object-fill md:object-cover w-full h-full absolute rounded-[inherit]"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-C167SWqw.mjs.map
