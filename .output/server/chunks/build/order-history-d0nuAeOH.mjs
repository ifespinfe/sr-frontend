import { _ as _sfc_main$5 } from './back-button-C72TNXKz.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, computed, unref, withCtx, openBlock, createBlock, createVNode, Fragment, renderList, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './wallet-BlNYIObq.mjs';
import { _ as _sfc_main$4 } from './container-Ck9YaQTT.mjs';
import { Copy, Loader, RefreshCcw, Download, XCircle } from 'lucide-vue-next';
import { groupBy } from 'lodash-es';
import { _ as _sfc_main$6 } from './svg-icon-CvfuI_SP.mjs';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { _ as _sfc_main$7 } from './tooltip-BOPp73dK.mjs';
import { e as useSeoMeta, a as useNuxtApp, k as cn, h as formatMoney, s as showToast, _ as _sfc_main$4$1 } from './server.mjs';
import saveAs from 'file-saver';
import { u as useNodeToImage } from './useNodeToImage-Ci3SXweI.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import './nuxt-link-Dggp6fVd.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'consola/core';
import 'ipx';
import 'unhead';
import 'vue-router';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'dom-to-image';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "order-history-table-row",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  emits: ["reload"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const copied = ref(false);
    const {
      $repo: { event, payment }
    } = useNuxtApp();
    const order_request = ref();
    computed(() => ({
      title: props.order.title,
      address: props.order.address,
      start_date: props.order.start_date
    }));
    const loading = ref(false);
    const downloadReceipt = (blob) => {
      var _a2, _b2;
      var _a, _b, _c;
      saveAs(
        blob,
        `spin-request-receipt-${(_b2 = (_a2 = (_a = props.order) == null ? undefined : _a.title) != null ? _a2 : (_c = (_b = order_request.value) == null ? undefined : _b.host) == null ? undefined : _c.stage_name) != null ? _b2 : ""}`
      );
    };
    const { converting, convertNodeToImage } = useNodeToImage(
      `#RECEIPT_PRINT-${props.order.id}`,
      downloadReceipt,
      []
    );
    const loadAndDownloadReceipt = async () => {
      var _a2;
      var _a;
      try {
        if (order_request.value) {
          convertNodeToImage();
          return;
        }
        loading.value = true;
        const response = await event.fetchRequestDetails(props.order.parent_id);
        loading.value = false;
        if (response.data) {
          order_request.value = response.data;
          nextTick(() => {
            convertNodeToImage();
          });
        }
      } catch (e) {
        loading.value = false;
        const error = e;
        const message = (_a2 = (_a = error.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to download receipt";
        showToast({ title: message, variant: "warning" });
      }
    };
    const emit = __emit;
    const validating = ref(false);
    const validatePayment = async () => {
      var _a2;
      var _a;
      try {
        validating.value = true;
        await payment.verifyPayment(props.order.reference);
        validating.value = false;
        emit("reload");
      } catch (err) {
        validating.value = false;
        const error = err;
        showToast({
          title: (_a2 = (_a = error.data) == null ? undefined : _a.message) != null ? _a2 : "Verification failed",
          variant: "warning"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SvgIcon = _sfc_main$6;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_UiTooltip = _sfc_main$7;
      const _component_UiButton = _sfc_main$4$1;
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: "!h-20 text-muted-foreground",
        key: _ctx.order.id
      }, _attrs))}><td><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          " size-10 rounded-full grid place-items-center",
          _ctx.order.status === "refunded" ? "bg-[#38F08D]/15" : "bg-[#F04438]/15"
        )
      )}">`);
      _push(ssrRenderComponent(_component_SvgIcon, {
        name: _ctx.order.status === "refunded" ? "dotted-arrow-down" : "dotted-arrow-up"
      }, null, _parent));
      _push(`</div></td><td><div class="space-y-p"><div class="text-foreground font-semibold">${ssrInterpolate(_ctx.order.status === "refunded" ? "-" : "")} \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = _ctx.order.amount) != null ? _a : 0))}</div><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          "flex items-center gap-x-px  text-xs",
          _ctx.order.type === "hype" ? "text-[#FF99F1]" : "text-[#FFEE99]"
        )
      )}">`);
      _push(ssrRenderComponent(_component_SvgIcon, {
        name: _ctx.order.type === "hype" ? "mic" : "music",
        class: "scale-50 -ml-1.5"
      }, null, _parent));
      _push(`<div>${ssrInterpolate(_ctx.order.type === "hype" ? "Hype" : "Song")} request</div></div></div></td><td>${ssrInterpolate(_ctx.order.dj)}</td><td>${ssrInterpolate(_ctx.order.payment_gateway)}</td><td>${ssrInterpolate(_ctx.order.date)}</td><td><div class="flex items-center gap-x-2 relative"><div class="${ssrRenderClass(
        ("cn" in _ctx ? _ctx.cn : unref(cn))(
          "bg-background/30 border py-2 px-4 opacity-0 transition-all -z-10 rounded-3xl text-sm text-center absolute place-center text-foreground",
          unref(copied) && "top-0 -translate-y-full z-10 opacity-100"
        )
      )}"> Copied </div><div class="w-[220px] overflow-hidden text-ellipsis">${ssrInterpolate(_ctx.order.reference)}</div>`);
      _push(ssrRenderComponent(unref(Copy), { class: "size-4" }, null, _parent));
      _push(`</div></td><td class="${ssrRenderClass({
        "text-[#38F08D]": _ctx.order.status === "success",
        "text-[#6DC9FC]": _ctx.order.status === "refunded",
        "text-[#E66840]": _ctx.order.status === "failed"
      })}">${ssrInterpolate(_ctx.order.status)}</td><td class="w-[50x]">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (_ctx.order.status === "pending") {
        _push(ssrRenderComponent(_component_UiTooltip, { message: "Re-validate payment" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "icon",
                variant: "outline",
                class: "relative",
                loading: unref(loading) || unref(validating),
                onClick: validatePayment
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(validating)) {
                      _push3(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(RefreshCcw), { class: "size-4" }, null, _parent3, _scopeId2));
                    }
                  } else {
                    return [
                      unref(validating) ? (openBlock(), createBlock(unref(Loader), {
                        key: 0,
                        class: "size-4 animate-spin"
                      })) : (openBlock(), createBlock(unref(RefreshCcw), {
                        key: 1,
                        class: "size-4"
                      }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "outline",
                  class: "relative",
                  loading: unref(loading) || unref(validating),
                  onClick: validatePayment
                }, {
                  default: withCtx(() => [
                    unref(validating) ? (openBlock(), createBlock(unref(Loader), {
                      key: 0,
                      class: "size-4 animate-spin"
                    })) : (openBlock(), createBlock(unref(RefreshCcw), {
                      key: 1,
                      class: "size-4"
                    }))
                  ]),
                  _: 1
                }, 8, ["loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_UiTooltip, { message: "Download Receipt" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                size: "icon",
                variant: "outline",
                class: "relative",
                loading: unref(loading) || unref(converting),
                onClick: loadAndDownloadReceipt
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Download), { class: "size-4" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Download), { class: "size-4" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "outline",
                  class: "relative",
                  loading: unref(loading) || unref(converting),
                  onClick: loadAndDownloadReceipt
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Download), { class: "size-4" })
                  ]),
                  _: 1
                }, 8, ["loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</td></tr>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/order-history-table-row.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "order-history-table",
  __ssrInlineRender: true,
  setup(__props) {
    const heading = ref([
      "",
      "TRANSACTION",
      "HOST",
      "PAYMENT METHOD",
      "DATE",
      "TRANSACTION ID",
      "STATUS",
      ""
    ]);
    const { data, status, refresh } = useCustomFetch("/transactions");
    const groupedOrders = computed(() => {
      var _a2;
      var _a;
      const orders = (_a2 = (_a = data.value) == null ? undefined : _a.data) != null ? _a2 : [];
      return groupBy(orders, "parent_id");
    });
    const mergedOrders = computed(() => {
      return Object.values(groupedOrders.value).reverse().map((item) => {
        return item.reduce((acc, item2) => {
          if (!acc.amount) {
            Object.assign(acc, item2);
            return acc;
          }
          acc.amount = Number(acc.amount) + Number(item2.amount);
          acc.reference = `${acc.reference}-${item2.reference}`;
          acc.payment_gateway = `${acc.payment_gateway} + ${item2.payment_gateway}`;
          return acc;
        }, {});
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        heading: unref(heading),
        data: unref(mergedOrders),
        loading: unref(status) === "pending"
      }, _attrs), {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-[297px] grid place-items-center"${_scopeId}><div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(XCircle), { class: "size-8 block mx-auto" }, null, _parent2, _scopeId));
            _push2(`<div class="text-2xl font-semibold text-muted-foreground text-center"${_scopeId}> No Song or Hype Requests Yet </div><div class="text-sm text-muted-foreground text-center"${_scopeId}> You haven\u2019t requested a song or hype from the DJ. Once you do, your requests will appear here </div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-[297px] grid place-items-center" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(unref(XCircle), { class: "size-8 block mx-auto" }),
                  createVNode("div", { class: "text-2xl font-semibold text-muted-foreground text-center" }, " No Song or Hype Requests Yet "),
                  createVNode("div", { class: "text-sm text-muted-foreground text-center" }, " You haven\u2019t requested a song or hype from the DJ. Once you do, your requests will appear here ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(mergedOrders), (order, index) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                key: order.id + order.parent_id + order.date + index,
                order,
                onReload: unref(refresh)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(mergedOrders), (order, index) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  key: order.id + order.parent_id + order.date + index,
                  order,
                  onReload: unref(refresh)
                }, null, 8, ["order", "onReload"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/order-history-table.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order-history",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Order History"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-20" }, _attrs))}><div class="flex gap-x-2 items-center fixed top-24">`);
      _push(ssrRenderComponent(_component_SharedBackButton, { to: "/audience" }, null, _parent));
      _push(`<div class="text-2xl font-medium font-display">Order History</div></div>`);
      _push(ssrRenderComponent(_sfc_main$3, { "hide-caret": "" }, null, _parent));
      _push(`<div class="bg-white/5 border rounded-3xl p-6 mt-8"><div class="text-2xl font-semibold mb-6">History</div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order-history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=order-history-d0nuAeOH.mjs.map
