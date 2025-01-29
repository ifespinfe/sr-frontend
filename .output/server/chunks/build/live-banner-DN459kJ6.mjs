import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { x as formattedTimeDifference, _ as _sfc_main$4 } from './server.mjs';
import { _ as _sfc_main$2 } from './confirm-dialog-LIDX9onR.mjs';
import { _ as _sfc_main$1 } from './auto-scroll-carousel-DN-Q2yRb.mjs';
import { Dot } from 'lucide-vue-next';
import { u as useNow } from './index-CNLs9n-l.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "live-banner",
  __ssrInlineRender: true,
  props: {
    startDate: {},
    onEndEvent: {},
    ending: { type: Boolean },
    user: { default: "host" },
    animate: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    computed(() => {
      const now = useNow();
      const start_date = props.startDate;
      if (!start_date) return "00:00:00";
      return formattedTimeDifference(start_date, now.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed left-0 right-0 bg-[#FFEE99] py-2 z-[20]" }, _attrs))}>`);
      if (_ctx.animate) {
        _push(ssrRenderComponent(_sfc_main$1, { class: "absolute inset-0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(40, (i) => {
                _push2(`<div class="font-semibold text-background mx-2 flex items-center gap-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Dot), null, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>LIVE</span></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(40, (i) => {
                  return createVNode("div", {
                    key: i,
                    class: "font-semibold text-background mx-2 flex items-center gap-x-2"
                  }, [
                    createVNode(unref(Dot)),
                    createVNode("span", null, "LIVE")
                  ]);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container flex justify-between items-center relative z-10">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              variant: "outline",
              class: "min-w-[100px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`00:00:00`);
                } else {
                  return [
                    createTextVNode("00:00:00")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                variant: "outline",
                class: "min-w-[100px]"
              }, {
                default: withCtx(() => [
                  createTextVNode("00:00:00")
                ]),
                _: 1
              })
            ];
          }
        })
      }, _parent));
      if (_ctx.user === "host") {
        _push(ssrRenderComponent(_sfc_main$2, {
          onConfirm: _ctx.onEndEvent,
          message: "Are you sure you want to end this event?"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                variant: "destructive",
                ending: _ctx.ending
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`END EVENT`);
                  } else {
                    return [
                      createTextVNode("END EVENT")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4, {
                  variant: "destructive",
                  ending: _ctx.ending
                }, {
                  default: withCtx(() => [
                    createTextVNode("END EVENT")
                  ]),
                  _: 1
                }, 8, ["ending"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/live-banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=live-banner-DN459kJ6.mjs.map
