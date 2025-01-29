import { _ as _sfc_main$9 } from './back-button-C72TNXKz.mjs';
import { _ as _sfc_main$a } from './loading-area-BCC1xwyu.mjs';
import { a as useNuxtApp, b as useAuth, v as getInitials, az as useState, e as useSeoMeta, k as cn, _ as _sfc_main$4$1, s as showToast, n as navigateTo, t as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Dggp6fVd.mjs';
import { _ as _sfc_main$8, a as _sfc_main$1$1 } from './form-input-DhwcXBKy.mjs';
import { _ as _sfc_main$b } from './select-field-Bp7xTQ5L.mjs';
import { useSSRContext, defineComponent, computed, ref, watchEffect, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, renderSlot, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$c } from './modal-BEorc3YA.mjs';
import { Form } from 'vee-validate';
import { C as ChangePasswordSchema, U as UsernameSchema, B as BioSchema } from './user-schema-Imz6LROc.mjs';
import { Edit2, ChevronRight, Loader, Upload, CopyCheck, Copy, Share2 } from 'lucide-vue-next';
import { b as useDropZone } from './index-CNLs9n-l.mjs';
import { u as useCustomFetch } from './useCustomFetch-gnzvpvvo.mjs';
import { _ as _sfc_main$6 } from './svg-icon-CvfuI_SP.mjs';
import { _ as _sfc_main$d } from './popover-DcCqGT5R.mjs';
import { u as useSocialShare } from './useSocialShare-ZpPVAG52.mjs';
import { _ as _sfc_main$7 } from './wallet-BlNYIObq.mjs';
import { _ as _sfc_main$5 } from './avatar-BNYzPSiu.mjs';
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
import 'yup';
import './index-twTXuIJ-.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "password-change",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      $repo: { auth }
    } = useNuxtApp();
    const { logOut } = useAuth();
    const loading = ref(false);
    const handlePasswordChange = async (payload) => {
      var _a2;
      var _a, _b;
      try {
        loading.value = true;
        const response = await auth.changePassword(payload);
        const message = response == null ? void 0 : response.message;
        showToast({ title: "Success", description: message, variant: "normal" });
        loading.value = false;
        logOut(() => {
          return navigateTo("/login");
        });
      } catch (e) {
        loading.value = false;
        showToast({
          title: "Failed",
          description: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Invalid credentials",
          variant: "warning"
        });
        console.error("ERROR LOGGING IN", (_b = e == null ? undefined : e.data) == null ? undefined : _b.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$c;
      _push(ssrRenderComponent(_component_Modal, mergeProps({ size: "md" }, _attrs), {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                variant: "secondary",
                class: "self-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`CHANGE`);
                  } else {
                    return [
                      createTextVNode("CHANGE")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_sfc_main$4$1, {
                  variant: "secondary",
                  class: "self-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode("CHANGE")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-display text-2xl font-medium"${_scopeId}>Change password</div>`);
          } else {
            return [
              createVNode("div", { class: "font-display text-2xl font-medium" }, "Change password")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Form), {
              class: "space-y-6 mt-2",
              "validation-schema": unref(ChangePasswordSchema),
              onSubmit: handlePasswordChange
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    name: "old_password",
                    label: "Old password",
                    placeholder: "Enter your old password",
                    type: "password"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    name: "password",
                    label: "New password",
                    placeholder: "Enter your new password",
                    type: "password"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    name: "password_confirmation",
                    label: "Confirm password",
                    placeholder: "Confirm your new password",
                    type: "password"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="pt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4$1, {
                    size: "lg",
                    type: "submit",
                    class: "w-full",
                    loading: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` SAVE PASSWORD `);
                      } else {
                        return [
                          createTextVNode(" SAVE PASSWORD ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_sfc_main$8, {
                      name: "old_password",
                      label: "Old password",
                      placeholder: "Enter your old password",
                      type: "password"
                    }),
                    createVNode(_sfc_main$8, {
                      name: "password",
                      label: "New password",
                      placeholder: "Enter your new password",
                      type: "password"
                    }),
                    createVNode(_sfc_main$8, {
                      name: "password_confirmation",
                      label: "Confirm password",
                      placeholder: "Confirm your new password",
                      type: "password"
                    }),
                    createVNode("div", { class: "pt-6" }, [
                      createVNode(_sfc_main$4$1, {
                        size: "lg",
                        type: "submit",
                        class: "w-full",
                        loading: unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" SAVE PASSWORD ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode(unref(Form), {
                  class: "space-y-6 mt-2",
                  "validation-schema": unref(ChangePasswordSchema),
                  onSubmit: handlePasswordChange
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$8, {
                      name: "old_password",
                      label: "Old password",
                      placeholder: "Enter your old password",
                      type: "password"
                    }),
                    createVNode(_sfc_main$8, {
                      name: "password",
                      label: "New password",
                      placeholder: "Enter your new password",
                      type: "password"
                    }),
                    createVNode(_sfc_main$8, {
                      name: "password_confirmation",
                      label: "Confirm password",
                      placeholder: "Confirm your new password",
                      type: "password"
                    }),
                    createVNode("div", { class: "pt-6" }, [
                      createVNode(_sfc_main$4$1, {
                        size: "lg",
                        type: "submit",
                        class: "w-full",
                        loading: unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" SAVE PASSWORD ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ]),
                  _: 1
                }, 8, ["validation-schema"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/password-change.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
const useFileUpload = () => {
  const {
    $repo: { auth }
  } = useNuxtApp();
  const uploading = ref(false);
  const uploaded_url = ref();
  const upload_error = ref();
  const upload_preview = ref();
  const previewed_file = ref();
  const uploadFile = async (onUpload, _file) => {
    var _a2;
    var _a;
    try {
      const file = _file ? _file : previewed_file.value;
      if (!file || !file.type.startsWith("image/")) {
        showToast({
          title: file ? "Upload only image" : "Upload a file",
          variant: "warning"
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a22;
        upload_preview.value = (_a22 = e.target) == null ? void 0 : _a22.result;
      };
      reader.readAsDataURL(file);
      const formdata = new FormData();
      formdata.append("profile_picture", file, file.name);
      uploading.value = true;
      const response = await auth.uploadFile(formdata);
      uploading.value = false;
      if (response.data) {
        uploaded_url.value = response.data;
        onUpload == null ? void 0 : onUpload(response.data);
      }
    } catch (e) {
      uploaded_url.value = undefined;
      uploading.value = false;
      const error = e;
      upload_error.value = error;
      showToast({
        title: "Upload Error",
        description: (_a2 = (_a = error == null ? undefined : error.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to upload",
        variant: "warning"
      });
    }
  };
  const previewFile = (file) => {
    var _a2;
    var _a;
    try {
      if (!file.type.startsWith("image/")) {
        showToast({ title: "Upload only image", variant: "warning" });
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a22;
        previewed_file.value = file;
        upload_preview.value = (_a22 = e.target) == null ? void 0 : _a22.result;
      };
      reader.onerror = (e) => {
        var _a3;
        var _a22, _b;
        previewed_file.value = void 0;
        showToast({
          title: "Preview Error",
          description: (_a3 = (_b = (_a22 = e.target) == null ? void 0 : _a22.error) == null ? void 0 : _b.message) != null ? _a3 : "Failed to preview",
          variant: "warning"
        });
      };
      reader.readAsDataURL(file);
    } catch (e) {
      previewed_file.value = undefined;
      uploaded_url.value = undefined;
      uploading.value = false;
      const error = e;
      upload_error.value = error;
      showToast({
        title: "Preview Error",
        description: (_a2 = (_a = error == null ? undefined : error.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to preview",
        variant: "warning"
      });
    }
  };
  return {
    previewFile,
    uploadFile,
    uploading,
    upload_error,
    upload_preview,
    uploaded_url
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "upload-photo",
  __ssrInlineRender: true,
  emits: ["uploaded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const open = ref(false);
    const dropZoneRef = ref();
    const {
      previewFile,
      uploadFile,
      uploading,
      upload_error,
      upload_preview,
      uploaded_url
    } = useFileUpload();
    const onFileSelectedOrDropped = (files) => {
      if (files == null ? undefined : files.length) {
        previewFile(files[0]);
      }
    };
    const handleFileChange = (event) => {
      const input = event.target;
      const files = input.files;
      onFileSelectedOrDropped(files);
    };
    const completeUpload = () => {
      uploadFile((url) => {
        emit("uploaded", url);
        open.value = false;
        showToast({ title: "Done", description: "Picture uploaded" });
      });
    };
    const { isOverDropZone } = useDropZone(dropZoneRef, {
      onDrop: onFileSelectedOrDropped,
      dataTypes: ["image/jpeg", "image/jpg", "image/png"],
      multiple: false,
      preventDefaultForUnhandled: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$c;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        size: "md",
        modelValue: unref(open),
        "onUpdate:modelValue": ($event) => isRef(open) ? open.value = $event : null,
        controlled: ""
      }, _attrs), {
        heading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="font-display text-2xl font-medium"${_scopeId}>Upload photo</div>`);
          } else {
            return [
              createVNode("div", { class: "font-display text-2xl font-medium" }, "Upload photo")
            ];
          }
        }),
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                variant: "secondary",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`EDIT`);
                  } else {
                    return [
                      createTextVNode("EDIT")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_sfc_main$4$1, {
                  variant: "secondary",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode("EDIT")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><div class="${ssrRenderClass(
              ("cn" in _ctx ? _ctx.cn : unref(cn))(
                "w-full max-w-[410px] mx-auto aspect-[1.42] border border-dashed rounded-lg relative",
                unref(isOverDropZone) ? "border-primary" : " border-input"
              )
            )}"${_scopeId}>`);
            if (unref(upload_preview)) {
              _push2(`<img${ssrRenderAttr("src", unref(upload_preview))} alt="profile-picture" class="w-full h-full object-contain rounded-[inherit]"${_scopeId}>`);
            } else {
              _push2(`<div class="space-y-4 w-full h-full grid place-items-center text-center relative"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Upload), { class: "size-8 text-muted-foreground" }, null, _parent2, _scopeId));
              _push2(`<div class="space-y-2"${_scopeId}><div class="text-2xl font-medium font-display"${_scopeId}>${ssrInterpolate(unref(isOverDropZone) ? "Drop picture" : " Drag and drop picture")}</div><div class="text-muted-foreground text-sm"${_scopeId}> JPEG, or PNG file with the max size of 3MB </div></div></div>`);
            }
            _push2(`</div>`);
            if (unref(upload_preview)) {
              _push2(`<div class="grid grid-cols-2 gap-4 mt-6 items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                variant: "secondary",
                size: "lg",
                class: "w-full relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<label for="upload" class="absolute inset-0 cursor-pointer"${_scopeId2}><div class="place-center"${_scopeId2}>CHANGE PHOTO</div></label>`);
                  } else {
                    return [
                      createVNode("label", {
                        for: "upload",
                        class: "absolute inset-0 cursor-pointer"
                      }, [
                        createVNode("div", { class: "place-center" }, "CHANGE PHOTO")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                size: "lg",
                onClick: completeUpload,
                loading: unref(uploading)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` SAVE `);
                  } else {
                    return [
                      createTextVNode(" SAVE ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(ssrRenderComponent(_sfc_main$4$1, {
                variant: "secondary",
                size: "lg",
                class: "mt-6 w-full relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<label for="upload" class="absolute inset-0 cursor-pointer"${_scopeId2}><div class="place-center"${_scopeId2}>CLICK TO UPLOAD FILE</div></label>`);
                  } else {
                    return [
                      createVNode("label", {
                        for: "upload",
                        class: "absolute inset-0 cursor-pointer"
                      }, [
                        createVNode("div", { class: "place-center" }, "CLICK TO UPLOAD FILE")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`<input type="file" id="upload" class="hidden" accept=".jpeg, .jpg, .png"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("div", {
                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                    "w-full max-w-[410px] mx-auto aspect-[1.42] border border-dashed rounded-lg relative",
                    unref(isOverDropZone) ? "border-primary" : " border-input"
                  ),
                  ref_key: "dropZoneRef",
                  ref: dropZoneRef
                }, [
                  unref(upload_preview) ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: unref(upload_preview),
                    alt: "profile-picture",
                    class: "w-full h-full object-contain rounded-[inherit]"
                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "space-y-4 w-full h-full grid place-items-center text-center relative"
                  }, [
                    createVNode(unref(Upload), { class: "size-8 text-muted-foreground" }),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("div", { class: "text-2xl font-medium font-display" }, toDisplayString(unref(isOverDropZone) ? "Drop picture" : " Drag and drop picture"), 1),
                      createVNode("div", { class: "text-muted-foreground text-sm" }, " JPEG, or PNG file with the max size of 3MB ")
                    ])
                  ]))
                ], 2),
                unref(upload_preview) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-2 gap-4 mt-6 items-center"
                }, [
                  createVNode(_sfc_main$4$1, {
                    variant: "secondary",
                    size: "lg",
                    class: "w-full relative"
                  }, {
                    default: withCtx(() => [
                      createVNode("label", {
                        for: "upload",
                        class: "absolute inset-0 cursor-pointer"
                      }, [
                        createVNode("div", { class: "place-center" }, "CHANGE PHOTO")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$4$1, {
                    size: "lg",
                    onClick: completeUpload,
                    loading: unref(uploading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" SAVE ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : (openBlock(), createBlock(_sfc_main$4$1, {
                  key: 1,
                  variant: "secondary",
                  size: "lg",
                  class: "mt-6 w-full relative"
                }, {
                  default: withCtx(() => [
                    createVNode("label", {
                      for: "upload",
                      class: "absolute inset-0 cursor-pointer"
                    }, [
                      createVNode("div", { class: "place-center" }, "CLICK TO UPLOAD FILE")
                    ])
                  ]),
                  _: 1
                })),
                createVNode("input", {
                  type: "file",
                  id: "upload",
                  class: "hidden",
                  accept: ".jpeg, .jpg, .png",
                  onChange: handleFileChange
                }, null, 32)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modals/upload-photo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "qr-card",
  __ssrInlineRender: true,
  props: {
    id: {},
    name: {},
    link: {},
    qr: {}
  },
  setup(__props) {
    const props = __props;
    const copied = ref(false);
    const { status, data } = useCustomFetch(
      `/qrcode/${props.id}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UiButton = _sfc_main$4$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white/5 rounded-3xl border p-6"><div class="text-2xl font-semibold">${ssrInterpolate(_ctx.name)}</div><div class="size-[192px] mx-auto my-6 grid place-items-center">`);
      if (unref(status) === "pending") {
        _push(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin" }, null, _parent));
      } else if ((_a = unref(data)) == null ? undefined : _a.data) {
        _push(`<img${ssrRenderAttr("src", (_b = unref(data)) == null ? undefined : _b.data)} alt="QR-CODE" class="w-full h-full object-cover">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border rounded-full bg-white/5 relative px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-white/10"><div class="place-center">`);
      if (unref(copied)) {
        _push(`<div class="${ssrRenderClass(
          ("cn" in _ctx ? _ctx.cn : unref(cn))(
            "bg-background border py-2 px-4 rounded-3xl text-sm text-center text-foreground",
            unref(copied) ? "animate-in slide-in-from-bottom-2" : "animate-out slide-out-to-top-2"
          )
        )}"> Copied </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="overflow-hidden text-ellipsis line-clamp-1">${ssrInterpolate(_ctx.link)}</div>`);
      if (unref(copied)) {
        _push(ssrRenderComponent(unref(CopyCheck), { class: "size-4" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Copy), { class: "size-4" }, null, _parent));
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        size: "lg",
        class: "w-full mt-6 relative",
        disabled: !((_c = unref(data)) == null ? undefined : _c.data)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<a${ssrRenderAttr("download", `${_ctx.name}-spin-request-QR`)}${ssrRenderAttr("href", (_a2 = unref(data)) == null ? undefined : _a2.data)} class="inset-0 absolute grid place-items-center"${_scopeId}> DOWNLOAD QR CODE </a>`);
          } else {
            return [
              createVNode("a", {
                download: `${_ctx.name}-spin-request-QR`,
                href: (_b2 = unref(data)) == null ? undefined : _b2.data,
                class: "inset-0 absolute grid place-items-center"
              }, " DOWNLOAD QR CODE ", 8, ["download", "href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/qr-card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "profile-card",
  __ssrInlineRender: true,
  props: {
    username: {}
  },
  setup(__props) {
    const title = ref("Here is my spinRequest profile");
    const props = __props;
    const {
      public: { APP_BASE_URL }
    } = useRuntimeConfig();
    const profileLink = computed(
      () => `${APP_BASE_URL}/following/${props.username}`
    );
    const {
      copyLink,
      copied,
      externalNavigate,
      twitterShareLink,
      whatsappShareLink
    } = useSocialShare(profileLink, title);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$6;
      const _component_UiButton = _sfc_main$4$1;
      const _component_UiPopover = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white/5 rounded-3xl border p-6" }, _attrs))}><div class="flex items-center justify-between"><div class="text-2xl font-semibold">Share profile</div>`);
      _push(ssrRenderComponent(_component_SvgIcon, { name: "spin-logo" }, null, _parent));
      _push(`</div><div class="flex justify-between gap-x-2 mt-16 items-center relative">`);
      if (unref(copied)) {
        _push(`<div class="place-center z-10"><div class="px-4 py-2 bg-background rounded-full z-10 animate-in slide-in-from-bottom-1 relative"> Copied </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border rounded-full bg-white/5 relative px-4 py-2"><div class="overflow-hidden text-ellipsis line-clamp-1">${ssrInterpolate(unref(profileLink))}</div></div><div class="flex gap-x-2 items-center">`);
      _push(ssrRenderComponent(_component_UiButton, {
        size: "icon",
        variant: "outline",
        onClick: unref(copyLink)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Copy), { class: "size-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Copy), { class: "size-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiPopover, null, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-x-2 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              size: "icon",
              variant: "secondary",
              class: "!size-[40px]",
              onClick: ($event) => unref(externalNavigate)(unref(twitterShareLink))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SvgIcon, { name: "x" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SvgIcon, { name: "x" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiButton, {
              size: "icon",
              variant: "secondary",
              class: "!size-[40px]",
              onClick: ($event) => unref(externalNavigate)(unref(whatsappShareLink))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SvgIcon, {
                    name: "whatsapp",
                    class: "scale-[0.7]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SvgIcon, {
                      name: "whatsapp",
                      class: "scale-[0.7]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-x-2 items-center" }, [
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "secondary",
                  class: "!size-[40px]",
                  onClick: ($event) => unref(externalNavigate)(unref(twitterShareLink))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SvgIcon, { name: "x" })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UiButton, {
                  size: "icon",
                  variant: "secondary",
                  class: "!size-[40px]",
                  onClick: ($event) => unref(externalNavigate)(unref(whatsappShareLink))
                }, {
                  default: withCtx(() => [
                    createVNode(_component_SvgIcon, {
                      name: "whatsapp",
                      class: "scale-[0.7]"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              size: "icon",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Share2), { class: "size-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Share2), { class: "size-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                size: "icon",
                variant: "outline"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Share2), { class: "size-4" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/profile-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    var _a, _b;
    const {
      $config: {
        public: { APP_BASE_URL }
      },
      $repo: { auth, bank: bankModule }
    } = useNuxtApp();
    const { auth_user, auth_token, saveAuthUser } = useAuth();
    const isHost = computed(() => {
      var _a22;
      return ((_a22 = auth_user.value) == null ? undefined : _a22.role) === "host";
    });
    const { data, status, error, refresh } = useCustomFetch(
      isHost.value ? "/user?stat=true" : "/user?stat=true"
    );
    const { data: bank, status: bank_status } = useCustomFetch("/bankaccount/list");
    const NigerianBankList = computed(() => {
      var _a3;
      var _a22;
      return (_a3 = (_a22 = bank == null ? undefined : bank.value) == null ? undefined : _a22.data) != null ? _a3 : [];
    });
    const selectedBank = computed(
      () => NigerianBankList.value.find(
        (item) => item.name === profile.value.bank_account.bank_name
      )
    );
    const bankNames = computed(
      () => NigerianBankList.value.map((item) => item.name)
    );
    const name = computed(
      () => {
        var _a3;
        var _a22, _b2, _c, _d;
        return (_a3 = (_b2 = (_a22 = data.value) == null ? undefined : _a22.data) == null ? undefined : _b2.stage_name) != null ? _a3 : (_d = (_c = data.value) == null ? undefined : _c.data) == null ? undefined : _d.email;
      }
    );
    const initials = computed(() => {
      var _a3;
      return getInitials((_a3 = name.value) != null ? _a3 : "");
    });
    const profile_picture = ref((_a2 = (_b = (_a = data.value) == null ? undefined : _a.data) == null ? undefined : _b.profile_picture) != null ? _a2 : "");
    const hostName = computed(() => {
      var _a3;
      var _a22, _b2;
      return (_a3 = (_b2 = (_a22 = data.value) == null ? undefined : _a22.data) == null ? undefined : _b2.stage_name) != null ? _a3 : "";
    });
    const hostLink = computed(
      () => {
        var _a3;
        var _a22, _b2;
        return `${APP_BASE_URL}/${(_a3 = (_b2 = (_a22 = data.value) == null ? undefined : _a22.data) == null ? undefined : _b2.slug) != null ? _a3 : ""}`;
      }
    );
    const profile = useState("HOST-PROFILE", () => {
      var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2;
      var _a22, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
      return {
        user: {
          stage_name: (_a3 = (_b2 = (_a22 = data.value) == null ? undefined : _a22.data) == null ? undefined : _b2.stage_name) != null ? _a3 : "",
          name: (_b3 = (_d = (_c = data.value) == null ? undefined : _c.data) == null ? undefined : _d.name) != null ? _b3 : "",
          bio: (_c2 = (_f = (_e = data.value) == null ? undefined : _e.data) == null ? undefined : _f.bio) != null ? _c2 : "",
          dob: (_d2 = (_h = (_g = data.value) == null ? undefined : _g.data) == null ? undefined : _h.dob) != null ? _d2 : null,
          gender: (_e2 = (_j = (_i = data.value) == null ? undefined : _i.data) == null ? undefined : _j.gender) != null ? _e2 : null,
          country: (_f2 = (_l = (_k = data.value) == null ? undefined : _k.data) == null ? undefined : _l.country) != null ? _f2 : "",
          profession: (_g2 = (_n = (_m = data.value) == null ? undefined : _m.data) == null ? undefined : _n.profession) != null ? _g2 : null
        },
        bank_account: {
          bank_name: (_h2 = (_q = (_p = (_o = data.value) == null ? undefined : _o.data) == null ? undefined : _p.bank_account) == null ? undefined : _q.bank_name) != null ? _h2 : "",
          account_name: (_i2 = (_t = (_s = (_r = data.value) == null ? undefined : _r.data) == null ? undefined : _s.bank_account) == null ? undefined : _t.account_name) != null ? _i2 : "",
          account_number: (_j2 = (_w = (_v = (_u = data == null ? undefined : data.value) == null ? undefined : _u.data) == null ? undefined : _v.bank_account) == null ? undefined : _w.account_number) != null ? _j2 : "",
          code: (_k2 = (_z = (_y = (_x = data.value) == null ? undefined : _x.data) == null ? undefined : _y.bank_account) == null ? undefined : _z.code) != null ? _k2 : "",
          country: (_l2 = (_C = (_B = (_A = data == null ? undefined : data.value) == null ? undefined : _A.data) == null ? undefined : _B.bank_account) == null ? undefined : _C.country) != null ? _l2 : ""
        }
      };
    });
    const audience_profile = useState(
      "AUDEINCE-PROFILE",
      () => {
        var _a3, _b3, _c2, _d2;
        var _a22, _b2, _c, _d, _e, _f, _g, _h;
        return {
          user: {
            user_name: (_a3 = (_b2 = (_a22 = data.value) == null ? undefined : _a22.data) == null ? undefined : _b2.user_name) != null ? _a3 : "",
            dob: (_b3 = (_d = (_c = data.value) == null ? undefined : _c.data) == null ? undefined : _d.dob) != null ? _b3 : null,
            gender: (_c2 = (_f = (_e = data.value) == null ? undefined : _e.data) == null ? undefined : _f.gender) != null ? _c2 : "",
            country: (_d2 = (_h = (_g = data.value) == null ? undefined : _g.data) == null ? undefined : _h.country) != null ? _d2 : ""
          }
        };
      }
    );
    watchEffect(() => {
      var _a3, _b3, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      var _a22, _b2, _c, _d, _e;
      const user = (_a22 = data.value) == null ? undefined : _a22.data;
      if (user) {
        if (auth_user.value && auth_token.value) {
          const updated_user = {
            ...auth_user.value,
            bio: user.bio,
            country: user.country,
            dob: user.dob,
            gender: user.gender,
            profession: user.profession,
            stage_name: user.stage_name,
            user_name: user.user_name,
            profile_picture: user.profile_picture
          };
          saveAuthUser(auth_token.value, updated_user);
        }
        profile_picture.value = (_a3 = user == null ? undefined : user.profile_picture) != null ? _a3 : "";
        profile.value.user.bio = (_b3 = user == null ? undefined : user.bio) != null ? _b3 : "";
        profile.value.user.country = (_c2 = user.country) != null ? _c2 : "";
        audience_profile.value.user.country = (_d2 = user.country) != null ? _d2 : "";
        profile.value.user.dob = (_e2 = user.dob) != null ? _e2 : null;
        audience_profile.value.user.dob = (_f = user.dob) != null ? _f : null;
        profile.value.user.gender = (_g = user.gender) != null ? _g : null;
        audience_profile.value.user.gender = (_h = user.gender) != null ? _h : null;
        audience_profile.value.user.user_name = (_i = user.user_name) != null ? _i : "";
        profile.value.user.name = (_j = user.name) != null ? _j : "";
        profile.value.user.stage_name = (_k = user.stage_name) != null ? _k : "";
        profile.value.user.profession = (_l = user.profession) != null ? _l : null;
        profile.value.bank_account.account_name = (_m = (_b2 = user.bank_account) == null ? undefined : _b2.account_name) != null ? _m : "";
        profile.value.bank_account.account_number = (_n = (_c = user.bank_account) == null ? undefined : _c.account_number) != null ? _n : "";
        profile.value.bank_account.bank_name = (_o = (_d = user.bank_account) == null ? undefined : _d.bank_name) != null ? _o : "";
        profile.value.bank_account.country = (_p = (_e = user.bank_account) == null ? undefined : _e.country) != null ? _p : "Nigeria";
      }
    });
    const verifying = ref(false);
    const verifyAccount = async (payload) => {
      var _a3, _b3;
      var _a22, _b2;
      try {
        profile.value.bank_account.account_name = "";
        verifying.value = true;
        const response = await bankModule.verifyBankAccount(payload);
        verifying.value = false;
        const account_name = (_a22 = response == null ? void 0 : response.data) == null ? void 0 : _a22.account_name;
        if (account_name) {
          profile.value.bank_account.account_name = account_name;
        } else
          showToast({
            title: (_a3 = response.message) != null ? _a3 : "Invalid account",
            variant: "warning"
          });
      } catch (e) {
        verifying.value = false;
        const error2 = e;
        showToast({
          title: (_b3 = (_b2 = error2.data) == null ? undefined : _b2.message) != null ? _b3 : "Invalid account",
          variant: "warning"
        });
        console.error("FAILED TO VERIFY ACCOUNT", payload);
        profile.value.bank_account.account_name = "";
      }
    };
    watchEffect(() => {
      var _a3, _b3;
      var _a22, _b2, _c, _d, _e;
      const payload = {
        bank_name: (_a3 = (_a22 = selectedBank.value) == null ? undefined : _a22.name) != null ? _a3 : "",
        account_number: profile.value.bank_account.account_number,
        code: (_b3 = (_b2 = selectedBank.value) == null ? undefined : _b2.code) != null ? _b3 : "",
        country: "Nigeria"
      };
      if (payload.bank_name && payload.code && ((_c = payload == null ? undefined : payload.account_number) == null ? undefined : _c.length) > 9 && ((_e = (_d = data.value) == null ? undefined : _d.data) == null ? undefined : _e.role) === "host") {
        verifyAccount(payload);
      }
    });
    const updating = ref(false);
    const customVerification = async () => {
      var _a3;
      var _a22;
      const valid_bio = await BioSchema.isValid(profile.value.user.bio);
      if (!valid_bio) {
        showToast({
          title: "Limit bio to just 350 characters",
          variant: "warning"
        });
        return false;
      }
      profile.value.bank_account.code = (_a3 = (_a22 = selectedBank.value) == null ? undefined : _a22.code) != null ? _a3 : "";
      const fields = [
        {
          field: "bank_name",
          message: "Select your bank name to continue"
        },
        {
          field: "account_number",
          message: "Enter your account_number to continue"
        },
        {
          field: "account_name",
          message: "Enter your account name to continue"
        }
      ];
      for (const item of fields) {
        if (!profile.value.bank_account[item.field]) {
          showToast({ title: item.message, variant: "warning" });
          return false;
        }
      }
      return true;
    };
    const updateProfile = async () => {
      var _a3;
      var _a22;
      try {
        if (!isHost.value) {
          const valid = await UsernameSchema.isValid(
            audience_profile.value.user.user_name
          );
          if (!valid) {
            showToast({ title: "Username not valid", variant: "warning" });
            return;
          }
        }
        const verified = isHost.value ? await customVerification() : true;
        if (!verified) return;
        updating.value = true;
        const response = await auth.updateProfile(
          isHost.value ? profile.value : audience_profile.value
        );
        updating.value = false;
        if (response.data) {
          showToast({
            title: "Updated",
            description: response.message
          });
          refresh();
        }
      } catch (e) {
        updating.value = false;
        const error2 = e;
        showToast({
          title: "Failed",
          description: (_a3 = (_a22 = error2.data) == null ? undefined : _a22.message) != null ? _a3 : "Failed to update profile",
          variant: "warning"
        });
      }
    };
    useSeoMeta({
      title: "My Profile"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBackButton = _sfc_main$9;
      const _component_SharedLoadingArea = _sfc_main$a;
      const _component_UiButton = _sfc_main$4$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiInputField = _sfc_main$1$1;
      const _component_UiSelectField = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pb-20" }, _attrs))}><div class="flex gap-x-2 items-center fixed top-24 z-10">`);
      _push(ssrRenderComponent(_component_SharedBackButton, {
        to: unref(isHost) ? "/dashboard" : "/audience"
      }, null, _parent));
      _push(`<div class="text-2xl font-medium font-display">My Profile</div></div>`);
      _push(ssrRenderComponent(_component_SharedLoadingArea, {
        loading: unref(status) === "pending",
        error: unref(error)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
          var _a22, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(
              ("cn" in _ctx ? _ctx.cn : unref(cn))(
                "grid gap-6 mt-20",
                unref(isHost) ? "md:grid-cols-[1fr_348px]" : "md:grid-cols-[1fr_348px] lg:grid-cols-[1fr_348px]"
              )
            )}"${_scopeId}><div class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))("space-y-4"))}"${_scopeId}><div class="border bg-white/5 p-6 rounded-2xl flex items-center gap-8 flex-wrap lg:flex-nowrap"${_scopeId}><div class="size-[100px] sm:size-[120px] lg:size-[140px] relative shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              image: unref(profile_picture),
              initials: unref(initials),
              class: "!rounded-xl !w-full !h-full !text-3xl"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              onUploaded: ($event) => profile_picture.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "secondary",
                    size: "icon",
                    class: "absolute -bottom-1 -right-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Edit2), { class: "size-3" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Edit2), { class: "size-3" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "secondary",
                      size: "icon",
                      class: "absolute -bottom-1 -right-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Edit2), { class: "size-3" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-5"${_scopeId}><div class="space-y-1"${_scopeId}><div class="text-xl font-semibold"${_scopeId}>${ssrInterpolate((_a3 = (_b2 = (_a22 = unref(data)) == null ? undefined : _a22.data) == null ? undefined : _b2.user_name) != null ? _a3 : (_d = (_c = unref(data)) == null ? undefined : _c.data) == null ? undefined : _d.email)}</div><div class="text-foreground/80"${_scopeId}>${ssrInterpolate(((_f = (_e = unref(data)) == null ? undefined : _e.data) == null ? undefined : _f.user_name) ? (_h = (_g = unref(data)) == null ? undefined : _g.data) == null ? undefined : _h.email : "Add a username")}</div></div><div class="flex items-center gap-x-6 flex-wrap gap-y-4 text-muted-foreground text-sm sm:text-base"${_scopeId}><div${_scopeId}><b${_scopeId}>${ssrInterpolate(unref(isHost) ? (_b3 = (_k = (_j = (_i = unref(data)) == null ? undefined : _i.data) == null ? undefined : _j.stats) == null ? undefined : _k.followers) != null ? _b3 : "0" : (_c2 = (_m = (_l = unref(data)) == null ? undefined : _l.data) == null ? undefined : _m.followers) != null ? _c2 : "0")}</b> FOLLOWERS </div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "text-primary flex items-center gap-x-1",
              to: "/following"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b4, _c3, _d3;
                var _a32, _b32, _c22, _d22, _e22, _f22, _g22, _h22, _i22, _j22;
                if (_push3) {
                  _push3(`<b${_scopeId2}>${ssrInterpolate(unref(isHost) ? (_a4 = (_c22 = (_b32 = (_a32 = unref(data)) == null ? undefined : _a32.data) == null ? undefined : _b32.stats) == null ? undefined : _c22.following) != null ? _a4 : "0" : (_b4 = (_e22 = (_d22 = unref(data)) == null ? undefined : _d22.data) == null ? undefined : _e22.following) != null ? _b4 : "0")}</b><span${_scopeId2}>FOLLOWING</span> `);
                  _push3(ssrRenderComponent(unref(ChevronRight), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("b", null, toDisplayString(unref(isHost) ? (_c3 = (_h22 = (_g22 = (_f22 = unref(data)) == null ? undefined : _f22.data) == null ? undefined : _g22.stats) == null ? undefined : _h22.following) != null ? _c3 : "0" : (_d3 = (_j22 = (_i22 = unref(data)) == null ? undefined : _i22.data) == null ? undefined : _j22.following) != null ? _d3 : "0"), 1),
                    createVNode("span", null, "FOLLOWING"),
                    createTextVNode(),
                    createVNode(unref(ChevronRight))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, { name: "genres" }, null, _parent2, _scopeId));
            _push2(`<b${_scopeId}>${ssrInterpolate(unref(isHost) ? (_p = (_o = (_n = unref(data)) == null ? undefined : _n.data) == null ? undefined : _o.stats) == null ? undefined : _p.requests : (_d2 = (_r = (_q = unref(data)) == null ? undefined : _q.data) == null ? undefined : _r.total_requests) != null ? _d2 : "0")}</b> REQUESTS </div>`);
            if (unref(isHost)) {
              _push2(`<div class="flex items-center gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { name: "celebration" }, null, _parent2, _scopeId));
              _push2(`<b${_scopeId}>${ssrInterpolate((_e2 = (_u = (_t = (_s = unref(data)) == null ? undefined : _s.data) == null ? undefined : _t.stats) == null ? undefined : _u.events) != null ? _e2 : "")}</b> EVENTS </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
            {
              _push2(`<!---->`);
            }
            if (!unref(isHost)) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/order-history",
                class: "block"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$7, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$7)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(isHost) && false) ;
            else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"${_scopeId}><div class="font-semibold"${_scopeId}>Bio Data</div><div class="space-y-4"${_scopeId}><div class="grid grid-cols-[repeat(auto-fit,_minmax(266px,_1fr))] gap-4"${_scopeId}>`);
            if (unref(isHost)) {
              _push2(ssrRenderComponent(_component_UiInputField, {
                type: "date",
                label: "Date of birth",
                modelValue: unref(profile).user.dob,
                "onUpdate:modelValue": ($event) => unref(profile).user.dob = $event
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UiInputField, {
                type: "date",
                label: "Date of birth",
                modelValue: unref(audience_profile).user.dob,
                "onUpdate:modelValue": ($event) => unref(audience_profile).user.dob = $event
              }, null, _parent2, _scopeId));
            }
            if (unref(isHost)) {
              _push2(ssrRenderComponent(_component_UiSelectField, {
                options: ["male", "female"],
                placeholder: "Select your gender",
                label: "Gender",
                modelValue: unref(profile).user.gender,
                "onUpdate:modelValue": ($event) => unref(profile).user.gender = $event
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UiSelectField, {
                options: ["male", "female"],
                placeholder: "Select your gender",
                label: "Gender",
                modelValue: unref(audience_profile).user.gender,
                "onUpdate:modelValue": ($event) => unref(audience_profile).user.gender = $event
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
            if (unref(isHost)) {
              _push2(ssrRenderComponent(_component_UiSelectField, {
                options: ["Nigeria"],
                placeholder: "Select your country of residence",
                label: "Country",
                modelValue: unref(profile).user.country,
                "onUpdate:modelValue": ($event) => unref(profile).user.country = $event
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UiSelectField, {
                options: ["Nigeria"],
                placeholder: "Select your country of residence",
                label: "Country",
                modelValue: unref(audience_profile).user.country,
                "onUpdate:modelValue": ($event) => unref(audience_profile).user.country = $event
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div><div class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6"${_scopeId}><div class="font-semibold"${_scopeId}>Password</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(isHost)) {
              _push2(`<div class="border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"${_scopeId}><div class="space-y-2"${_scopeId}><div class="font-semibold"${_scopeId}>Bank Account</div><div class="text-muted-foreground"${_scopeId}> This is where we will transfer your withdrawals to, make sure its a valid account </div></div><div class="space-y-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiSelectField, {
                placeholder: "Select your bank",
                label: "Bank",
                options: unref(bankNames),
                modelValue: unref(profile).bank_account.bank_name,
                "onUpdate:modelValue": ($event) => unref(profile).bank_account.bank_name = $event,
                loading: unref(bank_status) === "pending"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiInputField, {
                placeholder: "Enter your bank account",
                label: "Account Number",
                modelValue: unref(profile).bank_account.account_number,
                "onUpdate:modelValue": ($event) => unref(profile).bank_account.account_number = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiInputField, {
                label: "Account Name",
                disabled: "",
                modelValue: unref(profile).bank_account.account_name,
                "onUpdate:modelValue": ($event) => unref(profile).bank_account.account_name = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(verifying)) {
                      _push3(`<div class="absolute right-3 top-1/2 -translate-y-1/2"${_scopeId2}><div class="flex gap-x-1 items-center text-sm text-muted-foreground"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin" }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>Verifying..</div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(verifying) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute right-3 top-1/2 -translate-y-1/2"
                      }, [
                        createVNode("div", { class: "flex gap-x-1 items-center text-sm text-muted-foreground" }, [
                          createVNode(unref(Loader), { class: "size-4 animate-spin" }),
                          createVNode("div", null, "Verifying..")
                        ])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              size: "lg",
              onClick: updateProfile,
              loading: unref(updating)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save Changes `);
                } else {
                  return [
                    createTextVNode(" Save Changes ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(isHost)) {
              _push2(`<div${_scopeId}>`);
              if (unref(status) === "pending") {
                _push2(`<div class="w-full aspect-square rounded-3xl grid place-items-center border bg-white/5"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(Loader), { class: "size-5 animate-spin" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else if ((_w = (_v = unref(data)) == null ? undefined : _v.data) == null ? undefined : _w.id) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: unref(hostName),
                  link: unref(hostLink),
                  id: (_y = (_x = unref(data)) == null ? undefined : _x.data) == null ? undefined : _y.id
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else if ((_A = (_z = unref(data)) == null ? undefined : _z.data) == null ? undefined : _A.user_name) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                username: (_C = (_B = unref(data)) == null ? undefined : _B.data) == null ? undefined : _C.user_name
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                  "grid gap-6 mt-20",
                  unref(isHost) ? "md:grid-cols-[1fr_348px]" : "md:grid-cols-[1fr_348px] lg:grid-cols-[1fr_348px]"
                )
              }, [
                createVNode("div", {
                  class: ("cn" in _ctx ? _ctx.cn : unref(cn))("space-y-4")
                }, [
                  createVNode("div", { class: "border bg-white/5 p-6 rounded-2xl flex items-center gap-8 flex-wrap lg:flex-nowrap" }, [
                    createVNode("div", { class: "size-[100px] sm:size-[120px] lg:size-[140px] relative shrink-0" }, [
                      createVNode(_sfc_main$5, {
                        image: unref(profile_picture),
                        initials: unref(initials),
                        class: "!rounded-xl !w-full !h-full !text-3xl"
                      }, null, 8, ["image", "initials"]),
                      createVNode(_sfc_main$3, {
                        onUploaded: ($event) => profile_picture.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiButton, {
                            variant: "secondary",
                            size: "icon",
                            class: "absolute -bottom-1 -right-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Edit2), { class: "size-3" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onUploaded"])
                    ]),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("div", { class: "text-xl font-semibold" }, toDisplayString((_f2 = (_E = (_D = unref(data)) == null ? undefined : _D.data) == null ? undefined : _E.user_name) != null ? _f2 : (_G = (_F = unref(data)) == null ? undefined : _F.data) == null ? undefined : _G.email), 1),
                        createVNode("div", { class: "text-foreground/80" }, toDisplayString(((_I = (_H = unref(data)) == null ? undefined : _H.data) == null ? undefined : _I.user_name) ? (_K = (_J = unref(data)) == null ? undefined : _J.data) == null ? undefined : _K.email : "Add a username"), 1)
                      ]),
                      createVNode("div", { class: "flex items-center gap-x-6 flex-wrap gap-y-4 text-muted-foreground text-sm sm:text-base" }, [
                        createVNode("div", null, [
                          createVNode("b", null, toDisplayString(unref(isHost) ? (_g2 = (_N = (_M = (_L = unref(data)) == null ? undefined : _L.data) == null ? undefined : _M.stats) == null ? undefined : _N.followers) != null ? _g2 : "0" : (_h2 = (_P = (_O = unref(data)) == null ? undefined : _O.data) == null ? undefined : _P.followers) != null ? _h2 : "0"), 1),
                          createTextVNode(" FOLLOWERS ")
                        ]),
                        createVNode(_component_NuxtLink, {
                          class: "text-primary flex items-center gap-x-1",
                          to: "/following"
                        }, {
                          default: withCtx(() => {
                            var _a4, _b4;
                            var _a32, _b32, _c22, _d22, _e22;
                            return [
                              createVNode("b", null, toDisplayString(unref(isHost) ? (_a4 = (_c22 = (_b32 = (_a32 = unref(data)) == null ? undefined : _a32.data) == null ? undefined : _b32.stats) == null ? undefined : _c22.following) != null ? _a4 : "0" : (_b4 = (_e22 = (_d22 = unref(data)) == null ? undefined : _d22.data) == null ? undefined : _e22.following) != null ? _b4 : "0"), 1),
                              createVNode("span", null, "FOLLOWING"),
                              createTextVNode(),
                              createVNode(unref(ChevronRight))
                            ];
                          }),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center gap-x-2" }, [
                          createVNode(_sfc_main$6, { name: "genres" }),
                          createVNode("b", null, toDisplayString(unref(isHost) ? (_S = (_R = (_Q = unref(data)) == null ? undefined : _Q.data) == null ? undefined : _R.stats) == null ? undefined : _S.requests : (_i2 = (_U = (_T = unref(data)) == null ? undefined : _T.data) == null ? undefined : _U.total_requests) != null ? _i2 : "0"), 1),
                          createTextVNode(" REQUESTS ")
                        ]),
                        unref(isHost) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-x-2"
                        }, [
                          createVNode(_sfc_main$6, { name: "celebration" }),
                          createVNode("b", null, toDisplayString((_j2 = (_X = (_W = (_V = unref(data)) == null ? undefined : _V.data) == null ? undefined : _W.stats) == null ? undefined : _X.events) != null ? _j2 : ""), 1),
                          createTextVNode(" EVENTS ")
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createCommentVNode("", true),
                  !unref(isHost) ? (openBlock(), createBlock(_component_NuxtLink, {
                    key: 1,
                    to: "/order-history",
                    class: "block"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$7)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(isHost) && false ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
                  }, [
                    createVNode("div", { class: "font-semibold" }, "Stats"),
                    createVNode("div", { class: "flex flex-wrap gap-4 items-center" }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_sfc_main$6, { name: "account_circle" }),
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode("span", { class: "font-semibold" }, toDisplayString((_k2 = (__ = (_Z = (_Y = unref(data)) == null ? undefined : _Y.data) == null ? undefined : _Z.stats) == null ? undefined : __.followers) != null ? _k2 : 0), 1),
                          createVNode("span", { class: "text-muted-foreground" }, "FOLLOWERS")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_sfc_main$6, { name: "celebration" }),
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode("span", { class: "font-semibold" }, toDisplayString((_l2 = (_ba = (_aa = (_$ = unref(data)) == null ? undefined : _$.data) == null ? undefined : _aa.stats) == null ? undefined : _ba.events) != null ? _l2 : 0), 1),
                          createVNode("span", { class: "text-muted-foreground" }, "EVENTS")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_sfc_main$6, { name: "genres" }),
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode("span", { class: "font-semibold" }, toDisplayString((_m2 = (_ea = (_da = (_ca = unref(data)) == null ? undefined : _ca.data) == null ? undefined : _da.stats) == null ? undefined : _ea.requests) != null ? _m2 : 0), 1),
                          createVNode("span", { class: "text-muted-foreground" }, "REQUESTS")
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_sfc_main$6, { name: "genres" }),
                        createVNode("div", { class: "flex items-center gap-1" }, [
                          createVNode("span", { class: "font-semibold" }, toDisplayString((_n2 = (_ha = (_ga = (_fa = unref(data)) == null ? undefined : _fa.data) == null ? undefined : _ga.stats) == null ? undefined : _ha.fulfilled) != null ? _n2 : 0), 1),
                          createVNode("span", { class: "text-muted-foreground" }, "FUFILLED")
                        ])
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4" }, [
                    createVNode("div", { class: "font-semibold" }, "Bio Data"),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "grid grid-cols-[repeat(auto-fit,_minmax(266px,_1fr))] gap-4" }, [
                        unref(isHost) ? (openBlock(), createBlock(_component_UiInputField, {
                          key: 0,
                          type: "date",
                          label: "Date of birth",
                          modelValue: unref(profile).user.dob,
                          "onUpdate:modelValue": ($event) => unref(profile).user.dob = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UiInputField, {
                          key: 1,
                          type: "date",
                          label: "Date of birth",
                          modelValue: unref(audience_profile).user.dob,
                          "onUpdate:modelValue": ($event) => unref(audience_profile).user.dob = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])),
                        unref(isHost) ? (openBlock(), createBlock(_component_UiSelectField, {
                          key: 2,
                          options: ["male", "female"],
                          placeholder: "Select your gender",
                          label: "Gender",
                          modelValue: unref(profile).user.gender,
                          "onUpdate:modelValue": ($event) => unref(profile).user.gender = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UiSelectField, {
                          key: 3,
                          options: ["male", "female"],
                          placeholder: "Select your gender",
                          label: "Gender",
                          modelValue: unref(audience_profile).user.gender,
                          "onUpdate:modelValue": ($event) => unref(audience_profile).user.gender = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                      ]),
                      unref(isHost) ? (openBlock(), createBlock(_component_UiSelectField, {
                        key: 0,
                        options: ["Nigeria"],
                        placeholder: "Select your country of residence",
                        label: "Country",
                        modelValue: unref(profile).user.country,
                        "onUpdate:modelValue": ($event) => unref(profile).user.country = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(_component_UiSelectField, {
                        key: 1,
                        options: ["Nigeria"],
                        placeholder: "Select your country of residence",
                        label: "Country",
                        modelValue: unref(audience_profile).user.country,
                        "onUpdate:modelValue": ($event) => unref(audience_profile).user.country = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ])
                  ]),
                  createVNode("div", { class: "border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-6" }, [
                    createVNode("div", { class: "font-semibold" }, "Password"),
                    createVNode(_sfc_main$4)
                  ]),
                  unref(isHost) ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "border bg-white/5 p-6 rounded-2xl grid lg:grid-cols-[150px_1fr_126px] xl:grid-cols-[200px_1fr_126px] gap-4"
                  }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("div", { class: "font-semibold" }, "Bank Account"),
                      createVNode("div", { class: "text-muted-foreground" }, " This is where we will transfer your withdrawals to, make sure its a valid account ")
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_UiSelectField, {
                        placeholder: "Select your bank",
                        label: "Bank",
                        options: unref(bankNames),
                        modelValue: unref(profile).bank_account.bank_name,
                        "onUpdate:modelValue": ($event) => unref(profile).bank_account.bank_name = $event,
                        loading: unref(bank_status) === "pending"
                      }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "loading"]),
                      createVNode(_component_UiInputField, {
                        placeholder: "Enter your bank account",
                        label: "Account Number",
                        modelValue: unref(profile).bank_account.account_number,
                        "onUpdate:modelValue": ($event) => unref(profile).bank_account.account_number = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_UiInputField, {
                        label: "Account Name",
                        disabled: "",
                        modelValue: unref(profile).bank_account.account_name,
                        "onUpdate:modelValue": ($event) => unref(profile).bank_account.account_name = $event
                      }, {
                        default: withCtx(() => [
                          unref(verifying) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute right-3 top-1/2 -translate-y-1/2"
                          }, [
                            createVNode("div", { class: "flex gap-x-1 items-center text-sm text-muted-foreground" }, [
                              createVNode(unref(Loader), { class: "size-4 animate-spin" }),
                              createVNode("div", null, "Verifying..")
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_UiButton, {
                      size: "lg",
                      onClick: updateProfile,
                      loading: unref(updating)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Save Changes ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ], 2),
                unref(isHost) ? (openBlock(), createBlock("div", { key: 0 }, [
                  unref(status) === "pending" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-full aspect-square rounded-3xl grid place-items-center border bg-white/5"
                  }, [
                    createVNode(unref(Loader), { class: "size-5 animate-spin" })
                  ])) : ((_ja = (_ia = unref(data)) == null ? undefined : _ia.data) == null ? undefined : _ja.id) ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    name: unref(hostName),
                    link: unref(hostLink),
                    id: (_la = (_ka = unref(data)) == null ? undefined : _ka.data) == null ? undefined : _la.id
                  }, null, 8, ["name", "link", "id"])) : createCommentVNode("", true)
                ])) : ((_na = (_ma = unref(data)) == null ? undefined : _ma.data) == null ? undefined : _na.user_name) ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$1, {
                    username: (_pa = (_oa = unref(data)) == null ? undefined : _oa.data) == null ? undefined : _pa.user_name
                  }, null, 8, ["username"])
                ])) : createCommentVNode("", true)
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-DzFXqyMt.mjs.map
