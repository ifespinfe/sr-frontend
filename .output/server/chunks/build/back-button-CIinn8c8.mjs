import { _ as __nuxt_component_0 } from './nuxt-link-BvHIOyM7.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, renderSlot, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './server.mjs';
import { ArrowLeft } from 'lucide-vue-next';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "back-button",
  __ssrInlineRender: true,
  props: {
    to: {},
    history: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        size: "icon",
        variant: "outline"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (_ctx.to) {
                _push2(ssrRenderComponent(_component_NuxtLink, { to: _ctx.to }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(ArrowLeft), { class: "szie-4" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(ArrowLeft), { class: "szie-4" })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(ArrowLeft), {
                  class: "szie-4",
                  onClick: ($event) => _ctx.$router.back()
                }, null, _parent2, _scopeId));
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                _ctx.to ? (openBlock(), createBlock(_component_NuxtLink, {
                  key: 0,
                  to: _ctx.to
                }, {
                  default: withCtx(() => [
                    createVNode(unref(ArrowLeft), { class: "szie-4" })
                  ]),
                  _: 1
                }, 8, ["to"])) : (openBlock(), createBlock(unref(ArrowLeft), {
                  key: 1,
                  class: "szie-4",
                  onClick: ($event) => _ctx.$router.back()
                }, null, 8, ["onClick"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/back-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=back-button-CIinn8c8.mjs.map
