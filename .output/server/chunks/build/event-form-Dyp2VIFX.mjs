import { a as useNuxtApp, _ as _sfc_main$4, s as showToast, n as navigateTo, T as Ty, R as Ry } from './server.mjs';
import { defineComponent, computed, ref, unref, mergeProps, withCtx, isRef, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Form } from 'vee-validate';
import { X } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './form-input-DhwcXBKy.mjs';
import { _ as _sfc_main$2 } from './form-select-CdCOkqF9.mjs';
import { _ as _sfc_main$3 } from './number-input-KDBkJw-x.mjs';
import { object, string } from 'yup';

const EventSchema = object({
  title: string().required("Event title required").min(5, "Title should be at least 5 characters long"),
  address: string().required("Event address required"),
  country: string().required("Event country required"),
  state: string().required("Event state required")
});
const NIGERIA_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
];
const useCountry = () => {
  return {
    all_countries: ["Nigeria"],
    nigerian_states: NIGERIA_STATES
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "event-form",
  __ssrInlineRender: true,
  props: {
    edit: { type: Boolean, default: false },
    id: {},
    title: { default: "" },
    address: { default: "" },
    country: {},
    state: {},
    type: {},
    song_price: { default: 100 },
    hype_price: { default: 100 }
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formInitialValues = computed(() => {
      return {
        title: props.title,
        address: props.address,
        country: props.country,
        state: props.state
      };
    });
    const { all_countries: countries, nigerian_states: states } = useCountry();
    const type = ref(props.type);
    const song_price = ref(props.song_price);
    const hype_price = ref(props.hype_price);
    const show_tip = ref(true);
    const disabled = computed(
      () => !type.value || Number(song_price.value) < 0 || Number(hype_price.value) < 0
    );
    const loading = ref(false);
    const free = ref(false);
    const types = computed(() => {
      switch (type.value) {
        case "both":
          return [
            {
              name: "song",
              price: free.value ? 0 : Number(song_price.value)
            },
            {
              name: "hype",
              price: free.value ? 0 : Number(hype_price.value)
            }
          ];
        case "hype":
          return [
            {
              name: "hype",
              price: free.value ? 0 : Number(hype_price.value)
            }
          ];
        case "song":
          return [
            {
              name: "song",
              price: free.value ? 0 : Number(song_price.value)
            }
          ];
        default:
          return [];
      }
    });
    const {
      $repo: { event: eventModule }
    } = useNuxtApp();
    const handleSubmit = async (event) => {
      var _a2;
      var _a;
      const payload = {
        ...event,
        types: types.value
      };
      try {
        loading.value = true;
        const response = props.edit ? await eventModule.editEvent(payload, props.id) : await eventModule.createEvent(payload);
        loading.value = false;
        showToast({ title: response.message, variant: "normal" });
        if (props.edit) {
          emit("done");
          return;
        }
        if (response.data.id) {
          navigateTo("/dashboard");
        }
      } catch (error) {
        const e = error;
        loading.value = false;
        showToast({
          title: ((_a2 = (_a = e.data) == null ? undefined : _a.message) != null ? _a2 : props.edit) ? "Failed to update event" : "Failed to create event",
          variant: "warning"
        });
        console.error("FAILED", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RadioGroupRoot = Ty;
      const _component_RadioGroupItem = Ry;
      _push(ssrRenderComponent(unref(Form), mergeProps({
        class: "space-y-6",
        "validation-schema": unref(EventSchema),
        "initial-values": unref(formInitialValues),
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              name: "title",
              placeholder: "Enter event title",
              label: "Event title"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              name: "address",
              placeholder: "Enter event address",
              label: "Address"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col sm:flex-row gap-4 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              options: unref(countries),
              name: "country",
              placeholder: "Choose event country",
              label: "Country",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              options: unref(states),
              name: "state",
              placeholder: "Choose event state",
              label: "State",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="mb-3 font-medium"${_scopeId}>What type of request are you taking</div>`);
            _push2(ssrRenderComponent(_component_RadioGroupRoot, {
              class: "grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground",
              name: "type",
              required: "",
              modelValue: unref(type),
              "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RadioGroupItem, {
                    "as-child": "",
                    value: "song"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Song `);
                            } else {
                              return [
                                createTextVNode(" Song ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4, {
                            type: "button",
                            variant: "outline",
                            size: "lg",
                            class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Song ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RadioGroupItem, {
                    "as-child": "",
                    value: "hype"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Hype `);
                            } else {
                              return [
                                createTextVNode(" Hype ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4, {
                            type: "button",
                            variant: "outline",
                            size: "lg",
                            class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Hype ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_RadioGroupItem, {
                    "as-child": "",
                    value: "both"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Song &amp; Hype `);
                            } else {
                              return [
                                createTextVNode(" Song & Hype ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4, {
                            type: "button",
                            variant: "outline",
                            size: "lg",
                            class: "col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Song & Hype ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RadioGroupItem, {
                      "as-child": "",
                      value: "song"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Song ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RadioGroupItem, {
                      "as-child": "",
                      value: "hype"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hype ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RadioGroupItem, {
                      "as-child": "",
                      value: "both"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Song & Hype ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(type) && !unref(free)) {
              _push2(`<div class="bg-white/5 rounded-2xl p-4 !mt-8 border animate-in slide-in-from-top-1 animate-out fade-in-0"${_scopeId}><div class="text-sm text-muted-foreground"${_scopeId}>Set your starting prices</div><div class="my-4 space-y-4"${_scopeId}>`);
              if (unref(type) == "both" || unref(type) == "song") {
                _push2(`<div class="flex justify-between items-center"${_scopeId}><div class="text-2xl font-semibold"${_scopeId}> Song <span class="hidden sm:inline"${_scopeId}>request</span></div>`);
                _push2(ssrRenderComponent(_sfc_main$3, {
                  modelValue: unref(song_price),
                  "onUpdate:modelValue": ($event) => isRef(song_price) ? song_price.value = $event : null,
                  id: "SONG_PRICE",
                  step: 100
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(type) == "both" || unref(type) == "hype") {
                _push2(`<div class="flex justify-between items-center"${_scopeId}><div class="text-2xl font-semibold"${_scopeId}> Hype <span class="hidden sm:inline"${_scopeId}>request</span></div>`);
                _push2(ssrRenderComponent(_sfc_main$3, {
                  modelValue: unref(hype_price),
                  "onUpdate:modelValue": ($event) => isRef(hype_price) ? hype_price.value = $event : null,
                  id: "HYPE_PRICE",
                  step: 100
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(show_tip) && !_ctx.edit) {
                _push2(`<div class="py-1 px-2 mt-8 border border-destructive bg-[#64200A] flex items-center rounded-md justify-between"${_scopeId}><div class="text-sm sm:text-base"${_scopeId}> You can always change the price at any time during the event </div>`);
                _push2(ssrRenderComponent(unref(X), {
                  class: "size-4 cursor-pointer",
                  onClick: ($event) => show_tip.value = false
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "max-w-full w-[450px] !flex !mt-8 mx-auto border",
              size: "lg",
              disabled: unref(disabled),
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.edit ? "Update" : "Create")} event `);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.edit ? "Update" : "Create") + " event ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                name: "title",
                placeholder: "Enter event title",
                label: "Event title"
              }),
              createVNode(_sfc_main$1, {
                name: "address",
                placeholder: "Enter event address",
                label: "Address"
              }),
              createVNode("div", { class: "flex flex-col sm:flex-row gap-4 w-full" }, [
                createVNode(_sfc_main$2, {
                  options: unref(countries),
                  name: "country",
                  placeholder: "Choose event country",
                  label: "Country",
                  class: "w-full"
                }, null, 8, ["options"]),
                createVNode(_sfc_main$2, {
                  options: unref(states),
                  name: "state",
                  placeholder: "Choose event state",
                  label: "State",
                  class: "w-full"
                }, null, 8, ["options"])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-3 font-medium" }, "What type of request are you taking"),
                createVNode(_component_RadioGroupRoot, {
                  class: "grid grid-cols-2 sm:grid-cols-3 gap-4 text-muted-foreground",
                  name: "type",
                  required: "",
                  modelValue: unref(type),
                  "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null
                }, {
                  default: withCtx(() => [
                    createVNode(_component_RadioGroupItem, {
                      "as-child": "",
                      value: "song"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Song ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RadioGroupItem, {
                      "as-child": "",
                      value: "hype"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "ring-transparent bg-white/5 transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Hype ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_RadioGroupItem, {
                      "as-child": "",
                      value: "both"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          type: "button",
                          variant: "outline",
                          size: "lg",
                          class: "col-span-2 sm:col-span-1 bg-white/5 ring-transparent transition-colors ring-[1px] data-[state='checked']:ring-primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Song & Hype ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              unref(type) && !unref(free) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "bg-white/5 rounded-2xl p-4 !mt-8 border animate-in slide-in-from-top-1 animate-out fade-in-0"
              }, [
                createVNode("div", { class: "text-sm text-muted-foreground" }, "Set your starting prices"),
                createVNode("div", { class: "my-4 space-y-4" }, [
                  unref(type) == "both" || unref(type) == "song" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-between items-center"
                  }, [
                    createVNode("div", { class: "text-2xl font-semibold" }, [
                      createTextVNode(" Song "),
                      createVNode("span", { class: "hidden sm:inline" }, "request")
                    ]),
                    createVNode(_sfc_main$3, {
                      modelValue: unref(song_price),
                      "onUpdate:modelValue": ($event) => isRef(song_price) ? song_price.value = $event : null,
                      id: "SONG_PRICE",
                      step: 100
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true),
                  unref(type) == "both" || unref(type) == "hype" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-between items-center"
                  }, [
                    createVNode("div", { class: "text-2xl font-semibold" }, [
                      createTextVNode(" Hype "),
                      createVNode("span", { class: "hidden sm:inline" }, "request")
                    ]),
                    createVNode(_sfc_main$3, {
                      modelValue: unref(hype_price),
                      "onUpdate:modelValue": ($event) => isRef(hype_price) ? hype_price.value = $event : null,
                      id: "HYPE_PRICE",
                      step: 100
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                unref(show_tip) && !_ctx.edit ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "py-1 px-2 mt-8 border border-destructive bg-[#64200A] flex items-center rounded-md justify-between"
                }, [
                  createVNode("div", { class: "text-sm sm:text-base" }, " You can always change the price at any time during the event "),
                  createVNode(unref(X), {
                    class: "size-4 cursor-pointer",
                    onClick: ($event) => show_tip.value = false
                  }, null, 8, ["onClick"])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$4, {
                class: "max-w-full w-[450px] !flex !mt-8 mx-auto border",
                size: "lg",
                disabled: unref(disabled),
                loading: unref(loading)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.edit ? "Update" : "Create") + " event ", 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/event-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=event-form-Dyp2VIFX.mjs.map
