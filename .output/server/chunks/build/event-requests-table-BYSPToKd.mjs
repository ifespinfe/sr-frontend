import { _ as _sfc_main$2 } from './svg-icon-CvfuI_SP.mjs';
import { h as formatMoney, k as cn } from './server.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './container-Ck9YaQTT.mjs';
import { XCircle } from 'lucide-vue-next';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { u as useDateFormat } from './index-twTXuIJ-.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-requests-table",
  __ssrInlineRender: true,
  props: {
    event_id: {},
    event_requests: {},
    loading: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const heading = ref([
      "#",
      "AUDIENCE NAME",
      "TIME",
      "AMOUNT",
      "REQUEST TYPE",
      "STATUS"
    ]);
    const { data, status } = useCustomFetch(
      `/events/${props.event_id}`,
      { immediate: !props.disabled && !!props.event_id }
    );
    const requests = computed(
      () => {
        var _a2, _b2;
        var _a, _b;
        return (_b2 = (_a2 = props == null ? undefined : props.event_requests) != null ? _a2 : (_b = (_a = data == null ? undefined : data.value) == null ? undefined : _a.data) == null ? undefined : _b.requests) != null ? _b2 : [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        heading: unref(heading),
        data: unref(requests),
        loading: unref(status) === "pending" || _ctx.loading,
        class: "hidden md:block"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-[297px] grid place-items-center"${_scopeId}><div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(XCircle), { class: "size-8 block mx-auto" }, null, _parent2, _scopeId));
            _push2(`<div class="text-2xl font-semibold text-muted-foreground text-center"${_scopeId}> No requests for this event </div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-[297px] grid place-items-center" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(unref(XCircle), { class: "size-8 block mx-auto" }),
                  createVNode("div", { class: "text-2xl font-semibold text-muted-foreground text-center" }, " No requests for this event ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(requests), (request, index) => {
              var _a, _b;
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(index + 1)}</td><td class="text-muted-foreground"${_scopeId}>${ssrInterpolate((_a = request.audience.name) != null ? _a : request.audience.stage_name)}</td><td class="text-muted-foreground"${_scopeId}>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(request.created_at, "HH:mm"))}</td><td class="font-semibold"${_scopeId}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = request == null ? undefined : request.price) != null ? _b : 0))}</td><td${_scopeId}><div class="${ssrRenderClass(
                ("cn" in _ctx ? _ctx.cn : unref(cn))(
                  "flex items-center",
                  request.type === "hype" ? " text-[#FF99F1]" : "text-[#FFEE99]"
                )
              )}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_SvgIcon, {
                name: request.type === "hype" ? "mic" : "music",
                class: "scale-50 mt-1"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(request == null ? undefined : request.type)} request</span></div></td><td class="${ssrRenderClass({
                "text-destructive": ["ignored", "declined"].includes(request.status),
                "text-green-500": ["completed"].includes(request.status)
              })}"${_scopeId}>${ssrInterpolate(request.status)}</td></tr>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(requests), (request, index) => {
                var _a, _b;
                return openBlock(), createBlock("tr", {
                  key: request.id
                }, [
                  createVNode("td", null, toDisplayString(index + 1), 1),
                  createVNode("td", { class: "text-muted-foreground" }, toDisplayString((_a = request.audience.name) != null ? _a : request.audience.stage_name), 1),
                  createVNode("td", { class: "text-muted-foreground" }, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(request.created_at, "HH:mm")), 1),
                  createVNode("td", { class: "font-semibold" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = request == null ? undefined : request.price) != null ? _b : 0)), 1),
                  createVNode("td", null, [
                    createVNode("div", {
                      class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                        "flex items-center",
                        request.type === "hype" ? " text-[#FF99F1]" : "text-[#FFEE99]"
                      )
                    }, [
                      createVNode(_component_SvgIcon, {
                        name: request.type === "hype" ? "mic" : "music",
                        class: "scale-50 mt-1"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(request == null ? undefined : request.type) + " request", 1)
                    ], 2)
                  ]),
                  createVNode("td", {
                    class: {
                      "text-destructive": ["ignored", "declined"].includes(request.status),
                      "text-green-500": ["completed"].includes(request.status)
                    }
                  }, toDisplayString(request.status), 3)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="md:hidden space-y-5"><!--[-->`);
      ssrRenderList(unref(requests), (request, index) => {
        var _a, _b;
        _push(`<div class="grid grid-cols-[15px_1fr_auto] gap-4 items-center"><div>${ssrInterpolate(index + 1)}</div><div class="flex items-center gap-x-2"><div class="space-y-px"><div>${ssrInterpolate((_a = request.audience.name) != null ? _a : request.audience.stage_name)}</div><div class="text-muted-foreground">${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(request.created_at, "HH:mm"))}</div></div><div class="flex items-center gap-x-4"><div class="${ssrRenderClass(
          ("cn" in _ctx ? _ctx.cn : unref(cn))(
            "flex items-center  -mt-1 min-w-ful gap-x-4",
            request.type === "hype" ? " text-[#FF99F1]" : "text-[#FFEE99]"
          )
        )}"><div class="flex items-center">`);
        _push(ssrRenderComponent(_component_SvgIcon, {
          name: request.type === "hype" ? "mic" : "music",
          class: "scale-50 mt-1"
        }, null, _parent));
        _push(`<div class="min-w-fit">${ssrInterpolate(request == null ? undefined : request.type)}</div></div><div class="${ssrRenderClass([{
          "text-destructive": ["ignored", "declined"].includes(
            request.status
          ),
          "text-green-500": ["completed"].includes(request.status)
        }, "text-xs"])}">${ssrInterpolate(request.status)}</div></div></div></div><div class="font-semibold justify-self-end"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = request == null ? undefined : request.price) != null ? _b : 0))}</div></div>`);
      });
      _push(`<!--]-->`);
      if (!unref(requests).length) {
        _push(`<div class="min-h-[297px] grid place-items-center"><div class="space-y-4">`);
        _push(ssrRenderComponent(unref(XCircle), { class: "size-8 block mx-auto" }, null, _parent));
        _push(`<div class="text-2xl font-semibold text-muted-foreground text-center"> No requests for this event </div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/event-requests-table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=event-requests-table-BYSPToKd.mjs.map
