import { _ as _sfc_main$d } from './avatar-BNYzPSiu.mjs';
import { b as useAuth, e as useSeoMeta, v as getInitials, h as formatMoney, _ as _sfc_main$4$1, a as useNuxtApp, k as cn, w as getHexColor, s as showToast, n as navigateTo, m as ji, U as Ui, q as qi } from './server.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, watch, isRef, renderSlot, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import emblaCarouselVue from 'embla-carousel-vue';
import { _ as _sfc_main$e } from './svg-icon-CvfuI_SP.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { cva } from 'class-variance-authority';
import { Loader, Edit2, Trash2, Dot, XCircle, ChevronDown } from 'lucide-vue-next';
import { _ as _sfc_main$f } from './modal-BEorc3YA.mjs';
import { _ as _sfc_main$a } from './event-form-Dyp2VIFX.mjs';
import { _ as _sfc_main$b } from './confirm-dialog-LIDX9onR.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$9 } from './event-history-table-CdTu_FwT.mjs';
import { _ as _sfc_main$c } from './container-Ck9YaQTT.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
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
import 'clsx';
import 'tailwind-merge';
import 'vee-validate';
import './form-input-DhwcXBKy.mjs';
import './form-select-CdCOkqF9.mjs';
import './select-field-Bp7xTQ5L.mjs';
import './number-input-KDBkJw-x.mjs';
import 'yup';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "carousel",
  __ssrInlineRender: true,
  props: {
    options: {},
    plugins: { default: () => [] },
    onReady: {}
  },
  setup(__props) {
    const props = __props;
    const [emblaRef, embla] = emblaCarouselVue(props.options, props.plugins);
    watch(
      () => embla.value,
      (api) => {
        var _a;
        if (api) {
          (_a = props.onReady) == null ? undefined : _a.call(props, api);
        }
      }
    );
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/carousel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : undefined;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "edit-event",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    address: {},
    country: {},
    state: {},
    type: {},
    song_price: {},
    hype_price: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = ref(false);
    const done = () => {
      emit("done");
      open.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$f;
      const _component_UiButton = _sfc_main$4$1;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        size: "lg",
        modelValue: unref(open),
        "onUpdate:modelValue": ($event) => isRef(open) ? open.value = $event : null,
        controlled: ""
      }, _attrs), {
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-display text-2xl font-medium"${_scopeId}>Edit event</div>`);
          } else {
            return [
              createVNode("div", { class: "font-display text-2xl font-medium" }, "Edit event")
            ];
          }
        }),
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                size: "icon"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Edit2), { class: "size-5 text-muted-foreground" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Edit2), { class: "size-5 text-muted-foreground" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_UiButton, {
                  variant: "ghost",
                  size: "icon"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Edit2), { class: "size-5 text-muted-foreground" })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, mergeProps(props, {
              edit: "",
              id: _ctx.id,
              onDone: done
            }), null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode(_sfc_main$a, mergeProps(props, {
                  edit: "",
                  id: _ctx.id,
                  onDone: done
                }), null, 16, ["id"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/edit-event.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "event-card",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const eventFormDetails = computed(() => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d, _e, _f;
      const [main_type, other_type] = props.event.types.map((item) => item.name);
      return {
        title: (_a2 = (_a = props == null ? undefined : props.event) == null ? undefined : _a.title) != null ? _a2 : "",
        address: (_b2 = (_b = props == null ? undefined : props.event) == null ? undefined : _b.address) != null ? _b2 : "",
        country: (_c = props == null ? undefined : props.event) == null ? undefined : _c.country,
        state: (_d = props == null ? undefined : props.event) == null ? undefined : _d.state,
        hype_price: (_c2 = (_e = props.event.types.find((item) => item.name === "hype")) == null ? undefined : _e.price) != null ? _c2 : 0,
        song_price: (_d2 = (_f = props.event.types.find((item) => item.name === "song")) == null ? undefined : _f.price) != null ? _d2 : 0,
        type: other_type ? "both" : main_type
      };
    });
    const avatar_variant = cva(
      "aspect-square rounded-full grid place-items-center",
      {
        variants: {
          type: {
            song: "bg-[#FFEE99]/10",
            hype: "bg-[#FF99F1]/10"
          }
        },
        defaultVariants: {
          type: "song"
        }
      }
    );
    const {
      $repo: { event: eventModule }
    } = useNuxtApp();
    const loading = ref(false);
    const goLive = async () => {
      var _a2;
      var _a;
      try {
        loading.value = true;
        const response = await eventModule.goLive(props.event.id);
        showToast({ title: response.message });
        if (response.data) {
          navigateTo(`/events/${response.data.id}`);
        }
        loading.value = false;
      } catch (error) {
        const e = error;
        loading.value = false;
        console.error("FAILED TO GO LIVE", e);
        showToast({
          title: "Failed",
          description: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to go live",
          variant: "warning"
        });
      }
    };
    const deleting = ref(false);
    const deleteEvent = async () => {
      var _a2;
      var _a;
      try {
        deleting.value = true;
        const response = await eventModule.deleteEvent(props.event.id);
        deleting.value = false;
        showToast({ title: response.message });
        emit("done");
      } catch (error) {
        const e = error;
        deleting.value = false;
        console.error("FAILED TO DELETE EVENT", e);
        showToast({
          title: "Failed",
          description: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to delete event",
          variant: "warning"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-background border border-ring/30 px-4 sm:px-6 py-4 relative overflow-hidden w-full grid" }, _attrs))}><div class="bg-[#FFEE99] opacity-20 rounded-[1000px] blur-[100px] translate-x-1/2 -translate-y-1/2 size-56 absolute right-0 top-0"></div><div class="grid grid-cols-[1fr_auto_auto] gap-x-2 items-center relative z-10"><div class="mb-1 font-semibold text-2xl">${ssrInterpolate(_ctx.event.title)}</div>`);
      if (_ctx.event.status === "new") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$7, mergeProps(unref(eventFormDetails), {
          id: _ctx.event.id,
          onDone: ($event) => emit("done")
        }), null, _parent));
        _push(ssrRenderComponent(_sfc_main$b, {
          message: "Are you sure you want to delete this event",
          "on-confirm": deleteEvent
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                size: "icon",
                variant: "ghost",
                loading: unref(deleting)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Trash2), { class: "size-5 text-muted-foreground cursor-pointer" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Trash2), { class: "size-5 text-muted-foreground cursor-pointer" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4$1, {
                  size: "icon",
                  variant: "ghost",
                  loading: unref(deleting)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Trash2), { class: "size-5 text-muted-foreground cursor-pointer" })
                  ]),
                  _: 1
                }, 8, ["loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex text-sm text-muted-foreground gap-1 items-center">`);
      _push(ssrRenderComponent(_component_SvgIcon, { name: "location" }, null, _parent));
      _push(`<div>${ssrInterpolate(_ctx.event.address)}</div></div><div class="space-y-2 my-6"><!--[-->`);
      ssrRenderList(_ctx.event.types, (request) => {
        _push(`<div class="grid grid-cols-[35px_1fr_auto] gap-x-2 items-center"><div class="${ssrRenderClass(unref(avatar_variant)({ type: request.name }))}">`);
        _push(ssrRenderComponent(_component_SvgIcon, {
          class: "scale-50",
          name: request.name == "song" ? "music" : "mic"
        }, null, _parent));
        _push(`</div><div class="capitalize">${ssrInterpolate(request.name)} <span class="hidden md:inline">request</span></div><div class="tabular-nums">\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(request.price))}</div></div>`);
      });
      _push(`<!--]--></div>`);
      if (_ctx.event.status === "live") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/events/${_ctx.event.id}`,
          class: "mt-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                size: "lg",
                class: "w-full bg-[#38F08D] text-background",
                variant: "ghost"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Dot), null, null, _parent3, _scopeId2));
                    _push3(`BACK TO EVENT `);
                    _push3(ssrRenderComponent(unref(Dot), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Dot)),
                      createTextVNode("BACK TO EVENT "),
                      createVNode(unref(Dot))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4$1, {
                  size: "lg",
                  class: "w-full bg-[#38F08D] text-background",
                  variant: "ghost"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Dot)),
                    createTextVNode("BACK TO EVENT "),
                    createVNode(unref(Dot))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$4$1, {
          size: "lg",
          class: "w-full mt-auto animate-pulse bg-gradient-to-r from-[#844AFF] from-[1.28%] via-[#E991DD] via-[58.26%] to-[#FCF0AF] to-[100%]",
          onClick: goLive,
          loading: unref(loading),
          disabled: _ctx.event.status === "ended"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.event.status === "ended" ? "ENDED" : "GO LIVE")}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.event.status === "ended" ? "ENDED" : "GO LIVE"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/event-card.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_UiButton = _sfc_main$4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-background border border-foreground/20 px-4 sm:px-6 py-4 relative overflow-hidden grid" }, _attrs))}><div class="bg-[#FFEE99] opacity-20 rounded-[1000px] blur-[100px] translate-x-1/2 -translate-y-1/2 size-56 absolute right-0 top-0 z-[2]"></div><div class="mb-4 font-semibold text-2xl">Events</div><div class="text-muted-foreground"> Create your event today, Go live, make all requests count, and keep the audience hyped up all day. </div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/create-event",
    class: "mt-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UiButton, {
          size: "lg",
          class: "w-full mt-6 uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u2728 Create an event \u2728 `);
            } else {
              return [
                createTextVNode(" \u2728 Create an event \u2728 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UiButton, {
            size: "lg",
            class: "w-full mt-6 uppercase"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u2728 Create an event \u2728 ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/create-event-card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const CreateEventCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const useCarouselPagination = (emblaApi) => {
  const selected_index = ref(0);
  const control_list = ref([]);
  const goTo = (index) => {
    if (!emblaApi.value) return;
    emblaApi.value.scrollTo(index);
  };
  const onInit = (emblaApi2) => {
    control_list.value = emblaApi2.scrollSnapList();
  };
  const onSelect = (emblaApi2) => {
    selected_index.value = emblaApi2.selectedScrollSnap();
  };
  watch(emblaApi, (api) => {
    if (!api) return;
    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  });
  return {
    selected_index,
    control_list,
    goTo
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "event-carousel",
  __ssrInlineRender: true,
  props: {
    events: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const embla = ref();
    const setEmblaApi = (api) => {
      embla.value = api;
    };
    const emit = __emit;
    const { control_list, selected_index, goTo } = useCarouselPagination(embla);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = _ctx.events) == null ? undefined : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          options: { slidesToScroll: "auto" },
          onReady: setEmblaApi
        }, {
          container: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-row items-stretch gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(CreateEventCard, { class: "w-[90%] shrink-0" }, null, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.events, (event) => {
                _push2(ssrRenderComponent(_sfc_main$6, {
                  class: "w-[90%] shrink-0",
                  key: event.id,
                  event,
                  onDone: ($event) => emit("done")
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-row items-stretch gap-x-2" }, [
                  createVNode(CreateEventCard, { class: "w-[90%] shrink-0" }),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.events, (event) => {
                    return openBlock(), createBlock(_sfc_main$6, {
                      class: "w-[90%] shrink-0",
                      key: event.id,
                      event,
                      onDone: ($event) => emit("done")
                    }, null, 8, ["event", "onDone"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-6 p-2 flex items-center justify-center gap-x-2 z-10 relative"><!--[-->`);
        ssrRenderList(unref(control_list), (item, index) => {
          _push(`<div class="${ssrRenderClass(
            ("cn" in _ctx ? _ctx.cn : unref(cn))(
              "size-3 rounded-full transition-all",
              unref(selected_index) === index ? "bg-primary" : "bg-muted"
            )
          )}"></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(ssrRenderComponent(CreateEventCard, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/event-carousel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "host-top-spenders-table",
  __ssrInlineRender: true,
  setup(__props) {
    const heading = ref(["#", "NAME", "SONG REQUEST", "HYPE REQUESTS", "TOTAL"]);
    const { data, status } = useCustomFetch("/user/top-audience");
    const spenders = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = data.value) == null ? undefined : _a.data) != null ? _a2 : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Avatar = _sfc_main$d;
      const _component_CollapsibleRoot = ji;
      const _component_CollapsibleTrigger = Ui;
      const _component_CollapsibleContent = qi;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$c, {
        heading: unref(heading),
        data: unref(spenders),
        loading: unref(status) === "pending",
        class: "hidden md:block"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-[297px] grid place-items-center"${_scopeId}><div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(XCircle), { class: "size-8 block mx-auto" }, null, _parent2, _scopeId));
            _push2(`<div class="text-2xl font-semibold text-muted-foreground text-center"${_scopeId}> No paying audience </div><div class="text-sm text-muted-foreground text-center"${_scopeId}> You don&#39;t have any paying audience yet. Once you do, your they will appear here </div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-[297px] grid place-items-center" }, [
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(unref(XCircle), { class: "size-8 block mx-auto" }),
                  createVNode("div", { class: "text-2xl font-semibold text-muted-foreground text-center" }, " No paying audience "),
                  createVNode("div", { class: "text-sm text-muted-foreground text-center" }, " You don't have any paying audience yet. Once you do, your they will appear here ")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(spenders), (spender, index) => {
              var _a2, _b, _c, _d;
              var _a;
              _push2(`<tr class="!h-20 text-muted-foreground"${_scopeId}><td${_scopeId}>${ssrInterpolate(index + 1)}</td><td${_scopeId}><div class="flex gap-x-2 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Avatar, {
                initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender == null ? undefined : spender.audience_name),
                class: "font-bold text-lg",
                style: {
                  backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))(
                    (_a2 = (_a = spender == null ? undefined : spender.audience_name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"
                  ),
                  color: "black"
                }
              }, null, _parent2, _scopeId));
              _push2(`<div class="font-semibold"${_scopeId}>${ssrInterpolate(spender.audience_name)}</div></div></td><td${_scopeId}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = spender.song_earnings) != null ? _b : 0))}</td><td${_scopeId}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_c = spender.hype_earnings) != null ? _c : 0))}</td><td${_scopeId}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_d = spender.total_earnings) != null ? _d : 0))}</td></tr>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(spenders), (spender, index) => {
                var _a2, _b, _c, _d;
                var _a;
                return openBlock(), createBlock("tr", {
                  class: "!h-20 text-muted-foreground",
                  key: spender.audience_name + index
                }, [
                  createVNode("td", null, toDisplayString(index + 1), 1),
                  createVNode("td", null, [
                    createVNode("div", { class: "flex gap-x-2 items-center" }, [
                      createVNode(_component_Avatar, {
                        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender == null ? undefined : spender.audience_name),
                        class: "font-bold text-lg",
                        style: {
                          backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))(
                            (_a2 = (_a = spender == null ? undefined : spender.audience_name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"
                          ),
                          color: "black"
                        }
                      }, null, 8, ["initials", "style"]),
                      createVNode("div", { class: "font-semibold" }, toDisplayString(spender.audience_name), 1)
                    ])
                  ]),
                  createVNode("td", null, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = spender.song_earnings) != null ? _b : 0)), 1),
                  createVNode("td", null, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_c = spender.hype_earnings) != null ? _c : 0)), 1),
                  createVNode("td", null, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_d = spender.total_earnings) != null ? _d : 0)), 1)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-1 md:hidden">`);
      if (unref(status) === "pending") {
        _push(`<!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-10 bg-white/5 animate-pulse"></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(spenders), (spender, index) => {
          _push(ssrRenderComponent(_component_CollapsibleRoot, {
            key: spender.audience_name + index,
            class: "rounded-lg bg-white/5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_CollapsibleTrigger, { class: "grid grid-cols-[auto_1fr_15px] gap-x-4 items-center w-full p-4 [&[data-state='open']_.caret]:rotate-180" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2;
                    var _a, _b;
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Avatar, {
                        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender == null ? undefined : spender.audience_name),
                        class: "font-bold text-lg",
                        style: {
                          backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))(
                            (_a2 = (_a = spender == null ? undefined : spender.audience_name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"
                          ),
                          color: "black"
                        }
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="font-semibold text-left"${_scopeId2}>${ssrInterpolate(spender.audience_name)}</div>`);
                      _push3(ssrRenderComponent(unref(ChevronDown), { class: "size-5 caret transition-transform relative" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Avatar, {
                          initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender == null ? undefined : spender.audience_name),
                          class: "font-bold text-lg",
                          style: {
                            backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))(
                              (_b2 = (_b = spender == null ? undefined : spender.audience_name) == null ? undefined : _b.charAt(0)) != null ? _b2 : "A"
                            ),
                            color: "black"
                          }
                        }, null, 8, ["initials", "style"]),
                        createVNode("div", { class: "font-semibold text-left" }, toDisplayString(spender.audience_name), 1),
                        createVNode(unref(ChevronDown), { class: "size-5 caret transition-transform relative" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_CollapsibleContent, { class: "data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b, _c, _d, _e, _f;
                    if (_push3) {
                      _push3(`<div class="space-y-4 px-4 pb-4"${_scopeId2}><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>SONG REQUESTS</div><div class=""${_scopeId2}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = spender.song_earnings) != null ? _a : 0))}</div></div><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>HYPE REQUESTS</div><div class=""${_scopeId2}>\u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = spender.hype_earnings) != null ? _b : 0))}</div></div><div class="space-y-1"${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>TOTAL</div><div class=""${_scopeId2}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_c = spender.total_earnings) != null ? _c : 0))}</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "space-y-4 px-4 pb-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "SONG REQUESTS"),
                            createVNode("div", { class: "" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_d = spender.song_earnings) != null ? _d : 0)), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "HYPE REQUESTS"),
                            createVNode("div", { class: "" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_e = spender.hype_earnings) != null ? _e : 0)), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "TOTAL"),
                            createVNode("div", { class: "" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_f = spender.total_earnings) != null ? _f : 0)), 1)
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_CollapsibleTrigger, { class: "grid grid-cols-[auto_1fr_15px] gap-x-4 items-center w-full p-4 [&[data-state='open']_.caret]:rotate-180" }, {
                    default: withCtx(() => {
                      var _a2;
                      var _a;
                      return [
                        createVNode(_component_Avatar, {
                          initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(spender == null ? undefined : spender.audience_name),
                          class: "font-bold text-lg",
                          style: {
                            backgroundColor: ("getHexColor" in _ctx ? _ctx.getHexColor : unref(getHexColor))(
                              (_a2 = (_a = spender == null ? undefined : spender.audience_name) == null ? undefined : _a.charAt(0)) != null ? _a2 : "A"
                            ),
                            color: "black"
                          }
                        }, null, 8, ["initials", "style"]),
                        createVNode("div", { class: "font-semibold text-left" }, toDisplayString(spender.audience_name), 1),
                        createVNode(unref(ChevronDown), { class: "size-5 caret transition-transform relative" })
                      ];
                    }),
                    _: 2
                  }, 1024),
                  createVNode(_component_CollapsibleContent, { class: "data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden" }, {
                    default: withCtx(() => {
                      var _a, _b, _c;
                      return [
                        createVNode("div", { class: "space-y-4 px-4 pb-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "SONG REQUESTS"),
                            createVNode("div", { class: "" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_a = spender.song_earnings) != null ? _a : 0)), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "HYPE REQUESTS"),
                            createVNode("div", { class: "" }, "\u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b = spender.hype_earnings) != null ? _b : 0)), 1)
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-sm text-muted-foreground" }, "TOTAL"),
                            createVNode("div", { class: "" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_c = spender.total_earnings) != null ? _c : 0)), 1)
                          ])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/table/host-top-spenders-table.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "arc-progress",
  __ssrInlineRender: true,
  props: {
    base: { default: 100 },
    size: { default: 50 },
    progress: { default: 0.5 }
  },
  setup(__props) {
    const radius = computed(() => __props.size * 0.5 * 0.95);
    const center = computed(() => __props.size / 2);
    const circumference = computed(() => 2 * Math.PI * radius.value);
    const progress_extent = computed(() => Math.min(1, Math.max(0, __props.progress)));
    const arc_circumference = computed(
      () => circumference.value - circumference.value * progress_extent.value
    );
    const style = {
      "--arc-circumference": `${arc_circumference.value}`,
      "--circumference": `${circumference.value}`
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative grid place-items-center" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "progress", { progress_extent: unref(progress_extent) }, () => {
        _push(`<p class="absolute text-sm font-bold">${ssrInterpolate(_ctx.base * unref(progress_extent))}</p>`);
      }, _push, _parent);
      _push(`<svg${ssrRenderAttr("width", _ctx.size)}${ssrRenderAttr("height", _ctx.size)}${ssrRenderAttr("viewBox", `0 0 ${_ctx.size} ${_ctx.size}`)} class="fill-transparent -rotate-90" style="${ssrRenderStyle(style)}"><title class="absolute">Arc progress</title><circle${ssrRenderAttr("cx", unref(center))}${ssrRenderAttr("cy", unref(center))}${ssrRenderAttr("r", unref(radius))} class="stroke-muted stroke-[7px] fill-none"${ssrRenderAttr("stroke-dashoffset", 0)}></circle><circle${ssrRenderAttr("cx", unref(center))}${ssrRenderAttr("cy", unref(center))}${ssrRenderAttr("r", unref(radius))} class="stroke-primary stroke-[7px] fill-none animated-progress"${ssrRenderAttr("stroke-dasharray", unref(circumference))}${ssrRenderAttr("stroke-dashoffset", unref(arc_circumference))} stroke-linecap="round"></circle></svg></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/arc-progress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "profile-completion",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, status } = useCustomFetch("/user?stat=true");
    const required_fields = [
      "stage_name",
      "bio",
      "dob",
      "gender",
      "profession",
      "country",
      "bank_account.bank_name",
      "bank_account.account_number"
    ];
    const profile = computed(() => {
      var _a;
      return (_a = data.value) == null ? undefined : _a.data;
    });
    const getValue = (key) => {
      return profile.value ? key.split(".").reduce((o, k) => o ? o[k] : undefined, profile.value) : null;
    };
    const completed_fields = computed(
      () => required_fields.filter((field) => {
        return !!getValue(field);
      })
    );
    const progress = computed(() => {
      const ratio = completed_fields.value.length / required_fields.length;
      return Number.parseFloat(ratio.toFixed(2));
    });
    const showCard = computed(() => {
      var _a;
      if (status.value === "pending") return false;
      if (!((_a = data.value) == null ? undefined : _a.data)) return false;
      return progress.value < 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$4$1;
      if (unref(showCard)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-[auto,_1fr,_auto] gap-6 bg-white/5 items-center border p-6 rounded-2xl" }, _attrs))}><div class="size-[120px] bg-[#A799FF1A] rounded-full">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          size: 120,
          progress: unref(progress)
        }, {
          progress: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="absolute text-2xl font-bold"${_scopeId}>${ssrInterpolate(unref(progress) * 100)}%</p>`);
            } else {
              return [
                createVNode("p", { class: "absolute text-2xl font-bold" }, toDisplayString(unref(progress) * 100) + "%", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="space-y-4"><div class="text-2xl font-semibold"> Your profile is ${ssrInterpolate(unref(progress) * 100)}% complete </div><div class="text-muted-foreground text-lg"> Fill in additional details to let your audience know more about you and allow us to pay you your earnings </div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "secondary",
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Complete profile `);
                  } else {
                    return [
                      createTextVNode(" Complete profile ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  variant: "secondary",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Complete profile ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/profile-completion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { auth_user } = useAuth();
    const { data, status, error, refresh } = useCustomFetch("/events");
    const { data: wallet, status: wallet_status } = useCustomFetch("/wallets");
    const hostNewEvents = computed(
      () => {
        var _a, _b, _c;
        return ((_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.length) ? (_c = data.value) == null ? undefined : _c.data.filter((event) => event.status === "new") : [];
      }
    );
    const past_events = ref();
    const updatePastEvents = (state) => {
      past_events.value = state;
    };
    const hostLiveEvent = computed(
      () => {
        var _a, _b;
        return (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.find((item) => item.status === "live");
      }
    );
    const allEvents = computed(
      () => hostLiveEvent.value ? [hostLiveEvent.value, ...hostNewEvents.value] : [...hostNewEvents.value]
    );
    useSeoMeta({
      title: "Host Dashboard"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b, _c, _d, _e, _f;
      const _component_Avatar = _sfc_main$d;
      const _component_EventCarousel = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$4$1;
      const _component_SvgIcon = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-10 pb-40" }, _attrs))}><div class="flex gap-x-2 items-center mb-8">`);
      _push(ssrRenderComponent(_component_Avatar, {
        class: "!bg-[#FF99F1] size-[56px] shrink-0 text-background text-xl font-bold",
        initials: ("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))((_a2 = (_a = unref(auth_user)) == null ? undefined : _a.stage_name) != null ? _a2 : ""),
        image: (_b = unref(auth_user)) == null ? undefined : _b.profile_picture
      }, null, _parent));
      _push(`<div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display tracking-wide"> Welcome, <b>${ssrInterpolate((_c = unref(auth_user)) == null ? undefined : _c.stage_name)}</b></div></div>`);
      if (unref(status) === "pending") {
        _push(`<div class="flex justify-center mac:hidden py-2">`);
        _push(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sticky mac:hidden w-scree -trnslate-x-[var(--cp)] mb-6 z-20">`);
      _push(ssrRenderComponent(_component_EventCarousel, {
        events: unref(allEvents),
        onDone: unref(refresh)
      }, null, _parent));
      _push(`</div><div class="grid mac:grid-cols-[1fr_auto] items-start gap-4"><div class="order-2 mac:order-1 space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="relative bg-white/5 rounded-2xl p-6 border flex items-center justify-between overflow-hidden"><div class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"></div><div class="space-y-2"><div class="text-muted-foreground">Withdrawable balance</div><div class="flex gap-2">`);
      if (unref(wallet_status) === "pending") {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-3xl md:text-4xl font-semibold"> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))((_b2 = (_d = unref(wallet)) == null ? undefined : _d.wallet_balance) != null ? _b2 : 0))}</div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/wallet" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`MY WALLET`);
                } else {
                  return [
                    createTextVNode("MY WALLET")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4$1, null, {
                default: withCtx(() => [
                  createTextVNode("MY WALLET")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white/5 p-6 rounded-2xl border"><div class="flex justify-between items-center mb-10"><div class="font-semibold text-2xl">Previous events</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: !((_e = unref(past_events)) == null ? undefined : _e.event_details.length) ? "/dashboard" : "/events",
        class: "hidden md:block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b22;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "secondary",
              class: "gap-x-1",
              disabled: !((_a22 = unref(past_events)) == null ? undefined : _a22.event_details.length)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>SEE ALL</span>`);
                  _push3(ssrRenderComponent(_component_SvgIcon, { name: "arrow_right_alt" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "SEE ALL"),
                    createVNode(_component_SvgIcon, { name: "arrow_right_alt" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "secondary",
                class: "gap-x-1",
                disabled: !((_b22 = unref(past_events)) == null ? undefined : _b22.event_details.length)
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "SEE ALL"),
                  createVNode(_component_SvgIcon, { name: "arrow_right_alt" })
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$9, { onDone: updatePastEvents }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: !((_f = unref(past_events)) == null ? undefined : _f.event_details.length) ? "/dashboard" : "/events",
        class: "w-full md:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b22;
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "secondary",
              class: "gap-x-1 w-full mt-6",
              disabled: !((_a22 = unref(past_events)) == null ? undefined : _a22.event_details.length)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>SEE ALL</span>`);
                  _push3(ssrRenderComponent(_component_SvgIcon, { name: "arrow_right_alt" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "SEE ALL"),
                    createVNode(_component_SvgIcon, { name: "arrow_right_alt" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                variant: "secondary",
                class: "gap-x-1 w-full mt-6",
                disabled: !((_b22 = unref(past_events)) == null ? undefined : _b22.event_details.length)
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "SEE ALL"),
                  createVNode(_component_SvgIcon, { name: "arrow_right_alt" })
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white/5 p-6 rounded-2xl border"><div class="font-semibold text-2xl mb-10">Top Audience</div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div></div><div class="max-w-full w-full hidden mac:grid mac:w-[380px] order-1 mac:order-2 space-y-6"><div class="sticky top-[80px] left-0 right-0 z-10 space-y-6">`);
      _push(ssrRenderComponent(CreateEventCard, null, null, _parent));
      if (unref(hostLiveEvent)) {
        _push(ssrRenderComponent(_sfc_main$6, {
          event: unref(hostLiveEvent),
          onDone: unref(refresh)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(status) === "pending") {
        _push(`<div class="my-6 grid place-items-center">`);
        _push(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data) && !unref(error)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(hostNewEvents), (event) => {
          _push(ssrRenderComponent(_sfc_main$6, {
            key: event.id,
            event,
            onDone: unref(refresh)
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-hP8Igz6q.mjs.map
