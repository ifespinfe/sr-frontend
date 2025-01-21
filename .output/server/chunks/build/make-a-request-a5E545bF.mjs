import { _ as _sfc_main$8 } from './back-button-CIinn8c8.mjs';
import { c as useRoute, e as useSeoMeta, h as formatMoney, b as useAuth, _ as _sfc_main$4$1, T as Ty, R as Ry } from './server.mjs';
import { _ as _sfc_main$9 } from './svg-icon-CvfuI_SP.mjs';
import { useSSRContext, defineComponent, watch, ref, computed, mergeProps, unref, withCtx, isRef, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, mergeModels, useModel, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './loading-area-BCC1xwyu.mjs';
import { Field, Form } from 'vee-validate';
import { _ as _sfc_main$7 } from './form-input-DhwcXBKy.mjs';
import { cva } from 'class-variance-authority';
import { object, mixed, string } from 'yup';
import { u as useLiveEvent } from './useLiveEvent-DFcZSU5e.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import './nuxt-link-BvHIOyM7.mjs';
import 'lucide-vue-next';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "form-hidden-input",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Field), mergeProps({
        name: _ctx.name,
        class: "relative h-0 invisible",
        as: "div"
      }, _attrs), {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="hidden"${ssrRenderAttr("name", _ctx.name)}${ssrRenderAttr("value", value)}${_scopeId}>`);
          } else {
            return [
              createVNode("input", {
                type: "hidden",
                name: _ctx.name,
                value
              }, null, 8, ["name", "value"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-hidden-input.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "textarea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    state: {},
    type: {},
    name: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    rows: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change", "blur"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const inputVariant = cva(
      "relative rounded-lg border shadow-sm transition-colors bg-white/5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-within:outline-none focus-within:ring-1",
      {
        variants: {
          state: {
            normal: "border-input focus-within:ring-ring",
            valid: "border-input focus-within:ring-input",
            error: "border-destructive focus-within:ring-destructive"
          }
        },
        defaultVariants: {
          state: "normal"
        }
      }
    );
    const labelVariant = cva(
      "absolute text-sm font-medium top-3 left-3 -translate-y-1/2 label-text transition-all",
      {
        variants: {
          state: {
            normal: "text-muted-foreground",
            valid: "text-muted-foreground",
            error: "text-destructive"
          }
        },
        defaultVariants: {
          state: "normal"
        }
      }
    );
    const model = useModel(__props, "modelValue");
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(inputVariant)({ state: _ctx.state })
      }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({ ...props, type: _ctx.type, placeholder: props.placeholder || "" }, {
        value: model.value,
        rows: (_a = _ctx.rows) != null ? _a : 2,
        class: "flex rounded-[inherit] [&:focus_~_span.label-text]:!top-3 [&:placeholder-shown_~_span.label-text]:top-1/2 px-3 leading-6 w-full text-base pt-6 bg-transparent text-foreground transition-colors placeholder:text-transparent focus-visible:placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-transparent relative z-10"
      }), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea><span class="${ssrRenderClass(unref(labelVariant)({ state: _ctx.state }))}">${ssrInterpolate(_ctx.label)}</span></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "form-textarea",
  __ssrInlineRender: true,
  props: {
    name: {},
    label: {},
    type: {},
    id: {},
    placeholder: {},
    disabled: { type: Boolean },
    showErrorOnTouch: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Field), mergeProps({
        name: _ctx.name,
        class: "relative",
        as: "div"
      }, _attrs), {
        default: withCtx(({ value, handleChange, errorMessage, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              "model-value": value,
              onChange: handleChange,
              name: _ctx.name,
              type: _ctx.type,
              disabled: _ctx.disabled,
              placeholder: _ctx.placeholder,
              id: _ctx.id,
              label: _ctx.label,
              state: errorMessage && meta.touched ? "error" : "normal"
            }, null, _parent2, _scopeId));
            if (meta.touched || _ctx.showErrorOnTouch) {
              _push2(`<div class="text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"${_scopeId}>${ssrInterpolate(errorMessage)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$4, {
                "model-value": value,
                onChange: handleChange,
                name: _ctx.name,
                type: _ctx.type,
                disabled: _ctx.disabled,
                placeholder: _ctx.placeholder,
                id: _ctx.id,
                label: _ctx.label,
                state: errorMessage && meta.touched ? "error" : "normal"
              }, null, 8, ["model-value", "onChange", "name", "type", "disabled", "placeholder", "id", "label", "state"]),
              meta.touched || _ctx.showErrorOnTouch ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-sm text-destructive animate-in slide-in-from-top-1 absolute -bottom-5 font-semibold"
              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/form-textarea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const RequestBaseSchema = object({
  type: mixed().oneOf(["hype", "song"]).required(),
  event_id: string().required(),
  nickname: string().optional()
});
const HypeRequestSchema = RequestBaseSchema.shape({
  description: string().required("Hype description required"),
  nickname: string().required("Nickname required")
});
const SongRequestSchema = RequestBaseSchema.shape({
  artist: string().required("Artist name required"),
  song_title: string().required("Song name required")
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "hype-request-form",
  __ssrInlineRender: true,
  props: {
    request: {},
    event_id: {},
    host_slug: {}
  },
  setup(__props) {
    const props = __props;
    const { auth_user } = useAuth();
    const formInitialValue = computed(() => {
      var _a;
      return {
        type: props.request.name,
        event_id: Number(props.event_id),
        nickname: (_a = auth_user.value) == null ? undefined : _a.user_name
      };
    });
    const { createEventRequest, creating } = useLiveEvent();
    const handleSubmit = (data) => {
      createEventRequest(data, props.host_slug);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Form), mergeProps({
        "validation-schema": unref(HypeRequestSchema),
        "initial-values": unref(formInitialValue),
        onSubmit: handleSubmit,
        class: "space-y-7"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, { name: "event_id" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, { name: "type" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "description",
              placeholder: "Enter hype description",
              label: "Tell us about your hype",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              name: "nickname",
              placeholder: "Enter your nickname",
              label: "nickname",
              disabled: !!unref(formInitialValue).nickname
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4$1, {
              type: "submit",
              size: "lg",
              class: "max-w-full w-[400px] mx-auto !flex uppercase",
              loading: unref(creating)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(` Request Hype For ${ssrInterpolate(Number((_a = _ctx.request) == null ? undefined : _a.price) > 0 ? `\u20A6${("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)}` : "FREE")}`);
                } else {
                  return [
                    createTextVNode(" Request Hype For " + toDisplayString(Number((_b = _ctx.request) == null ? undefined : _b.price) > 0 ? `\u20A6${("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)}` : "FREE"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, { name: "event_id" }),
              createVNode(_sfc_main$5, { name: "type" }),
              createVNode(_sfc_main$3, {
                name: "description",
                placeholder: "Enter hype description",
                label: "Tell us about your hype",
                type: "text"
              }),
              createVNode(_sfc_main$7, {
                name: "nickname",
                placeholder: "Enter your nickname",
                label: "nickname",
                disabled: !!unref(formInitialValue).nickname
              }, null, 8, ["disabled"]),
              createVNode(_sfc_main$4$1, {
                type: "submit",
                size: "lg",
                class: "max-w-full w-[400px] mx-auto !flex uppercase",
                loading: unref(creating)
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(" Request Hype For " + toDisplayString(Number((_a = _ctx.request) == null ? undefined : _a.price) > 0 ? `\u20A6${("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)}` : "FREE"), 1)
                  ];
                }),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/hype-request-form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "song-request-form",
  __ssrInlineRender: true,
  props: {
    request: {},
    event_id: {},
    host_slug: {}
  },
  setup(__props) {
    const props = __props;
    const { auth_user } = useAuth();
    const formInitialValue = computed(() => {
      var _a;
      return {
        type: props.request.name,
        event_id: Number(props.event_id),
        nickname: (_a = auth_user.value) == null ? undefined : _a.user_name
      };
    });
    const { createEventRequest, creating } = useLiveEvent();
    const handleSubmit = (data) => {
      createEventRequest(data, props.host_slug);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Form), mergeProps({
        "validation-schema": unref(SongRequestSchema),
        "initial-values": unref(formInitialValue),
        onSubmit: handleSubmit,
        class: "space-y-7"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, { name: "event_id" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, { name: "type" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              name: "song_title",
              placeholder: "Enter song title",
              label: "Song title",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              name: "artist",
              placeholder: "Enter artiste name",
              label: "Artiste",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              name: "nickname",
              placeholder: "Enter your nickname",
              label: "nickname (optional)",
              disabled: !!unref(formInitialValue).nickname
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4$1, {
              type: "submit",
              size: "lg",
              class: "max-w-full w-[400px] mx-auto !flex uppercase",
              loading: unref(creating)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(` Request Song For ${ssrInterpolate(Number((_a = _ctx.request) == null ? undefined : _a.price) > 0 ? `\u20A6${("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)}` : "FREE")}`);
                } else {
                  return [
                    createTextVNode(" Request Song For " + toDisplayString(Number((_b = _ctx.request) == null ? undefined : _b.price) > 0 ? `\u20A6${("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)}` : "FREE"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, { name: "event_id" }),
              createVNode(_sfc_main$5, { name: "type" }),
              createVNode(_sfc_main$7, {
                name: "song_title",
                placeholder: "Enter song title",
                label: "Song title",
                type: "text"
              }),
              createVNode(_sfc_main$7, {
                name: "artist",
                placeholder: "Enter artiste name",
                label: "Artiste",
                type: "text"
              }),
              createVNode(_sfc_main$7, {
                name: "nickname",
                placeholder: "Enter your nickname",
                label: "nickname (optional)",
                disabled: !!unref(formInitialValue).nickname
              }, null, 8, ["disabled"]),
              createVNode(_sfc_main$4$1, {
                type: "submit",
                size: "lg",
                class: "max-w-full w-[400px] mx-auto !flex uppercase",
                loading: unref(creating)
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode(" Request Song For " + toDisplayString(Number((_a = _ctx.request) == null ? undefined : _a.price) > 0 ? `\u20A6${("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(_ctx.request.price)}` : "FREE"), 1)
                  ];
                }),
                _: 1
              }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/song-request-form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "make-a-request",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const host_slug = route.params.host;
    const event_id = route.params.event_id;
    const { data, error, status } = useCustomFetch(
      `/user/host/${host_slug}`
    );
    watch(data, (data2) => {
      var _a, _b, _c;
      if (((_c = (_b = (_a = data2 == null ? undefined : data2.data) == null ? undefined : _a.live_event) == null ? undefined : _b.types) == null ? undefined : _c.length) === 1) {
        type.value = data2.data.live_event.types[0].name;
      }
    });
    const type = ref("");
    const selectedRequestType = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? undefined : _a.data.live_event) == null ? undefined : _b.types.find(
        (item) => item.name === type.value
      );
    });
    useSeoMeta({
      title: "Make A Request"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$8;
      const _component_RadioGroupRoot = Ty;
      const _component_RadioGroupItem = Ry;
      const _component_SvgIcon = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-6 pb-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        to: `/${unref(host_slug)}`
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="max-w-[700px] w-full mx-auto"${_scopeId}><div class="text-primary text-center text-lg"${_scopeId}>Make a request</div><div class="text-3xl font-semibold text-center font-display mt-2 mb-4"${_scopeId}> Tell me about your request </div>`);
            if ((_c = (_b = (_a = unref(data)) == null ? undefined : _a.data) == null ? undefined : _b.live_event) == null ? undefined : _c.types) {
              _push2(ssrRenderComponent(_component_RadioGroupRoot, {
                class: "grid grid-cols-[repeat(auto-fit,_minmax(315px,_1fr))] gap-6 my-6",
                modelValue: unref(type),
                "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2, _e2, _f2;
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList((_c2 = (_b2 = (_a2 = unref(data)) == null ? undefined : _a2.data) == null ? undefined : _b2.live_event) == null ? undefined : _c2.types, (item) => {
                      _push3(ssrRenderComponent(_component_RadioGroupItem, {
                        class: "p-6 w-full lg:p-8 mx-auto text-left ring ring-input bg-white/10 rounded-2xl transition-colors cursor-pointer data-[state='checked']:ring-primary hover:ring-primary/30",
                        key: item.id,
                        value: item.name
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center gap-x-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_SvgIcon, { name: "money" }, null, _parent4, _scopeId3));
                            _push4(`<div class="text-4xl font-bold text-primary tabular-nums"${_scopeId3}> \u20A6${ssrInterpolate(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(item.price))}</div></div><div class="text-2xl font-medium my-4 mb-2 capitalize"${_scopeId3}>${ssrInterpolate(item.name)} request </div><div class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(item.name === "song" ? "Request a song and i'll give you credit when it plays" : "Steal the spotlight. Get a shout-out  for yourself or someone.")}</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center gap-x-1" }, [
                                createVNode(_component_SvgIcon, { name: "money" }),
                                createVNode("div", { class: "text-4xl font-bold text-primary tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(item.price)), 1)
                              ]),
                              createVNode("div", { class: "text-2xl font-medium my-4 mb-2 capitalize" }, toDisplayString(item.name) + " request ", 1),
                              createVNode("div", { class: "text-muted-foreground" }, toDisplayString(item.name === "song" ? "Request a song and i'll give you credit when it plays" : "Steal the spotlight. Get a shout-out  for yourself or someone."), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_f2 = (_e2 = (_d2 = unref(data)) == null ? undefined : _d2.data) == null ? undefined : _e2.live_event) == null ? undefined : _f2.types, (item) => {
                        return openBlock(), createBlock(_component_RadioGroupItem, {
                          class: "p-6 w-full lg:p-8 mx-auto text-left ring ring-input bg-white/10 rounded-2xl transition-colors cursor-pointer data-[state='checked']:ring-primary hover:ring-primary/30",
                          key: item.id,
                          value: item.name
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-x-1" }, [
                              createVNode(_component_SvgIcon, { name: "money" }),
                              createVNode("div", { class: "text-4xl font-bold text-primary tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(item.price)), 1)
                            ]),
                            createVNode("div", { class: "text-2xl font-medium my-4 mb-2 capitalize" }, toDisplayString(item.name) + " request ", 1),
                            createVNode("div", { class: "text-muted-foreground" }, toDisplayString(item.name === "song" ? "Request a song and i'll give you credit when it plays" : "Steal the spotlight. Get a shout-out  for yourself or someone."), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedRequestType)) {
              _push2(`<!--[-->`);
              if (unref(selectedRequestType).name === "hype") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  request: unref(selectedRequestType),
                  event_id: unref(event_id),
                  host_slug: unref(host_slug)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(selectedRequestType).name === "song") {
                _push2(ssrRenderComponent(_sfc_main$1, {
                  request: unref(selectedRequestType),
                  event_id: unref(event_id),
                  host_slug: unref(host_slug)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-[700px] w-full mx-auto" }, [
                createVNode("div", { class: "text-primary text-center text-lg" }, "Make a request"),
                createVNode("div", { class: "text-3xl font-semibold text-center font-display mt-2 mb-4" }, " Tell me about your request "),
                ((_f = (_e = (_d = unref(data)) == null ? undefined : _d.data) == null ? undefined : _e.live_event) == null ? undefined : _f.types) ? (openBlock(), createBlock(_component_RadioGroupRoot, {
                  key: 0,
                  class: "grid grid-cols-[repeat(auto-fit,_minmax(315px,_1fr))] gap-6 my-6",
                  modelValue: unref(type),
                  "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null
                }, {
                  default: withCtx(() => {
                    var _a2, _b2, _c2;
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_c2 = (_b2 = (_a2 = unref(data)) == null ? undefined : _a2.data) == null ? undefined : _b2.live_event) == null ? undefined : _c2.types, (item) => {
                        return openBlock(), createBlock(_component_RadioGroupItem, {
                          class: "p-6 w-full lg:p-8 mx-auto text-left ring ring-input bg-white/10 rounded-2xl transition-colors cursor-pointer data-[state='checked']:ring-primary hover:ring-primary/30",
                          key: item.id,
                          value: item.name
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-x-1" }, [
                              createVNode(_component_SvgIcon, { name: "money" }),
                              createVNode("div", { class: "text-4xl font-bold text-primary tabular-nums" }, " \u20A6" + toDisplayString(("formatMoney" in _ctx ? _ctx.formatMoney : unref(formatMoney))(item.price)), 1)
                            ]),
                            createVNode("div", { class: "text-2xl font-medium my-4 mb-2 capitalize" }, toDisplayString(item.name) + " request ", 1),
                            createVNode("div", { class: "text-muted-foreground" }, toDisplayString(item.name === "song" ? "Request a song and i'll give you credit when it plays" : "Steal the spotlight. Get a shout-out  for yourself or someone."), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                unref(selectedRequestType) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  unref(selectedRequestType).name === "hype" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    request: unref(selectedRequestType),
                    event_id: unref(event_id),
                    host_slug: unref(host_slug)
                  }, null, 8, ["request", "event_id", "host_slug"])) : createCommentVNode("", true),
                  unref(selectedRequestType).name === "song" ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 1,
                    request: unref(selectedRequestType),
                    event_id: unref(event_id),
                    host_slug: unref(host_slug)
                  }, null, 8, ["request", "event_id", "host_slug"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[host]/[event_id]/make-a-request.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=make-a-request-a5E545bF.mjs.map
