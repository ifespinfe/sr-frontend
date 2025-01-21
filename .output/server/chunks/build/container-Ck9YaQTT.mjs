import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "container",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean, default: false },
    heading: { default: () => [] },
    data: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-auto" }, _attrs))}>`);
      if (_ctx.loading || _ctx.data.length) {
        _push(`<div><table class="w-full text-base"><thead class="border-b border- b-muted/10"><tr><!--[-->`);
        ssrRenderList(_ctx.heading, (head, index) => {
          _push(`<th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap">${ssrInterpolate(head)}</th>`);
        });
        _push(`<!--]--></tr></thead>`);
        if (_ctx.loading) {
          _push(`<tbody><!--[-->`);
          ssrRenderList(4, (i) => {
            _push(`<tr class="border-b"><!--[-->`);
            ssrRenderList(_ctx.heading, (head, index) => {
              _push(`<td class="h-12 animate-pulse bg-muted/50"></td>`);
            });
            _push(`<!--]--></tr>`);
          });
          _push(`<!--]--></tbody>`);
        } else {
          _push(`<tbody class="[&amp;_tr]:h-14 [&amp;_tr]:borde-b [&amp;_td]:whitespace-nowrap [&amp;_td:last]:min-w-0 [&amp;_td]:min-w-[170px] [&amp;_tr]:align-middle [&amp;_td]:px-4 [&amp;_tr:hover]:bg-muted/50 [&amp;_tr]:cursor-pointer">`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
          _push(`</tbody>`);
        }
        _push(`</table></div>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "empty", {}, null, _push, _parent);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=container-Ck9YaQTT.mjs.map
