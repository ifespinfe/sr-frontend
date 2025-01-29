import { af as ys, ag as gs, ah as bs, ai as ws, aj as _s } from './server.mjs';
import { useSSRContext, defineComponent, mergeModels, useModel, ref, mergeProps, unref, isRef, withCtx, renderSlot, createVNode, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "popover",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    side: { default: "top" },
    content: { default: "" }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const open = ref(model.value);
    const toggle = () => {
      open.value = !open.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PopoverRoot = ys;
      const _component_PopoverTrigger = gs;
      const _component_PopoverPortal = bs;
      const _component_PopoverContent = ws;
      const _component_PopoverArrow = _s;
      _push(ssrRenderComponent(_component_PopoverRoot, mergeProps({
        open: unref(open),
        "onUpdate:open": [($event) => isRef(open) ? open.value = $event : null, ($event) => model.value = $event]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, {
              "aria-label": "Read more",
              "as-child": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`<div class="text-sm"${_scopeId2}>Read more</div>`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode("div", { class: "text-sm" }, "Read more")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverPortal, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PopoverContent, {
                    side: _ctx.side,
                    "side-offset": 0,
                    class: "rounded-md font-sans z-[10] max-w-[99.9vw] sm:max-w-[500px] max-h-52 overflow-auto border bg-popover-foreground p-3.5 text-popover/80 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content", { toggle }, () => {
                          _push4(`<div${_scopeId3}>${ssrInterpolate(_ctx.content)}</div>`);
                        }, _push4, _parent4, _scopeId3);
                        {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_PopoverArrow, { class: "fill-foreground size-2" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content", { toggle }, () => [
                            createVNode("div", null, toDisplayString(_ctx.content), 1)
                          ]),
                          createCommentVNode("", true),
                          createVNode(_component_PopoverArrow, { class: "fill-foreground size-2" })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PopoverContent, {
                      side: _ctx.side,
                      "side-offset": 0,
                      class: "rounded-md font-sans z-[10] max-w-[99.9vw] sm:max-w-[500px] max-h-52 overflow-auto border bg-popover-foreground p-3.5 text-popover/80 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "content", { toggle }, () => [
                          createVNode("div", null, toDisplayString(_ctx.content), 1)
                        ]),
                        createCommentVNode("", true),
                        createVNode(_component_PopoverArrow, { class: "fill-foreground size-2" })
                      ]),
                      _: 3
                    }, 8, ["side"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PopoverTrigger, {
                "aria-label": "Read more",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode("div", { class: "text-sm" }, "Read more")
                  ])
                ]),
                _: 3
              }),
              createVNode(_component_PopoverPortal, null, {
                default: withCtx(() => [
                  createVNode(_component_PopoverContent, {
                    side: _ctx.side,
                    "side-offset": 0,
                    class: "rounded-md font-sans z-[10] max-w-[99.9vw] sm:max-w-[500px] max-h-52 overflow-auto border bg-popover-foreground p-3.5 text-popover/80 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "content", { toggle }, () => [
                        createVNode("div", null, toDisplayString(_ctx.content), 1)
                      ]),
                      createCommentVNode("", true),
                      createVNode(_component_PopoverArrow, { class: "fill-foreground size-2" })
                    ]),
                    _: 3
                  }, 8, ["side"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/popover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=popover-DcCqGT5R.mjs.map
