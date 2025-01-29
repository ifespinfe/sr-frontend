import { k as cn, Q as Ny, S as Ly, V as Qy, W as zy, X as Ky, Y as Xy, Z as jy, $ as Uy, a0 as Yy } from './server.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Loader, ChevronDown } from 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select-field",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    options: { default: () => [] },
    label: { default: "" },
    placeholder: {},
    name: {},
    disabled: { type: Boolean, default: false },
    state: { default: "normal" },
    loading: { type: Boolean, default: false }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const selected_option = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SelectRoot = Ny;
      const _component_SelectTrigger = Ly;
      const _component_SelectValue = Qy;
      const _component_SelectPortal = zy;
      const _component_SelectContent = Ky;
      const _component_SelectViewport = Xy;
      const _component_SelectItem = jy;
      const _component_SelectItemIndicator = Uy;
      const _component_SelectItemText = Yy;
      _push(ssrRenderComponent(_component_SelectRoot, mergeProps({
        "model-value": (_a = selected_option.value) != null ? _a : "",
        "onUpdate:modelValue": ($event) => selected_option.value = $event,
        disabled: _ctx.disabled || _ctx.loading,
        name: _ctx.name
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, {
              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                `inline-flex relative border data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&[data-state='open']_.trigger-icon]:rotate-180 w-full rounded-lg min-w-[160px] items-center justify-between px-3 text-[14px] leading-none h-[58px] gap-[5px] bg-white/5 shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none`,
                _ctx.state === "error" ? `border-destructive` : `border-border`
              )
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, {
                    placeholder: _ctx.placeholder,
                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                      selected_option.value && !!_ctx.label && "mt-4",
                      selected_option.value ? "text-foreground " : "text-muted-foreground",
                      "text-base"
                    )
                  }, null, _parent3, _scopeId2));
                  if (_ctx.loading) {
                    _push3(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(ChevronDown), { class: "trigger-icon size-4 relative transition-transform" }, null, _parent3, _scopeId2));
                  }
                  if (selected_option.value && _ctx.label) {
                    _push3(`<span class="${ssrRenderClass(
                      ("cn" in _ctx ? _ctx.cn : unref(cn))(
                        "absolute text-sm font-medium top-3 left-3 animate-in slide-in-from-bottom-1 -translate-y-1/2 label-text transition-all",
                        _ctx.state === "error" ? "text-destructive" : " text-muted-foreground"
                      )
                    )}"${_scopeId2}>${ssrInterpolate(_ctx.label)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_SelectValue, {
                      placeholder: _ctx.placeholder,
                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                        selected_option.value && !!_ctx.label && "mt-4",
                        selected_option.value ? "text-foreground " : "text-muted-foreground",
                        "text-base"
                      )
                    }, null, 8, ["placeholder", "class"]),
                    _ctx.loading ? (openBlock(), createBlock(unref(Loader), {
                      key: 0,
                      class: "size-4 animate-spin"
                    })) : (openBlock(), createBlock(unref(ChevronDown), {
                      key: 1,
                      class: "trigger-icon size-4 relative transition-transform"
                    })),
                    selected_option.value && _ctx.label ? (openBlock(), createBlock("span", {
                      key: 2,
                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                        "absolute text-sm font-medium top-3 left-3 animate-in slide-in-from-bottom-1 -translate-y-1/2 label-text transition-all",
                        _ctx.state === "error" ? "text-destructive" : " text-muted-foreground"
                      )
                    }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectPortal, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectContent, {
                    class: "min-w-[160px] max-h-[300px] overflow-auto w-[var(--radix-select-trigger-width)] bg-[#252528] border rounded shadow-lg will-change-[opacity,transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=top]:slide-in-from-bottom-1 data-[side=right]:slide-in-from-left-1 z-[100]",
                    position: "popper",
                    side: "bottom",
                    "side-offset": 5
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectViewport, { class: "p-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(_ctx.options, (option, index) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  key: index,
                                  value: option,
                                  class: "text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_SelectItemIndicator, { class: "absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_SelectItemText, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(option)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(option), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_SelectItemIndicator, { class: "absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center" }),
                                        createVNode(_component_SelectItemText, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(option), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    key: index,
                                    value: option,
                                    class: "text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectItemIndicator, { class: "absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center" }),
                                      createVNode(_component_SelectItemText, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(option), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectViewport, { class: "p-3" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  key: index,
                                  value: option,
                                  class: "text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectItemIndicator, { class: "absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center" }),
                                    createVNode(_component_SelectItemText, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(option), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectContent, {
                      class: "min-w-[160px] max-h-[300px] overflow-auto w-[var(--radix-select-trigger-width)] bg-[#252528] border rounded shadow-lg will-change-[opacity,transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=top]:slide-in-from-bottom-1 data-[side=right]:slide-in-from-left-1 z-[100]",
                      position: "popper",
                      side: "bottom",
                      "side-offset": 5
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectViewport, { class: "p-3" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
                              return openBlock(), createBlock(_component_SelectItem, {
                                key: index,
                                value: option,
                                class: "text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectItemIndicator, { class: "absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center" }),
                                  createVNode(_component_SelectItemText, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(option), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SelectTrigger, {
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                  `inline-flex relative border data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&[data-state='open']_.trigger-icon]:rotate-180 w-full rounded-lg min-w-[160px] items-center justify-between px-3 text-[14px] leading-none h-[58px] gap-[5px] bg-white/5 shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none`,
                  _ctx.state === "error" ? `border-destructive` : `border-border`
                )
              }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, {
                    placeholder: _ctx.placeholder,
                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                      selected_option.value && !!_ctx.label && "mt-4",
                      selected_option.value ? "text-foreground " : "text-muted-foreground",
                      "text-base"
                    )
                  }, null, 8, ["placeholder", "class"]),
                  _ctx.loading ? (openBlock(), createBlock(unref(Loader), {
                    key: 0,
                    class: "size-4 animate-spin"
                  })) : (openBlock(), createBlock(unref(ChevronDown), {
                    key: 1,
                    class: "trigger-icon size-4 relative transition-transform"
                  })),
                  selected_option.value && _ctx.label ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                      "absolute text-sm font-medium top-3 left-3 animate-in slide-in-from-bottom-1 -translate-y-1/2 label-text transition-all",
                      _ctx.state === "error" ? "text-destructive" : " text-muted-foreground"
                    )
                  }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_SelectPortal, null, {
                default: withCtx(() => [
                  createVNode(_component_SelectContent, {
                    class: "min-w-[160px] max-h-[300px] overflow-auto w-[var(--radix-select-trigger-width)] bg-[#252528] border rounded shadow-lg will-change-[opacity,transform] animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=top]:slide-in-from-bottom-1 data-[side=right]:slide-in-from-left-1 z-[100]",
                    position: "popper",
                    side: "bottom",
                    "side-offset": 5
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_SelectViewport, { class: "p-3" }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
                            return openBlock(), createBlock(_component_SelectItem, {
                              key: index,
                              value: option,
                              class: "text-[14px] leading-none rounded-[3px] flex items-center h-[35px] px-[15px] relative select-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_SelectItemIndicator, { class: "absolute right-[15px] size-[12px] rounded-full bg-foreground inline-flex items-center justify-center" }),
                                createVNode(_component_SelectItemText, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(option), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/select-field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=select-field-Bp7xTQ5L.mjs.map
