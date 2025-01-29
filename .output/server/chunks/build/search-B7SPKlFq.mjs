import { _ as _sfc_main$1 } from './back-button-C72TNXKz.mjs';
import { e as useSeoMeta, c as useRoute, k as cn, v as getInitials, n as navigateTo, o as kh, M as Mh, F as Fh } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { _ as _sfc_main$2 } from './avatar-BNYzPSiu.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Dot, ArrowUpLeft, Loader } from 'lucide-vue-next';
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
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    useSeoMeta({ title: "Search Results" });
    const search = (_a = useRoute().query) == null ? undefined : _a.search;
    const { data, status } = useCustomFetch(
      `user/search-host?name=${search}&per_page=100&page=1`
    );
    const hosts = computed(() => {
      var _a3;
      var _a2;
      return (_a3 = (_a2 = data.value) == null ? undefined : _a2.data.hosts) != null ? _a3 : [];
    });
    const handleSelection = (e, slug) => {
      e.preventDefault();
      navigateTo(`/${slug}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$1;
      const _component_ListboxRoot = kh;
      const _component_ListboxContent = Mh;
      const _component_ListboxItem = Fh;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Avatar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-16 pb-40 relative" }, _attrs))}><div class="max-w-full w-[912px] mx-auto"><div class="flex gap-x-2 items-center text-muted-foreground fixed top-24 z-10">`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/audience" }, null, _parent));
      _push(`<div class="font-display sm:text-xl"> Showing results for <span class="font-semibold ml-2">&quot;${ssrInterpolate(unref(search))}&quot;</span></div>`);
      _push(ssrRenderComponent(unref(Dot), { class: "size-12" }, null, _parent));
      _push(`<div class="sm:text-xl shrink-0">${ssrInterpolate(unref(hosts).length)} results</div></div><div class="relative mt-6">`);
      _push(ssrRenderComponent(_component_ListboxRoot, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListboxContent, { class: "w-full space-y-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(hosts).length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(hosts), (host, index) => {
                      _push3(ssrRenderComponent(_component_ListboxItem, {
                        key: host.id + index,
                        value: host.id,
                        onSelect: (e) => handleSelection(e, host.slug)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: `/${host == null ? undefined : host.slug}`,
                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item__live",
                                "w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                              )
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j;
                                var _a2, _b, _c, _d, _e, _f;
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Avatar, {
                                    initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                    image: host.profile_picture
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<div class="grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base"${_scopeId4}><span class="text-base font-semibold"${_scopeId4}>${ssrInterpolate((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email)}</span><div class="flex justify-between items-center"${_scopeId4}><div${_scopeId4}><span class="font-semibold"${_scopeId4}>${ssrInterpolate((_c2 = (_a2 = host == null ? undefined : host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0)}</span> followers </div><div${_scopeId4}><span class="font-semibold"${_scopeId4}>${ssrInterpolate((_d2 = (_b = host == null ? undefined : host.stats) == null ? undefined : _b.events) != null ? _d2 : 0)}</span> events </div><div${_scopeId4}><span class="font-semibold"${_scopeId4}>${ssrInterpolate((_e2 = (_c = host == null ? undefined : host.stats) == null ? undefined : _c.requests) != null ? _e2 : 0)}</span> requests </div></div></div><div${_scopeId4}><div class="${ssrRenderClass(
                                    ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                      "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",
                                      host.is_live ? "opacity-100" : "opacity-0"
                                    )
                                  )}"${_scopeId4}><span${_scopeId4}>LIVE</span><span class="size-2 rounded-full bg-destructive"${_scopeId4}></span></div></div>`);
                                  _push5(ssrRenderComponent(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Avatar, {
                                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_f2 = host == null ? undefined : host.stage_name) != null ? _f2 : host == null ? undefined : host.email),
                                      image: host.profile_picture
                                    }, null, 8, ["initials", "image"]),
                                    createVNode("div", { class: "grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base" }, [
                                      createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_g = host == null ? undefined : host.stage_name) != null ? _g : host == null ? undefined : host.email), 1),
                                      createVNode("div", { class: "flex justify-between items-center" }, [
                                        createVNode("div", null, [
                                          createVNode("span", { class: "font-semibold" }, toDisplayString((_h = (_d = host == null ? undefined : host.stats) == null ? undefined : _d.followers) != null ? _h : 0), 1),
                                          createTextVNode(" followers ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("span", { class: "font-semibold" }, toDisplayString((_i = (_e = host == null ? undefined : host.stats) == null ? undefined : _e.events) != null ? _i : 0), 1),
                                          createTextVNode(" events ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("span", { class: "font-semibold" }, toDisplayString((_j = (_f = host == null ? undefined : host.stats) == null ? undefined : _f.requests) != null ? _j : 0), 1),
                                          createTextVNode(" requests ")
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", {
                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                          "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",
                                          host.is_live ? "opacity-100" : "opacity-0"
                                        )
                                      }, [
                                        createVNode("span", null, "LIVE"),
                                        createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                      ], 2)
                                    ]),
                                    createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: `/${host == null ? undefined : host.slug}`,
                              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                "w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                              )
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a3, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j;
                                var _a2, _b, _c, _d, _e, _f;
                                if (_push5) {
                                  _push5(`<div class="flex items-center gap-x-4"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_Avatar, {
                                    initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                    image: host.profile_picture
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="text-base font-semibold"${_scopeId4}>${ssrInterpolate((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email)}</span></div><div class="flex justify-between items-center"${_scopeId4}><div class="space-y-px"${_scopeId4}><div class="font-semibold"${_scopeId4}>${ssrInterpolate((_c2 = (_a2 = host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0)}</div><div${_scopeId4}>followers</div></div><div class="space-y-px"${_scopeId4}><div class="font-semibold"${_scopeId4}>${ssrInterpolate((_d2 = (_b = host.stats) == null ? undefined : _b.events) != null ? _d2 : 0)}</div><div${_scopeId4}>events</div></div><div class="space-y-px"${_scopeId4}><div class="font-semibold"${_scopeId4}>${ssrInterpolate((_e2 = (_c = host.stats) == null ? undefined : _c.requests) != null ? _e2 : 0)}</div><div${_scopeId4}>requests</div></div><div class="${ssrRenderClass(
                                    ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                      "inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1",
                                      host.is_live ? "opacity-100" : "opacity-0"
                                    )
                                  )}"${_scopeId4}><span${_scopeId4}>LIVE</span><span class="size-2 rounded-full bg-destructive"${_scopeId4}></span></div><div class="min-w-4"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" }, null, _parent5, _scopeId4));
                                  _push5(`</div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center gap-x-4" }, [
                                      createVNode(_component_Avatar, {
                                        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_f2 = host == null ? undefined : host.stage_name) != null ? _f2 : host == null ? undefined : host.email),
                                        image: host.profile_picture
                                      }, null, 8, ["initials", "image"]),
                                      createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_g = host == null ? undefined : host.stage_name) != null ? _g : host == null ? undefined : host.email), 1)
                                    ]),
                                    createVNode("div", { class: "flex justify-between items-center" }, [
                                      createVNode("div", { class: "space-y-px" }, [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString((_h = (_d = host.stats) == null ? undefined : _d.followers) != null ? _h : 0), 1),
                                        createVNode("div", null, "followers")
                                      ]),
                                      createVNode("div", { class: "space-y-px" }, [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString((_i = (_e = host.stats) == null ? undefined : _e.events) != null ? _i : 0), 1),
                                        createVNode("div", null, "events")
                                      ]),
                                      createVNode("div", { class: "space-y-px" }, [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString((_j = (_f = host.stats) == null ? undefined : _f.requests) != null ? _j : 0), 1),
                                        createVNode("div", null, "requests")
                                      ]),
                                      createVNode("div", {
                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                          "inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1",
                                          host.is_live ? "opacity-100" : "opacity-0"
                                        )
                                      }, [
                                        createVNode("span", null, "LIVE"),
                                        createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                      ], 2),
                                      createVNode("div", { class: "min-w-4" }, [
                                        createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: `/${host == null ? undefined : host.slug}`,
                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                  host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item__live",
                                  "w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                                )
                              }, {
                                default: withCtx(() => {
                                  var _a3, _b2, _c2, _d, _e;
                                  var _a2, _b, _c;
                                  return [
                                    createVNode(_component_Avatar, {
                                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                      image: host.profile_picture
                                    }, null, 8, ["initials", "image"]),
                                    createVNode("div", { class: "grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base" }, [
                                      createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email), 1),
                                      createVNode("div", { class: "flex justify-between items-center" }, [
                                        createVNode("div", null, [
                                          createVNode("span", { class: "font-semibold" }, toDisplayString((_c2 = (_a2 = host == null ? undefined : host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0), 1),
                                          createTextVNode(" followers ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("span", { class: "font-semibold" }, toDisplayString((_d = (_b = host == null ? undefined : host.stats) == null ? undefined : _b.events) != null ? _d : 0), 1),
                                          createTextVNode(" events ")
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("span", { class: "font-semibold" }, toDisplayString((_e = (_c = host == null ? undefined : host.stats) == null ? undefined : _c.requests) != null ? _e : 0), 1),
                                          createTextVNode(" requests ")
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", {
                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                          "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",
                                          host.is_live ? "opacity-100" : "opacity-0"
                                        )
                                      }, [
                                        createVNode("span", null, "LIVE"),
                                        createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                      ], 2)
                                    ]),
                                    createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                                  ];
                                }),
                                _: 2
                              }, 1032, ["to", "class"]),
                              createVNode(_component_NuxtLink, {
                                to: `/${host == null ? undefined : host.slug}`,
                                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                  "w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                                )
                              }, {
                                default: withCtx(() => {
                                  var _a3, _b2, _c2, _d, _e;
                                  var _a2, _b, _c;
                                  return [
                                    createVNode("div", { class: "flex items-center gap-x-4" }, [
                                      createVNode(_component_Avatar, {
                                        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                        image: host.profile_picture
                                      }, null, 8, ["initials", "image"]),
                                      createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email), 1)
                                    ]),
                                    createVNode("div", { class: "flex justify-between items-center" }, [
                                      createVNode("div", { class: "space-y-px" }, [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString((_c2 = (_a2 = host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0), 1),
                                        createVNode("div", null, "followers")
                                      ]),
                                      createVNode("div", { class: "space-y-px" }, [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString((_d = (_b = host.stats) == null ? undefined : _b.events) != null ? _d : 0), 1),
                                        createVNode("div", null, "events")
                                      ]),
                                      createVNode("div", { class: "space-y-px" }, [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString((_e = (_c = host.stats) == null ? undefined : _c.requests) != null ? _e : 0), 1),
                                        createVNode("div", null, "requests")
                                      ]),
                                      createVNode("div", {
                                        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                          "inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1",
                                          host.is_live ? "opacity-100" : "opacity-0"
                                        )
                                      }, [
                                        createVNode("span", null, "LIVE"),
                                        createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                      ], 2),
                                      createVNode("div", { class: "min-w-4" }, [
                                        createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                                      ])
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1032, ["to", "class"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(hosts).length && unref(status) !== "pending") {
                    _push3(`<div class="p-4 text-center text-base text-muted-foreground"${_scopeId2}> No match found </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(hosts).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(hosts), (host, index) => {
                      return openBlock(), createBlock(_component_ListboxItem, {
                        key: host.id + index,
                        value: host.id,
                        onSelect: (e) => handleSelection(e, host.slug)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: `/${host == null ? undefined : host.slug}`,
                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                              host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item__live",
                              "w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                            )
                          }, {
                            default: withCtx(() => {
                              var _a3, _b2, _c2, _d, _e;
                              var _a2, _b, _c;
                              return [
                                createVNode(_component_Avatar, {
                                  initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                  image: host.profile_picture
                                }, null, 8, ["initials", "image"]),
                                createVNode("div", { class: "grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base" }, [
                                  createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email), 1),
                                  createVNode("div", { class: "flex justify-between items-center" }, [
                                    createVNode("div", null, [
                                      createVNode("span", { class: "font-semibold" }, toDisplayString((_c2 = (_a2 = host == null ? undefined : host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0), 1),
                                      createTextVNode(" followers ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("span", { class: "font-semibold" }, toDisplayString((_d = (_b = host == null ? undefined : host.stats) == null ? undefined : _b.events) != null ? _d : 0), 1),
                                      createTextVNode(" events ")
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("span", { class: "font-semibold" }, toDisplayString((_e = (_c = host == null ? undefined : host.stats) == null ? undefined : _c.requests) != null ? _e : 0), 1),
                                      createTextVNode(" requests ")
                                    ])
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", {
                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                      "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",
                                      host.is_live ? "opacity-100" : "opacity-0"
                                    )
                                  }, [
                                    createVNode("span", null, "LIVE"),
                                    createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                  ], 2)
                                ]),
                                createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                              ];
                            }),
                            _: 2
                          }, 1032, ["to", "class"]),
                          createVNode(_component_NuxtLink, {
                            to: `/${host == null ? undefined : host.slug}`,
                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                              "w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                            )
                          }, {
                            default: withCtx(() => {
                              var _a3, _b2, _c2, _d, _e;
                              var _a2, _b, _c;
                              return [
                                createVNode("div", { class: "flex items-center gap-x-4" }, [
                                  createVNode(_component_Avatar, {
                                    initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                    image: host.profile_picture
                                  }, null, 8, ["initials", "image"]),
                                  createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email), 1)
                                ]),
                                createVNode("div", { class: "flex justify-between items-center" }, [
                                  createVNode("div", { class: "space-y-px" }, [
                                    createVNode("div", { class: "font-semibold" }, toDisplayString((_c2 = (_a2 = host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0), 1),
                                    createVNode("div", null, "followers")
                                  ]),
                                  createVNode("div", { class: "space-y-px" }, [
                                    createVNode("div", { class: "font-semibold" }, toDisplayString((_d = (_b = host.stats) == null ? undefined : _b.events) != null ? _d : 0), 1),
                                    createVNode("div", null, "events")
                                  ]),
                                  createVNode("div", { class: "space-y-px" }, [
                                    createVNode("div", { class: "font-semibold" }, toDisplayString((_e = (_c = host.stats) == null ? undefined : _c.requests) != null ? _e : 0), 1),
                                    createVNode("div", null, "requests")
                                  ]),
                                  createVNode("div", {
                                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                      "inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1",
                                      host.is_live ? "opacity-100" : "opacity-0"
                                    )
                                  }, [
                                    createVNode("span", null, "LIVE"),
                                    createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                  ], 2),
                                  createVNode("div", { class: "min-w-4" }, [
                                    createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                                  ])
                                ])
                              ];
                            }),
                            _: 2
                          }, 1032, ["to", "class"])
                        ]),
                        _: 2
                      }, 1032, ["value", "onSelect"]);
                    }), 128)) : createCommentVNode("", true),
                    !unref(hosts).length && unref(status) !== "pending" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-4 text-center text-base text-muted-foreground"
                    }, " No match found ")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListboxContent, { class: "w-full space-y-1" }, {
                default: withCtx(() => [
                  unref(hosts).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(hosts), (host, index) => {
                    return openBlock(), createBlock(_component_ListboxItem, {
                      key: host.id + index,
                      value: host.id,
                      onSelect: (e) => handleSelection(e, host.slug)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: `/${host == null ? undefined : host.slug}`,
                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                            host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item__live",
                            "w-full hidden md:grid gap-2 items-center border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                          )
                        }, {
                          default: withCtx(() => {
                            var _a3, _b2, _c2, _d, _e;
                            var _a2, _b, _c;
                            return [
                              createVNode(_component_Avatar, {
                                initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                image: host.profile_picture
                              }, null, 8, ["initials", "image"]),
                              createVNode("div", { class: "grid grid-cols-[250px,_1fr] items-center mr-6 lg:mr-10 text-base" }, [
                                createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email), 1),
                                createVNode("div", { class: "flex justify-between items-center" }, [
                                  createVNode("div", null, [
                                    createVNode("span", { class: "font-semibold" }, toDisplayString((_c2 = (_a2 = host == null ? undefined : host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0), 1),
                                    createTextVNode(" followers ")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "font-semibold" }, toDisplayString((_d = (_b = host == null ? undefined : host.stats) == null ? undefined : _b.events) != null ? _d : 0), 1),
                                    createTextVNode(" events ")
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("span", { class: "font-semibold" }, toDisplayString((_e = (_c = host == null ? undefined : host.stats) == null ? undefined : _c.requests) != null ? _e : 0), 1),
                                    createTextVNode(" requests ")
                                  ])
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", {
                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                    "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1",
                                    host.is_live ? "opacity-100" : "opacity-0"
                                  )
                                }, [
                                  createVNode("span", null, "LIVE"),
                                  createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                ], 2)
                              ]),
                              createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                            ];
                          }),
                          _: 2
                        }, 1032, ["to", "class"]),
                        createVNode(_component_NuxtLink, {
                          to: `/${host == null ? undefined : host.slug}`,
                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                            "w-full md:hidden grid gap-4 border text-muted-foreground py-[16px] px-[16px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent bg-white/5 hover:bg-white/10 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                          )
                        }, {
                          default: withCtx(() => {
                            var _a3, _b2, _c2, _d, _e;
                            var _a2, _b, _c;
                            return [
                              createVNode("div", { class: "flex items-center gap-x-4" }, [
                                createVNode(_component_Avatar, {
                                  initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a3 = host == null ? undefined : host.stage_name) != null ? _a3 : host == null ? undefined : host.email),
                                  image: host.profile_picture
                                }, null, 8, ["initials", "image"]),
                                createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b2 = host == null ? undefined : host.stage_name) != null ? _b2 : host == null ? undefined : host.email), 1)
                              ]),
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode("div", { class: "space-y-px" }, [
                                  createVNode("div", { class: "font-semibold" }, toDisplayString((_c2 = (_a2 = host.stats) == null ? undefined : _a2.followers) != null ? _c2 : 0), 1),
                                  createVNode("div", null, "followers")
                                ]),
                                createVNode("div", { class: "space-y-px" }, [
                                  createVNode("div", { class: "font-semibold" }, toDisplayString((_d = (_b = host.stats) == null ? undefined : _b.events) != null ? _d : 0), 1),
                                  createVNode("div", null, "events")
                                ]),
                                createVNode("div", { class: "space-y-px" }, [
                                  createVNode("div", { class: "font-semibold" }, toDisplayString((_e = (_c = host.stats) == null ? undefined : _c.requests) != null ? _e : 0), 1),
                                  createVNode("div", null, "requests")
                                ]),
                                createVNode("div", {
                                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                                    "inline-flex gap-1 text-xs font-bol items-center bg-white/10 rounded-2xl px-2 py-1",
                                    host.is_live ? "opacity-100" : "opacity-0"
                                  )
                                }, [
                                  createVNode("span", null, "LIVE"),
                                  createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                ], 2),
                                createVNode("div", { class: "min-w-4" }, [
                                  createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                                ])
                              ])
                            ];
                          }),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1032, ["value", "onSelect"]);
                  }), 128)) : createCommentVNode("", true),
                  !unref(hosts).length && unref(status) !== "pending" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-4 text-center text-base text-muted-foreground"
                  }, " No match found ")) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(status) === "pending") {
        _push(`<div class="place-center">`);
        _push(ssrRenderComponent(unref(Loader), { class: "animate-spin size-5" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=search-B7SPKlFq.mjs.map
