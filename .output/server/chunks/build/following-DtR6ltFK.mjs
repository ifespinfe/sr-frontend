import { _ as _sfc_main$1 } from './back-button-CIinn8c8.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Dot } from 'lucide-vue-next';
import './nuxt-link-BvHIOyM7.mjs';
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
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "following",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-16 pb-40 relative" }, _attrs))}><div class="max-w-full w-[1112px] mx-auto"><div class="flex gap-x-2 items-center text-muted-foreground fixed top-24 z-10">`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/profile" }, null, _parent));
      _push(`<div class="font-display text-lg sm:text-xl font-semibold ml-2"> Following </div>`);
      _push(ssrRenderComponent(unref(Dot), { class: "size-12" }, null, _parent));
      _push(`<div class="text-lg sm:text-xl shrink-0">0 people</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/following.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=following-DtR6ltFK.mjs.map
