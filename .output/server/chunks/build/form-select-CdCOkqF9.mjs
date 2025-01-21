import { defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Field } from 'vee-validate';
import { _ as _sfc_main$1 } from './select-field-Bp7xTQ5L.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-select",
  __ssrInlineRender: true,
  props: {
    name: {},
    label: { default: "" },
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    options: { default: () => [] },
    showErrorOnTouch: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Field), mergeProps({
        name: _ctx.name,
        class: "relative",
        as: "div"
      }, _attrs), {
        default: withCtx(({ value, handleChange, errorMessage, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              "model-value": value,
              "onUpdate:modelValue": handleChange,
              name: _ctx.name,
              disabled: _ctx.disabled,
              placeholder: _ctx.placeholder,
              id: _ctx.id,
              options: _ctx.options,
              state: errorMessage ? "error" : "normal",
              label: _ctx.label
            }, null, _parent2, _scopeId));
            if (meta.touched || _ctx.showErrorOnTouch) {
              _push2(`<div class="text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-4 font-semibold"${_scopeId}>${ssrInterpolate(errorMessage)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$1, {
                "model-value": value,
                "onUpdate:modelValue": handleChange,
                name: _ctx.name,
                disabled: _ctx.disabled,
                placeholder: _ctx.placeholder,
                id: _ctx.id,
                options: _ctx.options,
                state: errorMessage ? "error" : "normal",
                label: _ctx.label
              }, null, 8, ["model-value", "onUpdate:modelValue", "name", "disabled", "placeholder", "id", "options", "state", "label"]),
              meta.touched || _ctx.showErrorOnTouch ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-4 font-semibold"
              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=form-select-CdCOkqF9.mjs.map
