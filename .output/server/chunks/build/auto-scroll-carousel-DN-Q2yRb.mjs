import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import AutoScroll from 'embla-carousel-auto-scroll';
import emblaCarouselVue from 'embla-carousel-vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auto-scroll-carousel",
  __ssrInlineRender: true,
  setup(__props) {
    const [emblaRef] = emblaCarouselVue({ loop: true }, [
      AutoScroll({
        stopOnInteraction: false,
        stopOnFocusIn: false,
        stopOnMouseEnter: false,
        startDelay: 10,
        speed: 1.2
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "overflow-hidden",
        ref_key: "emblaRef",
        ref: emblaRef
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "container", {}, () => {
        _push(`<div class="flex flex-row [&amp;_&gt;_*]:shrink-0 h-full items-center">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/auto-scroll-carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=auto-scroll-carousel-DN-Q2yRb.mjs.map
