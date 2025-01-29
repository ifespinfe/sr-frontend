import { _ as _sfc_main$2 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$3 } from './loading-area-BCC1xwyu.mjs';
import { _ as _sfc_main$5 } from './svg-icon-CvfuI_SP.mjs';
import { c as useRoute, v as getInitials, _ as _sfc_main$4 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './avatar-BNYzPSiu.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { u as useFollowActions } from './useFollowActions-DlzAamUr.mjs';
import './nuxt-link-Dggp6fVd.mjs';
import 'lucide-vue-next';
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
  __name: "[username]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const username = (_b = (_a = useRoute()) == null ? undefined : _a.params) == null ? undefined : _b.username;
    const { status, data, error, refresh } = useCustomFetch(`/follower/detail?user_name=${username}`);
    const isHost = computed(() => {
      var _a2;
      if (!((_a2 = data.value) == null ? undefined : _a2.data)) return false;
      return data.value.data.follower.role === "host";
    });
    const { followUser, following, subOrUnsubscribeUser, subscribing } = useFollowActions();
    const handleFollow = () => {
      var _a2, _b2;
      const id = (_b2 = (_a2 = data.value) == null ? undefined : _a2.data) == null ? undefined : _b2.follower.id;
      if (!id) return;
      followUser(id, refresh);
    };
    const handleSubscription = () => {
      var _a2, _b2;
      const id = (_b2 = (_a2 = data.value) == null ? undefined : _a2.data) == null ? undefined : _b2.follower.id;
      if (!id) return;
      subOrUnsubscribeUser(id, "subscribe", refresh);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$2;
      const _component_SharedLoadingArea = _sfc_main$3;
      const _component_SvgIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-6 pb-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        to: "/following",
        class: "relative z-10"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3, _c2, _d2;
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-[1fr_350px] justify-between gap-6 mt-10 relative"${_scopeId}><div class="fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-r from-[#4a1520] via-[#462454] to-[#2d4163]"${_scopeId}></div><div class="fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-b from-[#4a1520] via-[#462454] to-background"${_scopeId}></div><div class="relative z-10"${_scopeId}><div class="grid lg:grid-cols-[auto_1fr] items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: "!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl",
              initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = (_c = (_b2 = (_a2 = unref(data)) == null ? undefined : _a2.data) == null ? undefined : _b2.follower) == null ? undefined : _c.user_name) != null ? _a3 : ""),
              image: (_e = (_d = unref(data)) == null ? undefined : _d.data) == null ? undefined : _e.follower.profile_picture
            }, null, _parent2, _scopeId));
            _push2(`<div class="py-2"${_scopeId}><div class="font-display text-3xl md:text-4xl font-semibold"${_scopeId}>${ssrInterpolate((_b3 = (_h = (_g = (_f = unref(data)) == null ? undefined : _f.data) == null ? undefined : _g.follower) == null ? undefined : _h.user_name) != null ? _b3 : "")}</div><div class="flex flex-wrap gap-4 items-center my-4 mb-6"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "account_circle" }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_j = (_i = unref(data)) == null ? undefined : _i.data) == null ? undefined : _j.follower.followers)}</span><span class="text-muted-foreground"${_scopeId}>FOLLOWERS</span></div></div>`);
            if (unref(isHost)) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "celebration" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_l = (_k = unref(data)) == null ? undefined : _k.data) == null ? undefined : _l.follower.total_events)}</span><span class="text-muted-foreground"${_scopeId}>EVENTS</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SvgIcon, { name: "genres" }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_n = (_m = unref(data)) == null ? undefined : _m.data) == null ? undefined : _n.follower.requests)}</span><span class="text-muted-foreground"${_scopeId}>REQUESTS</span></div></div>`);
            if (unref(isHost)) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "genres" }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate((_p = (_o = unref(data)) == null ? undefined : _o.data) == null ? undefined : _p.follower.fulfilled)}</span><span class="text-muted-foreground"${_scopeId}>FUFILLED</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col md:flex-row items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              variant: "secondary",
              class: "w-full md:w-auto",
              size: "lg",
              onClick: handleFollow,
              loading: unref(following),
              hide_loading_text: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Follow `);
                } else {
                  return [
                    createTextVNode(" Follow ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "w-full md:w-auto",
              size: "lg",
              onClick: handleSubscription,
              loading: unref(subscribing),
              hide_loading_text: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Notify me when Host Goes Live. `);
                } else {
                  return [
                    createTextVNode(" Notify me when Host Goes Live. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
            if (((_r = (_q = unref(data)) == null ? undefined : _q.data) == null ? undefined : _r.follower.role) === "host") {
              _push2(`<div class="mt-4 space-y-2 text-muted-foreground relative z-10"${_scopeId}><div${_scopeId}>ABOUT ME</div><div class="max-w-[550px]"${_scopeId}>${ssrInterpolate(unref(data).data.follower.bio)}</div><div class="inline-flex bg-white/10 items-center rounded-xl p-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, { name: "badge" }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><div class="text-lg font-semibold text-foreground"${_scopeId}>${ssrInterpolate(unref(data).data.follower.fulfilled)} of ${ssrInterpolate(unref(data).data.follower.requests)}</div><div class="text-muted-foreground"${_scopeId}>Request fufilled</div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-[1fr_350px] justify-between gap-6 mt-10 relative" }, [
                createVNode("div", { class: "fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-r from-[#4a1520] via-[#462454] to-[#2d4163]" }),
                createVNode("div", { class: "fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-b from-[#4a1520] via-[#462454] to-background" }),
                createVNode("div", { class: "relative z-10" }, [
                  createVNode("div", { class: "grid lg:grid-cols-[auto_1fr] items-center gap-4" }, [
                    createVNode(_sfc_main$1, {
                      class: "!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl",
                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_c2 = (_u = (_t = (_s = unref(data)) == null ? undefined : _s.data) == null ? undefined : _t.follower) == null ? undefined : _u.user_name) != null ? _c2 : ""),
                      image: (_w = (_v = unref(data)) == null ? undefined : _v.data) == null ? undefined : _w.follower.profile_picture
                    }, null, 8, ["initials", "image"]),
                    createVNode("div", { class: "py-2" }, [
                      createVNode("div", { class: "font-display text-3xl md:text-4xl font-semibold" }, toDisplayString((_d2 = (_z = (_y = (_x = unref(data)) == null ? undefined : _x.data) == null ? undefined : _y.follower) == null ? undefined : _z.user_name) != null ? _d2 : ""), 1),
                      createVNode("div", { class: "flex flex-wrap gap-4 items-center my-4 mb-6" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_SvgIcon, { name: "account_circle" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_B = (_A = unref(data)) == null ? undefined : _A.data) == null ? undefined : _B.follower.followers), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "FOLLOWERS")
                          ])
                        ]),
                        unref(isHost) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_SvgIcon, { name: "celebration" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_D = (_C = unref(data)) == null ? undefined : _C.data) == null ? undefined : _D.follower.total_events), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "EVENTS")
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_SvgIcon, { name: "genres" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_F = (_E = unref(data)) == null ? undefined : _E.data) == null ? undefined : _F.follower.requests), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "REQUESTS")
                          ])
                        ]),
                        unref(isHost) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_SvgIcon, { name: "genres" }),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("span", { class: "font-semibold" }, toDisplayString((_H = (_G = unref(data)) == null ? undefined : _G.data) == null ? undefined : _H.follower.fulfilled), 1),
                            createVNode("span", { class: "text-muted-foreground" }, "FUFILLED")
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex flex-col md:flex-row items-center gap-4" }, [
                        createVNode(_sfc_main$4, {
                          variant: "secondary",
                          class: "w-full md:w-auto",
                          size: "lg",
                          onClick: handleFollow,
                          loading: unref(following),
                          hide_loading_text: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Follow ")
                          ]),
                          _: 1
                        }, 8, ["loading"]),
                        createVNode(_sfc_main$4, {
                          class: "w-full md:w-auto",
                          size: "lg",
                          onClick: handleSubscription,
                          loading: unref(subscribing),
                          hide_loading_text: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Notify me when Host Goes Live. ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ])
                  ])
                ]),
                ((_J = (_I = unref(data)) == null ? undefined : _I.data) == null ? undefined : _J.follower.role) === "host" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4 space-y-2 text-muted-foreground relative z-10"
                }, [
                  createVNode("div", null, "ABOUT ME"),
                  createVNode("div", { class: "max-w-[550px]" }, toDisplayString(unref(data).data.follower.bio), 1),
                  createVNode("div", { class: "inline-flex bg-white/10 items-center rounded-xl p-3 gap-4" }, [
                    createVNode(_component_SvgIcon, { name: "badge" }),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-lg font-semibold text-foreground" }, toDisplayString(unref(data).data.follower.fulfilled) + " of " + toDisplayString(unref(data).data.follower.requests), 1),
                      createVNode("div", { class: "text-muted-foreground" }, "Request fufilled")
                    ])
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/following/[username].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=_username_-CJjPjLgo.mjs.map
