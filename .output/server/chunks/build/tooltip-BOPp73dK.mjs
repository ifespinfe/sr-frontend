import { a1 as Lg, a2 as zg, a3 as Kg, a4 as jg, a5 as Hg, a6 as Wg } from './server.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tooltip",
  __ssrInlineRender: true,
  props: {
    message: { default: "title" },
    delay: { default: 300 },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TooltipProvider = Lg;
      const _component_TooltipRoot = zg;
      const _component_TooltipTrigger = Kg;
      const _component_TooltipPortal = jg;
      const _component_TooltipContent = Hg;
      const _component_TooltipArrow = Wg;
      _push(ssrRenderComponent(_component_TooltipProvider, mergeProps({
        "delay-duration": _ctx.delay,
        disabled: _ctx.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TooltipRoot, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TooltipTrigger, { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TooltipPortal, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TooltipContent, {
                          class: "z-[150] font-sans overflow-hidden rounded-md bg-foreground px-3 py-2 text-sm text-muted animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                          "side-offset": 1
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.message)} `);
                              _push5(ssrRenderComponent(_component_TooltipArrow, {
                                class: "fill-foreground",
                                width: 8
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.message) + " ", 1),
                                createVNode(_component_TooltipArrow, {
                                  class: "fill-foreground",
                                  width: 8
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TooltipContent, {
                            class: "z-[150] font-sans overflow-hidden rounded-md bg-foreground px-3 py-2 text-sm text-muted animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            "side-offset": 1
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.message) + " ", 1),
                              createVNode(_component_TooltipArrow, {
                                class: "fill-foreground",
                                width: 8
                              })
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
                    createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }),
                    createVNode(_component_TooltipPortal, null, {
                      default: withCtx(() => [
                        createVNode(_component_TooltipContent, {
                          class: "z-[150] font-sans overflow-hidden rounded-md bg-foreground px-3 py-2 text-sm text-muted animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                          "side-offset": 1
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.message) + " ", 1),
                            createVNode(_component_TooltipArrow, {
                              class: "fill-foreground",
                              width: 8
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
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TooltipRoot, null, {
                default: withCtx(() => [
                  createVNode(_component_TooltipTrigger, { "as-child": "" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }),
                  createVNode(_component_TooltipPortal, null, {
                    default: withCtx(() => [
                      createVNode(_component_TooltipContent, {
                        class: "z-[150] font-sans overflow-hidden rounded-md bg-foreground px-3 py-2 text-sm text-muted animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                        "side-offset": 1
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.message) + " ", 1),
                          createVNode(_component_TooltipArrow, {
                            class: "fill-foreground",
                            width: 8
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=tooltip-BOPp73dK.mjs.map
