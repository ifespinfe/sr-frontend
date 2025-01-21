import { _ as __nuxt_component_0 } from './nuxt-link-BvHIOyM7.mjs';
import { k as cn, v as getInitials, a as useNuxtApp, _ as _sfc_main$4, n as navigateTo, o as kh, M as Mh, F as Fh } from './server.mjs';
import { _ as _sfc_main$2 } from './avatar-w1P8IEWG.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, watch } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { ArrowUpLeft, Search, ArrowRight } from 'lucide-vue-next';
import debounce from 'lodash-es/debounce.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "host-search-list",
  __ssrInlineRender: true,
  props: {
    hosts: { default: () => [] }
  },
  setup(__props) {
    const handleSelection = (e, slug) => {
      e.preventDefault();
      navigateTo(`/${slug}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListboxRoot = kh;
      const _component_ListboxContent = Mh;
      const _component_ListboxItem = Fh;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Avatar = _sfc_main$2;
      _push(ssrRenderComponent(_component_ListboxRoot, mergeProps({ class: "w-full rounded-2xl bg-[#252528]" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListboxContent, { class: "max-h-[296px] overflow-auto w-full p-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.hosts.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.hosts, (host, index) => {
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
                                host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item",
                                "w-full grid gap-2 items-center border-0 py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                              )
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a, _b, _c, _d;
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Avatar, {
                                    initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a = host == null ? undefined : host.stage_name) != null ? _a : host == null ? undefined : host.email),
                                    image: host.profile_picture
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span class="text-base font-semibold"${_scopeId4}>${ssrInterpolate((_b = host == null ? undefined : host.stage_name) != null ? _b : host == null ? undefined : host.email)}</span>`);
                                  if (host.is_live) {
                                    _push5(`<div class="inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"${_scopeId4}><span${_scopeId4}>LIVE</span><span class="size-2 rounded-full bg-destructive"${_scopeId4}></span></div>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(ssrRenderComponent(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Avatar, {
                                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_c = host == null ? undefined : host.stage_name) != null ? _c : host == null ? undefined : host.email),
                                      image: host.profile_picture
                                    }, null, 8, ["initials", "image"]),
                                    createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_d = host == null ? undefined : host.stage_name) != null ? _d : host == null ? undefined : host.email), 1),
                                    host.is_live ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"
                                    }, [
                                      createVNode("span", null, "LIVE"),
                                      createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                    ])) : createCommentVNode("", true),
                                    createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
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
                                  host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item",
                                  "w-full grid gap-2 items-center border-0 py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                                )
                              }, {
                                default: withCtx(() => {
                                  var _a, _b;
                                  return [
                                    createVNode(_component_Avatar, {
                                      initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a = host == null ? undefined : host.stage_name) != null ? _a : host == null ? undefined : host.email),
                                      image: host.profile_picture
                                    }, null, 8, ["initials", "image"]),
                                    createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b = host == null ? undefined : host.stage_name) != null ? _b : host == null ? undefined : host.email), 1),
                                    host.is_live ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"
                                    }, [
                                      createVNode("span", null, "LIVE"),
                                      createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                    ])) : createCommentVNode("", true),
                                    createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
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
                    _push3(`<div class="p-4 text-center text-base text-muted-foreground"${_scopeId2}> No match found </div>`);
                  }
                } else {
                  return [
                    _ctx.hosts.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.hosts, (host, index) => {
                      return openBlock(), createBlock(_component_ListboxItem, {
                        key: host.id + index,
                        value: host.id,
                        onSelect: (e) => handleSelection(e, host.slug)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: `/${host == null ? undefined : host.slug}`,
                            class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                              host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item",
                              "w-full grid gap-2 items-center border-0 py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                            )
                          }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                createVNode(_component_Avatar, {
                                  initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a = host == null ? undefined : host.stage_name) != null ? _a : host == null ? undefined : host.email),
                                  image: host.profile_picture
                                }, null, 8, ["initials", "image"]),
                                createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b = host == null ? undefined : host.stage_name) != null ? _b : host == null ? undefined : host.email), 1),
                                host.is_live ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"
                                }, [
                                  createVNode("span", null, "LIVE"),
                                  createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                                ])) : createCommentVNode("", true),
                                createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                              ];
                            }),
                            _: 2
                          }, 1032, ["to", "class"])
                        ]),
                        _: 2
                      }, 1032, ["value", "onSelect"]);
                    }), 128)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-4 text-center text-base text-muted-foreground"
                    }, " No match found "))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ListboxContent, { class: "max-h-[296px] overflow-auto w-full p-2" }, {
                default: withCtx(() => [
                  _ctx.hosts.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.hosts, (host, index) => {
                    return openBlock(), createBlock(_component_ListboxItem, {
                      key: host.id + index,
                      value: host.id,
                      onSelect: (e) => handleSelection(e, host.slug)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: `/${host == null ? undefined : host.slug}`,
                          class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                            host.is_live ? "grid-cols-host-item__live" : "grid-cols-host-item",
                            "w-full grid gap-2 items-center border-0 py-[8px] px-[12px] h-[56px] leading-none text-[13px] relative select-none outline-none ring-1 ring-transparent hover:bg-white/5 data-[highlighted]:bg-white/5 [&:hover_.goto]:!block [&[data-highlighted]_.goto]:block focus:ring-input data-[state=checked]:ring-ring data-[state=checked]:text-white data-[disabled]:opacity-50 rounded-lg cursor-pointer"
                          )
                        }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              createVNode(_component_Avatar, {
                                initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a = host == null ? undefined : host.stage_name) != null ? _a : host == null ? undefined : host.email),
                                image: host.profile_picture
                              }, null, 8, ["initials", "image"]),
                              createVNode("span", { class: "text-base font-semibold" }, toDisplayString((_b = host == null ? undefined : host.stage_name) != null ? _b : host == null ? undefined : host.email), 1),
                              host.is_live ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "inline-flex gap-1 items-center bg-white/10 rounded-2xl px-2 py-1"
                              }, [
                                createVNode("span", null, "LIVE"),
                                createVNode("span", { class: "size-2 rounded-full bg-destructive" })
                              ])) : createCommentVNode("", true),
                              createVNode(unref(ArrowUpLeft), { class: "goto size-4 text-muted-foreground hidden animate-in slide-in-from-bottom-2" })
                            ];
                          }),
                          _: 2
                        }, 1032, ["to", "class"])
                      ]),
                      _: 2
                    }, 1032, ["value", "onSelect"]);
                  }), 128)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-4 text-center text-base text-muted-foreground"
                  }, " No match found "))
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/host-search-list.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "host-search-input",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const searching = ref(false);
    const searched_hosts = ref([]);
    const show_result = ref(false);
    const {
      $repo: { user }
    } = useNuxtApp();
    const handleSearch = async () => {
      var _a, _b;
      try {
        searching.value = true;
        const response = await user.searchHost(search.value);
        searching.value = false;
        if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.hosts) {
          searched_hosts.value = (_b = response == null ? void 0 : response.data) == null ? void 0 : _b.hosts;
        }
        show_result.value = true;
      } catch (e) {
        searching.value = false;
        searched_hosts.value = [];
        console.error("ERORO", e);
      }
    };
    const debouncedSearch = debounce(handleSearch, 300);
    watch(search, (data) => {
      if (data) {
        debouncedSearch();
      }
      if (!data) {
        searched_hosts.value = [];
        show_result.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HostSearchList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative rounded-full border border-input focus-within:ring-ring shadow-sm transition-colors bg-white/5 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1 pl-12 pr-8 py-6 h-[56px]" }, _attrs))}><input type="text" placeholder="Search DJs MCs, Hypeman name" class="focus-visible:outline-none bg-transparent text-base absolute inset-0 p-[inherit] z-[3]"${ssrRenderAttr("value", unref(search))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "absolute left-4 top-1/2 -translate-y-[52%] size-5 text-muted-foreground" }, null, _parent));
      _push(`<div class="absolute right-4 top-1/2 -translate-y-[52%] z-[4]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/search?search=${unref(search)}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (unref(search) || unref(searching)) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                size: "icon",
                variant: "outline",
                class: "animate-in slide-in-from-left-1 fade-out-0",
                loading: unref(searching),
                disabled: !((_a = unref(searched_hosts)) == null ? undefined : _a.length)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ArrowRight), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ArrowRight))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(search) || unref(searching) ? (openBlock(), createBlock(_sfc_main$4, {
                key: 0,
                size: "icon",
                variant: "outline",
                class: "animate-in slide-in-from-left-1 fade-out-0",
                loading: unref(searching),
                disabled: !((_b = unref(searched_hosts)) == null ? undefined : _b.length)
              }, {
                default: withCtx(() => [
                  createVNode(unref(ArrowRight))
                ]),
                _: 1
              }, 8, ["loading", "disabled"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute left-0 translate-y-[35px] z-[5] w-full">`);
      if (unref(show_result) && unref(search)) {
        _push(ssrRenderComponent(_component_HostSearchList, {
          hosts: unref(searched_hosts),
          class: "animate-in slide-in-from-top-1 fade-in-20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/host-search-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=host-search-input-DlwBe-ss.mjs.map
