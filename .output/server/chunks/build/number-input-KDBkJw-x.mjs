import { _ as _sfc_main$4, z as my, A as gy, B as hy, D as yy } from './server.mjs';
import { defineComponent, mergeModels, useModel, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "number-input",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    min: { default: 0 },
    step: { default: 1 },
    id: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NumberFieldRoot = my;
      const _component_NumberFieldDecrement = gy;
      const _component_NumberFieldInput = hy;
      const _component_NumberFieldIncrement = yy;
      _push(ssrRenderComponent(_component_NumberFieldRoot, mergeProps({
        id: _ctx.id,
        class: "text-sm text-white",
        min: _ctx.min,
        step: _ctx.step,
        "default-value": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid items-center grid-cols-[auto_1fr_auto] gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NumberFieldDecrement, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    class: "h-full aspect-square rounded-full",
                    size: "icon",
                    variant: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` - `);
                      } else {
                        return [
                          createTextVNode(" - ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      class: "h-full aspect-square rounded-full",
                      size: "icon",
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" - ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative w-full"${_scopeId}><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><span class="text-muted-foreground sm:text-sm"${_scopeId}>\u20A6</span></div>`);
            _push2(ssrRenderComponent(_component_NumberFieldInput, { class: "outline-none ring-[0.5px] max-w-28 rounded-md focus:ring-primary pr-4 pl-6 py-2 bg-white/5 border-none tabular-nums" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NumberFieldIncrement, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    class: "h-full aspect-square rounded-full",
                    size: "icon",
                    variant: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` + `);
                      } else {
                        return [
                          createTextVNode(" + ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      class: "h-full aspect-square rounded-full",
                      size: "icon",
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" + ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid items-center grid-cols-[auto_1fr_auto] gap-2" }, [
                createVNode(_component_NumberFieldDecrement, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      class: "h-full aspect-square rounded-full",
                      size: "icon",
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" - ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "relative w-full" }, [
                  createVNode("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" }, [
                    createVNode("span", { class: "text-muted-foreground sm:text-sm" }, "\u20A6")
                  ]),
                  createVNode(_component_NumberFieldInput, { class: "outline-none ring-[0.5px] max-w-28 rounded-md focus:ring-primary pr-4 pl-6 py-2 bg-white/5 border-none tabular-nums" })
                ]),
                createVNode(_component_NumberFieldIncrement, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      class: "h-full aspect-square rounded-full",
                      size: "icon",
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" + ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/number-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=number-input-KDBkJw-x.mjs.map
