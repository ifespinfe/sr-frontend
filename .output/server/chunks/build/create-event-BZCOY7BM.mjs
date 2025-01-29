import { _ as _sfc_main$2 } from './back-button-C72TNXKz.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './event-form-Dyp2VIFX.mjs';
import { e as useSeoMeta } from './server.mjs';
import './nuxt-link-Dggp6fVd.mjs';
import 'lucide-vue-next';
import 'vee-validate';
import './form-input-DhwcXBKy.mjs';
import 'class-variance-authority';
import './form-select-CdCOkqF9.mjs';
import './select-field-Bp7xTQ5L.mjs';
import './number-input-KDBkJw-x.mjs';
import 'yup';
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
import 'clsx';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create-event",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Create Event"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-4 pb-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/dashboard" }, null, _parent));
      _push(`<div class="text-3xl md:text-4xl text-center font-semibold font-display"> Create event </div><div class="max-w-full w-[640px] mx-auto mt-10">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(event)/create-event.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=create-event-BZCOY7BM.mjs.map
