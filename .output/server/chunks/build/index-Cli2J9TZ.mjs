import { e as useSeoMeta, g as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BvHIOyM7.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Create An Account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))} data-v-078ab751>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-078ab751${_scopeId}><h4 class="text-center text-primary text-xl md:text-2xl" data-v-078ab751${_scopeId}> Create account </h4><p class="text-4xl text-center font-semibold my-4 font-display" data-v-078ab751${_scopeId}> How do you want to use SpinRequest? </p><div class="grid grid-cols-[repeat(auto-fill,_minmax(265px,_1fr))] gap-4 mt-8" data-v-078ab751${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/signup/host",
              class: "border py-10 px-8 relative z-10 rounded-2xl transition-colors hover:border-primary bg-background overflow-hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-[#FF99F1] blur-[100px] size-[100px] absolute top-[-40px] right-[-40px] border z-[200]" data-v-078ab751${_scopeId2}></div><div class="text-2xl font-semibold" data-v-078ab751${_scopeId2}>As a show host</div><div class="text-muted-foreground leading-5 mt-4" data-v-078ab751${_scopeId2}> For DJs MCs, Artists, radio hosts or others </div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-[#FF99F1] blur-[100px] size-[100px] absolute top-[-40px] right-[-40px] border z-[200]" }),
                    createVNode("div", { class: "text-2xl font-semibold" }, "As a show host"),
                    createVNode("div", { class: "text-muted-foreground leading-5 mt-4" }, " For DJs MCs, Artists, radio hosts or others ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "border py-10 px-8 relative z-10 rounded-2xl transition-colors hover:border-primary bg-background overflow-hidden",
              to: "/signup/audience"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-[#FFEE99] blur-[70px] size-[100px] absolute top-[-40px] right-[-40px] border z-[200]" data-v-078ab751${_scopeId2}></div><div class="text-2xl font-semibold" data-v-078ab751${_scopeId2}>To request songs</div><div class="text-muted-foreground leading-5 mt-4" data-v-078ab751${_scopeId2}> To request songs or hypes from a host </div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-[#FFEE99] blur-[70px] size-[100px] absolute top-[-40px] right-[-40px] border z-[200]" }),
                    createVNode("div", { class: "text-2xl font-semibold" }, "To request songs"),
                    createVNode("div", { class: "text-muted-foreground leading-5 mt-4" }, " To request songs or hypes from a host ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h4", { class: "text-center text-primary text-xl md:text-2xl" }, " Create account "),
                createVNode("p", { class: "text-4xl text-center font-semibold my-4 font-display" }, " How do you want to use SpinRequest? "),
                createVNode("div", { class: "grid grid-cols-[repeat(auto-fill,_minmax(265px,_1fr))] gap-4 mt-8" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/signup/host",
                    class: "border py-10 px-8 relative z-10 rounded-2xl transition-colors hover:border-primary bg-background overflow-hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-[#FF99F1] blur-[100px] size-[100px] absolute top-[-40px] right-[-40px] border z-[200]" }),
                      createVNode("div", { class: "text-2xl font-semibold" }, "As a show host"),
                      createVNode("div", { class: "text-muted-foreground leading-5 mt-4" }, " For DJs MCs, Artists, radio hosts or others ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    class: "border py-10 px-8 relative z-10 rounded-2xl transition-colors hover:border-primary bg-background overflow-hidden",
                    to: "/signup/audience"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-[#FFEE99] blur-[70px] size-[100px] absolute top-[-40px] right-[-40px] border z-[200]" }),
                      createVNode("div", { class: "text-2xl font-semibold" }, "To request songs"),
                      createVNode("div", { class: "text-muted-foreground leading-5 mt-4" }, " To request songs or hypes from a host ")
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/signup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-078ab751"]]);

export { index as default };
//# sourceMappingURL=index-Cli2J9TZ.mjs.map
