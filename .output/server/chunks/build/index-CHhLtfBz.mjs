import { _ as _sfc_main$2 } from './back-button-C72TNXKz.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { Form } from 'vee-validate';
import { a as useNuxtApp, e as useSeoMeta, _ as _sfc_main$4, s as showToast, f as useRouter } from './server.mjs';
import { _ as _sfc_main$1 } from './form-input-DhwcXBKy.mjs';
import { Loader } from 'lucide-vue-next';
import { object, string } from 'yup';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const simpleEmailSchema = object({
      email: string().required("Email is required").email("Enter a valid email")
    });
    const {
      $repo: { auth }
    } = useNuxtApp();
    const requesting = ref(false);
    const handleSubmit = async ({ email }) => {
      var _a2;
      var _a, _b;
      try {
        requesting.value = true;
        const response = await auth.requestResetLink(email);
        const message = response == null ? void 0 : response.message;
        showToast({ title: "Success", description: message, variant: "normal" });
        useRouter().push("/login");
        requesting.value = false;
      } catch (e) {
        requesting.value = false;
        showToast({
          title: "Failed",
          description: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to send reset link",
          variant: "warning"
        });
        console.error("ERROR", (_b = e == null ? undefined : e.data) == null ? undefined : _b.message);
      }
    };
    useSeoMeta({
      title: "Forget Password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/login" }, null, _parent));
      _push(`<div class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"> Forgot password? </div><div class="text-muted-foreground text-center mb-6"> Enter your email and we will send you a reset link </div><div class="max-w-[90%] mx-auto w-[400px]">`);
      _push(ssrRenderComponent(unref(Form), {
        "validation-schema": unref(simpleEmailSchema),
        onSubmit: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "email",
              name: "email",
              placeholder: "Enter your email",
              label: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "w-full flex mt-6",
              size: "lg",
              disabled: unref(requesting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(requesting)) {
                    _push3(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin mr-2" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(requesting) ? "Please wait" : "Send link")}</span>`);
                } else {
                  return [
                    unref(requesting) ? (openBlock(), createBlock(unref(Loader), {
                      key: 0,
                      class: "size-4 animate-spin mr-2"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(unref(requesting) ? "Please wait" : "Send link"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-center gap-x-1 items-center mt-2 text-muted-foreground"${_scopeId}><span${_scopeId}>Didn&#39;t receive the mail?</span><button class="outline-none underline hover:no-underline"${ssrIncludeBooleanAttr(unref(requesting)) ? " disabled" : ""}${_scopeId}> RESEND </button></div>`);
          } else {
            return [
              createVNode(_sfc_main$1, {
                type: "email",
                name: "email",
                placeholder: "Enter your email",
                label: "Email"
              }),
              createVNode(_sfc_main$4, {
                class: "w-full flex mt-6",
                size: "lg",
                disabled: unref(requesting)
              }, {
                default: withCtx(() => [
                  unref(requesting) ? (openBlock(), createBlock(unref(Loader), {
                    key: 0,
                    class: "size-4 animate-spin mr-2"
                  })) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString(unref(requesting) ? "Please wait" : "Send link"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              createVNode("div", { class: "flex justify-center gap-x-1 items-center mt-2 text-muted-foreground" }, [
                createVNode("span", null, "Didn't receive the mail?"),
                createVNode("button", {
                  class: "outline-none underline hover:no-underline",
                  disabled: unref(requesting)
                }, " RESEND ", 8, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/forgot-password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CHhLtfBz.mjs.map
