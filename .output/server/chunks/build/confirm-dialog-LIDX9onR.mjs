import { _ as _sfc_main$1 } from './modal-BEorc3YA.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, renderSlot, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "confirm-dialog",
  __ssrInlineRender: true,
  props: {
    message: { default: "Are you sure you want to continue?" },
    closeOnConfirm: { type: Boolean, default: true },
    onConfirm: {}
  },
  setup(__props) {
    const props = __props;
    const handleConfirmation = (toggle) => {
      var _a;
      (_a = props.onConfirm) == null ? undefined : _a.call(props);
      if (props.closeOnConfirm) toggle == null ? undefined : toggle();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$1;
      _push(ssrRenderComponent(_component_Modal, mergeProps({ size: "sm" }, _attrs), {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_sfc_main$4, { variant: "destructive" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Confirm`);
                  } else {
                    return [
                      createTextVNode("Confirm")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_sfc_main$4, { variant: "destructive" }, {
                  default: withCtx(() => [
                    createTextVNode("Confirm")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx(({ toggle }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-[25px]"${_scopeId}><div class="pb-6 text-2xl font-medium text-center font-display"${_scopeId}>${ssrInterpolate(_ctx.message)}</div><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              variant: "destructive",
              class: "w-full",
              onClick: ($event) => handleConfirmation(toggle)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Yes `);
                } else {
                  return [
                    createTextVNode(" Yes ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              variant: "outline",
              class: "w-full",
              onClick: toggle
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` No `);
                } else {
                  return [
                    createTextVNode(" No ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-[25px]" }, [
                createVNode("div", { class: "pb-6 text-2xl font-medium text-center font-display" }, toDisplayString(_ctx.message), 1),
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode(_sfc_main$4, {
                    variant: "destructive",
                    class: "w-full",
                    onClick: ($event) => handleConfirmation(toggle)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Yes ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_sfc_main$4, {
                    variant: "outline",
                    class: "w-full",
                    onClick: toggle
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" No ")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/confirm-dialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=confirm-dialog-LIDX9onR.mjs.map
