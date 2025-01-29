import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { h as formatMoney, m as ji, U as Ui, q as qi, _ as _sfc_main$4 } from './server.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { XCircle, ChevronDown } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './container-Ck9YaQTT.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-history-table",
  __ssrInlineRender: true,
  props: {
    event_history: {},
    loading: { type: Boolean },
    disabled: { type: Boolean },
    onDone: { type: Function }
  },
  setup(__props) {
    const heading = ref(["EVENT", "LOCATION", "DATE", "REQUESTS", "EARNING"]);
    const props = __props;
    const { data, status } = useCustomFetch(
      "/past/events",
      {
        immediate: !props.disabled,
        onResponse: (data2) => {
          var _a, _b;
          (_b = props.onDone) == null ? undefined : _b.call(props, (_a = data2.response._data) == null ? undefined : _a.data);
        }
      }
    );
    const events = computed(
      () => {
        var _a2, _b2;
        var _a, _b, _c;
        return (_b2 = (_a2 = (_a = props.event_history) == null ? undefined : _a.event_details) != null ? _a2 : (_c = (_b = data.value) == null ? undefined : _b.data) == null ? undefined : _c.event_details) != null ? _b2 : [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CollapsibleRoot = ji;
      const _component_CollapsibleTrigger = Ui;
      const _component_CollapsibleContent = qi;
      const _component_UiButton = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        heading: unref(heading),
        data: unref(events),
        loading: unref(status) === "pending" || _ctx.loading,
        class: "hidden md:block"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-[297px] grid place-items-center"${_scopeId}><div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(XCircle), { class: "size-8 block mx-auto" }, null, _parent2, _scopeId));
            _push2(`<div class="text-2xl font-semibold text-muted-foreground text-center"${_scopeId}> No events yet </div><div class="text-sm text-muted-foreground text-center"${_scopeId}> You haven\u2019t completed any event yet. Once you do, your events will appear here </div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-[297px] grid place-items-center" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(unref(XCircle), { class: "size-8 block mx-auto" }),
                  createVNode("div", { class: "text-2xl font-semibold text-muted-foreground text-center" }, " No events yet "),
                  createVNode("div", { class: "text-sm text-muted-foreground text-center" }, " You haven\u2019t completed any event yet. Once you do, your events will appear here ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(events), (event) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                custom: "",
                key: event.id,
                to: `events/${event.id}/event-details`
              }, {
                default: withCtx(({ navigate }, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`<tr class="!h-20 text-muted-foreground"${_scopeId2}><td${_scopeId2}>${ssrInterpolate(event.title)}</td><td${_scopeId2}>${ssrInterpolate(event.address)}</td><td${_scopeId2}>${ssrInterpolate(event.start_date)}</td><td${_scopeId2}>${ssrInterpolate(event.requests_count)}</td><td${_scopeId2}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = event.earnings) != null ? _a : 0))}</td></tr>`);
                  } else {
                    return [
                      createVNode("tr", {
                        class: "!h-20 text-muted-foreground",
                        onClick: navigate
                      }, [
                        createVNode("td", null, toDisplayString(event.title), 1),
                        createVNode("td", null, toDisplayString(event.address), 1),
                        createVNode("td", null, toDisplayString(event.start_date), 1),
                        createVNode("td", null, toDisplayString(event.requests_count), 1),
                        createVNode("td", null, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = event.earnings) != null ? _b : 0)), 1)
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(events), (event) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  custom: "",
                  key: event.id,
                  to: `events/${event.id}/event-details`
                }, {
                  default: withCtx(({ navigate }) => {
                    var _a;
                    return [
                      createVNode("tr", {
                        class: "!h-20 text-muted-foreground",
                        onClick: navigate
                      }, [
                        createVNode("td", null, toDisplayString(event.title), 1),
                        createVNode("td", null, toDisplayString(event.address), 1),
                        createVNode("td", null, toDisplayString(event.start_date), 1),
                        createVNode("td", null, toDisplayString(event.requests_count), 1),
                        createVNode("td", null, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = event.earnings) != null ? _a : 0)), 1)
                      ], 8, ["onClick"])
                    ];
                  }),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-1 md:hidden">`);
      if (unref(status) === "pending") {
        _push(`<!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-10 bg-white/5 animate-pulse"></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(unref(events), (event, index) => {
          _push(ssrRenderComponent(_component_CollapsibleRoot, {
            key: event.id + index,
            class: "rounded-lg bg-white/5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_CollapsibleTrigger, { class: "flex items-center justify-between w-full p-4 [&[data-state='open']_.caret]:rotate-180" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="font-semibold"${_scopeId2}>${ssrInterpolate(event.title)}</div>`);
                      _push3(ssrRenderComponent(unref(ChevronDown), { class: "size-5 caret transition-transform relative" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "font-semibold" }, toDisplayString(event.title), 1),
                        createVNode(unref(ChevronDown), { class: "size-5 caret transition-transform relative" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_CollapsibleContent, { class: "data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(`<div class="space-y-4 px-4 pb-4"${_scopeId2}><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>LOCATION</div><div class=""${_scopeId2}>${ssrInterpolate(event.address)}</div></div><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>DATE</div><div class=""${_scopeId2}>${ssrInterpolate(event.start_date)}</div></div><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>REQUESTS</div><div class=""${_scopeId2}>${ssrInterpolate(event.requests_count)}</div></div><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>EARNING</div><div class=""${_scopeId2}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = event.earnings) != null ? _a : 0))}</div></div>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `events/${event.id}/event-details`,
                        class: "block w-full border"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiButton, {
                              variant: "secondary",
                              class: "w-full"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Open `);
                                } else {
                                  return [
                                    createTextVNode(" Open ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiButton, {
                                variant: "secondary",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open ")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "space-y-4 px-4 pb-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "LOCATION"),
                            createVNode("div", { class: "" }, toDisplayString(event.address), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "DATE"),
                            createVNode("div", { class: "" }, toDisplayString(event.start_date), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "REQUESTS"),
                            createVNode("div", { class: "" }, toDisplayString(event.requests_count), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "EARNING"),
                            createVNode("div", { class: "" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = event.earnings) != null ? _b : 0)), 1)
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: `events/${event.id}/event-details`,
                            class: "block w-full border"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                variant: "secondary",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_CollapsibleTrigger, { class: "flex items-center justify-between w-full p-4 [&[data-state='open']_.caret]:rotate-180" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "font-semibold" }, toDisplayString(event.title), 1),
                      createVNode(unref(ChevronDown), { class: "size-5 caret transition-transform relative" })
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_CollapsibleContent, { class: "data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode("div", { class: "space-y-4 px-4 pb-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "LOCATION"),
                            createVNode("div", { class: "" }, toDisplayString(event.address), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "DATE"),
                            createVNode("div", { class: "" }, toDisplayString(event.start_date), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "REQUESTS"),
                            createVNode("div", { class: "" }, toDisplayString(event.requests_count), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "EARNING"),
                            createVNode("div", { class: "" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = event.earnings) != null ? _a : 0)), 1)
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: `events/${event.id}/event-details`,
                            class: "block w-full border"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                variant: "secondary",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        if (!unref(events).length) {
          _push(`<div class="min-h-[297px] grid place-items-center"><div class="space-y-4">`);
          _push(ssrRenderComponent(unref(XCircle), { class: "size-8 block mx-auto" }, null, _parent));
          _push(`<div class="text-2xl font-semibold text-muted-foreground text-center"> No events yet </div><div class="text-sm text-muted-foreground text-center"> You haven\u2019t completed any event yet. Once you do, your events will appear here </div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/event-history-table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=event-history-table-CdTu_FwT.mjs.map
