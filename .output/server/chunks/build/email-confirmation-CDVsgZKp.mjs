import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { _ as _sfc_main$1 } from './back-button-C72TNXKz.mjs';
import { b as useAuth, c as useRoute, e as useSeoMeta, _ as _sfc_main$4, a as useNuxtApp, d as decodeBase64, s as showToast } from './server.mjs';
import { defineComponent, computed, watch, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Loader, AlertTriangle, CheckCircle2 } from 'lucide-vue-next';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
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

const useEmailVerification = (user_id, token) => {
  const {
    $repo: { auth }
  } = useNuxtApp();
  const resendError = ref(null);
  const resendData = ref(null);
  const resending = ref(false);
  const immediate = !!user_id && !!token;
  const url = decodeBase64(token, `/email/verify/${user_id}/${token}`);
  const {
    data: authState,
    execute: verifyEmail,
    status,
    error
  } = useCustomFetch(url, {
    immediate,
    lazy: true
  });
  const resendVerificationEmail = async () => {
    try {
      resending.value = true;
      const response = user_id ? await auth.resendEmail(user_id) : null;
      const message = response == null ? void 0 : response.message;
      message && showToast({ title: message });
      resendData.value = response;
      resending.value = false;
    } catch (e) {
      showToast({
        title: "Error",
        description: "Failed to resend email",
        variant: "warning"
      });
      resending.value = false;
      resendError.value = e;
    }
  };
  return {
    authState,
    verifyEmail,
    verificationStatus: status,
    verificationError: error,
    resendData,
    resending,
    resendError,
    resendVerificationEmail
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "email-confirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const { authEmail, auth_user, saveAuthUser } = useAuth();
    const successRoute = computed(() => {
      var _a;
      const role = (_a = auth_user.value) == null ? undefined : _a.role;
      return role === "host" ? "/dashboard" : "/audience";
    });
    const userID = computed(() => {
      var _a;
      return (_a = auth_user.value) == null ? undefined : _a.id;
    });
    const route = useRoute();
    const emailVerifyUrl = computed(() => {
      var _a;
      return (_a = route == null ? undefined : route.query) == null ? undefined : _a.email_verify_url;
    });
    const {
      verificationStatus,
      verificationError,
      resendVerificationEmail,
      resending,
      verifyEmail,
      authState
    } = useEmailVerification(userID.value, emailVerifyUrl.value);
    watch(
      authState,
      (state) => {
        var _a, _b;
        const user = (_a = state == null ? undefined : state.data) == null ? undefined : _a.user;
        const token = (_b = state == null ? undefined : state.data) == null ? undefined : _b.token;
        if (user && token) {
          saveAuthUser(token, user);
        }
      },
      {
        immediate: true
      }
    );
    useSeoMeta({
      title: "Confirm your email"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SharedBackButton = _sfc_main$1;
      const _component_UiButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full container pt-6" }, _attrs))}>`);
      if (unref(userID) && unref(emailVerifyUrl)) {
        _push(`<div class="fixed inset-0 z-10 bg-background grid place-items-center"><div class="bg-sp-purple/50 blur-[150px] size-56 absolute"></div>`);
        if (unref(verificationStatus) == "pending") {
          _push(`<div class="relative grid place-items-center gap-2">`);
          _push(ssrRenderComponent(unref(Loader), { class: "size-6 animate-spin" }, null, _parent));
          _push(`<div class="text-base">Verifying email</div></div>`);
        } else if (unref(verificationError)) {
          _push(`<div class="relative grid place-items-center gap-2 w-[700px] max-w-[100vw] mx-auto px-3">`);
          _push(ssrRenderComponent(unref(AlertTriangle), { class: "size-10 text-destructive" }, null, _parent));
          _push(`<div class="text-2xl md:text-3xl font-semibold text-center">${ssrInterpolate((_a2 = (_b = (_a = unref(verificationError)) == null ? undefined : _a.data) == null ? undefined : _b.message) != null ? _a2 : "Email verification failed")}</div><div class="text-muted-foreground"> Failed to verify <span class="text-foreground">${ssrInterpolate(unref(authEmail))}</span></div><div class="flex gap-4 mt-4">`);
          _push(ssrRenderComponent(_sfc_main$4, {
            variant: "secondary",
            disabled: unref(resending),
            onClick: unref(resendVerificationEmail)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(resending)) {
                  _push2(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>Resend email</span>`);
                }
              } else {
                return [
                  unref(resending) ? (openBlock(), createBlock(unref(Loader), {
                    key: 0,
                    class: "size-5 animate-spin"
                  })) : (openBlock(), createBlock("span", { key: 1 }, "Resend email"))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_sfc_main$4, { onClick: unref(verifyEmail) }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>Try again</span>`);
              } else {
                return [
                  createVNode("span", null, "Try again")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="relative grid place-items-center gap-2 w-[700px] max-w-[100vw] mx-auto px-3">`);
          _push(ssrRenderComponent(unref(CheckCircle2), { class: "size-10 text-primary" }, null, _parent));
          _push(`<div class="text-2xl md:text-3xl font-semibold text-center mb-6"> Email (${ssrInterpolate(unref(authEmail))}) verified </div>`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: unref(successRoute) }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_sfc_main$4, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Done `);
                    } else {
                      return [
                        createTextVNode(" Done ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_sfc_main$4, null, {
                    default: withCtx(() => [
                      createTextVNode(" Done ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_SharedBackButton, { to: "/login" }, null, _parent));
        _push(`<div class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div><div class="w-[700px] max-w-full mx-auto mt-8 space-y-6"><div class="text-4xl md:text-5xl font-semibold text-center"> Check your inbox to confirm your email address </div><div class="text-muted-foreground text-center"> We sent a mail to <span class="text-foreground">${ssrInterpolate(unref(authEmail))}</span> click the link to access your account </div><div class="rounded-xl bg-white/5 p-4 md:p-6 w-[480px] max-w-full mx-auto flex flex-col md:flex-row gap-4 items-center justify-between z-10 relative"><div class="text-base"> Didn&#39;t get the mail in your inbox or spam folder? </div>`);
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "secondary",
          class: "w-full md:w-auto",
          disabled: unref(resending),
          onClick: unref(resendVerificationEmail)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(resending)) {
                _push2(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent2, _scopeId));
              } else {
                _push2(`<span${_scopeId}>Resend</span>`);
              }
            } else {
              return [
                unref(resending) ? (openBlock(), createBlock(unref(Loader), {
                  key: 0,
                  class: "size-5 animate-spin"
                })) : (openBlock(), createBlock("span", { key: 1 }, "Resend"))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/email-confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=email-confirmation-CDVsgZKp.mjs.map
