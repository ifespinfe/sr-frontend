import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, mergeModels, useModel, ref } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { Field } from 'vee-validate';
import { Eye, EyeOff } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "input-field",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    state: {},
    type: {},
    name: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change", "blur"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const inputVariant = cva(
      "relative rounded-lg border shadow-sm transition-colors bg-white/5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1",
      {
        variants: {
          state: {
            normal: "border-input focus-within:ring-ring",
            valid: "border-input focus-within:ring-input",
            error: "border-destructive focus-within:ring-destructive"
          }
        },
        defaultVariants: {
          state: "normal"
        }
      }
    );
    const labelVariant = cva(
      "absolute text-sm font-medium top-3 left-3 -translate-y-1/2 label-text transition-all ease-in-out",
      {
        variants: {
          state: {
            normal: "text-muted-foreground",
            valid: "text-muted-foreground",
            error: "text-destructive"
          }
        },
        defaultVariants: {
          state: "normal"
        }
      }
    );
    const model = useModel(__props, "modelValue");
    const props = __props;
    const type = ref(props.type || "text");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(inputVariant)({ state: _ctx.state })
      }, _attrs))}><input${ssrRenderAttrs(mergeProps({ ...props, type: unref(type), placeholder: props.placeholder || "" }, {
        value: model.value,
        class: "rounded-[inherit] [&:focus_~_span.label-text]:!top-3 [&:placeholder-shown_~_span.label-text]:top-1/2 px-3 leading-6 w-full h-[56px] text-base pt-4 bg-transparent text-foreground transition-colors placeholder:text-transparent focus-visible:placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-transparent relative z-10"
      }))}><span class="${ssrRenderClass(unref(labelVariant)({ state: _ctx.state }))}">${ssrInterpolate(_ctx.label)}</span>`);
      if (props.type === "password") {
        _push(`<div class="text-muted-foreground cursor-pointer absolute right-3 bottom-3 z-10">`);
        if (unref(type) === "password") {
          _push(ssrRenderComponent(unref(Eye), { class: "size-5 text-muted-foreground" }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(EyeOff), { class: "size-5 text-muted-foreground" }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-field.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-input",
  __ssrInlineRender: true,
  props: {
    name: {},
    label: {},
    type: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
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
              onChange: handleChange,
              name: _ctx.name,
              type: _ctx.type,
              disabled: _ctx.disabled,
              placeholder: _ctx.placeholder,
              id: _ctx.id,
              label: _ctx.label,
              state: errorMessage && meta.touched ? "error" : "normal"
            }, null, _parent2, _scopeId));
            if (meta.touched || _ctx.showErrorOnTouch) {
              _push2(`<div class="text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"${_scopeId}>${ssrInterpolate(errorMessage)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$1, {
                "model-value": value,
                onChange: handleChange,
                name: _ctx.name,
                type: _ctx.type,
                disabled: _ctx.disabled,
                placeholder: _ctx.placeholder,
                id: _ctx.id,
                label: _ctx.label,
                state: errorMessage && meta.touched ? "error" : "normal"
              }, null, 8, ["model-value", "onChange", "name", "type", "disabled", "placeholder", "id", "label", "state"]),
              meta.touched || _ctx.showErrorOnTouch ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=form-input-DhwcXBKy.mjs.map
