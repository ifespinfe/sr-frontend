import { e as useSeoMeta, a as useNuxtApp, b as useAuth, c as useRoute, _ as _sfc_main$4, g as __nuxt_component_0, s as showToast, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BvHIOyM7.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, ref, unref, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Form } from 'vee-validate';
import { _ as _sfc_main$2 } from './form-input-DhwcXBKy.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "login-form",
  __ssrInlineRender: true,
  setup(__props) {
    const { $repo } = useNuxtApp();
    const { saveAuthUser } = useAuth();
    const route = useRoute();
    const loading = ref(false);
    const onSubmit = async ({
      email,
      password
    }) => {
      var _a2;
      var _a, _b, _c, _d;
      const payload = {
        email,
        password
      };
      try {
        loading.value = true;
        const response = await $repo.auth.loginUser(payload);
        const message = response == null ? void 0 : response.message;
        showToast({ title: "Success", description: message, variant: "normal" });
        saveAuthUser(response.data.token, response.data.user);
        loading.value = false;
        const redirect_path = (_a = route.redirectedFrom) == null ? void 0 : _a.fullPath;
        const destination = redirect_path ? redirect_path : ((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.role) === "host" ? "/dashboard" : "/audience";
        return navigateTo(destination);
      } catch (e) {
        loading.value = false;
        showToast({
          title: "Failed",
          description: (_a2 = (_c = e == null ? undefined : e.data) == null ? undefined : _c.message) != null ? _a2 : "Invalid credentials",
          variant: "warning"
        });
        console.error("ERROR LOGGING IN", (_d = e == null ? undefined : e.data) == null ? undefined : _d.message);
      }
    };
    const simpleLoginSchema = {
      email: (name) => {
        return name ? true : "Enter your email";
      },
      password: (pass) => {
        return pass ? true : "Enter your password";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Form), mergeProps({
        "validation-schema": simpleLoginSchema,
        as: "div"
      }, _attrs), {
        default: withCtx(({ handleSubmit }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "email",
              placeholder: "Enter your email here",
              label: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "password",
              placeholder: "Enter your password here",
              type: "password",
              label: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "w-full",
              type: "submit",
              size: "lg",
              disabled: unref(loading)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
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
              _: 2
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: ($event) => handleSubmit($event, onSubmit),
                class: "space-y-7"
              }, [
                createVNode(_sfc_main$2, {
                  name: "email",
                  placeholder: "Enter your email here",
                  label: "Email"
                }),
                createVNode(_sfc_main$2, {
                  name: "password",
                  placeholder: "Enter your password here",
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
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/login-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Login"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "auth" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="text-primary text-center mb-2 text-xl"${_scopeId}>Login</div><div class="text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display"${_scopeId}> Welcome, Log in to your account </div><div class="max-w-[90%] mx-auto w-[400px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center gap-x-4 mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/forgot-password",
              class: "underline hover:no-underline ml-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Forgot password`);
                } else {
                  return [
                    createTextVNode("Forgot password")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex gap-x-2"${_scopeId}> Not a user? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/signup",
              class: "underline hover:no-underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign up `);
                } else {
                  return [
                    createTextVNode(" Sign up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "text-primary text-center mb-2 text-xl" }, "Login"),
                createVNode("div", { class: "text-4xl lg:text-5xl font-semibold my-4 text-center max-w-[595px] mx-auto font-display" }, " Welcome, Log in to your account "),
                createVNode("div", { class: "max-w-[90%] mx-auto w-[400px]" }, [
                  createVNode(_sfc_main$1),
                  createVNode("div", { class: "flex justify-center gap-x-4 mt-2" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/forgot-password",
                      class: "underline hover:no-underline ml-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Forgot password")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-x-2" }, [
                      createTextVNode(" Not a user? "),
                      createVNode(_component_NuxtLink, {
                        to: "/signup",
                        class: "underline hover:no-underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Sign up ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=login-YplksiLN.mjs.map
