import * as Mo from 'vue';
import { hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, shallowRef, toRef, onServerPrefetch, isRef, computed, defineComponent, h, defineAsyncComponent, unref, provide, shallowReactive, Suspense, nextTick, Fragment, Transition, Comment, mergeProps, cloneVNode, openBlock, createBlock, withCtx, renderSlot, toRefs, onMounted, createVNode, createCommentVNode, withKeys, normalizeProps, guardReactiveProps, reactive, withDirectives, vShow, markRaw, withModifiers, createElementBlock, resolveDynamicComponent, renderList, Teleport, onBeforeUnmount, createTextVNode, useSlots, onBeforeMount, toDisplayString, normalizeStyle, toHandlers, useSSRContext, effectScope, customRef, readonly, toHandlerKey, camelize, onUnmounted, createElementVNode, vModelSelect, createApp, getCurrentScope, onScopeDispose, onBeforeUpdate, onUpdated, mergeDefaults, watchPostEffect, useId, onErrorCaptured, shallowReadonly, isReactive, toRaw, isReadonly, isShallow } from 'vue';
import vt$1 from 'node:http';
import Bs$1 from 'node:https';
import st from 'node:zlib';
import me, { PassThrough, pipeline } from 'node:stream';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promisify, deprecate, types } from 'node:util';
import { format } from 'node:url';
import { isIP } from 'node:net';
import { statSync, promises, createReadStream } from 'node:fs';
import { basename } from 'node:path';
import { j as baseURL, s as sanitizeStatusCode, k as getContext, l as createHooks, c as createError$1, t as toRouteMatcher, m as createRouter$1, n as getRequestHeader, o as setCookie, q as getCookie, r as deleteCookie } from '../nitro/nitro.mjs';
import { CapoPlugin, getActiveHead as getActiveHead$2 } from 'unhead';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { Loader, X as X$1 } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import 'consola/core';
import 'ipx';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var _a2, _b;
var t$1 = Object.defineProperty;
var o$1 = (e, l2) => t$1(e, "name", { value: l2, configurable: true });
var n$1 = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f$1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o$1(f$1, "getDefaultExportFromCjs");
var As = Object.defineProperty;
var n = (i, o2) => As(i, "name", { value: o2, configurable: true });
var fi = (i, o2, a3) => {
  if (!o2.has(i)) throw TypeError("Cannot " + a3);
};
var O$1 = (i, o2, a3) => (fi(i, o2, "read from private field"), a3 ? a3.call(i) : o2.get(i)), be$1 = (i, o2, a3) => {
  if (o2.has(i)) throw TypeError("Cannot add the same private member more than once");
  o2 instanceof WeakSet ? o2.add(i) : o2.set(i, a3);
}, X = (i, o2, a3, u) => (fi(i, o2, "write to private field"), o2.set(i, a3), a3);
var ve, kt$1, bt, Cr, Ve, Wt$1, qt, Ot$1, ee, zt$1, Ne, He, It$1;
function js(i) {
  if (!/^data:/i.test(i)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  i = i.replace(/\r?\n/g, "");
  const o2 = i.indexOf(",");
  if (o2 === -1 || o2 <= 4) throw new TypeError("malformed data: URI");
  const a3 = i.substring(5, o2).split(";");
  let u = "", l2 = false;
  const p2 = a3[0] || "text/plain";
  let h2 = p2;
  for (let E = 1; E < a3.length; E++) a3[E] === "base64" ? l2 = true : a3[E] && (h2 += `;${a3[E]}`, a3[E].indexOf("charset=") === 0 && (u = a3[E].substring(8)));
  !a3[0] && !u.length && (h2 += ";charset=US-ASCII", u = "US-ASCII");
  const g2 = l2 ? "base64" : "ascii", A2 = unescape(i.substring(o2 + 1)), w = Buffer.from(A2, g2);
  return w.type = p2, w.typeFull = h2, w.charset = u, w;
}
n(js, "dataUriToBuffer");
var pr = { exports: {} };
/**
* @license
* web-streams-polyfill v3.3.3
* Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
* This code is released under the MIT license.
* SPDX-License-Identifier: MIT
*/
var di;
function Ls() {
  return di || (di = 1, function(i, o2) {
    (function(a3, u) {
      u(o2);
    })(n$1, function(a3) {
      function u() {
      }
      n(u, "noop");
      function l2(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n(l2, "typeIsObject");
      const p2 = u;
      function h2(e, t2) {
        try {
          Object.defineProperty(e, "name", { value: t2, configurable: true });
        } catch {
        }
      }
      n(h2, "setFunctionName");
      const g2 = Promise, A2 = Promise.prototype.then, w = Promise.reject.bind(g2);
      function E(e) {
        return new g2(e);
      }
      n(E, "newPromise");
      function T(e) {
        return E((t2) => t2(e));
      }
      n(T, "promiseResolvedWith");
      function b(e) {
        return w(e);
      }
      n(b, "promiseRejectedWith");
      function q(e, t2, r) {
        return A2.call(e, t2, r);
      }
      n(q, "PerformPromiseThen");
      function _(e, t2, r) {
        q(q(e, t2, r), undefined, p2);
      }
      n(_, "uponPromise");
      function V(e, t2) {
        _(e, t2);
      }
      n(V, "uponFulfillment");
      function I(e, t2) {
        _(e, undefined, t2);
      }
      n(I, "uponRejection");
      function F(e, t2, r) {
        return q(e, t2, r);
      }
      n(F, "transformPromiseWith");
      function Q2(e) {
        q(e, undefined, p2);
      }
      n(Q2, "setPromiseIsHandledToTrue");
      let ge = n((e) => {
        if (typeof queueMicrotask == "function") ge = queueMicrotask;
        else {
          const t2 = T(undefined);
          ge = n((r) => q(t2, r), "_queueMicrotask");
        }
        return ge(e);
      }, "_queueMicrotask");
      function z(e, t2, r) {
        if (typeof e != "function") throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t2, r);
      }
      n(z, "reflectCall");
      function j(e, t2, r) {
        try {
          return T(z(e, t2, r));
        } catch (s2) {
          return b(s2);
        }
      }
      n(j, "promiseCall");
      const U = 16384, bn = class bn {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: undefined }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(t2) {
          const r = this._back;
          let s2 = r;
          r._elements.length === U - 1 && (s2 = { _elements: [], _next: undefined }), r._elements.push(t2), s2 !== r && (this._back = s2, r._next = s2), ++this._size;
        }
        shift() {
          const t2 = this._front;
          let r = t2;
          const s2 = this._cursor;
          let f2 = s2 + 1;
          const c = t2._elements, d2 = c[s2];
          return f2 === U && (r = t2._next, f2 = 0), --this._size, this._cursor = f2, t2 !== r && (this._front = r), c[s2] = undefined, d2;
        }
        forEach(t2) {
          let r = this._cursor, s2 = this._front, f2 = s2._elements;
          for (; (r !== f2.length || s2._next !== undefined) && !(r === f2.length && (s2 = s2._next, f2 = s2._elements, r = 0, f2.length === 0)); ) t2(f2[r]), ++r;
        }
        peek() {
          const t2 = this._front, r = this._cursor;
          return t2._elements[r];
        }
      };
      n(bn, "SimpleQueue");
      let D = bn;
      const Ft2 = Symbol("[[AbortSteps]]"), Qn2 = Symbol("[[ErrorSteps]]"), Ar = Symbol("[[CancelSteps]]"), Br = Symbol("[[PullSteps]]"), kr = Symbol("[[ReleaseSteps]]");
      function Yn2(e, t2) {
        e._ownerReadableStream = t2, t2._reader = e, t2._state === "readable" ? qr(e) : t2._state === "closed" ? Li2(e) : Gn2(e, t2._storedError);
      }
      n(Yn2, "ReadableStreamReaderGenericInitialize");
      function Wr(e, t2) {
        const r = e._ownerReadableStream;
        return ie(r, t2);
      }
      n(Wr, "ReadableStreamReaderGenericCancel");
      function _e(e) {
        const t2 = e._ownerReadableStream;
        t2._state === "readable" ? Or(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : $i2(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t2._readableStreamController[kr](), t2._reader = undefined, e._ownerReadableStream = undefined;
      }
      n(_e, "ReadableStreamReaderGenericRelease");
      function jt2(e) {
        return new TypeError("Cannot " + e + " a stream using a released reader");
      }
      n(jt2, "readerLockException");
      function qr(e) {
        e._closedPromise = E((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r;
        });
      }
      n(qr, "defaultReaderClosedPromiseInitialize");
      function Gn2(e, t2) {
        qr(e), Or(e, t2);
      }
      n(Gn2, "defaultReaderClosedPromiseInitializeAsRejected");
      function Li2(e) {
        qr(e), Zn2(e);
      }
      n(Li2, "defaultReaderClosedPromiseInitializeAsResolved");
      function Or(e, t2) {
        e._closedPromise_reject !== undefined && (Q2(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined);
      }
      n(Or, "defaultReaderClosedPromiseReject");
      function $i2(e, t2) {
        Gn2(e, t2);
      }
      n($i2, "defaultReaderClosedPromiseResetToRejected");
      function Zn2(e) {
        e._closedPromise_resolve !== undefined && (e._closedPromise_resolve(undefined), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined);
      }
      n(Zn2, "defaultReaderClosedPromiseResolve");
      const Kn = Number.isFinite || function(e) {
        return typeof e == "number" && isFinite(e);
      }, Di2 = Math.trunc || function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      };
      function Mi2(e) {
        return typeof e == "object" || typeof e == "function";
      }
      n(Mi2, "isDictionary");
      function ue(e, t2) {
        if (e !== undefined && !Mi2(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n(ue, "assertDictionary");
      function Z(e, t2) {
        if (typeof e != "function") throw new TypeError(`${t2} is not a function.`);
      }
      n(Z, "assertFunction");
      function Ui2(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n(Ui2, "isObject");
      function Jn2(e, t2) {
        if (!Ui2(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n(Jn2, "assertObject");
      function Se(e, t2, r) {
        if (e === undefined) throw new TypeError(`Parameter ${t2} is required in '${r}'.`);
      }
      n(Se, "assertRequiredArgument");
      function zr2(e, t2, r) {
        if (e === undefined) throw new TypeError(`${t2} is required in '${r}'.`);
      }
      n(zr2, "assertRequiredField");
      function Ir(e) {
        return Number(e);
      }
      n(Ir, "convertUnrestrictedDouble");
      function Xn2(e) {
        return e === 0 ? 0 : e;
      }
      n(Xn2, "censorNegativeZero");
      function xi(e) {
        return Xn2(Di2(e));
      }
      n(xi, "integerPart");
      function Fr(e, t2) {
        const s2 = Number.MAX_SAFE_INTEGER;
        let f2 = Number(e);
        if (f2 = Xn2(f2), !Kn(f2)) throw new TypeError(`${t2} is not a finite number`);
        if (f2 = xi(f2), f2 < 0 || f2 > s2) throw new TypeError(`${t2} is outside the accepted range of 0 to ${s2}, inclusive`);
        return !Kn(f2) || f2 === 0 ? 0 : f2;
      }
      n(Fr, "convertUnsignedLongLongWithEnforceRange");
      function jr(e, t2) {
        if (!We(e)) throw new TypeError(`${t2} is not a ReadableStream.`);
      }
      n(jr, "assertReadableStream");
      function Qe2(e) {
        return new fe(e);
      }
      n(Qe2, "AcquireReadableStreamDefaultReader");
      function eo(e, t2) {
        e._reader._readRequests.push(t2);
      }
      n(eo, "ReadableStreamAddReadRequest");
      function Lr(e, t2, r) {
        const f2 = e._reader._readRequests.shift();
        r ? f2._closeSteps() : f2._chunkSteps(t2);
      }
      n(Lr, "ReadableStreamFulfillReadRequest");
      function Lt2(e) {
        return e._reader._readRequests.length;
      }
      n(Lt2, "ReadableStreamGetNumReadRequests");
      function to2(e) {
        const t2 = e._reader;
        return !(t2 === undefined || !Ee(t2));
      }
      n(to2, "ReadableStreamHasDefaultReader");
      const mn2 = class mn {
        constructor(t2) {
          if (Se(t2, 1, "ReadableStreamDefaultReader"), jr(t2, "First parameter"), qe(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          Yn2(this, t2), this._readRequests = new D();
        }
        get closed() {
          return Ee(this) ? this._closedPromise : b($t("closed"));
        }
        cancel(t2 = undefined) {
          return Ee(this) ? this._ownerReadableStream === undefined ? b(jt2("cancel")) : Wr(this, t2) : b($t("cancel"));
        }
        read() {
          if (!Ee(this)) return b($t("read"));
          if (this._ownerReadableStream === undefined) return b(jt2("read from"));
          let t2, r;
          const s2 = E((c, d2) => {
            t2 = c, r = d2;
          });
          return mt(this, { _chunkSteps: (c) => t2({ value: c, done: false }), _closeSteps: () => t2({ value: undefined, done: true }), _errorSteps: (c) => r(c) }), s2;
        }
        releaseLock() {
          if (!Ee(this)) throw $t("releaseLock");
          this._ownerReadableStream !== undefined && Ni2(this);
        }
      };
      n(mn2, "ReadableStreamDefaultReader");
      let fe = mn2;
      Object.defineProperties(fe.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h2(fe.prototype.cancel, "cancel"), h2(fe.prototype.read, "read"), h2(fe.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(fe.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
      function Ee(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof fe;
      }
      n(Ee, "IsReadableStreamDefaultReader");
      function mt(e, t2) {
        const r = e._ownerReadableStream;
        r._disturbed = true, r._state === "closed" ? t2._closeSteps() : r._state === "errored" ? t2._errorSteps(r._storedError) : r._readableStreamController[Br](t2);
      }
      n(mt, "ReadableStreamDefaultReaderRead");
      function Ni2(e) {
        _e(e);
        const t2 = new TypeError("Reader was released");
        ro(e, t2);
      }
      n(Ni2, "ReadableStreamDefaultReaderRelease");
      function ro(e, t2) {
        const r = e._readRequests;
        e._readRequests = new D(), r.forEach((s2) => {
          s2._errorSteps(t2);
        });
      }
      n(ro, "ReadableStreamDefaultReaderErrorReadRequests");
      function $t(e) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
      }
      n($t, "defaultReaderBrandCheckException");
      const Hi2 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype), yn = class yn {
        constructor(t2, r) {
          this._ongoingPromise = undefined, this._isFinished = false, this._reader = t2, this._preventCancel = r;
        }
        next() {
          const t2 = n(() => this._nextSteps(), "nextSteps");
          return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t2, t2) : t2(), this._ongoingPromise;
        }
        return(t2) {
          const r = n(() => this._returnSteps(t2), "returnSteps");
          return this._ongoingPromise ? F(this._ongoingPromise, r, r) : r();
        }
        _nextSteps() {
          if (this._isFinished) return Promise.resolve({ value: undefined, done: true });
          const t2 = this._reader;
          let r, s2;
          const f2 = E((d2, m) => {
            r = d2, s2 = m;
          });
          return mt(t2, { _chunkSteps: (d2) => {
            this._ongoingPromise = undefined, ge(() => r({ value: d2, done: false }));
          }, _closeSteps: () => {
            this._ongoingPromise = undefined, this._isFinished = true, _e(t2), r({ value: undefined, done: true });
          }, _errorSteps: (d2) => {
            this._ongoingPromise = undefined, this._isFinished = true, _e(t2), s2(d2);
          } }), f2;
        }
        _returnSteps(t2) {
          if (this._isFinished) return Promise.resolve({ value: t2, done: true });
          this._isFinished = true;
          const r = this._reader;
          if (!this._preventCancel) {
            const s2 = Wr(r, t2);
            return _e(r), F(s2, () => ({ value: t2, done: true }));
          }
          return _e(r), T({ value: t2, done: true });
        }
      };
      n(yn, "ReadableStreamAsyncIteratorImpl");
      let Dt2 = yn;
      const no = { next() {
        return oo2(this) ? this._asyncIteratorImpl.next() : b(io("next"));
      }, return(e) {
        return oo2(this) ? this._asyncIteratorImpl.return(e) : b(io("return"));
      } };
      Object.setPrototypeOf(no, Hi2);
      function Vi2(e, t2) {
        const r = Qe2(e), s2 = new Dt2(r, t2), f2 = Object.create(no);
        return f2._asyncIteratorImpl = s2, f2;
      }
      n(Vi2, "AcquireReadableStreamAsyncIterator");
      function oo2(e) {
        if (!l2(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return false;
        try {
          return e._asyncIteratorImpl instanceof Dt2;
        } catch {
          return false;
        }
      }
      n(oo2, "IsReadableStreamAsyncIterator");
      function io(e) {
        return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
      }
      n(io, "streamAsyncIteratorBrandCheckException");
      const ao2 = Number.isNaN || function(e) {
        return e !== e;
      };
      var $r, Dr, Mr;
      function yt2(e) {
        return e.slice();
      }
      n(yt2, "CreateArrayFromList");
      function so2(e, t2, r, s2, f2) {
        new Uint8Array(e).set(new Uint8Array(r, s2, f2), t2);
      }
      n(so2, "CopyDataBlockBytes");
      let we = n((e) => (typeof e.transfer == "function" ? we = n((t2) => t2.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? we = n((t2) => structuredClone(t2, { transfer: [t2] }), "TransferArrayBuffer") : we = n((t2) => t2, "TransferArrayBuffer"), we(e)), "TransferArrayBuffer"), Ae2 = n((e) => (typeof e.detached == "boolean" ? Ae2 = n((t2) => t2.detached, "IsDetachedBuffer") : Ae2 = n((t2) => t2.byteLength === 0, "IsDetachedBuffer"), Ae2(e)), "IsDetachedBuffer");
      function lo2(e, t2, r) {
        if (e.slice) return e.slice(t2, r);
        const s2 = r - t2, f2 = new ArrayBuffer(s2);
        return so2(f2, 0, e, t2, s2), f2;
      }
      n(lo2, "ArrayBufferSlice");
      function Mt2(e, t2) {
        const r = e[t2];
        if (r != null) {
          if (typeof r != "function") throw new TypeError(`${String(t2)} is not a function`);
          return r;
        }
      }
      n(Mt2, "GetMethod");
      function Qi2(e) {
        const t2 = { [Symbol.iterator]: () => e.iterator }, r = async function* () {
          return yield* t2;
        }(), s2 = r.next;
        return { iterator: r, nextMethod: s2, done: false };
      }
      n(Qi2, "CreateAsyncFromSyncIterator");
      const Ur = (Mr = ($r = Symbol.asyncIterator) !== null && $r !== undefined ? $r : (Dr = Symbol.for) === null || Dr === undefined ? undefined : Dr.call(Symbol, "Symbol.asyncIterator")) !== null && Mr !== undefined ? Mr : "@@asyncIterator";
      function uo2(e, t2 = "sync", r) {
        if (r === undefined) if (t2 === "async") {
          if (r = Mt2(e, Ur), r === undefined) {
            const c = Mt2(e, Symbol.iterator), d2 = uo2(e, "sync", c);
            return Qi2(d2);
          }
        } else r = Mt2(e, Symbol.iterator);
        if (r === undefined) throw new TypeError("The object is not iterable");
        const s2 = z(r, e, []);
        if (!l2(s2)) throw new TypeError("The iterator method must return an object");
        const f2 = s2.next;
        return { iterator: s2, nextMethod: f2, done: false };
      }
      n(uo2, "GetIterator");
      function Yi2(e) {
        const t2 = z(e.nextMethod, e.iterator, []);
        if (!l2(t2)) throw new TypeError("The iterator.next() method must return an object");
        return t2;
      }
      n(Yi2, "IteratorNext");
      function Gi2(e) {
        return !!e.done;
      }
      n(Gi2, "IteratorComplete");
      function Zi2(e) {
        return e.value;
      }
      n(Zi2, "IteratorValue");
      function Ki(e) {
        return !(typeof e != "number" || ao2(e) || e < 0);
      }
      n(Ki, "IsNonNegativeNumber");
      function fo2(e) {
        const t2 = lo2(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
        return new Uint8Array(t2);
      }
      n(fo2, "CloneAsUint8Array");
      function xr(e) {
        const t2 = e._queue.shift();
        return e._queueTotalSize -= t2.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t2.value;
      }
      n(xr, "DequeueValue");
      function Nr(e, t2, r) {
        if (!Ki(r) || r === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        e._queue.push({ value: t2, size: r }), e._queueTotalSize += r;
      }
      n(Nr, "EnqueueValueWithSize");
      function Ji2(e) {
        return e._queue.peek().value;
      }
      n(Ji2, "PeekQueueValue");
      function Be(e) {
        e._queue = new D(), e._queueTotalSize = 0;
      }
      n(Be, "ResetQueue");
      function co(e) {
        return e === DataView;
      }
      n(co, "isDataViewConstructor");
      function Xi2(e) {
        return co(e.constructor);
      }
      n(Xi2, "isDataView");
      function ea(e) {
        return co(e) ? 1 : e.BYTES_PER_ELEMENT;
      }
      n(ea, "arrayBufferViewElementSize");
      const gn = class gn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!Hr2(this)) throw Zr("view");
          return this._view;
        }
        respond(t2) {
          if (!Hr2(this)) throw Zr("respond");
          if (Se(t2, 1, "respond"), t2 = Fr(t2, "First parameter"), this._associatedReadableByteStreamController === undefined) throw new TypeError("This BYOB request has been invalidated");
          if (Ae2(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
          Ht(this._associatedReadableByteStreamController, t2);
        }
        respondWithNewView(t2) {
          if (!Hr2(this)) throw Zr("respondWithNewView");
          if (Se(t2, 1, "respondWithNewView"), !ArrayBuffer.isView(t2)) throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === undefined) throw new TypeError("This BYOB request has been invalidated");
          if (Ae2(t2.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
          Vt2(this._associatedReadableByteStreamController, t2);
        }
      };
      n(gn, "ReadableStreamBYOBRequest");
      let Re = gn;
      Object.defineProperties(Re.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h2(Re.prototype.respond, "respond"), h2(Re.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
      const _n2 = class _n {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!ze(this)) throw _t2("byobRequest");
          return Gr(this);
        }
        get desiredSize() {
          if (!ze(this)) throw _t2("desiredSize");
          return Ro(this);
        }
        close() {
          if (!ze(this)) throw _t2("close");
          if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
          const t2 = this._controlledReadableByteStream._state;
          if (t2 !== "readable") throw new TypeError(`The stream (in ${t2} state) is not in the readable state and cannot be closed`);
          gt2(this);
        }
        enqueue(t2) {
          if (!ze(this)) throw _t2("enqueue");
          if (Se(t2, 1, "enqueue"), !ArrayBuffer.isView(t2)) throw new TypeError("chunk must be an array buffer view");
          if (t2.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
          if (t2.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested) throw new TypeError("stream is closed or draining");
          const r = this._controlledReadableByteStream._state;
          if (r !== "readable") throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
          Nt2(this, t2);
        }
        error(t2 = undefined) {
          if (!ze(this)) throw _t2("error");
          K2(this, t2);
        }
        [Ar](t2) {
          ho(this), Be(this);
          const r = this._cancelAlgorithm(t2);
          return xt(this), r;
        }
        [Br](t2) {
          const r = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            wo(this, t2);
            return;
          }
          const s2 = this._autoAllocateChunkSize;
          if (s2 !== undefined) {
            let f2;
            try {
              f2 = new ArrayBuffer(s2);
            } catch (d2) {
              t2._errorSteps(d2);
              return;
            }
            const c = { buffer: f2, bufferByteLength: s2, byteOffset: 0, byteLength: s2, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
            this._pendingPullIntos.push(c);
          }
          eo(r, t2), Ie2(this);
        }
        [kr]() {
          if (this._pendingPullIntos.length > 0) {
            const t2 = this._pendingPullIntos.peek();
            t2.readerType = "none", this._pendingPullIntos = new D(), this._pendingPullIntos.push(t2);
          }
        }
      };
      n(_n2, "ReadableByteStreamController");
      let te = _n2;
      Object.defineProperties(te.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h2(te.prototype.close, "close"), h2(te.prototype.enqueue, "enqueue"), h2(te.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(te.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
      function ze(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof te;
      }
      n(ze, "IsReadableByteStreamController");
      function Hr2(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof Re;
      }
      n(Hr2, "IsReadableStreamBYOBRequest");
      function Ie2(e) {
        if (!ia2(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        _(r, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Ie2(e)), null), (s2) => (K2(e, s2), null));
      }
      n(Ie2, "ReadableByteStreamControllerCallPullIfNeeded");
      function ho(e) {
        Qr(e), e._pendingPullIntos = new D();
      }
      n(ho, "ReadableByteStreamControllerClearPendingPullIntos");
      function Vr(e, t2) {
        let r = false;
        e._state === "closed" && (r = true);
        const s2 = po(t2);
        t2.readerType === "default" ? Lr(e, s2, r) : ca(e, s2, r);
      }
      n(Vr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
      function po(e) {
        const t2 = e.bytesFilled, r = e.elementSize;
        return new e.viewConstructor(e.buffer, e.byteOffset, t2 / r);
      }
      n(po, "ReadableByteStreamControllerConvertPullIntoDescriptor");
      function Ut2(e, t2, r, s2) {
        e._queue.push({ buffer: t2, byteOffset: r, byteLength: s2 }), e._queueTotalSize += s2;
      }
      n(Ut2, "ReadableByteStreamControllerEnqueueChunkToQueue");
      function bo(e, t2, r, s2) {
        let f2;
        try {
          f2 = lo2(t2, r, r + s2);
        } catch (c) {
          throw K2(e, c), c;
        }
        Ut2(e, f2, 0, s2);
      }
      n(bo, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
      function mo(e, t2) {
        t2.bytesFilled > 0 && bo(e, t2.buffer, t2.byteOffset, t2.bytesFilled), Ye2(e);
      }
      n(mo, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
      function yo(e, t2) {
        const r = Math.min(e._queueTotalSize, t2.byteLength - t2.bytesFilled), s2 = t2.bytesFilled + r;
        let f2 = r, c = false;
        const d2 = s2 % t2.elementSize, m = s2 - d2;
        m >= t2.minimumFill && (f2 = m - t2.bytesFilled, c = true);
        const R2 = e._queue;
        for (; f2 > 0; ) {
          const y = R2.peek(), C = Math.min(f2, y.byteLength), P = t2.byteOffset + t2.bytesFilled;
          so2(t2.buffer, P, y.buffer, y.byteOffset, C), y.byteLength === C ? R2.shift() : (y.byteOffset += C, y.byteLength -= C), e._queueTotalSize -= C, go(e, C, t2), f2 -= C;
        }
        return c;
      }
      n(yo, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
      function go(e, t2, r) {
        r.bytesFilled += t2;
      }
      n(go, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
      function _o(e) {
        e._queueTotalSize === 0 && e._closeRequested ? (xt(e), Pt(e._controlledReadableByteStream)) : Ie2(e);
      }
      n(_o, "ReadableByteStreamControllerHandleQueueDrain");
      function Qr(e) {
        e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = undefined, e._byobRequest._view = null, e._byobRequest = null);
      }
      n(Qr, "ReadableByteStreamControllerInvalidateBYOBRequest");
      function Yr(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const t2 = e._pendingPullIntos.peek();
          yo(e, t2) && (Ye2(e), Vr(e._controlledReadableByteStream, t2));
        }
      }
      n(Yr, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
      function ta(e) {
        const t2 = e._controlledReadableByteStream._reader;
        for (; t2._readRequests.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const r = t2._readRequests.shift();
          wo(e, r);
        }
      }
      n(ta, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
      function ra(e, t2, r, s2) {
        const f2 = e._controlledReadableByteStream, c = t2.constructor, d2 = ea(c), { byteOffset: m, byteLength: R2 } = t2, y = r * d2;
        let C;
        try {
          C = we(t2.buffer);
        } catch (B) {
          s2._errorSteps(B);
          return;
        }
        const P = { buffer: C, bufferByteLength: C.byteLength, byteOffset: m, byteLength: R2, bytesFilled: 0, minimumFill: y, elementSize: d2, viewConstructor: c, readerType: "byob" };
        if (e._pendingPullIntos.length > 0) {
          e._pendingPullIntos.push(P), Po(f2, s2);
          return;
        }
        if (f2._state === "closed") {
          const B = new c(P.buffer, P.byteOffset, 0);
          s2._closeSteps(B);
          return;
        }
        if (e._queueTotalSize > 0) {
          if (yo(e, P)) {
            const B = po(P);
            _o(e), s2._chunkSteps(B);
            return;
          }
          if (e._closeRequested) {
            const B = new TypeError("Insufficient bytes to fill elements in the given buffer");
            K2(e, B), s2._errorSteps(B);
            return;
          }
        }
        e._pendingPullIntos.push(P), Po(f2, s2), Ie2(e);
      }
      n(ra, "ReadableByteStreamControllerPullInto");
      function na(e, t2) {
        t2.readerType === "none" && Ye2(e);
        const r = e._controlledReadableByteStream;
        if (Kr2(r)) for (; vo(r) > 0; ) {
          const s2 = Ye2(e);
          Vr(r, s2);
        }
      }
      n(na, "ReadableByteStreamControllerRespondInClosedState");
      function oa(e, t2, r) {
        if (go(e, t2, r), r.readerType === "none") {
          mo(e, r), Yr(e);
          return;
        }
        if (r.bytesFilled < r.minimumFill) return;
        Ye2(e);
        const s2 = r.bytesFilled % r.elementSize;
        if (s2 > 0) {
          const f2 = r.byteOffset + r.bytesFilled;
          bo(e, r.buffer, f2 - s2, s2);
        }
        r.bytesFilled -= s2, Vr(e._controlledReadableByteStream, r), Yr(e);
      }
      n(oa, "ReadableByteStreamControllerRespondInReadableState");
      function So(e, t2) {
        const r = e._pendingPullIntos.peek();
        Qr(e), e._controlledReadableByteStream._state === "closed" ? na(e, r) : oa(e, t2, r), Ie2(e);
      }
      n(So, "ReadableByteStreamControllerRespondInternal");
      function Ye2(e) {
        return e._pendingPullIntos.shift();
      }
      n(Ye2, "ReadableByteStreamControllerShiftPendingPullInto");
      function ia2(e) {
        const t2 = e._controlledReadableByteStream;
        return t2._state !== "readable" || e._closeRequested || !e._started ? false : !!(to2(t2) && Lt2(t2) > 0 || Kr2(t2) && vo(t2) > 0 || Ro(e) > 0);
      }
      n(ia2, "ReadableByteStreamControllerShouldCallPull");
      function xt(e) {
        e._pullAlgorithm = undefined, e._cancelAlgorithm = undefined;
      }
      n(xt, "ReadableByteStreamControllerClearAlgorithms");
      function gt2(e) {
        const t2 = e._controlledReadableByteStream;
        if (!(e._closeRequested || t2._state !== "readable")) {
          if (e._queueTotalSize > 0) {
            e._closeRequested = true;
            return;
          }
          if (e._pendingPullIntos.length > 0) {
            const r = e._pendingPullIntos.peek();
            if (r.bytesFilled % r.elementSize !== 0) {
              const s2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              throw K2(e, s2), s2;
            }
          }
          xt(e), Pt(t2);
        }
      }
      n(gt2, "ReadableByteStreamControllerClose");
      function Nt2(e, t2) {
        const r = e._controlledReadableByteStream;
        if (e._closeRequested || r._state !== "readable") return;
        const { buffer: s2, byteOffset: f2, byteLength: c } = t2;
        if (Ae2(s2)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
        const d2 = we(s2);
        if (e._pendingPullIntos.length > 0) {
          const m = e._pendingPullIntos.peek();
          if (Ae2(m.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
          Qr(e), m.buffer = we(m.buffer), m.readerType === "none" && mo(e, m);
        }
        if (to2(r)) if (ta(e), Lt2(r) === 0) Ut2(e, d2, f2, c);
        else {
          e._pendingPullIntos.length > 0 && Ye2(e);
          const m = new Uint8Array(d2, f2, c);
          Lr(r, m, false);
        }
        else Kr2(r) ? (Ut2(e, d2, f2, c), Yr(e)) : Ut2(e, d2, f2, c);
        Ie2(e);
      }
      n(Nt2, "ReadableByteStreamControllerEnqueue");
      function K2(e, t2) {
        const r = e._controlledReadableByteStream;
        r._state === "readable" && (ho(e), Be(e), xt(e), Zo2(r, t2));
      }
      n(K2, "ReadableByteStreamControllerError");
      function wo(e, t2) {
        const r = e._queue.shift();
        e._queueTotalSize -= r.byteLength, _o(e);
        const s2 = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        t2._chunkSteps(s2);
      }
      n(wo, "ReadableByteStreamControllerFillReadRequestFromQueue");
      function Gr(e) {
        if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
          const t2 = e._pendingPullIntos.peek(), r = new Uint8Array(t2.buffer, t2.byteOffset + t2.bytesFilled, t2.byteLength - t2.bytesFilled), s2 = Object.create(Re.prototype);
          sa(s2, e, r), e._byobRequest = s2;
        }
        return e._byobRequest;
      }
      n(Gr, "ReadableByteStreamControllerGetBYOBRequest");
      function Ro(e) {
        const t2 = e._controlledReadableByteStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n(Ro, "ReadableByteStreamControllerGetDesiredSize");
      function Ht(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2 !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (t2 === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (r.bytesFilled + t2 > r.byteLength) throw new RangeError("bytesWritten out of range");
        }
        r.buffer = we(r.buffer), So(e, t2);
      }
      n(Ht, "ReadableByteStreamControllerRespond");
      function Vt2(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (t2.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (r.byteOffset + r.bytesFilled !== t2.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
        if (r.bufferByteLength !== t2.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (r.bytesFilled + t2.byteLength > r.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
        const f2 = t2.byteLength;
        r.buffer = we(t2.buffer), So(e, f2);
      }
      n(Vt2, "ReadableByteStreamControllerRespondWithNewView");
      function To(e, t2, r, s2, f2, c, d2) {
        t2._controlledReadableByteStream = e, t2._pullAgain = false, t2._pulling = false, t2._byobRequest = null, t2._queue = t2._queueTotalSize = undefined, Be(t2), t2._closeRequested = false, t2._started = false, t2._strategyHWM = c, t2._pullAlgorithm = s2, t2._cancelAlgorithm = f2, t2._autoAllocateChunkSize = d2, t2._pendingPullIntos = new D(), e._readableStreamController = t2;
        const m = r();
        _(T(m), () => (t2._started = true, Ie2(t2), null), (R2) => (K2(t2, R2), null));
      }
      n(To, "SetUpReadableByteStreamController");
      function aa(e, t2, r) {
        const s2 = Object.create(te.prototype);
        let f2, c, d2;
        t2.start !== undefined ? f2 = n(() => t2.start(s2), "startAlgorithm") : f2 = n(() => {
        }, "startAlgorithm"), t2.pull !== undefined ? c = n(() => t2.pull(s2), "pullAlgorithm") : c = n(() => T(undefined), "pullAlgorithm"), t2.cancel !== undefined ? d2 = n((R2) => t2.cancel(R2), "cancelAlgorithm") : d2 = n(() => T(undefined), "cancelAlgorithm");
        const m = t2.autoAllocateChunkSize;
        if (m === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
        To(e, s2, f2, c, d2, r, m);
      }
      n(aa, "SetUpReadableByteStreamControllerFromUnderlyingSource");
      function sa(e, t2, r) {
        e._associatedReadableByteStreamController = t2, e._view = r;
      }
      n(sa, "SetUpReadableStreamBYOBRequest");
      function Zr(e) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
      }
      n(Zr, "byobRequestBrandCheckException");
      function _t2(e) {
        return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
      }
      n(_t2, "byteStreamControllerBrandCheckException");
      function la(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.mode;
        return { mode: r === undefined ? undefined : ua2(r, `${t2} has member 'mode' that`) };
      }
      n(la, "convertReaderOptions");
      function ua2(e, t2) {
        if (e = `${e}`, e !== "byob") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return e;
      }
      n(ua2, "convertReadableStreamReaderMode");
      function fa(e, t2) {
        var r;
        ue(e, t2);
        const s2 = (r = e == null ? undefined : e.min) !== null && r !== undefined ? r : 1;
        return { min: Fr(s2, `${t2} has member 'min' that`) };
      }
      n(fa, "convertByobReadOptions");
      function Co(e) {
        return new ce(e);
      }
      n(Co, "AcquireReadableStreamBYOBReader");
      function Po(e, t2) {
        e._reader._readIntoRequests.push(t2);
      }
      n(Po, "ReadableStreamAddReadIntoRequest");
      function ca(e, t2, r) {
        const f2 = e._reader._readIntoRequests.shift();
        r ? f2._closeSteps(t2) : f2._chunkSteps(t2);
      }
      n(ca, "ReadableStreamFulfillReadIntoRequest");
      function vo(e) {
        return e._reader._readIntoRequests.length;
      }
      n(vo, "ReadableStreamGetNumReadIntoRequests");
      function Kr2(e) {
        const t2 = e._reader;
        return !(t2 === undefined || !Fe(t2));
      }
      n(Kr2, "ReadableStreamHasBYOBReader");
      const Sn = class Sn {
        constructor(t2) {
          if (Se(t2, 1, "ReadableStreamBYOBReader"), jr(t2, "First parameter"), qe(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!ze(t2._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          Yn2(this, t2), this._readIntoRequests = new D();
        }
        get closed() {
          return Fe(this) ? this._closedPromise : b(Qt2("closed"));
        }
        cancel(t2 = undefined) {
          return Fe(this) ? this._ownerReadableStream === undefined ? b(jt2("cancel")) : Wr(this, t2) : b(Qt2("cancel"));
        }
        read(t2, r = {}) {
          if (!Fe(this)) return b(Qt2("read"));
          if (!ArrayBuffer.isView(t2)) return b(new TypeError("view must be an array buffer view"));
          if (t2.byteLength === 0) return b(new TypeError("view must have non-zero byteLength"));
          if (t2.buffer.byteLength === 0) return b(new TypeError("view's buffer must have non-zero byteLength"));
          if (Ae2(t2.buffer)) return b(new TypeError("view's buffer has been detached"));
          let s2;
          try {
            s2 = fa(r, "options");
          } catch (y) {
            return b(y);
          }
          const f2 = s2.min;
          if (f2 === 0) return b(new TypeError("options.min must be greater than 0"));
          if (Xi2(t2)) {
            if (f2 > t2.byteLength) return b(new RangeError("options.min must be less than or equal to view's byteLength"));
          } else if (f2 > t2.length) return b(new RangeError("options.min must be less than or equal to view's length"));
          if (this._ownerReadableStream === undefined) return b(jt2("read from"));
          let c, d2;
          const m = E((y, C) => {
            c = y, d2 = C;
          });
          return Eo2(this, t2, f2, { _chunkSteps: (y) => c({ value: y, done: false }), _closeSteps: (y) => c({ value: y, done: true }), _errorSteps: (y) => d2(y) }), m;
        }
        releaseLock() {
          if (!Fe(this)) throw Qt2("releaseLock");
          this._ownerReadableStream !== undefined && da(this);
        }
      };
      n(Sn, "ReadableStreamBYOBReader");
      let ce = Sn;
      Object.defineProperties(ce.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h2(ce.prototype.cancel, "cancel"), h2(ce.prototype.read, "read"), h2(ce.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
      function Fe(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof ce;
      }
      n(Fe, "IsReadableStreamBYOBReader");
      function Eo2(e, t2, r, s2) {
        const f2 = e._ownerReadableStream;
        f2._disturbed = true, f2._state === "errored" ? s2._errorSteps(f2._storedError) : ra(f2._readableStreamController, t2, r, s2);
      }
      n(Eo2, "ReadableStreamBYOBReaderRead");
      function da(e) {
        _e(e);
        const t2 = new TypeError("Reader was released");
        Ao(e, t2);
      }
      n(da, "ReadableStreamBYOBReaderRelease");
      function Ao(e, t2) {
        const r = e._readIntoRequests;
        e._readIntoRequests = new D(), r.forEach((s2) => {
          s2._errorSteps(t2);
        });
      }
      n(Ao, "ReadableStreamBYOBReaderErrorReadIntoRequests");
      function Qt2(e) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
      }
      n(Qt2, "byobReaderBrandCheckException");
      function St(e, t2) {
        const { highWaterMark: r } = e;
        if (r === undefined) return t2;
        if (ao2(r) || r < 0) throw new RangeError("Invalid highWaterMark");
        return r;
      }
      n(St, "ExtractHighWaterMark");
      function Yt(e) {
        const { size: t2 } = e;
        return t2 || (() => 1);
      }
      n(Yt, "ExtractSizeAlgorithm");
      function Gt(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.highWaterMark, s2 = e == null ? undefined : e.size;
        return { highWaterMark: r === undefined ? undefined : Ir(r), size: s2 === undefined ? undefined : ha2(s2, `${t2} has member 'size' that`) };
      }
      n(Gt, "convertQueuingStrategy");
      function ha2(e, t2) {
        return Z(e, t2), (r) => Ir(e(r));
      }
      n(ha2, "convertQueuingStrategySize");
      function pa(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.abort, s2 = e == null ? undefined : e.close, f2 = e == null ? undefined : e.start, c = e == null ? undefined : e.type, d2 = e == null ? undefined : e.write;
        return { abort: r === undefined ? undefined : ba2(r, e, `${t2} has member 'abort' that`), close: s2 === undefined ? undefined : ma(s2, e, `${t2} has member 'close' that`), start: f2 === undefined ? undefined : ya2(f2, e, `${t2} has member 'start' that`), write: d2 === undefined ? undefined : ga2(d2, e, `${t2} has member 'write' that`), type: c };
      }
      n(pa, "convertUnderlyingSink");
      function ba2(e, t2, r) {
        return Z(e, r), (s2) => j(e, t2, [s2]);
      }
      n(ba2, "convertUnderlyingSinkAbortCallback");
      function ma(e, t2, r) {
        return Z(e, r), () => j(e, t2, []);
      }
      n(ma, "convertUnderlyingSinkCloseCallback");
      function ya2(e, t2, r) {
        return Z(e, r), (s2) => z(e, t2, [s2]);
      }
      n(ya2, "convertUnderlyingSinkStartCallback");
      function ga2(e, t2, r) {
        return Z(e, r), (s2, f2) => j(e, t2, [s2, f2]);
      }
      n(ga2, "convertUnderlyingSinkWriteCallback");
      function Bo(e, t2) {
        if (!Ge(e)) throw new TypeError(`${t2} is not a WritableStream.`);
      }
      n(Bo, "assertWritableStream");
      function _a3(e) {
        if (typeof e != "object" || e === null) return false;
        try {
          return typeof e.aborted == "boolean";
        } catch {
          return false;
        }
      }
      n(_a3, "isAbortSignal");
      const Sa = typeof AbortController == "function";
      function wa2() {
        if (Sa) return new AbortController();
      }
      n(wa2, "createAbortController");
      const wn2 = class wn {
        constructor(t2 = {}, r = {}) {
          t2 === undefined ? t2 = null : Jn2(t2, "First parameter");
          const s2 = Gt(r, "Second parameter"), f2 = pa(t2, "First parameter");
          if (Wo(this), f2.type !== undefined) throw new RangeError("Invalid type is specified");
          const d2 = Yt(s2), m = St(s2, 1);
          Ia(this, f2, m, d2);
        }
        get locked() {
          if (!Ge(this)) throw er("locked");
          return Ze(this);
        }
        abort(t2 = undefined) {
          return Ge(this) ? Ze(this) ? b(new TypeError("Cannot abort a stream that already has a writer")) : Zt2(this, t2) : b(er("abort"));
        }
        close() {
          return Ge(this) ? Ze(this) ? b(new TypeError("Cannot close a stream that already has a writer")) : he2(this) ? b(new TypeError("Cannot close an already-closing stream")) : qo(this) : b(er("close"));
        }
        getWriter() {
          if (!Ge(this)) throw er("getWriter");
          return ko(this);
        }
      };
      n(wn2, "WritableStream");
      let de = wn2;
      Object.defineProperties(de.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h2(de.prototype.abort, "abort"), h2(de.prototype.close, "close"), h2(de.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
      function ko(e) {
        return new re(e);
      }
      n(ko, "AcquireWritableStreamDefaultWriter");
      function Ra(e, t2, r, s2, f2 = 1, c = () => 1) {
        const d2 = Object.create(de.prototype);
        Wo(d2);
        const m = Object.create(ke.prototype);
        return Lo(d2, m, e, t2, r, s2, f2, c), d2;
      }
      n(Ra, "CreateWritableStream");
      function Wo(e) {
        e._state = "writable", e._storedError = undefined, e._writer = undefined, e._writableStreamController = undefined, e._writeRequests = new D(), e._inFlightWriteRequest = undefined, e._closeRequest = undefined, e._inFlightCloseRequest = undefined, e._pendingAbortRequest = undefined, e._backpressure = false;
      }
      n(Wo, "InitializeWritableStream");
      function Ge(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof de;
      }
      n(Ge, "IsWritableStream");
      function Ze(e) {
        return e._writer !== undefined;
      }
      n(Ze, "IsWritableStreamLocked");
      function Zt2(e, t2) {
        var r;
        if (e._state === "closed" || e._state === "errored") return T(undefined);
        e._writableStreamController._abortReason = t2, (r = e._writableStreamController._abortController) === null || r === undefined || r.abort(t2);
        const s2 = e._state;
        if (s2 === "closed" || s2 === "errored") return T(undefined);
        if (e._pendingAbortRequest !== undefined) return e._pendingAbortRequest._promise;
        let f2 = false;
        s2 === "erroring" && (f2 = true, t2 = undefined);
        const c = E((d2, m) => {
          e._pendingAbortRequest = { _promise: undefined, _resolve: d2, _reject: m, _reason: t2, _wasAlreadyErroring: f2 };
        });
        return e._pendingAbortRequest._promise = c, f2 || Xr(e, t2), c;
      }
      n(Zt2, "WritableStreamAbort");
      function qo(e) {
        const t2 = e._state;
        if (t2 === "closed" || t2 === "errored") return b(new TypeError(`The stream (in ${t2} state) is not in the writable state and cannot be closed`));
        const r = E((f2, c) => {
          const d2 = { _resolve: f2, _reject: c };
          e._closeRequest = d2;
        }), s2 = e._writer;
        return s2 !== undefined && e._backpressure && t2 === "writable" && ln(s2), Fa(e._writableStreamController), r;
      }
      n(qo, "WritableStreamClose");
      function Ta(e) {
        return E((r, s2) => {
          const f2 = { _resolve: r, _reject: s2 };
          e._writeRequests.push(f2);
        });
      }
      n(Ta, "WritableStreamAddWriteRequest");
      function Jr(e, t2) {
        if (e._state === "writable") {
          Xr(e, t2);
          return;
        }
        en2(e);
      }
      n(Jr, "WritableStreamDealWithRejection");
      function Xr(e, t2) {
        const r = e._writableStreamController;
        e._state = "erroring", e._storedError = t2;
        const s2 = e._writer;
        s2 !== undefined && zo(s2, t2), !Aa2(e) && r._started && en2(e);
      }
      n(Xr, "WritableStreamStartErroring");
      function en2(e) {
        e._state = "errored", e._writableStreamController[Qn2]();
        const t2 = e._storedError;
        if (e._writeRequests.forEach((f2) => {
          f2._reject(t2);
        }), e._writeRequests = new D(), e._pendingAbortRequest === undefined) {
          Kt(e);
          return;
        }
        const r = e._pendingAbortRequest;
        if (e._pendingAbortRequest = undefined, r._wasAlreadyErroring) {
          r._reject(t2), Kt(e);
          return;
        }
        const s2 = e._writableStreamController[Ft2](r._reason);
        _(s2, () => (r._resolve(), Kt(e), null), (f2) => (r._reject(f2), Kt(e), null));
      }
      n(en2, "WritableStreamFinishErroring");
      function Ca2(e) {
        e._inFlightWriteRequest._resolve(undefined), e._inFlightWriteRequest = undefined;
      }
      n(Ca2, "WritableStreamFinishInFlightWrite");
      function Pa2(e, t2) {
        e._inFlightWriteRequest._reject(t2), e._inFlightWriteRequest = undefined, Jr(e, t2);
      }
      n(Pa2, "WritableStreamFinishInFlightWriteWithError");
      function va(e) {
        e._inFlightCloseRequest._resolve(undefined), e._inFlightCloseRequest = undefined, e._state === "erroring" && (e._storedError = undefined, e._pendingAbortRequest !== undefined && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = undefined)), e._state = "closed";
        const r = e._writer;
        r !== undefined && Uo2(r);
      }
      n(va, "WritableStreamFinishInFlightClose");
      function Ea2(e, t2) {
        e._inFlightCloseRequest._reject(t2), e._inFlightCloseRequest = undefined, e._pendingAbortRequest !== undefined && (e._pendingAbortRequest._reject(t2), e._pendingAbortRequest = undefined), Jr(e, t2);
      }
      n(Ea2, "WritableStreamFinishInFlightCloseWithError");
      function he2(e) {
        return !(e._closeRequest === undefined && e._inFlightCloseRequest === undefined);
      }
      n(he2, "WritableStreamCloseQueuedOrInFlight");
      function Aa2(e) {
        return !(e._inFlightWriteRequest === undefined && e._inFlightCloseRequest === undefined);
      }
      n(Aa2, "WritableStreamHasOperationMarkedInFlight");
      function Ba(e) {
        e._inFlightCloseRequest = e._closeRequest, e._closeRequest = undefined;
      }
      n(Ba, "WritableStreamMarkCloseRequestInFlight");
      function ka(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      n(ka, "WritableStreamMarkFirstWriteRequestInFlight");
      function Kt(e) {
        e._closeRequest !== undefined && (e._closeRequest._reject(e._storedError), e._closeRequest = undefined);
        const t2 = e._writer;
        t2 !== undefined && an(t2, e._storedError);
      }
      n(Kt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
      function tn(e, t2) {
        const r = e._writer;
        r !== undefined && t2 !== e._backpressure && (t2 ? xa(r) : ln(r)), e._backpressure = t2;
      }
      n(tn, "WritableStreamUpdateBackpressure");
      const Rn = class Rn {
        constructor(t2) {
          if (Se(t2, 1, "WritableStreamDefaultWriter"), Bo(t2, "First parameter"), Ze(t2)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = t2, t2._writer = this;
          const r = t2._state;
          if (r === "writable") !he2(t2) && t2._backpressure ? rr(this) : xo(this), tr(this);
          else if (r === "erroring") sn(this, t2._storedError), tr(this);
          else if (r === "closed") xo(this), Ma(this);
          else {
            const s2 = t2._storedError;
            sn(this, s2), Mo2(this, s2);
          }
        }
        get closed() {
          return je2(this) ? this._closedPromise : b(Le2("closed"));
        }
        get desiredSize() {
          if (!je2(this)) throw Le2("desiredSize");
          if (this._ownerWritableStream === undefined) throw Rt2("desiredSize");
          return za(this);
        }
        get ready() {
          return je2(this) ? this._readyPromise : b(Le2("ready"));
        }
        abort(t2 = undefined) {
          return je2(this) ? this._ownerWritableStream === undefined ? b(Rt2("abort")) : Wa(this, t2) : b(Le2("abort"));
        }
        close() {
          if (!je2(this)) return b(Le2("close"));
          const t2 = this._ownerWritableStream;
          return t2 === undefined ? b(Rt2("close")) : he2(t2) ? b(new TypeError("Cannot close an already-closing stream")) : Oo2(this);
        }
        releaseLock() {
          if (!je2(this)) throw Le2("releaseLock");
          this._ownerWritableStream !== undefined && Io(this);
        }
        write(t2 = undefined) {
          return je2(this) ? this._ownerWritableStream === undefined ? b(Rt2("write to")) : Fo(this, t2) : b(Le2("write"));
        }
      };
      n(Rn, "WritableStreamDefaultWriter");
      let re = Rn;
      Object.defineProperties(re.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h2(re.prototype.abort, "abort"), h2(re.prototype.close, "close"), h2(re.prototype.releaseLock, "releaseLock"), h2(re.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(re.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
      function je2(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof re;
      }
      n(je2, "IsWritableStreamDefaultWriter");
      function Wa(e, t2) {
        const r = e._ownerWritableStream;
        return Zt2(r, t2);
      }
      n(Wa, "WritableStreamDefaultWriterAbort");
      function Oo2(e) {
        const t2 = e._ownerWritableStream;
        return qo(t2);
      }
      n(Oo2, "WritableStreamDefaultWriterClose");
      function qa2(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return he2(t2) || r === "closed" ? T(undefined) : r === "errored" ? b(t2._storedError) : Oo2(e);
      }
      n(qa2, "WritableStreamDefaultWriterCloseWithErrorPropagation");
      function Oa2(e, t2) {
        e._closedPromiseState === "pending" ? an(e, t2) : Ua2(e, t2);
      }
      n(Oa2, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
      function zo(e, t2) {
        e._readyPromiseState === "pending" ? No(e, t2) : Na(e, t2);
      }
      n(zo, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
      function za(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : $o2(t2._writableStreamController);
      }
      n(za, "WritableStreamDefaultWriterGetDesiredSize");
      function Io(e) {
        const t2 = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        zo(e, r), Oa2(e, r), t2._writer = undefined, e._ownerWritableStream = undefined;
      }
      n(Io, "WritableStreamDefaultWriterRelease");
      function Fo(e, t2) {
        const r = e._ownerWritableStream, s2 = r._writableStreamController, f2 = ja2(s2, t2);
        if (r !== e._ownerWritableStream) return b(Rt2("write to"));
        const c = r._state;
        if (c === "errored") return b(r._storedError);
        if (he2(r) || c === "closed") return b(new TypeError("The stream is closing or closed and cannot be written to"));
        if (c === "erroring") return b(r._storedError);
        const d2 = Ta(r);
        return La(s2, t2, f2), d2;
      }
      n(Fo, "WritableStreamDefaultWriterWrite");
      const jo2 = {}, Tn = class Tn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!rn(this)) throw on("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!rn(this)) throw on("signal");
          if (this._abortController === undefined) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(t2 = undefined) {
          if (!rn(this)) throw on("error");
          this._controlledWritableStream._state === "writable" && Do(this, t2);
        }
        [Ft2](t2) {
          const r = this._abortAlgorithm(t2);
          return Jt2(this), r;
        }
        [Qn2]() {
          Be(this);
        }
      };
      n(Tn, "WritableStreamDefaultController");
      let ke = Tn;
      Object.defineProperties(ke.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ke.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
      function rn(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof ke;
      }
      n(rn, "IsWritableStreamDefaultController");
      function Lo(e, t2, r, s2, f2, c, d2, m) {
        t2._controlledWritableStream = e, e._writableStreamController = t2, t2._queue = undefined, t2._queueTotalSize = undefined, Be(t2), t2._abortReason = undefined, t2._abortController = wa2(), t2._started = false, t2._strategySizeAlgorithm = m, t2._strategyHWM = d2, t2._writeAlgorithm = s2, t2._closeAlgorithm = f2, t2._abortAlgorithm = c;
        const R2 = nn(t2);
        tn(e, R2);
        const y = r(), C = T(y);
        _(C, () => (t2._started = true, Xt2(t2), null), (P) => (t2._started = true, Jr(e, P), null));
      }
      n(Lo, "SetUpWritableStreamDefaultController");
      function Ia(e, t2, r, s2) {
        const f2 = Object.create(ke.prototype);
        let c, d2, m, R2;
        t2.start !== undefined ? c = n(() => t2.start(f2), "startAlgorithm") : c = n(() => {
        }, "startAlgorithm"), t2.write !== undefined ? d2 = n((y) => t2.write(y, f2), "writeAlgorithm") : d2 = n(() => T(undefined), "writeAlgorithm"), t2.close !== undefined ? m = n(() => t2.close(), "closeAlgorithm") : m = n(() => T(undefined), "closeAlgorithm"), t2.abort !== undefined ? R2 = n((y) => t2.abort(y), "abortAlgorithm") : R2 = n(() => T(undefined), "abortAlgorithm"), Lo(e, f2, c, d2, m, R2, r, s2);
      }
      n(Ia, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
      function Jt2(e) {
        e._writeAlgorithm = undefined, e._closeAlgorithm = undefined, e._abortAlgorithm = undefined, e._strategySizeAlgorithm = undefined;
      }
      n(Jt2, "WritableStreamDefaultControllerClearAlgorithms");
      function Fa(e) {
        Nr(e, jo2, 0), Xt2(e);
      }
      n(Fa, "WritableStreamDefaultControllerClose");
      function ja2(e, t2) {
        try {
          return e._strategySizeAlgorithm(t2);
        } catch (r) {
          return wt2(e, r), 1;
        }
      }
      n(ja2, "WritableStreamDefaultControllerGetChunkSize");
      function $o2(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      n($o2, "WritableStreamDefaultControllerGetDesiredSize");
      function La(e, t2, r) {
        try {
          Nr(e, t2, r);
        } catch (f2) {
          wt2(e, f2);
          return;
        }
        const s2 = e._controlledWritableStream;
        if (!he2(s2) && s2._state === "writable") {
          const f2 = nn(e);
          tn(s2, f2);
        }
        Xt2(e);
      }
      n(La, "WritableStreamDefaultControllerWrite");
      function Xt2(e) {
        const t2 = e._controlledWritableStream;
        if (!e._started || t2._inFlightWriteRequest !== undefined) return;
        if (t2._state === "erroring") {
          en2(t2);
          return;
        }
        if (e._queue.length === 0) return;
        const s2 = Ji2(e);
        s2 === jo2 ? $a2(e) : Da2(e, s2);
      }
      n(Xt2, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
      function wt2(e, t2) {
        e._controlledWritableStream._state === "writable" && Do(e, t2);
      }
      n(wt2, "WritableStreamDefaultControllerErrorIfNeeded");
      function $a2(e) {
        const t2 = e._controlledWritableStream;
        Ba(t2), xr(e);
        const r = e._closeAlgorithm();
        Jt2(e), _(r, () => (va(t2), null), (s2) => (Ea2(t2, s2), null));
      }
      n($a2, "WritableStreamDefaultControllerProcessClose");
      function Da2(e, t2) {
        const r = e._controlledWritableStream;
        ka(r);
        const s2 = e._writeAlgorithm(t2);
        _(s2, () => {
          Ca2(r);
          const f2 = r._state;
          if (xr(e), !he2(r) && f2 === "writable") {
            const c = nn(e);
            tn(r, c);
          }
          return Xt2(e), null;
        }, (f2) => (r._state === "writable" && Jt2(e), Pa2(r, f2), null));
      }
      n(Da2, "WritableStreamDefaultControllerProcessWrite");
      function nn(e) {
        return $o2(e) <= 0;
      }
      n(nn, "WritableStreamDefaultControllerGetBackpressure");
      function Do(e, t2) {
        const r = e._controlledWritableStream;
        Jt2(e), Xr(r, t2);
      }
      n(Do, "WritableStreamDefaultControllerError");
      function er(e) {
        return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
      }
      n(er, "streamBrandCheckException$2");
      function on(e) {
        return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
      }
      n(on, "defaultControllerBrandCheckException$2");
      function Le2(e) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
      }
      n(Le2, "defaultWriterBrandCheckException");
      function Rt2(e) {
        return new TypeError("Cannot " + e + " a stream using a released writer");
      }
      n(Rt2, "defaultWriterLockException");
      function tr(e) {
        e._closedPromise = E((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r, e._closedPromiseState = "pending";
        });
      }
      n(tr, "defaultWriterClosedPromiseInitialize");
      function Mo2(e, t2) {
        tr(e), an(e, t2);
      }
      n(Mo2, "defaultWriterClosedPromiseInitializeAsRejected");
      function Ma(e) {
        tr(e), Uo2(e);
      }
      n(Ma, "defaultWriterClosedPromiseInitializeAsResolved");
      function an(e, t2) {
        e._closedPromise_reject !== undefined && (Q2(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined, e._closedPromiseState = "rejected");
      }
      n(an, "defaultWriterClosedPromiseReject");
      function Ua2(e, t2) {
        Mo2(e, t2);
      }
      n(Ua2, "defaultWriterClosedPromiseResetToRejected");
      function Uo2(e) {
        e._closedPromise_resolve !== undefined && (e._closedPromise_resolve(undefined), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined, e._closedPromiseState = "resolved");
      }
      n(Uo2, "defaultWriterClosedPromiseResolve");
      function rr(e) {
        e._readyPromise = E((t2, r) => {
          e._readyPromise_resolve = t2, e._readyPromise_reject = r;
        }), e._readyPromiseState = "pending";
      }
      n(rr, "defaultWriterReadyPromiseInitialize");
      function sn(e, t2) {
        rr(e), No(e, t2);
      }
      n(sn, "defaultWriterReadyPromiseInitializeAsRejected");
      function xo(e) {
        rr(e), ln(e);
      }
      n(xo, "defaultWriterReadyPromiseInitializeAsResolved");
      function No(e, t2) {
        e._readyPromise_reject !== undefined && (Q2(e._readyPromise), e._readyPromise_reject(t2), e._readyPromise_resolve = undefined, e._readyPromise_reject = undefined, e._readyPromiseState = "rejected");
      }
      n(No, "defaultWriterReadyPromiseReject");
      function xa(e) {
        rr(e);
      }
      n(xa, "defaultWriterReadyPromiseReset");
      function Na(e, t2) {
        sn(e, t2);
      }
      n(Na, "defaultWriterReadyPromiseResetToRejected");
      function ln(e) {
        e._readyPromise_resolve !== undefined && (e._readyPromise_resolve(undefined), e._readyPromise_resolve = undefined, e._readyPromise_reject = undefined, e._readyPromiseState = "fulfilled");
      }
      n(ln, "defaultWriterReadyPromiseResolve");
      function Ha() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof n$1 < "u") return n$1;
      }
      n(Ha, "getGlobals");
      const un = Ha();
      function Va2(e) {
        if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException") return false;
        try {
          return new e(), true;
        } catch {
          return false;
        }
      }
      n(Va2, "isDOMExceptionConstructor");
      function Qa() {
        const e = un == null ? undefined : un.DOMException;
        return Va2(e) ? e : undefined;
      }
      n(Qa, "getFromGlobal");
      function Ya2() {
        const e = n(function(r, s2) {
          this.message = r || "", this.name = s2 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }, "DOMException");
        return h2(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
      }
      n(Ya2, "createPolyfill");
      const Ga2 = Qa() || Ya2();
      function Ho(e, t2, r, s2, f2, c) {
        const d2 = Qe2(e), m = ko(t2);
        e._disturbed = true;
        let R2 = false, y = T(undefined);
        return E((C, P) => {
          let B;
          if (c !== undefined) {
            if (B = n(() => {
              const S = c.reason !== undefined ? c.reason : new Ga2("Aborted", "AbortError"), v = [];
              s2 || v.push(() => t2._state === "writable" ? Zt2(t2, S) : T(undefined)), f2 || v.push(() => e._state === "readable" ? ie(e, S) : T(undefined)), N(() => Promise.all(v.map((k2) => k2())), true, S);
            }, "abortAlgorithm"), c.aborted) {
              B();
              return;
            }
            c.addEventListener("abort", B);
          }
          function ae() {
            return E((S, v) => {
              function k2(Y) {
                Y ? S() : q(nt(), k2, v);
              }
              n(k2, "next"), k2(false);
            });
          }
          n(ae, "pipeLoop");
          function nt() {
            return R2 ? T(true) : q(m._readyPromise, () => E((S, v) => {
              mt(d2, { _chunkSteps: (k2) => {
                y = q(Fo(m, k2), undefined, u), S(false);
              }, _closeSteps: () => S(true), _errorSteps: v });
            }));
          }
          if (n(nt, "pipeStep"), Te(e, d2._closedPromise, (S) => (s2 ? J(true, S) : N(() => Zt2(t2, S), true, S), null)), Te(t2, m._closedPromise, (S) => (f2 ? J(true, S) : N(() => ie(e, S), true, S), null)), x(e, d2._closedPromise, () => (r ? J() : N(() => qa2(m)), null)), he2(t2) || t2._state === "closed") {
            const S = new TypeError("the destination writable stream closed before all data could be piped to it");
            f2 ? J(true, S) : N(() => ie(e, S), true, S);
          }
          Q2(ae());
          function Oe() {
            const S = y;
            return q(y, () => S !== y ? Oe() : undefined);
          }
          n(Oe, "waitForWritesToFinish");
          function Te(S, v, k2) {
            S._state === "errored" ? k2(S._storedError) : I(v, k2);
          }
          n(Te, "isOrBecomesErrored");
          function x(S, v, k2) {
            S._state === "closed" ? k2() : V(v, k2);
          }
          n(x, "isOrBecomesClosed");
          function N(S, v, k2) {
            if (R2) return;
            R2 = true, t2._state === "writable" && !he2(t2) ? V(Oe(), Y) : Y();
            function Y() {
              return _(S(), () => Ce(v, k2), (ot2) => Ce(true, ot2)), null;
            }
            n(Y, "doTheRest");
          }
          n(N, "shutdownWithAction");
          function J(S, v) {
            R2 || (R2 = true, t2._state === "writable" && !he2(t2) ? V(Oe(), () => Ce(S, v)) : Ce(S, v));
          }
          n(J, "shutdown");
          function Ce(S, v) {
            return Io(m), _e(d2), c !== undefined && c.removeEventListener("abort", B), S ? P(v) : C(undefined), null;
          }
          n(Ce, "finalize");
        });
      }
      n(Ho, "ReadableStreamPipeTo");
      const Cn2 = class Cn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!nr(this)) throw ir2("desiredSize");
          return fn2(this);
        }
        close() {
          if (!nr(this)) throw ir2("close");
          if (!Je(this)) throw new TypeError("The stream is not in a state that permits close");
          $e2(this);
        }
        enqueue(t2 = undefined) {
          if (!nr(this)) throw ir2("enqueue");
          if (!Je(this)) throw new TypeError("The stream is not in a state that permits enqueue");
          return Ke2(this, t2);
        }
        error(t2 = undefined) {
          if (!nr(this)) throw ir2("error");
          oe(this, t2);
        }
        [Ar](t2) {
          Be(this);
          const r = this._cancelAlgorithm(t2);
          return or(this), r;
        }
        [Br](t2) {
          const r = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const s2 = xr(this);
            this._closeRequested && this._queue.length === 0 ? (or(this), Pt(r)) : Tt2(this), t2._chunkSteps(s2);
          } else eo(r, t2), Tt2(this);
        }
        [kr]() {
        }
      };
      n(Cn2, "ReadableStreamDefaultController");
      let ne2 = Cn2;
      Object.defineProperties(ne2.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h2(ne2.prototype.close, "close"), h2(ne2.prototype.enqueue, "enqueue"), h2(ne2.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ne2.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
      function nr(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof ne2;
      }
      n(nr, "IsReadableStreamDefaultController");
      function Tt2(e) {
        if (!Vo(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        _(r, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Tt2(e)), null), (s2) => (oe(e, s2), null));
      }
      n(Tt2, "ReadableStreamDefaultControllerCallPullIfNeeded");
      function Vo(e) {
        const t2 = e._controlledReadableStream;
        return !Je(e) || !e._started ? false : !!(qe(t2) && Lt2(t2) > 0 || fn2(e) > 0);
      }
      n(Vo, "ReadableStreamDefaultControllerShouldCallPull");
      function or(e) {
        e._pullAlgorithm = undefined, e._cancelAlgorithm = undefined, e._strategySizeAlgorithm = undefined;
      }
      n(or, "ReadableStreamDefaultControllerClearAlgorithms");
      function $e2(e) {
        if (!Je(e)) return;
        const t2 = e._controlledReadableStream;
        e._closeRequested = true, e._queue.length === 0 && (or(e), Pt(t2));
      }
      n($e2, "ReadableStreamDefaultControllerClose");
      function Ke2(e, t2) {
        if (!Je(e)) return;
        const r = e._controlledReadableStream;
        if (qe(r) && Lt2(r) > 0) Lr(r, t2, false);
        else {
          let s2;
          try {
            s2 = e._strategySizeAlgorithm(t2);
          } catch (f2) {
            throw oe(e, f2), f2;
          }
          try {
            Nr(e, t2, s2);
          } catch (f2) {
            throw oe(e, f2), f2;
          }
        }
        Tt2(e);
      }
      n(Ke2, "ReadableStreamDefaultControllerEnqueue");
      function oe(e, t2) {
        const r = e._controlledReadableStream;
        r._state === "readable" && (Be(e), or(e), Zo2(r, t2));
      }
      n(oe, "ReadableStreamDefaultControllerError");
      function fn2(e) {
        const t2 = e._controlledReadableStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n(fn2, "ReadableStreamDefaultControllerGetDesiredSize");
      function Za2(e) {
        return !Vo(e);
      }
      n(Za2, "ReadableStreamDefaultControllerHasBackpressure");
      function Je(e) {
        const t2 = e._controlledReadableStream._state;
        return !e._closeRequested && t2 === "readable";
      }
      n(Je, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
      function Qo(e, t2, r, s2, f2, c, d2) {
        t2._controlledReadableStream = e, t2._queue = undefined, t2._queueTotalSize = undefined, Be(t2), t2._started = false, t2._closeRequested = false, t2._pullAgain = false, t2._pulling = false, t2._strategySizeAlgorithm = d2, t2._strategyHWM = c, t2._pullAlgorithm = s2, t2._cancelAlgorithm = f2, e._readableStreamController = t2;
        const m = r();
        _(T(m), () => (t2._started = true, Tt2(t2), null), (R2) => (oe(t2, R2), null));
      }
      n(Qo, "SetUpReadableStreamDefaultController");
      function Ka(e, t2, r, s2) {
        const f2 = Object.create(ne2.prototype);
        let c, d2, m;
        t2.start !== undefined ? c = n(() => t2.start(f2), "startAlgorithm") : c = n(() => {
        }, "startAlgorithm"), t2.pull !== undefined ? d2 = n(() => t2.pull(f2), "pullAlgorithm") : d2 = n(() => T(undefined), "pullAlgorithm"), t2.cancel !== undefined ? m = n((R2) => t2.cancel(R2), "cancelAlgorithm") : m = n(() => T(undefined), "cancelAlgorithm"), Qo(e, f2, c, d2, m, r, s2);
      }
      n(Ka, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
      function ir2(e) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
      }
      n(ir2, "defaultControllerBrandCheckException$1");
      function Ja2(e, t2) {
        return ze(e._readableStreamController) ? es2(e) : Xa2(e);
      }
      n(Ja2, "ReadableStreamTee");
      function Xa2(e, t2) {
        const r = Qe2(e);
        let s2 = false, f2 = false, c = false, d2 = false, m, R2, y, C, P;
        const B = E((x) => {
          P = x;
        });
        function ae() {
          return s2 ? (f2 = true, T(undefined)) : (s2 = true, mt(r, { _chunkSteps: (N) => {
            ge(() => {
              f2 = false;
              const J = N, Ce = N;
              c || Ke2(y._readableStreamController, J), d2 || Ke2(C._readableStreamController, Ce), s2 = false, f2 && ae();
            });
          }, _closeSteps: () => {
            s2 = false, c || $e2(y._readableStreamController), d2 || $e2(C._readableStreamController), (!c || !d2) && P(undefined);
          }, _errorSteps: () => {
            s2 = false;
          } }), T(undefined));
        }
        n(ae, "pullAlgorithm");
        function nt(x) {
          if (c = true, m = x, d2) {
            const N = yt2([m, R2]), J = ie(e, N);
            P(J);
          }
          return B;
        }
        n(nt, "cancel1Algorithm");
        function Oe(x) {
          if (d2 = true, R2 = x, c) {
            const N = yt2([m, R2]), J = ie(e, N);
            P(J);
          }
          return B;
        }
        n(Oe, "cancel2Algorithm");
        function Te() {
        }
        return n(Te, "startAlgorithm"), y = Ct(Te, ae, nt), C = Ct(Te, ae, Oe), I(r._closedPromise, (x) => (oe(y._readableStreamController, x), oe(C._readableStreamController, x), (!c || !d2) && P(undefined), null)), [y, C];
      }
      n(Xa2, "ReadableStreamDefaultTee");
      function es2(e) {
        let t2 = Qe2(e), r = false, s2 = false, f2 = false, c = false, d2 = false, m, R2, y, C, P;
        const B = E((S) => {
          P = S;
        });
        function ae(S) {
          I(S._closedPromise, (v) => (S !== t2 || (K2(y._readableStreamController, v), K2(C._readableStreamController, v), (!c || !d2) && P(undefined)), null));
        }
        n(ae, "forwardReaderError");
        function nt() {
          Fe(t2) && (_e(t2), t2 = Qe2(e), ae(t2)), mt(t2, { _chunkSteps: (v) => {
            ge(() => {
              s2 = false, f2 = false;
              const k2 = v;
              let Y = v;
              if (!c && !d2) try {
                Y = fo2(v);
              } catch (ot2) {
                K2(y._readableStreamController, ot2), K2(C._readableStreamController, ot2), P(ie(e, ot2));
                return;
              }
              c || Nt2(y._readableStreamController, k2), d2 || Nt2(C._readableStreamController, Y), r = false, s2 ? Te() : f2 && x();
            });
          }, _closeSteps: () => {
            r = false, c || gt2(y._readableStreamController), d2 || gt2(C._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Ht(y._readableStreamController, 0), C._readableStreamController._pendingPullIntos.length > 0 && Ht(C._readableStreamController, 0), (!c || !d2) && P(undefined);
          }, _errorSteps: () => {
            r = false;
          } });
        }
        n(nt, "pullWithDefaultReader");
        function Oe(S, v) {
          Ee(t2) && (_e(t2), t2 = Co(e), ae(t2));
          const k2 = v ? C : y, Y = v ? y : C;
          Eo2(t2, S, 1, { _chunkSteps: (it) => {
            ge(() => {
              s2 = false, f2 = false;
              const at = v ? d2 : c;
              if (v ? c : d2) at || Vt2(k2._readableStreamController, it);
              else {
                let ui;
                try {
                  ui = fo2(it);
                } catch (kn2) {
                  K2(k2._readableStreamController, kn2), K2(Y._readableStreamController, kn2), P(ie(e, kn2));
                  return;
                }
                at || Vt2(k2._readableStreamController, it), Nt2(Y._readableStreamController, ui);
              }
              r = false, s2 ? Te() : f2 && x();
            });
          }, _closeSteps: (it) => {
            r = false;
            const at = v ? d2 : c, fr2 = v ? c : d2;
            at || gt2(k2._readableStreamController), fr2 || gt2(Y._readableStreamController), it !== undefined && (at || Vt2(k2._readableStreamController, it), !fr2 && Y._readableStreamController._pendingPullIntos.length > 0 && Ht(Y._readableStreamController, 0)), (!at || !fr2) && P(undefined);
          }, _errorSteps: () => {
            r = false;
          } });
        }
        n(Oe, "pullWithBYOBReader");
        function Te() {
          if (r) return s2 = true, T(undefined);
          r = true;
          const S = Gr(y._readableStreamController);
          return S === null ? nt() : Oe(S._view, false), T(undefined);
        }
        n(Te, "pull1Algorithm");
        function x() {
          if (r) return f2 = true, T(undefined);
          r = true;
          const S = Gr(C._readableStreamController);
          return S === null ? nt() : Oe(S._view, true), T(undefined);
        }
        n(x, "pull2Algorithm");
        function N(S) {
          if (c = true, m = S, d2) {
            const v = yt2([m, R2]), k2 = ie(e, v);
            P(k2);
          }
          return B;
        }
        n(N, "cancel1Algorithm");
        function J(S) {
          if (d2 = true, R2 = S, c) {
            const v = yt2([m, R2]), k2 = ie(e, v);
            P(k2);
          }
          return B;
        }
        n(J, "cancel2Algorithm");
        function Ce() {
        }
        return n(Ce, "startAlgorithm"), y = Go2(Ce, Te, N), C = Go2(Ce, x, J), ae(t2), [y, C];
      }
      n(es2, "ReadableByteStreamTee");
      function ts2(e) {
        return l2(e) && typeof e.getReader < "u";
      }
      n(ts2, "isReadableStreamLike");
      function rs(e) {
        return ts2(e) ? os(e.getReader()) : ns2(e);
      }
      n(rs, "ReadableStreamFrom");
      function ns2(e) {
        let t2;
        const r = uo2(e, "async"), s2 = u;
        function f2() {
          let d2;
          try {
            d2 = Yi2(r);
          } catch (R2) {
            return b(R2);
          }
          const m = T(d2);
          return F(m, (R2) => {
            if (!l2(R2)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            if (Gi2(R2)) $e2(t2._readableStreamController);
            else {
              const C = Zi2(R2);
              Ke2(t2._readableStreamController, C);
            }
          });
        }
        n(f2, "pullAlgorithm");
        function c(d2) {
          const m = r.iterator;
          let R2;
          try {
            R2 = Mt2(m, "return");
          } catch (P) {
            return b(P);
          }
          if (R2 === undefined) return T(undefined);
          let y;
          try {
            y = z(R2, m, [d2]);
          } catch (P) {
            return b(P);
          }
          const C = T(y);
          return F(C, (P) => {
            if (!l2(P)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
          });
        }
        return n(c, "cancelAlgorithm"), t2 = Ct(s2, f2, c, 0), t2;
      }
      n(ns2, "ReadableStreamFromIterable");
      function os(e) {
        let t2;
        const r = u;
        function s2() {
          let c;
          try {
            c = e.read();
          } catch (d2) {
            return b(d2);
          }
          return F(c, (d2) => {
            if (!l2(d2)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
            if (d2.done) $e2(t2._readableStreamController);
            else {
              const m = d2.value;
              Ke2(t2._readableStreamController, m);
            }
          });
        }
        n(s2, "pullAlgorithm");
        function f2(c) {
          try {
            return T(e.cancel(c));
          } catch (d2) {
            return b(d2);
          }
        }
        return n(f2, "cancelAlgorithm"), t2 = Ct(r, s2, f2, 0), t2;
      }
      n(os, "ReadableStreamFromDefaultReader");
      function is(e, t2) {
        ue(e, t2);
        const r = e, s2 = r == null ? undefined : r.autoAllocateChunkSize, f2 = r == null ? undefined : r.cancel, c = r == null ? undefined : r.pull, d2 = r == null ? undefined : r.start, m = r == null ? undefined : r.type;
        return { autoAllocateChunkSize: s2 === undefined ? undefined : Fr(s2, `${t2} has member 'autoAllocateChunkSize' that`), cancel: f2 === undefined ? undefined : as2(f2, r, `${t2} has member 'cancel' that`), pull: c === undefined ? undefined : ss(c, r, `${t2} has member 'pull' that`), start: d2 === undefined ? undefined : ls(d2, r, `${t2} has member 'start' that`), type: m === undefined ? undefined : us2(m, `${t2} has member 'type' that`) };
      }
      n(is, "convertUnderlyingDefaultOrByteSource");
      function as2(e, t2, r) {
        return Z(e, r), (s2) => j(e, t2, [s2]);
      }
      n(as2, "convertUnderlyingSourceCancelCallback");
      function ss(e, t2, r) {
        return Z(e, r), (s2) => j(e, t2, [s2]);
      }
      n(ss, "convertUnderlyingSourcePullCallback");
      function ls(e, t2, r) {
        return Z(e, r), (s2) => z(e, t2, [s2]);
      }
      n(ls, "convertUnderlyingSourceStartCallback");
      function us2(e, t2) {
        if (e = `${e}`, e !== "bytes") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamType`);
        return e;
      }
      n(us2, "convertReadableStreamType");
      function fs(e, t2) {
        return ue(e, t2), { preventCancel: !!(e == null ? undefined : e.preventCancel) };
      }
      n(fs, "convertIteratorOptions");
      function Yo(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.preventAbort, s2 = e == null ? undefined : e.preventCancel, f2 = e == null ? undefined : e.preventClose, c = e == null ? undefined : e.signal;
        return c !== undefined && cs(c, `${t2} has member 'signal' that`), { preventAbort: !!r, preventCancel: !!s2, preventClose: !!f2, signal: c };
      }
      n(Yo, "convertPipeOptions");
      function cs(e, t2) {
        if (!_a3(e)) throw new TypeError(`${t2} is not an AbortSignal.`);
      }
      n(cs, "assertAbortSignal");
      function ds(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.readable;
        zr2(r, "readable", "ReadableWritablePair"), jr(r, `${t2} has member 'readable' that`);
        const s2 = e == null ? undefined : e.writable;
        return zr2(s2, "writable", "ReadableWritablePair"), Bo(s2, `${t2} has member 'writable' that`), { readable: r, writable: s2 };
      }
      n(ds, "convertReadableWritablePair");
      const Pn = class Pn {
        constructor(t2 = {}, r = {}) {
          t2 === undefined ? t2 = null : Jn2(t2, "First parameter");
          const s2 = Gt(r, "Second parameter"), f2 = is(t2, "First parameter");
          if (cn2(this), f2.type === "bytes") {
            if (s2.size !== undefined) throw new RangeError("The strategy for a byte stream cannot have a size function");
            const c = St(s2, 0);
            aa(this, f2, c);
          } else {
            const c = Yt(s2), d2 = St(s2, 1);
            Ka(this, f2, d2, c);
          }
        }
        get locked() {
          if (!We(this)) throw De("locked");
          return qe(this);
        }
        cancel(t2 = undefined) {
          return We(this) ? qe(this) ? b(new TypeError("Cannot cancel a stream that already has a reader")) : ie(this, t2) : b(De("cancel"));
        }
        getReader(t2 = undefined) {
          if (!We(this)) throw De("getReader");
          return la(t2, "First parameter").mode === undefined ? Qe2(this) : Co(this);
        }
        pipeThrough(t2, r = {}) {
          if (!We(this)) throw De("pipeThrough");
          Se(t2, 1, "pipeThrough");
          const s2 = ds(t2, "First parameter"), f2 = Yo(r, "Second parameter");
          if (qe(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (Ze(s2.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const c = Ho(this, s2.writable, f2.preventClose, f2.preventAbort, f2.preventCancel, f2.signal);
          return Q2(c), s2.readable;
        }
        pipeTo(t2, r = {}) {
          if (!We(this)) return b(De("pipeTo"));
          if (t2 === undefined) return b("Parameter 1 is required in 'pipeTo'.");
          if (!Ge(t2)) return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let s2;
          try {
            s2 = Yo(r, "Second parameter");
          } catch (f2) {
            return b(f2);
          }
          return qe(this) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ze(t2) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Ho(this, t2, s2.preventClose, s2.preventAbort, s2.preventCancel, s2.signal);
        }
        tee() {
          if (!We(this)) throw De("tee");
          const t2 = Ja2(this);
          return yt2(t2);
        }
        values(t2 = undefined) {
          if (!We(this)) throw De("values");
          const r = fs(t2, "First parameter");
          return Vi2(this, r.preventCancel);
        }
        [Ur](t2) {
          return this.values(t2);
        }
        static from(t2) {
          return rs(t2);
        }
      };
      n(Pn, "ReadableStream");
      let L = Pn;
      Object.defineProperties(L, { from: { enumerable: true } }), Object.defineProperties(L.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h2(L.from, "from"), h2(L.prototype.cancel, "cancel"), h2(L.prototype.getReader, "getReader"), h2(L.prototype.pipeThrough, "pipeThrough"), h2(L.prototype.pipeTo, "pipeTo"), h2(L.prototype.tee, "tee"), h2(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(L.prototype, Ur, { value: L.prototype.values, writable: true, configurable: true });
      function Ct(e, t2, r, s2 = 1, f2 = () => 1) {
        const c = Object.create(L.prototype);
        cn2(c);
        const d2 = Object.create(ne2.prototype);
        return Qo(c, d2, e, t2, r, s2, f2), c;
      }
      n(Ct, "CreateReadableStream");
      function Go2(e, t2, r) {
        const s2 = Object.create(L.prototype);
        cn2(s2);
        const f2 = Object.create(te.prototype);
        return To(s2, f2, e, t2, r, 0, undefined), s2;
      }
      n(Go2, "CreateReadableByteStream");
      function cn2(e) {
        e._state = "readable", e._reader = undefined, e._storedError = undefined, e._disturbed = false;
      }
      n(cn2, "InitializeReadableStream");
      function We(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof L;
      }
      n(We, "IsReadableStream");
      function qe(e) {
        return e._reader !== undefined;
      }
      n(qe, "IsReadableStreamLocked");
      function ie(e, t2) {
        if (e._disturbed = true, e._state === "closed") return T(undefined);
        if (e._state === "errored") return b(e._storedError);
        Pt(e);
        const r = e._reader;
        if (r !== undefined && Fe(r)) {
          const f2 = r._readIntoRequests;
          r._readIntoRequests = new D(), f2.forEach((c) => {
            c._closeSteps(undefined);
          });
        }
        const s2 = e._readableStreamController[Ar](t2);
        return F(s2, u);
      }
      n(ie, "ReadableStreamCancel");
      function Pt(e) {
        e._state = "closed";
        const t2 = e._reader;
        if (t2 !== undefined && (Zn2(t2), Ee(t2))) {
          const r = t2._readRequests;
          t2._readRequests = new D(), r.forEach((s2) => {
            s2._closeSteps();
          });
        }
      }
      n(Pt, "ReadableStreamClose");
      function Zo2(e, t2) {
        e._state = "errored", e._storedError = t2;
        const r = e._reader;
        r !== undefined && (Or(r, t2), Ee(r) ? ro(r, t2) : Ao(r, t2));
      }
      n(Zo2, "ReadableStreamError");
      function De(e) {
        return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
      }
      n(De, "streamBrandCheckException$1");
      function Ko(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.highWaterMark;
        return zr2(r, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: Ir(r) };
      }
      n(Ko, "convertQueuingStrategyInit");
      const Jo = n((e) => e.byteLength, "byteLengthSizeFunction");
      h2(Jo, "size");
      const vn2 = class vn {
        constructor(t2) {
          Se(t2, 1, "ByteLengthQueuingStrategy"), t2 = Ko(t2, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!ei2(this)) throw Xo2("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!ei2(this)) throw Xo2("size");
          return Jo;
        }
      };
      n(vn2, "ByteLengthQueuingStrategy");
      let Xe2 = vn2;
      Object.defineProperties(Xe2.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Xe2.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
      function Xo2(e) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
      }
      n(Xo2, "byteLengthBrandCheckException");
      function ei2(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Xe2;
      }
      n(ei2, "IsByteLengthQueuingStrategy");
      const ti = n(() => 1, "countSizeFunction");
      h2(ti, "size");
      const En = class En {
        constructor(t2) {
          Se(t2, 1, "CountQueuingStrategy"), t2 = Ko(t2, "First parameter"), this._countQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!ni2(this)) throw ri2("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!ni2(this)) throw ri2("size");
          return ti;
        }
      };
      n(En, "CountQueuingStrategy");
      let et2 = En;
      Object.defineProperties(et2.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(et2.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
      function ri2(e) {
        return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
      }
      n(ri2, "countBrandCheckException");
      function ni2(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof et2;
      }
      n(ni2, "IsCountQueuingStrategy");
      function hs2(e, t2) {
        ue(e, t2);
        const r = e == null ? undefined : e.cancel, s2 = e == null ? undefined : e.flush, f2 = e == null ? undefined : e.readableType, c = e == null ? undefined : e.start, d2 = e == null ? undefined : e.transform, m = e == null ? undefined : e.writableType;
        return { cancel: r === undefined ? undefined : ys2(r, e, `${t2} has member 'cancel' that`), flush: s2 === undefined ? undefined : ps(s2, e, `${t2} has member 'flush' that`), readableType: f2, start: c === undefined ? undefined : bs2(c, e, `${t2} has member 'start' that`), transform: d2 === undefined ? undefined : ms(d2, e, `${t2} has member 'transform' that`), writableType: m };
      }
      n(hs2, "convertTransformer");
      function ps(e, t2, r) {
        return Z(e, r), (s2) => j(e, t2, [s2]);
      }
      n(ps, "convertTransformerFlushCallback");
      function bs2(e, t2, r) {
        return Z(e, r), (s2) => z(e, t2, [s2]);
      }
      n(bs2, "convertTransformerStartCallback");
      function ms(e, t2, r) {
        return Z(e, r), (s2, f2) => j(e, t2, [s2, f2]);
      }
      n(ms, "convertTransformerTransformCallback");
      function ys2(e, t2, r) {
        return Z(e, r), (s2) => j(e, t2, [s2]);
      }
      n(ys2, "convertTransformerCancelCallback");
      const An = class An {
        constructor(t2 = {}, r = {}, s2 = {}) {
          t2 === undefined && (t2 = null);
          const f2 = Gt(r, "Second parameter"), c = Gt(s2, "Third parameter"), d2 = hs2(t2, "First parameter");
          if (d2.readableType !== undefined) throw new RangeError("Invalid readableType specified");
          if (d2.writableType !== undefined) throw new RangeError("Invalid writableType specified");
          const m = St(c, 0), R2 = Yt(c), y = St(f2, 1), C = Yt(f2);
          let P;
          const B = E((ae) => {
            P = ae;
          });
          gs2(this, B, y, C, m, R2), Ss(this, d2), d2.start !== undefined ? P(d2.start(this._transformStreamController)) : P(undefined);
        }
        get readable() {
          if (!oi2(this)) throw li("readable");
          return this._readable;
        }
        get writable() {
          if (!oi2(this)) throw li("writable");
          return this._writable;
        }
      };
      n(An, "TransformStream");
      let tt2 = An;
      Object.defineProperties(tt2.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(tt2.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
      function gs2(e, t2, r, s2, f2, c) {
        function d2() {
          return t2;
        }
        n(d2, "startAlgorithm");
        function m(B) {
          return Ts2(e, B);
        }
        n(m, "writeAlgorithm");
        function R2(B) {
          return Cs2(e, B);
        }
        n(R2, "abortAlgorithm");
        function y() {
          return Ps(e);
        }
        n(y, "closeAlgorithm"), e._writable = Ra(d2, m, y, R2, r, s2);
        function C() {
          return vs(e);
        }
        n(C, "pullAlgorithm");
        function P(B) {
          return Es(e, B);
        }
        n(P, "cancelAlgorithm"), e._readable = Ct(d2, C, P, f2, c), e._backpressure = undefined, e._backpressureChangePromise = undefined, e._backpressureChangePromise_resolve = undefined, ar(e, true), e._transformStreamController = undefined;
      }
      n(gs2, "InitializeTransformStream");
      function oi2(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof tt2;
      }
      n(oi2, "IsTransformStream");
      function ii(e, t2) {
        oe(e._readable._readableStreamController, t2), dn(e, t2);
      }
      n(ii, "TransformStreamError");
      function dn(e, t2) {
        lr2(e._transformStreamController), wt2(e._writable._writableStreamController, t2), hn(e);
      }
      n(dn, "TransformStreamErrorWritableAndUnblockWrite");
      function hn(e) {
        e._backpressure && ar(e, false);
      }
      n(hn, "TransformStreamUnblockWrite");
      function ar(e, t2) {
        e._backpressureChangePromise !== undefined && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = E((r) => {
          e._backpressureChangePromise_resolve = r;
        }), e._backpressure = t2;
      }
      n(ar, "TransformStreamSetBackpressure");
      const Bn2 = class Bn {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!sr2(this)) throw ur2("desiredSize");
          const t2 = this._controlledTransformStream._readable._readableStreamController;
          return fn2(t2);
        }
        enqueue(t2 = undefined) {
          if (!sr2(this)) throw ur2("enqueue");
          ai2(this, t2);
        }
        error(t2 = undefined) {
          if (!sr2(this)) throw ur2("error");
          ws2(this, t2);
        }
        terminate() {
          if (!sr2(this)) throw ur2("terminate");
          Rs(this);
        }
      };
      n(Bn2, "TransformStreamDefaultController");
      let pe = Bn2;
      Object.defineProperties(pe.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h2(pe.prototype.enqueue, "enqueue"), h2(pe.prototype.error, "error"), h2(pe.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pe.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
      function sr2(e) {
        return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof pe;
      }
      n(sr2, "IsTransformStreamDefaultController");
      function _s2(e, t2, r, s2, f2) {
        t2._controlledTransformStream = e, e._transformStreamController = t2, t2._transformAlgorithm = r, t2._flushAlgorithm = s2, t2._cancelAlgorithm = f2, t2._finishPromise = undefined, t2._finishPromise_resolve = undefined, t2._finishPromise_reject = undefined;
      }
      n(_s2, "SetUpTransformStreamDefaultController");
      function Ss(e, t2) {
        const r = Object.create(pe.prototype);
        let s2, f2, c;
        t2.transform !== undefined ? s2 = n((d2) => t2.transform(d2, r), "transformAlgorithm") : s2 = n((d2) => {
          try {
            return ai2(r, d2), T(void 0);
          } catch (m) {
            return b(m);
          }
        }, "transformAlgorithm"), t2.flush !== undefined ? f2 = n(() => t2.flush(r), "flushAlgorithm") : f2 = n(() => T(undefined), "flushAlgorithm"), t2.cancel !== undefined ? c = n((d2) => t2.cancel(d2), "cancelAlgorithm") : c = n(() => T(undefined), "cancelAlgorithm"), _s2(e, r, s2, f2, c);
      }
      n(Ss, "SetUpTransformStreamDefaultControllerFromTransformer");
      function lr2(e) {
        e._transformAlgorithm = undefined, e._flushAlgorithm = undefined, e._cancelAlgorithm = undefined;
      }
      n(lr2, "TransformStreamDefaultControllerClearAlgorithms");
      function ai2(e, t2) {
        const r = e._controlledTransformStream, s2 = r._readable._readableStreamController;
        if (!Je(s2)) throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          Ke2(s2, t2);
        } catch (c) {
          throw dn(r, c), r._readable._storedError;
        }
        Za2(s2) !== r._backpressure && ar(r, true);
      }
      n(ai2, "TransformStreamDefaultControllerEnqueue");
      function ws2(e, t2) {
        ii(e._controlledTransformStream, t2);
      }
      n(ws2, "TransformStreamDefaultControllerError");
      function si2(e, t2) {
        const r = e._transformAlgorithm(t2);
        return F(r, undefined, (s2) => {
          throw ii(e._controlledTransformStream, s2), s2;
        });
      }
      n(si2, "TransformStreamDefaultControllerPerformTransform");
      function Rs(e) {
        const t2 = e._controlledTransformStream, r = t2._readable._readableStreamController;
        $e2(r);
        const s2 = new TypeError("TransformStream terminated");
        dn(t2, s2);
      }
      n(Rs, "TransformStreamDefaultControllerTerminate");
      function Ts2(e, t2) {
        const r = e._transformStreamController;
        if (e._backpressure) {
          const s2 = e._backpressureChangePromise;
          return F(s2, () => {
            const f2 = e._writable;
            if (f2._state === "erroring") throw f2._storedError;
            return si2(r, t2);
          });
        }
        return si2(r, t2);
      }
      n(Ts2, "TransformStreamDefaultSinkWriteAlgorithm");
      function Cs2(e, t2) {
        const r = e._transformStreamController;
        if (r._finishPromise !== undefined) return r._finishPromise;
        const s2 = e._readable;
        r._finishPromise = E((c, d2) => {
          r._finishPromise_resolve = c, r._finishPromise_reject = d2;
        });
        const f2 = r._cancelAlgorithm(t2);
        return lr2(r), _(f2, () => (s2._state === "errored" ? rt(r, s2._storedError) : (oe(s2._readableStreamController, t2), pn(r)), null), (c) => (oe(s2._readableStreamController, c), rt(r, c), null)), r._finishPromise;
      }
      n(Cs2, "TransformStreamDefaultSinkAbortAlgorithm");
      function Ps(e) {
        const t2 = e._transformStreamController;
        if (t2._finishPromise !== undefined) return t2._finishPromise;
        const r = e._readable;
        t2._finishPromise = E((f2, c) => {
          t2._finishPromise_resolve = f2, t2._finishPromise_reject = c;
        });
        const s2 = t2._flushAlgorithm();
        return lr2(t2), _(s2, () => (r._state === "errored" ? rt(t2, r._storedError) : ($e2(r._readableStreamController), pn(t2)), null), (f2) => (oe(r._readableStreamController, f2), rt(t2, f2), null)), t2._finishPromise;
      }
      n(Ps, "TransformStreamDefaultSinkCloseAlgorithm");
      function vs(e) {
        return ar(e, false), e._backpressureChangePromise;
      }
      n(vs, "TransformStreamDefaultSourcePullAlgorithm");
      function Es(e, t2) {
        const r = e._transformStreamController;
        if (r._finishPromise !== undefined) return r._finishPromise;
        const s2 = e._writable;
        r._finishPromise = E((c, d2) => {
          r._finishPromise_resolve = c, r._finishPromise_reject = d2;
        });
        const f2 = r._cancelAlgorithm(t2);
        return lr2(r), _(f2, () => (s2._state === "errored" ? rt(r, s2._storedError) : (wt2(s2._writableStreamController, t2), hn(e), pn(r)), null), (c) => (wt2(s2._writableStreamController, c), hn(e), rt(r, c), null)), r._finishPromise;
      }
      n(Es, "TransformStreamDefaultSourceCancelAlgorithm");
      function ur2(e) {
        return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
      }
      n(ur2, "defaultControllerBrandCheckException");
      function pn(e) {
        e._finishPromise_resolve !== undefined && (e._finishPromise_resolve(), e._finishPromise_resolve = undefined, e._finishPromise_reject = undefined);
      }
      n(pn, "defaultControllerFinishPromiseResolve");
      function rt(e, t2) {
        e._finishPromise_reject !== undefined && (Q2(e._finishPromise), e._finishPromise_reject(t2), e._finishPromise_resolve = undefined, e._finishPromise_reject = undefined);
      }
      n(rt, "defaultControllerFinishPromiseReject");
      function li(e) {
        return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
      }
      n(li, "streamBrandCheckException"), a3.ByteLengthQueuingStrategy = Xe2, a3.CountQueuingStrategy = et2, a3.ReadableByteStreamController = te, a3.ReadableStream = L, a3.ReadableStreamBYOBReader = ce, a3.ReadableStreamBYOBRequest = Re, a3.ReadableStreamDefaultController = ne2, a3.ReadableStreamDefaultReader = fe, a3.TransformStream = tt2, a3.TransformStreamDefaultController = pe, a3.WritableStream = de, a3.WritableStreamDefaultController = ke, a3.WritableStreamDefaultWriter = re;
    });
  }(pr, pr.exports)), pr.exports;
}
n(Ls, "requirePonyfill_es2018");
const $s = 65536;
if (!globalThis.ReadableStream) try {
  const i = require("node:process"), { emitWarning: o2 } = i;
  try {
    i.emitWarning = () => {
    }, Object.assign(globalThis, require("node:stream/web")), i.emitWarning = o2;
  } catch (a3) {
    throw i.emitWarning = o2, a3;
  }
} catch {
  Object.assign(globalThis, Ls());
}
try {
  const { Blob: i } = require("buffer");
  i && !i.prototype.stream && (i.prototype.stream = n(function(a3) {
    let u = 0;
    const l2 = this;
    return new ReadableStream({ type: "bytes", async pull(p2) {
      const g2 = await l2.slice(u, Math.min(l2.size, u + $s)).arrayBuffer();
      u += g2.byteLength, p2.enqueue(new Uint8Array(g2)), u === l2.size && p2.close();
    } });
  }, "name"));
} catch {
}
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
const hi = 65536;
async function* qn$1(i, o2 = true) {
  for (const a3 of i) if ("stream" in a3) yield* a3.stream();
  else if (ArrayBuffer.isView(a3)) if (o2) {
    let u = a3.byteOffset;
    const l2 = a3.byteOffset + a3.byteLength;
    for (; u !== l2; ) {
      const p2 = Math.min(l2 - u, hi), h2 = a3.buffer.slice(u, u + p2);
      u += h2.byteLength, yield new Uint8Array(h2);
    }
  } else yield a3;
  else {
    let u = 0, l2 = a3;
    for (; u !== l2.size; ) {
      const h2 = await l2.slice(u, Math.min(l2.size, u + hi)).arrayBuffer();
      u += h2.byteLength, yield new Uint8Array(h2);
    }
  }
}
n(qn$1, "toIterator");
const pi$1 = (Ve = class {
  constructor(o2 = [], a3 = {}) {
    be$1(this, ve, []);
    be$1(this, kt$1, "");
    be$1(this, bt, 0);
    be$1(this, Cr, "transparent");
    if (typeof o2 != "object" || o2 === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof o2[Symbol.iterator] != "function") throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof a3 != "object" && typeof a3 != "function") throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    a3 === null && (a3 = {});
    const u = new TextEncoder();
    for (const p2 of o2) {
      let h2;
      ArrayBuffer.isView(p2) ? h2 = new Uint8Array(p2.buffer.slice(p2.byteOffset, p2.byteOffset + p2.byteLength)) : p2 instanceof ArrayBuffer ? h2 = new Uint8Array(p2.slice(0)) : p2 instanceof Ve ? h2 = p2 : h2 = u.encode(`${p2}`), X(this, bt, O$1(this, bt) + (ArrayBuffer.isView(h2) ? h2.byteLength : h2.size)), O$1(this, ve).push(h2);
    }
    X(this, Cr, `${a3.endings === undefined ? "transparent" : a3.endings}`);
    const l2 = a3.type === undefined ? "" : String(a3.type);
    X(this, kt$1, /^[\x20-\x7E]*$/.test(l2) ? l2 : "");
  }
  get size() {
    return O$1(this, bt);
  }
  get type() {
    return O$1(this, kt$1);
  }
  async text() {
    const o2 = new TextDecoder();
    let a3 = "";
    for await (const u of qn$1(O$1(this, ve), false)) a3 += o2.decode(u, { stream: true });
    return a3 += o2.decode(), a3;
  }
  async arrayBuffer() {
    const o2 = new Uint8Array(this.size);
    let a3 = 0;
    for await (const u of qn$1(O$1(this, ve), false)) o2.set(u, a3), a3 += u.length;
    return o2.buffer;
  }
  stream() {
    const o2 = qn$1(O$1(this, ve), true);
    return new globalThis.ReadableStream({ type: "bytes", async pull(a3) {
      const u = await o2.next();
      u.done ? a3.close() : a3.enqueue(u.value);
    }, async cancel() {
      await o2.return();
    } });
  }
  slice(o2 = 0, a3 = this.size, u = "") {
    const { size: l2 } = this;
    let p2 = o2 < 0 ? Math.max(l2 + o2, 0) : Math.min(o2, l2), h2 = a3 < 0 ? Math.max(l2 + a3, 0) : Math.min(a3, l2);
    const g2 = Math.max(h2 - p2, 0), A2 = O$1(this, ve), w = [];
    let E = 0;
    for (const b of A2) {
      if (E >= g2) break;
      const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
      if (p2 && q <= p2) p2 -= q, h2 -= q;
      else {
        let _;
        ArrayBuffer.isView(b) ? (_ = b.subarray(p2, Math.min(q, h2)), E += _.byteLength) : (_ = b.slice(p2, Math.min(q, h2)), E += _.size), h2 -= q, w.push(_), p2 = 0;
      }
    }
    const T = new Ve([], { type: String(u).toLowerCase() });
    return X(T, bt, g2), X(T, ve, w), T;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](o2) {
    return o2 && typeof o2 == "object" && typeof o2.constructor == "function" && (typeof o2.stream == "function" || typeof o2.arrayBuffer == "function") && /^(Blob|File)$/.test(o2[Symbol.toStringTag]);
  }
}, ve = /* @__PURE__ */ new WeakMap(), kt$1 = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), n(Ve, "Blob"), Ve);
Object.defineProperties(pi$1.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
const Ds = pi$1, ut = Ds, Ms = (Ot$1 = class extends ut {
  constructor(a3, u, l2 = {}) {
    if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(a3, l2);
    be$1(this, Wt$1, 0);
    be$1(this, qt, "");
    l2 === null && (l2 = {});
    const p2 = l2.lastModified === undefined ? Date.now() : Number(l2.lastModified);
    Number.isNaN(p2) || X(this, Wt$1, p2), X(this, qt, String(u));
  }
  get name() {
    return O$1(this, qt);
  }
  get lastModified() {
    return O$1(this, Wt$1);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](a3) {
    return !!a3 && a3 instanceof ut && /^(File)$/.test(a3[Symbol.toStringTag]);
  }
}, Wt$1 = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), n(Ot$1, "File"), Ot$1), Us = Ms, On$1 = Us;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: Et, iterator: xs, hasInstance: Ns } = Symbol, bi$1 = Math.random, Hs = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), mi$1 = n((i, o2, a3) => (i += "", /^(Blob|File)$/.test(o2 && o2[Et]) ? [(a3 = a3 !== undefined ? a3 + "" : o2[Et] == "File" ? o2.name : "blob", i), o2.name !== a3 || o2[Et] == "blob" ? new On$1([o2], a3, o2) : o2] : [i, o2 + ""]), "f"), zn = n((i, o2) => (o2 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), Me$1 = n((i, o2, a3) => {
  if (o2.length < a3) throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a3} arguments required, but only ${o2.length} present.`);
}, "x");
const br = (zt$1 = class {
  constructor(...o2) {
    be$1(this, ee, []);
    if (o2.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [Et]() {
    return "FormData";
  }
  [xs]() {
    return this.entries();
  }
  static [Ns](o2) {
    return o2 && typeof o2 == "object" && o2[Et] === "FormData" && !Hs.some((a3) => typeof o2[a3] != "function");
  }
  append(...o2) {
    Me$1("append", arguments, 2), O$1(this, ee).push(mi$1(...o2));
  }
  delete(o2) {
    Me$1("delete", arguments, 1), o2 += "", X(this, ee, O$1(this, ee).filter(([a3]) => a3 !== o2));
  }
  get(o2) {
    Me$1("get", arguments, 1), o2 += "";
    for (var a3 = O$1(this, ee), u = a3.length, l2 = 0; l2 < u; l2++) if (a3[l2][0] === o2) return a3[l2][1];
    return null;
  }
  getAll(o2, a3) {
    return Me$1("getAll", arguments, 1), a3 = [], o2 += "", O$1(this, ee).forEach((u) => u[0] === o2 && a3.push(u[1])), a3;
  }
  has(o2) {
    return Me$1("has", arguments, 1), o2 += "", O$1(this, ee).some((a3) => a3[0] === o2);
  }
  forEach(o2, a3) {
    Me$1("forEach", arguments, 1);
    for (var [u, l2] of this) o2.call(a3, l2, u, this);
  }
  set(...o2) {
    Me$1("set", arguments, 2);
    var a3 = [], u = true;
    o2 = mi$1(...o2), O$1(this, ee).forEach((l2) => {
      l2[0] === o2[0] ? u && (u = !a3.push(o2)) : a3.push(l2);
    }), u && a3.push(o2), X(this, ee, a3);
  }
  *entries() {
    yield* O$1(this, ee);
  }
  *keys() {
    for (var [o2] of this) yield o2;
  }
  *values() {
    for (var [, o2] of this) yield o2;
  }
}, ee = /* @__PURE__ */ new WeakMap(), n(zt$1, "FormData"), zt$1);
function Vs(i, o2 = ut) {
  var a3 = `${bi$1()}${bi$1()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), u = [], l2 = `--${a3}\r
Content-Disposition: form-data; name="`;
  return i.forEach((p2, h2) => typeof p2 == "string" ? u.push(l2 + zn(h2) + `"\r
\r
${p2.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : u.push(l2 + zn(h2) + `"; filename="${zn(p2.name, 1)}"\r
Content-Type: ${p2.type || "application/octet-stream"}\r
\r
`, p2, `\r
`)), u.push(`--${a3}--`), new o2(u, { type: "multipart/form-data; boundary=" + a3 });
}
n(Vs, "formDataToBlob");
const Un = class Un2 extends Error {
  constructor(o2, a3) {
    super(o2), Error.captureStackTrace(this, this.constructor), this.type = a3;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
n(Un, "FetchBaseError");
let ft = Un;
const xn = class xn2 extends ft {
  constructor(o2, a3, u) {
    super(o2, a3), u && (this.code = this.errno = u.code, this.erroredSysCall = u.syscall);
  }
};
n(xn, "FetchError");
let G = xn;
const mr = Symbol.toStringTag, yi$1 = n((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[mr] === "URLSearchParams", "isURLSearchParameters"), yr = n((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[mr]), "isBlob"), Qs = n((i) => typeof i == "object" && (i[mr] === "AbortSignal" || i[mr] === "EventTarget"), "isAbortSignal"), Ys = n((i, o2) => {
  const a3 = new URL(o2).hostname, u = new URL(i).hostname;
  return a3 === u || a3.endsWith(`.${u}`);
}, "isDomainOrSubdomain"), Gs = n((i, o2) => {
  const a3 = new URL(o2).protocol, u = new URL(i).protocol;
  return a3 === u;
}, "isSameProtocol"), Zs = promisify(me.pipeline), H$1 = Symbol("Body internals"), Nn = class Nn2 {
  constructor(o2, { size: a3 = 0 } = {}) {
    let u = null;
    o2 === null ? o2 = null : yi$1(o2) ? o2 = Buffer$1.from(o2.toString()) : yr(o2) || Buffer$1.isBuffer(o2) || (types.isAnyArrayBuffer(o2) ? o2 = Buffer$1.from(o2) : ArrayBuffer.isView(o2) ? o2 = Buffer$1.from(o2.buffer, o2.byteOffset, o2.byteLength) : o2 instanceof me || (o2 instanceof br ? (o2 = Vs(o2), u = o2.type.split("=")[1]) : o2 = Buffer$1.from(String(o2))));
    let l2 = o2;
    Buffer$1.isBuffer(o2) ? l2 = me.Readable.from(o2) : yr(o2) && (l2 = me.Readable.from(o2.stream())), this[H$1] = { body: o2, stream: l2, boundary: u, disturbed: false, error: null }, this.size = a3, o2 instanceof me && o2.on("error", (p2) => {
      const h2 = p2 instanceof ft ? p2 : new G(`Invalid response body while trying to fetch ${this.url}: ${p2.message}`, "system", p2);
      this[H$1].error = h2;
    });
  }
  get body() {
    return this[H$1].stream;
  }
  get bodyUsed() {
    return this[H$1].disturbed;
  }
  async arrayBuffer() {
    const { buffer: o2, byteOffset: a3, byteLength: u } = await In(this);
    return o2.slice(a3, a3 + u);
  }
  async formData() {
    const o2 = this.headers.get("content-type");
    if (o2.startsWith("application/x-www-form-urlencoded")) {
      const u = new br(), l2 = new URLSearchParams(await this.text());
      for (const [p2, h2] of l2) u.append(p2, h2);
      return u;
    }
    const { toFormData: a3 } = await import('./multipart-parser-DbvjVjXx.mjs');
    return a3(this.body, o2);
  }
  async blob() {
    const o2 = this.headers && this.headers.get("content-type") || this[H$1].body && this[H$1].body.type || "", a3 = await this.arrayBuffer();
    return new ut([a3], { type: o2 });
  }
  async json() {
    const o2 = await this.text();
    return JSON.parse(o2);
  }
  async text() {
    const o2 = await In(this);
    return new TextDecoder().decode(o2);
  }
  buffer() {
    return In(this);
  }
};
n(Nn, "Body");
let Ue$1 = Nn;
Ue$1.prototype.buffer = deprecate(Ue$1.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(Ue$1.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: deprecate(() => {
}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
async function In(i) {
  if (i[H$1].disturbed) throw new TypeError(`body used already for: ${i.url}`);
  if (i[H$1].disturbed = true, i[H$1].error) throw i[H$1].error;
  const { body: o2 } = i;
  if (o2 === null) return Buffer$1.alloc(0);
  if (!(o2 instanceof me)) return Buffer$1.alloc(0);
  const a3 = [];
  let u = 0;
  try {
    for await (const l2 of o2) {
      if (i.size > 0 && u + l2.length > i.size) {
        const p2 = new G(`content size at ${i.url} over limit: ${i.size}`, "max-size");
        throw o2.destroy(p2), p2;
      }
      u += l2.length, a3.push(l2);
    }
  } catch (l2) {
    throw l2 instanceof ft ? l2 : new G(`Invalid response body while trying to fetch ${i.url}: ${l2.message}`, "system", l2);
  }
  if (o2.readableEnded === true || o2._readableState.ended === true) try {
    return a3.every((l2) => typeof l2 == "string") ? Buffer$1.from(a3.join("")) : Buffer$1.concat(a3, u);
  } catch (l2) {
    throw new G(`Could not create Buffer from response body for ${i.url}: ${l2.message}`, "system", l2);
  }
  else throw new G(`Premature close of server response while trying to fetch ${i.url}`);
}
n(In, "consumeBody");
const Fn = n((i, o2) => {
  let a3, u, { body: l2 } = i[H$1];
  if (i.bodyUsed) throw new Error("cannot clone body after it is used");
  return l2 instanceof me && typeof l2.getBoundary != "function" && (a3 = new PassThrough({ highWaterMark: o2 }), u = new PassThrough({ highWaterMark: o2 }), l2.pipe(a3), l2.pipe(u), i[H$1].stream = a3, l2 = u), l2;
}, "clone"), Ks = deprecate((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), gi = n((i, o2) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : yi$1(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : yr(i) ? i.type || null : Buffer$1.isBuffer(i) || types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof br ? `multipart/form-data; boundary=${o2[H$1].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${Ks(i)}` : i instanceof me ? null : "text/plain;charset=UTF-8", "extractContentType"), Js = n((i) => {
  const { body: o2 } = i[H$1];
  return o2 === null ? 0 : yr(o2) ? o2.size : Buffer$1.isBuffer(o2) ? o2.length : o2 && typeof o2.getLengthSync == "function" && o2.hasKnownLength && o2.hasKnownLength() ? o2.getLengthSync() : null;
}, "getTotalBytes"), Xs = n(async (i, { body: o2 }) => {
  o2 === null ? i.end() : await Zs(o2, i);
}, "writeToStream"), gr = typeof vt$1.validateHeaderName == "function" ? vt$1.validateHeaderName : (i) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
    const o2 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
    throw Object.defineProperty(o2, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o2;
  }
}, jn$1 = typeof vt$1.validateHeaderValue == "function" ? vt$1.validateHeaderValue : (i, o2) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o2)) {
    const a3 = new TypeError(`Invalid character in header content ["${i}"]`);
    throw Object.defineProperty(a3, "code", { value: "ERR_INVALID_CHAR" }), a3;
  }
}, Pr = class Pr2 extends URLSearchParams {
  constructor(o2) {
    let a3 = [];
    if (o2 instanceof Pr2) {
      const u = o2.raw();
      for (const [l2, p2] of Object.entries(u)) a3.push(...p2.map((h2) => [l2, h2]));
    } else if (o2 != null) if (typeof o2 == "object" && !types.isBoxedPrimitive(o2)) {
      const u = o2[Symbol.iterator];
      if (u == null) a3.push(...Object.entries(o2));
      else {
        if (typeof u != "function") throw new TypeError("Header pairs must be iterable");
        a3 = [...o2].map((l2) => {
          if (typeof l2 != "object" || types.isBoxedPrimitive(l2)) throw new TypeError("Each header pair must be an iterable object");
          return [...l2];
        }).map((l2) => {
          if (l2.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
          return [...l2];
        });
      }
    } else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return a3 = a3.length > 0 ? a3.map(([u, l2]) => (gr(u), jn$1(u, String(l2)), [String(u).toLowerCase(), String(l2)])) : undefined, super(a3), new Proxy(this, { get(u, l2, p2) {
      switch (l2) {
        case "append":
        case "set":
          return (h2, g2) => (gr(h2), jn$1(h2, String(g2)), URLSearchParams.prototype[l2].call(u, String(h2).toLowerCase(), String(g2)));
        case "delete":
        case "has":
        case "getAll":
          return (h2) => (gr(h2), URLSearchParams.prototype[l2].call(u, String(h2).toLowerCase()));
        case "keys":
          return () => (u.sort(), new Set(URLSearchParams.prototype.keys.call(u)).keys());
        default:
          return Reflect.get(u, l2, p2);
      }
    } });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(o2) {
    const a3 = this.getAll(o2);
    if (a3.length === 0) return null;
    let u = a3.join(", ");
    return /^content-encoding$/i.test(o2) && (u = u.toLowerCase()), u;
  }
  forEach(o2, a3 = undefined) {
    for (const u of this.keys()) Reflect.apply(o2, a3, [this.get(u), u, this]);
  }
  *values() {
    for (const o2 of this.keys()) yield this.get(o2);
  }
  *entries() {
    for (const o2 of this.keys()) yield [o2, this.get(o2)];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((o2, a3) => (o2[a3] = this.getAll(a3), o2), {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((o2, a3) => {
      const u = this.getAll(a3);
      return a3 === "host" ? o2[a3] = u[0] : o2[a3] = u.length > 1 ? u : u[0], o2;
    }, {});
  }
};
n(Pr, "Headers");
let ye = Pr;
Object.defineProperties(ye.prototype, ["get", "entries", "forEach", "values"].reduce((i, o2) => (i[o2] = { enumerable: true }, i), {}));
function el(i = []) {
  return new ye(i.reduce((o2, a3, u, l2) => (u % 2 === 0 && o2.push(l2.slice(u, u + 2)), o2), []).filter(([o2, a3]) => {
    try {
      return gr(o2), jn$1(o2, String(a3)), true;
    } catch {
      return false;
    }
  }));
}
n(el, "fromRawHeaders");
const tl = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Ln = n((i) => tl.has(i), "isRedirect"), se = Symbol("Response internals"), xe$1 = class xe2 extends Ue$1 {
  constructor(o2 = null, a3 = {}) {
    super(o2, a3);
    const u = a3.status != null ? a3.status : 200, l2 = new ye(a3.headers);
    if (o2 !== null && !l2.has("Content-Type")) {
      const p2 = gi(o2, this);
      p2 && l2.append("Content-Type", p2);
    }
    this[se] = { type: "default", url: a3.url, status: u, statusText: a3.statusText || "", headers: l2, counter: a3.counter, highWaterMark: a3.highWaterMark };
  }
  get type() {
    return this[se].type;
  }
  get url() {
    return this[se].url || "";
  }
  get status() {
    return this[se].status;
  }
  get ok() {
    return this[se].status >= 200 && this[se].status < 300;
  }
  get redirected() {
    return this[se].counter > 0;
  }
  get statusText() {
    return this[se].statusText;
  }
  get headers() {
    return this[se].headers;
  }
  get highWaterMark() {
    return this[se].highWaterMark;
  }
  clone() {
    return new xe2(Fn(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
  }
  static redirect(o2, a3 = 302) {
    if (!Ln(a3)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new xe2(null, { headers: { location: new URL(o2).toString() }, status: a3 });
  }
  static error() {
    const o2 = new xe2(null, { status: 0, statusText: "" });
    return o2[se].type = "error", o2;
  }
  static json(o2 = undefined, a3 = {}) {
    const u = JSON.stringify(o2);
    if (u === undefined) throw new TypeError("data is not JSON serializable");
    const l2 = new ye(a3 && a3.headers);
    return l2.has("content-type") || l2.set("content-type", "application/json"), new xe2(u, { ...a3, headers: l2 });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
n(xe$1, "Response");
let le = xe$1;
Object.defineProperties(le.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
const rl = n((i) => {
  if (i.search) return i.search;
  const o2 = i.href.length - 1, a3 = i.hash || (i.href[o2] === "#" ? "#" : "");
  return i.href[o2 - a3.length] === "?" ? "?" : "";
}, "getSearch");
function _i$1(i, o2 = false) {
  return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o2 && (i.pathname = "", i.search = ""), i);
}
n(_i$1, "stripURLForUseAsAReferrer");
const Si = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]), nl = "strict-origin-when-cross-origin";
function ol$1(i) {
  if (!Si.has(i)) throw new TypeError(`Invalid referrerPolicy: ${i}`);
  return i;
}
n(ol$1, "validateReferrerPolicy");
function il(i) {
  if (/^(http|ws)s:$/.test(i.protocol)) return true;
  const o2 = i.host.replace(/(^\[)|(]$)/g, ""), a3 = isIP(o2);
  return a3 === 4 && /^127\./.test(o2) || a3 === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o2) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
}
n(il, "isOriginPotentiallyTrustworthy");
function ct$1(i) {
  return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : il(i);
}
n(ct$1, "isUrlPotentiallyTrustworthy");
function al(i, { referrerURLCallback: o2, referrerOriginCallback: a3 } = {}) {
  if (i.referrer === "no-referrer" || i.referrerPolicy === "") return null;
  const u = i.referrerPolicy;
  if (i.referrer === "about:client") return "no-referrer";
  const l2 = i.referrer;
  let p2 = _i$1(l2), h2 = _i$1(l2, true);
  p2.toString().length > 4096 && (p2 = h2), o2 && (p2 = o2(p2)), a3 && (h2 = a3(h2));
  const g2 = new URL(i.url);
  switch (u) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return h2;
    case "unsafe-url":
      return p2;
    case "strict-origin":
      return ct$1(p2) && !ct$1(g2) ? "no-referrer" : h2.toString();
    case "strict-origin-when-cross-origin":
      return p2.origin === g2.origin ? p2 : ct$1(p2) && !ct$1(g2) ? "no-referrer" : h2;
    case "same-origin":
      return p2.origin === g2.origin ? p2 : "no-referrer";
    case "origin-when-cross-origin":
      return p2.origin === g2.origin ? p2 : h2;
    case "no-referrer-when-downgrade":
      return ct$1(p2) && !ct$1(g2) ? "no-referrer" : p2;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${u}`);
  }
}
n(al, "determineRequestsReferrer");
function sl(i) {
  const o2 = (i.get("referrer-policy") || "").split(/[,\s]+/);
  let a3 = "";
  for (const u of o2) u && Si.has(u) && (a3 = u);
  return a3;
}
n(sl, "parseReferrerPolicyFromHeader");
const $ = Symbol("Request internals"), At$1 = n((i) => typeof i == "object" && typeof i[$] == "object", "isRequest"), ll$1 = deprecate(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)"), vr = class vr2 extends Ue$1 {
  constructor(o2, a3 = {}) {
    let u;
    if (At$1(o2) ? u = new URL(o2.url) : (u = new URL(o2), o2 = {}), u.username !== "" || u.password !== "") throw new TypeError(`${u} is an url with embedded credentials.`);
    let l2 = a3.method || o2.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(l2) && (l2 = l2.toUpperCase()), !At$1(a3) && "data" in a3 && ll$1(), (a3.body != null || At$1(o2) && o2.body !== null) && (l2 === "GET" || l2 === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
    const p2 = a3.body ? a3.body : At$1(o2) && o2.body !== null ? Fn(o2) : null;
    super(p2, { size: a3.size || o2.size || 0 });
    const h2 = new ye(a3.headers || o2.headers || {});
    if (p2 !== null && !h2.has("Content-Type")) {
      const w = gi(p2, this);
      w && h2.set("Content-Type", w);
    }
    let g2 = At$1(o2) ? o2.signal : null;
    if ("signal" in a3 && (g2 = a3.signal), g2 != null && !Qs(g2)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let A2 = a3.referrer == null ? o2.referrer : a3.referrer;
    if (A2 === "") A2 = "no-referrer";
    else if (A2) {
      const w = new URL(A2);
      A2 = /^about:(\/\/)?client$/.test(w) ? "client" : w;
    } else A2 = undefined;
    this[$] = { method: l2, redirect: a3.redirect || o2.redirect || "follow", headers: h2, parsedURL: u, signal: g2, referrer: A2 }, this.follow = a3.follow === undefined ? o2.follow === undefined ? 20 : o2.follow : a3.follow, this.compress = a3.compress === undefined ? o2.compress === undefined ? true : o2.compress : a3.compress, this.counter = a3.counter || o2.counter || 0, this.agent = a3.agent || o2.agent, this.highWaterMark = a3.highWaterMark || o2.highWaterMark || 16384, this.insecureHTTPParser = a3.insecureHTTPParser || o2.insecureHTTPParser || false, this.referrerPolicy = a3.referrerPolicy || o2.referrerPolicy || "";
  }
  get method() {
    return this[$].method;
  }
  get url() {
    return format(this[$].parsedURL);
  }
  get headers() {
    return this[$].headers;
  }
  get redirect() {
    return this[$].redirect;
  }
  get signal() {
    return this[$].signal;
  }
  get referrer() {
    if (this[$].referrer === "no-referrer") return "";
    if (this[$].referrer === "client") return "about:client";
    if (this[$].referrer) return this[$].referrer.toString();
  }
  get referrerPolicy() {
    return this[$].referrerPolicy;
  }
  set referrerPolicy(o2) {
    this[$].referrerPolicy = ol$1(o2);
  }
  clone() {
    return new vr2(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
n(vr, "Request");
let dt = vr;
Object.defineProperties(dt.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
const ul = n((i) => {
  const { parsedURL: o2 } = i[$], a3 = new ye(i[$].headers);
  a3.has("Accept") || a3.set("Accept", "*/*");
  let u = null;
  if (i.body === null && /^(post|put)$/i.test(i.method) && (u = "0"), i.body !== null) {
    const g2 = Js(i);
    typeof g2 == "number" && !Number.isNaN(g2) && (u = String(g2));
  }
  u && a3.set("Content-Length", u), i.referrerPolicy === "" && (i.referrerPolicy = nl), i.referrer && i.referrer !== "no-referrer" ? i[$].referrer = al(i) : i[$].referrer = "no-referrer", i[$].referrer instanceof URL && a3.set("Referer", i.referrer), a3.has("User-Agent") || a3.set("User-Agent", "node-fetch"), i.compress && !a3.has("Accept-Encoding") && a3.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: l2 } = i;
  typeof l2 == "function" && (l2 = l2(o2));
  const p2 = rl(o2), h2 = { path: o2.pathname + p2, method: i.method, headers: a3[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: l2 };
  return { parsedURL: o2, options: h2 };
}, "getNodeRequestOptions"), Hn = class Hn2 extends ft {
  constructor(o2, a3 = "aborted") {
    super(o2, a3);
  }
};
n(Hn, "AbortError");
let _r = Hn;
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
if (!globalThis.DOMException) try {
  const { MessageChannel: i } = require("worker_threads"), o2 = new i().port1, a3 = new ArrayBuffer();
  o2.postMessage(a3, [a3, a3]);
} catch (i) {
  i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
}
var fl = globalThis.DOMException;
const cl = f$1(fl), { stat: $n$1 } = promises;
n((i, o2) => wi(statSync(i), i, o2), "blobFromSync");
n((i, o2) => $n$1(i).then((a3) => wi(a3, i, o2)), "blobFrom");
n((i, o2) => $n$1(i).then((a3) => Ri$1(a3, i, o2)), "fileFrom");
n((i, o2) => Ri$1(statSync(i), i, o2), "fileFromSync");
const wi = n((i, o2, a3 = "") => new ut([new Sr({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a3 }), "fromBlob"), Ri$1 = n((i, o2, a3 = "") => new On$1([new Sr({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], basename(o2), { type: a3, lastModified: i.mtimeMs }), "fromFile"), Er = class Er2 {
  constructor(o2) {
    be$1(this, Ne, undefined);
    be$1(this, He, undefined);
    X(this, Ne, o2.path), X(this, He, o2.start), this.size = o2.size, this.lastModified = o2.lastModified;
  }
  slice(o2, a3) {
    return new Er2({ path: O$1(this, Ne), lastModified: this.lastModified, size: a3 - o2, start: O$1(this, He) + o2 });
  }
  async *stream() {
    const { mtimeMs: o2 } = await $n$1(O$1(this, Ne));
    if (o2 > this.lastModified) throw new cl("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* createReadStream(O$1(this, Ne), { start: O$1(this, He), end: O$1(this, He) + this.size - 1 });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
};
Ne = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), n(Er, "BlobDataItem");
let Sr = Er;
const ml = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function Ti$1(i, o2) {
  return new Promise((a3, u) => {
    const l2 = new dt(i, o2), { parsedURL: p2, options: h2 } = ul(l2);
    if (!ml.has(p2.protocol)) throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${p2.protocol.replace(/:$/, "")}" is not supported.`);
    if (p2.protocol === "data:") {
      const _ = js(l2.url), V = new le(_, { headers: { "Content-Type": _.typeFull } });
      a3(V);
      return;
    }
    const g2 = (p2.protocol === "https:" ? Bs$1 : vt$1).request, { signal: A2 } = l2;
    let w = null;
    const E = n(() => {
      const _ = new _r("The operation was aborted.");
      u(_), l2.body && l2.body instanceof me.Readable && l2.body.destroy(_), !(!w || !w.body) && w.body.emit("error", _);
    }, "abort");
    if (A2 && A2.aborted) {
      E();
      return;
    }
    const T = n(() => {
      E(), q();
    }, "abortAndFinalize"), b = g2(p2.toString(), h2);
    A2 && A2.addEventListener("abort", T);
    const q = n(() => {
      b.abort(), A2 && A2.removeEventListener("abort", T);
    }, "finalize");
    b.on("error", (_) => {
      u(new G(`request to ${l2.url} failed, reason: ${_.message}`, "system", _)), q();
    }), yl(b, (_) => {
      w && w.body && w.body.destroy(_);
    }), process.version < "v14" && b.on("socket", (_) => {
      let V;
      _.prependListener("end", () => {
        V = _._eventsCount;
      }), _.prependListener("close", (I) => {
        if (w && V < _._eventsCount && !I) {
          const F = new Error("Premature close");
          F.code = "ERR_STREAM_PREMATURE_CLOSE", w.body.emit("error", F);
        }
      });
    }), b.on("response", (_) => {
      b.setTimeout(0);
      const V = el(_.rawHeaders);
      if (Ln(_.statusCode)) {
        const z = V.get("Location");
        let j = null;
        try {
          j = z === null ? null : new URL(z, l2.url);
        } catch {
          if (l2.redirect !== "manual") {
            u(new G(`uri requested responds with an invalid redirect URL: ${z}`, "invalid-redirect")), q();
            return;
          }
        }
        switch (l2.redirect) {
          case "error":
            u(new G(`uri requested responds with a redirect, redirect mode is set to error: ${l2.url}`, "no-redirect")), q();
            return;
          case "manual":
            break;
          case "follow": {
            if (j === null) break;
            if (l2.counter >= l2.follow) {
              u(new G(`maximum redirect reached at: ${l2.url}`, "max-redirect")), q();
              return;
            }
            const U = { headers: new ye(l2.headers), follow: l2.follow, counter: l2.counter + 1, agent: l2.agent, compress: l2.compress, method: l2.method, body: Fn(l2), signal: l2.signal, size: l2.size, referrer: l2.referrer, referrerPolicy: l2.referrerPolicy };
            if (!Ys(l2.url, j) || !Gs(l2.url, j)) for (const Ft2 of ["authorization", "www-authenticate", "cookie", "cookie2"]) U.headers.delete(Ft2);
            if (_.statusCode !== 303 && l2.body && o2.body instanceof me.Readable) {
              u(new G("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
              return;
            }
            (_.statusCode === 303 || (_.statusCode === 301 || _.statusCode === 302) && l2.method === "POST") && (U.method = "GET", U.body = undefined, U.headers.delete("content-length"));
            const D = sl(V);
            D && (U.referrerPolicy = D), a3(Ti$1(new dt(j, U))), q();
            return;
          }
          default:
            return u(new TypeError(`Redirect option '${l2.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      A2 && _.once("end", () => {
        A2.removeEventListener("abort", T);
      });
      let I = pipeline(_, new PassThrough(), (z) => {
        z && u(z);
      });
      process.version < "v12.10" && _.on("aborted", T);
      const F = { url: l2.url, status: _.statusCode, statusText: _.statusMessage, headers: V, size: l2.size, counter: l2.counter, highWaterMark: l2.highWaterMark }, Q2 = V.get("Content-Encoding");
      if (!l2.compress || l2.method === "HEAD" || Q2 === null || _.statusCode === 204 || _.statusCode === 304) {
        w = new le(I, F), a3(w);
        return;
      }
      const ge = { flush: st.Z_SYNC_FLUSH, finishFlush: st.Z_SYNC_FLUSH };
      if (Q2 === "gzip" || Q2 === "x-gzip") {
        I = pipeline(I, st.createGunzip(ge), (z) => {
          z && u(z);
        }), w = new le(I, F), a3(w);
        return;
      }
      if (Q2 === "deflate" || Q2 === "x-deflate") {
        const z = pipeline(_, new PassThrough(), (j) => {
          j && u(j);
        });
        z.once("data", (j) => {
          (j[0] & 15) === 8 ? I = pipeline(I, st.createInflate(), (U) => {
            U && u(U);
          }) : I = pipeline(I, st.createInflateRaw(), (U) => {
            U && u(U);
          }), w = new le(I, F), a3(w);
        }), z.once("end", () => {
          w || (w = new le(I, F), a3(w));
        });
        return;
      }
      if (Q2 === "br") {
        I = pipeline(I, st.createBrotliDecompress(), (z) => {
          z && u(z);
        }), w = new le(I, F), a3(w);
        return;
      }
      w = new le(I, F), a3(w);
    }), Xs(b, l2).catch(u);
  });
}
n(Ti$1, "fetch$1");
function yl(i, o2) {
  const a3 = Buffer$1.from(`0\r
\r
`);
  let u = false, l2 = false, p2;
  i.on("response", (h2) => {
    const { headers: g2 } = h2;
    u = g2["transfer-encoding"] === "chunked" && !g2["content-length"];
  }), i.on("socket", (h2) => {
    const g2 = n(() => {
      if (u && !l2) {
        const w = new Error("Premature close");
        w.code = "ERR_STREAM_PREMATURE_CLOSE", o2(w);
      }
    }, "onSocketClose"), A2 = n((w) => {
      l2 = Buffer$1.compare(w.slice(-5), a3) === 0, !l2 && p2 && (l2 = Buffer$1.compare(p2.slice(-3), a3.slice(0, 3)) === 0 && Buffer$1.compare(w.slice(-2), a3.slice(3)) === 0), p2 = w;
    }, "onData");
    h2.prependListener("close", g2), h2.on("data", A2), i.on("close", () => {
      h2.removeListener("close", g2), h2.removeListener("data", A2);
    });
  });
}
n(yl, "fixResponseChunkedTransferBadEnding");
const Ci = /* @__PURE__ */ new WeakMap(), Dn$1 = /* @__PURE__ */ new WeakMap();
function W$1(i) {
  const o2 = Ci.get(i);
  return console.assert(o2 != null, "'this' is expected an Event object, but got", i), o2;
}
n(W$1, "pd");
function Pi$1(i) {
  if (i.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
    return;
  }
  i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n(Pi$1, "setCancelFlag");
function ht(i, o2) {
  Ci.set(this, { eventTarget: i, event: o2, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o2.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const a3 = Object.keys(o2);
  for (let u = 0; u < a3.length; ++u) {
    const l2 = a3[u];
    l2 in this || Object.defineProperty(this, l2, vi(l2));
  }
}
n(ht, "Event"), ht.prototype = { get type() {
  return W$1(this).event.type;
}, get target() {
  return W$1(this).eventTarget;
}, get currentTarget() {
  return W$1(this).currentTarget;
}, composedPath() {
  const i = W$1(this).currentTarget;
  return i == null ? [] : [i];
}, get NONE() {
  return 0;
}, get CAPTURING_PHASE() {
  return 1;
}, get AT_TARGET() {
  return 2;
}, get BUBBLING_PHASE() {
  return 3;
}, get eventPhase() {
  return W$1(this).eventPhase;
}, stopPropagation() {
  const i = W$1(this);
  i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
}, stopImmediatePropagation() {
  const i = W$1(this);
  i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
}, get bubbles() {
  return !!W$1(this).event.bubbles;
}, get cancelable() {
  return !!W$1(this).event.cancelable;
}, preventDefault() {
  Pi$1(W$1(this));
}, get defaultPrevented() {
  return W$1(this).canceled;
}, get composed() {
  return !!W$1(this).event.composed;
}, get timeStamp() {
  return W$1(this).timeStamp;
}, get srcElement() {
  return W$1(this).eventTarget;
}, get cancelBubble() {
  return W$1(this).stopped;
}, set cancelBubble(i) {
  if (!i) return;
  const o2 = W$1(this);
  o2.stopped = true, typeof o2.event.cancelBubble == "boolean" && (o2.event.cancelBubble = true);
}, get returnValue() {
  return !W$1(this).canceled;
}, set returnValue(i) {
  i || Pi$1(W$1(this));
}, initEvent() {
} }, Object.defineProperty(ht.prototype, "constructor", { value: ht, configurable: true, writable: true });
function vi(i) {
  return { get() {
    return W$1(this).event[i];
  }, set(o2) {
    W$1(this).event[i] = o2;
  }, configurable: true, enumerable: true };
}
n(vi, "defineRedirectDescriptor");
function gl(i) {
  return { value() {
    const o2 = W$1(this).event;
    return o2[i].apply(o2, arguments);
  }, configurable: true, enumerable: true };
}
n(gl, "defineCallDescriptor");
function _l(i, o2) {
  const a3 = Object.keys(o2);
  if (a3.length === 0) return i;
  function u(l2, p2) {
    i.call(this, l2, p2);
  }
  n(u, "CustomEvent"), u.prototype = Object.create(i.prototype, { constructor: { value: u, configurable: true, writable: true } });
  for (let l2 = 0; l2 < a3.length; ++l2) {
    const p2 = a3[l2];
    if (!(p2 in i.prototype)) {
      const g2 = typeof Object.getOwnPropertyDescriptor(o2, p2).value == "function";
      Object.defineProperty(u.prototype, p2, g2 ? gl(p2) : vi(p2));
    }
  }
  return u;
}
n(_l, "defineWrapper");
function Ei$1(i) {
  if (i == null || i === Object.prototype) return ht;
  let o2 = Dn$1.get(i);
  return o2 == null && (o2 = _l(Ei$1(Object.getPrototypeOf(i)), i), Dn$1.set(i, o2)), o2;
}
n(Ei$1, "getWrapper");
function Sl$1(i, o2) {
  const a3 = Ei$1(Object.getPrototypeOf(o2));
  return new a3(i, o2);
}
n(Sl$1, "wrapEvent");
function wl(i) {
  return W$1(i).immediateStopped;
}
n(wl, "isStopped");
function Rl(i, o2) {
  W$1(i).eventPhase = o2;
}
n(Rl, "setEventPhase");
function Tl$1(i, o2) {
  W$1(i).currentTarget = o2;
}
n(Tl$1, "setCurrentTarget");
function Ai$1(i, o2) {
  W$1(i).passiveListener = o2;
}
n(Ai$1, "setPassiveListener");
const Bi = /* @__PURE__ */ new WeakMap(), ki$1 = 1, Wi$1 = 2, wr = 3;
function Rr(i) {
  return i !== null && typeof i == "object";
}
n(Rr, "isObject");
function Bt$1(i) {
  const o2 = Bi.get(i);
  if (o2 == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return o2;
}
n(Bt$1, "getListeners");
function Cl(i) {
  return { get() {
    let a3 = Bt$1(this).get(i);
    for (; a3 != null; ) {
      if (a3.listenerType === wr) return a3.listener;
      a3 = a3.next;
    }
    return null;
  }, set(o2) {
    typeof o2 != "function" && !Rr(o2) && (o2 = null);
    const a3 = Bt$1(this);
    let u = null, l2 = a3.get(i);
    for (; l2 != null; ) l2.listenerType === wr ? u !== null ? u.next = l2.next : l2.next !== null ? a3.set(i, l2.next) : a3.delete(i) : u = l2, l2 = l2.next;
    if (o2 !== null) {
      const p2 = { listener: o2, listenerType: wr, passive: false, once: false, next: null };
      u === null ? a3.set(i, p2) : u.next = p2;
    }
  }, configurable: true, enumerable: true };
}
n(Cl, "defineEventAttributeDescriptor");
function qi$1(i, o2) {
  Object.defineProperty(i, `on${o2}`, Cl(o2));
}
n(qi$1, "defineEventAttribute");
function Oi$1(i) {
  function o2() {
    Pe$1.call(this);
  }
  n(o2, "CustomEventTarget"), o2.prototype = Object.create(Pe$1.prototype, { constructor: { value: o2, configurable: true, writable: true } });
  for (let a3 = 0; a3 < i.length; ++a3) qi$1(o2.prototype, i[a3]);
  return o2;
}
n(Oi$1, "defineCustomEventTarget");
function Pe$1() {
  if (this instanceof Pe$1) {
    Bi.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0])) return Oi$1(arguments[0]);
  if (arguments.length > 0) {
    const i = new Array(arguments.length);
    for (let o2 = 0; o2 < arguments.length; ++o2) i[o2] = arguments[o2];
    return Oi$1(i);
  }
  throw new TypeError("Cannot call a class as a function");
}
n(Pe$1, "EventTarget"), Pe$1.prototype = { addEventListener(i, o2, a3) {
  if (o2 == null) return;
  if (typeof o2 != "function" && !Rr(o2)) throw new TypeError("'listener' should be a function or an object.");
  const u = Bt$1(this), l2 = Rr(a3), h2 = (l2 ? !!a3.capture : !!a3) ? ki$1 : Wi$1, g2 = { listener: o2, listenerType: h2, passive: l2 && !!a3.passive, once: l2 && !!a3.once, next: null };
  let A2 = u.get(i);
  if (A2 === undefined) {
    u.set(i, g2);
    return;
  }
  let w = null;
  for (; A2 != null; ) {
    if (A2.listener === o2 && A2.listenerType === h2) return;
    w = A2, A2 = A2.next;
  }
  w.next = g2;
}, removeEventListener(i, o2, a3) {
  if (o2 == null) return;
  const u = Bt$1(this), p2 = (Rr(a3) ? !!a3.capture : !!a3) ? ki$1 : Wi$1;
  let h2 = null, g2 = u.get(i);
  for (; g2 != null; ) {
    if (g2.listener === o2 && g2.listenerType === p2) {
      h2 !== null ? h2.next = g2.next : g2.next !== null ? u.set(i, g2.next) : u.delete(i);
      return;
    }
    h2 = g2, g2 = g2.next;
  }
}, dispatchEvent(i) {
  if (i == null || typeof i.type != "string") throw new TypeError('"event.type" should be a string.');
  const o2 = Bt$1(this), a3 = i.type;
  let u = o2.get(a3);
  if (u == null) return true;
  const l2 = Sl$1(this, i);
  let p2 = null;
  for (; u != null; ) {
    if (u.once ? p2 !== null ? p2.next = u.next : u.next !== null ? o2.set(a3, u.next) : o2.delete(a3) : p2 = u, Ai$1(l2, u.passive ? u.listener : null), typeof u.listener == "function") try {
      u.listener.call(this, l2);
    } catch (h2) {
      typeof console < "u" && typeof console.error == "function" && console.error(h2);
    }
    else u.listenerType !== wr && typeof u.listener.handleEvent == "function" && u.listener.handleEvent(l2);
    if (wl(l2)) break;
    u = u.next;
  }
  return Ai$1(l2, null), Rl(l2, 0), Tl$1(l2, null), !l2.defaultPrevented;
} }, Object.defineProperty(Pe$1.prototype, "constructor", { value: Pe$1, configurable: true, writable: true });
const Vn = class Vn2 extends Pe$1 {
  constructor() {
    throw super(), new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const o2 = Tr.get(this);
    if (typeof o2 != "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    return o2;
  }
};
n(Vn, "AbortSignal");
let pt = Vn;
qi$1(pt.prototype, "abort");
function Pl() {
  const i = Object.create(pt.prototype);
  return Pe$1.call(i), Tr.set(i, false), i;
}
n(Pl, "createAbortSignal");
function vl(i) {
  Tr.get(i) === false && (Tr.set(i, true), i.dispatchEvent({ type: "abort" }));
}
n(vl, "abortSignal");
const Tr = /* @__PURE__ */ new WeakMap();
Object.defineProperties(pt.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pt.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
let Mn = (It$1 = class {
  constructor() {
    zi$1.set(this, Pl());
  }
  get signal() {
    return Ii$1(this);
  }
  abort() {
    vl(Ii$1(this));
  }
}, n(It$1, "AbortController"), It$1);
const zi$1 = /* @__PURE__ */ new WeakMap();
function Ii$1(i) {
  const o2 = zi$1.get(i);
  if (o2 == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
  return o2;
}
n(Ii$1, "getSignal"), Object.defineProperties(Mn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
var El$1 = Object.defineProperty, Al$1 = n((i, o2) => El$1(i, "name", { value: o2, configurable: true }), "e");
const Fi$1 = Ti$1;
ji$1();
function ji$1() {
  var _a3, _b2, _c;
  !((_b2 = (_a3 = globalThis.process) == null ? undefined : _a3.versions) == null ? undefined : _b2.node) && !((_c = globalThis.process) == null ? undefined : _c.env.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n(ji$1, "s"), Al$1(ji$1, "checkNodeEnvironment");
var a = Object.defineProperty;
var t = (e, r) => a(e, "name", { value: r, configurable: true });
var f = Object.defineProperty, g = t((e, r) => f(e, "name", { value: r, configurable: true }), "e");
const o = !!((_b = (_a2 = globalThis.process) == null ? undefined : _a2.env) == null ? undefined : _b.FORCE_NODE_FETCH);
function l() {
  return !o && globalThis.fetch ? globalThis.fetch : Fi$1;
}
t(l, "p"), g(l, "_getFetch");
const s = l(), d = !o && globalThis.Headers || ye, A = !o && globalThis.AbortController || Mn;
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key2, value) {
  if (key2 === "__proto__" || key2 === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key2);
    return;
  }
  return value;
}
function warnKeyDropped(key2) {
  console.warn(`[destr] Dropping "${key2}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return undefined;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s2 = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s2.length < 2) {
      continue;
    }
    const key2 = decodeQueryKey(s2[1]);
    if (key2 === "__proto__" || key2 === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s2[2] || "");
    if (object[key2] === undefined) {
      object[key2] = value;
    } else if (Array.isArray(object[key2])) {
      object[key2].push(value);
    } else {
      object[key2] = [object[key2], value];
    }
  }
  return object;
}
function encodeQueryItem(key2, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key2);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key2)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key2)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k2) => query[k2] !== undefined).map((k2) => encodeQueryItem(k2, query[k2])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s2] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s2.length > 0 ? `?${s2.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s2] = path.split("?");
  return s0 + "/" + (s2.length > 0 ? `?${s2.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash: hash2 } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash: hash2,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash2 = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash: hash2
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash2 = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash2;
}
class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if ((opts == null ? undefined : opts.cause) && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  var _a3, _b2, _c, _d2, _e;
  const errorMessage = ((_a3 = ctx.error) == null ? undefined : _a3.message) || ((_b2 = ctx.error) == null ? undefined : _b2.toString()) || "";
  const method = ((_c = ctx.request) == null ? undefined : _c.method) || ((_d2 = ctx.options) == null ? undefined : _d2.method) || "GET";
  const url = ((_e = ctx.request) == null ? undefined : _e.url) || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : undefined
  );
  for (const key2 of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key2, {
      get() {
        return ctx[key2];
      }
    });
  }
  for (const [key2, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key2, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}
const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === undefined) {
    return false;
  }
  const t2 = typeof value;
  if (t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === null) {
    return true;
  }
  if (t2 !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults2, Headers2) {
  const headers = mergeHeaders(
    (input == null ? undefined : input.headers) ?? (request == null ? undefined : request.headers),
    defaults2 == null ? undefined : defaults2.headers,
    Headers2
  );
  let query;
  if ((defaults2 == null ? undefined : defaults2.query) || (defaults2 == null ? undefined : defaults2.params) || (input == null ? undefined : input.params) || (input == null ? undefined : input.query)) {
    query = {
      ...defaults2 == null ? undefined : defaults2.params,
      ...defaults2 == null ? undefined : defaults2.query,
      ...input == null ? undefined : input.params,
      ...input == null ? undefined : input.query
    };
  }
  return {
    ...defaults2,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults2, Headers2) {
  if (!defaults2) {
    return new Headers2(input);
  }
  const headers = new Headers2(defaults2);
  if (input) {
    for (const [key2, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers2(input)) {
      headers.set(key2, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers: Headers2 = globalThis.Headers,
    AbortController: AbortController2 = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers2
      ),
      response: undefined,
      error: undefined
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers2(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController2();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch2 = async function $fetch22(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.native = (...args) => fetch(...args);
  $fetch2.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch2;
}
function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return s;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new vt$1.Agent(agentOptions);
  const httpsAgent = new Bs$1.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return s(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers = globalThis.Headers || d;
const AbortController$1 = globalThis.AbortController || A;
const ofetch = createFetch({ fetch: fetch$1, Headers, AbortController: AbortController$1 });
const $fetch$1 = ofetch;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
function getNuxtAppCtx(id2 = appId) {
  return getContext(id2, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a3;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: undefined,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a3 = options.ssrContext) == null ? undefined : _a3.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn2) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn2));
      }
      return callWithNuxt(nuxtApp, fn2);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key2 in provide2) {
        nuxtApp.provide(key2, provide2[key2]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a3, _b2, _c, _d2;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a4;
    const unresolvedPluginsForThisPlugin = ((_a4 = plugin2.dependsOn) == null ? undefined : _a4.filter((name) => plugins2.some((p2) => p2._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a3 = nuxtApp.ssrContext) == null ? undefined : _a3.islandContext) && ((_b2 = plugin2.env) == null ? undefined : _b2.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? undefined : _c.islandContext) && ((_d2 = plugin2.env) == null ? undefined : _d2.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn2 = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn2));
  }
}
function tryUseNuxtApp(id2) {
  var _a3;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a3 = getCurrentInstance()) == null ? undefined : _a3.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id2).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id2) {
  const nuxtAppInstance = tryUseNuxtApp(id2);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key2, val) {
  Object.defineProperty(obj, key2, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a3;
  return (_a3 = useNuxtApp()) == null ? undefined : _a3.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to2, options) => {
  if (!to2) {
    to2 = "/";
  }
  const toPath = typeof to2 === "string" ? to2 : "path" in to2 ? resolveRouteObject(to2) : useRouter().resolve(to2).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? undefined : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? undefined : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to2 === "string" || isExternal ? toPath : router.resolve(to2).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? undefined : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : undefined);
        return to2;
      }
      return redirect(!inMiddleware ? undefined : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? undefined : options.replace) {
      (undefined).replace(toPath);
    } else {
      (undefined).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? undefined : options.replace) ? router.replace(to2) : router.push(to2);
};
function resolveRouteObject(to2) {
  return withQuery(to2.path || "", to2.query || {}) + (to2.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
function unpackToArray(input, options) {
  const unpacked = [];
  const kFn = options.resolveKeyData || ((ctx) => ctx.key);
  const vFn = options.resolveValueData || ((ctx) => ctx.value);
  for (const [k2, v] of Object.entries(input)) {
    unpacked.push(...(Array.isArray(v) ? v : [v]).map((i) => {
      const ctx = { key: k2, value: i };
      const val = vFn(ctx);
      if (typeof val === "object")
        return unpackToArray(val, options);
      if (Array.isArray(val))
        return val;
      return {
        [typeof options.key === "function" ? options.key(ctx) : options.key]: kFn(ctx),
        [typeof options.value === "function" ? options.value(ctx) : options.value]: val
      };
    }).flat());
  }
  return unpacked;
}
function unpackToString(value, options) {
  return Object.entries(value).map(([key2, value2]) => {
    if (typeof value2 === "object")
      value2 = unpackToString(value2, options);
    if (options.resolve) {
      const resolved = options.resolve({ key: key2, value: value2 });
      if (typeof resolved !== "undefined")
        return resolved;
    }
    if (typeof value2 === "number")
      value2 = value2.toString();
    if (typeof value2 === "string" && options.wrapValue) {
      value2 = value2.replace(new RegExp(options.wrapValue, "g"), `\\${options.wrapValue}`);
      value2 = `${options.wrapValue}${value2}${options.wrapValue}`;
    }
    return `${key2}${options.keyValueSeparator || ""}${value2}`;
  }).join(options.entrySeparator || "");
}
const p = (p2) => ({ keyValue: p2, metaKey: "property" });
const k = (p2) => ({ keyValue: p2 });
const MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key: key2, value }) {
        return `${fixKeyCase(key2)}=${value}`;
      }
    }
  },
  articleExpirationTime: p("article:expiration_time"),
  articleModifiedTime: p("article:modified_time"),
  articlePublishedTime: p("article:published_time"),
  bookReleaseDate: p("book:release_date"),
  charset: {
    metaKey: "charset"
  },
  contentSecurityPolicy: {
    unpack: {
      entrySeparator: "; ",
      resolve({ key: key2, value }) {
        return `${fixKeyCase(key2)} ${value}`;
      }
    },
    metaKey: "http-equiv"
  },
  contentType: {
    metaKey: "http-equiv"
  },
  defaultStyle: {
    metaKey: "http-equiv"
  },
  fbAppId: p("fb:app_id"),
  msapplicationConfig: k("msapplication-Config"),
  msapplicationTileColor: k("msapplication-TileColor"),
  msapplicationTileImage: k("msapplication-TileImage"),
  ogAudioSecureUrl: p("og:audio:secure_url"),
  ogAudioUrl: p("og:audio"),
  ogImageSecureUrl: p("og:image:secure_url"),
  ogImageUrl: p("og:image"),
  ogSiteName: p("og:site_name"),
  ogVideoSecureUrl: p("og:video:secure_url"),
  ogVideoUrl: p("og:video"),
  profileFirstName: p("profile:first_name"),
  profileLastName: p("profile:last_name"),
  profileUsername: p("profile:username"),
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      resolve({ key: key2, value }) {
        if (key2 === "seconds")
          return `${value}`;
      }
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key: key2, value }) {
        if (typeof value === "boolean")
          return `${fixKeyCase(key2)}`;
        else
          return `${fixKeyCase(key2)}:${value}`;
      }
    }
  },
  xUaCompatible: {
    metaKey: "http-equiv"
  }
};
const openGraphNamespaces = /* @__PURE__ */ new Set([
  "og",
  "book",
  "article",
  "profile"
]);
function resolveMetaKeyType(key2) {
  var _a3;
  const fKey = fixKeyCase(key2);
  const prefixIndex = fKey.indexOf(":");
  if (openGraphNamespaces.has(fKey.substring(0, prefixIndex)))
    return "property";
  return ((_a3 = MetaPackingSchema[key2]) == null ? undefined : _a3.metaKey) || "name";
}
function resolveMetaKeyValue(key2) {
  var _a3;
  return ((_a3 = MetaPackingSchema[key2]) == null ? undefined : _a3.keyValue) || fixKeyCase(key2);
}
function fixKeyCase(key2) {
  const updated = key2.replace(/([A-Z])/g, "-$1").toLowerCase();
  const prefixIndex = updated.indexOf("-");
  const fKey = updated.substring(0, prefixIndex);
  if (fKey === "twitter" || openGraphNamespaces.has(fKey))
    return key2.replace(/([A-Z])/g, ":$1").toLowerCase();
  return updated;
}
function changeKeyCasingDeep(input) {
  if (Array.isArray(input)) {
    return input.map((entry2) => changeKeyCasingDeep(entry2));
  }
  if (typeof input !== "object" || Array.isArray(input))
    return input;
  const output = {};
  for (const key2 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key2)) {
      continue;
    }
    output[fixKeyCase(key2)] = changeKeyCasingDeep(input[key2]);
  }
  return output;
}
function resolvePackedMetaObjectValue(value, key2) {
  const definition = MetaPackingSchema[key2];
  if (key2 === "refresh")
    return `${value.seconds};url=${value.url}`;
  return unpackToString(
    changeKeyCasingDeep(value),
    {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve({ value: value2, key: key22 }) {
        if (value2 === null)
          return "";
        if (typeof value2 === "boolean")
          return `${key22}`;
      },
      ...definition == null ? undefined : definition.unpack
    }
  );
}
const ObjectArrayEntries = /* @__PURE__ */ new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function sanitize(input) {
  const out = {};
  for (const k2 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, k2)) {
      continue;
    }
    const v = input[k2];
    if (String(v) !== "false" && k2)
      out[k2] = v;
  }
  return out;
}
function handleObjectEntry(key2, v) {
  const value = sanitize(v);
  const fKey = fixKeyCase(key2);
  const attr = resolveMetaKeyType(fKey);
  if (ObjectArrayEntries.has(fKey)) {
    const input = {};
    for (const k2 in value) {
      if (!Object.prototype.hasOwnProperty.call(value, k2)) {
        continue;
      }
      input[`${key2}${k2 === "url" ? "" : `${k2[0].toUpperCase()}${k2.slice(1)}`}`] = value[k2];
    }
    return unpackMeta(input).sort((a3, b) => {
      var _a3, _b2;
      return (((_a3 = a3[attr]) == null ? undefined : _a3.length) || 0) - (((_b2 = b[attr]) == null ? undefined : _b2.length) || 0);
    });
  }
  return [{ [attr]: fKey, ...value }];
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  for (const key2 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key2)) {
      continue;
    }
    const value = input[key2];
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value) {
        if (ObjectArrayEntries.has(fixKeyCase(key2))) {
          extras.push(...handleObjectEntry(key2, value));
          continue;
        }
        primitives[key2] = sanitize(value);
      } else {
        primitives[key2] = value;
      }
      continue;
    }
    for (const v of value) {
      extras.push(...typeof v === "string" ? unpackMeta({ [key2]: v }) : handleObjectEntry(key2, v));
    }
  }
  const meta = unpackToArray(primitives, {
    key({ key: key2 }) {
      return resolveMetaKeyType(key2);
    },
    value({ key: key2 }) {
      return key2 === "charset" ? "charset" : "content";
    },
    resolveKeyData({ key: key2 }) {
      return resolveMetaKeyValue(key2);
    },
    resolveValueData({ value, key: key2 }) {
      if (value === null)
        return "_null";
      if (typeof value === "object")
        return resolvePackedMetaObjectValue(value, key2);
      return typeof value === "number" ? value.toString() : value;
    }
  });
  return [...extras, ...meta].map((m) => {
    if (m.content === "_null")
      m.content = null;
    return m;
  });
}
version[0] === "3";
function resolveUnref$2(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput$2(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref$2(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput$2(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput$2(root[k2]);
    }
    return resolved;
  }
  return root;
}
const headSymbol$2 = "usehead";
const _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$3 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global$2[globalKey$3] = handler;
}
function injectHead$2() {
  if (globalKey$3 in _global$2) {
    return _global$2[globalKey$3]();
  }
  const head = inject(headSymbol$2);
  return head || getActiveHead$2();
}
function useHead$2(input, options = {}) {
  const head = options.head || injectHead$2();
  if (head) {
    if (!head.ssr)
      return clientUseHead$2(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead$2(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput$2(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead$2({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t2) {
      const meta2 = unpackMeta({ ...t2._flatMeta });
      delete t2._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t2,
        meta: meta2
      };
    }
  });
}
function useServerHead(input, options = {}) {
  const head = options.head || injectHead$2();
  delete options.head;
  if (head)
    return head.push(input, { ...options, mode: "server" });
}
[CapoPlugin({ track: true })];
const unhead_8ef7s98CB2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== undefined) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === undefined) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = undefined;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = undefined;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : undefined;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key2, opts = {}) {
      if (!contexts[key2]) {
        contexts[key2] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key2];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
_globalThis[globalKey$2] || (_globalThis[globalKey$2] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a3;
    return ((_a3 = route.params[r.slice(1)]) == null ? undefined : _a3.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a3;
    return ((_a3 = m.components) == null ? undefined : _a3.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? undefined : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults2, namespace = ".", merger) {
  if (!isPlainObject$1(defaults2)) {
    return _defu(baseObject, {}, namespace);
  }
  const object = Object.assign({}, defaults2);
  for (const key2 in baseObject) {
    if (key2 === "__proto__" || key2 === "constructor") {
      continue;
    }
    const value = baseObject[key2];
    if (value === null || value === undefined) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key2])) {
      object[key2] = [...value, ...object[key2]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key2])) {
      object[key2] = _defu(
        value,
        object[key2],
        (namespace ? `${namespace}.` : "") + key2.toString());
    } else {
      object[key2] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p2, c) => _defu(p2, c, ""), {})
  );
}
const defu = createDefu();
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
const __nuxt_page_meta$2 = {
  middleware: ["host"]
};
const __nuxt_page_meta$1 = {
  middleware: ["host"]
};
const __nuxt_page_meta = {
  layout: "lander"
};
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "email-confirmation",
    path: "/email-confirmation",
    component: () => import('./email-confirmation-zGMvOtZs.mjs')
  },
  {
    name: "forgot-password",
    path: "/forgot-password",
    component: () => import('./index-D60f8hz0.mjs')
  },
  {
    name: "forgot-password-reset",
    path: "/forgot-password/reset",
    component: () => import('./reset-DqY2NiQM.mjs')
  },
  {
    name: "login",
    path: "/login",
    component: () => import('./login-YplksiLN.mjs')
  },
  {
    name: "reset-password",
    path: "/reset-password",
    component: () => import('./reset-password-pHzSLKDm.mjs')
  },
  {
    name: "signup-audience",
    path: "/signup/audience",
    component: () => import('./audience-Bb9Nz20r.mjs')
  },
  {
    name: "signup-host",
    path: "/signup/host",
    component: () => import('./host-0WJownL-.mjs')
  },
  {
    name: "signup",
    path: "/signup",
    component: () => import('./index-Cli2J9TZ.mjs')
  },
  {
    name: "create-event",
    path: "/create-event",
    meta: __nuxt_page_meta$2,
    component: () => import('./create-event-BXtVepnx.mjs')
  },
  {
    name: "events-id-event-details",
    path: "/events/:id()/event-details",
    component: () => import('./event-details-DDxPBNb2.mjs')
  },
  {
    name: "events-id-event-earnings",
    path: "/events/:id()/event-earnings",
    component: () => import('./event-earnings-xwMqrjmr.mjs')
  },
  {
    name: "events-id",
    path: "/events/:id()",
    component: () => import('./index-CcnH33PY.mjs')
  },
  {
    name: "events",
    path: "/events",
    component: () => import('./index-DQCG-t7R.mjs')
  },
  {
    name: "host-event_id-request_id-make-payment",
    path: "/:host()/:event_id()/:request_id()/make-payment",
    component: () => import('./make-payment-B3kI2Auy.mjs')
  },
  {
    name: "host-event_id-request_id-request-receipt",
    path: "/:host()/:event_id()/:request_id()/request-receipt",
    component: () => import('./request-receipt-CQz_F08H.mjs')
  },
  {
    name: "host-event_id-make-a-request",
    path: "/:host()/:event_id()/make-a-request",
    component: () => import('./make-a-request-a5E545bF.mjs')
  },
  {
    name: "host",
    path: "/:host()",
    component: () => import('./index-CkBdc44q.mjs')
  },
  {
    name: "audience",
    path: "/audience",
    component: () => import('./audience-meYPFfMu.mjs')
  },
  {
    name: "community-guidelines",
    path: "/community-guidelines",
    component: () => import('./community-guidelines-WdWkkE0Y.mjs')
  },
  {
    name: "dashboard",
    path: "/dashboard",
    meta: __nuxt_page_meta$1,
    component: () => import('./dashboard-D5PvNDDd.mjs')
  },
  {
    name: "following",
    path: "/following",
    component: () => import('./following-DtR6ltFK.mjs')
  },
  {
    name: "index",
    path: "/",
    meta: __nuxt_page_meta,
    component: () => import('./index-8RPLZZPz.mjs')
  },
  {
    name: "order-history",
    path: "/order-history",
    component: () => import('./order-history-DiKm1to9.mjs')
  },
  {
    name: "privacy-policy",
    path: "/privacy-policy",
    component: () => import('./privacy-policy-i0S5-rfs.mjs')
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import('./profile-giekCJUo.mjs')
  },
  {
    name: "search",
    path: "/search",
    component: () => import('./search-kcixDRVm.mjs')
  },
  {
    name: "terms",
    path: "/terms",
    component: () => import('./terms-WQBAI-JB.mjs')
  },
  {
    name: "wallet-reference-event-earnings",
    path: "/wallet/:reference()/event-earnings",
    component: () => import('./event-earnings-B4RzWpJO.mjs')
  },
  {
    name: "wallet-reference-event-payout",
    path: "/wallet/:reference()/event-payout",
    component: () => import('./event-payout-BsZXgXzZ.mjs')
  },
  {
    name: "wallet",
    path: "/wallet",
    component: () => import('./index-DuCZQ-ok.mjs')
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a3;
    return props ? h(component, props, slots) : (_a3 = slots.default) == null ? undefined : _a3.call(slots);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? undefined : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a3;
    return ((_a3 = route.params[r.slice(1)]) == null ? undefined : _a3.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to2, from) {
  if (to2 === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to2) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to2.matched.every(
    (comp, index) => {
      var _a3, _b2;
      return comp.components && comp.components.default === ((_b2 = (_a3 = from.matched[index]) == null ? undefined : _a3.components) == null ? undefined : _b2.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to2, from, savedPosition) {
    var _a3;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a3 = useRouter().options) == null ? undefined : _a3.scrollBehaviorType) ?? "auto";
    let position = savedPosition || undefined;
    const routeAllowsScrollToTop = typeof to2.meta.scrollToTop === "function" ? to2.meta.scrollToTop(to2, from) : to2.meta.scrollToTop;
    if (!position && from && to2 && routeAllowsScrollToTop !== false && isChangingPage(to2, from)) {
      position = { left: 0, top: 0 };
    }
    if (to2.path === from.path) {
      if (from.hash && !to2.hash) {
        return { left: 0, top: 0 };
      }
      if (to2.hash) {
        return { el: to2.hash, top: _getHashElementScrollMarginTop(to2.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to2) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to2.hash) {
          position = { el: to2.hash, top: _getHashElementScrollMarginTop(to2.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to2) => {
  var _a3;
  let __temp, __restore;
  if (!((_a3 = to2.meta) == null ? undefined : _a3.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to2.meta.validate(to2))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to2.fullPath}`,
    data: {
      path: to2.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to2) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _b2;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : undefined;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key2, _handler, options = {}] = args;
  if (typeof key2 !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key2] : nuxtApp.static.data[key2];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const initialCachedData = options.getCachedData(key2, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key2] || !options.immediate) {
    (_b2 = nuxtApp.payload._errors)[key2] ?? (_b2[key2] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key2] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key2),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key2] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key2]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key2];
      }
      nuxtApp._asyncDataPromises[key2].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key2, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key2];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key2] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key2];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key2];
    });
    nuxtApp._asyncDataPromises[key2] = promise;
    return nuxtApp._asyncDataPromises[key2];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key2);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key2]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key2) {
  if (key2 in nuxtApp.payload.data) {
    nuxtApp.payload.data[key2] = undefined;
  }
  if (key2 in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key2] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key2]) {
    nuxtApp._asyncData[key2].data.value = undefined;
    nuxtApp._asyncData[key2].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key2].pending.value = false;
    nuxtApp._asyncData[key2].status.value = "idle";
  }
  if (key2 in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key2]) {
      nuxtApp._asyncDataPromises[key2].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key2] = undefined;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key2 of keys) {
    newObj[key2] = obj[key2];
  }
  return newObj;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : undefined;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== undefined && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key2 = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key2);
  if (state.value === undefined && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key2] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: undefined,
  excludeValues: undefined,
  replacer: undefined
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === undefined) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key2) => {
            return !options.excludeKeys(key2);
          });
          extraKeys = extraKeys.filter((key2) => {
            return !options.excludeKeys(key2);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key2) => {
          this.dispatch(key2);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key2]);
          }
          write(",");
        };
        for (const key2 of keys) {
          dispatchForKey(key2);
        }
        for (const key2 of extraKeys) {
          dispatchForKey(key2);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === undefined ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry2 of arr) {
          this.dispatch(entry2);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        for (const [key2, value] of hasher.getContext()) {
          contextAdditions.set(key2, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn2) {
      write("fn:");
      if (isNativeFunction(fn2)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn2.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn2.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn2);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set2) {
      write("set:");
      const arr = [...set2];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f2) {
  if (typeof f2 !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f2).slice(-nativeFuncLength) === nativeFunc;
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key2, value) => key2 in obj ? __defProp$1(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField$1 = (obj, key2, value) => {
  __defNormalProp$1(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === undefined ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset2 = 0; offset2 < nWordsReady; offset2 += this.blockSize) {
        this._doProcessBlock(this._data.words, offset2);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key2, value) => key2 in obj ? __defProp2(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField2 = (obj, key2, value) => {
  __defNormalProp2(obj, key2 + "", value);
  return value;
};
const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField2(this, "_hash", new WordArray([...H]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset2) {
    const H2 = this._hash.words;
    let a3 = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d2 = H2[3];
    let e = H2[4];
    let f2 = H2[5];
    let g2 = H2[6];
    let h2 = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset2 + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch2 = e & f2 ^ ~e & g2;
      const maj = a3 & b ^ a3 & c ^ b & c;
      const sigma0 = (a3 << 30 | a3 >>> 2) ^ (a3 << 19 | a3 >>> 13) ^ (a3 << 10 | a3 >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h2 + sigma1 + ch2 + K[i] + W[i];
      const t2 = sigma0 + maj;
      h2 = g2;
      g2 = f2;
      f2 = e;
      e = d2 + t1 | 0;
      d2 = c;
      c = b;
      b = a3;
      a3 = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a3 | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d2 | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f2 | 0;
    H2[6] = H2[6] + g2 | 0;
    H2[7] = H2[7] + h2 | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}
function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a3;
  return (_a3 = nuxtApp.ssrContext) == null ? undefined : _a3.event;
}
function useRequestFetch() {
  var _a3;
  return ((_a3 = useRequestEvent()) == null ? undefined : _a3.$fetch) || globalThis.$fetch;
}
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key2 = str.slice(index, eqIdx).trim();
    if ((opt == null ? undefined : opt.filter) && !(opt == null ? undefined : opt.filter(key2))) {
      index = endIdx + 1;
      continue;
    }
    if (undefined === obj[key2]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function klona(x) {
  if (typeof x !== "object") return x;
  var k2, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    if (x.constructor !== Object && typeof x.constructor === "function") {
      tmp = new x.constructor();
      for (k2 in x) {
        if (x.hasOwnProperty(k2) && tmp[k2] !== x[k2]) {
          tmp[k2] = klona(x[k2]);
        }
      }
    } else {
      tmp = {};
      for (k2 in x) {
        if (k2 === "__proto__") {
          Object.defineProperty(tmp, k2, {
            value: klona(x[k2]),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          tmp[k2] = klona(x[k2]);
        }
      }
    }
    return tmp;
  }
  if (str === "[object Array]") {
    k2 = x.length;
    for (tmp = Array(k2); k2--; ) {
      tmp[k2] = klona(x[k2]);
    }
    return tmp;
  }
  if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
    return tmp;
  }
  if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key2) {
      tmp.set(klona(key2), klona(val));
    });
    return tmp;
  }
  if (str === "[object Date]") {
    return /* @__PURE__ */ new Date(+x);
  }
  if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
    tmp.lastIndex = x.lastIndex;
    return tmp;
  }
  if (str === "[object DataView]") {
    return new x.constructor(klona(x.buffer));
  }
  if (str === "[object ArrayBuffer]") {
    return x.slice(0);
  }
  if (str.slice(-6) === "Array]") {
    return new x.constructor(x);
  }
  return x;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a3;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key2) => key2 === name);
  const cookies2 = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== undefined) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== undefined && delay <= 0;
  const cookieValue = klona(hasExpired ? undefined : cookies2[name] ?? ((_a3 = opts.default) == null ? undefined : _a3.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies2[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== undefined) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== undefined) {
      return deleteCookie(event, name, opts);
    }
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && true) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn2) => fn2();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key2) => target.set(key2, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key2 in patchToApply) {
    if (!patchToApply.hasOwnProperty(key2))
      continue;
    const subPatch = patchToApply[key2];
    const targetValue = target[key2];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key2) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key2] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key2] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id2, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id2];
  let store;
  function setup() {
    if (!initialState && (true)) {
      {
        pinia.state.value[id2] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id2]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id2);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id2, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (true)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn2, name = "") => {
    if (ACTION_MARKER in fn2) {
      fn2[ACTION_NAME] = name;
      return fn2;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn2.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key2 in setupStore) {
    const prop = setupStore[key2];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key2];
          } else {
            mergeReactiveObjects(prop, initialState[key2]);
          }
        }
        {
          pinia.state.value[$id][key2] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key2);
      {
        setupStore[key2] = actionValue;
      }
      optionsForPlugin.actions[key2] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id2;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id2 = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id2 = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id2)) {
      if (isSetupStore) {
        createSetupStore(id2, setup, options, pinia);
      } else {
        createOptionsStore(id2, options, pinia);
      }
    }
    const store = pinia._s.get(id2);
    return store;
  }
  useStore.$id = id2;
  return useStore;
}
const AUTH_TOKEN_KEY = "SPIN_TOKEN";
const AUTH_USER_KEY = "SPIN_AUTH_USER";
const useAuthStore = /* @__PURE__ */ defineStore(
  "auth-store",
  () => {
    const cookie_token = useCookie(AUTH_TOKEN_KEY);
    const auth_token = ref(cookie_token.value);
    const auth_user = ref(null);
    const isLoggedIn = computed(() => !!auth_token.value);
    const saveAuthUser = (token, user) => {
      auth_token.value = token;
      auth_user.value = user;
      cookie_token.value = token;
    };
    const resetAuthUser = () => {
      auth_token.value = null;
      auth_user.value = null;
      cookie_token.value = null;
    };
    return {
      auth_token,
      auth_user,
      isLoggedIn,
      saveAuthUser,
      resetAuthUser
    };
  },
  {
    persist: {
      key: AUTH_USER_KEY,
      omit: ["auth_token", "auth_user.qrcode", "auth_user.bank_account"]
    }
  }
);
const useAuth = () => {
  const store = useAuthStore();
  const { saveAuthUser, resetAuthUser } = store;
  const logOut = (onDone) => {
    resetAuthUser();
    onDone == null ? undefined : onDone();
  };
  const isEmailVerified = computed(() => {
    var _a3;
    return !!((_a3 = store == null ? undefined : store.auth_user) == null ? undefined : _a3.email_verified);
  });
  const authEmail = computed(() => {
    var _a3;
    return ((_a3 = store == null ? undefined : store.auth_user) == null ? undefined : _a3.email) ?? "";
  });
  return {
    auth_token: computed(() => store.auth_token),
    auth_user: computed(() => store.auth_user),
    isLoggedIn: computed(() => store.isLoggedIn),
    authEmail,
    isEmailVerified,
    saveAuthUser,
    logOut
  };
};
const auth_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to2) => {
  const AUTH_PAGES = [
    "login",
    "signup",
    "forgot-password",
    "reset-password",
    "email-confirmation"
  ];
  const GUEST_PAGES = ["privacy-policy", "terms", "community-guidelines"];
  const isGuestPage = to2.path === "/" || to2.name === "host" || GUEST_PAGES.some((page) => to2.path.includes(page));
  const { isLoggedIn, isEmailVerified } = useAuth();
  const isAuthPage = AUTH_PAGES.some((page) => to2.path.includes(page));
  const isEmailConfirmationPage = to2.path.includes("email-confirmation");
  if (isGuestPage) return;
  if (!isLoggedIn.value && !isAuthPage) {
    return navigateTo("/login");
  }
  if (isLoggedIn.value && !isEmailVerified.value && !isEmailConfirmationPage && !isAuthPage) {
    return navigateTo("/email-confirmation");
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to2) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  auth_45global,
  manifest_45route_45rule
];
const namedMiddleware = {
  host: () => import('./host-C2ahD76K.mjs')
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a3, _b2, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a3 = routerOptions.history) == null ? undefined : _a3.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to2, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (undefined).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (undefined).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to2, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to2, from) => {
      var _a4, _b3, _c2, _d2;
      if (((_b3 = (_a4 = to2.matched[0]) == null ? undefined : _a4.components) == null ? undefined : _b3.default) === ((_d2 = (_c2 = from.matched[0]) == null ? undefined : _c2.components) == null ? undefined : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key2 in _route.value) {
      Object.defineProperty(route, key2, {
        get: () => _route.value[key2],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b2 = nuxtApp.ssrContext) == null ? undefined : _b2.islandContext)) {
      router.afterEach(async (to2, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? undefined : failure.type) === 4) {
          return;
        }
        if (to2.redirectedFrom && to2.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to2.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? undefined : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to2, from) => {
      var _a4, _b3;
      await nuxtApp.callHook("page:loading:start");
      to2.meta = reactive(to2.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to2.meta.layout)) {
        to2.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a4 = nuxtApp.ssrContext) == null ? undefined : _a4.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to2.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to2.path }));
          if (routeRules.appMiddleware) {
            for (const key2 in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key2]) {
                middlewareEntries.add(key2);
              } else {
                middlewareEntries.delete(key2);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? undefined : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to2, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to2, _from) => {
      if (to2.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to2.fullPath}`,
          data: {
            path: to2.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const _0_siteConfig_D4ElaNe2Jv = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a3;
    const state = useState("site-config");
    {
      const context = (_a3 = useRequestEvent()) == null ? undefined : _a3.context;
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = context == null ? undefined : context.siteConfig.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    let stack = {};
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_3HHrq5VadZ = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn2] of reducers) {
      definePayloadReducer(reducer, fn2);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = pinia.state.value;
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const robot_meta_server_L8cXGCJ2lC = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    var _a3;
    const event = useRequestEvent();
    const ctx = (_a3 = event == null ? undefined : event.context) == null ? undefined : _a3.robots;
    if (!ctx)
      return;
    const config = /* @__PURE__ */ useRuntimeConfig();
    useServerHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => {
            var _a4, _b2;
            return ((_a4 = config["nuxt-robots"]) == null ? undefined : _a4.debug) ? (_b2 = ctx.debug) == null ? undefined : _b2.source : undefined;
          }
        }
      ]
    });
  }
});
var activeHead$1;
function getActiveHead$1() {
  return activeHead$1;
}
version[0] === "3";
function resolveUnref$1(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput$1(ref3) {
  if (ref3 instanceof Promise || ref3 instanceof Date || ref3 instanceof RegExp)
    return ref3;
  const root = resolveUnref$1(ref3);
  if (!ref3 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput$1(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput$1(root[k2]);
    }
    return resolved;
  }
  return root;
}
var headSymbol$1 = "usehead";
var _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey$1 = "__unhead_injection_handler__";
function injectHead$1() {
  if (globalKey$1 in _global$1) {
    return _global$1[globalKey$1]();
  }
  const head = inject(headSymbol$1);
  return head || getActiveHead$1();
}
function useHead$1(input, options = {}) {
  const head = options.head || injectHead$1();
  if (head) {
    if (!head.ssr)
      return clientUseHead$1(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead$1(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput$1(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
var vuePlugin = {
  install(Vue) {
    Vue.mixin({
      created() {
        var _a3;
        if (typeof ((_a3 = this.$options) == null ? undefined : _a3.jsonld) !== "function") {
          return;
        }
        const jsonComputed = computed(() => this.$options.jsonld.call(this));
        useHead$1(() => ({
          script: [
            {
              type: "application/ld+json",
              children: jsonComputed.value ? JSON.stringify(jsonComputed.value, null, "") : undefined
            }
          ]
        }));
      }
    });
  }
};
var plugin_default = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuePlugin);
});
function get(obj, path) {
  if (obj == null)
    return undefined;
  let value = obj;
  for (let i = 0; i < path.length; i++) {
    if (value == null || value[path[i]] == null)
      return undefined;
    value = value[path[i]];
  }
  return value;
}
function set(obj, value, path) {
  if (path.length === 0)
    return value;
  const idx = path[0];
  if (path.length > 1) {
    value = set(
      typeof obj !== "object" || obj === null || !Object.prototype.hasOwnProperty.call(obj, idx) ? Number.isInteger(Number(path[1])) ? [] : {} : obj[idx],
      value,
      Array.prototype.slice.call(path, 1)
    );
  }
  if (Number.isInteger(Number(idx)) && Array.isArray(obj))
    return obj.slice()[idx];
  return Object.assign({}, obj, { [idx]: value });
}
function unset(obj, path) {
  if (obj == null || path.length === 0)
    return obj;
  if (path.length === 1) {
    if (obj == null)
      return obj;
    if (Number.isInteger(path[0]) && Array.isArray(obj))
      return Array.prototype.slice.call(obj, 0).splice(path[0], 1);
    const result = {};
    for (const p2 in obj)
      result[p2] = obj[p2];
    delete result[path[0]];
    return result;
  }
  if (obj[path[0]] == null) {
    if (Number.isInteger(path[0]) && Array.isArray(obj))
      return Array.prototype.concat.call([], obj);
    const result = {};
    for (const p2 in obj)
      result[p2] = obj[p2];
    return result;
  }
  return set(
    obj,
    unset(
      obj[path[0]],
      Array.prototype.slice.call(path, 1)
    ),
    [path[0]]
  );
}
function deepPickUnsafe(obj, paths) {
  return paths.map((p2) => p2.split(".")).map((p2) => [p2, get(obj, p2)]).filter((t2) => t2[1] !== undefined).reduce((acc, cur) => set(acc, cur[1], cur[0]), {});
}
function deepOmitUnsafe(obj, paths) {
  return paths.map((p2) => p2.split(".")).reduce((acc, cur) => unset(acc, cur), obj);
}
function hydrateStore(store, {
  storage,
  serializer,
  key: key2,
  debug,
  pick: pick2,
  omit,
  beforeHydrate,
  afterHydrate
}, context, runHooks = true) {
  try {
    if (runHooks)
      beforeHydrate == null ? void 0 : beforeHydrate(context);
    const fromStorage = storage.getItem(key2);
    if (fromStorage) {
      const deserialized = serializer.deserialize(fromStorage);
      const picked = pick2 ? deepPickUnsafe(deserialized, pick2) : deserialized;
      const omitted = omit ? deepOmitUnsafe(picked, omit) : picked;
      store.$patch(omitted);
    }
    if (runHooks)
      afterHydrate == null ? void 0 : afterHydrate(context);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function persistState(state, {
  storage,
  serializer,
  key: key2,
  debug,
  pick: pick2,
  omit
}) {
  try {
    const picked = pick2 ? deepPickUnsafe(state, pick2) : state;
    const omitted = omit ? deepOmitUnsafe(picked, omit) : picked;
    const toStorage = serializer.serialize(omitted);
    storage.setItem(key2, toStorage);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function createPersistence(context, optionsParser, auto) {
  const { pinia, store, options: { persist = auto } } = context;
  if (!persist)
    return;
  if (!(store.$id in pinia.state.value)) {
    const originalStore = pinia._s.get(store.$id.replace("__hot:", ""));
    if (originalStore)
      Promise.resolve().then(() => originalStore.$persist());
    return;
  }
  const persistenceOptions = Array.isArray(persist) ? persist : persist === true ? [{}] : [persist];
  const persistences = persistenceOptions.map(optionsParser);
  store.$hydrate = ({ runHooks = true } = {}) => {
    persistences.forEach((p2) => {
      hydrateStore(store, p2, context, runHooks);
    });
  };
  store.$persist = () => {
    persistences.forEach((p2) => {
      persistState(store.$state, p2);
    });
  };
  persistences.forEach((p2) => {
    hydrateStore(store, p2, context);
    store.$subscribe(
      (_mutation, state) => persistState(state, p2),
      { detached: true }
    );
  });
}
function cookies(options) {
  return {
    getItem: (key2) => useCookie(
      key2,
      {
        ...options ?? (/* @__PURE__ */ useRuntimeConfig()).public.piniaPluginPersistedstate.cookieOptions ?? {},
        decode: decodeURIComponent,
        readonly: true
      }
    ).value,
    setItem: (key2, value) => useCookie(
      key2,
      {
        ...options ?? (/* @__PURE__ */ useRuntimeConfig()).public.piniaPluginPersistedstate.cookieOptions ?? {},
        encode: encodeURIComponent
      }
    ).value = value
  };
}
function localStorage() {
  return {
    getItem: (key2) => null,
    setItem: (key2, value) => null
  };
}
function sessionStorage() {
  return {
    getItem: (key2) => null,
    setItem: (key2, value) => null
  };
}
const storages = {
  cookies,
  localStorage,
  sessionStorage
};
function piniaPlugin(context) {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const options = config.public.piniaPluginPersistedstate;
  createPersistence(
    context,
    (p2) => ({
      key: options.key ? options.key.replace(/%id/g, p2.key ?? context.store.$id) : p2.key ?? context.store.$id,
      debug: p2.debug ?? options.debug ?? false,
      serializer: p2.serializer ?? {
        serialize: (data) => JSON.stringify(data),
        deserialize: (data) => destr(data)
      },
      storage: p2.storage ?? (options.storage ? options.storage === "cookies" ? storages.cookies(options.cookieOptions) : storages[options.storage]() : storages.cookies()),
      beforeHydrate: p2.beforeHydrate,
      afterHydrate: p2.afterHydrate,
      pick: p2.pick,
      omit: p2.omit
    }),
    options.auto ?? false
  );
}
const plugin_iXMUowBSMe = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia-plugin-persistedstate",
  setup({ $pinia }) {
    $pinia.use(piniaPlugin);
  }
});
let Auth$5 = class Auth {
  constructor(fetcher) {
    __publicField(this, "$fetch");
    __publicField(this, "REGISTER_AUDIENCE", "/register");
    __publicField(this, "REGISTER_HOST", "/registerhost");
    __publicField(this, "LOGIN_USER", "/login");
    __publicField(this, "USER_PROFILE", "/user");
    __publicField(this, "EMAIL_VERIFICATION", "/email/verify");
    __publicField(this, "RESEND_VERIFICATION_EMAIL", "/resendverification");
    __publicField(this, "FORGOT_PASSWORD", "/forgot-password");
    __publicField(this, "RESET_PASSWORD", "/reset-password");
    __publicField(this, "CHANGE_PASSWORD", "/change-password");
    __publicField(this, "UPLOAD_FILE", "/user/profile-picture");
    __publicField(this, "UPDATE_PROFILE", "/user/profile");
    this.$fetch = fetcher;
  }
  async call(method, route, data, options) {
    return this.$fetch(route, {
      method,
      body: data,
      ...options
    });
  }
  async registerAudience(body) {
    return await this.call("POST", this.REGISTER_AUDIENCE, body);
  }
  async registerHost(body) {
    return await this.call("POST", this.REGISTER_HOST, body);
  }
  async loginUser(body) {
    return await this.call("POST", this.LOGIN_USER, body);
  }
  async fetchProfile() {
    return await this.call("GET", `${this.USER_PROFILE}?stat=true`);
  }
  async verifyEmail(user_id, signature) {
    return await this.call(
      "GET",
      `${this.EMAIL_VERIFICATION}/${user_id}/${signature}`
    );
  }
  async resendEmail(user_id) {
    return await this.call(
      "POST",
      `${this.RESEND_VERIFICATION_EMAIL}/${user_id}`
    );
  }
  async requestResetLink(email) {
    return await this.call("POST", this.FORGOT_PASSWORD, { email });
  }
  async resetPassword(payload) {
    return await this.call("POST", this.RESET_PASSWORD, payload);
  }
  async changePassword(payload) {
    return await this.call("POST", this.CHANGE_PASSWORD, payload);
  }
  async uploadFile(payload) {
    return await this.call("POST", this.UPLOAD_FILE, payload);
  }
  async updateProfile(payload) {
    return await this.call(
      "POST",
      this.UPDATE_PROFILE,
      payload
    );
  }
};
let Auth$4 = class Auth2 {
  constructor(fetcher) {
    __publicField(this, "$fetch");
    __publicField(this, "SEARCH_HOST", "user/search-host");
    this.$fetch = fetcher;
  }
  async call(method, route, data, options) {
    return this.$fetch(route, {
      method,
      body: data,
      ...options
    });
  }
  async searchHost(name) {
    return this.call(
      "GET",
      `${this.SEARCH_HOST}?name=${name}&per_page=100&page=1`
    );
  }
};
let Auth$3 = class Auth3 {
  constructor(fetcher) {
    __publicField(this, "$fetch");
    __publicField(this, "CREATE_EVENT", "events");
    __publicField(this, "GO_LIVE", "events/go-live");
    __publicField(this, "UPDATE_EVENT_PRICE", "events/type");
    __publicField(this, "END_EVENT", "events/end");
    __publicField(this, "UPDATE_EVENT_REQUEST", "requests/status");
    __publicField(this, "EVENT_REQUESTS", "requests");
    __publicField(this, "CREATE_REQUEST", "requests");
    __publicField(this, "DELETE_EVENT", "events");
    __publicField(this, "ALL_NOTIFICATIONS", "user/notification");
    __publicField(this, "MARK_NOTIFICATION_AS_READ", "user/mark/notification-read");
    this.$fetch = fetcher;
  }
  async call(method, route, data, options) {
    return this.$fetch(route, {
      method,
      body: data,
      ...options
    });
  }
  async createEvent(event) {
    return await this.call("POST", this.CREATE_EVENT, event);
  }
  async editEvent(event, event_id) {
    return await this.call(
      "PUT",
      `${this.CREATE_EVENT}/${event_id}`,
      event
    );
  }
  async deleteEvent(event_id) {
    return await this.call(
      "DELETE",
      `${this.DELETE_EVENT}/${event_id}`
    );
  }
  async goLive(event_id) {
    return await this.call("PUT", `${this.GO_LIVE}/${event_id}`);
  }
  async updateEventPrice(type_id, price) {
    return await this.call("PUT", `${this.UPDATE_EVENT_PRICE}/${type_id}`, { price });
  }
  async endEvent(event_id) {
    return await this.call("PUT", `${this.END_EVENT}/${event_id}`);
  }
  async getEventRequests(event_id) {
    return await this.call(
      "GET",
      `${this.EVENT_REQUESTS}?event_id=${event_id}`
    );
  }
  async fetchRequestDetails(request_id) {
    return await this.call("GET", `/requests/${request_id}`);
  }
  async updateEventRequest(request_id, status) {
    return await this.call(
      "PUT",
      `${this.UPDATE_EVENT_REQUEST}/${request_id}`,
      { status }
    );
  }
  async createRequest(request) {
    return await this.call("POST", this.CREATE_REQUEST, request);
  }
  async payForRequest(payload, request_id) {
    return await this.call(
      "POST",
      `payment/requests/${request_id}/payment/create`,
      payload
    );
  }
  async fetchAllNotifications() {
    return await this.call("GET", this.ALL_NOTIFICATIONS);
  }
  async markNotificationAsRead(id2) {
    return await this.call("GET", `${this.MARK_NOTIFICATION_AS_READ}/${id2}`);
  }
  async markAllNotificationsAsRead() {
    return await this.call("GET", this.MARK_NOTIFICATION_AS_READ);
  }
};
let Auth$2 = class Auth4 {
  constructor(fetcher) {
    __publicField(this, "$fetch");
    this.$fetch = fetcher;
  }
  async call(method, route, data, options) {
    return this.$fetch(route, {
      method,
      body: data,
      ...options
    });
  }
  async payForRequest(payload, request_id) {
    return await this.call(
      "POST",
      `payment/requests/${request_id}/payment/create`,
      payload
    );
  }
  async verifyPayment(reference) {
    return await this.call(
      "GET",
      `transactions/${reference}/verify`
    );
  }
};
let Auth$1 = class Auth5 {
  constructor(fetcher) {
    __publicField(this, "$fetch");
    this.$fetch = fetcher;
  }
  async call(method, route, data, options) {
    return this.$fetch(route, {
      method,
      body: data,
      ...options
    });
  }
  async fetchBankList() {
    return await this.call("GET", "/bankaccount/list");
  }
  async verifyBankAccount(payload) {
    return await this.call(
      "POST",
      "/bankaccount/verification",
      payload
    );
  }
};
class Auth6 {
  constructor(fetcher) {
    __publicField(this, "$fetch");
    this.$fetch = fetcher;
  }
  async call(method, route, data, options) {
    return this.$fetch(route, {
      method,
      body: data,
      ...options
    });
  }
  async getWallet() {
    return await this.$fetch("/wallets?page=1&per_page=10", {
      method: "GET"
    });
  }
}
const apiModules = (fetcher) => {
  const AuthModule = new Auth$5(fetcher);
  const UserModule = new Auth$4(fetcher);
  const EventModule = new Auth$3(fetcher);
  const PaymentModule = new Auth$2(fetcher);
  const BankModule = new Auth$1(fetcher);
  const WalletModule = new Auth6(fetcher);
  return {
    auth: AuthModule,
    user: UserModule,
    event: EventModule,
    payment: PaymentModule,
    bank: BankModule,
    wallet: WalletModule
  };
};
const api_GFfDXud5Cr = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const {
    public: { API_BASE_URL: baseURL2 }
  } = /* @__PURE__ */ useRuntimeConfig();
  const api = $fetch.create({
    baseURL: baseURL2,
    onRequest({ request, options, error }) {
      const { auth_token: token } = useAuth();
      if (token.value) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
      {
        const serverOrigin = process.env.APP_BASE_URL || "https://prod.d1yrrs2ihyi11j.amplifyapp.com";
        options.headers.set("Origin", serverOrigin);
      }
    },
    async onResponseError({ response }) {
      var _a3;
      if (response.status === 401) {
        const path = ((_a3 = useRoute()) == null ? undefined : _a3.path) ?? null;
        await nuxtApp.runWithContext(
          () => navigateTo(`/login?redirect_from=${path}`)
        );
      }
    }
  });
  const modules = apiModules(api);
  return {
    provide: {
      api,
      repo: { ...modules }
    }
  };
});
const plugins = [
  unhead_8ef7s98CB2,
  plugin$1,
  _0_siteConfig_D4ElaNe2Jv,
  revive_payload_server_3HHrq5VadZ,
  plugin,
  components_plugin_KR1HBZs4kY,
  robot_meta_server_L8cXGCJ2lC,
  plugin_default,
  plugin_iXMUowBSMe,
  api_GFfDXud5Cr
];
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = () => {
    error.value = false;
    set2(0);
  };
  function set2(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set: set2,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || undefined,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const layouts = {
  auth: defineAsyncComponent(() => import('./auth-BF4TVhoQ.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-t_WOVnQq.mjs').then((m) => m.default || m)),
  lander: defineAsyncComponent(() => import('./lander-BiI7YxZP.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || undefined,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a3, _b2;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b2 = (_a3 = context.slots).default) == null ? undefined : _b2.call(_a3);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key2 in props.route) {
      Object.defineProperty(route, key2, {
        get: () => previousKey === props.renderKey ? props.route[key2] : previousRoute[key2],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: undefined
    },
    keepalive: {
      type: [Boolean, Object],
      default: undefined
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key2 = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key2) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key2;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key2 || undefined,
                    vnode: slots.default ? h(Fragment, undefined, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key2 || undefined,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : undefined
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a3;
    return ((_a3 = m.components) == null ? undefined : _a3.default) === (Component == null ? undefined : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === undefined) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr2 = ["left", "right"];
  const rl2 = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl2 : lr2;
      return isStart ? lr2 : rl2;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? undefined : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn: fn2
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn2({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === undefined) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? undefined : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? undefined : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? undefined : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? undefined : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? undefined : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$2 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? undefined : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? undefined : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? undefined : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? undefined : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? undefined : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a3, b) => a3.overflows[1] - b.overflows[1])[0]) == null ? undefined : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a3, b) => a3[1] - b[1])[0]) == null ? undefined : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? undefined : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === undefined) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? undefined : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? undefined : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getNodeName(node) {
  if (isNode()) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? undefined : _node$ownerDocument.defaultView) || undefined;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode() ? node.ownerDocument : node.document) || (undefined).document) == null ? undefined : _ref.documentElement;
}
function isNode(value) {
  {
    return false;
  }
}
function isElement(value) {
  {
    return false;
  }
}
function isHTMLElement(value) {
  {
    return false;
  }
}
function isShadowRoot(value) {
  {
    return false;
  }
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement() ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement() && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement()) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot() && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot() ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement() && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === undefined) {
    list = [];
  }
  if (traverseIframes === undefined) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? undefined : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement();
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement$1(element) {
  return !isElement() ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement$1(element);
  if (!isHTMLElement()) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement$1(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement()) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement() ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === undefined) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement();
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement()) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement() ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement()) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement() || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el2) => isElement() && getNodeName(el2) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement() && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement();
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement() || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement()) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement() && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a3, b) {
  return a3.x === b.x && a3.y === b.y && a3.width === b.width && a3.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === undefined) {
      skip = false;
    }
    if (threshold === undefined) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === undefined) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement$1(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow$1 = arrow$2;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode() && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function toValue(source) {
  return typeof source === "function" ? source() : unref(source);
}
function arrow(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement(toValue(options.element));
      if (element == null) {
        return {};
      }
      return arrow$1({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  {
    return 1;
  }
}
function roundByDPR(element, value) {
  const dpr = getDPR();
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === undefined) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _toValue;
    return (_toValue = toValue(options.open)) != null ? _toValue : true;
  });
  const middlewareOption = computed(() => toValue(options.middleware));
  const placementOption = computed(() => {
    var _toValue2;
    return (_toValue2 = toValue(options.placement)) != null ? _toValue2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _toValue3;
    return (_toValue3 = toValue(options.strategy)) != null ? _toValue3 : "absolute";
  });
  const transformOption = computed(() => {
    var _toValue4;
    return (_toValue4 = toValue(options.transform)) != null ? _toValue4 : true;
  });
  const referenceElement = computed(() => unwrapElement(reference.value));
  const floatingElement = computed(() => unwrapElement(floating.value));
  const x = ref(0);
  const y = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    const open = openOption.value;
    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = open !== false;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = undefined;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === undefined) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption, openOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}
let $488c6ddbf4ef74c2$var$formatterCache = /* @__PURE__ */ new Map();
let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
  $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
  $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const $488c6ddbf4ef74c2$var$UNITS = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(value) {
    let res = "";
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
    else res = this.numberFormatter.format(value);
    if (this.options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
      var _UNITS_unit;
      let { unit, unitDisplay = "short", locale } = this.resolvedOptions();
      if (!unit) return res;
      let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === undefined ? undefined : _UNITS_unit[unitDisplay];
      res += values[locale] || values.default;
    }
    return res;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(value) {
    return this.numberFormatter.formatToParts(value);
  }
  /** Formats a number range as a string. */
  formatRange(start, end) {
    if (typeof this.numberFormatter.formatRange === "function") return this.numberFormatter.formatRange(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    return `${this.format(start)} – ${this.format(end)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.numberFormatter.formatRangeToParts === "function") return this.numberFormatter.formatRangeToParts(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    let startParts = this.numberFormatter.formatToParts(start);
    let endParts = this.numberFormatter.formatToParts(end);
    return [
      ...startParts.map((p2) => ({
        ...p2,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...endParts.map((p2) => ({
        ...p2,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let options = this.numberFormatter.resolvedOptions();
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
      ...options,
      signDisplay: this.options.signDisplay
    };
    if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === "unit") options = {
      ...options,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    };
    return options;
  }
  constructor(locale, options = {}) {
    this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
    this.options = options;
  }
}
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
  let { numberingSystem } = options;
  if (numberingSystem && locale.includes("-nu-")) {
    if (!locale.includes("-u-")) locale += "-u-";
    locale += `-nu-${numberingSystem}`;
  }
  if (options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
    var _UNITS_unit;
    let { unit, unitDisplay = "short" } = options;
    if (!unit) throw new Error('unit option must be provided with style: "unit"');
    if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === undefined ? undefined : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
    options = {
      ...options,
      style: "decimal"
    };
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a3, b) => a3[0] < b[0] ? -1 : 1).join() : "");
  if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.NumberFormat(locale, options);
  $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
  if (signDisplay === "auto") return numberFormat.format(num);
  else if (signDisplay === "never") return numberFormat.format(Math.abs(num));
  else {
    let needsPositiveSign = false;
    if (signDisplay === "always") needsPositiveSign = num > 0 || Object.is(num, 0);
    else if (signDisplay === "exceptZero") {
      if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
      else needsPositiveSign = num > 0;
    }
    if (needsPositiveSign) {
      let negative = numberFormat.format(-num);
      let noSign = numberFormat.format(num);
      let minus = negative.replace(noSign, "").replace(/\u200e|\u061C/, "");
      if ([
        ...minus
      ].length !== 1) console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
      let positive = negative.replace(noSign, "!!!").replace(minus, "+").replace("!!!", noSign);
      return positive;
    } else return numberFormat.format(num);
  }
}
const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp("^.*\\(.*\\).*$");
const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
  "latn",
  "arab",
  "hanidec",
  "deva",
  "beng"
];
class $6c7bd7858deea686$export$cd11ab140839f11d {
  /**
  * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
  */
  parse(value) {
    return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
  }
  /**
  * Returns whether the given string could potentially be a valid number. This should be used to
  * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
  * of the minus/plus sign characters can be checked.
  */
  isValidPartialNumber(value, minValue, maxValue) {
    return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
  }
  /**
  * Returns a numbering system for which the given string is valid in the current locale.
  * If no numbering system could be detected, the default numbering system for the current
  * locale is returned.
  */
  getNumberingSystem(value) {
    return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
  }
  constructor(locale, options = {}) {
    this.locale = locale;
    this.options = options;
  }
}
const $6c7bd7858deea686$var$numberParserCache = /* @__PURE__ */ new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
  let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
  if (!locale.includes("-nu-") && !defaultParser.isValidPartialNumber(value)) {
    for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS) if (numberingSystem !== defaultParser.options.numberingSystem) {
      let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes("-u-") ? "-nu-" : "-u-nu-") + numberingSystem, options);
      if (parser.isValidPartialNumber(value)) return parser;
    }
  }
  return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
  let cacheKey = locale + (options ? Object.entries(options).sort((a3, b) => a3[0] < b[0] ? -1 : 1).join() : "");
  let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
  if (!parser) {
    parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
    $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
  }
  return parser;
}
class $6c7bd7858deea686$var$NumberParserImpl {
  parse(value) {
    let fullySanitizedValue = this.sanitize(value);
    if (this.symbols.group)
      fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, "");
    if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, ".");
    if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, "-");
    fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
    if (this.options.style === "percent") {
      let isNegative = fullySanitizedValue.indexOf("-");
      fullySanitizedValue = fullySanitizedValue.replace("-", "");
      let index = fullySanitizedValue.indexOf(".");
      if (index === -1) index = fullySanitizedValue.length;
      fullySanitizedValue = fullySanitizedValue.replace(".", "");
      if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
      else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
      else if (index - 2 === -2) fullySanitizedValue = "0.00";
      else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
      if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
    }
    let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
    if (isNaN(newValue)) return NaN;
    if (this.options.style === "percent") {
      var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
      let options = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== undefined ? _this_options_minimumFractionDigits : 0) + 2, 20),
        maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== undefined ? _this_options_maximumFractionDigits : 0) + 2, 20)
      };
      return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(this.locale, options).format(newValue));
    }
    if (this.options.currencySign === "accounting" && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
    return newValue;
  }
  sanitize(value) {
    value = value.replace(this.symbols.literals, "");
    if (this.symbols.minusSign) value = value.replace("-", this.symbols.minusSign);
    if (this.options.numberingSystem === "arab") {
      if (this.symbols.decimal) {
        value = value.replace(",", this.symbols.decimal);
        value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
      }
      if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, ".", this.symbols.group);
    }
    if (this.options.locale === "fr-FR") value = $6c7bd7858deea686$var$replaceAll(value, ".", String.fromCharCode(8239));
    return value;
  }
  isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
    value = this.sanitize(value);
    if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
    else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
    if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
    if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
    if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, "");
    value = value.replace(this.symbols.numeral, "");
    if (this.symbols.decimal) value = value.replace(this.symbols.decimal, "");
    return value.length === 0;
  }
  constructor(locale, options = {}) {
    this.locale = locale;
    this.formatter = new Intl.NumberFormat(locale, options);
    this.options = this.formatter.resolvedOptions();
    this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
    var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
    if (this.options.style === "percent" && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== undefined ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== undefined ? _this_options_maximumFractionDigits : 0) > 18)) console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
const $6c7bd7858deea686$var$nonLiteralParts = /* @__PURE__ */ new Set([
  "decimal",
  "fraction",
  "integer",
  "minusSign",
  "plusSign",
  "group"
]);
const $6c7bd7858deea686$var$pluralNumbers = [
  0,
  4,
  2,
  1,
  11,
  20,
  3,
  7,
  100,
  21,
  0.1,
  1.1
];
function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
  var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
  let symbolFormatter = new Intl.NumberFormat(locale, {
    ...intlOptions,
    // Resets so we get the full range of symbols
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 21,
    roundingIncrement: 1,
    roundingPriority: "auto",
    roundingMode: "halfExpand"
  });
  let allParts = symbolFormatter.formatToParts(-10000.111);
  let posAllParts = symbolFormatter.formatToParts(10000.111);
  let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n2) => symbolFormatter.formatToParts(n2));
  var _allParts_find_value;
  let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p2) => p2.type === "minusSign")) === null || _allParts_find === undefined ? undefined : _allParts_find.value) !== null && _allParts_find_value !== undefined ? _allParts_find_value : "-";
  let plusSign = (_posAllParts_find = posAllParts.find((p2) => p2.type === "plusSign")) === null || _posAllParts_find === undefined ? undefined : _posAllParts_find.value;
  if (!plusSign && ((originalOptions === null || originalOptions === undefined ? undefined : originalOptions.signDisplay) === "exceptZero" || (originalOptions === null || originalOptions === undefined ? undefined : originalOptions.signDisplay) === "always")) plusSign = "+";
  let decimalParts = new Intl.NumberFormat(locale, {
    ...intlOptions,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).formatToParts(1e-3);
  let decimal = (_decimalParts_find = decimalParts.find((p2) => p2.type === "decimal")) === null || _decimalParts_find === undefined ? undefined : _decimalParts_find.value;
  let group = (_allParts_find1 = allParts.find((p2) => p2.type === "group")) === null || _allParts_find1 === undefined ? undefined : _allParts_find1.value;
  let allPartsLiterals = allParts.filter((p2) => !$6c7bd7858deea686$var$nonLiteralParts.has(p2.type)).map((p2) => $6c7bd7858deea686$var$escapeRegex(p2.value));
  let pluralPartsLiterals = pluralParts.flatMap((p2) => p2.filter((p3) => !$6c7bd7858deea686$var$nonLiteralParts.has(p3.type)).map((p3) => $6c7bd7858deea686$var$escapeRegex(p3.value)));
  let sortedLiterals = [
    .../* @__PURE__ */ new Set([
      ...allPartsLiterals,
      ...pluralPartsLiterals
    ])
  ].sort((a3, b) => b.length - a3.length);
  let literals = sortedLiterals.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${sortedLiterals.join("|")}|[\\p{White_Space}]`, "gu");
  let numerals = [
    ...new Intl.NumberFormat(intlOptions.locale, {
      useGrouping: false
    }).format(9876543210)
  ].reverse();
  let indexes = new Map(numerals.map((d2, i) => [
    d2,
    i
  ]));
  let numeral = new RegExp(`[${numerals.join("")}]`, "g");
  let index = (d2) => String(indexes.get(d2));
  return {
    minusSign,
    plusSign,
    decimal,
    group,
    literals,
    numeral,
    index
  };
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
  if (str.replaceAll) return str.replaceAll(find, replace);
  return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Q(a22, t2) {
  const e = typeof a22 == "string" && !t2 ? `${a22}Context` : t2, n2 = Symbol(e);
  return [(r) => {
    const i = inject(n2, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n2.toString()}\` not found. Component must be used within ${Array.isArray(a22) ? `one of the following components: ${a22.join(
        ", "
      )}` : `\`${a22}\``}`
    );
  }, (r) => (provide(n2, r), r)];
}
function Wt(a22, t2, e) {
  const n2 = e.originalEvent.target, l2 = new CustomEvent(a22, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  n2.addEventListener(a22, t2, { once: true }), n2.dispatchEvent(l2);
}
function jt(a22, t2 = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(e, Math.max(t2, a22));
}
function Ea(a22, t2) {
  let e = a22;
  const n2 = t2.toString(), l2 = n2.indexOf("."), s2 = l2 >= 0 ? n2.length - l2 : 0;
  if (s2 > 0) {
    const r = 10 ** s2;
    e = Math.round(e * r) / r;
  }
  return e;
}
function zr(a22, t2, e, n2) {
  t2 = Number(t2), e = Number(e);
  const l2 = (a22 - (Number.isNaN(t2) ? 0 : t2)) % n2;
  let s2 = Ea(Math.abs(l2) * 2 >= n2 ? a22 + Math.sign(l2) * (n2 - Math.abs(l2)) : a22 - l2, n2);
  return Number.isNaN(t2) ? !Number.isNaN(e) && s2 > e && (s2 = Math.floor(Ea(e / n2, n2)) * n2) : s2 < t2 ? s2 = t2 : !Number.isNaN(e) && s2 > e && (s2 = t2 + Math.floor(Ea((e - t2) / n2, n2)) * n2), s2 = Ea(s2, n2), s2;
}
function Kr(a22) {
  return a22.__esModule && Object.prototype.hasOwnProperty.call(a22, "default") ? a22.default : a22;
}
var Hr = function a2(t2, e) {
  if (t2 === e) return true;
  if (t2 && e && typeof t2 == "object" && typeof e == "object") {
    if (t2.constructor !== e.constructor) return false;
    var n2, l2, s2;
    if (Array.isArray(t2)) {
      if (n2 = t2.length, n2 != e.length) return false;
      for (l2 = n2; l2-- !== 0; )
        if (!a2(t2[l2], e[l2])) return false;
      return true;
    }
    if (t2.constructor === RegExp) return t2.source === e.source && t2.flags === e.flags;
    if (t2.valueOf !== Object.prototype.valueOf) return t2.valueOf() === e.valueOf();
    if (t2.toString !== Object.prototype.toString) return t2.toString() === e.toString();
    if (s2 = Object.keys(t2), n2 = s2.length, n2 !== Object.keys(e).length) return false;
    for (l2 = n2; l2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s2[l2])) return false;
    for (l2 = n2; l2-- !== 0; ) {
      var r = s2[l2];
      if (!a2(t2[r], e[r])) return false;
    }
    return true;
  }
  return t2 !== t2 && e !== e;
};
const Xe = /* @__PURE__ */ Kr(Hr);
function Dt(a22, t2, e) {
  const n2 = a22.findIndex((i) => Xe(i, t2)), l2 = a22.findIndex((i) => Xe(i, e));
  if (n2 === -1 || l2 === -1)
    return [];
  const [s2, r] = [n2, l2].sort((i, u) => i - u);
  return a22.slice(s2, r + 1);
}
function vt(a22) {
  return a22 == null;
}
function ei(a22, t2) {
  var e;
  const n2 = shallowRef();
  return watchEffect(() => {
    n2.value = a22();
  }, {
    ...t2,
    flush: (e = undefined) != null ? e : "sync"
  }), readonly(n2);
}
function yt(a22) {
  return getCurrentScope() ? (onScopeDispose(a22), true) : false;
}
function ia() {
  const a22 = /* @__PURE__ */ new Set(), t2 = (l2) => {
    a22.delete(l2);
  };
  return {
    on: (l2) => {
      a22.add(l2);
      const s2 = () => t2(l2);
      return yt(s2), {
        off: s2
      };
    },
    off: t2,
    trigger: (...l2) => Promise.all(Array.from(a22).map((s2) => s2(...l2)))
  };
}
function ai(a22) {
  let t2 = false, e;
  const n2 = effectScope(true);
  return (...l2) => (t2 || (e = n2.run(() => a22(...l2)), t2 = true), e);
}
function Sl(a22) {
  let t2 = 0, e, n2;
  const l2 = () => {
    t2 -= 1, n2 && t2 <= 0 && (n2.stop(), e = undefined, n2 = undefined);
  };
  return (...s2) => (t2 += 1, e || (n2 = effectScope(true), e = n2.run(() => a22(...s2))), yt(l2), e);
}
function Ke(a22) {
  return typeof a22 == "function" ? a22() : unref(a22);
}
function ni(a22) {
  if (!isRef(a22))
    return reactive(a22);
  const t2 = new Proxy({}, {
    get(e, n2, l2) {
      return unref(Reflect.get(a22.value, n2, l2));
    },
    set(e, n2, l2) {
      return isRef(a22.value[n2]) && !isRef(l2) ? a22.value[n2].value = l2 : a22.value[n2] = l2, true;
    },
    deleteProperty(e, n2) {
      return Reflect.deleteProperty(a22.value, n2);
    },
    has(e, n2) {
      return Reflect.has(a22.value, n2);
    },
    ownKeys() {
      return Object.keys(a22.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(t2);
}
function El(a22) {
  return ni(computed(a22));
}
const Ye = "undefined" < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const oi = (a22) => typeof a22 < "u", si = Object.prototype.toString, ri = (a22) => si.call(a22) === "[object Object]", Va = () => {
};
function $l(a22) {
  return getCurrentInstance();
}
function It(a22, t2 = 1e4) {
  return customRef((e, n2) => {
    let l2 = Ke(a22), s2;
    const r = () => setTimeout(() => {
      l2 = Ke(a22), n2();
    }, Ke(t2));
    return yt(() => {
      clearTimeout(s2);
    }), {
      get() {
        return e(), l2;
      },
      set(i) {
        l2 = i, n2(), clearTimeout(s2), s2 = r();
      }
    };
  });
}
function pi(a22, t2) {
  $l() && onBeforeUnmount(a22, t2);
}
function Wn(a22, t2, e = {}) {
  const {
    immediate: n2 = true
  } = e, l2 = ref(false);
  let s2 = null;
  function r() {
    s2 && (clearTimeout(s2), s2 = null);
  }
  function i() {
    l2.value = false, r();
  }
  function u(...d2) {
    r(), l2.value = true, s2 = setTimeout(() => {
      l2.value = false, s2 = null, a22(...d2);
    }, Ke(t2));
  }
  return n2 && (l2.value = true, Ye), yt(i), {
    isPending: readonly(l2),
    start: u,
    stop: i
  };
}
function mi(a22 = 1e3, t2 = {}) {
  const {
    controls: e = false,
    callback: n2
  } = t2, l2 = Wn(
    n2 ?? Va,
    a22,
    t2
  ), s2 = computed(() => !l2.isPending.value);
  return e ? {
    ready: s2,
    ...l2
  } : s2;
}
function $e(a22) {
  var t2;
  const e = Ke(a22);
  return (t2 = e == null ? undefined : e.$el) != null ? t2 : e;
}
const Tt = undefined;
function Le(...a22) {
  let t2, e, n2, l2;
  if (typeof a22[0] == "string" || Array.isArray(a22[0]) ? ([e, n2, l2] = a22, t2 = Tt) : [t2, e, n2, l2] = a22, !t2)
    return Va;
  Array.isArray(e) || (e = [e]), Array.isArray(n2) || (n2 = [n2]);
  const s2 = [], r = () => {
    s2.forEach((c) => c()), s2.length = 0;
  }, i = (c, f2, v, p2) => (c.addEventListener(f2, v, p2), () => c.removeEventListener(f2, v, p2)), u = watch(
    () => [$e(t2), Ke(l2)],
    ([c, f2]) => {
      if (r(), !c)
        return;
      const v = ri(f2) ? { ...f2 } : f2;
      s2.push(
        ...e.flatMap((p2) => n2.map((g2) => i(c, p2, g2, v)))
      );
    },
    { immediate: true, flush: "post" }
  ), d2 = () => {
    u(), r();
  };
  return yt(d2), d2;
}
function yi(a22) {
  return typeof a22 == "function" ? a22 : typeof a22 == "string" ? (t2) => t2.key === a22 : Array.isArray(a22) ? (t2) => a22.includes(t2.key) : () => true;
}
function jn(...a22) {
  let t2, e, n2 = {};
  a22.length === 3 ? (t2 = a22[0], e = a22[1], n2 = a22[2]) : a22.length === 2 ? typeof a22[1] == "object" ? (t2 = true, e = a22[0], n2 = a22[1]) : (t2 = a22[0], e = a22[1]) : (t2 = true, e = a22[0]);
  const {
    target: l2 = Tt,
    eventName: s2 = "keydown",
    passive: r = false,
    dedupe: i = false
  } = n2, u = yi(t2);
  return Le(l2, s2, (c) => {
    c.repeat && Ke(i) || u(c) && e(c);
  }, r);
}
function ja() {
  const a22 = ref(false), t2 = getCurrentInstance();
  return t2 && onMounted(() => {
    a22.value = true;
  }, t2), a22;
}
function Tl(a22, t2 = {}) {
  const {
    immediate: e = true,
    fpsLimit: n2 = undefined,
    window: l2 = Tt
  } = t2, s2 = ref(false), r = n2 ? 1e3 / n2 : null;
  let i = 0, u = null;
  function d2(v) {
    if (!s2.value || !l2)
      return;
    i || (i = v);
    const p2 = v - i;
    if (r && p2 < r) {
      u = l2.requestAnimationFrame(d2);
      return;
    }
    i = v, a22({ delta: p2, timestamp: v }), u = l2.requestAnimationFrame(d2);
  }
  function c() {
    !s2.value && l2 && (s2.value = true, i = 0, u = l2.requestAnimationFrame(d2));
  }
  function f2() {
    s2.value = false, u != null && l2 && (l2.cancelAnimationFrame(u), u = null);
  }
  return e && c(), yt(f2), {
    isActive: readonly(s2),
    pause: f2,
    resume: c
  };
}
function bi(a22) {
  return JSON.parse(JSON.stringify(a22));
}
function ne(a22, t2, e, n2 = {}) {
  var l2, s2, r;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d2,
    deep: c = false,
    defaultValue: f2,
    shouldEmit: v
  } = n2, p2 = getCurrentInstance(), g2 = e || (p2 == null ? undefined : p2.emit) || ((l2 = p2 == null ? undefined : p2.$emit) == null ? undefined : l2.bind(p2)) || ((r = (s2 = p2 == null ? undefined : p2.proxy) == null ? undefined : s2.$emit) == null ? undefined : r.bind(p2 == null ? undefined : p2.proxy));
  let m = d2;
  t2 || (t2 = "modelValue"), m = m || `update:${t2.toString()}`;
  const _ = (h2) => i ? typeof i == "function" ? i(h2) : bi(h2) : h2, C = () => oi(a22[t2]) ? _(a22[t2]) : f2, $2 = (h2) => {
    v ? v(h2) && g2(m, h2) : g2(m, h2);
  };
  if (u) {
    const h2 = C(), E = ref(h2);
    let P = false;
    return watch(
      () => a22[t2],
      (D) => {
        P || (P = true, E.value = _(D), nextTick(() => P = false));
      }
    ), watch(
      E,
      (D) => {
        !P && (D !== a22[t2] || c) && $2(D);
      },
      { deep: c }
    ), E;
  } else
    return computed({
      get() {
        return C();
      },
      set(h2) {
        $2(h2);
      }
    });
}
function Ua(a22) {
  return a22 ? a22.flatMap((t2) => t2.type === Fragment ? Ua(t2.children) : [t2]) : [];
}
const _i = ["INPUT", "TEXTAREA"];
function Rt(a22, t2, e, n2 = {}) {
  if (!t2 || n2.enableIgnoredElement && _i.includes(t2.nodeName))
    return null;
  const {
    arrowKeyOptions: l2 = "both",
    attributeName: s2 = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d2 = true,
    focus: c = false
  } = n2, [f2, v, p2, g2, m, _] = [
    a22.key === "ArrowRight",
    a22.key === "ArrowLeft",
    a22.key === "ArrowUp",
    a22.key === "ArrowDown",
    a22.key === "Home",
    a22.key === "End"
  ], C = p2 || g2, $2 = f2 || v;
  if (!m && !_ && (!C && !$2 || l2 === "vertical" && $2 || l2 === "horizontal" && C))
    return null;
  const h2 = e ? Array.from(e.querySelectorAll(s2)) : r;
  if (!h2.length)
    return null;
  d2 && a22.preventDefault();
  let E = null;
  return $2 || C ? E = Al(h2, t2, {
    goForward: C ? g2 : u === "ltr" ? f2 : v,
    loop: i
  }) : m ? E = h2.at(0) || null : _ && (E = h2.at(-1) || null), c && (E == null || E.focus()), E;
}
function Al(a22, t2, e, n2 = a22.length) {
  if (--n2 === 0)
    return null;
  const l2 = a22.indexOf(t2), s2 = e.goForward ? l2 + 1 : l2 - 1;
  if (!e.loop && (s2 < 0 || s2 >= a22.length))
    return null;
  const r = (s2 + a22.length) % a22.length, i = a22[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Al(
    a22,
    i,
    e,
    n2
  ) : i : null;
}
const [Ga, Ei] = Q("ConfigProvider"), Cv = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: true },
    nonce: { default: undefined },
    useId: { type: Function, default: undefined }
  },
  setup(a22) {
    const t2 = a22, { dir: e, scrollBody: n2, nonce: l2 } = toRefs(t2);
    return Ei({
      dir: e,
      scrollBody: n2,
      nonce: l2,
      useId: t2.useId
    }), (s2, r) => renderSlot(s2.$slots, "default");
  }
});
let Pi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Di = (a22 = 21) => {
  let t2 = "", e = a22;
  for (; e--; )
    t2 += Pi[Math.random() * 64 | 0];
  return t2;
};
const $i = Sl(() => {
  const a22 = ref(/* @__PURE__ */ new Map());
  ref();
  const e = computed(() => {
    for (const r of a22.value.values())
      if (r)
        return true;
    return false;
  });
  Ga({
    scrollBody: ref(true)
  });
  return watch(e, (r, i) => {
    return;
  }, { immediate: true, flush: "sync" }), a22;
});
function ha(a22) {
  const t2 = Di(6), e = $i();
  e.value.set(t2, a22 ?? false);
  const n2 = computed({
    get: () => e.value.get(t2) ?? false,
    set: (l2) => e.value.set(t2, l2)
  });
  return pi(() => {
    e.value.delete(t2);
  }), n2;
}
const Ii = "data-radix-vue-collection-item";
function Me(a22, t2 = Ii) {
  const e = Symbol();
  return { createCollection: (s2) => {
    const r = ref([]);
    function i() {
      const u = $e(s2);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t2}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return onBeforeUpdate(() => {
      r.value = [];
    }), onMounted(i), onUpdated(i), watch(() => s2 == null ? undefined : s2.value, i, { immediate: true }), provide(e, r), r;
  }, injectCollection: () => inject(e, ref([])) };
}
function be(a22) {
  const t2 = Ga({
    dir: ref("ltr")
  });
  return computed(() => {
    var e;
    return (a22 == null ? undefined : a22.value) || ((e = t2.dir) == null ? undefined : e.value) || "ltr";
  });
}
function Ae(a22) {
  const t2 = getCurrentInstance(), e = t2 == null ? undefined : t2.type.emits, n2 = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t2 == null ? undefined : t2.type.__name}`
  ), e == null || e.forEach((l2) => {
    n2[toHandlerKey(camelize(l2))] = (...s2) => a22(l2, ...s2);
  }), n2;
}
function Gn() {
  watchEffect((a22) => {
    return;
  });
}
function Qe(a22) {
  return computed(() => {
    var t2;
    return Ke(a22) ? !!((t2 = $e(a22)) != null && t2.closest("form")) : true;
  });
}
function At(a22) {
  const t2 = getCurrentInstance(), e = Object.keys((t2 == null ? undefined : t2.type.props) ?? {}).reduce((l2, s2) => {
    const r = (t2 == null ? undefined : t2.type.props[s2]).default;
    return r !== undefined && (l2[s2] = r), l2;
  }, {}), n2 = toRef(a22);
  return computed(() => {
    const l2 = {}, s2 = (t2 == null ? undefined : t2.vnode.props) ?? {};
    return Object.keys(s2).forEach((r) => {
      l2[camelize(r)] = s2[r];
    }), Object.keys({ ...e, ...l2 }).reduce((r, i) => (n2.value[i] !== undefined && (r[i] = n2.value[i]), r), {});
  });
}
function xe(a22, t2) {
  const e = At(a22), n2 = t2 ? Ae(t2) : {};
  return computed(() => ({
    ...e.value,
    ...n2
  }));
}
function R() {
  const a22 = getCurrentInstance(), t2 = ref(), e = computed(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t2.value) == null ? undefined : r.$el.nodeName) ? (i = t2.value) == null ? undefined : i.$el.nextElementSibling : $e(t2);
  }), n2 = Object.assign({}, a22.exposed), l2 = {};
  for (const r in a22.props)
    Object.defineProperty(l2, r, {
      enumerable: true,
      configurable: true,
      get: () => a22.props[r]
    });
  if (Object.keys(n2).length > 0)
    for (const r in n2)
      Object.defineProperty(l2, r, {
        enumerable: true,
        configurable: true,
        get: () => n2[r]
      });
  Object.defineProperty(l2, "$el", {
    enumerable: true,
    configurable: true,
    get: () => a22.vnode.el
  }), a22.exposed = l2;
  function s2(r) {
    t2.value = r, !(r instanceof Element || !r) && (Object.defineProperty(l2, "$el", {
      enumerable: true,
      configurable: true,
      get: () => r.$el
    }), a22.exposed = l2);
  }
  return { forwardRef: s2, currentRef: t2, currentElement: e };
}
function kl(a22, t2) {
  const e = It(false, 300), n2 = ref(null), l2 = ia();
  function s2() {
    n2.value = null, e.value = false;
  }
  function r(i, u) {
    const d2 = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f2 = Ti(c, d2.getBoundingClientRect()), v = Ri(c, f2), p2 = Ai(u.getBoundingClientRect()), g2 = ki([...v, ...p2]);
    n2.value = g2, e.value = true;
  }
  return watchEffect((i) => {
    if (a22.value && t2.value) {
      const u = (c) => r(c, t2.value), d2 = (c) => r(c, a22.value);
      a22.value.addEventListener("pointerleave", u), t2.value.addEventListener("pointerleave", d2), i(() => {
        var c, f2;
        (c = a22.value) == null || c.removeEventListener("pointerleave", u), (f2 = t2.value) == null || f2.removeEventListener("pointerleave", d2);
      });
    }
  }), watchEffect((i) => {
    var u;
    if (n2.value) {
      const d2 = (c) => {
        var _, C;
        if (!n2.value)
          return;
        const f2 = c.target, v = { x: c.clientX, y: c.clientY }, p2 = ((_ = a22.value) == null ? undefined : _.contains(f2)) || ((C = t2.value) == null ? undefined : C.contains(f2)), g2 = !Oi(v, n2.value), m = f2.hasAttribute("data-grace-area-trigger");
        p2 ? s2() : (g2 || m) && (s2(), l2.trigger());
      };
      (u = a22.value) == null || u.ownerDocument.addEventListener("pointermove", d2), i(() => {
        var c;
        return (c = a22.value) == null ? undefined : c.ownerDocument.removeEventListener("pointermove", d2);
      });
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l2.on
  };
}
function Ti(a22, t2) {
  const e = Math.abs(t2.top - a22.y), n2 = Math.abs(t2.bottom - a22.y), l2 = Math.abs(t2.right - a22.x), s2 = Math.abs(t2.left - a22.x);
  switch (Math.min(e, n2, l2, s2)) {
    case s2:
      return "left";
    case l2:
      return "right";
    case e:
      return "top";
    case n2:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ri(a22, t2, e = 5) {
  const n2 = [];
  switch (t2) {
    case "top":
      n2.push(
        { x: a22.x - e, y: a22.y + e },
        { x: a22.x + e, y: a22.y + e }
      );
      break;
    case "bottom":
      n2.push(
        { x: a22.x - e, y: a22.y - e },
        { x: a22.x + e, y: a22.y - e }
      );
      break;
    case "left":
      n2.push(
        { x: a22.x + e, y: a22.y - e },
        { x: a22.x + e, y: a22.y + e }
      );
      break;
    case "right":
      n2.push(
        { x: a22.x - e, y: a22.y - e },
        { x: a22.x - e, y: a22.y + e }
      );
      break;
  }
  return n2;
}
function Ai(a22) {
  const { top: t2, right: e, bottom: n2, left: l2 } = a22;
  return [
    { x: l2, y: t2 },
    { x: e, y: t2 },
    { x: e, y: n2 },
    { x: l2, y: n2 }
  ];
}
function Oi(a22, t2) {
  const { x: e, y: n2 } = a22;
  let l2 = false;
  for (let s2 = 0, r = t2.length - 1; s2 < t2.length; r = s2++) {
    const i = t2[s2].x, u = t2[s2].y, d2 = t2[r].x, c = t2[r].y;
    u > n2 != c > n2 && e < (d2 - i) * (n2 - u) / (c - u) + i && (l2 = !l2);
  }
  return l2;
}
function ki(a22) {
  const t2 = a22.slice();
  return t2.sort((e, n2) => e.x < n2.x ? -1 : e.x > n2.x ? 1 : e.y < n2.y ? -1 : e.y > n2.y ? 1 : 0), Mi(t2);
}
function Mi(a22) {
  if (a22.length <= 1)
    return a22.slice();
  const t2 = [];
  for (let n2 = 0; n2 < a22.length; n2++) {
    const l2 = a22[n2];
    for (; t2.length >= 2; ) {
      const s2 = t2[t2.length - 1], r = t2[t2.length - 2];
      if ((s2.x - r.x) * (l2.y - r.y) >= (s2.y - r.y) * (l2.x - r.x))
        t2.pop();
      else break;
    }
    t2.push(l2);
  }
  t2.pop();
  const e = [];
  for (let n2 = a22.length - 1; n2 >= 0; n2--) {
    const l2 = a22[n2];
    for (; e.length >= 2; ) {
      const s2 = e[e.length - 1], r = e[e.length - 2];
      if ((s2.x - r.x) * (l2.y - r.y) >= (s2.y - r.y) * (l2.x - r.x))
        e.pop();
      else break;
    }
    e.push(l2);
  }
  return e.pop(), t2.length === 1 && e.length === 1 && t2[0].x === e[0].x && t2[0].y === e[0].y ? t2 : t2.concat(e);
}
var Vi = function(a22) {
  return null;
}, zt = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {}, Cn = 0, Ml = function(a22) {
  return a22 && (a22.host || Ml(a22.parentNode));
}, Fi = function(a22, t2) {
  return t2.map(function(e) {
    if (a22.contains(e))
      return e;
    var n2 = Ml(e);
    return n2 && a22.contains(n2) ? n2 : (console.error("aria-hidden", e, "in not contained inside", a22, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Ni = function(a22, t2, e, n2) {
  var l2 = Fi(t2, Array.isArray(a22) ? a22 : [a22]);
  Da[e] || (Da[e] = /* @__PURE__ */ new WeakMap());
  var s2 = Da[e], r = [], i = /* @__PURE__ */ new Set(); new Set(l2); var d2 = function(f2) {
    !f2 || i.has(f2) || (i.add(f2), d2(f2.parentNode));
  };
  l2.forEach(d2);
  return i.clear(), Cn++, function() {
    r.forEach(function(f2) {
      var v = zt.get(f2) - 1, p2 = s2.get(f2) - 1;
      zt.set(f2, v), s2.set(f2, p2), v || (Pa.has(f2) || f2.removeAttribute(n2), Pa.delete(f2)), p2 || f2.removeAttribute(e);
    }), Cn--, Cn || (zt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, Li = function(a22, t2, e) {
  e === undefined && (e = "data-aria-hidden");
  var n2 = Array.from(Array.isArray(a22) ? a22 : [a22]), l2 = Vi();
  return l2 ? (n2.push.apply(n2, Array.from(l2.querySelectorAll("[aria-live]"))), Ni(n2, l2, e, "aria-hidden")) : function() {
    return null;
  };
};
function ya(a22) {
  let t2;
  watch(() => $e(a22), (e) => {
    e ? t2 = Li(e) : t2 && t2();
  }), onUnmounted(() => {
    t2 && t2();
  });
}
let zi = 0;
function he(a22, t2 = "radix") {
  const e = Ga({ useId: undefined });
  return Mo.useId ? `${t2}-${Mo.useId()}` : e.useId ? `${t2}-${e.useId()}` : `${t2}-${++zi}`;
}
function Vl(a22) {
  const t2 = ref(), e = computed(() => {
    var l2;
    return ((l2 = t2.value) == null ? undefined : l2.width) ?? 0;
  }), n2 = computed(() => {
    var l2;
    return ((l2 = t2.value) == null ? undefined : l2.height) ?? 0;
  });
  return onMounted(() => {
    const l2 = $e(a22);
    if (l2) {
      t2.value = { width: l2.offsetWidth, height: l2.offsetHeight };
      const s2 = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d2;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f2 = Array.isArray(c) ? c[0] : c;
          u = f2.inlineSize, d2 = f2.blockSize;
        } else
          u = l2.offsetWidth, d2 = l2.offsetHeight;
        t2.value = { width: u, height: d2 };
      });
      return s2.observe(l2, { box: "border-box" }), () => s2.unobserve(l2);
    } else
      t2.value = undefined;
  }), {
    width: e,
    height: n2
  };
}
function Fl(a22, t2) {
  const e = ref(a22);
  function n2(s2) {
    return t2[e.value][s2] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s2) => {
      e.value = n2(s2);
    }
  };
}
const Hi = "data-item-text";
function ga(a22) {
  const t2 = It("", 1e3);
  return {
    search: t2,
    handleTypeaheadSearch: (l2, s2) => {
      if (!(a22 != null && a22.value) && !s2)
        return;
      t2.value = t2.value + l2;
      const r = (a22 == null ? undefined : a22.value) ?? s2, i = (undefined).activeElement, u = r.map((p2) => {
        var g2;
        return {
          ref: p2,
          textValue: ((g2 = (p2.querySelector(`[${Hi}]`) ?? p2).textContent) == null ? undefined : g2.trim()) ?? ""
        };
      }), d2 = u.find((p2) => p2.ref === i), c = u.map((p2) => p2.textValue), f2 = Yn(c, t2.value, d2 == null ? undefined : d2.textValue), v = u.find((p2) => p2.textValue === f2);
      return v && v.ref.focus(), v == null ? undefined : v.ref;
    },
    resetTypeahead: () => {
      t2.value = "";
    }
  };
}
function qn(a22, t2) {
  return a22.map((e, n2) => a22[(t2 + n2) % a22.length]);
}
function Yn(a22, t2, e) {
  const l2 = t2.length > 1 && Array.from(t2).every((d2) => d2 === t2[0]) ? t2[0] : t2, s2 = e ? a22.indexOf(e) : -1;
  let r = qn(a22, Math.max(s2, 0));
  l2.length === 1 && (r = r.filter((d2) => d2 !== e));
  const u = r.find(
    (d2) => d2.toLowerCase().startsWith(l2.toLowerCase())
  );
  return u !== e ? u : undefined;
}
function et() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
const Xn = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(a22, { attrs: t2, slots: e }) {
    return () => {
      var u, d2;
      if (!e.default)
        return null;
      const n2 = Ua(e.default()), l2 = n2.findIndex((c) => c.type !== Comment);
      if (l2 === -1)
        return n2;
      const s2 = n2[l2];
      (u = s2.props) == null || delete u.ref;
      const r = s2.props ? mergeProps(t2, s2.props) : t2;
      t2.class && ((d2 = s2.props) != null && d2.class) && delete s2.props.class;
      const i = cloneVNode(s2, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n2.length === 1 ? i : (n2[l2] = i, n2);
    };
  }
}), O = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a22, { attrs: t2, slots: e }) {
    const n2 = a22.asChild ? "template" : a22.as;
    return typeof n2 == "string" && ["area", "img", "input"].includes(n2) ? () => h(n2, t2) : n2 !== "template" ? () => h(a22.as, t2, { default: e.default }) : () => h(Xn, t2, { default: e.default });
  }
});
function Ie() {
  const a22 = ref(), t2 = computed(() => {
    var e, n2;
    return ["#text", "#comment"].includes((e = a22.value) == null ? undefined : e.$el.nodeName) ? (n2 = a22.value) == null ? undefined : n2.$el.nextElementSibling : $e(a22);
  });
  return {
    primitiveElement: a22,
    currentElement: t2
  };
}
const [Nl, Wi] = Q("CollapsibleRoot"), ji = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: undefined },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(a22, { expose: t2, emit: e }) {
    const n2 = a22, s2 = ne(n2, "open", e, {
      defaultValue: n2.defaultOpen,
      passive: n2.open === undefined
    }), r = ne(n2, "disabled");
    return Wi({
      contentId: "",
      disabled: r,
      open: s2,
      onOpenToggle: () => {
        s2.value = !s2.value;
      }
    }), t2({ open: s2 }), R(), (i, u) => (openBlock(), createBlock(unref(O), {
      as: i.as,
      "as-child": n2.asChild,
      "data-state": unref(s2) ? "open" : "closed",
      "data-disabled": unref(r) ? "" : undefined
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { open: unref(s2) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Ui = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22;
    R();
    const e = Nl();
    return (n2, l2) => {
      var s2, r;
      return openBlock(), createBlock(unref(O), {
        type: n2.as === "button" ? "button" : undefined,
        as: n2.as,
        "as-child": t2.asChild,
        "aria-controls": unref(e).contentId,
        "aria-expanded": unref(e).open.value,
        "data-state": unref(e).open.value ? "open" : "closed",
        "data-disabled": (s2 = unref(e).disabled) != null && s2.value ? "" : undefined,
        disabled: (r = unref(e).disabled) == null ? undefined : r.value,
        onClick: unref(e).onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(n2.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Gi(a22, t2) {
  var _;
  const e = ref({}), n2 = ref("none"), l2 = ref(a22), s2 = a22.value ? "mounted" : "unmounted";
  let r;
  const i = ((_ = t2.value) == null ? undefined : _.ownerDocument.defaultView) ?? Tt, { state: u, dispatch: d2 } = Fl(s2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), c = (C) => {
  };
  watch(
    a22,
    async (C, $2) => {
      var E;
      const h2 = $2 !== C;
      if (await nextTick(), h2) {
        const P = n2.value, D = $a(t2.value);
        C ? (d2("MOUNT"), D === "none" && c()) : D === "none" || ((E = e.value) == null ? undefined : E.display) === "none" ? (d2("UNMOUNT"), c()) : $2 && P !== D ? (d2("ANIMATION_OUT"), c()) : (d2("UNMOUNT"), c());
      }
    },
    { immediate: true }
  );
  const f2 = (C) => {
    const $2 = $a(t2.value), h2 = $2.includes(
      C.animationName
    );
    u.value === "mounted" ? "enter" : "leave";
    if (C.target === t2.value && h2 && (d2("ANIMATION_END"), !l2.value)) {
      const P = t2.value.style.animationFillMode;
      t2.value.style.animationFillMode = "forwards", r = i == null ? undefined : i.setTimeout(() => {
        var D;
        ((D = t2.value) == null ? undefined : D.style.animationFillMode) === "forwards" && (t2.value.style.animationFillMode = P);
      });
    }
    C.target === t2.value && $2 === "none" && d2("ANIMATION_END");
  }, v = (C) => {
    C.target === t2.value && (n2.value = $a(t2.value));
  }, p2 = watch(
    t2,
    (C, $2) => {
      C ? (e.value = getComputedStyle(C), C.addEventListener("animationstart", v), C.addEventListener("animationcancel", f2), C.addEventListener("animationend", f2)) : (d2("ANIMATION_END"), i == null || i.clearTimeout(r), $2 == null || $2.removeEventListener("animationstart", v), $2 == null || $2.removeEventListener("animationcancel", f2), $2 == null || $2.removeEventListener("animationend", f2));
    },
    { immediate: true }
  ), g2 = watch(u, () => {
    const C = $a(t2.value);
    n2.value = u.value === "mounted" ? C : "none";
  });
  return onUnmounted(() => {
    p2(), g2();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function $a(a22) {
  return a22 && getComputedStyle(a22).animationName || "none";
}
const Pe = defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a22, { slots: t2, expose: e }) {
    var d2;
    const { present: n2, forceMount: l2 } = toRefs(a22), s2 = ref(), { isPresent: r } = Gi(n2, s2);
    e({ present: r });
    let i = t2.default({ present: r });
    i = Ua(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? undefined : i.length) > 1) {
      const c = (d2 = u == null ? undefined : u.parent) != null && d2.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((f2) => `  - ${f2}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l2.value || n2.value || r.value ? h(t2.default({ present: r })[0], {
      ref: (c) => {
        const f2 = $e(c);
        return typeof (f2 == null ? undefined : f2.hasAttribute) > "u" || (f2 != null && f2.hasAttribute("data-radix-popper-content-wrapper") ? s2.value = f2.firstElementChild : s2.value = f2), f2;
      }
    }) : null;
  }
}), qi = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, e = Nl();
    e.contentId || (e.contentId = he(undefined, "radix-vue-collapsible-content"));
    const n2 = ref(), { forwardRef: l2, currentElement: s2 } = R(), r = ref(0), i = ref(0), u = computed(() => e.open.value), d2 = ref(u.value), c = ref();
    return watch(
      () => {
        var f2;
        return [u.value, (f2 = n2.value) == null ? undefined : f2.present];
      },
      async () => {
        await nextTick();
        const f2 = s2.value;
        if (!f2)
          return;
        c.value = c.value || {
          transitionDuration: f2.style.transitionDuration,
          animationName: f2.style.animationName
        }, f2.style.transitionDuration = "0s", f2.style.animationName = "none";
        const v = f2.getBoundingClientRect();
        i.value = v.height, r.value = v.width, d2.value || (f2.style.transitionDuration = c.value.transitionDuration, f2.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d2.value = false;
      });
    }), (f2, v) => (openBlock(), createBlock(unref(Pe), {
      ref_key: "presentRef",
      ref: n2,
      present: f2.forceMount || unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var p2, g2;
        return [
          createVNode(unref(O), mergeProps(f2.$attrs, {
            id: unref(e).contentId,
            ref: unref(l2),
            "as-child": t2.asChild,
            as: f2.as,
            "data-state": unref(e).open.value ? "open" : "closed",
            "data-disabled": (p2 = unref(e).disabled) != null && p2.value ? "" : undefined,
            hidden: !((g2 = n2.value) != null && g2.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: withCtx(() => {
              var m;
              return [
                (m = n2.value) != null && m.present ? renderSlot(f2.$slots, "default", { key: 0 }) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Ll({ type: a22, defaultValue: t2, modelValue: e }) {
  const n2 = e || t2;
  if (vt(a22) && vt(e) && vt(t2))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (e !== undefined && t2 !== undefined && typeof e != typeof t2)
    throw new Error(
      `Invalid prop \`value\` of value \`${e}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t2}\`. The \`value\` prop must be:
  ${a22 === "single" ? "- a string" : a22 === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const l2 = e !== undefined || t2 !== undefined;
  if (a22 && l2) {
    const s2 = Array.isArray(e) || Array.isArray(t2), r = e !== undefined ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof e : typeof t2;
    if (a22 === "single" && s2)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (a22 === "multiple" && !s2)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return l2 ? Array.isArray(n2) ? "multiple" : "single" : a22;
}
function Yi({ type: a22, defaultValue: t2, modelValue: e }) {
  return a22 || Ll({ type: a22, defaultValue: t2, modelValue: e });
}
function Xi({ type: a22, defaultValue: t2 }) {
  return t2 !== undefined ? t2 : a22 === "single" ? undefined : [];
}
function zl(a22, t2) {
  const e = ref(Yi(a22)), n2 = ne(a22, "modelValue", t2, {
    defaultValue: Xi(a22),
    passive: a22.modelValue === undefined,
    deep: true
  });
  watch(
    () => [a22.type, a22.modelValue, a22.defaultValue],
    () => {
      const r = Ll(a22);
      e.value !== r && (e.value = r);
    },
    { immediate: true }
  );
  function l2(r) {
    if (e.value === "single")
      n2.value = r === n2.value ? undefined : r;
    else {
      const i = [...n2.value || []];
      if (i.includes(r)) {
        const u = i.findIndex((d2) => d2 === r);
        i.splice(u, 1);
      } else
        i.push(r);
      n2.value = i;
    }
  }
  const s2 = computed(() => e.value === "single");
  return {
    modelValue: n2,
    type: e,
    changeModelValue: l2,
    isSingle: s2
  };
}
const [qa, Zi] = Q("AccordionRoot"), _v = /* @__PURE__ */ defineComponent({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { dir: l2, disabled: s2 } = toRefs(e), r = be(l2), { modelValue: i, changeModelValue: u, isSingle: d2 } = zl(e, n2), { forwardRef: c, currentElement: f2 } = R();
    return Zi({
      disabled: s2,
      direction: r,
      orientation: e.orientation,
      parentElement: f2,
      isSingle: d2,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (v, p2) => (openBlock(), createBlock(unref(O), {
      ref: unref(c),
      "as-child": v.asChild,
      as: v.as
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default", { modelValue: unref(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Zn, Ji] = Q("AccordionItem"), xv = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22, { expose: t2 }) {
    const e = a22, n2 = qa(), l2 = computed(
      () => n2.isSingle.value ? e.value === n2.modelValue.value : Array.isArray(n2.modelValue.value) && n2.modelValue.value.includes(e.value)
    ), s2 = computed(() => n2.disabled.value || e.disabled), r = computed(() => s2.value ? "" : undefined), i = computed(
      () => l2.value ? "open" : "closed"
      /* Closed */
    );
    t2({ open: l2, dataDisabled: r });
    const { currentRef: u, currentElement: d2 } = R();
    Ji({
      open: l2,
      dataState: i,
      disabled: s2,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d2,
      value: computed(() => e.value)
    });
    function c(f2) {
      var m;
      const v = f2.target;
      if (Array.from(((m = n2.parentElement.value) == null ? undefined : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((_) => _ === v) === -1)
        return null;
      Rt(
        f2,
        d2.value,
        n2.parentElement.value,
        {
          arrowKeyOptions: n2.orientation,
          dir: n2.direction.value,
          focus: true
        }
      );
    }
    return (f2, v) => (openBlock(), createBlock(unref(ji), {
      "data-orientation": unref(n2).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s2.value,
      open: l2.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: withCtx(() => [
        renderSlot(f2.$slots, "default", { open: l2.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), Sv = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, e = qa(), n2 = Zn();
    return R(), (l2, s2) => (openBlock(), createBlock(unref(qi), {
      role: "region",
      hidden: !unref(n2).open.value,
      "as-child": t2.asChild,
      "force-mount": t2.forceMount,
      "aria-labelledby": unref(n2).triggerId,
      "data-state": unref(n2).dataState.value,
      "data-disabled": unref(n2).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: withCtx(() => [
        renderSlot(l2.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "force-mount", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), Ev = /* @__PURE__ */ defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a22) {
    const t2 = a22, e = qa(), n2 = Zn();
    return R(), (l2, s2) => (openBlock(), createBlock(unref(O), {
      as: t2.as,
      "as-child": t2.asChild,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n2).dataState.value,
      "data-disabled": unref(n2).dataDisabled.value
    }, {
      default: withCtx(() => [
        renderSlot(l2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), Pv = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, e = qa(), n2 = Zn();
    n2.triggerId || (n2.triggerId = he(undefined, "radix-vue-accordion-trigger"));
    function l2() {
      const s2 = e.isSingle.value && n2.open.value && !e.collapsible;
      n2.disabled.value || s2 || e.changeModelValue(n2.value.value);
    }
    return (s2, r) => (openBlock(), createBlock(unref(Ui), {
      id: unref(n2).triggerId,
      ref: unref(n2).currentRef,
      "data-radix-vue-collection-item": "",
      as: t2.as,
      "as-child": t2.asChild,
      "aria-disabled": unref(n2).disabled.value || undefined,
      "aria-expanded": unref(n2).open.value || false,
      "data-disabled": unref(n2).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n2).dataState.value,
      disabled: unref(n2).disabled.value,
      onClick: l2
    }, {
      default: withCtx(() => [
        renderSlot(s2.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [tt, Qi] = Q("DialogRoot"), eu = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, l2 = ne(e, "open", t2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), s2 = ref(), r = ref(), { modal: i } = toRefs(e);
    return Qi({
      open: l2,
      modal: i,
      openModal: () => {
        l2.value = true;
      },
      onOpenChange: (u) => {
        l2.value = u;
      },
      onOpenToggle: () => {
        l2.value = !l2.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s2,
      contentElement: r
    }), (u, d2) => renderSlot(u.$slots, "default", { open: unref(l2) });
  }
}), tu = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = tt(), { forwardRef: n2, currentElement: l2 } = R();
    return e.contentId || (e.contentId = he(undefined, "radix-vue-dialog-content")), onMounted(() => {
      e.triggerElement.value = l2.value;
    }), (s2, r) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      ref: unref(n2),
      type: s2.as === "button" ? "button" : undefined,
      "aria-haspopup": "dialog",
      "aria-expanded": unref(e).open.value || false,
      "aria-controls": unref(e).open.value ? unref(e).contentId : undefined,
      "data-state": unref(e).open.value ? "open" : "closed",
      onClick: unref(e).onOpenToggle
    }), {
      default: withCtx(() => [
        renderSlot(s2.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), ot = /* @__PURE__ */ defineComponent({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = ja();
    return (e, n2) => unref(t2) || e.forceMount ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
}), Dv = /* @__PURE__ */ defineComponent({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Hl(a22, t2) {
  var s2;
  ((s2 = t2 == null ? undefined : t2.value) == null ? undefined : s2.ownerDocument) ?? (globalThis == null ? undefined : globalThis.document);
  const n2 = ref(false);
  ref(() => {
  });
  return watchEffect((r) => {
    return;
  }), {
    onPointerDownCapture: () => n2.value = true
  };
}
function Wl(a22, t2) {
  var l2;
  ((l2 = t2 == null ? undefined : t2.value) == null ? undefined : l2.ownerDocument) ?? (globalThis == null ? undefined : globalThis.document);
  const n2 = ref(false);
  return watchEffect((s2) => {
    return;
  }), {
    onFocusCapture: () => n2.value = true,
    onBlurCapture: () => n2.value = false
  };
}
const je = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gt = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { forwardRef: l2, currentElement: s2 } = R(), r = computed(
      () => {
        var g2;
        return ((g2 = s2.value) == null ? undefined : g2.ownerDocument) ?? globalThis.document;
      }
    ), i = computed(() => je.layersRoot), u = computed(() => s2.value ? Array.from(i.value).indexOf(s2.value) : -1), d2 = computed(() => je.layersWithOutsidePointerEventsDisabled.size > 0), c = computed(() => {
      const g2 = Array.from(i.value), [m] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), _ = g2.indexOf(m);
      return u.value >= _;
    }), f2 = Hl(async (g2) => {
      const m = [...je.branches].some(
        (_) => _ == null ? undefined : _.contains(g2.target)
      );
      !c.value || m || (n2("pointerDownOutside", g2), n2("interactOutside", g2), await nextTick(), g2.defaultPrevented || n2("dismiss"));
    }, s2), v = Wl((g2) => {
      [...je.branches].some(
        (_) => _ == null ? undefined : _.contains(g2.target)
      ) || (n2("focusOutside", g2), n2("interactOutside", g2), g2.defaultPrevented || n2("dismiss"));
    }, s2);
    jn("Escape", (g2) => {
      u.value === i.value.size - 1 && (n2("escapeKeyDown", g2), g2.defaultPrevented || n2("dismiss"));
    });
    let p2;
    return watchEffect((g2) => {
      s2.value && (e.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (p2 = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(s2.value)), i.value.add(s2.value), g2(() => {
        e.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = p2);
      }));
    }), watchEffect((g2) => {
      g2(() => {
        s2.value && (i.value.delete(s2.value), je.layersWithOutsidePointerEventsDisabled.delete(s2.value));
      });
    }), (g2, m) => (openBlock(), createBlock(unref(O), {
      ref: unref(l2),
      "as-child": g2.asChild,
      as: g2.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: d2.value ? c.value ? "auto" : "none" : undefined
      }),
      onFocusCapture: unref(v).onFocusCapture,
      onBlurCapture: unref(v).onBlurCapture,
      onPointerdownCapture: unref(f2).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(g2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), ou = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, { forwardRef: e, currentElement: n2 } = R();
    return onMounted(() => {
      je.branches.add(n2.value);
    }), onUnmounted(() => {
      je.branches.delete(n2.value);
    }), (l2, s2) => (openBlock(), createBlock(unref(O), mergeProps({ ref: unref(e) }, t2), {
      default: withCtx(() => [
        renderSlot(l2.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wn = "focusScope.autoFocusOnMount", _n = "focusScope.autoFocusOnUnmount", jo = { bubbles: false, cancelable: true };
function Oa(a22, { select: t2 = false } = {}) {
  const e = (undefined).activeElement;
  for (const n2 of a22)
    if (ct(n2, { select: t2 }), (undefined).activeElement !== e)
      return true;
}
function lu(a22) {
  const t2 = Jn(a22), e = Uo(t2, a22), n2 = Uo(t2.reverse(), a22);
  return [e, n2];
}
function Jn(a22) {
  const t2 = [], e = (undefined).createTreeWalker(a22, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n2) => {
      const l2 = n2.tagName === "INPUT" && n2.type === "hidden";
      return n2.disabled || n2.hidden || l2 ? NodeFilter.FILTER_SKIP : n2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t2.push(e.currentNode);
  return t2;
}
function Uo(a22, t2) {
  for (const e of a22)
    if (!su(e, { upTo: t2 }))
      return e;
}
function su(a22, { upTo: t2 }) {
  if (getComputedStyle(a22).visibility === "hidden")
    return true;
  for (; a22; ) {
    if (t2 !== undefined && a22 === t2)
      return false;
    if (getComputedStyle(a22).display === "none")
      return true;
    a22 = a22.parentElement;
  }
  return false;
}
function ru(a22) {
  return a22 instanceof HTMLInputElement && "select" in a22;
}
function ct(a22, { select: t2 = false } = {}) {
  if (a22 && a22.focus) {
    const e = (undefined).activeElement;
    a22.focus({ preventScroll: true }), a22 !== e && ru(a22) && t2 && a22.select();
  }
}
const iu = ai(() => ref([]));
function uu() {
  const a22 = iu();
  return {
    add(t2) {
      const e = a22.value[0];
      t2 !== e && (e == null || e.pause()), a22.value = Go(a22.value, t2), a22.value.unshift(t2);
    },
    remove(t2) {
      var e;
      a22.value = Go(a22.value, t2), (e = a22.value[0]) == null || e.resume();
    }
  };
}
function Go(a22, t2) {
  const e = [...a22], n2 = e.indexOf(t2);
  return n2 !== -1 && e.splice(n2, 1), e;
}
function du(a22) {
  return a22.filter((t2) => t2.tagName !== "A");
}
const Ya = /* @__PURE__ */ defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { currentRef: l2, currentElement: s2 } = R();
    ref(null);
    const i = uu(), u = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((c) => {
      return;
    }), watchEffect(async (c) => {
      const f2 = s2.value;
      if (await nextTick(), !f2)
        return;
      i.add(u);
      const v = (undefined).activeElement;
      if (!f2.contains(v)) {
        const g2 = new CustomEvent(wn, jo);
        f2.addEventListener(wn, (m) => n2("mountAutoFocus", m)), f2.dispatchEvent(g2), g2.defaultPrevented || (Oa(du(Jn(f2)), {
          select: true
        }), (undefined).activeElement === v && ct(f2));
      }
      c(() => {
        f2.removeEventListener(wn, (_) => n2("mountAutoFocus", _));
        const g2 = new CustomEvent(_n, jo), m = (_) => {
          n2("unmountAutoFocus", _);
        };
        f2.addEventListener(_n, m), f2.dispatchEvent(g2), setTimeout(() => {
          g2.defaultPrevented || ct(v ?? (undefined).body, { select: true }), f2.removeEventListener(_n, m), i.remove(u);
        }, 0);
      });
    });
    function d2(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const f2 = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = (undefined).activeElement;
      if (f2 && v) {
        const p2 = c.currentTarget, [g2, m] = lu(p2);
        g2 && m ? !c.shiftKey && v === m ? (c.preventDefault(), e.loop && ct(g2, { select: true })) : c.shiftKey && v === g2 && (c.preventDefault(), e.loop && ct(m, { select: true })) : v === p2 && c.preventDefault();
      }
    }
    return (c, f2) => (openBlock(), createBlock(unref(O), {
      ref_key: "currentRef",
      ref: l2,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d2
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), cu = "menu.itemSelect", Dn = ["Enter", " "], fu = ["ArrowDown", "PageUp", "Home"], jl = ["ArrowUp", "PageDown", "End"], pu = [...fu, ...jl];
({
  ltr: [...Dn, "ArrowRight"],
  rtl: [...Dn, "ArrowLeft"]
});
function Qn(a22) {
  return a22 ? "open" : "closed";
}
function $n(a22) {
  const t2 = (undefined).activeElement;
  for (const e of a22)
    if (e === t2 || (e.focus(), (undefined).activeElement !== t2))
      return;
}
function hu(a22, t2) {
  const { x: e, y: n2 } = a22;
  let l2 = false;
  for (let s2 = 0, r = t2.length - 1; s2 < t2.length; r = s2++) {
    const i = t2[s2].x, u = t2[s2].y, d2 = t2[r].x, c = t2[r].y;
    u > n2 != c > n2 && e < (d2 - i) * (n2 - u) / (c - u) + i && (l2 = !l2);
  }
  return l2;
}
function yu(a22, t2) {
  if (!t2)
    return false;
  const e = { x: a22.clientX, y: a22.clientY };
  return hu(e, t2);
}
function ua(a22) {
  return a22.pointerType === "mouse";
}
const Ul = /* @__PURE__ */ defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = tt(), { forwardRef: s2, currentElement: r } = R();
    return l2.titleId || (l2.titleId = he(undefined, "radix-vue-dialog-title")), l2.descriptionId || (l2.descriptionId = he(undefined, "radix-vue-dialog-description")), onMounted(() => {
      l2.contentElement = r, (undefined).activeElement !== (undefined).body && (l2.triggerElement.value = (undefined).activeElement);
    }), (i, u) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d2) => n2("openAutoFocus", d2)),
      onUnmountAutoFocus: u[6] || (u[6] = (d2) => n2("closeAutoFocus", d2))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), mergeProps({
          id: unref(l2).contentId,
          ref: unref(s2),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(l2).descriptionId,
          "aria-labelledby": unref(l2).titleId,
          "data-state": unref(Qn)(unref(l2).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d2) => unref(l2).onOpenChange(false)),
          onEscapeKeyDown: u[1] || (u[1] = (d2) => n2("escapeKeyDown", d2)),
          onFocusOutside: u[2] || (u[2] = (d2) => n2("focusOutside", d2)),
          onInteractOutside: u[3] || (u[3] = (d2) => n2("interactOutside", d2)),
          onPointerDownOutside: u[4] || (u[4] = (d2) => n2("pointerDownOutside", d2))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), wu = /* @__PURE__ */ defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = tt(), s2 = Ae(n2), { forwardRef: r, currentElement: i } = R();
    return ya(i), (u, d2) => (openBlock(), createBlock(Ul, mergeProps({ ...e, ...unref(s2) }, {
      ref: unref(r),
      "trap-focus": unref(l2).open.value,
      "disable-outside-pointer-events": true,
      onCloseAutoFocus: d2[0] || (d2[0] = (c) => {
        var f2;
        c.defaultPrevented || (c.preventDefault(), (f2 = unref(l2).triggerElement.value) == null || f2.focus());
      }),
      onPointerDownOutside: d2[1] || (d2[1] = (c) => {
        const f2 = c.detail.originalEvent, v = f2.button === 0 && f2.ctrlKey === true;
        (f2.button === 2 || v) && c.preventDefault();
      }),
      onFocusOutside: d2[2] || (d2[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), _u = /* @__PURE__ */ defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, l2 = Ae(t2);
    R();
    const s2 = tt(), r = ref(false), i = ref(false);
    return (u, d2) => (openBlock(), createBlock(Ul, mergeProps({ ...e, ...unref(l2) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d2[0] || (d2[0] = (c) => {
        var f2;
        c.defaultPrevented || (r.value || (f2 = unref(s2).triggerElement.value) == null || f2.focus(), c.preventDefault()), r.value = false, i.value = false;
      }),
      onInteractOutside: d2[1] || (d2[1] = (c) => {
        var p2;
        c.defaultPrevented || (r.value = true, c.detail.originalEvent.type === "pointerdown" && (i.value = true));
        const f2 = c.target;
        ((p2 = unref(s2).triggerElement.value) == null ? undefined : p2.contains(f2)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xu = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = tt(), s2 = Ae(n2), { forwardRef: r } = R();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l2).open.value
    }, {
      default: withCtx(() => [
        unref(l2).modal.value ? (openBlock(), createBlock(wu, mergeProps({
          key: 0,
          ref: unref(r)
        }, { ...e, ...unref(s2), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(_u, mergeProps({
          key: 1,
          ref: unref(r)
        }, { ...e, ...unref(s2), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Su = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = tt();
    return ha(true), R(), (e, n2) => (openBlock(), createBlock(unref(O), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": unref(t2).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Eu = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = tt(), { forwardRef: e } = R();
    return (n2, l2) => {
      var s2;
      return (s2 = unref(t2)) != null && s2.modal.value ? (openBlock(), createBlock(unref(Pe), {
        key: 0,
        present: n2.forceMount || unref(t2).open.value
      }, {
        default: withCtx(() => [
          createVNode(Su, mergeProps(n2.$attrs, {
            ref: unref(e),
            as: n2.as,
            "as-child": n2.asChild
          }), {
            default: withCtx(() => [
              renderSlot(n2.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : createCommentVNode("", true);
    };
  }
}), Gl = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22;
    R();
    const e = tt();
    return (n2, l2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      type: n2.as === "button" ? "button" : undefined,
      onClick: l2[0] || (l2[0] = (s2) => unref(e).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(n2.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), Pu = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a22) {
    const t2 = a22, e = tt();
    return R(), (n2, l2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      id: unref(e).titleId
    }), {
      default: withCtx(() => [
        renderSlot(n2.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Du = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a22) {
    const t2 = a22;
    R();
    const e = tt();
    return (n2, l2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      id: unref(e).descriptionId
    }), {
      default: withCtx(() => [
        renderSlot(n2.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [ql, Iu] = Q("AvatarRoot"), Fv = /* @__PURE__ */ defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    return R(), Iu({
      imageLoadingStatus: ref("loading")
    }), (t2, e) => (openBlock(), createBlock(unref(O), {
      "as-child": t2.asChild,
      as: t2.as
    }, {
      default: withCtx(() => [
        renderSlot(t2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function Tu(a22, t2) {
  const e = ref("idle"), n2 = ref(false), l2 = (s2) => () => {
    n2.value && (e.value = s2);
  };
  return onMounted(() => {
    n2.value = true, watch([() => a22.value, () => t2 == null ? undefined : t2.value], ([s2, r]) => {
      if (!s2)
        e.value = "error";
      else {
        const i = new (undefined).Image();
        e.value = "loading", i.onload = l2("loaded"), i.onerror = l2("error"), i.src = s2, r && (i.referrerPolicy = r);
      }
    }, { immediate: true });
  }), onUnmounted(() => {
    n2.value = false;
  }), e;
}
const Nv = /* @__PURE__ */ defineComponent({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { src: l2, referrerPolicy: s2 } = toRefs(e);
    R();
    const r = ql(), i = Tu(l2, s2);
    return watch(
      i,
      (u) => {
        n2("loadingStatusChange", u), u !== "idle" && (r.imageLoadingStatus.value = u);
      },
      { immediate: true }
    ), (u, d2) => withDirectives((openBlock(), createBlock(unref(O), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: unref(l2),
      "referrer-policy": unref(s2)
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src", "referrer-policy"])), [
      [vShow, unref(i) === "loaded"]
    ]);
  }
}), Lv = /* @__PURE__ */ defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    const t2 = a22, e = ql();
    R();
    const n2 = ref(false);
    let l2;
    return watch(e.imageLoadingStatus, (s2) => {
      s2 === "loading" && (n2.value = false, t2.delayMs ? l2 = setTimeout(() => {
        n2.value = true, clearTimeout(l2);
      }, t2.delayMs) : n2.value = true);
    }, { immediate: true }), (s2, r) => n2.value && unref(e).imageLoadingStatus.value !== "loaded" ? (openBlock(), createBlock(unref(O), {
      key: 0,
      "as-child": s2.asChild,
      as: s2.as
    }, {
      default: withCtx(() => [
        renderSlot(s2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
const [Zl, td] = Q("PopperRoot"), Ot = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(a22) {
    const t2 = ref();
    return td({
      anchor: t2,
      onAnchorChange: (e) => t2.value = e
    }), (e, n2) => renderSlot(e.$slots, "default");
  }
}), kt = /* @__PURE__ */ defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, { forwardRef: e, currentElement: n2 } = R(), l2 = Zl();
    return watchEffect(() => {
      l2.onAnchorChange(t2.element ?? n2.value);
    }), (s2, r) => (openBlock(), createBlock(unref(O), {
      ref: unref(e),
      as: s2.as,
      "as-child": s2.asChild
    }, {
      default: withCtx(() => [
        renderSlot(s2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function ad(a22) {
  return a22 !== null;
}
function nd(a22) {
  return {
    name: "transformOrigin",
    options: a22,
    fn(t2) {
      var _, C, $2;
      const { placement: e, rects: n2, middlewareData: l2 } = t2, r = ((_ = l2.arrow) == null ? undefined : _.centerOffset) !== 0, i = r ? 0 : a22.arrowWidth, u = r ? 0 : a22.arrowHeight, [d2, c] = Bn(e), f2 = { start: "0%", center: "50%", end: "100%" }[c], v = (((C = l2.arrow) == null ? undefined : C.x) ?? 0) + i / 2, p2 = ((($2 = l2.arrow) == null ? undefined : $2.y) ?? 0) + u / 2;
      let g2 = "", m = "";
      return d2 === "bottom" ? (g2 = r ? f2 : `${v}px`, m = `${-u}px`) : d2 === "top" ? (g2 = r ? f2 : `${v}px`, m = `${n2.floating.height + u}px`) : d2 === "right" ? (g2 = `${-u}px`, m = r ? f2 : `${p2}px`) : d2 === "left" && (g2 = `${n2.floating.width + u}px`, m = r ? f2 : `${p2}px`), { data: { x: g2, y: m } };
    }
  };
}
function Bn(a22) {
  const [t2, e = "center"] = a22.split("-");
  return [t2, e];
}
const Jl = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false
}, [od, ld] = Q("PopperContent"), Bt = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: /* @__PURE__ */ mergeDefaults({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Jl
  }),
  emits: ["placed"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = Zl(), { forwardRef: s2, currentElement: r } = R(), i = ref(), u = ref(), { width: d2, height: c } = Vl(u), f2 = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), v = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), p2 = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g2 = computed(() => ({
      padding: v.value,
      boundary: p2.value.filter(ad),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p2.value.length > 0
    })), m = ei(() => [
      offset({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && flip({
        ...g2.value
      }),
      e.avoidCollisions && shift({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? limitShift() : undefined,
        ...g2.value
      }),
      !e.prioritizePosition && e.avoidCollisions && flip({
        ...g2.value
      }),
      size({
        ...g2.value,
        apply: ({ elements: A2, rects: F, availableWidth: j, availableHeight: W2 }) => {
          const { width: ee2, height: G2 } = F.reference, J = A2.floating.style;
          J.setProperty(
            "--radix-popper-available-width",
            `${j}px`
          ), J.setProperty(
            "--radix-popper-available-height",
            `${W2}px`
          ), J.setProperty(
            "--radix-popper-anchor-width",
            `${ee2}px`
          ), J.setProperty(
            "--radix-popper-anchor-height",
            `${G2}px`
          );
        }
      }),
      u.value && arrow({ element: u.value, padding: e.arrowPadding }),
      nd({
        arrowWidth: d2.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && hide({ strategy: "referenceHidden", ...g2.value })
    ]), { floatingStyles: _, placement: C, isPositioned: $2, middlewareData: h2 } = useFloating(
      l2.anchor,
      i,
      {
        strategy: "fixed",
        placement: f2,
        whileElementsMounted: (...A2) => autoUpdate(...A2, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), E = computed(
      () => Bn(C.value)[0]
    ), P = computed(
      () => Bn(C.value)[1]
    );
    watchPostEffect(() => {
      $2.value && n2("placed");
    });
    const D = computed(
      () => {
        var A2;
        return ((A2 = h2.value.arrow) == null ? undefined : A2.centerOffset) !== 0;
      }
    ), I = ref("");
    watchEffect(() => {
      r.value && (I.value = (undefined).getComputedStyle(r.value).zIndex);
    });
    const M = computed(() => {
      var A2;
      return ((A2 = h2.value.arrow) == null ? undefined : A2.x) ?? 0;
    }), V = computed(() => {
      var A2;
      return ((A2 = h2.value.arrow) == null ? undefined : A2.y) ?? 0;
    });
    return ld({
      placedSide: E,
      onArrowChange: (A2) => u.value = A2,
      arrowX: M,
      arrowY: V,
      shouldHideArrow: D
    }), (A2, F) => {
      var j, W2, ee2;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(_),
          transform: unref($2) ? unref(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--radix-popper-transform-origin": [
            (j = unref(h2).transformOrigin) == null ? undefined : j.x,
            (W2 = unref(h2).transformOrigin) == null ? undefined : W2.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee2 = unref(h2).hide) == null ? undefined : ee2.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        createVNode(unref(O), mergeProps({ ref: unref(s2) }, A2.$attrs, {
          "as-child": e.asChild,
          as: A2.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref($2) ? undefined : "none"
          }
        }), {
          default: withCtx(() => [
            renderSlot(A2.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), sd = /* @__PURE__ */ createElementVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1), rd = /* @__PURE__ */ defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a22) {
    const t2 = a22;
    return R(), (e, n2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? undefined : "0 0 30 10",
      preserveAspectRatio: e.asChild ? undefined : "none"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          sd
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), id = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Xt = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a22) {
    const { forwardRef: t2 } = R(), e = od(), n2 = computed(() => id[e.placedSide.value]);
    return (l2, s2) => {
      var r, i, u, d2;
      return openBlock(), createElementBlock("span", {
        ref: (c) => {
          unref(e).onArrowChange(c);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (r = unref(e).arrowX) != null && r.value ? `${(i = unref(e).arrowX) == null ? undefined : i.value}px` : undefined,
          top: (u = unref(e).arrowY) != null && u.value ? `${(d2 = unref(e).arrowY) == null ? undefined : d2.value}px` : undefined,
          [n2.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(e).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(e).placedSide.value],
          visibility: unref(e).shouldHideArrow.value ? "hidden" : undefined
        })
      }, [
        createVNode(rd, mergeProps(l2.$attrs, {
          ref: unref(t2),
          style: {
            display: "block"
          },
          as: l2.as,
          "as-child": l2.asChild,
          width: l2.width,
          height: l2.height
        }), {
          default: withCtx(() => [
            renderSlot(l2.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), Zt = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    return R(), (t2, e) => (openBlock(), createBlock(unref(O), {
      as: t2.as,
      "as-child": t2.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: withCtx(() => [
        renderSlot(t2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), to = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22, e = computed(() => typeof t2.value == "string" || typeof t2.value == "number" || typeof t2.value == "boolean" ? [{ name: t2.name, value: t2.value }] : typeof t2.value == "object" && Array.isArray(t2.value) ? t2.value.flatMap((n2, l2) => typeof n2 == "object" ? Object.entries(n2).map(([s2, r]) => ({ name: `[${l2}][${t2.name}][${s2}]`, value: r })) : { name: `[${t2.name}][${l2}]`, value: n2 }) : t2.value !== null && typeof t2.value == "object" && !Array.isArray(t2.value) ? Object.entries(t2.value).map(([n2, l2]) => ({ name: `[${t2.name}][${n2}]`, value: l2 })) : []);
    return (n2, l2) => (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (s2) => (openBlock(), createBlock(Zt, {
      key: s2.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s2.name,
      value: s2.value,
      required: n2.required,
      disabled: n2.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), ud = "data-radix-vue-collection-item", [ao, dd] = Q("CollectionProvider");
function ba(a22 = ud) {
  const t2 = ref(/* @__PURE__ */ new Map()), e = ref(), n2 = dd({
    collectionRef: e,
    itemMap: t2,
    attrName: a22
  }), { getItems: l2 } = Qt(n2), s2 = computed(() => Array.from(n2.itemMap.value.values())), r = computed(() => n2.itemMap.value.size);
  return { getItems: l2, reactiveItems: s2, itemMapSize: r };
}
const Ca = defineComponent({
  name: "CollectionSlot",
  setup(a22, { slots: t2 }) {
    const e = ao(), { primitiveElement: n2, currentElement: l2 } = Ie();
    return watch(l2, () => {
      e.collectionRef.value = l2.value;
    }), () => h(Xn, { ref: n2 }, t2);
  }
}), Jt = defineComponent({
  name: "CollectionItem",
  inheritAttrs: false,
  props: {
    value: {
      // It accepts any value
      validator: () => true
    }
  },
  setup(a22, { slots: t2, attrs: e }) {
    const n2 = ao(), { primitiveElement: l2, currentElement: s2 } = Ie();
    return watchEffect((r) => {
      if (s2.value) {
        const i = markRaw(s2.value);
        n2.itemMap.value.set(i, { ref: s2.value, value: a22.value }), r(() => n2.itemMap.value.delete(i));
      }
    }), () => h(Xn, { ...e, [n2.attrName]: "", ref: l2 }, t2);
  }
});
function Qt(a22) {
  const t2 = a22 ?? ao();
  return { getItems: () => {
    const n2 = t2.collectionRef.value;
    if (!n2)
      return [];
    const l2 = Array.from(n2.querySelectorAll(`[${t2.attrName}]`));
    return Array.from(t2.itemMap.value.values()).sort(
      (i, u) => l2.indexOf(i.ref) - l2.indexOf(u.ref)
    );
  } };
}
function Xa(a22) {
  const t2 = Ga({
    nonce: ref()
  });
  return computed(() => {
    var e;
    return (a22 == null ? undefined : a22.value) || ((e = t2.nonce) == null ? undefined : e.value);
  });
}
const Za = /* @__PURE__ */ defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(kt), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function bd() {
  const a22 = ref(false);
  return onMounted(() => {
    Le("keydown", () => {
      a22.value = true;
    }, { capture: true, passive: true }), Le(["pointerdown", "pointermove"], () => {
      a22.value = false;
    }, { capture: true, passive: true });
  }), a22;
}
const Cd = Sl(bd), [Mt, es] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [wa, wd] = Q("MenuRoot"), oo = /* @__PURE__ */ defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { modal: l2, dir: s2 } = toRefs(e), r = be(s2), i = ne(e, "open", n2), u = ref(), d2 = Cd();
    return es({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), wd({
      onClose: () => {
        i.value = false;
      },
      isUsingKeyboardRef: d2,
      dir: r,
      modal: l2
    }), (c, f2) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), _d = "rovingFocusGroup.onEntryFocus", xd = { bubbles: false, cancelable: true }, Ja = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Sd(a22, t2) {
  return t2 !== "rtl" ? a22 : a22 === "ArrowLeft" ? "ArrowRight" : a22 === "ArrowRight" ? "ArrowLeft" : a22;
}
function ts(a22, t2, e) {
  const n2 = Sd(a22.key, e);
  if (!(t2 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n2)) && !(t2 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n2)))
    return Ja[n2];
}
function as(a22, t2 = false, e) {
  const n2 = (e == null ? undefined : e.activeElement) ?? (undefined).activeElement;
  for (const l2 of a22)
    if (l2 === n2 || (l2.focus({ preventScroll: t2 }), (undefined).activeElement !== n2))
      return;
}
function Ed(a22, t2) {
  return a22.map((e, n2) => a22[(t2 + n2) % a22.length]);
}
const [Pd, Dd] = Q("RovingFocusGroup"), Vt = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: undefined },
    dir: {},
    loop: { type: Boolean, default: false },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(a22, { expose: t2, emit: e }) {
    const n2 = a22, l2 = e, { loop: s2, orientation: r, dir: i } = toRefs(n2), u = be(i), d2 = ne(n2, "currentTabStopId", l2, {
      defaultValue: n2.defaultCurrentTabStopId,
      passive: n2.currentTabStopId === undefined
    }), c = ref(false), f2 = ref(false), v = ref(0), { getItems: p2 } = ba();
    function g2(_) {
      const C = !f2.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const $2 = new CustomEvent(_d, xd);
        if (_.currentTarget.dispatchEvent($2), l2("entryFocus", $2), !$2.defaultPrevented) {
          const h2 = p2().map((I) => I.ref).filter((I) => I.dataset.disabled !== ""), E = h2.find((I) => I.getAttribute("data-active") === "true"), P = h2.find(
            (I) => I.id === d2.value
          ), D = [E, P, ...h2].filter(
            Boolean
          );
          as(D, n2.preventScrollOnEntryFocus);
        }
      }
      f2.value = false;
    }
    function m() {
      setTimeout(() => {
        f2.value = false;
      }, 1);
    }
    return t2({
      getItems: p2
    }), Dd({
      loop: s2,
      dir: u,
      orientation: r,
      currentTabStopId: d2,
      onItemFocus: (_) => {
        d2.value = _;
      },
      onItemShiftTab: () => {
        c.value = true;
      },
      onFocusableItemAdd: () => {
        v.value++;
      },
      onFocusableItemRemove: () => {
        v.value--;
      }
    }), (_, C) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          tabindex: c.value || v.value === 0 ? -1 : 0,
          "data-orientation": unref(r),
          as: _.as,
          "as-child": _.asChild,
          dir: unref(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = ($2) => f2.value = true),
          onMouseup: m,
          onFocus: g2,
          onBlur: C[1] || (C[1] = ($2) => c.value = false)
        }, {
          default: withCtx(() => [
            renderSlot(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Ft = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    const t2 = a22, e = Pd(), n2 = computed(() => t2.tabStopId || he()), l2 = computed(
      () => e.currentTabStopId.value === n2.value
    ), { getItems: s2 } = Qt(), { primitiveElement: r, currentElement: i } = Ie(), u = computed(() => {
      var c;
      return (c = i.value) == null ? undefined : c.getRootNode();
    });
    onMounted(() => {
      t2.focusable && e.onFocusableItemAdd();
    }), onUnmounted(() => {
      t2.focusable && e.onFocusableItemRemove();
    });
    function d2(c) {
      if (c.key === "Tab" && c.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (c.target !== c.currentTarget)
        return;
      const f2 = ts(
        c,
        e.orientation.value,
        e.dir.value
      );
      if (f2 !== undefined) {
        if (c.metaKey || c.ctrlKey || c.altKey || !t2.allowShiftKey && c.shiftKey)
          return;
        c.preventDefault();
        let v = [...s2().map((p2) => p2.ref).filter((p2) => p2.dataset.disabled !== "")];
        if (f2 === "last")
          v.reverse();
        else if (f2 === "prev" || f2 === "next") {
          f2 === "prev" && v.reverse();
          const p2 = v.indexOf(
            c.currentTarget
          );
          v = e.loop.value ? Ed(v, p2 + 1) : v.slice(p2 + 1);
        }
        nextTick(() => as(v, false, u.value));
      }
    }
    return (c, f2) => (openBlock(), createBlock(unref(Jt), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref_key: "primitiveElement",
          ref: r,
          tabindex: l2.value ? 0 : -1,
          "data-orientation": unref(e).orientation.value,
          "data-active": c.active,
          "data-disabled": c.focusable ? undefined : "",
          as: c.as,
          "as-child": c.asChild,
          onMousedown: f2[0] || (f2[0] = (v) => {
            c.focusable ? unref(e).onItemFocus(n2.value) : v.preventDefault();
          }),
          onFocus: f2[1] || (f2[1] = (v) => unref(e).onItemFocus(n2.value)),
          onKeydown: d2
        }, {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [lo, $d] = Q("MenuContent"), so = /* @__PURE__ */ defineComponent({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ mergeDefaults({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Jl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = Mt(), s2 = wa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
    Gn(), ha(i.value);
    const d2 = ref(""), c = ref(0), f2 = ref(0), v = ref(null), p2 = ref("right"), g2 = ref(0), m = ref(null), { createCollection: _ } = Me(), { forwardRef: C, currentElement: $2 } = R(), h2 = _($2);
    watch($2, (A2) => {
      l2.onContentChange(A2);
    });
    const { handleTypeaheadSearch: E } = ga(h2);
    onUnmounted(() => {
      (undefined).clearTimeout(c.value);
    });
    function P(A2) {
      var j, W2;
      return p2.value === ((j = v.value) == null ? undefined : j.side) && yu(A2, (W2 = v.value) == null ? undefined : W2.area);
    }
    async function D(A2) {
      var F;
      n2("openAutoFocus", A2), !A2.defaultPrevented && (A2.preventDefault(), (F = $2.value) == null || F.focus({
        preventScroll: true
      }));
    }
    function I(A2) {
      if (A2.defaultPrevented)
        return;
      const j = A2.target.closest("[data-radix-menu-content]") === A2.currentTarget, W2 = A2.ctrlKey || A2.altKey || A2.metaKey, ee2 = A2.key.length === 1, G2 = Rt(
        A2,
        (undefined).activeElement,
        $2.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s2 == null ? undefined : s2.dir.value,
          focus: true,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (G2)
        return G2 == null ? undefined : G2.focus();
      if (A2.code === "Space" || (j && (A2.key === "Tab" && A2.preventDefault(), !W2 && ee2 && E(A2.key)), A2.target !== $2.value) || !pu.includes(A2.key))
        return;
      A2.preventDefault();
      const J = h2.value;
      jl.includes(A2.key) && J.reverse(), $n(J);
    }
    function M(A2) {
      var F, j;
      (j = (F = A2 == null ? undefined : A2.currentTarget) == null ? undefined : F.contains) != null && j.call(F, A2.target) || ((undefined).clearTimeout(c.value), d2.value = "");
    }
    function V(A2) {
      var W2;
      if (!ua(A2))
        return;
      const F = A2.target, j = g2.value !== A2.clientX;
      if ((W2 = A2 == null ? undefined : A2.currentTarget) != null && W2.contains(F) && j) {
        const ee2 = A2.clientX > g2.value ? "right" : "left";
        p2.value = ee2, g2.value = A2.clientX;
      }
    }
    return $d({
      onItemEnter: (A2) => !!P(A2),
      onItemLeave: (A2) => {
        var F;
        P(A2) || ((F = $2.value) == null || F.focus(), m.value = null);
      },
      onTriggerLeave: (A2) => !!P(A2),
      searchRef: d2,
      pointerGraceTimerRef: f2,
      onPointerGraceIntentChange: (A2) => {
        v.value = A2;
      }
    }), (A2, F) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      trapped: unref(r),
      onMountAutoFocus: D,
      onUnmountAutoFocus: F[7] || (F[7] = (j) => n2("closeAutoFocus", j))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          "as-child": "",
          "disable-outside-pointer-events": unref(i),
          onEscapeKeyDown: F[2] || (F[2] = (j) => n2("escapeKeyDown", j)),
          onPointerDownOutside: F[3] || (F[3] = (j) => n2("pointerDownOutside", j)),
          onFocusOutside: F[4] || (F[4] = (j) => n2("focusOutside", j)),
          onInteractOutside: F[5] || (F[5] = (j) => n2("interactOutside", j)),
          onDismiss: F[6] || (F[6] = (j) => n2("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(Vt), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": F[0] || (F[0] = (j) => m.value = j),
              "as-child": "",
              orientation: "vertical",
              dir: unref(s2).dir.value,
              loop: unref(u),
              onEntryFocus: F[1] || (F[1] = (j) => {
                n2("entryFocus", j), unref(s2).isUsingKeyboardRef.value || j.preventDefault();
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(Bt), {
                  ref: unref(C),
                  role: "menu",
                  as: A2.as,
                  "as-child": A2.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": unref(Qn)(unref(l2).open.value),
                  dir: unref(s2).dir.value,
                  side: A2.side,
                  "side-offset": A2.sideOffset,
                  align: A2.align,
                  "align-offset": A2.alignOffset,
                  "avoid-collisions": A2.avoidCollisions,
                  "collision-boundary": A2.collisionBoundary,
                  "collision-padding": A2.collisionPadding,
                  "arrow-padding": A2.arrowPadding,
                  "prioritize-position": A2.prioritizePosition,
                  sticky: A2.sticky,
                  "hide-when-detached": A2.hideWhenDetached,
                  onKeydown: I,
                  onBlur: M,
                  onPointermove: V
                }, {
                  default: withCtx(() => [
                    renderSlot(A2.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), ns = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, e = lo(), { forwardRef: n2 } = R(), l2 = ref(false);
    async function s2(i) {
      if (!i.defaultPrevented && ua(i)) {
        if (t2.disabled)
          e.onItemLeave(i);
        else if (!e.onItemEnter(i)) {
          const d2 = i.currentTarget;
          d2 == null || d2.focus({ preventScroll: true });
        }
      }
    }
    async function r(i) {
      await nextTick(), !i.defaultPrevented && ua(i) && e.onItemLeave(i);
    }
    return (i, u) => (openBlock(), createBlock(unref(Jt), {
      value: { textValue: i.textValue }
    }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(n2),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || undefined,
          "data-disabled": i.disabled ? "" : undefined,
          "data-highlighted": l2.value ? "" : undefined,
          onPointermove: s2,
          onPointerleave: r,
          onFocus: u[0] || (u[0] = async (d2) => {
            await nextTick(), !(d2.defaultPrevented || i.disabled) && (l2.value = true);
          }),
          onBlur: u[1] || (u[1] = async (d2) => {
            await nextTick(), !d2.defaultPrevented && (l2.value = false);
          })
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), _a = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { forwardRef: l2, currentElement: s2 } = R(), r = wa(), i = lo(), u = ref(false);
    async function d2() {
      const c = s2.value;
      if (!e.disabled && c) {
        const f2 = new CustomEvent(cu, {
          bubbles: true,
          cancelable: true
        });
        n2("select", f2), await nextTick(), f2.defaultPrevented ? u.value = false : r.onClose();
      }
    }
    return (c, f2) => (openBlock(), createBlock(ns, mergeProps(e, {
      ref: unref(l2),
      onClick: d2,
      onPointerdown: f2[0] || (f2[0] = () => {
        u.value = true;
      }),
      onPointerup: f2[1] || (f2[1] = async (v) => {
        var p2;
        await nextTick(), !v.defaultPrevented && (u.value || (p2 = v.currentTarget) == null || p2.click());
      }),
      onKeydown: f2[2] || (f2[2] = async (v) => {
        const p2 = unref(i).searchRef.value !== "";
        c.disabled || p2 && v.key === " " || unref(Dn).includes(v.key) && (v.currentTarget.click(), v.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Id = /* @__PURE__ */ defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = xe(e, n2), s2 = Mt(), { forwardRef: r, currentElement: i } = R();
    return ya(i), (u, d2) => (openBlock(), createBlock(so, mergeProps(unref(l2), {
      ref: unref(r),
      "trap-focus": unref(s2).open.value,
      "disable-outside-pointer-events": unref(s2).open.value,
      "disable-outside-scroll": true,
      onDismiss: d2[0] || (d2[0] = (c) => unref(s2).onOpenChange(false)),
      onFocusOutside: d2[1] || (d2[1] = withModifiers((c) => n2("focusOutside", c), ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Td = /* @__PURE__ */ defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const l2 = xe(a22, t2), s2 = Mt();
    return (r, i) => (openBlock(), createBlock(so, mergeProps(unref(l2), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: i[0] || (i[0] = (u) => unref(s2).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uo = /* @__PURE__ */ defineComponent({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const l2 = xe(a22, t2), s2 = Mt(), r = wa();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(s2).open.value
    }, {
      default: withCtx(() => [
        unref(r).modal.value ? (openBlock(), createBlock(Id, normalizeProps(mergeProps({ key: 0 }, { ...i.$attrs, ...unref(l2) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Td, normalizeProps(mergeProps({ key: 1 }, { ...i.$attrs, ...unref(l2) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), fo = /* @__PURE__ */ defineComponent({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
const [us, ic] = Q("DropdownMenuRoot"), sh = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: undefined },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2;
    R();
    const l2 = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), s2 = ref(), { modal: r, dir: i } = toRefs(e), u = be(i);
    return ic({
      open: l2,
      onOpenChange: (d2) => {
        l2.value = d2;
      },
      onOpenToggle: () => {
        l2.value = !l2.value;
      },
      triggerId: "",
      triggerElement: s2,
      contentId: "",
      modal: r,
      dir: u
    }), (d2, c) => (openBlock(), createBlock(unref(oo), {
      open: unref(l2),
      "onUpdate:open": c[0] || (c[0] = (f2) => isRef(l2) ? l2.value = f2 : null),
      dir: unref(u),
      modal: unref(r)
    }, {
      default: withCtx(() => [
        renderSlot(d2.$slots, "default", { open: unref(l2) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), rh = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = us(), { forwardRef: n2, currentElement: l2 } = R();
    return onMounted(() => {
      e.triggerElement = l2;
    }), e.triggerId || (e.triggerId = he(undefined, "radix-vue-dropdown-menu-trigger")), (s2, r) => (openBlock(), createBlock(unref(Za), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: unref(e).triggerId,
          ref: unref(n2),
          type: s2.as === "button" ? "button" : undefined,
          "as-child": t2.asChild,
          as: s2.as,
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).open.value ? unref(e).contentId : undefined,
          "data-disabled": s2.disabled ? "" : undefined,
          disabled: s2.disabled,
          "data-state": unref(e).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var u;
            !s2.disabled && i.button === 0 && i.ctrlKey === false && ((u = unref(e)) == null || u.onOpenToggle(), await nextTick(), unref(e).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = withKeys(
            (i) => {
              s2.disabled || (["Enter", " "].includes(i.key) && unref(e).onOpenToggle(), i.key === "ArrowDown" && unref(e).onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: withCtx(() => [
            renderSlot(s2.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), ih = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(fo), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uh = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const l2 = xe(a22, t2);
    R();
    const s2 = us(), r = ref(false);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d2;
        (d2 = s2.triggerElement.value) == null || d2.focus();
      }, 0), r.value = false, u.preventDefault());
    }
    return s2.contentId || (s2.contentId = he(undefined, "radix-vue-dropdown-menu-content")), (u, d2) => {
      var c;
      return openBlock(), createBlock(unref(uo), mergeProps(unref(l2), {
        id: unref(s2).contentId,
        "aria-labelledby": (c = unref(s2)) == null ? undefined : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d2[0] || (d2[0] = (f2) => {
          var m;
          if (f2.defaultPrevented) return;
          const v = f2.detail.originalEvent, p2 = v.button === 0 && v.ctrlKey === true, g2 = v.button === 2 || p2;
          (!unref(s2).modal.value || g2) && (r.value = true), (m = unref(s2).triggerElement.value) != null && m.contains(f2.target) && f2.preventDefault();
        })
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ch = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a22, { emit: t2 }) {
    const e = a22, l2 = Ae(t2);
    return R(), (s2, r) => (openBlock(), createBlock(unref(_a), normalizeProps(guardReactiveProps({ ...e, ...unref(l2) })), {
      default: withCtx(() => [
        renderSlot(s2.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function mc(a22, t2, e) {
  return a22 === undefined ? false : Array.isArray(a22) ? a22.some((n2) => Ut(n2, t2, e)) : Ut(a22, t2, e);
}
function Ut(a22, t2, e) {
  return a22 === undefined || t2 === undefined ? false : typeof a22 == "string" ? a22 === t2 : typeof e == "function" ? e(a22, t2) : typeof e == "string" ? (a22 == null ? undefined : a22[e]) === (t2 == null ? undefined : t2[e]) : Xe(a22, t2);
}
const [en, hc] = Q("ListboxRoot"), kh = /* @__PURE__ */ defineComponent({
  __name: "ListboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: { default: "toggle" },
    highlightOnHover: { type: Boolean },
    by: {},
    name: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { multiple: l2, highlightOnHover: s2, orientation: r, disabled: i, selectionBehavior: u, dir: d2 } = toRefs(e), { getItems: c } = ba(), { handleTypeaheadSearch: f2 } = ga(), { primitiveElement: v, currentElement: p2 } = Ie(), g2 = et(), m = be(d2), _ = Qe(p2), C = ref(), $2 = ref(false), h2 = ref(true), E = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue ?? (l2.value ? [] : undefined),
      passive: e.modelValue === undefined,
      deep: true
    });
    function P(N) {
      if ($2.value = true, Array.isArray(E.value)) {
        const Z = E.value.findIndex((X2) => Ut(X2, N, e.by));
        if (e.selectionBehavior === "toggle") {
          const X2 = [...E.value];
          Z === -1 ? X2.push(N) : X2.splice(Z, 1), E.value = X2;
        } else
          E.value = [N], C.value = N;
      } else
        e.selectionBehavior === "toggle" && Ut(E.value, N, e.by) ? E.value = undefined : E.value = N;
      setTimeout(() => {
        $2.value = false;
      }, 1);
    }
    const D = ref(null), I = ref(null), M = ref(false), V = ia(), A2 = ia();
    function F() {
      return c().map((N) => N.ref).filter((N) => N.dataset.disabled !== "");
    }
    function j(N) {
      if (!N)
        return;
      D.value = N, D.value.focus(), D.value.scrollIntoView({ block: "nearest" });
      const Z = c().find((X2) => X2.ref === N);
      n2("highlight", Z);
    }
    function W2(N) {
      D.value && D.value.click();
    }
    function ee2(N) {
      if ($2.value = true, M.value)
        A2.trigger(N);
      else {
        const Z = N.altKey || N.ctrlKey || N.metaKey;
        if (Z && N.key === "a" && l2.value) {
          const X2 = c(), re = X2.map((Y) => Y.value);
          E.value = [...re], N.preventDefault(), j(X2[X2.length - 1].ref);
        } else if (!Z) {
          const X2 = f2(N.key, F());
          X2 && j(X2);
        }
      }
      setTimeout(() => {
        $2.value = false;
      }, 1);
    }
    function G2(N) {
      const Z = D.value;
      Z != null && Z.isConnected && (I.value = Z), D.value = null, n2("leave", N);
    }
    function J(N) {
      var X2, re;
      const Z = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
      if ((X2 = N.currentTarget) == null || X2.dispatchEvent(Z), n2("entryFocus", Z), !Z.defaultPrevented)
        if (I.value)
          j(I.value);
        else {
          const Y = (re = F()) == null ? undefined : re[0];
          j(Y);
        }
    }
    function K2(N) {
      const Z = ts(N, r.value, m.value);
      if (!Z)
        return;
      let X2 = F();
      if (D.value) {
        if (Z === "last")
          X2.reverse();
        else if (Z === "prev" || Z === "next") {
          Z === "prev" && X2.reverse();
          const re = X2.indexOf(D.value);
          X2 = X2.slice(re + 1);
        }
        z(N, X2[0]);
      }
      if (X2.length) {
        const re = !D.value && Z === "prev" ? X2.length - 1 : 0;
        j(X2[re]);
      }
      if (M.value)
        return A2.trigger(N);
    }
    function z(N, Z) {
      var re;
      if (!(M.value || e.selectionBehavior !== "replace" || !l2.value || !Array.isArray(E.value) || (N.altKey || N.ctrlKey || N.metaKey) && !N.shiftKey) && N.shiftKey) {
        const Y = c().filter((_e) => _e.ref.dataset.disabled !== "");
        let se2 = (re = Y.find((_e) => _e.ref === Z)) == null ? undefined : re.value;
        if (N.key === g2.END ? se2 = Y[Y.length - 1].value : N.key === g2.HOME && (se2 = Y[0].value), !se2 || !C.value)
          return;
        const fe = Dt(Y.map((_e) => _e.value), C.value, se2);
        E.value = fe;
      }
    }
    async function L(N) {
      if (M.value)
        V.trigger(N);
      else {
        await nextTick();
        const X2 = F().find((re) => re.dataset.state === "checked");
        X2 && j(X2);
      }
    }
    return watch(E, () => {
      $2.value || nextTick(() => {
        L();
      });
    }, { immediate: true, deep: true }), hc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l2,
      orientation: r,
      dir: m,
      disabled: i,
      highlightOnHover: s2,
      highlightedElement: D,
      isVirtual: M,
      virtualFocusHook: V,
      virtualKeydownHook: A2,
      by: e.by,
      firstValue: C,
      selectionBehavior: u,
      focusable: h2,
      onLeave: G2,
      onEnter: J,
      onChangeHighlight: j,
      onKeydownEnter: W2,
      onKeydownNavigation: K2,
      onKeydownTypeAhead: ee2
    }), (N, Z) => (openBlock(), createBlock(unref(O), {
      ref_key: "primitiveElement",
      ref: v,
      as: N.as,
      "as-child": N.asChild,
      dir: unref(m),
      "data-disabled": unref(i) ? "" : undefined,
      onPointerleave: G2,
      onFocusout: Z[0] || (Z[0] = async (X2) => {
        const re = X2.relatedTarget || X2.target;
        await nextTick(), D.value && unref(p2) && !unref(p2).contains(re) && G2(X2);
      })
    }, {
      default: withCtx(() => [
        renderSlot(N.$slots, "default", { modelValue: unref(E) }),
        unref(_) && e.name ? (openBlock(), createBlock(unref(to), {
          key: 0,
          name: e.name,
          value: unref(E)
        }, null, 8, ["name", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), Mh = /* @__PURE__ */ defineComponent({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = en(), e = It(false, 10);
    return (n2, l2) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          role: "listbox",
          as: n2.as,
          "as-child": n2.asChild,
          tabindex: unref(t2).focusable.value ? unref(t2).highlightedElement.value ? "-1" : "0" : undefined,
          "aria-orientation": unref(t2).orientation.value,
          "aria-multiselectable": !!unref(t2).multiple.value,
          "data-orientation": unref(t2).orientation.value,
          onMousedown: l2[0] || (l2[0] = withModifiers((s2) => e.value = true, ["left"])),
          onFocus: l2[1] || (l2[1] = (s2) => {
            unref(e) || unref(t2).onEnter(s2);
          }),
          onKeydown: [
            l2[2] || (l2[2] = withKeys(withModifiers((s2) => {
              unref(t2).focusable.value && unref(t2).onKeydownNavigation(s2);
            }, ["prevent"]), ["down", "up", "left", "right", "home", "end"])),
            withKeys(unref(t2).onKeydownEnter, ["enter"]),
            unref(t2).onKeydownTypeAhead
          ]
        }, {
          default: withCtx(() => [
            renderSlot(n2.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), yc = "listbox.select", [gc, bc] = Q("ListboxItem"), Fh = /* @__PURE__ */ defineComponent({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { forwardRef: l2, currentElement: s2 } = R(), r = he(undefined, "radix-vue-listbox-item"), i = en(), u = computed(() => s2.value === i.highlightedElement.value), d2 = computed(() => mc(i.modelValue.value, e.value, i.by)), c = computed(() => i.disabled.value || e.disabled);
    async function f2(p2) {
      n2("select", p2), !(p2 != null && p2.defaultPrevented) && !c.value && p2 && (i.onValueChange(e.value), i.onChangeHighlight(p2.target));
    }
    function v(p2) {
      const g2 = { originalEvent: p2, value: e.value };
      Wt(yc, f2, g2);
    }
    return bc({
      isSelected: d2
    }), (p2, g2) => (openBlock(), createBlock(unref(Jt), { value: p2.value }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: unref(r),
          ref: unref(l2),
          role: "option",
          tabindex: unref(i).focusable.value ? u.value ? "0" : "-1" : undefined,
          "aria-selected": d2.value,
          as: p2.as,
          "as-child": p2.asChild,
          disabled: c.value ? "" : undefined,
          "data-disabled": c.value ? "" : undefined,
          "data-highlighted": u.value ? "" : undefined,
          "data-state": d2.value ? "checked" : "unchecked",
          onClick: v,
          onKeydown: withKeys(withModifiers(v, ["prevent"]), ["space"]),
          onPointermove: g2[0] || (g2[0] = (m) => {
            unref(i).highlightOnHover.value ? unref(i).onChangeHighlight(unref(s2)) : unref(i).focusable.value || unref(i).onChangeHighlight(unref(s2));
          })
        }, {
          default: withCtx(() => [
            renderSlot(p2.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
});
function hs(a22) {
  ref();
  const n2 = ia(), u = ref(false);
  computed(() => $e(a22.target));
  return {
    isPressed: u,
    onTrigger: n2.on
  };
}
function Xo(a22, t2 = ref({})) {
  return El(() => new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(a22.value, t2.value));
}
function zc(a22, t2 = ref({})) {
  return El(() => new $6c7bd7858deea686$export$cd11ab140839f11d(a22.value, t2.value));
}
function Zo(a22, t2, e) {
  let n2 = a22 === "+" ? t2 + e : t2 - e;
  if (t2 % 1 !== 0 || e % 1 !== 0) {
    const l2 = t2.toString().split("."), s2 = e.toString().split("."), r = l2[1] && l2[1].length || 0, i = s2[1] && s2[1].length || 0, u = 10 ** Math.max(r, i);
    t2 = Math.round(t2 * u), e = Math.round(e * u), n2 = a22 === "+" ? t2 + e : t2 - e, n2 /= u;
  }
  return n2;
}
const Kc = ["value", "name", "disabled", "required"], [Eo, Hc] = Q("NumberFieldRoot"), my = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NumberFieldRoot",
  props: {
    defaultValue: { default: undefined },
    modelValue: {},
    min: {},
    max: {},
    step: { default: 1 },
    formatOptions: {},
    locale: { default: "en-US" },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { disabled: l2, min: s2, max: r, step: i, locale: u, formatOptions: d2, id: c } = toRefs(e), f2 = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), { primitiveElement: v, currentElement: p2 } = Ie(), g2 = Qe(p2), m = ref(), _ = computed(
      () => W2(f2.value) === s2.value || (s2.value && !isNaN(f2.value) ? Zo("-", f2.value, i.value) < s2.value : false)
    ), C = computed(
      () => W2(f2.value) === r.value || (r.value && !isNaN(f2.value) ? Zo("+", f2.value, i.value) > r.value : false)
    );
    function $2(G2, J = 1) {
      var z;
      const K2 = I.parse(((z = m.value) == null ? undefined : z.value) ?? "");
      e.disabled || (isNaN(K2) ? f2.value = s2.value ?? 0 : G2 === "increase" ? f2.value = W2(K2 + (i.value ?? 1) * J) : f2.value = W2(K2 - (i.value ?? 1) * J));
    }
    function h2(G2 = 1) {
      $2("increase", G2);
    }
    function E(G2 = 1) {
      $2("decrease", G2);
    }
    function P(G2) {
      G2 === "min" && s2.value !== undefined ? f2.value = W2(s2.value) : G2 === "max" && r.value !== undefined && (f2.value = W2(r.value));
    }
    const D = Xo(u, d2), I = zc(u, d2), M = computed(() => D.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), V = Xo(u, d2), A2 = computed(() => isNaN(f2.value) ? "" : V.format(f2.value));
    function F(G2) {
      return I.isValidPartialNumber(G2, s2.value, r.value);
    }
    function j(G2) {
      m.value && (m.value.value = G2);
    }
    function W2(G2) {
      let J;
      return i.value === undefined || isNaN(i.value) ? J = jt(G2, s2.value, r.value) : J = zr(G2, s2.value, r.value, i.value), J = I.parse(D.format(J)), J;
    }
    function ee2(G2) {
      const J = I.parse(G2);
      return f2.value = W2(J), G2.length ? j(A2.value) : j(G2);
    }
    return Hc({
      modelValue: f2,
      handleDecrease: E,
      handleIncrease: h2,
      handleMinMaxValue: P,
      inputMode: M,
      inputEl: m,
      onInputElement: (G2) => m.value = G2,
      textValue: A2,
      validate: F,
      applyInputValue: ee2,
      disabled: l2,
      max: r,
      min: s2,
      isDecreaseDisabled: _,
      isIncreaseDisabled: C,
      id: c
    }), (G2, J) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(G2.$attrs, {
        ref_key: "primitiveElement",
        ref: v,
        role: "group",
        as: G2.as,
        "as-child": G2.asChild,
        "data-disabled": unref(l2) ? "" : undefined
      }), {
        default: withCtx(() => [
          renderSlot(G2.$slots, "default", {
            modelValue: unref(f2),
            textValue: A2.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-disabled"]),
      unref(g2) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "true",
        value: unref(f2),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Kc)) : createCommentVNode("", true)
    ], 64));
  }
}), hy = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a22) {
    const t2 = a22, { primitiveElement: e, currentElement: n2 } = Ie(), l2 = Eo();
    function s2(u) {
      u.target === (undefined).activeElement && (Math.abs(u.deltaY) <= Math.abs(u.deltaX) || (u.preventDefault(), u.deltaY > 0 ? l2.handleIncrease() : u.deltaY < 0 && l2.handleDecrease()));
    }
    onMounted(() => {
      l2.onInputElement(n2.value);
    });
    const r = ref(l2.textValue.value);
    watch(() => l2.textValue.value, () => {
      r.value = l2.textValue.value;
    }, { immediate: true, deep: true });
    function i() {
      requestAnimationFrame(() => {
        r.value = l2.textValue.value;
      });
    }
    return (u, d2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      id: unref(l2).id.value,
      ref_key: "primitiveElement",
      ref: e,
      value: r.value,
      role: "spinbutton",
      type: "text",
      tabindex: "0",
      inputmode: unref(l2).inputMode.value,
      disabled: unref(l2).disabled.value ? "" : undefined,
      "data-disabled": unref(l2).disabled.value ? "" : undefined,
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
      "aria-roledescription": "Number field",
      "aria-valuenow": unref(l2).modelValue.value,
      "aria-valuemin": unref(l2).min.value,
      "aria-valuemax": unref(l2).max.value,
      onKeydown: [
        d2[0] || (d2[0] = withKeys(withModifiers((c) => unref(l2).handleIncrease(), ["prevent"]), ["up"])),
        d2[1] || (d2[1] = withKeys(withModifiers((c) => unref(l2).handleDecrease(), ["prevent"]), ["down"])),
        d2[2] || (d2[2] = withKeys(withModifiers((c) => unref(l2).handleIncrease(10), ["prevent"]), ["page-up"])),
        d2[3] || (d2[3] = withKeys(withModifiers((c) => unref(l2).handleDecrease(10), ["prevent"]), ["page-down"])),
        d2[4] || (d2[4] = withKeys(withModifiers((c) => unref(l2).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        d2[5] || (d2[5] = withKeys(withModifiers((c) => unref(l2).handleMinMaxValue("max"), ["prevent"]), ["end"])),
        d2[8] || (d2[8] = withKeys((c) => {
          var f2;
          return unref(l2).applyInputValue((f2 = c.target) == null ? undefined : f2.value);
        }, ["enter"]))
      ],
      onWheel: s2,
      onBeforeinput: d2[6] || (d2[6] = (c) => {
        const f2 = c.target;
        let v = f2.value.slice(0, f2.selectionStart ?? undefined) + (c.data ?? "") + f2.value.slice(f2.selectionEnd ?? undefined);
        unref(l2).validate(v) || c.preventDefault();
      }),
      onInput: d2[7] || (d2[7] = (c) => {
        const f2 = c.target;
        r.value = f2.value;
      }),
      onChange: i,
      onBlur: d2[9] || (d2[9] = (c) => {
        var f2;
        return unref(l2).applyInputValue((f2 = c.target) == null ? undefined : f2.value);
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "value", "inputmode", "disabled", "data-disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax"]));
  }
}), yy = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = Eo(), n2 = computed(() => {
      var u;
      return ((u = e.disabled) == null ? undefined : u.value) || t2.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l2, currentElement: s2 } = Ie(), { isPressed: r, onTrigger: i } = hs({ target: s2, disabled: n2 });
    return i(() => {
      e.handleIncrease();
    }), (u, d2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      ref_key: "primitiveElement",
      ref: l2,
      tabindex: "-1",
      "aria-label": "Increase",
      type: u.as === "button" ? "button" : undefined,
      style: {
        userSelect: unref(r) ? "none" : undefined
      },
      disabled: n2.value ? "" : undefined,
      "data-disabled": n2.value ? "" : undefined,
      "data-pressed": unref(r) ? "true" : undefined,
      onContextmenu: d2[0] || (d2[0] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), gy = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = Eo(), n2 = computed(() => {
      var u;
      return ((u = e.disabled) == null ? undefined : u.value) || t2.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l2, currentElement: s2 } = Ie(), { isPressed: r, onTrigger: i } = hs({ target: s2, disabled: n2 });
    return i(() => {
      e.handleDecrease();
    }), (u, d2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      ref_key: "primitiveElement",
      ref: l2,
      tabindex: "-1",
      "aria-label": "Decrease",
      type: u.as === "button" ? "button" : undefined,
      style: {
        userSelect: unref(r) ? "none" : undefined
      },
      disabled: n2.value ? "" : undefined,
      "data-disabled": n2.value ? "" : undefined,
      "data-pressed": unref(r) ? "true" : undefined,
      onContextmenu: d2[0] || (d2[0] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
});
const [Nt, Xc] = Q("PopoverRoot"), ys = /* @__PURE__ */ defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: undefined },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { modal: l2 } = toRefs(e), s2 = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), r = ref(), i = ref(false);
    return Xc({
      contentId: "",
      modal: l2,
      open: s2,
      onOpenChange: (u) => {
        s2.value = u;
      },
      onOpenToggle: () => {
        s2.value = !s2.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (u, d2) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default", { open: unref(s2) })
      ]),
      _: 3
    }));
  }
}), gs = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = Nt(), { forwardRef: n2, currentElement: l2 } = R();
    return onMounted(() => {
      e.triggerElement.value = l2.value;
    }), (s2, r) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).hasCustomAnchor.value ? unref(O) : unref(kt)), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(n2),
          type: s2.as === "button" ? "button" : undefined,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).contentId,
          "data-state": unref(e).open.value ? "open" : "closed",
          as: s2.as,
          "as-child": t2.asChild,
          onClick: unref(e).onOpenToggle
        }, {
          default: withCtx(() => [
            renderSlot(s2.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), bs = /* @__PURE__ */ defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cs = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = At(e), { forwardRef: s2 } = R(), r = Nt();
    return Gn(), (i, u) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d2) => n2("openAutoFocus", d2)),
      onUnmountAutoFocus: u[6] || (u[6] = (d2) => n2("closeAutoFocus", d2))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d2) => n2("pointerDownOutside", d2)),
          onInteractOutside: u[1] || (u[1] = (d2) => n2("interactOutside", d2)),
          onEscapeKeyDown: u[2] || (u[2] = (d2) => n2("escapeKeyDown", d2)),
          onFocusOutside: u[3] || (u[3] = (d2) => n2("focusOutside", d2)),
          onDismiss: u[4] || (u[4] = (d2) => unref(r).onOpenChange(false))
        }, {
          default: withCtx(() => [
            createVNode(unref(Bt), mergeProps(unref(l2), {
              id: unref(r).contentId,
              ref: unref(s2),
              "data-state": unref(r).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Zc = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = Nt(), s2 = ref(false);
    ha(true);
    const r = xe(e, n2), { forwardRef: i, currentElement: u } = R();
    return ya(u), (d2, c) => (openBlock(), createBlock(Cs, mergeProps(unref(r), {
      ref: unref(i),
      "trap-focus": unref(l2).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = withModifiers(
        (f2) => {
          var v;
          n2("closeAutoFocus", f2), s2.value || (v = unref(l2).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (f2) => {
        n2("pointerDownOutside", f2);
        const v = f2.detail.originalEvent, p2 = v.button === 0 && v.ctrlKey === true, g2 = v.button === 2 || p2;
        s2.value = g2;
      }),
      onFocusOutside: c[2] || (c[2] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(d2.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Jc = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = Nt(), s2 = ref(false), r = ref(false), i = xe(e, n2);
    return (u, d2) => (openBlock(), createBlock(Cs, mergeProps(unref(i), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d2[0] || (d2[0] = (c) => {
        var f2;
        n2("closeAutoFocus", c), c.defaultPrevented || (s2.value || (f2 = unref(l2).triggerElement.value) == null || f2.focus(), c.preventDefault()), s2.value = false, r.value = false;
      }),
      onInteractOutside: d2[1] || (d2[1] = async (c) => {
        var p2;
        n2("interactOutside", c), c.defaultPrevented || (s2.value = true, c.detail.originalEvent.type === "pointerdown" && (r.value = true));
        const f2 = c.target;
        ((p2 = unref(l2).triggerElement.value) == null ? undefined : p2.contains(f2)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ws = /* @__PURE__ */ defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = Nt(), s2 = xe(e, n2), { forwardRef: r } = R();
    return l2.contentId || (l2.contentId = he(undefined, "radix-vue-popover-content")), (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l2).open.value
    }, {
      default: withCtx(() => [
        unref(l2).modal.value ? (openBlock(), createBlock(Zc, mergeProps({ key: 0 }, unref(s2), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Jc, mergeProps({ key: 1 }, unref(s2), { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _s = /* @__PURE__ */ defineComponent({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a22) {
    const t2 = a22;
    return R(), (e, n2) => (openBlock(), createBlock(unref(Xt), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
const [nf, of] = Q("RadioGroupRoot"), Ty = /* @__PURE__ */ defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean, default: false },
    orientation: { default: undefined },
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { forwardRef: l2 } = R(), s2 = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), { disabled: r, loop: i, orientation: u, name: d2, required: c, dir: f2 } = toRefs(e), v = be(f2);
    return of({
      modelValue: s2,
      changeModelValue: (p2) => {
        s2.value = p2;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d2 == null ? undefined : d2.value,
      required: c
    }), (p2, g2) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      orientation: unref(u),
      dir: unref(v),
      loop: unref(i)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(l2),
          role: "radiogroup",
          "data-disabled": unref(r) ? "" : undefined,
          "as-child": p2.asChild,
          as: p2.as,
          required: unref(c),
          "aria-orientation": unref(u),
          "aria-required": unref(c),
          dir: unref(v),
          name: unref(d2)
        }, {
          default: withCtx(() => [
            renderSlot(p2.$slots, "default", { modelValue: unref(s2) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), lf = ["value", "checked", "name", "disabled", "required"], sf = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    checked: { type: Boolean, default: undefined },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a22, { emit: t2 }) {
    const e = a22, l2 = ne(e, "checked", t2, {
      passive: e.checked === undefined
    }), { value: s2 } = toRefs(e), { forwardRef: r, currentElement: i } = R(), u = Qe(i), d2 = computed(() => {
      var f2;
      return e.id && i.value ? ((f2 = (undefined).querySelector(`[for="${e.id}"]`)) == null ? undefined : f2.innerText) ?? e.value : undefined;
    });
    function c(f2) {
      l2.value = true, u.value && f2.stopPropagation();
    }
    return (f2, v) => (openBlock(), createBlock(unref(O), mergeProps(f2.$attrs, {
      id: f2.id,
      ref: unref(r),
      role: "radio",
      type: f2.as === "button" ? "button" : undefined,
      as: f2.as,
      "aria-checked": unref(l2),
      "aria-label": d2.value,
      "as-child": f2.asChild,
      disabled: f2.disabled ? "" : undefined,
      "data-state": unref(l2) ? "checked" : "unchecked",
      "data-disabled": f2.disabled ? "" : undefined,
      value: unref(s2),
      required: f2.required,
      name: f2.name,
      onClick: withModifiers(c, ["stop"])
    }), {
      default: withCtx(() => [
        renderSlot(f2.$slots, "default", { checked: unref(l2) }),
        unref(u) ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "true",
          value: unref(s2),
          checked: !!unref(l2),
          name: f2.name,
          disabled: f2.disabled,
          required: f2.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, lf)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [rf, uf] = Q("RadioGroupItem"), Ry = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, { forwardRef: e, currentElement: n2 } = R(), l2 = nf(), s2 = computed(() => l2.disabled.value || t2.disabled), r = computed(() => l2.required.value || t2.required), i = computed(() => {
      var f2;
      return ((f2 = l2.modelValue) == null ? undefined : f2.value) === t2.value;
    });
    uf({ disabled: s2, checked: i });
    const u = ref(false), d2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    Le("keydown", (f2) => {
      d2.includes(f2.key) && (u.value = true);
    }), Le("keyup", () => {
      u.value = false;
    });
    function c() {
      setTimeout(() => {
        var f2;
        u.value && ((f2 = n2.value) == null || f2.click());
      }, 0);
    }
    return (f2, v) => (openBlock(), createBlock(unref(Ft), {
      checked: i.value,
      disabled: s2.value,
      "as-child": "",
      focusable: !s2.value,
      active: i.value
    }, {
      default: withCtx(() => [
        createVNode(sf, mergeProps({ ...f2.$attrs, ...t2 }, {
          ref: unref(e),
          checked: i.value,
          required: r.value,
          disabled: s2.value,
          "onUpdate:checked": v[0] || (v[0] = (p2) => unref(l2).changeModelValue(f2.value)),
          onKeydown: v[1] || (v[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: c
        }), {
          default: withCtx(() => [
            renderSlot(f2.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
});
const Mf = ["default-value"], Vf = /* @__PURE__ */ defineComponent({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(a22) {
    const t2 = a22, { value: e } = toRefs(t2), n2 = ref();
    return (l2, s2) => (openBlock(), createBlock(unref(Zt), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n2
        }, t2, {
          "onUpdate:modelValue": s2[0] || (s2[0] = (r) => isRef(e) ? e.value = r : null),
          "default-value": unref(e)
        }), [
          renderSlot(l2.$slots, "default")
        ], 16, Mf), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
}), Ff = {
  key: 0,
  value: ""
}, [wt, Bs] = Q("SelectRoot"), [Nf, Lf] = Q("SelectRoot"), Ny = /* @__PURE__ */ defineComponent({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: undefined },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), s2 = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), r = ref(), i = ref(), u = ref({
      x: 0,
      y: 0
    }), d2 = ref(false), { required: c, disabled: f2, dir: v } = toRefs(e), p2 = be(v);
    Bs({
      triggerElement: r,
      onTriggerChange: (C) => {
        r.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: d2,
      onValueElementHasChildrenChange: (C) => {
        d2.value = C;
      },
      contentId: "",
      modelValue: l2,
      onValueChange: (C) => {
        l2.value = C;
      },
      open: s2,
      required: c,
      onOpenChange: (C) => {
        s2.value = C;
      },
      dir: p2,
      triggerPointerDownPosRef: u,
      disabled: f2
    });
    const g2 = Qe(r), m = ref(/* @__PURE__ */ new Set()), _ = computed(() => Array.from(m.value).map((C) => {
      var $2;
      return ($2 = C.props) == null ? undefined : $2.value;
    }).join(";"));
    return Lf({
      onNativeOptionAdd: (C) => {
        m.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        m.value.delete(C);
      }
    }), (C, $2) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default", {
          modelValue: unref(l2),
          open: unref(s2)
        }),
        unref(g2) ? (openBlock(), createBlock(Vf, mergeProps({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: unref(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: unref(f2),
          value: unref(l2),
          onChange: $2[0] || ($2[0] = (h2) => l2.value = h2.target.value)
        }), {
          default: withCtx(() => [
            unref(l2) === undefined ? (openBlock(), createElementBlock("option", Ff)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(m.value), (h2) => (openBlock(), createBlock(resolveDynamicComponent(h2), mergeProps({ ref_for: true }, h2.props, {
              key: h2.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
}), zf = [" ", "Enter", "ArrowUp", "ArrowDown"], Kf = [" ", "Enter"], Ue = 10;
function Is(a22) {
  return a22 === "" || vt(a22);
}
const Ly = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = wt(), n2 = computed(() => {
      var p2;
      return ((p2 = e.disabled) == null ? undefined : p2.value) || t2.disabled;
    }), { forwardRef: l2, currentElement: s2 } = R();
    e.contentId || (e.contentId = he(undefined, "radix-vue-select-content")), onMounted(() => {
      e.triggerElement = s2;
    });
    const { injectCollection: r } = Me(), i = r(), { search: u, handleTypeaheadSearch: d2, resetTypeahead: c } = ga(i);
    function f2() {
      n2.value || (e.onOpenChange(true), c());
    }
    function v(p2) {
      f2(), e.triggerPointerDownPosRef.value = {
        x: Math.round(p2.pageX),
        y: Math.round(p2.pageY)
      };
    }
    return (p2, g2) => (openBlock(), createBlock(unref(kt), { "as-child": "" }, {
      default: withCtx(() => {
        var m, _, C, $2;
        return [
          createVNode(unref(O), {
            ref: unref(l2),
            role: "combobox",
            type: p2.as === "button" ? "button" : undefined,
            "aria-controls": unref(e).contentId,
            "aria-expanded": unref(e).open.value || false,
            "aria-required": (m = unref(e).required) == null ? undefined : m.value,
            "aria-autocomplete": "none",
            disabled: n2.value,
            dir: (_ = unref(e)) == null ? undefined : _.dir.value,
            "data-state": (C = unref(e)) != null && C.open.value ? "open" : "closed",
            "data-disabled": n2.value ? "" : undefined,
            "data-placeholder": unref(Is)(($2 = unref(e).modelValue) == null ? undefined : $2.value) ? "" : undefined,
            "as-child": p2.asChild,
            as: p2.as,
            onClick: g2[0] || (g2[0] = (h2) => {
              var E;
              (E = h2 == null ? undefined : h2.currentTarget) == null || E.focus();
            }),
            onPointerdown: g2[1] || (g2[1] = (h2) => {
              if (h2.pointerType === "touch")
                return h2.preventDefault();
              const E = h2.target;
              E.hasPointerCapture(h2.pointerId) && E.releasePointerCapture(h2.pointerId), h2.button === 0 && h2.ctrlKey === false && (v(h2), h2.preventDefault());
            }),
            onPointerup: g2[2] || (g2[2] = withModifiers(
              (h2) => {
                h2.pointerType === "touch" && v(h2);
              },
              ["prevent"]
            )),
            onKeydown: g2[3] || (g2[3] = (h2) => {
              const E = unref(u) !== "";
              !(h2.ctrlKey || h2.altKey || h2.metaKey) && h2.key.length === 1 && E && h2.key === " " || (unref(d2)(h2.key), unref(zf).includes(h2.key) && (f2(), h2.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(p2.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), zy = /* @__PURE__ */ defineComponent({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$o, Hf] = Q("SelectItemAlignedPosition"), Wf = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { injectCollection: l2 } = Me(), s2 = wt(), r = _t(), i = l2(), u = ref(false), d2 = ref(true), c = ref(), { forwardRef: f2, currentElement: v } = R(), { viewport: p2, selectedItem: g2, selectedItemText: m, focusSelectedItem: _ } = r;
    function C() {
      if (s2.triggerElement.value && s2.valueElement.value && c.value && v.value && (p2 != null && p2.value) && (g2 != null && g2.value) && (m != null && m.value)) {
        const E = s2.triggerElement.value.getBoundingClientRect(), P = v.value.getBoundingClientRect(), D = s2.valueElement.value.getBoundingClientRect(), I = m.value.getBoundingClientRect();
        if (s2.dir.value !== "rtl") {
          const Se = I.left - P.left, ye2 = D.left - Se, de = E.left - ye2, Te = E.width + de, Oe = Math.max(Te, P.width), ze = (undefined).innerWidth - Ue, xt = jt(ye2, Ue, Math.max(Ue, ze - Oe));
          c.value.style.minWidth = `${Te}px`, c.value.style.left = `${xt}px`;
        } else {
          const Se = P.right - I.right, ye2 = (undefined).innerWidth - D.right - Se, de = (undefined).innerWidth - E.right - ye2, Te = E.width + de, Oe = Math.max(Te, P.width), ze = (undefined).innerWidth - Ue, xt = jt(
            ye2,
            Ue,
            Math.max(Ue, ze - Oe)
          );
          c.value.style.minWidth = `${Te}px`, c.value.style.right = `${xt}px`;
        }
        const M = i.value, V = (undefined).innerHeight - Ue * 2, A2 = p2.value.scrollHeight, F = (undefined).getComputedStyle(v.value), j = Number.parseInt(
          F.borderTopWidth,
          10
        ), W2 = Number.parseInt(F.paddingTop, 10), ee2 = Number.parseInt(
          F.borderBottomWidth,
          10
        ), G2 = Number.parseInt(
          F.paddingBottom,
          10
        ), J = j + W2 + A2 + G2 + ee2, K2 = Math.min(
          g2.value.offsetHeight * 5,
          J
        ), z = (undefined).getComputedStyle(p2.value), L = Number.parseInt(z.paddingTop, 10), N = Number.parseInt(
          z.paddingBottom,
          10
        ), Z = E.top + E.height / 2 - Ue, X2 = V - Z, re = g2.value.offsetHeight / 2, Y = g2.value.offsetTop + re, se2 = j + W2 + Y, fe = J - se2;
        if (se2 <= Z) {
          const Se = g2.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const ye2 = v.value.clientHeight - p2.value.offsetTop - p2.value.offsetHeight, de = Math.max(
            X2,
            re + (Se ? N : 0) + ye2 + ee2
          ), Te = se2 + de;
          c.value.style.height = `${Te}px`;
        } else {
          const Se = g2.value === M[0];
          c.value.style.top = "0px";
          const de = Math.max(
            Z,
            j + p2.value.offsetTop + (Se ? L : 0) + re
          ) + fe;
          c.value.style.height = `${de}px`, p2.value.scrollTop = se2 - Z + p2.value.offsetTop;
        }
        c.value.style.margin = `${Ue}px 0`, c.value.style.minHeight = `${K2}px`, c.value.style.maxHeight = `${V}px`, n2("placed"), requestAnimationFrame(() => u.value = true);
      }
    }
    const $2 = ref("");
    onMounted(async () => {
      await nextTick(), C(), v.value && ($2.value = (undefined).getComputedStyle(v.value).zIndex);
    });
    function h2(E) {
      E && d2.value === true && (C(), _ == null || _(), d2.value = false);
    }
    return Hf({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: h2
    }), (E, P) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $2.value
      })
    }, [
      createVNode(unref(O), mergeProps({
        ref: unref(f2),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), jf = /* @__PURE__ */ defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ue },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const e = At(a22);
    return (n2, l2) => (openBlock(), createBlock(unref(Bt), mergeProps(unref(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(n2.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [_t, Uf] = Q("SelectContent"), Gf = /* @__PURE__ */ defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: true },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = wt();
    Gn(), ha(e.bodyLock);
    const { createCollection: s2 } = Me(), r = ref();
    ya(r);
    const i = s2(r), { search: u, handleTypeaheadSearch: d2 } = ga(i), c = ref(), f2 = ref(), v = ref(), p2 = ref(false), g2 = ref(false);
    function m() {
      f2.value && r.value && $n([f2.value, r.value]);
    }
    watch(p2, () => {
      m();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = l2;
    watchEffect((P) => {
      if (!r.value)
        return;
      let D = { x: 0, y: 0 };
      const I = (V) => {
        var A2, F;
        D = {
          x: Math.abs(
            Math.round(V.pageX) - (((A2 = C.value) == null ? undefined : A2.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((F = C.value) == null ? undefined : F.y) ?? 0)
          )
        };
      }, M = (V) => {
        var A2;
        V.pointerType !== "touch" && (D.x <= 10 && D.y <= 10 ? V.preventDefault() : (A2 = r.value) != null && A2.contains(V.target) || _(false), (undefined).removeEventListener("pointermove", I), C.value = null);
      };
      C.value !== null && ((undefined).addEventListener("pointermove", I), (undefined).addEventListener("pointerup", M, {
        capture: true,
        once: true
      })), P(() => {
        (undefined).removeEventListener("pointermove", I), (undefined).removeEventListener("pointerup", M, {
          capture: true
        });
      });
    });
    function $2(P) {
      const D = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !D && P.key.length === 1 && d2(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
        let I = i.value;
        if (["ArrowUp", "End"].includes(P.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
          const M = P.target, V = I.indexOf(M);
          I = I.slice(V + 1);
        }
        setTimeout(() => $n(I)), P.preventDefault();
      }
    }
    const h2 = computed(() => e.position === "popper" ? e : {}), E = At(h2.value);
    return Uf({
      content: r,
      viewport: c,
      onViewportChange: (P) => {
        c.value = P;
      },
      itemRefCallback: (P, D, I) => {
        var A2, F;
        const M = !g2.value && !I;
        (((A2 = l2.modelValue) == null ? undefined : A2.value) !== undefined && ((F = l2.modelValue) == null ? undefined : F.value) === D || M) && (f2.value = P, M && (g2.value = true));
      },
      selectedItem: f2,
      selectedItemText: v,
      onItemLeave: () => {
        var P;
        (P = r.value) == null || P.focus();
      },
      itemTextRefCallback: (P, D, I) => {
        var A2, F;
        const M = !g2.value && !I;
        (((A2 = l2.modelValue) == null ? undefined : A2.value) !== undefined && ((F = l2.modelValue) == null ? undefined : F.value) === D || M) && (v.value = P);
      },
      focusSelectedItem: m,
      position: e.position,
      isPositioned: p2,
      searchRef: u
    }), (P, D) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      onMountAutoFocus: D[6] || (D[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: D[7] || (D[7] = (I) => {
        var M;
        n2("closeAutoFocus", I), !I.defaultPrevented && ((M = unref(l2).triggerElement.value) == null || M.focus({ preventScroll: true }), I.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: D[2] || (D[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: D[3] || (D[3] = (I) => unref(l2).onOpenChange(false)),
          onEscapeKeyDown: D[4] || (D[4] = (I) => n2("escapeKeyDown", I)),
          onPointerDownOutside: D[5] || (D[5] = (I) => n2("pointerDownOutside", I))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(
              P.position === "popper" ? jf : Wf
            ), mergeProps({ ...P.$attrs, ...unref(E) }, {
              id: unref(l2).contentId,
              ref: (I) => {
                r.value = unref($e)(I);
              },
              role: "listbox",
              "data-state": unref(l2).open.value ? "open" : "closed",
              dir: unref(l2).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: D[0] || (D[0] = withModifiers(() => {
              }, ["prevent"])),
              onPlaced: D[1] || (D[1] = (I) => p2.value = true),
              onKeydown: $2
            }), {
              default: withCtx(() => [
                renderSlot(P.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), qf = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a22) {
    return Bs(a22.context), (e, n2) => renderSlot(e.$slots, "default");
  }
}), Yf = { key: 1 }, Ky = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a22, { emit: t2 }) {
    const e = a22, l2 = xe(e, t2), s2 = wt(), r = ref();
    onMounted(() => {
      r.value = new DocumentFragment();
    });
    const i = ref(), u = computed(() => e.forceMount || s2.open.value);
    return (d2, c) => {
      var f2;
      return u.value ? (openBlock(), createBlock(unref(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: true
      }, {
        default: withCtx(() => [
          createVNode(Gf, normalizeProps(guardReactiveProps({ ...unref(l2), ...d2.$attrs })), {
            default: withCtx(() => [
              renderSlot(d2.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((f2 = i.value) != null && f2.present) && r.value ? (openBlock(), createElementBlock("div", Yf, [
        (openBlock(), createBlock(Teleport, { to: r.value }, [
          createVNode(qf, { context: unref(s2) }, {
            default: withCtx(() => [
              renderSlot(d2.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : createCommentVNode("", true);
    };
  }
}), [Ts, Xf] = Q("SelectItem"), jy = /* @__PURE__ */ defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, { disabled: e } = toRefs(t2), n2 = wt(), l2 = _t(Lt), { forwardRef: s2, currentElement: r } = R(), i = computed(() => {
      var m;
      return ((m = n2.modelValue) == null ? undefined : m.value) === t2.value;
    }), u = ref(false), d2 = ref(t2.textValue ?? ""), c = he(undefined, "radix-vue-select-item-text");
    async function f2(m) {
      await nextTick(), !(m != null && m.defaultPrevented) && (e.value || (n2.onValueChange(t2.value), n2.onOpenChange(false)));
    }
    async function v(m) {
      var _;
      await nextTick(), !m.defaultPrevented && (e.value ? (_ = l2.onItemLeave) == null || _.call(l2) : m.currentTarget.focus({ preventScroll: true }));
    }
    async function p2(m) {
      var _;
      await nextTick(), !m.defaultPrevented && m.currentTarget === (undefined).activeElement && ((_ = l2.onItemLeave) == null || _.call(l2));
    }
    async function g2(m) {
      var C;
      await nextTick(), !(m.defaultPrevented || ((C = l2.searchRef) == null ? undefined : C.value) !== "" && m.key === " ") && (Kf.includes(m.key) && f2(), m.key === " " && m.preventDefault());
    }
    if (t2.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      r.value && l2.itemRefCallback(
        r.value,
        t2.value,
        t2.disabled
      );
    }), Xf({
      value: t2.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d2.value = ((d2.value || (m == null ? undefined : m.textContent)) ?? "").trim();
      }
    }), (m, _) => (openBlock(), createBlock(unref(O), {
      ref: unref(s2),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(c),
      "data-highlighted": u.value ? "" : undefined,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || undefined,
      "data-disabled": unref(e) ? "" : undefined,
      tabindex: unref(e) ? undefined : -1,
      as: m.as,
      "as-child": m.asChild,
      onFocus: _[0] || (_[0] = (C) => u.value = true),
      onBlur: _[1] || (_[1] = (C) => u.value = false),
      onPointerup: f2,
      onPointerdown: _[2] || (_[2] = (C) => {
        C.currentTarget.focus({ preventScroll: true });
      }),
      onTouchend: _[3] || (_[3] = withModifiers(() => {
      }, ["prevent", "stop"])),
      onPointermove: v,
      onPointerleave: p2,
      onKeydown: g2
    }, {
      default: withCtx(() => [
        renderSlot(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Uy = /* @__PURE__ */ defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    const t2 = a22, e = Ts();
    return (n2, l2) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(O), mergeProps({
      key: 0,
      "aria-hidden": "true"
    }, t2), {
      default: withCtx(() => [
        renderSlot(n2.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
}), Yy = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    const t2 = a22, e = wt(), n2 = _t(Lt), l2 = Nf(), s2 = Ts(), { forwardRef: r, currentElement: i } = R(), u = computed(() => {
      var d2;
      return h("option", {
        key: s2.value,
        value: s2.value,
        disabled: s2.disabled.value,
        textContent: (d2 = i.value) == null ? undefined : d2.textContent
      });
    });
    return onMounted(() => {
      i.value && (s2.onItemTextChange(i.value), n2.itemTextRefCallback(
        i.value,
        s2.value,
        s2.disabled.value
      ), l2.onNativeOptionAdd(u.value));
    }), onBeforeUnmount(() => {
      l2.onNativeOptionRemove(u.value);
    }), (d2, c) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        id: unref(s2).textId,
        ref: unref(r)
      }, { ...t2, ...d2.$attrs }, { "data-item-text": "" }), {
        default: withCtx(() => [
          renderSlot(d2.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      unref(s2).isSelected.value && unref(e).valueElement.value && !unref(e).valueElementHasChildren.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: unref(e).valueElement.value
      }, [
        renderSlot(d2.$slots, "default")
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 64));
  }
}), Xy = /* @__PURE__ */ defineComponent({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, { nonce: e } = toRefs(t2), n2 = Xa(e), l2 = _t(Lt), s2 = l2.position === "item-aligned" ? $o() : undefined, { forwardRef: r, currentElement: i } = R();
    onMounted(() => {
      l2 == null || l2.onViewportChange(i.value);
    });
    const u = ref(0);
    function d2(c) {
      const f2 = c.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: p2 } = s2 ?? {};
      if (v != null && v.value && (p2 != null && p2.value)) {
        const g2 = Math.abs(u.value - f2.scrollTop);
        if (g2 > 0) {
          const m = (undefined).innerHeight - Ue * 2, _ = Number.parseFloat(
            p2.value.style.minHeight
          ), C = Number.parseFloat(p2.value.style.height), $2 = Math.max(_, C);
          if ($2 < m) {
            const h2 = $2 + g2, E = Math.min(m, h2), P = h2 - E;
            p2.value.style.height = `${E}px`, p2.value.style.bottom === "0px" && (f2.scrollTop = P > 0 ? P : 0, p2.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f2.scrollTop;
    }
    return (c, f2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        ref: unref(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t2 }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: d2
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      createVNode(unref(O), {
        as: "style",
        nonce: unref(n2)
      }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Qy = /* @__PURE__ */ defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a22) {
    const { forwardRef: t2, currentElement: e } = R(), n2 = wt(), l2 = useSlots();
    return onBeforeMount(() => {
      var r;
      const s2 = !!Ua((r = l2 == null ? undefined : l2.default) == null ? undefined : r.call(l2)).length;
      n2.onValueElementHasChildrenChange(s2);
    }), onMounted(() => {
      n2.valueElement = e;
    }), (s2, r) => (openBlock(), createBlock(unref(O), {
      ref: unref(t2),
      as: s2.as,
      "as-child": s2.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          unref(Is)((i = unref(n2).modelValue) == null ? undefined : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(s2.placeholder), 1)
          ], 64)) : renderSlot(s2.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Cp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Cp() === "coarse";
const [fn, Kp] = Q("TabsRoot"), yg = /* @__PURE__ */ defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { orientation: l2, dir: s2 } = toRefs(e), r = be(s2);
    R();
    const i = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), u = ref();
    return Kp({
      modelValue: i,
      changeModelValue: (d2) => {
        i.value = d2;
      },
      orientation: l2,
      dir: r,
      activationMode: e.activationMode,
      baseId: he(undefined, "radix-vue-tabs"),
      tabsList: u
    }), (d2, c) => (openBlock(), createBlock(unref(O), {
      dir: unref(r),
      "data-orientation": unref(l2),
      "as-child": d2.asChild,
      as: d2.as
    }, {
      default: withCtx(() => [
        renderSlot(d2.$slots, "default", { modelValue: unref(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), gg = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, { loop: e } = toRefs(t2), { forwardRef: n2, currentElement: l2 } = R(), s2 = fn();
    return s2.tabsList = l2, (r, i) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      orientation: unref(s2).orientation.value,
      dir: unref(s2).dir.value,
      loop: unref(e)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(n2),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": unref(s2).orientation.value
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function lr(a22, t2) {
  return `${a22}-trigger-${t2}`;
}
function sr(a22, t2) {
  return `${a22}-content-${t2}`;
}
const bg = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22, { forwardRef: e } = R(), n2 = fn(), l2 = computed(() => lr(n2.baseId, t2.value)), s2 = computed(() => sr(n2.baseId, t2.value)), r = computed(() => t2.value === n2.modelValue.value), i = ref(r.value);
    return onMounted(() => {
      requestAnimationFrame(() => {
        i.value = false;
      });
    }), (u, d2) => (openBlock(), createBlock(unref(Pe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: withCtx(({ present: c }) => [
        createVNode(unref(O), {
          id: s2.value,
          ref: unref(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": unref(n2).orientation.value,
          "aria-labelledby": l2.value,
          hidden: !c.value,
          tabindex: "0",
          style: normalizeStyle({
            animationDuration: i.value ? "0s" : undefined
          })
        }, {
          default: withCtx(() => [
            u.forceMount || r.value ? renderSlot(u.$slots, "default", { key: 0 }) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Cg = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, { forwardRef: e } = R(), n2 = fn(), l2 = computed(() => lr(n2.baseId, t2.value)), s2 = computed(() => sr(n2.baseId, t2.value)), r = computed(() => t2.value === n2.modelValue.value);
    return (i, u) => (openBlock(), createBlock(unref(Ft), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: l2.value,
          ref: unref(e),
          role: "tab",
          type: i.as === "button" ? "button" : undefined,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": s2.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : undefined,
          "data-orientation": unref(n2).orientation.value,
          onMousedown: u[0] || (u[0] = withModifiers((d2) => {
            !i.disabled && d2.ctrlKey === false ? unref(n2).changeModelValue(i.value) : d2.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = withKeys((d2) => unref(n2).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d2 = unref(n2).activationMode !== "manual";
            !r.value && !i.disabled && d2 && unref(n2).changeModelValue(i.value);
          })
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [vn, jp] = Q("ToastProvider"), $g = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(a22) {
    const t2 = a22, { label: e, duration: n2, swipeDirection: l2, swipeThreshold: s2 } = toRefs(t2), r = ref(), i = ref(0), u = ref(false), d2 = ref(false);
    if (t2.label && typeof t2.label == "string" && !t2.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return jp({
      label: e,
      duration: n2,
      swipeDirection: l2,
      swipeThreshold: s2,
      toastCount: i,
      viewport: r,
      onViewportChange(c) {
        r.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d2
    }), (c, f2) => renderSlot(c.$slots, "default");
  }
}), Up = "toast.swipeStart", Gp = "toast.swipeMove", qp = "toast.swipeCancel", Yp = "toast.swipeEnd", On = "toast.viewportPause", kn = "toast.viewportResume";
function Aa(a22, t2, e) {
  const n2 = e.originalEvent.currentTarget, l2 = new CustomEvent(a22, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t2 && n2.addEventListener(a22, t2, { once: true }), n2.dispatchEvent(l2);
}
function ol(a22, t2, e = 0) {
  const n2 = Math.abs(a22.x), l2 = Math.abs(a22.y), s2 = n2 > l2;
  return t2 === "left" || t2 === "right" ? s2 && n2 > e : !s2 && l2 > e;
}
function Xp(a22) {
  return a22.nodeType === a22.ELEMENT_NODE;
}
function ir(a22) {
  const t2 = [];
  return Array.from(a22.childNodes).forEach((n2) => {
    if (n2.nodeType === n2.TEXT_NODE && n2.textContent && t2.push(n2.textContent), Xp(n2)) {
      const l2 = n2.ariaHidden || n2.hidden || n2.style.display === "none", s2 = n2.dataset.radixToastAnnounceExclude === "";
      if (!l2)
        if (s2) {
          const r = n2.dataset.radixToastAnnounceAlt;
          r && t2.push(r);
        } else
          t2.push(...ir(n2));
    }
  }), t2;
}
const Zp = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounce",
  setup(a22) {
    const t2 = vn(), e = mi(1e3), n2 = ref(false);
    return Tl(() => {
      n2.value = true;
    }), (l2, s2) => unref(e) || n2.value ? (openBlock(), createBlock(unref(Zt), { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(unref(t2).label.value) + " ", 1),
        renderSlot(l2.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
}), [Jp, Qp] = Q("ToastRoot"), ev = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: false },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { forwardRef: l2, currentElement: s2 } = R(), r = vn(), i = ref(null), u = ref(null), d2 = computed(
      () => typeof e.duration == "number" ? e.duration : r.duration.value
    ), c = ref(0), f2 = ref(d2.value), v = ref(0), p2 = ref(d2.value), g2 = Tl(() => {
      const $2 = (/* @__PURE__ */ new Date()).getTime() - c.value;
      p2.value = Math.max(f2.value - $2, 0);
    }, { fpsLimit: 60 });
    function m($2) {
    }
    function _() {
      var h2, E;
      ((h2 = s2.value) == null ? undefined : h2.contains((undefined).activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = false, n2("close");
    }
    const C = computed(() => s2.value ? ir(s2.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const $2 = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($2);
    }
    return watchEffect(($2) => {
      const h2 = r.viewport.value;
      if (h2) {
        const E = () => {
          m(f2.value), g2.resume(), n2("resume");
        }, P = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f2.value = f2.value - D, (undefined).clearTimeout(v.value), g2.pause(), n2("pause");
        };
        return h2.addEventListener(On, P), h2.addEventListener(kn, E), () => {
          h2.removeEventListener(On, P), h2.removeEventListener(kn, E);
        };
      }
    }), watch(() => [e.open, d2.value], () => {
      f2.value = d2.value, e.open && !r.isClosePausedRef.value && m(d2.value);
    }, { immediate: true }), jn("Escape", ($2) => {
      n2("escapeKeyDown", $2), $2.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = true, _());
    }), onMounted(() => {
      r.onToastAdd();
    }), onUnmounted(() => {
      r.onToastRemove();
    }), Qp({ onClose: _ }), ($2, h2) => (openBlock(), createElementBlock(Fragment, null, [
      C.value ? (openBlock(), createBlock(Zp, {
        key: 0,
        role: "status",
        "aria-live": $2.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("", true),
      unref(r).viewport.value ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: unref(r).viewport.value
      }, [
        createVNode(unref(O), mergeProps({
          ref: unref(l2),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, $2.$attrs, {
          as: $2.as,
          "as-child": $2.asChild,
          "data-state": $2.open ? "open" : "closed",
          "data-swipe-direction": unref(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: h2[0] || (h2[0] = withModifiers((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: h2[1] || (h2[1] = (E) => {
            if (!i.value) return;
            const P = E.clientX - i.value.x, D = E.clientY - i.value.y, I = !!u.value, M = ["left", "right"].includes(unref(r).swipeDirection.value), V = ["left", "up"].includes(unref(r).swipeDirection.value) ? Math.min : Math.max, A2 = M ? V(0, P) : 0, F = M ? 0 : V(0, D), j = E.pointerType === "touch" ? 10 : 2, W2 = { x: A2, y: F }, ee2 = { originalEvent: E, delta: W2 };
            I ? (u.value = W2, unref(Aa)(unref(Gp), (G2) => n2("swipeMove", G2), ee2)) : unref(ol)(W2, unref(r).swipeDirection.value, j) ? (u.value = W2, unref(Aa)(unref(Up), (G2) => n2("swipeStart", G2), ee2), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > j || Math.abs(D) > j) && (i.value = null);
          }),
          onPointerup: h2[2] || (h2[2] = (E) => {
            const P = u.value, D = E.target;
            if (D.hasPointerCapture(E.pointerId) && D.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const I = E.currentTarget, M = { originalEvent: E, delta: P };
              unref(ol)(P, unref(r).swipeDirection.value, unref(r).swipeThreshold.value) ? unref(Aa)(unref(Yp), (V) => n2("swipeEnd", V), M) : unref(Aa)(unref(qp), (V) => n2("swipeCancel", V), M), I == null || I.addEventListener("click", (V) => V.preventDefault(), {
                once: true
              });
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot($2.$slots, "default", {
              remaining: p2.value,
              duration: d2.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 64));
  }
}), Bg = /* @__PURE__ */ defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: true },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: undefined },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, { forwardRef: l2 } = R(), s2 = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    });
    return (r, i) => (openBlock(), createBlock(unref(Pe), {
      present: r.forceMount || unref(s2)
    }, {
      default: withCtx(() => [
        createVNode(ev, mergeProps({
          ref: unref(l2),
          open: unref(s2),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (u) => s2.value = false),
          onPause: i[1] || (i[1] = (u) => n2("pause")),
          onResume: i[2] || (i[2] = (u) => n2("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n2("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n2("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d2, y: c } = u.detail.delta, f2 = u.currentTarget;
            f2.setAttribute("data-swipe", "move"), f2.style.setProperty("--radix-toast-swipe-move-x", `${d2}px`), f2.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d2 = u.currentTarget;
            d2.setAttribute("data-swipe", "cancel"), d2.style.removeProperty("--radix-toast-swipe-move-x"), d2.style.removeProperty("--radix-toast-swipe-move-y"), d2.style.removeProperty("--radix-toast-swipe-end-x"), d2.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d2, y: c } = u.detail.delta, f2 = u.currentTarget;
            f2.setAttribute("data-swipe", "end"), f2.style.removeProperty("--radix-toast-swipe-move-x"), f2.style.removeProperty("--radix-toast-swipe-move-y"), f2.style.setProperty("--radix-toast-swipe-end-x", `${d2}px`), f2.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s2.value = false;
          })
        }), {
          default: withCtx(({ remaining: u, duration: d2 }) => [
            renderSlot(r.$slots, "default", {
              remaining: u,
              duration: d2,
              open: unref(s2)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ur = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    return (t2, e) => (openBlock(), createBlock(unref(O), {
      as: t2.as,
      "as-child": t2.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t2.altText || undefined
    }, {
      default: withCtx(() => [
        renderSlot(t2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), tv = /* @__PURE__ */ defineComponent({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = Jp(), { forwardRef: n2 } = R();
    return (l2, s2) => (openBlock(), createBlock(ur, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(t2, {
          ref: unref(n2),
          type: l2.as === "button" ? "button" : undefined,
          onClick: s2[0] || (s2[0] = (r) => unref(e).onClose())
        }), {
          default: withCtx(() => [
            renderSlot(l2.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), Tg = /* @__PURE__ */ defineComponent({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    if (!a22.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = R();
    return (n2, l2) => n2.altText ? (openBlock(), createBlock(ur, {
      key: 0,
      "alt-text": n2.altText,
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(tv, {
          ref: unref(e),
          as: n2.as,
          "as-child": n2.asChild
        }, {
          default: withCtx(() => [
            renderSlot(n2.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : createCommentVNode("", true);
  }
}), ll = /* @__PURE__ */ defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a22, { emit: t2 }) {
    const e = t2, n2 = vn();
    return (l2, s2) => (openBlock(), createBlock(unref(Zt), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s2[0] || (s2[0] = (r) => {
        var d2;
        const i = r.relatedTarget;
        !((d2 = unref(n2).viewport.value) != null && d2.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: withCtx(() => [
        renderSlot(l2.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Rg = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a22) {
    const t2 = a22, { hotkey: e, label: n2 } = toRefs(t2), { forwardRef: l2, currentElement: s2 } = R(), { createCollection: r } = Me(), i = r(s2), u = vn(), d2 = computed(() => u.toastCount.value > 0), c = ref(), f2 = ref(), v = computed(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    jn(e.value, () => {
      s2.value.focus();
    }), onMounted(() => {
      u.onViewportChange(s2.value);
    }), watchEffect((g2) => {
      const m = s2.value;
      if (d2.value && m) {
        const _ = () => {
          if (!u.isClosePausedRef.value) {
            const P = new CustomEvent(On);
            m.dispatchEvent(P), u.isClosePausedRef.value = true;
          }
        }, C = () => {
          if (u.isClosePausedRef.value) {
            const P = new CustomEvent(kn);
            m.dispatchEvent(P), u.isClosePausedRef.value = false;
          }
        }, $2 = (P) => {
          !m.contains(P.relatedTarget) && C();
        }, h2 = () => {
          m.contains((undefined).activeElement) || C();
        }, E = (P) => {
          var M, V, A2;
          const D = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !D) {
            const F = (undefined).activeElement, j = P.shiftKey;
            if (P.target === m && j) {
              (M = c.value) == null || M.focus();
              return;
            }
            const G2 = p2({ tabbingDirection: j ? "backwards" : "forwards" }), J = G2.findIndex((K2) => K2 === F);
            Oa(G2.slice(J + 1)) ? P.preventDefault() : j ? (V = c.value) == null || V.focus() : (A2 = f2.value) == null || A2.focus();
          }
        };
        m.addEventListener("focusin", _), m.addEventListener("focusout", $2), m.addEventListener("pointermove", _), m.addEventListener("pointerleave", h2), m.addEventListener("keydown", E), (undefined).addEventListener("blur", _), (undefined).addEventListener("focus", C), g2(() => {
          m.removeEventListener("focusin", _), m.removeEventListener("focusout", $2), m.removeEventListener("pointermove", _), m.removeEventListener("pointerleave", h2), m.removeEventListener("keydown", E), (undefined).removeEventListener("blur", _), (undefined).removeEventListener("focus", C);
        });
      }
    });
    function p2({ tabbingDirection: g2 }) {
      const _ = i.value.map((C) => {
        const $2 = [C, ...Jn(C)];
        return g2 === "forwards" ? $2 : $2.reverse();
      });
      return (g2 === "forwards" ? _.reverse() : _).flat();
    }
    return (g2, m) => (openBlock(), createBlock(unref(ou), {
      role: "region",
      "aria-label": typeof unref(n2) == "string" ? unref(n2).replace("{hotkey}", v.value) : unref(n2)(v.value),
      tabindex: "-1",
      style: normalizeStyle({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d2.value ? undefined : "none"
      })
    }, {
      default: withCtx(() => [
        d2.value ? (openBlock(), createBlock(ll, {
          key: 0,
          ref: (_) => {
            c.value = unref($e)(_);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const _ = p2({
              tabbingDirection: "forwards"
            });
            unref(Oa)(_);
          })
        }, null, 512)) : createCommentVNode("", true),
        createVNode(unref(O), mergeProps({
          ref: unref(l2),
          tabindex: "-1",
          as: g2.as,
          "as-child": g2.asChild
        }, g2.$attrs), {
          default: withCtx(() => [
            renderSlot(g2.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d2.value ? (openBlock(), createBlock(ll, {
          key: 1,
          ref: (_) => {
            f2.value = unref($e)(_);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const _ = p2({
              tabbingDirection: "backwards"
            });
            unref(Oa)(_);
          })
        }, null, 512)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), Ag = /* @__PURE__ */ defineComponent({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22;
    return R(), (e, n2) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Og = /* @__PURE__ */ defineComponent({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a22) {
    const t2 = a22;
    return R(), (e, n2) => (openBlock(), createBlock(unref(O), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cr = "tooltip.open", [Oo, uv] = Q("TooltipProvider"), Lg = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: false },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: false }
  },
  setup(a22) {
    const t2 = a22, { delayDuration: e, skipDelayDuration: n2, disableHoverableContent: l2, disableClosingTrigger: s2, ignoreNonKeyboardFocus: r, disabled: i } = toRefs(t2);
    R();
    const u = ref(true), d2 = ref(false), { start: c, stop: f2 } = Wn(() => {
      u.value = true;
    }, n2, { immediate: false });
    return uv({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        f2(), u.value = false;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d2,
      disableHoverableContent: l2,
      disableClosingTrigger: s2,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (v, p2) => renderSlot(v.$slots, "default");
  }
}), [mn, dv] = Q("TooltipRoot"), zg = /* @__PURE__ */ defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: undefined },
    delayDuration: { default: undefined },
    disableHoverableContent: { type: Boolean, default: undefined },
    disableClosingTrigger: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: undefined },
    ignoreNonKeyboardFocus: { type: Boolean, default: undefined }
  },
  emits: ["update:open"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2;
    R();
    const l2 = Oo(), s2 = computed(() => e.disableHoverableContent ?? l2.disableHoverableContent.value), r = computed(() => e.disableClosingTrigger ?? l2.disableClosingTrigger.value), i = computed(() => e.disabled ?? l2.disabled.value), u = computed(() => e.delayDuration ?? l2.delayDuration.value), d2 = computed(() => e.ignoreNonKeyboardFocus ?? l2.ignoreNonKeyboardFocus.value), c = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    });
    watch(c, (h2) => {
      l2.onClose && (h2 ? (l2.onOpen(), (undefined).dispatchEvent(new CustomEvent(cr))) : l2.onClose());
    });
    const f2 = ref(false), v = ref(), p2 = computed(() => c.value ? f2.value ? "delayed-open" : "instant-open" : "closed"), { start: g2, stop: m } = Wn(() => {
      f2.value = true, c.value = true;
    }, u, { immediate: false });
    function _() {
      m(), f2.value = false, c.value = true;
    }
    function C() {
      m(), c.value = false;
    }
    function $2() {
      g2();
    }
    return dv({
      contentId: "",
      open: c,
      stateAttribute: p2,
      trigger: v,
      onTriggerChange(h2) {
        v.value = h2;
      },
      onTriggerEnter() {
        l2.isOpenDelayed.value ? $2() : _();
      },
      onTriggerLeave() {
        s2.value ? C() : m();
      },
      onOpen: _,
      onClose: C,
      disableHoverableContent: s2,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d2
    }), (h2, E) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default", { open: unref(c) })
      ]),
      _: 3
    }));
  }
}), Kg = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a22) {
    const t2 = a22, e = mn(), n2 = Oo();
    e.contentId || (e.contentId = he(undefined, "radix-vue-tooltip-content"));
    const { forwardRef: l2, currentElement: s2 } = R(), r = ref(false), i = ref(false), u = computed(() => e.disabled.value ? {} : {
      click: m,
      focus: p2,
      pointermove: f2,
      pointerleave: v,
      pointerdown: c,
      blur: g2
    });
    onMounted(() => {
      e.onTriggerChange(s2.value);
    });
    function d2() {
      setTimeout(() => {
        r.value = false;
      }, 1);
    }
    function c() {
      r.value = true, (undefined).addEventListener("pointerup", d2, { once: true });
    }
    function f2(_) {
      _.pointerType !== "touch" && !i.value && !n2.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = true);
    }
    function v() {
      e.onTriggerLeave(), i.value = false;
    }
    function p2(_) {
      var C, $2;
      r.value || e.ignoreNonKeyboardFocus.value && !(($2 = (C = _.target).matches) != null && $2.call(C, ":focus-visible")) || e.onOpen();
    }
    function g2() {
      e.onClose();
    }
    function m() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (_, C) => (openBlock(), createBlock(unref(kt), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(l2),
          "aria-describedby": unref(e).open.value ? unref(e).contentId : undefined,
          "data-state": unref(e).stateAttribute.value,
          as: _.as,
          "as-child": t2.asChild,
          "data-grace-area-trigger": ""
        }, toHandlers(u.value)), {
          default: withCtx(() => [
            renderSlot(_.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), fr = /* @__PURE__ */ defineComponent({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = mn(), { forwardRef: s2 } = R(), r = useSlots(), i = computed(() => {
      var c;
      return (c = r.default) == null ? undefined : c.call(r);
    }), u = computed(() => {
      var v;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function f2(p2) {
        typeof p2.children == "string" && p2.type !== Comment ? c += p2.children : Array.isArray(p2.children) && p2.children.forEach((g2) => f2(g2));
      }
      return (v = i.value) == null || v.forEach((p2) => f2(p2)), c;
    }), d2 = computed(() => {
      const { ariaLabel: c, ...f2 } = e;
      return f2;
    });
    return onMounted(() => {
      Le(undefined, "scroll", (c) => {
        const f2 = c.target;
        f2 != null && f2.contains(l2.trigger.value) && l2.onClose();
      }), Le(undefined, cr, l2.onClose);
    }), (c, f2) => (openBlock(), createBlock(unref(gt), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: f2[0] || (f2[0] = (v) => n2("escapeKeyDown", v)),
      onPointerDownOutside: f2[1] || (f2[1] = (v) => {
        var p2;
        unref(l2).disableClosingTrigger.value && ((p2 = unref(l2).trigger.value) != null && p2.contains(v.target)) && v.preventDefault(), n2("pointerDownOutside", v);
      }),
      onFocusOutside: f2[2] || (f2[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: f2[3] || (f2[3] = (v) => unref(l2).onClose())
    }, {
      default: withCtx(() => [
        createVNode(unref(Bt), mergeProps({
          ref: unref(s2),
          "data-state": unref(l2).stateAttribute.value
        }, { ...c.$attrs, ...d2.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default"),
            createVNode(unref(Zt), {
              id: unref(l2).contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), cv = /* @__PURE__ */ defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(a22) {
    const e = At(a22), { forwardRef: n2, currentElement: l2 } = R(), { trigger: s2, onClose: r } = mn(), i = Oo(), { isPointerInTransit: u, onPointerExit: d2 } = kl(s2, l2);
    return i.isPointerInTransitRef = u, d2(() => {
      r();
    }), (c, f2) => (openBlock(), createBlock(fr, mergeProps({ ref: unref(n2) }, unref(e)), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hg = /* @__PURE__ */ defineComponent({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a22, { emit: t2 }) {
    const e = a22, n2 = t2, l2 = mn(), s2 = xe(e, n2), { forwardRef: r } = R();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l2).open.value
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(unref(l2).disableHoverableContent.value ? fr : cv), mergeProps({ ref: unref(r) }, unref(s2)), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Wg = /* @__PURE__ */ defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a22) {
    const t2 = a22;
    return R(), (e, n2) => (openBlock(), createBlock(unref(Xt), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jg = /* @__PURE__ */ defineComponent({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a22) {
    const t2 = a22;
    return (e, n2) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "button",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    hide_loading_text: { type: Boolean, default: false }
  },
  setup(__props) {
    const buttonVariants = cva(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      {
        variants: {
          variant: {
            primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90 bg-gradient-to-l from-sp-purple-200 to-sp-purple hover:to-sp-purple-200",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-[#38373A] shadow-sm hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
          },
          size: {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4",
            lg: "h-12 px-8",
            icon: "h-9 w-9"
          }
        },
        defaultVariants: {
          variant: "primary",
          size: "md"
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: unref(buttonVariants)({ variant: _ctx.variant, size: _ctx.size }),
        disabled: _ctx.loading || _ctx.disabled
      }, _attrs))}>`);
      if (_ctx.loading) {
        ssrRenderSlot(_ctx.$slots, "loader", {}, () => {
          _push(`<div class="flex gap-x-2 items-center">`);
          _push(ssrRenderComponent(unref(Loader), { class: "size-4 animate-spin" }, null, _parent));
          if (_ctx.size != "icon" && !_ctx.hide_loading_text) {
            _push(`<span>Please wait...</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }, _push, _parent);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const getInitials = (...name) => {
  const [firstname, lastname] = (name == null ? undefined : name.length) > 1 ? name : name[0].split(" ");
  return `${firstname ? firstname.at(0) : ""}${lastname ? lastname.at(0) : firstname ? firstname.at(1) : ""}`;
};
const decodeBase64 = (data, fallback = "") => {
  try {
    if (!data) return fallback;
    return atob(data);
  } catch {
    return fallback ?? null;
  }
};
const formatMoney = (_number) => {
  const number = Number(_number);
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 0
  });
};
const timeDifference = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  let diffInSeconds = Math.floor((end - start) / 1e3);
  const hours = Math.floor(diffInSeconds / 3600);
  diffInSeconds %= 3600;
  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;
  return {
    hours,
    minutes,
    seconds
  };
};
const readableTimeDifference = (startDate, endDate) => {
  const { hours, minutes, seconds } = timeDifference(startDate, endDate);
  const total_hours = hours ? `${hours} hours ` : "";
  const total_minutes = minutes ? `${minutes} min ` : "";
  const total_seconds = seconds ? `${seconds} sec` : "";
  return `${total_hours}${total_minutes}${total_seconds}`;
};
const formattedTimeDifference = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  let diffInSeconds = Math.floor((end - start) / 1e3);
  const hours = Math.floor(diffInSeconds / 3600);
  diffInSeconds %= 3600;
  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};
const getHexColor = (letter) => {
  const colorGroups = {
    group1: "#FF99F1",
    // A-I
    group2: "#FFEE99",
    // J-R
    group3: "#A799FF"
    // S-Z
  };
  const upperLetter = letter.toUpperCase();
  if ("ABCDEFGHI".includes(upperLetter)) {
    return colorGroups.group1;
  }
  if ("JKLMNOPQR".includes(upperLetter)) {
    return colorGroups.group2;
  }
  if ("STUVWXYZ".includes(upperLetter)) {
    return colorGroups.group3;
  }
  return colorGroups.group1;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "toast",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean, default: false },
    updateOpen: {},
    title: {},
    description: { default: "" },
    action: { default: "" },
    onAction: {},
    variant: { default: "normal" },
    duration: { default: 5e3 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ToastProvider = $g;
      const _component_ToastRoot = Bg;
      const _component_ToastClose = tv;
      const _component_ToastTitle = Ag;
      const _component_ToastDescription = Og;
      const _component_ToastAction = Tg;
      const _component_UiButton = _sfc_main$4;
      const _component_ToastViewport = Rg;
      _push(ssrRenderComponent(_component_ToastProvider, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ToastRoot, {
              open: _ctx.open,
              "onUpdate:open": _ctx.updateOpen,
              duration: _ctx.duration,
              class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                _ctx.description ? `[grid-template-areas:_'title_action'_'description_action']` : `[grid-template-areas:_'title_action'_'title_action']`,
                _ctx.variant === "warning" ? `bg-destructive` : `bg-primary`,
                `rounded-md relative border border-input gap-1.5 p-[15px] grid grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`
              )
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ToastClose, { class: "absolute right-2 top-2 text-white/80" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X$1), { class: "size-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(X$1), { class: "size-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ToastTitle, { class: "[grid-area:_title] font-medium text-foreground text-[17px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (_ctx.description) {
                    _push3(ssrRenderComponent(_component_ToastDescription, { "as-child": "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="[grid-area:_description] m-0 text-foreground text-[16px] leading-[1.3]"${_scopeId3}>${ssrInterpolate(_ctx.description)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "[grid-area:_description] m-0 text-foreground text-[16px] leading-[1.3]" }, toDisplayString(_ctx.description), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.action) {
                    _push3(ssrRenderComponent(_component_ToastAction, {
                      class: "[grid-area:_action]",
                      "as-child": "",
                      "alt-text": _ctx.action
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiButton, {
                            onClick: ($event) => {
                              var _a3;
                              return (_a3 = _ctx.onAction) == null ? undefined : _a3.call(_ctx);
                            },
                            variant: "secondary"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.action)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.action), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiButton, {
                              onClick: ($event) => {
                                var _a3;
                                return (_a3 = _ctx.onAction) == null ? undefined : _a3.call(_ctx);
                              },
                              variant: "secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.action), 1)
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_ToastClose, { class: "absolute right-2 top-2 text-white/80" }, {
                      default: withCtx(() => [
                        createVNode(unref(X$1), { class: "size-4" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToastTitle, { class: "[grid-area:_title] font-medium text-foreground text-[17px]" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ]),
                      _: 1
                    }),
                    _ctx.description ? (openBlock(), createBlock(_component_ToastDescription, {
                      key: 0,
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "[grid-area:_description] m-0 text-foreground text-[16px] leading-[1.3]" }, toDisplayString(_ctx.description), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _ctx.action ? (openBlock(), createBlock(_component_ToastAction, {
                      key: 1,
                      class: "[grid-area:_action]",
                      "as-child": "",
                      "alt-text": _ctx.action
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          onClick: ($event) => {
                            var _a3;
                            return (_a3 = _ctx.onAction) == null ? undefined : _a3.call(_ctx);
                          },
                          variant: "secondary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.action), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["alt-text"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ToastViewport, { class: "[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[100] outline-none" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ToastRoot, {
                open: _ctx.open,
                "onUpdate:open": _ctx.updateOpen,
                duration: _ctx.duration,
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(
                  _ctx.description ? `[grid-template-areas:_'title_action'_'description_action']` : `[grid-template-areas:_'title_action'_'title_action']`,
                  _ctx.variant === "warning" ? `bg-destructive` : `bg-primary`,
                  `rounded-md relative border border-input gap-1.5 p-[15px] grid grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`
                )
              }, {
                default: withCtx(() => [
                  createVNode(_component_ToastClose, { class: "absolute right-2 top-2 text-white/80" }, {
                    default: withCtx(() => [
                      createVNode(unref(X$1), { class: "size-4" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ToastTitle, { class: "[grid-area:_title] font-medium text-foreground text-[17px]" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  }),
                  _ctx.description ? (openBlock(), createBlock(_component_ToastDescription, {
                    key: 0,
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "[grid-area:_description] m-0 text-foreground text-[16px] leading-[1.3]" }, toDisplayString(_ctx.description), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  _ctx.action ? (openBlock(), createBlock(_component_ToastAction, {
                    key: 1,
                    class: "[grid-area:_action]",
                    "as-child": "",
                    "alt-text": _ctx.action
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        onClick: ($event) => {
                          var _a3;
                          return (_a3 = _ctx.onAction) == null ? undefined : _a3.call(_ctx);
                        },
                        variant: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.action), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["alt-text"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open", "duration", "class"]),
              createVNode(_component_ToastViewport, { class: "[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[100] outline-none" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/toast.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const useToastStore = /* @__PURE__ */ defineStore("Toast-Store", () => {
  const open = ref(false);
  const toast_title = ref("");
  const toast_description = ref("");
  const toast_duration = ref(5e3);
  const toast_action = ref("");
  const toastOnAction = ref(() => {
  });
  const toast_variant = ref("normal");
  const openToast = ({
    title,
    description = "",
    duration = 5e3,
    variant = "normal",
    action = "",
    onAction = () => {
    }
  }) => {
    toast_title.value = title;
    toast_description.value = description;
    toast_variant.value = variant;
    toast_duration.value = duration;
    toast_action.value = action;
    toastOnAction.value = onAction;
    open.value = true;
  };
  const resetToast = () => {
    toast_title.value = "";
    toast_description.value = "";
    toast_action.value = "";
    toast_duration.value = 5e3;
    toastOnAction.value = () => {
    };
  };
  const closeToast = () => {
    open.value = false;
    resetToast();
  };
  const toggleToast = (state) => {
    open.value = state;
  };
  return {
    open,
    toast_title,
    toast_description,
    toast_variant,
    toast_action,
    toastOnAction: toastOnAction.value,
    openToast,
    closeToast,
    toggleToast
  };
});
const showToast = (action) => {
  const { openToast } = useToastStore();
  openToast(action);
};
const key = Symbol();
const provideNotification = () => {
  const {
    $repo: { event }
  } = useNuxtApp();
  const clearing = ref(false);
  const updating = ref({});
  const {
    data,
    status,
    refresh: refreshNotifications
  } = useAsyncData("ALL-NOTIFICATIONS", () => {
    return event.fetchAllNotifications();
  });
  const notifications = computed(() => {
    var _a3;
    return ((_a3 = data.value) == null ? undefined : _a3.data) ?? [];
  });
  const loading = computed(() => status.value === "pending");
  const markNotificationAsRead = async (id2) => {
    var _a3;
    try {
      Object.assign(updating.value, { [id2]: true });
      await event.markNotificationAsRead(id2);
      Object.assign(updating.value, { [id2]: false });
      refreshNotifications();
    } catch (e) {
      const error = e;
      Object.assign(updating.value, { [id2]: false });
      showToast({
        title: ((_a3 = error.data) == null ? undefined : _a3.message) ?? "Failed to mark as read",
        variant: "warning"
      });
    }
  };
  const markAllNotificationsAsRead = async () => {
    var _a3;
    try {
      clearing.value = true;
      await event.markAllNotificationsAsRead();
      clearing.value = false;
      refreshNotifications();
    } catch (e) {
      clearing.value = false;
      const error = e;
      showToast({
        title: ((_a3 = error.data) == null ? undefined : _a3.message) ?? "Failed to mark all as read",
        variant: "warning"
      });
    }
  };
  provide(key, {
    notifications,
    loading,
    markAllNotificationsAsRead,
    markNotificationAsRead,
    refreshNotifications,
    clearing,
    updating
  });
};
const useNotifications = () => {
  const global_notifications = inject(key);
  if (!global_notifications) throw new Error("Provide notifications to use it");
  return global_notifications;
};
var activeHead;
function getActiveHead() {
  return activeHead;
}
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref3) {
  if (ref3 instanceof Promise || ref3 instanceof Date || ref3 instanceof RegExp)
    return ref3;
  const root = resolveUnref(ref3);
  if (!ref3 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput(root[k2]);
    }
    return resolved;
  }
  return root;
}
var headSymbol = "usehead";
var _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__unhead_injection_handler__";
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
var isFunc = (json) => typeof json === "function";
var useJsonld = (json, options) => {
  if (!json) {
    return;
  }
  const jsonComputed = computed(() => isFunc(json) ? json() : json);
  useHead(() => {
    if (!jsonComputed.value) {
      return {};
    }
    return {
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonComputed.value, null, "")
        }
      ]
    };
  }, options);
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const useIdFunction = () => useId();
    const store = useToastStore();
    const { toastOnAction, toggleToast } = store;
    const {
      $config: {
        public: { APP_BASE_URL }
      }
    } = useNuxtApp();
    provideNotification();
    const path = useRoute().path;
    useHead$2({
      titleTemplate: "%s | Spin Request",
      link: [
        {
          id: "canonical",
          rel: "canonical",
          href: `${APP_BASE_URL}${path}`
        }
      ]
    });
    useSeoMeta({
      title: "Spin Request",
      ogTitle: "Spin Request",
      ogDescription: "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
      description: "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
      keywords: "DJ, hype man, hosts, song request, hype request",
      ogSiteName: "Spin Request",
      ogUrl: () => APP_BASE_URL,
      ogImage: () => `${APP_BASE_URL}/images/SpinRequest.png`,
      ogImageSecureUrl: () => `${APP_BASE_URL}/images/SpinRequest.png`,
      ogImageAlt: "Spin Request",
      ogImageWidth: 217,
      ogImageHeight: 217,
      ogImageType: "image/png",
      twitterSite: "@spinrequest",
      twitterImage: () => `${APP_BASE_URL}/images/SpinRequest.png`,
      twitterImageAlt: "Spin Request",
      twitterCard: "summary",
      fbAppId: "ugz8d26lc8x4eun1fw9a2xtzefo974"
    });
    useJsonld(() => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Spin Request",
      alternateName: "SpinRequest",
      url: APP_BASE_URL,
      description: "Spin Request is a platform bridging the gap between DJs, Hosts and their audiences by facilitating song requests or hypes during live performances.",
      sameAs: [
        "https://www.facebook.com/spinrequest",
        "https://www.linkedin.com/company/spinrequest",
        "https://www.twitter.com/spinrequest",
        "https://www.instagram.com/spinrequest/",
        "https://www.tiktok.com/@spinrequest",
        "https://www.youtube.com/@spinrequest"
      ],
      logo: `${APP_BASE_URL}/images/SpinRequest.png`,
      keywords: ["DJ", "hype man", "hosts", "song request", "hype request"],
      foundingDate: "June 2023",
      address: "Nigeria"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_2;
      _push(ssrRenderComponent(unref(Cv), mergeProps({ "use-id": useIdFunction }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLayout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    open: unref(store).open,
                    title: unref(store).toast_title,
                    description: unref(store).toast_description,
                    variant: unref(store).toast_variant,
                    action: unref(store).toast_action,
                    onAction: unref(toastOnAction),
                    "update-open": unref(toggleToast)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      open: unref(store).open,
                      title: unref(store).toast_title,
                      description: unref(store).toast_description,
                      variant: unref(store).toast_variant,
                      action: unref(store).toast_action,
                      onAction: unref(toastOnAction),
                      "update-open": unref(toggleToast)
                    }, null, 8, ["open", "title", "description", "variant", "action", "onAction", "update-open"]),
                    createVNode(_component_NuxtPage)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLoadingIndicator),
              createVNode(_component_NuxtLayout, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    open: unref(store).open,
                    title: unref(store).toast_title,
                    description: unref(store).toast_description,
                    variant: unref(store).toast_variant,
                    action: unref(store).toast_action,
                    onAction: unref(toastOnAction),
                    "update-open": unref(toggleToast)
                  }, null, 8, ["open", "title", "description", "variant", "action", "onAction", "update-open"]),
                  createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = undefined;
    const _Error404 = defineAsyncComponent(() => import('./error-404-1E3kCoHo.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-R4Kazvg8.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.15.1_typescript@5.7.3_vite@6.0.7/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p2 = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p2);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.15.1_typescript@5.7.3_vite@6.0.7/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? undefined : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { Uy as $, gy as A, hy as B, Cg as C, yy as D, parseQuery as E, Fh as F, nuxtLinkDefaults as G, hasProtocol as H, resolveRouteObject as I, joinURL as J, withTrailingSlash as K, withoutTrailingSlash as L, Mh as M, hash as N, fetchDefaults as O, useRequestFetch as P, Ny as Q, Ry as R, Ly as S, Ty as T, Ui as U, Qy as V, zy as W, Ky as X, Xy as Y, jy as Z, _sfc_main$4 as _, useNuxtApp as a, Yy as a0, Lg as a1, zg as a2, Kg as a3, jg as a4, Hg as a5, Wg as a6, eu as a7, tu as a8, Dv as a9, defineNuxtRouteMiddleware as aA, br as aB, On$1 as aC, sh as aD, rh as aE, ih as aF, uh as aG, ch as aH, Eu as aa, xu as ab, Gl as ac, Pu as ad, Du as ae, ys as af, gs as ag, bs as ah, ws as ai, _s as aj, Fv as ak, Nv as al, Lv as am, useRequestEvent as an, withLeadingSlash as ao, parseURL as ap, defu as aq, encodeParam as ar, encodePath as as, useJsonld as at, _v as au, xv as av, Ev as aw, Pv as ax, Sv as ay, useState as az, useAuth as b, useRoute as c, decodeBase64 as d, entry$1 as default, useSeoMeta as e, useRouter as f, __nuxt_component_0 as g, formatMoney as h, gg as i, bg as j, cn as k, useNotifications as l, ji as m, navigateTo as n, kh as o, useAsyncData as p, qi as q, readableTimeDifference as r, showToast as s, useRuntimeConfig as t, useHead$2 as u, getInitials as v, getHexColor as w, formattedTimeDifference as x, yg as y, my as z };
//# sourceMappingURL=server.mjs.map
