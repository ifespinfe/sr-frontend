import { _ as _sfc_main$2 } from './back-button-CIinn8c8.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Form } from 'vee-validate';
import { a as useNuxtApp, c as useRoute, e as useSeoMeta, _ as _sfc_main$4, s as showToast, f as useRouter } from './server.mjs';
import { _ as _sfc_main$1 } from './form-input-DhwcXBKy.mjs';
import { Loader } from 'lucide-vue-next';
import { R as ResetPasswordSchema } from './user-schema-Imz6LROc.mjs';
import './nuxt-link-BvHIOyM7.mjs';
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
import 'yup';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const {
      $repo: { auth }
    } = useNuxtApp();
    const reseting = ref(false);
    const route = useRoute();
    const token = (_a = route == null ? undefined : route.query) == null ? undefined : _a.token;
    const email = decodeURIComponent((_b = route == null ? undefined : route.query) == null ? undefined : _b.email);
    const handleSubmit = async ({
      password,
      password_confirmation
    }) => {
      var _a3;
      var _a2, _b2;
      try {
        const payload = {
          password,
          password_confirmation,
          token,
          email
        };
        reseting.value = true;
        const response = await auth.resetPassword(payload);
        const message = response == null ? void 0 : response.message;
        showToast({ title: "Success", description: message, variant: "normal" });
        useRouter().push("/login");
        reseting.value = false;
      } catch (e) {
        reseting.value = false;
        showToast({
          title: "Failed",
          description: (_a3 = (_a2 = e == null ? undefined : e.data) == null ? undefined : _a2.message) != null ? _a3 : "Failed to send reset link",
          variant: "warning"
        });
        console.error("ERROR RESETTING PASSWORD", (_b2 = e == null ? undefined : e.data) == null ? undefined : _b2.message);
      }
    };
    useSeoMeta({
      title: "Input New Password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/login" }, null, _parent));
      _push(`<div class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto"> Change password </div><div class="text-muted-foreground text-center mb-6"> Create a new password </div><div class="max-w-[90%] mx-auto w-[400px]">`);
      _push(ssrRenderComponent(unref(Form), {
        "validation-schema": unref(ResetPasswordSchema),
        onSubmit: handleSubmit,
        class: "space-y-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "password",
              name: "password",
              placeholder: "Enter your new password",
              label: "Set new password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              type: "password",
              name: "password_confirmation",
              placeholder: "Confirm password",
              label: "Confirm password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "w-full flex mt-6",
              size: "lg",
              disabled: unref(reseting) || !unref(token)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(reseting)) {
                    _push3(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin mr-2" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(reseting) ? "Please wait" : "Reset password")}</span>`);
                } else {
                  return [
                    unref(reseting) ? (openBlock(), createBlock(unref(Loader), {
                      key: 0,
                      class: "size-4 animate-spin mr-2"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(unref(reseting) ? "Please wait" : "Reset password"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                type: "password",
                name: "password",
                placeholder: "Enter your new password",
                label: "Set new password"
              }),
              createVNode(_sfc_main$1, {
                type: "password",
                name: "password_confirmation",
                placeholder: "Confirm password",
                label: "Confirm password"
              }),
              createVNode(_sfc_main$4, {
                class: "w-full flex mt-6",
                size: "lg",
                disabled: unref(reseting) || !unref(token)
              }, {
                default: withCtx(() => [
                  unref(reseting) ? (openBlock(), createBlock(unref(Loader), {
                    key: 0,
                    class: "size-4 animate-spin mr-2"
                  })) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString(unref(reseting) ? "Please wait" : "Reset password"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-pHzSLKDm.mjs.map
