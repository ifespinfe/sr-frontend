import { ak as Fv, al as Nv, am as Lv } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "avatar",
  __ssrInlineRender: true,
  props: {
    initials: { default: "" },
    image: { default: "" }
  },
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AvatarRoot = Fv;
      const _component_AvatarImage = Nv;
      const _component_AvatarFallback = Lv;
      _push(ssrRenderComponent(_component_AvatarRoot, mergeProps({ class: "bg-muted inline-flex max-w-full max-h-full size-[40px] text-[15px] font-medium leading-1 uppercase select-pointer items-center justify-center overflow-hidden rounded-full align-middle" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.image) {
              _push2(ssrRenderComponent(_component_AvatarImage, {
                src: _ctx.image,
                class: "h-full w-full object-cover"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AvatarFallback, { class: "flex h-full w-full items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.initials)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.initials), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.image ? (openBlock(), createBlock(_component_AvatarImage, {
                key: 0,
                src: _ctx.image,
                class: "h-full w-full object-cover"
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode(_component_AvatarFallback, { class: "flex h-full w-full items-center justify-center" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.initials), 1)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=avatar-BNYzPSiu.mjs.map
