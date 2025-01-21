import { _ as _sfc_main$4, a7 as eu, a8 as tu, a9 as Dv, aa as Eu, ab as xu, ac as Gl, ad as Pu, ae as Du } from './server.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, ref, mergeProps, unref, withCtx, createTextVNode, renderSlot, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { X } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    showClose: { type: Boolean, default: true },
    size: { default: "md" },
    controlled: { type: Boolean, default: false },
    hideTrigger: { type: Boolean, default: false }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const modal_variants = cva(
      "content fixed bg-gray-900 overflow-auto top-[50%] left-[50%] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-background shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]",
      {
        variants: {
          size: {
            xl: "max-w-[4xl] max-h-[95vh]",
            lg: "max-w-3xl max-h-[85vh]",
            md: "max-w-xl max-h-[75vh]",
            sm: "max-w-[500px] max-h-[55vh]"
          }
        },
        defaultVariants: {
          size: "lg"
        }
      }
    );
    const model = useModel(__props, "modelValue");
    const modal_open = ref(false);
    const updateOpen = (open) => {
      if (__props.controlled) {
        model.value = open;
        return;
      }
      modal_open.value = open;
    };
    const toggle = () => {
      modal_open.value = !modal_open.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogRoot = eu;
      const _component_DialogTrigger = tu;
      const _component_DialogPortal = Dv;
      const _component_DialogOverlay = Eu;
      const _component_DialogContent = xu;
      const _component_DialogClose = Gl;
      const _component_DialogTitle = Pu;
      const _component_DialogDescription = Du;
      _push(ssrRenderComponent(_component_DialogRoot, mergeProps({
        open: _ctx.controlled ? model.value : unref(modal_open),
        "onUpdate:open": updateOpen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.hideTrigger) {
              _push2(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "trigger", {}, () => {
                      _push3(ssrRenderComponent(_sfc_main$4, { variant: "outline" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Open`);
                          } else {
                            return [
                              createTextVNode("Open")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "trigger", {}, () => [
                        createVNode(_sfc_main$4, { variant: "outline" }, {
                          default: withCtx(() => [
                            createTextVNode("Open")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_DialogPortal, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogOverlay, { class: "fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DialogContent, { class: "[&[data-state='open']_.content]:animate-contentShow [&[data-state='open']_.header]:slide-in-from-top-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="${ssrRenderClass(unref(modal_variants)({ size: _ctx.size }))}"${_scopeId3}><div class="px-6 py-4 flex justify-between relative border-b border-input"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "heading", {}, null, _push4, _parent4, _scopeId3);
                        if (_ctx.showClose) {
                          _push4(ssrRenderComponent(_component_DialogClose, {
                            class: "text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 ml-auto inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                            "aria-label": "Close"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(X), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(X))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                _push5(`<div class="sr-only"${_scopeId4}>Modal Title</div>`);
                              }, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createVNode("div", { class: "sr-only" }, "Modal Title")
                                ])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                _push5(`<div class="sr-only"${_scopeId4}>Modal Description</div>`);
                              }, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createVNode("div", { class: "sr-only" }, "Modal Description")
                                ])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                        ssrRenderSlot(_ctx.$slots, "default", { toggle }, () => {
                          _push4(`Modal Content`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: unref(modal_variants)({ size: _ctx.size })
                          }, [
                            createVNode("div", { class: "px-6 py-4 flex justify-between relative border-b border-input" }, [
                              renderSlot(_ctx.$slots, "heading"),
                              _ctx.showClose ? (openBlock(), createBlock(_component_DialogClose, {
                                key: 0,
                                class: "text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 ml-auto inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                                "aria-label": "Close"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(X))
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_DialogTitle, null, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createVNode("div", { class: "sr-only" }, "Modal Title")
                                  ])
                                ]),
                                _: 3
                              }),
                              createVNode(_component_DialogDescription, null, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createVNode("div", { class: "sr-only" }, "Modal Description")
                                  ])
                                ]),
                                _: 3
                              }),
                              renderSlot(_ctx.$slots, "default", { toggle }, () => [
                                createTextVNode("Modal Content")
                              ])
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogOverlay, { class: "fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
                    createVNode(_component_DialogContent, { class: "[&[data-state='open']_.content]:animate-contentShow [&[data-state='open']_.header]:slide-in-from-top-1" }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: unref(modal_variants)({ size: _ctx.size })
                        }, [
                          createVNode("div", { class: "px-6 py-4 flex justify-between relative border-b border-input" }, [
                            renderSlot(_ctx.$slots, "heading"),
                            _ctx.showClose ? (openBlock(), createBlock(_component_DialogClose, {
                              key: 0,
                              class: "text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 ml-auto inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                              "aria-label": "Close"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(X))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_DialogTitle, null, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createVNode("div", { class: "sr-only" }, "Modal Title")
                                ])
                              ]),
                              _: 3
                            }),
                            createVNode(_component_DialogDescription, null, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createVNode("div", { class: "sr-only" }, "Modal Description")
                                ])
                              ]),
                              _: 3
                            }),
                            renderSlot(_ctx.$slots, "default", { toggle }, () => [
                              createTextVNode("Modal Content")
                            ])
                          ])
                        ], 2)
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              !_ctx.hideTrigger ? (openBlock(), createBlock(_component_DialogTrigger, {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "trigger", {}, () => [
                    createVNode(_sfc_main$4, { variant: "outline" }, {
                      default: withCtx(() => [
                        createTextVNode("Open")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 3
              })) : createCommentVNode("", true),
              createVNode(_component_DialogPortal, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogOverlay, { class: "fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
                  createVNode(_component_DialogContent, { class: "[&[data-state='open']_.content]:animate-contentShow [&[data-state='open']_.header]:slide-in-from-top-1" }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: unref(modal_variants)({ size: _ctx.size })
                      }, [
                        createVNode("div", { class: "px-6 py-4 flex justify-between relative border-b border-input" }, [
                          renderSlot(_ctx.$slots, "heading"),
                          _ctx.showClose ? (openBlock(), createBlock(_component_DialogClose, {
                            key: 0,
                            class: "text-foreground/60 hover:bg-foreground/10 focus:shadow-foreground/50 ml-auto inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                            "aria-label": "Close"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(X))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", {}, () => [
                                createVNode("div", { class: "sr-only" }, "Modal Title")
                              ])
                            ]),
                            _: 3
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", {}, () => [
                                createVNode("div", { class: "sr-only" }, "Modal Description")
                              ])
                            ]),
                            _: 3
                          }),
                          renderSlot(_ctx.$slots, "default", { toggle }, () => [
                            createTextVNode("Modal Content")
                          ])
                        ])
                      ], 2)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=modal-BEorc3YA.mjs.map
