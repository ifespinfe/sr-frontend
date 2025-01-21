import { _ as _sfc_main$3 } from './navigation-mB63nHcE.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './svg-icon-CvfuI_SP.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BvHIOyM7.mjs';
import { _ as _sfc_main$4$1 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './tooltip-BOPp73dK.mjs';
import 'lucide-vue-next';
import './index-twTXuIJ-.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UiButton = _sfc_main$4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-muted rounded-2xl sm:w-[335px] w-full p-3 mx-auto md:mx-0" }, _attrs))}><h5 class="text-lg font-semibold text-muted-foreground mb-5"> Get news and updates </h5><div class="relative rounded-full border border-input focus-within:ring-ring shadow-sm transition-colors bg-white/5 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1 px-4 py-4 h-[46px]"><input type="text" placeholder="@youremail.com" class="focus-visible:outline-none bg-transparent text-base absolute inset-0 p-[inherit] z-[3]"><div class="absolute right-1 top-1/2 -translate-y-[52%] z-[4]">`);
  _push(ssrRenderComponent(_component_UiButton, { variant: "secondary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SUBSCRIBE `);
      } else {
        return [
          createTextVNode(" SUBSCRIBE ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/email-subscription-form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const EmailSubscriptionForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background py-[50px]" }, _attrs))}><div class="container"><div class="flex flex-col md:flex-row md:flex-wrap justify-between gap-8 sm:gap-6 pb-[40px] border-b mb-[40px]"><div class="space-y-4 mx-auto md:mx-0">`);
      _push(ssrRenderComponent(_component_SvgIcon, { name: "spin-request" }, null, _parent));
      _push(`<a href="mailto:spinrequestsupp@gmail.com" class="text-primary font-medium text-center md:text-left"> Contact us</a></div><div class="flex items-center gap-x-6 [&amp;_&gt;_div]:size-[24px] mx-auto md:mx-0"><div class="size-[24px] grid place-items-center hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.facebook.com/spinrequest",
        external: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "facebook" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SvgIcon, { name: "facebook" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="size-[24px] grid place-items-center hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.twitter.com/spinrequest",
        external: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "twitter" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SvgIcon, { name: "twitter" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="size-[24px] grid place-items-center hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.instagram.com/spinrequest/",
        external: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "instagram" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SvgIcon, { name: "instagram" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="size-[24px] grid place-items-center hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.tiktok.com/@spinrequest",
        external: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "tiktok" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SvgIcon, { name: "tiktok" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="size-[24px] grid place-items-center hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.youtube.com/@spinrequest",
        external: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "youtube" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SvgIcon, { name: "youtube" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="size-[24px] grid place-items-center hover:scale-105 transition-transform">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.linkedin.com/company/spinrequest",
        external: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "linkedin" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SvgIcon, { name: "linkedin" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(EmailSubscriptionForm, null, null, _parent));
      _push(`</div><div class="flex flex-col sm:flex-row gap-4 text-center sm:text-left sm:justify-between sm:items-center text-muted-foreground"><div> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} SpinRequest - All Rights Reserved </div><div class="[&amp;_&gt;_a:hover]:underline flex items-center gap-x-1 justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy-policy" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>|</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/terms" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms of Use `);
          } else {
            return [
              createTextVNode(" Terms of Use ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>|</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/community-guidelines" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Guidelines `);
          } else {
            return [
              createTextVNode(" Guidelines ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lander/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lander",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navigation = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "debu-screens" }, _attrs))}><div class="fixed py-4 left-0 right-0 border-b bg-background z-[100]">`);
      _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
      _push(`</div><div class="pt-[72px] h-screen">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/lander.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=lander-BiI7YxZP.mjs.map
