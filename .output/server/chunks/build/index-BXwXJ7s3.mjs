import { _ as _sfc_main$1 } from './back-button-C72TNXKz.mjs';
import { v as getInitials, w as getHexColor, _ as _sfc_main$4, o as kh, M as Mh, F as Fh } from './server.mjs';
import { _ as _sfc_main$2 } from './loading-area-BCC1xwyu.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { _ as _sfc_main$3 } from './avatar-BNYzPSiu.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { Dot, Search, Loader, ChevronRight } from 'lucide-vue-next';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const { data, status, error } = useCustomFetch(
      "/followers",
      {
        query: {
          search
        }
      }
    );
    const following = computed(() => {
      var _a2;
      var _a, _b, _c;
      return (_a2 = (_c = (_b = (_a = data == null ? undefined : data.value) == null ? undefined : _a.data) == null ? undefined : _b.follower) == null ? undefined : _c.data) != null ? _a2 : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$1;
      const _component_UiButton = _sfc_main$4;
      const _component_SharedLoadingArea = _sfc_main$2;
      const _component_ListboxRoot = kh;
      const _component_ListboxContent = Mh;
      const _component_ListboxItem = Fh;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Avatar = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-16 pb-40 relative" }, _attrs))}><div class="max-w-full w-[1112px] mx-auto"><div class="flex flex-wrap justify-between gap-6 items-center text-muted-foreground"><div class="flex gap-x-2 items-center">`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/profile" }, null, _parent));
      _push(`<div class="font-display text-xl sm:text-2xl font-semibold ml-2 text-white"> Following </div>`);
      _push(ssrRenderComponent(unref(Dot), { class: "size-12" }, null, _parent));
      _push(`<div class="text-lg sm:text-xl shrink-0">${ssrInterpolate(unref(following).length)} people </div></div><div class="w-[450px] max-w-full ml-auto rounded-full relative">`);
      _push(ssrRenderComponent(unref(Search), { class: "size-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" }, null, _parent));
      _push(`<input type="text" class="!pl-12 !py-4 pr-4 w-full h-full bg-white/5 rounded-[inherit] border border-transparent outline-0 focus:border-input" placeholder="Search..."${ssrRenderAttr("value", unref(search))}>`);
      if (unref(search) && unref(status) === "pending") {
        _push(ssrRenderComponent(_component_UiButton, {
          class: "absolute right-4 top-1/2 -translate-y-1/2",
          size: "icon",
          variant: "outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Loader), { class: "animate-spin size-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Loader), { class: "animate-spin size-4" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        error: unref(error),
        loading: unref(status) === "pending" && !unref(search)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListboxRoot, { class: "py-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ListboxContent, { class: "space-y-1 relative" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(following), (user) => {
                          _push4(ssrRenderComponent(_component_ListboxItem, {
                            key: user.id,
                            value: user.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: `/following/${user.user_name}`,
                                  class: "p-3 bg-white/5 border rounded-md transition-colors hover:bg-white/10 grid grid-cols-[50px,_1fr,_auto] gap-x-2 items-center [&:hover_>_.arrow]:block"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a2, _b2;
                                    var _a, _b;
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Avatar, {
                                        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(user.name),
                                        image: user.profile_picture,
                                        class: "font-bold text-lg",
                                        style: {
                                          backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = user == null ? undefined : user.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                          color: "black"
                                        }
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<div class="text-muted-foreground font-semibold"${_scopeId5}>${ssrInterpolate(user.name)}</div>`);
                                      _push6(ssrRenderComponent(unref(ChevronRight), { class: "size-6 hidden animate-in slide-in-from-left-1 arrow" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Avatar, {
                                          initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(user.name),
                                          image: user.profile_picture,
                                          class: "font-bold text-lg",
                                          style: {
                                            backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_b2 = (_b = user == null ? undefined : user.name) == null ? undefined : _b.charAt(0)) != null ? _b2 : "A"),
                                            color: "black"
                                          }
                                        }, null, 8, ["initials", "image", "style"]),
                                        createVNode("div", { class: "text-muted-foreground font-semibold" }, toDisplayString(user.name), 1),
                                        createVNode(unref(ChevronRight), { class: "size-6 hidden animate-in slide-in-from-left-1 arrow" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: `/following/${user.user_name}`,
                                    class: "p-3 bg-white/5 border rounded-md transition-colors hover:bg-white/10 grid grid-cols-[50px,_1fr,_auto] gap-x-2 items-center [&:hover_>_.arrow]:block"
                                  }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      var _a;
                                      return [
                                        createVNode(_component_Avatar, {
                                          initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(user.name),
                                          image: user.profile_picture,
                                          class: "font-bold text-lg",
                                          style: {
                                            backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = user == null ? undefined : user.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                            color: "black"
                                          }
                                        }, null, 8, ["initials", "image", "style"]),
                                        createVNode("div", { class: "text-muted-foreground font-semibold" }, toDisplayString(user.name), 1),
                                        createVNode(unref(ChevronRight), { class: "size-6 hidden animate-in slide-in-from-left-1 arrow" })
                                      ];
                                    }),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(following), (user) => {
                            return openBlock(), createBlock(_component_ListboxItem, {
                              key: user.id,
                              value: user.id
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: `/following/${user.user_name}`,
                                  class: "p-3 bg-white/5 border rounded-md transition-colors hover:bg-white/10 grid grid-cols-[50px,_1fr,_auto] gap-x-2 items-center [&:hover_>_.arrow]:block"
                                }, {
                                  default: withCtx(() => {
                                    var _a2;
                                    var _a;
                                    return [
                                      createVNode(_component_Avatar, {
                                        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(user.name),
                                        image: user.profile_picture,
                                        class: "font-bold text-lg",
                                        style: {
                                          backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = user == null ? undefined : user.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                          color: "black"
                                        }
                                      }, null, 8, ["initials", "image", "style"]),
                                      createVNode("div", { class: "text-muted-foreground font-semibold" }, toDisplayString(user.name), 1),
                                      createVNode(unref(ChevronRight), { class: "size-6 hidden animate-in slide-in-from-left-1 arrow" })
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ListboxContent, { class: "space-y-1 relative" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(following), (user) => {
                          return openBlock(), createBlock(_component_ListboxItem, {
                            key: user.id,
                            value: user.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: `/following/${user.user_name}`,
                                class: "p-3 bg-white/5 border rounded-md transition-colors hover:bg-white/10 grid grid-cols-[50px,_1fr,_auto] gap-x-2 items-center [&:hover_>_.arrow]:block"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  var _a;
                                  return [
                                    createVNode(_component_Avatar, {
                                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(user.name),
                                      image: user.profile_picture,
                                      class: "font-bold text-lg",
                                      style: {
                                        backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = user == null ? undefined : user.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                        color: "black"
                                      }
                                    }, null, 8, ["initials", "image", "style"]),
                                    createVNode("div", { class: "text-muted-foreground font-semibold" }, toDisplayString(user.name), 1),
                                    createVNode(unref(ChevronRight), { class: "size-6 hidden animate-in slide-in-from-left-1 arrow" })
                                  ];
                                }),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListboxRoot, { class: "py-8" }, {
                default: withCtx(() => [
                  createVNode(_component_ListboxContent, { class: "space-y-1 relative" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(following), (user) => {
                        return openBlock(), createBlock(_component_ListboxItem, {
                          key: user.id,
                          value: user.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: `/following/${user.user_name}`,
                              class: "p-3 bg-white/5 border rounded-md transition-colors hover:bg-white/10 grid grid-cols-[50px,_1fr,_auto] gap-x-2 items-center [&:hover_>_.arrow]:block"
                            }, {
                              default: withCtx(() => {
                                var _a2;
                                var _a;
                                return [
                                  createVNode(_component_Avatar, {
                                    initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(user.name),
                                    image: user.profile_picture,
                                    class: "font-bold text-lg",
                                    style: {
                                      backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))((_a2 = (_a = user == null ? undefined : user.name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"),
                                      color: "black"
                                    }
                                  }, null, 8, ["initials", "image", "style"]),
                                  createVNode("div", { class: "text-muted-foreground font-semibold" }, toDisplayString(user.name), 1),
                                  createVNode(unref(ChevronRight), { class: "size-6 hidden animate-in slide-in-from-left-1 arrow" })
                                ];
                              }),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/following/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BXwXJ7s3.mjs.map
