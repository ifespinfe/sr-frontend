import { e as useSeoMeta, a as useNuxtApp, b as useAuth, _ as _sfc_main$4, g as __nuxt_component_0, s as showToast, f as useRouter } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Dggp6fVd.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, unref, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './back-button-C72TNXKz.mjs';
import { Form } from 'vee-validate';
import { _ as _sfc_main$3 } from './form-input-DhwcXBKy.mjs';
import { A as AudienceSchema } from './user-schema-Imz6LROc.mjs';
import { Loader } from 'lucide-vue-next';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "audience-signup-form",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      $repo: { auth }
    } = useNuxtApp();
    const { saveAuthUser } = useAuth();
    const loading = ref(false);
    const handleSubmit = async (data) => {
      var _a2;
      var _a, _b, _c;
      loading.value = true;
      const payload = {
        ...data,
        password_confirmation: data.password
      };
      try {
        loading.value = true;
        const response = await auth.registerAudience(payload);
        const message = response == null ? void 0 : response.message;
        const next_action_message = "Follow the link in your email to verify your email";
        showToast({
          title: message,
          description: next_action_message,
          variant: "normal",
          duration: 8e4
        });
        loading.value = false;
        saveAuthUser(response.data.token, response.data.user);
        const destination = ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.role) === "host" ? "/dashboard" : "/audience";
        useRouter().push(destination);
      } catch (e) {
        loading.value = false;
        showToast({
          title: "Failed",
          description: (_a2 = (_b = e == null ? undefined : e.data) == null ? undefined : _b.message) != null ? _a2 : "Sign up failed. Please try again",
          variant: "warning"
        });
        console.error("ERROR LOGGING IN", (_c = e == null ? undefined : e.data) == null ? undefined : _c.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Form), mergeProps({
        "validation-schema": unref(AudienceSchema),
        onSubmit: handleSubmit,
        class: "space-y-7"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "email",
              placeholder: "Enter your email",
              label: "Email",
              type: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "user_name",
              placeholder: "Enter your username",
              label: "Username",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "password",
              placeholder: "Enter your password",
              type: "password",
              label: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "w-full",
              type: "submit",
              size: "lg",
              disabled: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loading)) {
                    _push3(ssrRenderComponent(unref(Loader), { class: "animate-spin mr-2" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(loading) ? "Please wait..." : "Submit")}</span>`);
                } else {
                  return [
                    unref(loading) ? (openBlock(), createBlock(unref(Loader), {
                      key: 0,
                      class: "animate-spin mr-2"
                    })) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(unref(loading) ? "Please wait..." : "Submit"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                name: "email",
                placeholder: "Enter your email",
                label: "Email",
                type: "email"
              }),
              createVNode(_sfc_main$3, {
                name: "user_name",
                placeholder: "Enter your username",
                label: "Username",
                type: "text"
              }),
              createVNode(_sfc_main$3, {
                name: "password",
                placeholder: "Enter your password",
                type: "password",
                label: "Password"
              }),
              createVNode(_sfc_main$4, {
                class: "w-full",
                type: "submit",
                size: "lg",
                disabled: unref(loading)
              }, {
                default: withCtx(() => [
                  unref(loading) ? (openBlock(), createBlock(unref(Loader), {
                    key: 0,
                    class: "animate-spin mr-2"
                  })) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString(unref(loading) ? "Please wait..." : "Submit"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/audience-signup-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "audience",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Sign Up As An Audience"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "auth" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-20 left-[var(--cp)] container"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { to: "/signup" }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full"${_scopeId}><div class="text-primary text-center mb-2 text-xl"${_scopeId}> Create your account </div><div class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"${_scopeId}> Create your free audience account </div><div class="max-w-full w-[400px] mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`<div class="text-center mt-2"${_scopeId}> Already a user? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/login",
              class: "underline hover:no-underline ml-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`LOGIN`);
                } else {
                  return [
                    createTextVNode("LOGIN")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute top-20 left-[var(--cp)] container" }, [
                createVNode(_sfc_main$2, { to: "/signup" })
              ]),
              createVNode("div", { class: "w-full" }, [
                createVNode("div", { class: "text-primary text-center mb-2 text-xl" }, " Create your account "),
                createVNode("div", { class: "text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display" }, " Create your free audience account "),
                createVNode("div", { class: "max-w-full w-[400px] mx-auto" }, [
                  createVNode(_sfc_main$1),
                  createVNode("div", { class: "text-center mt-2" }, [
                    createTextVNode(" Already a user? "),
                    createVNode(_component_NuxtLink, {
                      to: "/login",
                      class: "underline hover:no-underline ml-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("LOGIN")
                      ]),
                      _: 1
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/signup/audience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=audience-ApI-CkW7.mjs.map
