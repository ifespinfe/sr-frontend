import { k as cn } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Loader } from 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "loading-area",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean },
    error: {},
    fallback_error_message: { default: "Failed" },
    fixed: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ("cn" in _ctx ? _ctx.cn : unref(cn))(_ctx.loading || _ctx.error ? "min-h-[60vh]" : "")
      }, _attrs))}>`);
      if (_ctx.loading) {
        _push(`<div class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))("inset-0 bg-black/40 z-[50]", _ctx.fixed ? "fixed" : "absolute"))}"><div class="place-center">`);
        _push(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent));
        _push(`</div></div>`);
      } else if (_ctx.error) {
        ssrRenderSlot(_ctx.$slots, "error", {}, () => {
          var _a2;
          var _a, _b;
          _push(`<div class="text-destructive place-center text-center"><div>${ssrInterpolate((_a2 = (_b = (_a = _ctx.error) == null ? undefined : _a.data) == null ? undefined : _b.message) != null ? _a2 : _ctx.fallback_error_message)}</div></div>`);
        }, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.error) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/loading-area.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=loading-area-BCC1xwyu.mjs.map
