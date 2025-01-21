import { _ as _sfc_main$1 } from './svg-icon-CvfuI_SP.mjs';
import { h as formatMoney } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Loader } from 'lucide-vue-next';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wallet",
  __ssrInlineRender: true,
  props: {
    hideCaret: { type: Boolean, default: false }
  },
  setup(__props) {
    const { data: wallet, status: walletStatus } = useCustomFetch("/wallets");
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b;
      const _component_SvgIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border bg-white/5 p-6 rounded-2xl grid grid-cols-[56px_1fr_40px] lg:grid-cols-[56px_1fr_auto_40px] gap-x-4 items-center relative" }, _attrs))}><div class="aspect-square border bg-white/10 rounded-full grid place-items-center">`);
      _push(ssrRenderComponent(_component_SvgIcon, { name: "wallet" }, null, _parent));
      _push(`</div><div class="space-y-px"><div class="font-medium">Spin credits</div><div class="text-muted-foreground max-w-[350px]"> Your refunds from failed request are kept here so that you can use it to request again </div>`);
      if (unref(walletStatus) === "pending") {
        _push(ssrRenderComponent(unref(Loader), { class: "size-6 animate-spin lg:hidden" }, null, _parent));
      } else {
        _push(`<div class="text-xl lg:hidden font-semibold"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a2 = (_a = unref(wallet)) == null ? undefined : _a.wallet_balance) != null ? _a2 : 0))}</div>`);
      }
      _push(`</div>`);
      if (unref(walletStatus) === "pending") {
        _push(ssrRenderComponent(unref(Loader), { class: "size-6 animate-spin hidden lg:block" }, null, _parent));
      } else {
        _push(`<div class="text-3xl font-semibold hidden lg:block"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b2 = (_b = unref(wallet)) == null ? undefined : _b.wallet_balance) != null ? _b2 : 0))}</div>`);
      }
      if (!_ctx.hideCaret) {
        _push(ssrRenderComponent(_component_SvgIcon, { name: "right-caret" }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=wallet-BlNYIObq.mjs.map
