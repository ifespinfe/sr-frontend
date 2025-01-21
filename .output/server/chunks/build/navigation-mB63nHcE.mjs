import { _ as __nuxt_component_0 } from './nuxt-link-BvHIOyM7.mjs';
import { _ as _sfc_main$3 } from './svg-icon-CvfuI_SP.mjs';
import { _ as _sfc_main$5 } from './tooltip-BOPp73dK.mjs';
import { l as useNotifications, _ as _sfc_main$4, b as useAuth, v as getInitials, aD as sh, aE as rh, aF as ih, aG as uh, aH as ch, f as useRouter, ak as Fv, al as Nv, am as Lv } from './server.mjs';
import { useSSRContext, defineComponent, withCtx, unref, openBlock, createBlock, createVNode, withModifiers, toDisplayString, createTextVNode, Fragment, renderList, createCommentVNode, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { Loader, Check, Inbox, UserCircle2, Wallet2, LogOut, Search } from 'lucide-vue-next';
import { u as useDateFormat } from './index-twTXuIJ-.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "notification-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      notifications,
      markNotificationAsRead,
      markAllNotificationsAsRead,
      loading,
      clearing,
      updating
    } = useNotifications();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenuRoot = sh;
      const _component_DropdownMenuTrigger = rh;
      const _component_DropdownMenuPortal = ih;
      const _component_DropdownMenuContent = uh;
      const _component_DropdownMenuItem = ch;
      _push(ssrRenderComponent(_component_DropdownMenuRoot, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    variant: "ghost",
                    class: "!rounded-full border !p-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(loading)) {
                          _push4(ssrRenderComponent(unref(Loader), { class: "animate-spn size-3" }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$3, { name: "bell" }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          unref(loading) ? (openBlock(), createBlock(unref(Loader), {
                            key: 0,
                            class: "animate-spn size-3"
                          })) : (openBlock(), createBlock(_sfc_main$3, {
                            key: 1,
                            name: "bell"
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      variant: "ghost",
                      class: "!rounded-full border !p-2"
                    }, {
                      default: withCtx(() => [
                        unref(loading) ? (openBlock(), createBlock(unref(Loader), {
                          key: 0,
                          class: "animate-spn size-3"
                        })) : (openBlock(), createBlock(_sfc_main$3, {
                          key: 1,
                          name: "bell"
                        }))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuPortal, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuContent, { class: "z-[150] min-w-[98vw] sm:min-w-[36rem] overflow-hidden rounded-xl border bg-popover space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between items-center border-b py-4 px-4 sm:px-8"${_scopeId3}><div class="text-2xl font-semibold"${_scopeId3}>Notifications</div></div><div class="h-[364px] overflow-auto pb-2 space-y-1"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(notifications), (notification) => {
                          _push4(ssrRenderComponent(_component_DropdownMenuItem, {
                            asChild: "",
                            key: notification.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b;
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-x-4 relative px-2 sm:px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors [&amp;:hover_.check-button]:inline-flex"${_scopeId4}><div class="bg-white/10 p-2 rounded-full"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_sfc_main$3, { name: "bell" }, null, _parent5, _scopeId4));
                                _push5(`</div><div class="space-y-1"${_scopeId4}><div${_scopeId4}>${ssrInterpolate((_a = notification == null ? undefined : notification.data) == null ? undefined : _a.message)}</div><div class="flex items-center gap-x-2 text-[#C3C3C3]"${_scopeId4}><div${_scopeId4}>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "Do MMM, YY"))}</div><div class="size-[6px] rounded-full bg-[#C3C3C3]"${_scopeId4}></div><div${_scopeId4}>${ssrInterpolate(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "HH:mm AA"))}</div></div></div><div class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 check-button sm:hidden"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_sfc_main$5, { message: "Mark as read" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$4, {
                                        size: "icon",
                                        variant: "outline",
                                        class: "animate-in slide-in-from-top-1",
                                        loading: unref(updating)[notification.id],
                                        onClick: ($event) => unref(markNotificationAsRead)(notification.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Check), { class: "size-5" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(Check), { class: "size-5" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$4, {
                                          size: "icon",
                                          variant: "outline",
                                          class: "animate-in slide-in-from-top-1",
                                          loading: unref(updating)[notification.id],
                                          onClick: withModifiers(($event) => unref(markNotificationAsRead)(notification.id), ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Check), { class: "size-5" })
                                          ]),
                                          _: 2
                                        }, 1032, ["loading", "onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-x-4 relative px-2 sm:px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors [&:hover_.check-button]:inline-flex" }, [
                                    createVNode("div", { class: "bg-white/10 p-2 rounded-full" }, [
                                      createVNode(_sfc_main$3, { name: "bell" })
                                    ]),
                                    createVNode("div", { class: "space-y-1" }, [
                                      createVNode("div", null, toDisplayString((_b = notification == null ? undefined : notification.data) == null ? undefined : _b.message), 1),
                                      createVNode("div", { class: "flex items-center gap-x-2 text-[#C3C3C3]" }, [
                                        createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "Do MMM, YY")), 1),
                                        createVNode("div", { class: "size-[6px] rounded-full bg-[#C3C3C3]" }),
                                        createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "HH:mm AA")), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 check-button sm:hidden" }, [
                                      createVNode(_sfc_main$5, { message: "Mark as read" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4, {
                                            size: "icon",
                                            variant: "outline",
                                            class: "animate-in slide-in-from-top-1",
                                            loading: unref(updating)[notification.id],
                                            onClick: withModifiers(($event) => unref(markNotificationAsRead)(notification.id), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Check), { class: "size-5" })
                                            ]),
                                            _: 2
                                          }, 1032, ["loading", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                        if (!unref(notifications).length) {
                          _push4(`<div class="space-y-2 grid place-items-center place-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Inbox), null, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}>No new notifications</div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(loading)) {
                          _push4(`<div class="place-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Loader), { class: "animate-spin" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        if (unref(notifications).length) {
                          _push4(`<div class="px-2 sm:px-6 py-2 border-t flex justify-end"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            variant: "outline",
                            loading: unref(clearing),
                            onClick: unref(markAllNotificationsAsRead)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Mark all as read `);
                              } else {
                                return [
                                  createTextVNode(" Mark all as read ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between items-center border-b py-4 px-4 sm:px-8" }, [
                            createVNode("div", { class: "text-2xl font-semibold" }, "Notifications")
                          ]),
                          createVNode("div", { class: "h-[364px] overflow-auto pb-2 space-y-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                              return openBlock(), createBlock(_component_DropdownMenuItem, {
                                asChild: "",
                                key: notification.id
                              }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode("div", { class: "flex items-center gap-x-4 relative px-2 sm:px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors [&:hover_.check-button]:inline-flex" }, [
                                      createVNode("div", { class: "bg-white/10 p-2 rounded-full" }, [
                                        createVNode(_sfc_main$3, { name: "bell" })
                                      ]),
                                      createVNode("div", { class: "space-y-1" }, [
                                        createVNode("div", null, toDisplayString((_a = notification == null ? undefined : notification.data) == null ? undefined : _a.message), 1),
                                        createVNode("div", { class: "flex items-center gap-x-2 text-[#C3C3C3]" }, [
                                          createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "Do MMM, YY")), 1),
                                          createVNode("div", { class: "size-[6px] rounded-full bg-[#C3C3C3]" }),
                                          createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "HH:mm AA")), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 check-button sm:hidden" }, [
                                        createVNode(_sfc_main$5, { message: "Mark as read" }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$4, {
                                              size: "icon",
                                              variant: "outline",
                                              class: "animate-in slide-in-from-top-1",
                                              loading: unref(updating)[notification.id],
                                              onClick: withModifiers(($event) => unref(markNotificationAsRead)(notification.id), ["stop"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Check), { class: "size-5" })
                                              ]),
                                              _: 2
                                            }, 1032, ["loading", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128)),
                            !unref(notifications).length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "space-y-2 grid place-items-center place-center"
                            }, [
                              createVNode(unref(Inbox)),
                              createVNode("div", null, "No new notifications")
                            ])) : createCommentVNode("", true),
                            unref(loading) ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "place-center"
                            }, [
                              createVNode(unref(Loader), { class: "animate-spin" })
                            ])) : createCommentVNode("", true)
                          ]),
                          unref(notifications).length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "px-2 sm:px-6 py-2 border-t flex justify-end"
                          }, [
                            createVNode(_sfc_main$4, {
                              variant: "outline",
                              loading: unref(clearing),
                              onClick: unref(markAllNotificationsAsRead)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Mark all as read ")
                              ]),
                              _: 1
                            }, 8, ["loading", "onClick"])
                          ])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuContent, { class: "z-[150] min-w-[98vw] sm:min-w-[36rem] overflow-hidden rounded-xl border bg-popover space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between items-center border-b py-4 px-4 sm:px-8" }, [
                          createVNode("div", { class: "text-2xl font-semibold" }, "Notifications")
                        ]),
                        createVNode("div", { class: "h-[364px] overflow-auto pb-2 space-y-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                            return openBlock(), createBlock(_component_DropdownMenuItem, {
                              asChild: "",
                              key: notification.id
                            }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode("div", { class: "flex items-center gap-x-4 relative px-2 sm:px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors [&:hover_.check-button]:inline-flex" }, [
                                    createVNode("div", { class: "bg-white/10 p-2 rounded-full" }, [
                                      createVNode(_sfc_main$3, { name: "bell" })
                                    ]),
                                    createVNode("div", { class: "space-y-1" }, [
                                      createVNode("div", null, toDisplayString((_a = notification == null ? undefined : notification.data) == null ? undefined : _a.message), 1),
                                      createVNode("div", { class: "flex items-center gap-x-2 text-[#C3C3C3]" }, [
                                        createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "Do MMM, YY")), 1),
                                        createVNode("div", { class: "size-[6px] rounded-full bg-[#C3C3C3]" }),
                                        createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "HH:mm AA")), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 check-button sm:hidden" }, [
                                      createVNode(_sfc_main$5, { message: "Mark as read" }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$4, {
                                            size: "icon",
                                            variant: "outline",
                                            class: "animate-in slide-in-from-top-1",
                                            loading: unref(updating)[notification.id],
                                            onClick: withModifiers(($event) => unref(markNotificationAsRead)(notification.id), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Check), { class: "size-5" })
                                            ]),
                                            _: 2
                                          }, 1032, ["loading", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128)),
                          !unref(notifications).length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-2 grid place-items-center place-center"
                          }, [
                            createVNode(unref(Inbox)),
                            createVNode("div", null, "No new notifications")
                          ])) : createCommentVNode("", true),
                          unref(loading) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "place-center"
                          }, [
                            createVNode(unref(Loader), { class: "animate-spin" })
                          ])) : createCommentVNode("", true)
                        ]),
                        unref(notifications).length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "px-2 sm:px-6 py-2 border-t flex justify-end"
                        }, [
                          createVNode(_sfc_main$4, {
                            variant: "outline",
                            loading: unref(clearing),
                            onClick: unref(markAllNotificationsAsRead)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Mark all as read ")
                            ]),
                            _: 1
                          }, 8, ["loading", "onClick"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
                    variant: "ghost",
                    class: "!rounded-full border !p-2"
                  }, {
                    default: withCtx(() => [
                      unref(loading) ? (openBlock(), createBlock(unref(Loader), {
                        key: 0,
                        class: "animate-spn size-3"
                      })) : (openBlock(), createBlock(_sfc_main$3, {
                        key: 1,
                        name: "bell"
                      }))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuPortal, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuContent, { class: "z-[150] min-w-[98vw] sm:min-w-[36rem] overflow-hidden rounded-xl border bg-popover space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between items-center border-b py-4 px-4 sm:px-8" }, [
                        createVNode("div", { class: "text-2xl font-semibold" }, "Notifications")
                      ]),
                      createVNode("div", { class: "h-[364px] overflow-auto pb-2 space-y-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                          return openBlock(), createBlock(_component_DropdownMenuItem, {
                            asChild: "",
                            key: notification.id
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode("div", { class: "flex items-center gap-x-4 relative px-2 sm:px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors [&:hover_.check-button]:inline-flex" }, [
                                  createVNode("div", { class: "bg-white/10 p-2 rounded-full" }, [
                                    createVNode(_sfc_main$3, { name: "bell" })
                                  ]),
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode("div", null, toDisplayString((_a = notification == null ? undefined : notification.data) == null ? undefined : _a.message), 1),
                                    createVNode("div", { class: "flex items-center gap-x-2 text-[#C3C3C3]" }, [
                                      createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "Do MMM, YY")), 1),
                                      createVNode("div", { class: "size-[6px] rounded-full bg-[#C3C3C3]" }),
                                      createVNode("div", null, toDisplayString(("useDateFormat" in _ctx ? _ctx.useDateFormat : unref(useDateFormat))(notification.created_at, "HH:mm AA")), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 check-button sm:hidden" }, [
                                    createVNode(_sfc_main$5, { message: "Mark as read" }, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$4, {
                                          size: "icon",
                                          variant: "outline",
                                          class: "animate-in slide-in-from-top-1",
                                          loading: unref(updating)[notification.id],
                                          onClick: withModifiers(($event) => unref(markNotificationAsRead)(notification.id), ["stop"])
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Check), { class: "size-5" })
                                          ]),
                                          _: 2
                                        }, 1032, ["loading", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ];
                            }),
                            _: 2
                          }, 1024);
                        }), 128)),
                        !unref(notifications).length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-2 grid place-items-center place-center"
                        }, [
                          createVNode(unref(Inbox)),
                          createVNode("div", null, "No new notifications")
                        ])) : createCommentVNode("", true),
                        unref(loading) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "place-center"
                        }, [
                          createVNode(unref(Loader), { class: "animate-spin" })
                        ])) : createCommentVNode("", true)
                      ]),
                      unref(notifications).length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "px-2 sm:px-6 py-2 border-t flex justify-end"
                      }, [
                        createVNode(_sfc_main$4, {
                          variant: "outline",
                          loading: unref(clearing),
                          onClick: unref(markAllNotificationsAsRead)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Mark all as read ")
                          ]),
                          _: 1
                        }, 8, ["loading", "onClick"])
                      ])) : createCommentVNode("", true)
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/notification-menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "profile-menu",
  __ssrInlineRender: true,
  setup(__props) {
    const { logOut: logUserOut, auth_user } = useAuth();
    const gotoLogin = () => {
      useRouter().push("/login");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenuRoot = sh;
      const _component_DropdownMenuTrigger = rh;
      const _component_AvatarRoot = Fv;
      const _component_AvatarImage = Nv;
      const _component_AvatarFallback = Lv;
      const _component_DropdownMenuPortal = ih;
      const _component_DropdownMenuContent = uh;
      const _component_DropdownMenuItem = ch;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_DropdownMenuRoot, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { asChild: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    variant: "ghost",
                    class: "w-auto h-auto !p-0 !rounded-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AvatarRoot, { class: "bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b, _c, _d;
                            if (_push5) {
                              if ((_a = unref(auth_user)) == null ? undefined : _a.profile_picture) {
                                _push5(ssrRenderComponent(_component_AvatarImage, {
                                  src: (_b = unref(auth_user)) == null ? undefined : _b.profile_picture,
                                  class: "h-full w-full object-cover"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_AvatarFallback, { class: "leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a3, _b3, _c3, _d3, _e2, _f2;
                                  var _a2, _b2, _c2, _d2, _e, _f;
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(
                                      (_c3 = (_b3 = (_a3 = (_a2 = unref(auth_user)) == null ? undefined : _a2.stage_name) != null ? _a3 : (_b2 = unref(auth_user)) == null ? undefined : _b2.user_name) != null ? _b3 : (_c2 = unref(auth_user)) == null ? undefined : _c2.email) != null ? _c3 : ""
                                    ))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(
                                        (_f2 = (_e2 = (_d3 = (_d2 = unref(auth_user)) == null ? undefined : _d2.stage_name) != null ? _d3 : (_e = unref(auth_user)) == null ? undefined : _e.user_name) != null ? _e2 : (_f = unref(auth_user)) == null ? undefined : _f.email) != null ? _f2 : ""
                                      )), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                ((_c = unref(auth_user)) == null ? undefined : _c.profile_picture) ? (openBlock(), createBlock(_component_AvatarImage, {
                                  key: 0,
                                  src: (_d = unref(auth_user)) == null ? undefined : _d.profile_picture,
                                  class: "h-full w-full object-cover"
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode(_component_AvatarFallback, { class: "leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase" }, {
                                  default: withCtx(() => {
                                    var _a3, _b3, _c3;
                                    var _a2, _b2, _c2;
                                    return [
                                      createTextVNode(toDisplayString(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(
                                        (_c3 = (_b3 = (_a3 = (_a2 = unref(auth_user)) == null ? undefined : _a2.stage_name) != null ? _a3 : (_b2 = unref(auth_user)) == null ? undefined : _b2.user_name) != null ? _b3 : (_c2 = unref(auth_user)) == null ? undefined : _c2.email) != null ? _c3 : ""
                                      )), 1)
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AvatarRoot, { class: "bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle" }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                ((_a = unref(auth_user)) == null ? undefined : _a.profile_picture) ? (openBlock(), createBlock(_component_AvatarImage, {
                                  key: 0,
                                  src: (_b = unref(auth_user)) == null ? undefined : _b.profile_picture,
                                  class: "h-full w-full object-cover"
                                }, null, 8, ["src"])) : createCommentVNode("", true),
                                createVNode(_component_AvatarFallback, { class: "leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase" }, {
                                  default: withCtx(() => {
                                    var _a3, _b3, _c2;
                                    var _a2, _b2, _c;
                                    return [
                                      createTextVNode(toDisplayString(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(
                                        (_c2 = (_b3 = (_a3 = (_a2 = unref(auth_user)) == null ? undefined : _a2.stage_name) != null ? _a3 : (_b2 = unref(auth_user)) == null ? undefined : _b2.user_name) != null ? _b3 : (_c = unref(auth_user)) == null ? undefined : _c.email) != null ? _c2 : ""
                                      )), 1)
                                    ];
                                  }),
                                  _: 1
                                })
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      variant: "ghost",
                      class: "w-auto h-auto !p-0 !rounded-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AvatarRoot, { class: "bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle" }, {
                          default: withCtx(() => {
                            var _a, _b;
                            return [
                              ((_a = unref(auth_user)) == null ? undefined : _a.profile_picture) ? (openBlock(), createBlock(_component_AvatarImage, {
                                key: 0,
                                src: (_b = unref(auth_user)) == null ? undefined : _b.profile_picture,
                                class: "h-full w-full object-cover"
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode(_component_AvatarFallback, { class: "leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase" }, {
                                default: withCtx(() => {
                                  var _a3, _b3, _c2;
                                  var _a2, _b2, _c;
                                  return [
                                    createTextVNode(toDisplayString(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(
                                      (_c2 = (_b3 = (_a3 = (_a2 = unref(auth_user)) == null ? undefined : _a2.stage_name) != null ? _a3 : (_b2 = unref(auth_user)) == null ? undefined : _b2.user_name) != null ? _b3 : (_c = unref(auth_user)) == null ? undefined : _c.email) != null ? _c2 : ""
                                    )), 1)
                                  ];
                                }),
                                _: 1
                              })
                            ];
                          }),
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
            _push2(ssrRenderComponent(_component_DropdownMenuPortal, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuContent, { class: "z-[150] min-w-[8rem] overflow-hidden rounded-xl border bg-popover p-2 space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d, _e, _f;
                      if (_push4) {
                        if (((_a = unref(auth_user)) == null ? undefined : _a.role) === "host") {
                          _push4(ssrRenderComponent(_component_DropdownMenuItem, { asChild: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/dashboard",
                                  class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(UserCircle2), { class: "size-4 mr-2" }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>Dashboard</span>`);
                                    } else {
                                      return [
                                        createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                        createVNode("span", null, "Dashboard")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: "/dashboard",
                                    class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                      createVNode("span", null, "Dashboard")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_DropdownMenuItem, { asChild: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/profile",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(UserCircle2), { class: "size-4 mr-2" }, null, _parent6, _scopeId5));
                                    _push6(`<span${_scopeId5}>Profile</span>`);
                                  } else {
                                    return [
                                      createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                      createVNode("span", null, "Profile")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, {
                                  to: "/profile",
                                  class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                    createVNode("span", null, "Profile")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (((_b = unref(auth_user)) == null ? undefined : _b.role) === "audience") {
                          _push4(ssrRenderComponent(_component_DropdownMenuItem, { asChild: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/order-history",
                                  class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Wallet2), { class: "mr-2 size-4" }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>Order History</span>`);
                                    } else {
                                      return [
                                        createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                        createVNode("span", null, "Order History")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: "/order-history",
                                    class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                      createVNode("span", null, "Order History")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (((_c = unref(auth_user)) == null ? undefined : _c.role) === "host") {
                          _push4(ssrRenderComponent(_component_DropdownMenuItem, { asChild: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_NuxtLink, {
                                  to: "/wallet",
                                  class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Wallet2), { class: "mr-2 size-4" }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>Wallet</span>`);
                                    } else {
                                      return [
                                        createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                        createVNode("span", null, "Wallet")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_NuxtLink, {
                                    to: "/wallet",
                                    class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                      createVNode("span", null, "Wallet")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_DropdownMenuItem, {
                          class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                          onSelect: (_e2) => unref(logUserOut)(gotoLogin)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(LogOut), { class: "size-4 mr-2" }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>Log out</span>`);
                            } else {
                              return [
                                createVNode(unref(LogOut), { class: "size-4 mr-2" }),
                                createVNode("span", null, "Log out")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          ((_d = unref(auth_user)) == null ? undefined : _d.role) === "host" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                            key: 0,
                            asChild: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/dashboard",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                  createVNode("span", null, "Dashboard")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_DropdownMenuItem, { asChild: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/profile",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                  createVNode("span", null, "Profile")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_e = unref(auth_user)) == null ? undefined : _e.role) === "audience" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                            key: 1,
                            asChild: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/order-history",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                  createVNode("span", null, "Order History")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          ((_f = unref(auth_user)) == null ? undefined : _f.role) === "host" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                            key: 2,
                            asChild: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/wallet",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                  createVNode("span", null, "Wallet")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_DropdownMenuItem, {
                            class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                            onSelect: (_e2) => unref(logUserOut)(gotoLogin)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LogOut), { class: "size-4 mr-2" }),
                              createVNode("span", null, "Log out")
                            ]),
                            _: 1
                          }, 8, ["onSelect"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuContent, { class: "z-[150] min-w-[8rem] overflow-hidden rounded-xl border bg-popover p-2 space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" }, {
                      default: withCtx(() => {
                        var _a, _b, _c;
                        return [
                          ((_a = unref(auth_user)) == null ? undefined : _a.role) === "host" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                            key: 0,
                            asChild: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/dashboard",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                  createVNode("span", null, "Dashboard")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_DropdownMenuItem, { asChild: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/profile",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                  createVNode("span", null, "Profile")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          ((_b = unref(auth_user)) == null ? undefined : _b.role) === "audience" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                            key: 1,
                            asChild: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/order-history",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                  createVNode("span", null, "Order History")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          ((_c = unref(auth_user)) == null ? undefined : _c.role) === "host" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                            key: 2,
                            asChild: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/wallet",
                                class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                  createVNode("span", null, "Wallet")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_DropdownMenuItem, {
                            class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                            onSelect: (_e) => unref(logUserOut)(gotoLogin)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LogOut), { class: "size-4 mr-2" }),
                              createVNode("span", null, "Log out")
                            ]),
                            _: 1
                          }, 8, ["onSelect"])
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, { asChild: "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
                    variant: "ghost",
                    class: "w-auto h-auto !p-0 !rounded-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_AvatarRoot, { class: "bg-muted inline-flex size-[40px] select-pointer items-center justify-center overflow-hidden rounded-full align-middle" }, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            ((_a = unref(auth_user)) == null ? undefined : _a.profile_picture) ? (openBlock(), createBlock(_component_AvatarImage, {
                              key: 0,
                              src: (_b = unref(auth_user)) == null ? undefined : _b.profile_picture,
                              class: "h-full w-full object-cover"
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createVNode(_component_AvatarFallback, { class: "leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium uppercase" }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c2;
                                var _a2, _b2, _c;
                                return [
                                  createTextVNode(toDisplayString(("getInitials" in _ctx ? _ctx.getInitials : unref(getInitials))(
                                    (_c2 = (_b3 = (_a3 = (_a2 = unref(auth_user)) == null ? undefined : _a2.stage_name) != null ? _a3 : (_b2 = unref(auth_user)) == null ? undefined : _b2.user_name) != null ? _b3 : (_c = unref(auth_user)) == null ? undefined : _c.email) != null ? _c2 : ""
                                  )), 1)
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuPortal, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuContent, { class: "z-[150] min-w-[8rem] overflow-hidden rounded-xl border bg-popover p-2 space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" }, {
                    default: withCtx(() => {
                      var _a, _b, _c;
                      return [
                        ((_a = unref(auth_user)) == null ? undefined : _a.role) === "host" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                          key: 0,
                          asChild: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/dashboard",
                              class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                createVNode("span", null, "Dashboard")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_DropdownMenuItem, { asChild: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/profile",
                              class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(UserCircle2), { class: "size-4 mr-2" }),
                                createVNode("span", null, "Profile")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        ((_b = unref(auth_user)) == null ? undefined : _b.role) === "audience" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                          key: 1,
                          asChild: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/order-history",
                              class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                createVNode("span", null, "Order History")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        ((_c = unref(auth_user)) == null ? undefined : _c.role) === "host" ? (openBlock(), createBlock(_component_DropdownMenuItem, {
                          key: 2,
                          asChild: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/wallet",
                              class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Wallet2), { class: "mr-2 size-4" }),
                                createVNode("span", null, "Wallet")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_DropdownMenuItem, {
                          class: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                          onSelect: (_e) => unref(logUserOut)(gotoLogin)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(LogOut), { class: "size-4 mr-2" }),
                            createVNode("span", null, "Log out")
                          ]),
                          _: 1
                        }, 8, ["onSelect"])
                      ];
                    }),
                    _: 1
                  })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile-menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLoggedIn, auth_user } = useAuth();
    const homeRoute = computed(() => {
      var _a;
      if (!isLoggedIn.value) return "/";
      return ((_a = auth_user.value) == null ? undefined : _a.role) === "audience" ? "/audience" : "/dashboard";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SvgIcon = _sfc_main$3;
      const _component_UiTooltip = _sfc_main$5;
      const _component_NotificationMenu = _sfc_main$2;
      const _component_ProfileMenu = _sfc_main$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center gap-x-px",
        to: unref(homeRoute)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SvgIcon, { class: "scale-75" }, null, _parent2, _scopeId));
            _push2(`<div class="text-lg font-semibold font-display hidden sm:block"${_scopeId}> SpinRequest </div>`);
          } else {
            return [
              createVNode(_component_SvgIcon, { class: "scale-75" }),
              createVNode("div", { class: "text-lg font-semibold font-display hidden sm:block" }, " SpinRequest ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="flex items-center gap-x-2">`);
      if (unref(isLoggedIn)) {
        _push(`<!--[-->`);
        if (((_a = unref(auth_user)) == null ? undefined : _a.role) === "audience") {
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/audience" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiTooltip, {
                  message: "Search host",
                  delay: 50
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$4, {
                        size: "icon",
                        class: "!size-[40px]",
                        variant: "ghost"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(Search), { class: "size-5" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(Search), { class: "size-5" })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$4, {
                          size: "icon",
                          class: "!size-[40px]",
                          variant: "ghost"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Search), { class: "size-5" })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiTooltip, {
                    message: "Search host",
                    delay: 50
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4, {
                        size: "icon",
                        class: "!size-[40px]",
                        variant: "ghost"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Search), { class: "size-5" })
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
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NotificationMenu, null, null, _parent));
        _push(ssrRenderComponent(_component_ProfileMenu, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` LOGIN `);
                  } else {
                    return [
                      createTextVNode(" LOGIN ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4, null, {
                  default: withCtx(() => [
                    createTextVNode(" LOGIN ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/signup" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, { variant: "secondary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` SIGN UP `);
                  } else {
                    return [
                      createTextVNode(" SIGN UP ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4, { variant: "secondary" }, {
                  default: withCtx(() => [
                    createTextVNode(" SIGN UP ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</nav></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=navigation-mB63nHcE.mjs.map
