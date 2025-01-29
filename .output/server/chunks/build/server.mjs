import * as Mo$1 from 'vue';
import { hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, shallowRef, toRef, onServerPrefetch, isRef, computed, defineComponent, h, defineAsyncComponent, unref, provide, shallowReactive, Suspense, nextTick, Fragment, Transition, Comment, mergeProps, cloneVNode, openBlock, createBlock, withCtx, renderSlot, toRefs, onMounted, createVNode, createCommentVNode, withKeys, normalizeProps, guardReactiveProps, reactive, withDirectives, vShow, markRaw, withModifiers, createElementBlock, resolveDynamicComponent, renderList, Teleport, onBeforeUnmount, createTextVNode, useSlots, onBeforeMount, toDisplayString, normalizeStyle, toHandlers, useSSRContext, effectScope, customRef, readonly, toHandlerKey, camelize, onUnmounted, createElementVNode, vModelSelect, createApp, getCurrentScope, onScopeDispose, onBeforeUpdate, onUpdated, mergeDefaults, watchPostEffect, useId, onErrorCaptured, shallowReadonly, isReactive, toRaw, isReadonly, isShallow } from 'vue';
import ft from 'node:http';
import Qa from 'node:https';
import Ye$1 from 'node:zlib';
import ie, { PassThrough, pipeline } from 'node:stream';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promisify, deprecate, types } from 'node:util';
import { format } from 'node:url';
import { isIP } from 'node:net';
import { statSync, createReadStream, promises } from 'node:fs';
import { basename } from 'node:path';
import { j as baseURL, s as sanitizeStatusCode, k as getContext, l as createHooks, c as createError$1, t as toRouteMatcher, m as createRouter$1, n as getRequestHeader, o as setCookie, q as getCookie, r as deleteCookie } from '../nitro/nitro.mjs';
import { CapoPlugin, getActiveHead as getActiveHead$2 } from 'unhead';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import { Loader, X } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import 'consola/core';
import 'ipx';

var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _e2, _t2, _r, _n2, _a, _e3, _t3, _b, _e4, _c, _d, _e, _f, _e5, _t4, _g, _h, _i2, _j;
var t = Object.defineProperty;
var o$1 = (e, l) => t(e, "name", { value: l, configurable: true });
var n$2 = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o$1(f, "getDefaultExportFromCjs");
var Va$1 = Object.defineProperty;
var n$1 = (i, o2) => Va$1(i, "name", { value: o2, configurable: true });
function ts$1(i) {
  if (!/^data:/i.test(i)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  i = i.replace(/\r?\n/g, "");
  const o2 = i.indexOf(",");
  if (o2 === -1 || o2 <= 4) throw new TypeError("malformed data: URI");
  const a2 = i.substring(5, o2).split(";");
  let l = "", u = false;
  const m = a2[0] || "text/plain";
  let h2 = m;
  for (let A = 1; A < a2.length; A++) a2[A] === "base64" ? u = true : a2[A] && (h2 += `;${a2[A]}`, a2[A].indexOf("charset=") === 0 && (l = a2[A].substring(8)));
  !a2[0] && !l.length && (h2 += ";charset=US-ASCII", l = "US-ASCII");
  const S = u ? "base64" : "ascii", E = unescape(i.substring(o2 + 1)), w = Buffer.from(E, S);
  return w.type = m, w.typeFull = h2, w.charset = l, w;
}
n$1(ts$1, "dataUriToBuffer");
var Eo$1 = {}, ct$1 = { exports: {} };
/**
* @license
* web-streams-polyfill v3.3.3
* Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
* This code is released under the MIT license.
* SPDX-License-Identifier: MIT
*/
var rs = ct$1.exports, vo;
function ns$1() {
  return vo || (vo = 1, function(i, o2) {
    (function(a2, l) {
      l(o2);
    })(rs, function(a2) {
      function l() {
      }
      n$1(l, "noop");
      function u(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n$1(u, "typeIsObject");
      const m = l;
      function h2(e, t2) {
        try {
          Object.defineProperty(e, "name", { value: t2, configurable: true });
        } catch {
        }
      }
      n$1(h2, "setFunctionName");
      const S = Promise, E = Promise.prototype.then, w = Promise.reject.bind(S);
      function A(e) {
        return new S(e);
      }
      n$1(A, "newPromise");
      function T2(e) {
        return A((t2) => t2(e));
      }
      n$1(T2, "promiseResolvedWith");
      function b(e) {
        return w(e);
      }
      n$1(b, "promiseRejectedWith");
      function q(e, t2, r2) {
        return E.call(e, t2, r2);
      }
      n$1(q, "PerformPromiseThen");
      function g(e, t2, r2) {
        q(q(e, t2, r2), undefined, m);
      }
      n$1(g, "uponPromise");
      function V(e, t2) {
        g(e, t2);
      }
      n$1(V, "uponFulfillment");
      function I(e, t2) {
        g(e, undefined, t2);
      }
      n$1(I, "uponRejection");
      function F(e, t2, r2) {
        return q(e, t2, r2);
      }
      n$1(F, "transformPromiseWith");
      function Q2(e) {
        q(e, undefined, m);
      }
      n$1(Q2, "setPromiseIsHandledToTrue");
      let se = n$1((e) => {
        if (typeof queueMicrotask == "function") se = queueMicrotask;
        else {
          const t2 = T2(undefined);
          se = n$1((r2) => q(t2, r2), "_queueMicrotask");
        }
        return se(e);
      }, "_queueMicrotask");
      function O2(e, t2, r2) {
        if (typeof e != "function") throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t2, r2);
      }
      n$1(O2, "reflectCall");
      function z(e, t2, r2) {
        try {
          return T2(O2(e, t2, r2));
        } catch (s) {
          return b(s);
        }
      }
      n$1(z, "promiseCall");
      const $ = 16384;
      const _M = class _M {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: undefined }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(t2) {
          const r2 = this._back;
          let s = r2;
          r2._elements.length === $ - 1 && (s = { _elements: [], _next: undefined }), r2._elements.push(t2), s !== r2 && (this._back = s, r2._next = s), ++this._size;
        }
        shift() {
          const t2 = this._front;
          let r2 = t2;
          const s = this._cursor;
          let f2 = s + 1;
          const c = t2._elements, d = c[s];
          return f2 === $ && (r2 = t2._next, f2 = 0), --this._size, this._cursor = f2, t2 !== r2 && (this._front = r2), c[s] = undefined, d;
        }
        forEach(t2) {
          let r2 = this._cursor, s = this._front, f2 = s._elements;
          for (; (r2 !== f2.length || s._next !== undefined) && !(r2 === f2.length && (s = s._next, f2 = s._elements, r2 = 0, f2.length === 0)); ) t2(f2[r2]), ++r2;
        }
        peek() {
          const t2 = this._front, r2 = this._cursor;
          return t2._elements[r2];
        }
      };
      n$1(_M, "SimpleQueue");
      let M = _M;
      const pt = Symbol("[[AbortSteps]]"), an = Symbol("[[ErrorSteps]]"), ar = Symbol("[[CancelSteps]]"), sr2 = Symbol("[[PullSteps]]"), ur2 = Symbol("[[ReleaseSteps]]");
      function sn(e, t2) {
        e._ownerReadableStream = t2, t2._reader = e, t2._state === "readable" ? fr2(e) : t2._state === "closed" ? ri2(e) : un(e, t2._storedError);
      }
      n$1(sn, "ReadableStreamReaderGenericInitialize");
      function lr2(e, t2) {
        const r2 = e._ownerReadableStream;
        return X2(r2, t2);
      }
      n$1(lr2, "ReadableStreamReaderGenericCancel");
      function ue(e) {
        const t2 = e._ownerReadableStream;
        t2._state === "readable" ? cr2(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : ni2(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t2._readableStreamController[ur2](), t2._reader = undefined, e._ownerReadableStream = undefined;
      }
      n$1(ue, "ReadableStreamReaderGenericRelease");
      function yt2(e) {
        return new TypeError("Cannot " + e + " a stream using a released reader");
      }
      n$1(yt2, "readerLockException");
      function fr2(e) {
        e._closedPromise = A((t2, r2) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r2;
        });
      }
      n$1(fr2, "defaultReaderClosedPromiseInitialize");
      function un(e, t2) {
        fr2(e), cr2(e, t2);
      }
      n$1(un, "defaultReaderClosedPromiseInitializeAsRejected");
      function ri2(e) {
        fr2(e), ln(e);
      }
      n$1(ri2, "defaultReaderClosedPromiseInitializeAsResolved");
      function cr2(e, t2) {
        e._closedPromise_reject !== undefined && (Q2(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined);
      }
      n$1(cr2, "defaultReaderClosedPromiseReject");
      function ni2(e, t2) {
        un(e, t2);
      }
      n$1(ni2, "defaultReaderClosedPromiseResetToRejected");
      function ln(e) {
        e._closedPromise_resolve !== undefined && (e._closedPromise_resolve(undefined), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined);
      }
      n$1(ln, "defaultReaderClosedPromiseResolve");
      const fn2 = Number.isFinite || function(e) {
        return typeof e == "number" && isFinite(e);
      }, oi2 = Math.trunc || function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      };
      function ii(e) {
        return typeof e == "object" || typeof e == "function";
      }
      n$1(ii, "isDictionary");
      function ne2(e, t2) {
        if (e !== undefined && !ii(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n$1(ne2, "assertDictionary");
      function G(e, t2) {
        if (typeof e != "function") throw new TypeError(`${t2} is not a function.`);
      }
      n$1(G, "assertFunction");
      function ai2(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n$1(ai2, "isObject");
      function cn2(e, t2) {
        if (!ai2(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n$1(cn2, "assertObject");
      function le(e, t2, r2) {
        if (e === undefined) throw new TypeError(`Parameter ${t2} is required in '${r2}'.`);
      }
      n$1(le, "assertRequiredArgument");
      function dr(e, t2, r2) {
        if (e === undefined) throw new TypeError(`${t2} is required in '${r2}'.`);
      }
      n$1(dr, "assertRequiredField");
      function hr(e) {
        return Number(e);
      }
      n$1(hr, "convertUnrestrictedDouble");
      function dn(e) {
        return e === 0 ? 0 : e;
      }
      n$1(dn, "censorNegativeZero");
      function si2(e) {
        return dn(oi2(e));
      }
      n$1(si2, "integerPart");
      function mr(e, t2) {
        const s = Number.MAX_SAFE_INTEGER;
        let f2 = Number(e);
        if (f2 = dn(f2), !fn2(f2)) throw new TypeError(`${t2} is not a finite number`);
        if (f2 = si2(f2), f2 < 0 || f2 > s) throw new TypeError(`${t2} is outside the accepted range of 0 to ${s}, inclusive`);
        return !fn2(f2) || f2 === 0 ? 0 : f2;
      }
      n$1(mr, "convertUnsignedLongLongWithEnforceRange");
      function br(e, t2) {
        if (!Te(e)) throw new TypeError(`${t2} is not a ReadableStream.`);
      }
      n$1(br, "assertReadableStream");
      function ze(e) {
        return new ye(e);
      }
      n$1(ze, "AcquireReadableStreamDefaultReader");
      function hn(e, t2) {
        e._reader._readRequests.push(t2);
      }
      n$1(hn, "ReadableStreamAddReadRequest");
      function pr(e, t2, r2) {
        const f2 = e._reader._readRequests.shift();
        r2 ? f2._closeSteps() : f2._chunkSteps(t2);
      }
      n$1(pr, "ReadableStreamFulfillReadRequest");
      function gt2(e) {
        return e._reader._readRequests.length;
      }
      n$1(gt2, "ReadableStreamGetNumReadRequests");
      function mn2(e) {
        const t2 = e._reader;
        return !(t2 === undefined || !ge(t2));
      }
      n$1(mn2, "ReadableStreamHasDefaultReader");
      const _ye = class _ye {
        constructor(t2) {
          if (le(t2, 1, "ReadableStreamDefaultReader"), br(t2, "First parameter"), Ce(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          sn(this, t2), this._readRequests = new M();
        }
        get closed() {
          return ge(this) ? this._closedPromise : b(_t5("closed"));
        }
        cancel(t2 = undefined) {
          return ge(this) ? this._ownerReadableStream === undefined ? b(yt2("cancel")) : lr2(this, t2) : b(_t5("cancel"));
        }
        read() {
          if (!ge(this)) return b(_t5("read"));
          if (this._ownerReadableStream === undefined) return b(yt2("read from"));
          let t2, r2;
          const s = A((c, d) => {
            t2 = c, r2 = d;
          });
          return et2(this, { _chunkSteps: n$1((c) => t2({ value: c, done: false }), "_chunkSteps"), _closeSteps: n$1(() => t2({ value: undefined, done: true }), "_closeSteps"), _errorSteps: n$1((c) => r2(c), "_errorSteps") }), s;
        }
        releaseLock() {
          if (!ge(this)) throw _t5("releaseLock");
          this._ownerReadableStream !== undefined && ui(this);
        }
      };
      n$1(_ye, "ReadableStreamDefaultReader");
      let ye = _ye;
      Object.defineProperties(ye.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h2(ye.prototype.cancel, "cancel"), h2(ye.prototype.read, "read"), h2(ye.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ye.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
      function ge(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof ye;
      }
      n$1(ge, "IsReadableStreamDefaultReader");
      function et2(e, t2) {
        const r2 = e._ownerReadableStream;
        r2._disturbed = true, r2._state === "closed" ? t2._closeSteps() : r2._state === "errored" ? t2._errorSteps(r2._storedError) : r2._readableStreamController[sr2](t2);
      }
      n$1(et2, "ReadableStreamDefaultReaderRead");
      function ui(e) {
        ue(e);
        const t2 = new TypeError("Reader was released");
        bn(e, t2);
      }
      n$1(ui, "ReadableStreamDefaultReaderRelease");
      function bn(e, t2) {
        const r2 = e._readRequests;
        e._readRequests = new M(), r2.forEach((s) => {
          s._errorSteps(t2);
        });
      }
      n$1(bn, "ReadableStreamDefaultReaderErrorReadRequests");
      function _t5(e) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
      }
      n$1(_t5, "defaultReaderBrandCheckException");
      const li = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      const _pn = class _pn {
        constructor(t2, r2) {
          this._ongoingPromise = undefined, this._isFinished = false, this._reader = t2, this._preventCancel = r2;
        }
        next() {
          const t2 = n$1(() => this._nextSteps(), "nextSteps");
          return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t2, t2) : t2(), this._ongoingPromise;
        }
        return(t2) {
          const r2 = n$1(() => this._returnSteps(t2), "returnSteps");
          return this._ongoingPromise ? F(this._ongoingPromise, r2, r2) : r2();
        }
        _nextSteps() {
          if (this._isFinished) return Promise.resolve({ value: undefined, done: true });
          const t2 = this._reader;
          let r2, s;
          const f2 = A((d, p2) => {
            r2 = d, s = p2;
          });
          return et2(t2, { _chunkSteps: n$1((d) => {
            this._ongoingPromise = undefined, se(() => r2({ value: d, done: false }));
          }, "_chunkSteps"), _closeSteps: n$1(() => {
            this._ongoingPromise = undefined, this._isFinished = true, ue(t2), r2({ value: undefined, done: true });
          }, "_closeSteps"), _errorSteps: n$1((d) => {
            this._ongoingPromise = undefined, this._isFinished = true, ue(t2), s(d);
          }, "_errorSteps") }), f2;
        }
        _returnSteps(t2) {
          if (this._isFinished) return Promise.resolve({ value: t2, done: true });
          this._isFinished = true;
          const r2 = this._reader;
          if (!this._preventCancel) {
            const s = lr2(r2, t2);
            return ue(r2), F(s, () => ({ value: t2, done: true }));
          }
          return ue(r2), T2({ value: t2, done: true });
        }
      };
      n$1(_pn, "ReadableStreamAsyncIteratorImpl");
      let pn = _pn;
      const yn = { next() {
        return gn(this) ? this._asyncIteratorImpl.next() : b(_n3("next"));
      }, return(e) {
        return gn(this) ? this._asyncIteratorImpl.return(e) : b(_n3("return"));
      } };
      Object.setPrototypeOf(yn, li);
      function fi(e, t2) {
        const r2 = ze(e), s = new pn(r2, t2), f2 = Object.create(yn);
        return f2._asyncIteratorImpl = s, f2;
      }
      n$1(fi, "AcquireReadableStreamAsyncIterator");
      function gn(e) {
        if (!u(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return false;
        try {
          return e._asyncIteratorImpl instanceof pn;
        } catch {
          return false;
        }
      }
      n$1(gn, "IsReadableStreamAsyncIterator");
      function _n3(e) {
        return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
      }
      n$1(_n3, "streamAsyncIteratorBrandCheckException");
      const Sn = Number.isNaN || function(e) {
        return e !== e;
      };
      var yr, gr, _r2;
      function tt2(e) {
        return e.slice();
      }
      n$1(tt2, "CreateArrayFromList");
      function wn2(e, t2, r2, s, f2) {
        new Uint8Array(e).set(new Uint8Array(r2, s, f2), t2);
      }
      n$1(wn2, "CopyDataBlockBytes");
      let fe = n$1((e) => (typeof e.transfer == "function" ? fe = n$1((t2) => t2.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? fe = n$1((t2) => structuredClone(t2, { transfer: [t2] }), "TransferArrayBuffer") : fe = n$1((t2) => t2, "TransferArrayBuffer"), fe(e)), "TransferArrayBuffer"), _e6 = n$1((e) => (typeof e.detached == "boolean" ? _e6 = n$1((t2) => t2.detached, "IsDetachedBuffer") : _e6 = n$1((t2) => t2.byteLength === 0, "IsDetachedBuffer"), _e6(e)), "IsDetachedBuffer");
      function Rn(e, t2, r2) {
        if (e.slice) return e.slice(t2, r2);
        const s = r2 - t2, f2 = new ArrayBuffer(s);
        return wn2(f2, 0, e, t2, s), f2;
      }
      n$1(Rn, "ArrayBufferSlice");
      function St(e, t2) {
        const r2 = e[t2];
        if (r2 != null) {
          if (typeof r2 != "function") throw new TypeError(`${String(t2)} is not a function`);
          return r2;
        }
      }
      n$1(St, "GetMethod");
      function ci(e) {
        const t2 = { [Symbol.iterator]: () => e.iterator }, r2 = async function* () {
          return yield* t2;
        }(), s = r2.next;
        return { iterator: r2, nextMethod: s, done: false };
      }
      n$1(ci, "CreateAsyncFromSyncIterator");
      const Sr = (_r2 = (yr = Symbol.asyncIterator) !== null && yr !== undefined ? yr : (gr = Symbol.for) === null || gr === undefined ? undefined : gr.call(Symbol, "Symbol.asyncIterator")) !== null && _r2 !== undefined ? _r2 : "@@asyncIterator";
      function Tn(e, t2 = "sync", r2) {
        if (r2 === undefined) if (t2 === "async") {
          if (r2 = St(e, Sr), r2 === undefined) {
            const c = St(e, Symbol.iterator), d = Tn(e, "sync", c);
            return ci(d);
          }
        } else r2 = St(e, Symbol.iterator);
        if (r2 === undefined) throw new TypeError("The object is not iterable");
        const s = O2(r2, e, []);
        if (!u(s)) throw new TypeError("The iterator method must return an object");
        const f2 = s.next;
        return { iterator: s, nextMethod: f2, done: false };
      }
      n$1(Tn, "GetIterator");
      function di(e) {
        const t2 = O2(e.nextMethod, e.iterator, []);
        if (!u(t2)) throw new TypeError("The iterator.next() method must return an object");
        return t2;
      }
      n$1(di, "IteratorNext");
      function hi(e) {
        return !!e.done;
      }
      n$1(hi, "IteratorComplete");
      function mi2(e) {
        return e.value;
      }
      n$1(mi2, "IteratorValue");
      function bi2(e) {
        return !(typeof e != "number" || Sn(e) || e < 0);
      }
      n$1(bi2, "IsNonNegativeNumber");
      function Cn2(e) {
        const t2 = Rn(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
        return new Uint8Array(t2);
      }
      n$1(Cn2, "CloneAsUint8Array");
      function wr(e) {
        const t2 = e._queue.shift();
        return e._queueTotalSize -= t2.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t2.value;
      }
      n$1(wr, "DequeueValue");
      function Rr(e, t2, r2) {
        if (!bi2(r2) || r2 === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        e._queue.push({ value: t2, size: r2 }), e._queueTotalSize += r2;
      }
      n$1(Rr, "EnqueueValueWithSize");
      function pi2(e) {
        return e._queue.peek().value;
      }
      n$1(pi2, "PeekQueueValue");
      function Se(e) {
        e._queue = new M(), e._queueTotalSize = 0;
      }
      n$1(Se, "ResetQueue");
      function Pn(e) {
        return e === DataView;
      }
      n$1(Pn, "isDataViewConstructor");
      function yi2(e) {
        return Pn(e.constructor);
      }
      n$1(yi2, "isDataView");
      function gi(e) {
        return Pn(e) ? 1 : e.BYTES_PER_ELEMENT;
      }
      n$1(gi, "arrayBufferViewElementSize");
      const _ve = class _ve {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!Tr(this)) throw Ar("view");
          return this._view;
        }
        respond(t2) {
          if (!Tr(this)) throw Ar("respond");
          if (le(t2, 1, "respond"), t2 = mr(t2, "First parameter"), this._associatedReadableByteStreamController === undefined) throw new TypeError("This BYOB request has been invalidated");
          if (_e6(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
          Ct(this._associatedReadableByteStreamController, t2);
        }
        respondWithNewView(t2) {
          if (!Tr(this)) throw Ar("respondWithNewView");
          if (le(t2, 1, "respondWithNewView"), !ArrayBuffer.isView(t2)) throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === undefined) throw new TypeError("This BYOB request has been invalidated");
          if (_e6(t2.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
          Pt(this._associatedReadableByteStreamController, t2);
        }
      };
      n$1(_ve, "ReadableStreamBYOBRequest");
      let ve = _ve;
      Object.defineProperties(ve.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h2(ve.prototype.respond, "respond"), h2(ve.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ve.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
      const _ce = class _ce {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!Ae2(this)) throw nt("byobRequest");
          return vr(this);
        }
        get desiredSize() {
          if (!Ae2(this)) throw nt("desiredSize");
          return Fn(this);
        }
        close() {
          if (!Ae2(this)) throw nt("close");
          if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
          const t2 = this._controlledReadableByteStream._state;
          if (t2 !== "readable") throw new TypeError(`The stream (in ${t2} state) is not in the readable state and cannot be closed`);
          rt(this);
        }
        enqueue(t2) {
          if (!Ae2(this)) throw nt("enqueue");
          if (le(t2, 1, "enqueue"), !ArrayBuffer.isView(t2)) throw new TypeError("chunk must be an array buffer view");
          if (t2.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
          if (t2.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested) throw new TypeError("stream is closed or draining");
          const r2 = this._controlledReadableByteStream._state;
          if (r2 !== "readable") throw new TypeError(`The stream (in ${r2} state) is not in the readable state and cannot be enqueued to`);
          Tt2(this, t2);
        }
        error(t2 = undefined) {
          if (!Ae2(this)) throw nt("error");
          Z(this, t2);
        }
        [ar](t2) {
          En(this), Se(this);
          const r2 = this._cancelAlgorithm(t2);
          return Rt2(this), r2;
        }
        [sr2](t2) {
          const r2 = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            In(this, t2);
            return;
          }
          const s = this._autoAllocateChunkSize;
          if (s !== undefined) {
            let f2;
            try {
              f2 = new ArrayBuffer(s);
            } catch (d) {
              t2._errorSteps(d);
              return;
            }
            const c = { buffer: f2, bufferByteLength: s, byteOffset: 0, byteLength: s, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
            this._pendingPullIntos.push(c);
          }
          hn(r2, t2), Be(this);
        }
        [ur2]() {
          if (this._pendingPullIntos.length > 0) {
            const t2 = this._pendingPullIntos.peek();
            t2.readerType = "none", this._pendingPullIntos = new M(), this._pendingPullIntos.push(t2);
          }
        }
      };
      n$1(_ce, "ReadableByteStreamController");
      let ce = _ce;
      Object.defineProperties(ce.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h2(ce.prototype.close, "close"), h2(ce.prototype.enqueue, "enqueue"), h2(ce.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
      function Ae2(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof ce;
      }
      n$1(Ae2, "IsReadableByteStreamController");
      function Tr(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof ve;
      }
      n$1(Tr, "IsReadableStreamBYOBRequest");
      function Be(e) {
        if (!Ti2(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r2 = e._pullAlgorithm();
        g(r2, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Be(e)), null), (s) => (Z(e, s), null));
      }
      n$1(Be, "ReadableByteStreamControllerCallPullIfNeeded");
      function En(e) {
        Pr(e), e._pendingPullIntos = new M();
      }
      n$1(En, "ReadableByteStreamControllerClearPendingPullIntos");
      function Cr(e, t2) {
        let r2 = false;
        e._state === "closed" && (r2 = true);
        const s = vn2(t2);
        t2.readerType === "default" ? pr(e, s, r2) : Bi(e, s, r2);
      }
      n$1(Cr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
      function vn2(e) {
        const t2 = e.bytesFilled, r2 = e.elementSize;
        return new e.viewConstructor(e.buffer, e.byteOffset, t2 / r2);
      }
      n$1(vn2, "ReadableByteStreamControllerConvertPullIntoDescriptor");
      function wt2(e, t2, r2, s) {
        e._queue.push({ buffer: t2, byteOffset: r2, byteLength: s }), e._queueTotalSize += s;
      }
      n$1(wt2, "ReadableByteStreamControllerEnqueueChunkToQueue");
      function An(e, t2, r2, s) {
        let f2;
        try {
          f2 = Rn(t2, r2, r2 + s);
        } catch (c) {
          throw Z(e, c), c;
        }
        wt2(e, f2, 0, s);
      }
      n$1(An, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
      function Bn2(e, t2) {
        t2.bytesFilled > 0 && An(e, t2.buffer, t2.byteOffset, t2.bytesFilled), je2(e);
      }
      n$1(Bn2, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
      function Wn2(e, t2) {
        const r2 = Math.min(e._queueTotalSize, t2.byteLength - t2.bytesFilled), s = t2.bytesFilled + r2;
        let f2 = r2, c = false;
        const d = s % t2.elementSize, p2 = s - d;
        p2 >= t2.minimumFill && (f2 = p2 - t2.bytesFilled, c = true);
        const R2 = e._queue;
        for (; f2 > 0; ) {
          const y = R2.peek(), C = Math.min(f2, y.byteLength), P = t2.byteOffset + t2.bytesFilled;
          wn2(t2.buffer, P, y.buffer, y.byteOffset, C), y.byteLength === C ? R2.shift() : (y.byteOffset += C, y.byteLength -= C), e._queueTotalSize -= C, kn2(e, C, t2), f2 -= C;
        }
        return c;
      }
      n$1(Wn2, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
      function kn2(e, t2, r2) {
        r2.bytesFilled += t2;
      }
      n$1(kn2, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
      function qn2(e) {
        e._queueTotalSize === 0 && e._closeRequested ? (Rt2(e), lt(e._controlledReadableByteStream)) : Be(e);
      }
      n$1(qn2, "ReadableByteStreamControllerHandleQueueDrain");
      function Pr(e) {
        e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = undefined, e._byobRequest._view = null, e._byobRequest = null);
      }
      n$1(Pr, "ReadableByteStreamControllerInvalidateBYOBRequest");
      function Er(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const t2 = e._pendingPullIntos.peek();
          Wn2(e, t2) && (je2(e), Cr(e._controlledReadableByteStream, t2));
        }
      }
      n$1(Er, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
      function _i3(e) {
        const t2 = e._controlledReadableByteStream._reader;
        for (; t2._readRequests.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const r2 = t2._readRequests.shift();
          In(e, r2);
        }
      }
      n$1(_i3, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
      function Si(e, t2, r2, s) {
        const f2 = e._controlledReadableByteStream, c = t2.constructor, d = gi(c), { byteOffset: p2, byteLength: R2 } = t2, y = r2 * d;
        let C;
        try {
          C = fe(t2.buffer);
        } catch (B) {
          s._errorSteps(B);
          return;
        }
        const P = { buffer: C, bufferByteLength: C.byteLength, byteOffset: p2, byteLength: R2, bytesFilled: 0, minimumFill: y, elementSize: d, viewConstructor: c, readerType: "byob" };
        if (e._pendingPullIntos.length > 0) {
          e._pendingPullIntos.push(P), Ln(f2, s);
          return;
        }
        if (f2._state === "closed") {
          const B = new c(P.buffer, P.byteOffset, 0);
          s._closeSteps(B);
          return;
        }
        if (e._queueTotalSize > 0) {
          if (Wn2(e, P)) {
            const B = vn2(P);
            qn2(e), s._chunkSteps(B);
            return;
          }
          if (e._closeRequested) {
            const B = new TypeError("Insufficient bytes to fill elements in the given buffer");
            Z(e, B), s._errorSteps(B);
            return;
          }
        }
        e._pendingPullIntos.push(P), Ln(f2, s), Be(e);
      }
      n$1(Si, "ReadableByteStreamControllerPullInto");
      function wi(e, t2) {
        t2.readerType === "none" && je2(e);
        const r2 = e._controlledReadableByteStream;
        if (Br(r2)) for (; Dn2(r2) > 0; ) {
          const s = je2(e);
          Cr(r2, s);
        }
      }
      n$1(wi, "ReadableByteStreamControllerRespondInClosedState");
      function Ri2(e, t2, r2) {
        if (kn2(e, t2, r2), r2.readerType === "none") {
          Bn2(e, r2), Er(e);
          return;
        }
        if (r2.bytesFilled < r2.minimumFill) return;
        je2(e);
        const s = r2.bytesFilled % r2.elementSize;
        if (s > 0) {
          const f2 = r2.byteOffset + r2.bytesFilled;
          An(e, r2.buffer, f2 - s, s);
        }
        r2.bytesFilled -= s, Cr(e._controlledReadableByteStream, r2), Er(e);
      }
      n$1(Ri2, "ReadableByteStreamControllerRespondInReadableState");
      function On2(e, t2) {
        const r2 = e._pendingPullIntos.peek();
        Pr(e), e._controlledReadableByteStream._state === "closed" ? wi(e, r2) : Ri2(e, t2, r2), Be(e);
      }
      n$1(On2, "ReadableByteStreamControllerRespondInternal");
      function je2(e) {
        return e._pendingPullIntos.shift();
      }
      n$1(je2, "ReadableByteStreamControllerShiftPendingPullInto");
      function Ti2(e) {
        const t2 = e._controlledReadableByteStream;
        return t2._state !== "readable" || e._closeRequested || !e._started ? false : !!(mn2(t2) && gt2(t2) > 0 || Br(t2) && Dn2(t2) > 0 || Fn(e) > 0);
      }
      n$1(Ti2, "ReadableByteStreamControllerShouldCallPull");
      function Rt2(e) {
        e._pullAlgorithm = undefined, e._cancelAlgorithm = undefined;
      }
      n$1(Rt2, "ReadableByteStreamControllerClearAlgorithms");
      function rt(e) {
        const t2 = e._controlledReadableByteStream;
        if (!(e._closeRequested || t2._state !== "readable")) {
          if (e._queueTotalSize > 0) {
            e._closeRequested = true;
            return;
          }
          if (e._pendingPullIntos.length > 0) {
            const r2 = e._pendingPullIntos.peek();
            if (r2.bytesFilled % r2.elementSize !== 0) {
              const s = new TypeError("Insufficient bytes to fill elements in the given buffer");
              throw Z(e, s), s;
            }
          }
          Rt2(e), lt(t2);
        }
      }
      n$1(rt, "ReadableByteStreamControllerClose");
      function Tt2(e, t2) {
        const r2 = e._controlledReadableByteStream;
        if (e._closeRequested || r2._state !== "readable") return;
        const { buffer: s, byteOffset: f2, byteLength: c } = t2;
        if (_e6(s)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
        const d = fe(s);
        if (e._pendingPullIntos.length > 0) {
          const p2 = e._pendingPullIntos.peek();
          if (_e6(p2.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
          Pr(e), p2.buffer = fe(p2.buffer), p2.readerType === "none" && Bn2(e, p2);
        }
        if (mn2(r2)) if (_i3(e), gt2(r2) === 0) wt2(e, d, f2, c);
        else {
          e._pendingPullIntos.length > 0 && je2(e);
          const p2 = new Uint8Array(d, f2, c);
          pr(r2, p2, false);
        }
        else Br(r2) ? (wt2(e, d, f2, c), Er(e)) : wt2(e, d, f2, c);
        Be(e);
      }
      n$1(Tt2, "ReadableByteStreamControllerEnqueue");
      function Z(e, t2) {
        const r2 = e._controlledReadableByteStream;
        r2._state === "readable" && (En(e), Se(e), Rt2(e), lo2(r2, t2));
      }
      n$1(Z, "ReadableByteStreamControllerError");
      function In(e, t2) {
        const r2 = e._queue.shift();
        e._queueTotalSize -= r2.byteLength, qn2(e);
        const s = new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength);
        t2._chunkSteps(s);
      }
      n$1(In, "ReadableByteStreamControllerFillReadRequestFromQueue");
      function vr(e) {
        if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
          const t2 = e._pendingPullIntos.peek(), r2 = new Uint8Array(t2.buffer, t2.byteOffset + t2.bytesFilled, t2.byteLength - t2.bytesFilled), s = Object.create(ve.prototype);
          Pi2(s, e, r2), e._byobRequest = s;
        }
        return e._byobRequest;
      }
      n$1(vr, "ReadableByteStreamControllerGetBYOBRequest");
      function Fn(e) {
        const t2 = e._controlledReadableByteStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n$1(Fn, "ReadableByteStreamControllerGetDesiredSize");
      function Ct(e, t2) {
        const r2 = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2 !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (t2 === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (r2.bytesFilled + t2 > r2.byteLength) throw new RangeError("bytesWritten out of range");
        }
        r2.buffer = fe(r2.buffer), On2(e, t2);
      }
      n$1(Ct, "ReadableByteStreamControllerRespond");
      function Pt(e, t2) {
        const r2 = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (t2.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (r2.byteOffset + r2.bytesFilled !== t2.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
        if (r2.bufferByteLength !== t2.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (r2.bytesFilled + t2.byteLength > r2.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
        const f2 = t2.byteLength;
        r2.buffer = fe(t2.buffer), On2(e, f2);
      }
      n$1(Pt, "ReadableByteStreamControllerRespondWithNewView");
      function zn(e, t2, r2, s, f2, c, d) {
        t2._controlledReadableByteStream = e, t2._pullAgain = false, t2._pulling = false, t2._byobRequest = null, t2._queue = t2._queueTotalSize = undefined, Se(t2), t2._closeRequested = false, t2._started = false, t2._strategyHWM = c, t2._pullAlgorithm = s, t2._cancelAlgorithm = f2, t2._autoAllocateChunkSize = d, t2._pendingPullIntos = new M(), e._readableStreamController = t2;
        const p2 = r2();
        g(T2(p2), () => (t2._started = true, Be(t2), null), (R2) => (Z(t2, R2), null));
      }
      n$1(zn, "SetUpReadableByteStreamController");
      function Ci(e, t2, r2) {
        const s = Object.create(ce.prototype);
        let f2, c, d;
        t2.start !== undefined ? f2 = n$1(() => t2.start(s), "startAlgorithm") : f2 = n$1(() => {
        }, "startAlgorithm"), t2.pull !== undefined ? c = n$1(() => t2.pull(s), "pullAlgorithm") : c = n$1(() => T2(undefined), "pullAlgorithm"), t2.cancel !== undefined ? d = n$1((R2) => t2.cancel(R2), "cancelAlgorithm") : d = n$1(() => T2(undefined), "cancelAlgorithm");
        const p2 = t2.autoAllocateChunkSize;
        if (p2 === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
        zn(e, s, f2, c, d, r2, p2);
      }
      n$1(Ci, "SetUpReadableByteStreamControllerFromUnderlyingSource");
      function Pi2(e, t2, r2) {
        e._associatedReadableByteStreamController = t2, e._view = r2;
      }
      n$1(Pi2, "SetUpReadableStreamBYOBRequest");
      function Ar(e) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
      }
      n$1(Ar, "byobRequestBrandCheckException");
      function nt(e) {
        return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
      }
      n$1(nt, "byteStreamControllerBrandCheckException");
      function Ei2(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.mode;
        return { mode: r2 === undefined ? undefined : vi(r2, `${t2} has member 'mode' that`) };
      }
      n$1(Ei2, "convertReaderOptions");
      function vi(e, t2) {
        if (e = `${e}`, e !== "byob") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return e;
      }
      n$1(vi, "convertReadableStreamReaderMode");
      function Ai2(e, t2) {
        var r2;
        ne2(e, t2);
        const s = (r2 = e == null ? undefined : e.min) !== null && r2 !== undefined ? r2 : 1;
        return { min: mr(s, `${t2} has member 'min' that`) };
      }
      n$1(Ai2, "convertByobReadOptions");
      function jn2(e) {
        return new we(e);
      }
      n$1(jn2, "AcquireReadableStreamBYOBReader");
      function Ln(e, t2) {
        e._reader._readIntoRequests.push(t2);
      }
      n$1(Ln, "ReadableStreamAddReadIntoRequest");
      function Bi(e, t2, r2) {
        const f2 = e._reader._readIntoRequests.shift();
        r2 ? f2._closeSteps(t2) : f2._chunkSteps(t2);
      }
      n$1(Bi, "ReadableStreamFulfillReadIntoRequest");
      function Dn2(e) {
        return e._reader._readIntoRequests.length;
      }
      n$1(Dn2, "ReadableStreamGetNumReadIntoRequests");
      function Br(e) {
        const t2 = e._reader;
        return !(t2 === undefined || !We(t2));
      }
      n$1(Br, "ReadableStreamHasBYOBReader");
      const _we = class _we {
        constructor(t2) {
          if (le(t2, 1, "ReadableStreamBYOBReader"), br(t2, "First parameter"), Ce(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!Ae2(t2._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          sn(this, t2), this._readIntoRequests = new M();
        }
        get closed() {
          return We(this) ? this._closedPromise : b(Et("closed"));
        }
        cancel(t2 = undefined) {
          return We(this) ? this._ownerReadableStream === undefined ? b(yt2("cancel")) : lr2(this, t2) : b(Et("cancel"));
        }
        read(t2, r2 = {}) {
          if (!We(this)) return b(Et("read"));
          if (!ArrayBuffer.isView(t2)) return b(new TypeError("view must be an array buffer view"));
          if (t2.byteLength === 0) return b(new TypeError("view must have non-zero byteLength"));
          if (t2.buffer.byteLength === 0) return b(new TypeError("view's buffer must have non-zero byteLength"));
          if (_e6(t2.buffer)) return b(new TypeError("view's buffer has been detached"));
          let s;
          try {
            s = Ai2(r2, "options");
          } catch (y) {
            return b(y);
          }
          const f2 = s.min;
          if (f2 === 0) return b(new TypeError("options.min must be greater than 0"));
          if (yi2(t2)) {
            if (f2 > t2.byteLength) return b(new RangeError("options.min must be less than or equal to view's byteLength"));
          } else if (f2 > t2.length) return b(new RangeError("options.min must be less than or equal to view's length"));
          if (this._ownerReadableStream === undefined) return b(yt2("read from"));
          let c, d;
          const p2 = A((y, C) => {
            c = y, d = C;
          });
          return $n2(this, t2, f2, { _chunkSteps: n$1((y) => c({ value: y, done: false }), "_chunkSteps"), _closeSteps: n$1((y) => c({ value: y, done: true }), "_closeSteps"), _errorSteps: n$1((y) => d(y), "_errorSteps") }), p2;
        }
        releaseLock() {
          if (!We(this)) throw Et("releaseLock");
          this._ownerReadableStream !== undefined && Wi2(this);
        }
      };
      n$1(_we, "ReadableStreamBYOBReader");
      let we = _we;
      Object.defineProperties(we.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h2(we.prototype.cancel, "cancel"), h2(we.prototype.read, "read"), h2(we.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(we.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
      function We(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof we;
      }
      n$1(We, "IsReadableStreamBYOBReader");
      function $n2(e, t2, r2, s) {
        const f2 = e._ownerReadableStream;
        f2._disturbed = true, f2._state === "errored" ? s._errorSteps(f2._storedError) : Si(f2._readableStreamController, t2, r2, s);
      }
      n$1($n2, "ReadableStreamBYOBReaderRead");
      function Wi2(e) {
        ue(e);
        const t2 = new TypeError("Reader was released");
        Mn(e, t2);
      }
      n$1(Wi2, "ReadableStreamBYOBReaderRelease");
      function Mn(e, t2) {
        const r2 = e._readIntoRequests;
        e._readIntoRequests = new M(), r2.forEach((s) => {
          s._errorSteps(t2);
        });
      }
      n$1(Mn, "ReadableStreamBYOBReaderErrorReadIntoRequests");
      function Et(e) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
      }
      n$1(Et, "byobReaderBrandCheckException");
      function ot2(e, t2) {
        const { highWaterMark: r2 } = e;
        if (r2 === undefined) return t2;
        if (Sn(r2) || r2 < 0) throw new RangeError("Invalid highWaterMark");
        return r2;
      }
      n$1(ot2, "ExtractHighWaterMark");
      function vt2(e) {
        const { size: t2 } = e;
        return t2 || (() => 1);
      }
      n$1(vt2, "ExtractSizeAlgorithm");
      function At2(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.highWaterMark, s = e == null ? undefined : e.size;
        return { highWaterMark: r2 === undefined ? undefined : hr(r2), size: s === undefined ? undefined : ki2(s, `${t2} has member 'size' that`) };
      }
      n$1(At2, "convertQueuingStrategy");
      function ki2(e, t2) {
        return G(e, t2), (r2) => hr(e(r2));
      }
      n$1(ki2, "convertQueuingStrategySize");
      function qi2(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.abort, s = e == null ? undefined : e.close, f2 = e == null ? undefined : e.start, c = e == null ? undefined : e.type, d = e == null ? undefined : e.write;
        return { abort: r2 === undefined ? undefined : Oi2(r2, e, `${t2} has member 'abort' that`), close: s === undefined ? undefined : Ii2(s, e, `${t2} has member 'close' that`), start: f2 === undefined ? undefined : Fi2(f2, e, `${t2} has member 'start' that`), write: d === undefined ? undefined : zi2(d, e, `${t2} has member 'write' that`), type: c };
      }
      n$1(qi2, "convertUnderlyingSink");
      function Oi2(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Oi2, "convertUnderlyingSinkAbortCallback");
      function Ii2(e, t2, r2) {
        return G(e, r2), () => z(e, t2, []);
      }
      n$1(Ii2, "convertUnderlyingSinkCloseCallback");
      function Fi2(e, t2, r2) {
        return G(e, r2), (s) => O2(e, t2, [s]);
      }
      n$1(Fi2, "convertUnderlyingSinkStartCallback");
      function zi2(e, t2, r2) {
        return G(e, r2), (s, f2) => z(e, t2, [s, f2]);
      }
      n$1(zi2, "convertUnderlyingSinkWriteCallback");
      function Un(e, t2) {
        if (!Le2(e)) throw new TypeError(`${t2} is not a WritableStream.`);
      }
      n$1(Un, "assertWritableStream");
      function ji2(e) {
        if (typeof e != "object" || e === null) return false;
        try {
          return typeof e.aborted == "boolean";
        } catch {
          return false;
        }
      }
      n$1(ji2, "isAbortSignal");
      const Li2 = typeof AbortController == "function";
      function Di2() {
        if (Li2) return new AbortController();
      }
      n$1(Di2, "createAbortController");
      const _Re = class _Re {
        constructor(t2 = {}, r2 = {}) {
          t2 === undefined ? t2 = null : cn2(t2, "First parameter");
          const s = At2(r2, "Second parameter"), f2 = qi2(t2, "First parameter");
          if (Nn(this), f2.type !== undefined) throw new RangeError("Invalid type is specified");
          const d = vt2(s), p2 = ot2(s, 1);
          Xi2(this, f2, p2, d);
        }
        get locked() {
          if (!Le2(this)) throw Ot2("locked");
          return De(this);
        }
        abort(t2 = undefined) {
          return Le2(this) ? De(this) ? b(new TypeError("Cannot abort a stream that already has a writer")) : Bt2(this, t2) : b(Ot2("abort"));
        }
        close() {
          return Le2(this) ? De(this) ? b(new TypeError("Cannot close a stream that already has a writer")) : oe(this) ? b(new TypeError("Cannot close an already-closing stream")) : Hn(this) : b(Ot2("close"));
        }
        getWriter() {
          if (!Le2(this)) throw Ot2("getWriter");
          return xn(this);
        }
      };
      n$1(_Re, "WritableStream");
      let Re = _Re;
      Object.defineProperties(Re.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h2(Re.prototype.abort, "abort"), h2(Re.prototype.close, "close"), h2(Re.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
      function xn(e) {
        return new de(e);
      }
      n$1(xn, "AcquireWritableStreamDefaultWriter");
      function $i2(e, t2, r2, s, f2 = 1, c = () => 1) {
        const d = Object.create(Re.prototype);
        Nn(d);
        const p2 = Object.create($e2.prototype);
        return Kn(d, p2, e, t2, r2, s, f2, c), d;
      }
      n$1($i2, "CreateWritableStream");
      function Nn(e) {
        e._state = "writable", e._storedError = undefined, e._writer = undefined, e._writableStreamController = undefined, e._writeRequests = new M(), e._inFlightWriteRequest = undefined, e._closeRequest = undefined, e._inFlightCloseRequest = undefined, e._pendingAbortRequest = undefined, e._backpressure = false;
      }
      n$1(Nn, "InitializeWritableStream");
      function Le2(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof Re;
      }
      n$1(Le2, "IsWritableStream");
      function De(e) {
        return e._writer !== undefined;
      }
      n$1(De, "IsWritableStreamLocked");
      function Bt2(e, t2) {
        var r2;
        if (e._state === "closed" || e._state === "errored") return T2(undefined);
        e._writableStreamController._abortReason = t2, (r2 = e._writableStreamController._abortController) === null || r2 === undefined || r2.abort(t2);
        const s = e._state;
        if (s === "closed" || s === "errored") return T2(undefined);
        if (e._pendingAbortRequest !== undefined) return e._pendingAbortRequest._promise;
        let f2 = false;
        s === "erroring" && (f2 = true, t2 = undefined);
        const c = A((d, p2) => {
          e._pendingAbortRequest = { _promise: undefined, _resolve: d, _reject: p2, _reason: t2, _wasAlreadyErroring: f2 };
        });
        return e._pendingAbortRequest._promise = c, f2 || kr(e, t2), c;
      }
      n$1(Bt2, "WritableStreamAbort");
      function Hn(e) {
        const t2 = e._state;
        if (t2 === "closed" || t2 === "errored") return b(new TypeError(`The stream (in ${t2} state) is not in the writable state and cannot be closed`));
        const r2 = A((f2, c) => {
          const d = { _resolve: f2, _reject: c };
          e._closeRequest = d;
        }), s = e._writer;
        return s !== undefined && e._backpressure && t2 === "writable" && Dr(s), ea(e._writableStreamController), r2;
      }
      n$1(Hn, "WritableStreamClose");
      function Mi2(e) {
        return A((r2, s) => {
          const f2 = { _resolve: r2, _reject: s };
          e._writeRequests.push(f2);
        });
      }
      n$1(Mi2, "WritableStreamAddWriteRequest");
      function Wr(e, t2) {
        if (e._state === "writable") {
          kr(e, t2);
          return;
        }
        qr(e);
      }
      n$1(Wr, "WritableStreamDealWithRejection");
      function kr(e, t2) {
        const r2 = e._writableStreamController;
        e._state = "erroring", e._storedError = t2;
        const s = e._writer;
        s !== undefined && Qn2(s, t2), !Vi2(e) && r2._started && qr(e);
      }
      n$1(kr, "WritableStreamStartErroring");
      function qr(e) {
        e._state = "errored", e._writableStreamController[an]();
        const t2 = e._storedError;
        if (e._writeRequests.forEach((f2) => {
          f2._reject(t2);
        }), e._writeRequests = new M(), e._pendingAbortRequest === undefined) {
          Wt2(e);
          return;
        }
        const r2 = e._pendingAbortRequest;
        if (e._pendingAbortRequest = undefined, r2._wasAlreadyErroring) {
          r2._reject(t2), Wt2(e);
          return;
        }
        const s = e._writableStreamController[pt](r2._reason);
        g(s, () => (r2._resolve(), Wt2(e), null), (f2) => (r2._reject(f2), Wt2(e), null));
      }
      n$1(qr, "WritableStreamFinishErroring");
      function Ui2(e) {
        e._inFlightWriteRequest._resolve(undefined), e._inFlightWriteRequest = undefined;
      }
      n$1(Ui2, "WritableStreamFinishInFlightWrite");
      function xi(e, t2) {
        e._inFlightWriteRequest._reject(t2), e._inFlightWriteRequest = undefined, Wr(e, t2);
      }
      n$1(xi, "WritableStreamFinishInFlightWriteWithError");
      function Ni2(e) {
        e._inFlightCloseRequest._resolve(undefined), e._inFlightCloseRequest = undefined, e._state === "erroring" && (e._storedError = undefined, e._pendingAbortRequest !== undefined && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = undefined)), e._state = "closed";
        const r2 = e._writer;
        r2 !== undefined && to2(r2);
      }
      n$1(Ni2, "WritableStreamFinishInFlightClose");
      function Hi2(e, t2) {
        e._inFlightCloseRequest._reject(t2), e._inFlightCloseRequest = undefined, e._pendingAbortRequest !== undefined && (e._pendingAbortRequest._reject(t2), e._pendingAbortRequest = undefined), Wr(e, t2);
      }
      n$1(Hi2, "WritableStreamFinishInFlightCloseWithError");
      function oe(e) {
        return !(e._closeRequest === undefined && e._inFlightCloseRequest === undefined);
      }
      n$1(oe, "WritableStreamCloseQueuedOrInFlight");
      function Vi2(e) {
        return !(e._inFlightWriteRequest === undefined && e._inFlightCloseRequest === undefined);
      }
      n$1(Vi2, "WritableStreamHasOperationMarkedInFlight");
      function Qi2(e) {
        e._inFlightCloseRequest = e._closeRequest, e._closeRequest = undefined;
      }
      n$1(Qi2, "WritableStreamMarkCloseRequestInFlight");
      function Yi2(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      n$1(Yi2, "WritableStreamMarkFirstWriteRequestInFlight");
      function Wt2(e) {
        e._closeRequest !== undefined && (e._closeRequest._reject(e._storedError), e._closeRequest = undefined);
        const t2 = e._writer;
        t2 !== undefined && jr(t2, e._storedError);
      }
      n$1(Wt2, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
      function Or(e, t2) {
        const r2 = e._writer;
        r2 !== undefined && t2 !== e._backpressure && (t2 ? sa(r2) : Dr(r2)), e._backpressure = t2;
      }
      n$1(Or, "WritableStreamUpdateBackpressure");
      const _de = class _de {
        constructor(t2) {
          if (le(t2, 1, "WritableStreamDefaultWriter"), Un(t2, "First parameter"), De(t2)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = t2, t2._writer = this;
          const r2 = t2._state;
          if (r2 === "writable") !oe(t2) && t2._backpressure ? Ft2(this) : ro(this), It2(this);
          else if (r2 === "erroring") Lr(this, t2._storedError), It2(this);
          else if (r2 === "closed") ro(this), ia2(this);
          else {
            const s = t2._storedError;
            Lr(this, s), eo(this, s);
          }
        }
        get closed() {
          return ke(this) ? this._closedPromise : b(qe("closed"));
        }
        get desiredSize() {
          if (!ke(this)) throw qe("desiredSize");
          if (this._ownerWritableStream === undefined) throw at("desiredSize");
          return Ji2(this);
        }
        get ready() {
          return ke(this) ? this._readyPromise : b(qe("ready"));
        }
        abort(t2 = undefined) {
          return ke(this) ? this._ownerWritableStream === undefined ? b(at("abort")) : Gi2(this, t2) : b(qe("abort"));
        }
        close() {
          if (!ke(this)) return b(qe("close"));
          const t2 = this._ownerWritableStream;
          return t2 === undefined ? b(at("close")) : oe(t2) ? b(new TypeError("Cannot close an already-closing stream")) : Vn(this);
        }
        releaseLock() {
          if (!ke(this)) throw qe("releaseLock");
          this._ownerWritableStream !== undefined && Yn2(this);
        }
        write(t2 = undefined) {
          return ke(this) ? this._ownerWritableStream === undefined ? b(at("write to")) : Gn2(this, t2) : b(qe("write"));
        }
      };
      n$1(_de, "WritableStreamDefaultWriter");
      let de = _de;
      Object.defineProperties(de.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h2(de.prototype.abort, "abort"), h2(de.prototype.close, "close"), h2(de.prototype.releaseLock, "releaseLock"), h2(de.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
      function ke(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof de;
      }
      n$1(ke, "IsWritableStreamDefaultWriter");
      function Gi2(e, t2) {
        const r2 = e._ownerWritableStream;
        return Bt2(r2, t2);
      }
      n$1(Gi2, "WritableStreamDefaultWriterAbort");
      function Vn(e) {
        const t2 = e._ownerWritableStream;
        return Hn(t2);
      }
      n$1(Vn, "WritableStreamDefaultWriterClose");
      function Zi2(e) {
        const t2 = e._ownerWritableStream, r2 = t2._state;
        return oe(t2) || r2 === "closed" ? T2(undefined) : r2 === "errored" ? b(t2._storedError) : Vn(e);
      }
      n$1(Zi2, "WritableStreamDefaultWriterCloseWithErrorPropagation");
      function Ki(e, t2) {
        e._closedPromiseState === "pending" ? jr(e, t2) : aa(e, t2);
      }
      n$1(Ki, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
      function Qn2(e, t2) {
        e._readyPromiseState === "pending" ? no(e, t2) : ua2(e, t2);
      }
      n$1(Qn2, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
      function Ji2(e) {
        const t2 = e._ownerWritableStream, r2 = t2._state;
        return r2 === "errored" || r2 === "erroring" ? null : r2 === "closed" ? 0 : Jn2(t2._writableStreamController);
      }
      n$1(Ji2, "WritableStreamDefaultWriterGetDesiredSize");
      function Yn2(e) {
        const t2 = e._ownerWritableStream, r2 = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        Qn2(e, r2), Ki(e, r2), t2._writer = undefined, e._ownerWritableStream = undefined;
      }
      n$1(Yn2, "WritableStreamDefaultWriterRelease");
      function Gn2(e, t2) {
        const r2 = e._ownerWritableStream, s = r2._writableStreamController, f2 = ta(s, t2);
        if (r2 !== e._ownerWritableStream) return b(at("write to"));
        const c = r2._state;
        if (c === "errored") return b(r2._storedError);
        if (oe(r2) || c === "closed") return b(new TypeError("The stream is closing or closed and cannot be written to"));
        if (c === "erroring") return b(r2._storedError);
        const d = Mi2(r2);
        return ra(s, t2, f2), d;
      }
      n$1(Gn2, "WritableStreamDefaultWriterWrite");
      const Zn2 = {};
      const _$e = class _$e {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!Ir(this)) throw zr2("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!Ir(this)) throw zr2("signal");
          if (this._abortController === undefined) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(t2 = undefined) {
          if (!Ir(this)) throw zr2("error");
          this._controlledWritableStream._state === "writable" && Xn2(this, t2);
        }
        [pt](t2) {
          const r2 = this._abortAlgorithm(t2);
          return kt2(this), r2;
        }
        [an]() {
          Se(this);
        }
      };
      n$1(_$e, "WritableStreamDefaultController");
      let $e2 = _$e;
      Object.defineProperties($e2.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty($e2.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
      function Ir(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof $e2;
      }
      n$1(Ir, "IsWritableStreamDefaultController");
      function Kn(e, t2, r2, s, f2, c, d, p2) {
        t2._controlledWritableStream = e, e._writableStreamController = t2, t2._queue = undefined, t2._queueTotalSize = undefined, Se(t2), t2._abortReason = undefined, t2._abortController = Di2(), t2._started = false, t2._strategySizeAlgorithm = p2, t2._strategyHWM = d, t2._writeAlgorithm = s, t2._closeAlgorithm = f2, t2._abortAlgorithm = c;
        const R2 = Fr(t2);
        Or(e, R2);
        const y = r2(), C = T2(y);
        g(C, () => (t2._started = true, qt(t2), null), (P) => (t2._started = true, Wr(e, P), null));
      }
      n$1(Kn, "SetUpWritableStreamDefaultController");
      function Xi2(e, t2, r2, s) {
        const f2 = Object.create($e2.prototype);
        let c, d, p2, R2;
        t2.start !== undefined ? c = n$1(() => t2.start(f2), "startAlgorithm") : c = n$1(() => {
        }, "startAlgorithm"), t2.write !== undefined ? d = n$1((y) => t2.write(y, f2), "writeAlgorithm") : d = n$1(() => T2(undefined), "writeAlgorithm"), t2.close !== undefined ? p2 = n$1(() => t2.close(), "closeAlgorithm") : p2 = n$1(() => T2(undefined), "closeAlgorithm"), t2.abort !== undefined ? R2 = n$1((y) => t2.abort(y), "abortAlgorithm") : R2 = n$1(() => T2(undefined), "abortAlgorithm"), Kn(e, f2, c, d, p2, R2, r2, s);
      }
      n$1(Xi2, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
      function kt2(e) {
        e._writeAlgorithm = undefined, e._closeAlgorithm = undefined, e._abortAlgorithm = undefined, e._strategySizeAlgorithm = undefined;
      }
      n$1(kt2, "WritableStreamDefaultControllerClearAlgorithms");
      function ea(e) {
        Rr(e, Zn2, 0), qt(e);
      }
      n$1(ea, "WritableStreamDefaultControllerClose");
      function ta(e, t2) {
        try {
          return e._strategySizeAlgorithm(t2);
        } catch (r2) {
          return it(e, r2), 1;
        }
      }
      n$1(ta, "WritableStreamDefaultControllerGetChunkSize");
      function Jn2(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      n$1(Jn2, "WritableStreamDefaultControllerGetDesiredSize");
      function ra(e, t2, r2) {
        try {
          Rr(e, t2, r2);
        } catch (f2) {
          it(e, f2);
          return;
        }
        const s = e._controlledWritableStream;
        if (!oe(s) && s._state === "writable") {
          const f2 = Fr(e);
          Or(s, f2);
        }
        qt(e);
      }
      n$1(ra, "WritableStreamDefaultControllerWrite");
      function qt(e) {
        const t2 = e._controlledWritableStream;
        if (!e._started || t2._inFlightWriteRequest !== undefined) return;
        if (t2._state === "erroring") {
          qr(t2);
          return;
        }
        if (e._queue.length === 0) return;
        const s = pi2(e);
        s === Zn2 ? na(e) : oa(e, s);
      }
      n$1(qt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
      function it(e, t2) {
        e._controlledWritableStream._state === "writable" && Xn2(e, t2);
      }
      n$1(it, "WritableStreamDefaultControllerErrorIfNeeded");
      function na(e) {
        const t2 = e._controlledWritableStream;
        Qi2(t2), wr(e);
        const r2 = e._closeAlgorithm();
        kt2(e), g(r2, () => (Ni2(t2), null), (s) => (Hi2(t2, s), null));
      }
      n$1(na, "WritableStreamDefaultControllerProcessClose");
      function oa(e, t2) {
        const r2 = e._controlledWritableStream;
        Yi2(r2);
        const s = e._writeAlgorithm(t2);
        g(s, () => {
          Ui2(r2);
          const f2 = r2._state;
          if (wr(e), !oe(r2) && f2 === "writable") {
            const c = Fr(e);
            Or(r2, c);
          }
          return qt(e), null;
        }, (f2) => (r2._state === "writable" && kt2(e), xi(r2, f2), null));
      }
      n$1(oa, "WritableStreamDefaultControllerProcessWrite");
      function Fr(e) {
        return Jn2(e) <= 0;
      }
      n$1(Fr, "WritableStreamDefaultControllerGetBackpressure");
      function Xn2(e, t2) {
        const r2 = e._controlledWritableStream;
        kt2(e), kr(r2, t2);
      }
      n$1(Xn2, "WritableStreamDefaultControllerError");
      function Ot2(e) {
        return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
      }
      n$1(Ot2, "streamBrandCheckException$2");
      function zr2(e) {
        return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
      }
      n$1(zr2, "defaultControllerBrandCheckException$2");
      function qe(e) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
      }
      n$1(qe, "defaultWriterBrandCheckException");
      function at(e) {
        return new TypeError("Cannot " + e + " a stream using a released writer");
      }
      n$1(at, "defaultWriterLockException");
      function It2(e) {
        e._closedPromise = A((t2, r2) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r2, e._closedPromiseState = "pending";
        });
      }
      n$1(It2, "defaultWriterClosedPromiseInitialize");
      function eo(e, t2) {
        It2(e), jr(e, t2);
      }
      n$1(eo, "defaultWriterClosedPromiseInitializeAsRejected");
      function ia2(e) {
        It2(e), to2(e);
      }
      n$1(ia2, "defaultWriterClosedPromiseInitializeAsResolved");
      function jr(e, t2) {
        e._closedPromise_reject !== undefined && (Q2(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined, e._closedPromiseState = "rejected");
      }
      n$1(jr, "defaultWriterClosedPromiseReject");
      function aa(e, t2) {
        eo(e, t2);
      }
      n$1(aa, "defaultWriterClosedPromiseResetToRejected");
      function to2(e) {
        e._closedPromise_resolve !== undefined && (e._closedPromise_resolve(undefined), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined, e._closedPromiseState = "resolved");
      }
      n$1(to2, "defaultWriterClosedPromiseResolve");
      function Ft2(e) {
        e._readyPromise = A((t2, r2) => {
          e._readyPromise_resolve = t2, e._readyPromise_reject = r2;
        }), e._readyPromiseState = "pending";
      }
      n$1(Ft2, "defaultWriterReadyPromiseInitialize");
      function Lr(e, t2) {
        Ft2(e), no(e, t2);
      }
      n$1(Lr, "defaultWriterReadyPromiseInitializeAsRejected");
      function ro(e) {
        Ft2(e), Dr(e);
      }
      n$1(ro, "defaultWriterReadyPromiseInitializeAsResolved");
      function no(e, t2) {
        e._readyPromise_reject !== undefined && (Q2(e._readyPromise), e._readyPromise_reject(t2), e._readyPromise_resolve = undefined, e._readyPromise_reject = undefined, e._readyPromiseState = "rejected");
      }
      n$1(no, "defaultWriterReadyPromiseReject");
      function sa(e) {
        Ft2(e);
      }
      n$1(sa, "defaultWriterReadyPromiseReset");
      function ua2(e, t2) {
        Lr(e, t2);
      }
      n$1(ua2, "defaultWriterReadyPromiseResetToRejected");
      function Dr(e) {
        e._readyPromise_resolve !== undefined && (e._readyPromise_resolve(undefined), e._readyPromise_resolve = undefined, e._readyPromise_reject = undefined, e._readyPromiseState = "fulfilled");
      }
      n$1(Dr, "defaultWriterReadyPromiseResolve");
      function la() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof n$2 < "u") return n$2;
      }
      n$1(la, "getGlobals");
      const $r = la();
      function fa(e) {
        if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException") return false;
        try {
          return new e(), true;
        } catch {
          return false;
        }
      }
      n$1(fa, "isDOMExceptionConstructor");
      function ca() {
        const e = $r == null ? undefined : $r.DOMException;
        return fa(e) ? e : undefined;
      }
      n$1(ca, "getFromGlobal");
      function da() {
        const e = n$1(function(r2, s) {
          this.message = r2 || "", this.name = s || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }, "DOMException");
        return h2(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
      }
      n$1(da, "createPolyfill");
      const ha2 = ca() || da();
      function oo2(e, t2, r2, s, f2, c) {
        const d = ze(e), p2 = xn(t2);
        e._disturbed = true;
        let R2 = false, y = T2(undefined);
        return A((C, P) => {
          let B;
          if (c !== undefined) {
            if (B = n$1(() => {
              const _ = c.reason !== undefined ? c.reason : new ha2("Aborted", "AbortError"), v = [];
              s || v.push(() => t2._state === "writable" ? Bt2(t2, _) : T2(undefined)), f2 || v.push(() => e._state === "readable" ? X2(e, _) : T2(undefined)), x(() => Promise.all(v.map((W2) => W2())), true, _);
            }, "abortAlgorithm"), c.aborted) {
              B();
              return;
            }
            c.addEventListener("abort", B);
          }
          function ee() {
            return A((_, v) => {
              function W2(Y) {
                Y ? _() : q(Ne(), W2, v);
              }
              n$1(W2, "next"), W2(false);
            });
          }
          n$1(ee, "pipeLoop");
          function Ne() {
            return R2 ? T2(true) : q(p2._readyPromise, () => A((_, v) => {
              et2(d, { _chunkSteps: n$1((W2) => {
                y = q(Gn2(p2, W2), undefined, l), _(false);
              }, "_chunkSteps"), _closeSteps: n$1(() => _(true), "_closeSteps"), _errorSteps: v });
            }));
          }
          if (n$1(Ne, "pipeStep"), me(e, d._closedPromise, (_) => (s ? K2(true, _) : x(() => Bt2(t2, _), true, _), null)), me(t2, p2._closedPromise, (_) => (f2 ? K2(true, _) : x(() => X2(e, _), true, _), null)), U(e, d._closedPromise, () => (r2 ? K2() : x(() => Zi2(p2)), null)), oe(t2) || t2._state === "closed") {
            const _ = new TypeError("the destination writable stream closed before all data could be piped to it");
            f2 ? K2(true, _) : x(() => X2(e, _), true, _);
          }
          Q2(ee());
          function Ee() {
            const _ = y;
            return q(y, () => _ !== y ? Ee() : undefined);
          }
          n$1(Ee, "waitForWritesToFinish");
          function me(_, v, W2) {
            _._state === "errored" ? W2(_._storedError) : I(v, W2);
          }
          n$1(me, "isOrBecomesErrored");
          function U(_, v, W2) {
            _._state === "closed" ? W2() : V(v, W2);
          }
          n$1(U, "isOrBecomesClosed");
          function x(_, v, W2) {
            if (R2) return;
            R2 = true, t2._state === "writable" && !oe(t2) ? V(Ee(), Y) : Y();
            function Y() {
              return g(_(), () => be2(v, W2), (He) => be2(true, He)), null;
            }
            n$1(Y, "doTheRest");
          }
          n$1(x, "shutdownWithAction");
          function K2(_, v) {
            R2 || (R2 = true, t2._state === "writable" && !oe(t2) ? V(Ee(), () => be2(_, v)) : be2(_, v));
          }
          n$1(K2, "shutdown");
          function be2(_, v) {
            return Yn2(p2), ue(d), c !== undefined && c.removeEventListener("abort", B), _ ? P(v) : C(undefined), null;
          }
          n$1(be2, "finalize");
        });
      }
      n$1(oo2, "ReadableStreamPipeTo");
      const _he = class _he {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!zt2(this)) throw Lt2("desiredSize");
          return Mr(this);
        }
        close() {
          if (!zt2(this)) throw Lt2("close");
          if (!Ue2(this)) throw new TypeError("The stream is not in a state that permits close");
          Oe(this);
        }
        enqueue(t2 = undefined) {
          if (!zt2(this)) throw Lt2("enqueue");
          if (!Ue2(this)) throw new TypeError("The stream is not in a state that permits enqueue");
          return Me2(this, t2);
        }
        error(t2 = undefined) {
          if (!zt2(this)) throw Lt2("error");
          J(this, t2);
        }
        [ar](t2) {
          Se(this);
          const r2 = this._cancelAlgorithm(t2);
          return jt2(this), r2;
        }
        [sr2](t2) {
          const r2 = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const s = wr(this);
            this._closeRequested && this._queue.length === 0 ? (jt2(this), lt(r2)) : st(this), t2._chunkSteps(s);
          } else hn(r2, t2), st(this);
        }
        [ur2]() {
        }
      };
      n$1(_he, "ReadableStreamDefaultController");
      let he2 = _he;
      Object.defineProperties(he2.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h2(he2.prototype.close, "close"), h2(he2.prototype.enqueue, "enqueue"), h2(he2.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(he2.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
      function zt2(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof he2;
      }
      n$1(zt2, "IsReadableStreamDefaultController");
      function st(e) {
        if (!io(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r2 = e._pullAlgorithm();
        g(r2, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, st(e)), null), (s) => (J(e, s), null));
      }
      n$1(st, "ReadableStreamDefaultControllerCallPullIfNeeded");
      function io(e) {
        const t2 = e._controlledReadableStream;
        return !Ue2(e) || !e._started ? false : !!(Ce(t2) && gt2(t2) > 0 || Mr(e) > 0);
      }
      n$1(io, "ReadableStreamDefaultControllerShouldCallPull");
      function jt2(e) {
        e._pullAlgorithm = undefined, e._cancelAlgorithm = undefined, e._strategySizeAlgorithm = undefined;
      }
      n$1(jt2, "ReadableStreamDefaultControllerClearAlgorithms");
      function Oe(e) {
        if (!Ue2(e)) return;
        const t2 = e._controlledReadableStream;
        e._closeRequested = true, e._queue.length === 0 && (jt2(e), lt(t2));
      }
      n$1(Oe, "ReadableStreamDefaultControllerClose");
      function Me2(e, t2) {
        if (!Ue2(e)) return;
        const r2 = e._controlledReadableStream;
        if (Ce(r2) && gt2(r2) > 0) pr(r2, t2, false);
        else {
          let s;
          try {
            s = e._strategySizeAlgorithm(t2);
          } catch (f2) {
            throw J(e, f2), f2;
          }
          try {
            Rr(e, t2, s);
          } catch (f2) {
            throw J(e, f2), f2;
          }
        }
        st(e);
      }
      n$1(Me2, "ReadableStreamDefaultControllerEnqueue");
      function J(e, t2) {
        const r2 = e._controlledReadableStream;
        r2._state === "readable" && (Se(e), jt2(e), lo2(r2, t2));
      }
      n$1(J, "ReadableStreamDefaultControllerError");
      function Mr(e) {
        const t2 = e._controlledReadableStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n$1(Mr, "ReadableStreamDefaultControllerGetDesiredSize");
      function ma(e) {
        return !io(e);
      }
      n$1(ma, "ReadableStreamDefaultControllerHasBackpressure");
      function Ue2(e) {
        const t2 = e._controlledReadableStream._state;
        return !e._closeRequested && t2 === "readable";
      }
      n$1(Ue2, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
      function ao2(e, t2, r2, s, f2, c, d) {
        t2._controlledReadableStream = e, t2._queue = undefined, t2._queueTotalSize = undefined, Se(t2), t2._started = false, t2._closeRequested = false, t2._pullAgain = false, t2._pulling = false, t2._strategySizeAlgorithm = d, t2._strategyHWM = c, t2._pullAlgorithm = s, t2._cancelAlgorithm = f2, e._readableStreamController = t2;
        const p2 = r2();
        g(T2(p2), () => (t2._started = true, st(t2), null), (R2) => (J(t2, R2), null));
      }
      n$1(ao2, "SetUpReadableStreamDefaultController");
      function ba2(e, t2, r2, s) {
        const f2 = Object.create(he2.prototype);
        let c, d, p2;
        t2.start !== undefined ? c = n$1(() => t2.start(f2), "startAlgorithm") : c = n$1(() => {
        }, "startAlgorithm"), t2.pull !== undefined ? d = n$1(() => t2.pull(f2), "pullAlgorithm") : d = n$1(() => T2(undefined), "pullAlgorithm"), t2.cancel !== undefined ? p2 = n$1((R2) => t2.cancel(R2), "cancelAlgorithm") : p2 = n$1(() => T2(undefined), "cancelAlgorithm"), ao2(e, f2, c, d, p2, r2, s);
      }
      n$1(ba2, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
      function Lt2(e) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
      }
      n$1(Lt2, "defaultControllerBrandCheckException$1");
      function pa(e, t2) {
        return Ae2(e._readableStreamController) ? ga2(e) : ya2(e);
      }
      n$1(pa, "ReadableStreamTee");
      function ya2(e, t2) {
        const r2 = ze(e);
        let s = false, f2 = false, c = false, d = false, p2, R2, y, C, P;
        const B = A((U) => {
          P = U;
        });
        function ee() {
          return s ? (f2 = true, T2(undefined)) : (s = true, et2(r2, { _chunkSteps: n$1((x) => {
            se(() => {
              f2 = false;
              const K2 = x, be2 = x;
              c || Me2(y._readableStreamController, K2), d || Me2(C._readableStreamController, be2), s = false, f2 && ee();
            });
          }, "_chunkSteps"), _closeSteps: n$1(() => {
            s = false, c || Oe(y._readableStreamController), d || Oe(C._readableStreamController), (!c || !d) && P(undefined);
          }, "_closeSteps"), _errorSteps: n$1(() => {
            s = false;
          }, "_errorSteps") }), T2(undefined));
        }
        n$1(ee, "pullAlgorithm");
        function Ne(U) {
          if (c = true, p2 = U, d) {
            const x = tt2([p2, R2]), K2 = X2(e, x);
            P(K2);
          }
          return B;
        }
        n$1(Ne, "cancel1Algorithm");
        function Ee(U) {
          if (d = true, R2 = U, c) {
            const x = tt2([p2, R2]), K2 = X2(e, x);
            P(K2);
          }
          return B;
        }
        n$1(Ee, "cancel2Algorithm");
        function me() {
        }
        return n$1(me, "startAlgorithm"), y = ut(me, ee, Ne), C = ut(me, ee, Ee), I(r2._closedPromise, (U) => (J(y._readableStreamController, U), J(C._readableStreamController, U), (!c || !d) && P(undefined), null)), [y, C];
      }
      n$1(ya2, "ReadableStreamDefaultTee");
      function ga2(e) {
        let t2 = ze(e), r2 = false, s = false, f2 = false, c = false, d = false, p2, R2, y, C, P;
        const B = A((_) => {
          P = _;
        });
        function ee(_) {
          I(_._closedPromise, (v) => (_ !== t2 || (Z(y._readableStreamController, v), Z(C._readableStreamController, v), (!c || !d) && P(undefined)), null));
        }
        n$1(ee, "forwardReaderError");
        function Ne() {
          We(t2) && (ue(t2), t2 = ze(e), ee(t2)), et2(t2, { _chunkSteps: n$1((v) => {
            se(() => {
              s = false, f2 = false;
              const W2 = v;
              let Y = v;
              if (!c && !d) try {
                Y = Cn2(v);
              } catch (He) {
                Z(y._readableStreamController, He), Z(C._readableStreamController, He), P(X2(e, He));
                return;
              }
              c || Tt2(y._readableStreamController, W2), d || Tt2(C._readableStreamController, Y), r2 = false, s ? me() : f2 && U();
            });
          }, "_chunkSteps"), _closeSteps: n$1(() => {
            r2 = false, c || rt(y._readableStreamController), d || rt(C._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Ct(y._readableStreamController, 0), C._readableStreamController._pendingPullIntos.length > 0 && Ct(C._readableStreamController, 0), (!c || !d) && P(undefined);
          }, "_closeSteps"), _errorSteps: n$1(() => {
            r2 = false;
          }, "_errorSteps") });
        }
        n$1(Ne, "pullWithDefaultReader");
        function Ee(_, v) {
          ge(t2) && (ue(t2), t2 = jn2(e), ee(t2));
          const W2 = v ? C : y, Y = v ? y : C;
          $n2(t2, _, 1, { _chunkSteps: n$1((Ve) => {
            se(() => {
              s = false, f2 = false;
              const Qe2 = v ? d : c;
              if (v ? c : d) Qe2 || Pt(W2._readableStreamController, Ve);
              else {
                let To;
                try {
                  To = Cn2(Ve);
                } catch (Vr) {
                  Z(W2._readableStreamController, Vr), Z(Y._readableStreamController, Vr), P(X2(e, Vr));
                  return;
                }
                Qe2 || Pt(W2._readableStreamController, Ve), Tt2(Y._readableStreamController, To);
              }
              r2 = false, s ? me() : f2 && U();
            });
          }, "_chunkSteps"), _closeSteps: n$1((Ve) => {
            r2 = false;
            const Qe2 = v ? d : c, Vt2 = v ? c : d;
            Qe2 || rt(W2._readableStreamController), Vt2 || rt(Y._readableStreamController), Ve !== undefined && (Qe2 || Pt(W2._readableStreamController, Ve), !Vt2 && Y._readableStreamController._pendingPullIntos.length > 0 && Ct(Y._readableStreamController, 0)), (!Qe2 || !Vt2) && P(undefined);
          }, "_closeSteps"), _errorSteps: n$1(() => {
            r2 = false;
          }, "_errorSteps") });
        }
        n$1(Ee, "pullWithBYOBReader");
        function me() {
          if (r2) return s = true, T2(undefined);
          r2 = true;
          const _ = vr(y._readableStreamController);
          return _ === null ? Ne() : Ee(_._view, false), T2(undefined);
        }
        n$1(me, "pull1Algorithm");
        function U() {
          if (r2) return f2 = true, T2(undefined);
          r2 = true;
          const _ = vr(C._readableStreamController);
          return _ === null ? Ne() : Ee(_._view, true), T2(undefined);
        }
        n$1(U, "pull2Algorithm");
        function x(_) {
          if (c = true, p2 = _, d) {
            const v = tt2([p2, R2]), W2 = X2(e, v);
            P(W2);
          }
          return B;
        }
        n$1(x, "cancel1Algorithm");
        function K2(_) {
          if (d = true, R2 = _, c) {
            const v = tt2([p2, R2]), W2 = X2(e, v);
            P(W2);
          }
          return B;
        }
        n$1(K2, "cancel2Algorithm");
        function be2() {
        }
        return n$1(be2, "startAlgorithm"), y = uo2(be2, me, x), C = uo2(be2, U, K2), ee(t2), [y, C];
      }
      n$1(ga2, "ReadableByteStreamTee");
      function _a3(e) {
        return u(e) && typeof e.getReader < "u";
      }
      n$1(_a3, "isReadableStreamLike");
      function Sa(e) {
        return _a3(e) ? Ra(e.getReader()) : wa2(e);
      }
      n$1(Sa, "ReadableStreamFrom");
      function wa2(e) {
        let t2;
        const r2 = Tn(e, "async"), s = l;
        function f2() {
          let d;
          try {
            d = di(r2);
          } catch (R2) {
            return b(R2);
          }
          const p2 = T2(d);
          return F(p2, (R2) => {
            if (!u(R2)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            if (hi(R2)) Oe(t2._readableStreamController);
            else {
              const C = mi2(R2);
              Me2(t2._readableStreamController, C);
            }
          });
        }
        n$1(f2, "pullAlgorithm");
        function c(d) {
          const p2 = r2.iterator;
          let R2;
          try {
            R2 = St(p2, "return");
          } catch (P) {
            return b(P);
          }
          if (R2 === undefined) return T2(undefined);
          let y;
          try {
            y = O2(R2, p2, [d]);
          } catch (P) {
            return b(P);
          }
          const C = T2(y);
          return F(C, (P) => {
            if (!u(P)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
          });
        }
        return n$1(c, "cancelAlgorithm"), t2 = ut(s, f2, c, 0), t2;
      }
      n$1(wa2, "ReadableStreamFromIterable");
      function Ra(e) {
        let t2;
        const r2 = l;
        function s() {
          let c;
          try {
            c = e.read();
          } catch (d) {
            return b(d);
          }
          return F(c, (d) => {
            if (!u(d)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
            if (d.done) Oe(t2._readableStreamController);
            else {
              const p2 = d.value;
              Me2(t2._readableStreamController, p2);
            }
          });
        }
        n$1(s, "pullAlgorithm");
        function f2(c) {
          try {
            return T2(e.cancel(c));
          } catch (d) {
            return b(d);
          }
        }
        return n$1(f2, "cancelAlgorithm"), t2 = ut(r2, s, f2, 0), t2;
      }
      n$1(Ra, "ReadableStreamFromDefaultReader");
      function Ta(e, t2) {
        ne2(e, t2);
        const r2 = e, s = r2 == null ? undefined : r2.autoAllocateChunkSize, f2 = r2 == null ? undefined : r2.cancel, c = r2 == null ? undefined : r2.pull, d = r2 == null ? undefined : r2.start, p2 = r2 == null ? undefined : r2.type;
        return { autoAllocateChunkSize: s === undefined ? undefined : mr(s, `${t2} has member 'autoAllocateChunkSize' that`), cancel: f2 === undefined ? undefined : Ca2(f2, r2, `${t2} has member 'cancel' that`), pull: c === undefined ? undefined : Pa2(c, r2, `${t2} has member 'pull' that`), start: d === undefined ? undefined : Ea2(d, r2, `${t2} has member 'start' that`), type: p2 === undefined ? undefined : va(p2, `${t2} has member 'type' that`) };
      }
      n$1(Ta, "convertUnderlyingDefaultOrByteSource");
      function Ca2(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Ca2, "convertUnderlyingSourceCancelCallback");
      function Pa2(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Pa2, "convertUnderlyingSourcePullCallback");
      function Ea2(e, t2, r2) {
        return G(e, r2), (s) => O2(e, t2, [s]);
      }
      n$1(Ea2, "convertUnderlyingSourceStartCallback");
      function va(e, t2) {
        if (e = `${e}`, e !== "bytes") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamType`);
        return e;
      }
      n$1(va, "convertReadableStreamType");
      function Aa2(e, t2) {
        return ne2(e, t2), { preventCancel: !!(e == null ? undefined : e.preventCancel) };
      }
      n$1(Aa2, "convertIteratorOptions");
      function so2(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.preventAbort, s = e == null ? undefined : e.preventCancel, f2 = e == null ? undefined : e.preventClose, c = e == null ? undefined : e.signal;
        return c !== undefined && Ba(c, `${t2} has member 'signal' that`), { preventAbort: !!r2, preventCancel: !!s, preventClose: !!f2, signal: c };
      }
      n$1(so2, "convertPipeOptions");
      function Ba(e, t2) {
        if (!ji2(e)) throw new TypeError(`${t2} is not an AbortSignal.`);
      }
      n$1(Ba, "assertAbortSignal");
      function Wa(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.readable;
        dr(r2, "readable", "ReadableWritablePair"), br(r2, `${t2} has member 'readable' that`);
        const s = e == null ? undefined : e.writable;
        return dr(s, "writable", "ReadableWritablePair"), Un(s, `${t2} has member 'writable' that`), { readable: r2, writable: s };
      }
      n$1(Wa, "convertReadableWritablePair");
      const _L = class _L {
        constructor(t2 = {}, r2 = {}) {
          t2 === undefined ? t2 = null : cn2(t2, "First parameter");
          const s = At2(r2, "Second parameter"), f2 = Ta(t2, "First parameter");
          if (Ur(this), f2.type === "bytes") {
            if (s.size !== undefined) throw new RangeError("The strategy for a byte stream cannot have a size function");
            const c = ot2(s, 0);
            Ci(this, f2, c);
          } else {
            const c = vt2(s), d = ot2(s, 1);
            ba2(this, f2, d, c);
          }
        }
        get locked() {
          if (!Te(this)) throw Ie2("locked");
          return Ce(this);
        }
        cancel(t2 = undefined) {
          return Te(this) ? Ce(this) ? b(new TypeError("Cannot cancel a stream that already has a reader")) : X2(this, t2) : b(Ie2("cancel"));
        }
        getReader(t2 = undefined) {
          if (!Te(this)) throw Ie2("getReader");
          return Ei2(t2, "First parameter").mode === undefined ? ze(this) : jn2(this);
        }
        pipeThrough(t2, r2 = {}) {
          if (!Te(this)) throw Ie2("pipeThrough");
          le(t2, 1, "pipeThrough");
          const s = Wa(t2, "First parameter"), f2 = so2(r2, "Second parameter");
          if (Ce(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (De(s.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const c = oo2(this, s.writable, f2.preventClose, f2.preventAbort, f2.preventCancel, f2.signal);
          return Q2(c), s.readable;
        }
        pipeTo(t2, r2 = {}) {
          if (!Te(this)) return b(Ie2("pipeTo"));
          if (t2 === undefined) return b("Parameter 1 is required in 'pipeTo'.");
          if (!Le2(t2)) return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let s;
          try {
            s = so2(r2, "Second parameter");
          } catch (f2) {
            return b(f2);
          }
          return Ce(this) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : De(t2) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : oo2(this, t2, s.preventClose, s.preventAbort, s.preventCancel, s.signal);
        }
        tee() {
          if (!Te(this)) throw Ie2("tee");
          const t2 = pa(this);
          return tt2(t2);
        }
        values(t2 = undefined) {
          if (!Te(this)) throw Ie2("values");
          const r2 = Aa2(t2, "First parameter");
          return fi(this, r2.preventCancel);
        }
        [Sr](t2) {
          return this.values(t2);
        }
        static from(t2) {
          return Sa(t2);
        }
      };
      n$1(_L, "ReadableStream");
      let L = _L;
      Object.defineProperties(L, { from: { enumerable: true } }), Object.defineProperties(L.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h2(L.from, "from"), h2(L.prototype.cancel, "cancel"), h2(L.prototype.getReader, "getReader"), h2(L.prototype.pipeThrough, "pipeThrough"), h2(L.prototype.pipeTo, "pipeTo"), h2(L.prototype.tee, "tee"), h2(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(L.prototype, Sr, { value: L.prototype.values, writable: true, configurable: true });
      function ut(e, t2, r2, s = 1, f2 = () => 1) {
        const c = Object.create(L.prototype);
        Ur(c);
        const d = Object.create(he2.prototype);
        return ao2(c, d, e, t2, r2, s, f2), c;
      }
      n$1(ut, "CreateReadableStream");
      function uo2(e, t2, r2) {
        const s = Object.create(L.prototype);
        Ur(s);
        const f2 = Object.create(ce.prototype);
        return zn(s, f2, e, t2, r2, 0, undefined), s;
      }
      n$1(uo2, "CreateReadableByteStream");
      function Ur(e) {
        e._state = "readable", e._reader = undefined, e._storedError = undefined, e._disturbed = false;
      }
      n$1(Ur, "InitializeReadableStream");
      function Te(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof L;
      }
      n$1(Te, "IsReadableStream");
      function Ce(e) {
        return e._reader !== undefined;
      }
      n$1(Ce, "IsReadableStreamLocked");
      function X2(e, t2) {
        if (e._disturbed = true, e._state === "closed") return T2(undefined);
        if (e._state === "errored") return b(e._storedError);
        lt(e);
        const r2 = e._reader;
        if (r2 !== undefined && We(r2)) {
          const f2 = r2._readIntoRequests;
          r2._readIntoRequests = new M(), f2.forEach((c) => {
            c._closeSteps(undefined);
          });
        }
        const s = e._readableStreamController[ar](t2);
        return F(s, l);
      }
      n$1(X2, "ReadableStreamCancel");
      function lt(e) {
        e._state = "closed";
        const t2 = e._reader;
        if (t2 !== undefined && (ln(t2), ge(t2))) {
          const r2 = t2._readRequests;
          t2._readRequests = new M(), r2.forEach((s) => {
            s._closeSteps();
          });
        }
      }
      n$1(lt, "ReadableStreamClose");
      function lo2(e, t2) {
        e._state = "errored", e._storedError = t2;
        const r2 = e._reader;
        r2 !== undefined && (cr2(r2, t2), ge(r2) ? bn(r2, t2) : Mn(r2, t2));
      }
      n$1(lo2, "ReadableStreamError");
      function Ie2(e) {
        return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
      }
      n$1(Ie2, "streamBrandCheckException$1");
      function fo2(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.highWaterMark;
        return dr(r2, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: hr(r2) };
      }
      n$1(fo2, "convertQueuingStrategyInit");
      const co = n$1((e) => e.byteLength, "byteLengthSizeFunction");
      h2(co, "size");
      const _Dt = class _Dt {
        constructor(t2) {
          le(t2, 1, "ByteLengthQueuingStrategy"), t2 = fo2(t2, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!mo(this)) throw ho("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!mo(this)) throw ho("size");
          return co;
        }
      };
      n$1(_Dt, "ByteLengthQueuingStrategy");
      let Dt2 = _Dt;
      Object.defineProperties(Dt2.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Dt2.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
      function ho(e) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
      }
      n$1(ho, "byteLengthBrandCheckException");
      function mo(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Dt2;
      }
      n$1(mo, "IsByteLengthQueuingStrategy");
      const bo = n$1(() => 1, "countSizeFunction");
      h2(bo, "size");
      const _$t = class _$t {
        constructor(t2) {
          le(t2, 1, "CountQueuingStrategy"), t2 = fo2(t2, "First parameter"), this._countQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!yo(this)) throw po("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!yo(this)) throw po("size");
          return bo;
        }
      };
      n$1(_$t, "CountQueuingStrategy");
      let $t = _$t;
      Object.defineProperties($t.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty($t.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
      function po(e) {
        return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
      }
      n$1(po, "countBrandCheckException");
      function yo(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof $t;
      }
      n$1(yo, "IsCountQueuingStrategy");
      function ka(e, t2) {
        ne2(e, t2);
        const r2 = e == null ? undefined : e.cancel, s = e == null ? undefined : e.flush, f2 = e == null ? undefined : e.readableType, c = e == null ? undefined : e.start, d = e == null ? undefined : e.transform, p2 = e == null ? undefined : e.writableType;
        return { cancel: r2 === undefined ? undefined : Fa(r2, e, `${t2} has member 'cancel' that`), flush: s === undefined ? undefined : qa2(s, e, `${t2} has member 'flush' that`), readableType: f2, start: c === undefined ? undefined : Oa2(c, e, `${t2} has member 'start' that`), transform: d === undefined ? undefined : Ia(d, e, `${t2} has member 'transform' that`), writableType: p2 };
      }
      n$1(ka, "convertTransformer");
      function qa2(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(qa2, "convertTransformerFlushCallback");
      function Oa2(e, t2, r2) {
        return G(e, r2), (s) => O2(e, t2, [s]);
      }
      n$1(Oa2, "convertTransformerStartCallback");
      function Ia(e, t2, r2) {
        return G(e, r2), (s, f2) => z(e, t2, [s, f2]);
      }
      n$1(Ia, "convertTransformerTransformCallback");
      function Fa(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Fa, "convertTransformerCancelCallback");
      const _Mt = class _Mt {
        constructor(t2 = {}, r2 = {}, s = {}) {
          t2 === undefined && (t2 = null);
          const f2 = At2(r2, "Second parameter"), c = At2(s, "Third parameter"), d = ka(t2, "First parameter");
          if (d.readableType !== undefined) throw new RangeError("Invalid readableType specified");
          if (d.writableType !== undefined) throw new RangeError("Invalid writableType specified");
          const p2 = ot2(c, 0), R2 = vt2(c), y = ot2(f2, 1), C = vt2(f2);
          let P;
          const B = A((ee) => {
            P = ee;
          });
          za(this, B, y, C, p2, R2), La(this, d), d.start !== undefined ? P(d.start(this._transformStreamController)) : P(undefined);
        }
        get readable() {
          if (!go(this)) throw Ro("readable");
          return this._readable;
        }
        get writable() {
          if (!go(this)) throw Ro("writable");
          return this._writable;
        }
      };
      n$1(_Mt, "TransformStream");
      let Mt2 = _Mt;
      Object.defineProperties(Mt2.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mt2.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
      function za(e, t2, r2, s, f2, c) {
        function d() {
          return t2;
        }
        n$1(d, "startAlgorithm");
        function p2(B) {
          return Ma(e, B);
        }
        n$1(p2, "writeAlgorithm");
        function R2(B) {
          return Ua2(e, B);
        }
        n$1(R2, "abortAlgorithm");
        function y() {
          return xa(e);
        }
        n$1(y, "closeAlgorithm"), e._writable = $i2(d, p2, y, R2, r2, s);
        function C() {
          return Na(e);
        }
        n$1(C, "pullAlgorithm");
        function P(B) {
          return Ha(e, B);
        }
        n$1(P, "cancelAlgorithm"), e._readable = ut(d, C, P, f2, c), e._backpressure = undefined, e._backpressureChangePromise = undefined, e._backpressureChangePromise_resolve = undefined, Ut2(e, true), e._transformStreamController = undefined;
      }
      n$1(za, "InitializeTransformStream");
      function go(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof Mt2;
      }
      n$1(go, "IsTransformStream");
      function _o(e, t2) {
        J(e._readable._readableStreamController, t2), xr(e, t2);
      }
      n$1(_o, "TransformStreamError");
      function xr(e, t2) {
        Nt2(e._transformStreamController), it(e._writable._writableStreamController, t2), Nr(e);
      }
      n$1(xr, "TransformStreamErrorWritableAndUnblockWrite");
      function Nr(e) {
        e._backpressure && Ut2(e, false);
      }
      n$1(Nr, "TransformStreamUnblockWrite");
      function Ut2(e, t2) {
        e._backpressureChangePromise !== undefined && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = A((r2) => {
          e._backpressureChangePromise_resolve = r2;
        }), e._backpressure = t2;
      }
      n$1(Ut2, "TransformStreamSetBackpressure");
      const _Pe = class _Pe {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!xt(this)) throw Ht("desiredSize");
          const t2 = this._controlledTransformStream._readable._readableStreamController;
          return Mr(t2);
        }
        enqueue(t2 = undefined) {
          if (!xt(this)) throw Ht("enqueue");
          So(this, t2);
        }
        error(t2 = undefined) {
          if (!xt(this)) throw Ht("error");
          Da2(this, t2);
        }
        terminate() {
          if (!xt(this)) throw Ht("terminate");
          $a2(this);
        }
      };
      n$1(_Pe, "TransformStreamDefaultController");
      let Pe2 = _Pe;
      Object.defineProperties(Pe2.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h2(Pe2.prototype.enqueue, "enqueue"), h2(Pe2.prototype.error, "error"), h2(Pe2.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Pe2.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
      function xt(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof Pe2;
      }
      n$1(xt, "IsTransformStreamDefaultController");
      function ja2(e, t2, r2, s, f2) {
        t2._controlledTransformStream = e, e._transformStreamController = t2, t2._transformAlgorithm = r2, t2._flushAlgorithm = s, t2._cancelAlgorithm = f2, t2._finishPromise = undefined, t2._finishPromise_resolve = undefined, t2._finishPromise_reject = undefined;
      }
      n$1(ja2, "SetUpTransformStreamDefaultController");
      function La(e, t2) {
        const r2 = Object.create(Pe2.prototype);
        let s, f2, c;
        t2.transform !== undefined ? s = n$1((d) => t2.transform(d, r2), "transformAlgorithm") : s = n$1((d) => {
          try {
            return So(r2, d), T2(void 0);
          } catch (p2) {
            return b(p2);
          }
        }, "transformAlgorithm"), t2.flush !== undefined ? f2 = n$1(() => t2.flush(r2), "flushAlgorithm") : f2 = n$1(() => T2(undefined), "flushAlgorithm"), t2.cancel !== undefined ? c = n$1((d) => t2.cancel(d), "cancelAlgorithm") : c = n$1(() => T2(undefined), "cancelAlgorithm"), ja2(e, r2, s, f2, c);
      }
      n$1(La, "SetUpTransformStreamDefaultControllerFromTransformer");
      function Nt2(e) {
        e._transformAlgorithm = undefined, e._flushAlgorithm = undefined, e._cancelAlgorithm = undefined;
      }
      n$1(Nt2, "TransformStreamDefaultControllerClearAlgorithms");
      function So(e, t2) {
        const r2 = e._controlledTransformStream, s = r2._readable._readableStreamController;
        if (!Ue2(s)) throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          Me2(s, t2);
        } catch (c) {
          throw xr(r2, c), r2._readable._storedError;
        }
        ma(s) !== r2._backpressure && Ut2(r2, true);
      }
      n$1(So, "TransformStreamDefaultControllerEnqueue");
      function Da2(e, t2) {
        _o(e._controlledTransformStream, t2);
      }
      n$1(Da2, "TransformStreamDefaultControllerError");
      function wo(e, t2) {
        const r2 = e._transformAlgorithm(t2);
        return F(r2, undefined, (s) => {
          throw _o(e._controlledTransformStream, s), s;
        });
      }
      n$1(wo, "TransformStreamDefaultControllerPerformTransform");
      function $a2(e) {
        const t2 = e._controlledTransformStream, r2 = t2._readable._readableStreamController;
        Oe(r2);
        const s = new TypeError("TransformStream terminated");
        xr(t2, s);
      }
      n$1($a2, "TransformStreamDefaultControllerTerminate");
      function Ma(e, t2) {
        const r2 = e._transformStreamController;
        if (e._backpressure) {
          const s = e._backpressureChangePromise;
          return F(s, () => {
            const f2 = e._writable;
            if (f2._state === "erroring") throw f2._storedError;
            return wo(r2, t2);
          });
        }
        return wo(r2, t2);
      }
      n$1(Ma, "TransformStreamDefaultSinkWriteAlgorithm");
      function Ua2(e, t2) {
        const r2 = e._transformStreamController;
        if (r2._finishPromise !== undefined) return r2._finishPromise;
        const s = e._readable;
        r2._finishPromise = A((c, d) => {
          r2._finishPromise_resolve = c, r2._finishPromise_reject = d;
        });
        const f2 = r2._cancelAlgorithm(t2);
        return Nt2(r2), g(f2, () => (s._state === "errored" ? xe2(r2, s._storedError) : (J(s._readableStreamController, t2), Hr2(r2)), null), (c) => (J(s._readableStreamController, c), xe2(r2, c), null)), r2._finishPromise;
      }
      n$1(Ua2, "TransformStreamDefaultSinkAbortAlgorithm");
      function xa(e) {
        const t2 = e._transformStreamController;
        if (t2._finishPromise !== undefined) return t2._finishPromise;
        const r2 = e._readable;
        t2._finishPromise = A((f2, c) => {
          t2._finishPromise_resolve = f2, t2._finishPromise_reject = c;
        });
        const s = t2._flushAlgorithm();
        return Nt2(t2), g(s, () => (r2._state === "errored" ? xe2(t2, r2._storedError) : (Oe(r2._readableStreamController), Hr2(t2)), null), (f2) => (J(r2._readableStreamController, f2), xe2(t2, f2), null)), t2._finishPromise;
      }
      n$1(xa, "TransformStreamDefaultSinkCloseAlgorithm");
      function Na(e) {
        return Ut2(e, false), e._backpressureChangePromise;
      }
      n$1(Na, "TransformStreamDefaultSourcePullAlgorithm");
      function Ha(e, t2) {
        const r2 = e._transformStreamController;
        if (r2._finishPromise !== undefined) return r2._finishPromise;
        const s = e._writable;
        r2._finishPromise = A((c, d) => {
          r2._finishPromise_resolve = c, r2._finishPromise_reject = d;
        });
        const f2 = r2._cancelAlgorithm(t2);
        return Nt2(r2), g(f2, () => (s._state === "errored" ? xe2(r2, s._storedError) : (it(s._writableStreamController, t2), Nr(e), Hr2(r2)), null), (c) => (it(s._writableStreamController, c), Nr(e), xe2(r2, c), null)), r2._finishPromise;
      }
      n$1(Ha, "TransformStreamDefaultSourceCancelAlgorithm");
      function Ht(e) {
        return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
      }
      n$1(Ht, "defaultControllerBrandCheckException");
      function Hr2(e) {
        e._finishPromise_resolve !== undefined && (e._finishPromise_resolve(), e._finishPromise_resolve = undefined, e._finishPromise_reject = undefined);
      }
      n$1(Hr2, "defaultControllerFinishPromiseResolve");
      function xe2(e, t2) {
        e._finishPromise_reject !== undefined && (Q2(e._finishPromise), e._finishPromise_reject(t2), e._finishPromise_resolve = undefined, e._finishPromise_reject = undefined);
      }
      n$1(xe2, "defaultControllerFinishPromiseReject");
      function Ro(e) {
        return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
      }
      n$1(Ro, "streamBrandCheckException"), a2.ByteLengthQueuingStrategy = Dt2, a2.CountQueuingStrategy = $t, a2.ReadableByteStreamController = ce, a2.ReadableStream = L, a2.ReadableStreamBYOBReader = we, a2.ReadableStreamBYOBRequest = ve, a2.ReadableStreamDefaultController = he2, a2.ReadableStreamDefaultReader = ye, a2.TransformStream = Mt2, a2.TransformStreamDefaultController = Pe2, a2.WritableStream = Re, a2.WritableStreamDefaultController = $e2, a2.WritableStreamDefaultWriter = de;
    });
  }(ct$1, ct$1.exports)), ct$1.exports;
}
n$1(ns$1, "requirePonyfill_es2018");
var Ao;
function os() {
  if (Ao) return Eo$1;
  Ao = 1;
  const i = 65536;
  if (!globalThis.ReadableStream) try {
    const o2 = require("node:process"), { emitWarning: a2 } = o2;
    try {
      o2.emitWarning = () => {
      }, Object.assign(globalThis, require("node:stream/web")), o2.emitWarning = a2;
    } catch (l) {
      throw o2.emitWarning = a2, l;
    }
  } catch {
    Object.assign(globalThis, ns$1());
  }
  try {
    const { Blob: o2 } = require("buffer");
    o2 && !o2.prototype.stream && (o2.prototype.stream = n$1(function(l) {
      let u = 0;
      const m = this;
      return new ReadableStream({ type: "bytes", async pull(h2) {
        const E = await m.slice(u, Math.min(m.size, u + i)).arrayBuffer();
        u += E.byteLength, h2.enqueue(new Uint8Array(E)), u === m.size && h2.close();
      } });
    }, "name"));
  } catch {
  }
  return Eo$1;
}
n$1(os, "requireStreams"), os();
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
const Bo = 65536;
async function* Qr(i, o2 = true) {
  for (const a2 of i) if ("stream" in a2) yield* a2.stream();
  else if (ArrayBuffer.isView(a2)) if (o2) {
    let l = a2.byteOffset;
    const u = a2.byteOffset + a2.byteLength;
    for (; l !== u; ) {
      const m = Math.min(u - l, Bo), h2 = a2.buffer.slice(l, l + m);
      l += h2.byteLength, yield new Uint8Array(h2);
    }
  } else yield a2;
  else {
    let l = 0, u = a2;
    for (; l !== u.size; ) {
      const h2 = await u.slice(l, Math.min(u.size, l + Bo)).arrayBuffer();
      l += h2.byteLength, yield new Uint8Array(h2);
    }
  }
}
n$1(Qr, "toIterator");
const Wo = (_a = class {
  constructor(o2 = [], a2 = {}) {
    __privateAdd(this, _e2, []);
    __privateAdd(this, _t2, "");
    __privateAdd(this, _r, 0);
    __privateAdd(this, _n2, "transparent");
    if (typeof o2 != "object" || o2 === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof o2[Symbol.iterator] != "function") throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof a2 != "object" && typeof a2 != "function") throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    a2 === null && (a2 = {});
    const l = new TextEncoder();
    for (const m of o2) {
      let h2;
      ArrayBuffer.isView(m) ? h2 = new Uint8Array(m.buffer.slice(m.byteOffset, m.byteOffset + m.byteLength)) : m instanceof ArrayBuffer ? h2 = new Uint8Array(m.slice(0)) : m instanceof _a ? h2 = m : h2 = l.encode(`${m}`), __privateSet(this, _r, __privateGet(this, _r) + (ArrayBuffer.isView(h2) ? h2.byteLength : h2.size)), __privateGet(this, _e2).push(h2);
    }
    __privateSet(this, _n2, `${a2.endings === undefined ? "transparent" : a2.endings}`);
    const u = a2.type === undefined ? "" : String(a2.type);
    __privateSet(this, _t2, /^[\x20-\x7E]*$/.test(u) ? u : "");
  }
  get size() {
    return __privateGet(this, _r);
  }
  get type() {
    return __privateGet(this, _t2);
  }
  async text() {
    const o2 = new TextDecoder();
    let a2 = "";
    for await (const l of Qr(__privateGet(this, _e2), false)) a2 += o2.decode(l, { stream: true });
    return a2 += o2.decode(), a2;
  }
  async arrayBuffer() {
    const o2 = new Uint8Array(this.size);
    let a2 = 0;
    for await (const l of Qr(__privateGet(this, _e2), false)) o2.set(l, a2), a2 += l.length;
    return o2.buffer;
  }
  stream() {
    const o2 = Qr(__privateGet(this, _e2), true);
    return new globalThis.ReadableStream({ type: "bytes", async pull(a2) {
      const l = await o2.next();
      l.done ? a2.close() : a2.enqueue(l.value);
    }, async cancel() {
      await o2.return();
    } });
  }
  slice(o2 = 0, a2 = this.size, l = "") {
    const { size: u } = this;
    let m = o2 < 0 ? Math.max(u + o2, 0) : Math.min(o2, u), h2 = a2 < 0 ? Math.max(u + a2, 0) : Math.min(a2, u);
    const S = Math.max(h2 - m, 0), E = __privateGet(this, _e2), w = [];
    let A = 0;
    for (const b of E) {
      if (A >= S) break;
      const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
      if (m && q <= m) m -= q, h2 -= q;
      else {
        let g;
        ArrayBuffer.isView(b) ? (g = b.subarray(m, Math.min(q, h2)), A += g.byteLength) : (g = b.slice(m, Math.min(q, h2)), A += g.size), h2 -= q, w.push(g), m = 0;
      }
    }
    const T2 = new _a([], { type: String(l).toLowerCase() });
    return __privateSet(T2, _r, S), __privateSet(T2, _e2, w), T2;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](o2) {
    return o2 && typeof o2 == "object" && typeof o2.constructor == "function" && (typeof o2.stream == "function" || typeof o2.arrayBuffer == "function") && /^(Blob|File)$/.test(o2[Symbol.toStringTag]);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), _r = new WeakMap(), _n2 = new WeakMap(), n$1(_a, "Blob"), _a);
Object.defineProperties(Wo.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
const Ze = Wo, is = (_b = class extends Ze {
  constructor(o2, a2, l = {}) {
    if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(o2, l);
    __privateAdd(this, _e3, 0);
    __privateAdd(this, _t3, "");
    l === null && (l = {});
    const u = l.lastModified === undefined ? Date.now() : Number(l.lastModified);
    Number.isNaN(u) || __privateSet(this, _e3, u), __privateSet(this, _t3, String(a2));
  }
  get name() {
    return __privateGet(this, _t3);
  }
  get lastModified() {
    return __privateGet(this, _e3);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](o2) {
    return !!o2 && o2 instanceof Ze && /^(File)$/.test(o2[Symbol.toStringTag]);
  }
}, _e3 = new WeakMap(), _t3 = new WeakMap(), n$1(_b, "File"), _b), Yr = is;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: dt, iterator: as$1, hasInstance: ss } = Symbol, ko = Math.random, us$1 = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), qo = n$1((i, o2, a2) => (i += "", /^(Blob|File)$/.test(o2 && o2[dt]) ? [(a2 = a2 !== undefined ? a2 + "" : o2[dt] == "File" ? o2.name : "blob", i), o2.name !== a2 || o2[dt] == "blob" ? new Yr([o2], a2, o2) : o2] : [i, o2 + ""]), "f"), Gr = n$1((i, o2) => (o2 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), Fe = n$1((i, o2, a2) => {
  if (o2.length < a2) throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a2} arguments required, but only ${o2.length} present.`);
}, "x");
const Zt$1 = (_c = class {
  constructor(...o2) {
    __privateAdd(this, _e4, []);
    if (o2.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [dt]() {
    return "FormData";
  }
  [as$1]() {
    return this.entries();
  }
  static [ss](o2) {
    return o2 && typeof o2 == "object" && o2[dt] === "FormData" && !us$1.some((a2) => typeof o2[a2] != "function");
  }
  append(...o2) {
    Fe("append", arguments, 2), __privateGet(this, _e4).push(qo(...o2));
  }
  delete(o2) {
    Fe("delete", arguments, 1), o2 += "", __privateSet(this, _e4, __privateGet(this, _e4).filter(([a2]) => a2 !== o2));
  }
  get(o2) {
    Fe("get", arguments, 1), o2 += "";
    for (var a2 = __privateGet(this, _e4), l = a2.length, u = 0; u < l; u++) if (a2[u][0] === o2) return a2[u][1];
    return null;
  }
  getAll(o2, a2) {
    return Fe("getAll", arguments, 1), a2 = [], o2 += "", __privateGet(this, _e4).forEach((l) => l[0] === o2 && a2.push(l[1])), a2;
  }
  has(o2) {
    return Fe("has", arguments, 1), o2 += "", __privateGet(this, _e4).some((a2) => a2[0] === o2);
  }
  forEach(o2, a2) {
    Fe("forEach", arguments, 1);
    for (var [l, u] of this) o2.call(a2, u, l, this);
  }
  set(...o2) {
    Fe("set", arguments, 2);
    var a2 = [], l = true;
    o2 = qo(...o2), __privateGet(this, _e4).forEach((u) => {
      u[0] === o2[0] ? l && (l = !a2.push(o2)) : a2.push(u);
    }), l && a2.push(o2), __privateSet(this, _e4, a2);
  }
  *entries() {
    yield* __privateGet(this, _e4);
  }
  *keys() {
    for (var [o2] of this) yield o2;
  }
  *values() {
    for (var [, o2] of this) yield o2;
  }
}, _e4 = new WeakMap(), n$1(_c, "FormData"), _c);
function ls(i, o2 = Ze) {
  var a2 = `${ko()}${ko()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), l = [], u = `--${a2}\r
Content-Disposition: form-data; name="`;
  return i.forEach((m, h2) => typeof m == "string" ? l.push(u + Gr(h2) + `"\r
\r
${m.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : l.push(u + Gr(h2) + `"; filename="${Gr(m.name, 1)}"\r
Content-Type: ${m.type || "application/octet-stream"}\r
\r
`, m, `\r
`)), l.push(`--${a2}--`), new o2(l, { type: "multipart/form-data; boundary=" + a2 });
}
n$1(ls, "formDataToBlob");
const _Kt = class _Kt extends Error {
  constructor(o2, a2) {
    super(o2), Error.captureStackTrace(this, this.constructor), this.type = a2;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
n$1(_Kt, "FetchBaseError");
let Kt = _Kt;
const _te = class _te extends Kt {
  constructor(o2, a2, l) {
    super(o2, a2), l && (this.code = this.errno = l.code, this.erroredSysCall = l.syscall);
  }
};
n$1(_te, "FetchError");
let te = _te;
const Jt$1 = Symbol.toStringTag, Oo$1 = n$1((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[Jt$1] === "URLSearchParams", "isURLSearchParameters"), Xt$1 = n$1((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[Jt$1]), "isBlob"), fs = n$1((i) => typeof i == "object" && (i[Jt$1] === "AbortSignal" || i[Jt$1] === "EventTarget"), "isAbortSignal"), cs = n$1((i, o2) => {
  const a2 = new URL(o2).hostname, l = new URL(i).hostname;
  return a2 === l || a2.endsWith(`.${l}`);
}, "isDomainOrSubdomain"), ds = n$1((i, o2) => {
  const a2 = new URL(o2).protocol, l = new URL(i).protocol;
  return a2 === l;
}, "isSameProtocol"), hs$1 = promisify(ie.pipeline), N = Symbol("Body internals");
const _ht = class _ht {
  constructor(o2, { size: a2 = 0 } = {}) {
    let l = null;
    o2 === null ? o2 = null : Oo$1(o2) ? o2 = Buffer$1.from(o2.toString()) : Xt$1(o2) || Buffer$1.isBuffer(o2) || (types.isAnyArrayBuffer(o2) ? o2 = Buffer$1.from(o2) : ArrayBuffer.isView(o2) ? o2 = Buffer$1.from(o2.buffer, o2.byteOffset, o2.byteLength) : o2 instanceof ie || (o2 instanceof Zt$1 ? (o2 = ls(o2), l = o2.type.split("=")[1]) : o2 = Buffer$1.from(String(o2))));
    let u = o2;
    Buffer$1.isBuffer(o2) ? u = ie.Readable.from(o2) : Xt$1(o2) && (u = ie.Readable.from(o2.stream())), this[N] = { body: o2, stream: u, boundary: l, disturbed: false, error: null }, this.size = a2, o2 instanceof ie && o2.on("error", (m) => {
      const h2 = m instanceof Kt ? m : new te(`Invalid response body while trying to fetch ${this.url}: ${m.message}`, "system", m);
      this[N].error = h2;
    });
  }
  get body() {
    return this[N].stream;
  }
  get bodyUsed() {
    return this[N].disturbed;
  }
  async arrayBuffer() {
    const { buffer: o2, byteOffset: a2, byteLength: l } = await Zr(this);
    return o2.slice(a2, a2 + l);
  }
  async formData() {
    const o2 = this.headers.get("content-type");
    if (o2.startsWith("application/x-www-form-urlencoded")) {
      const l = new Zt$1(), u = new URLSearchParams(await this.text());
      for (const [m, h2] of u) l.append(m, h2);
      return l;
    }
    const { toFormData: a2 } = await import('./multipart-parser-CacljP02.mjs');
    return a2(this.body, o2);
  }
  async blob() {
    const o2 = this.headers && this.headers.get("content-type") || this[N].body && this[N].body.type || "", a2 = await this.arrayBuffer();
    return new Ze([a2], { type: o2 });
  }
  async json() {
    const o2 = await this.text();
    return JSON.parse(o2);
  }
  async text() {
    const o2 = await Zr(this);
    return new TextDecoder().decode(o2);
  }
  buffer() {
    return Zr(this);
  }
};
n$1(_ht, "Body");
let ht = _ht;
ht.prototype.buffer = deprecate(ht.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(ht.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: deprecate(() => {
}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
async function Zr(i) {
  if (i[N].disturbed) throw new TypeError(`body used already for: ${i.url}`);
  if (i[N].disturbed = true, i[N].error) throw i[N].error;
  const { body: o2 } = i;
  if (o2 === null) return Buffer$1.alloc(0);
  if (!(o2 instanceof ie)) return Buffer$1.alloc(0);
  const a2 = [];
  let l = 0;
  try {
    for await (const u of o2) {
      if (i.size > 0 && l + u.length > i.size) {
        const m = new te(`content size at ${i.url} over limit: ${i.size}`, "max-size");
        throw o2.destroy(m), m;
      }
      l += u.length, a2.push(u);
    }
  } catch (u) {
    throw u instanceof Kt ? u : new te(`Invalid response body while trying to fetch ${i.url}: ${u.message}`, "system", u);
  }
  if (o2.readableEnded === true || o2._readableState.ended === true) try {
    return a2.every((u) => typeof u == "string") ? Buffer$1.from(a2.join("")) : Buffer$1.concat(a2, l);
  } catch (u) {
    throw new te(`Could not create Buffer from response body for ${i.url}: ${u.message}`, "system", u);
  }
  else throw new te(`Premature close of server response while trying to fetch ${i.url}`);
}
n$1(Zr, "consumeBody");
const Kr$1 = n$1((i, o2) => {
  let a2, l, { body: u } = i[N];
  if (i.bodyUsed) throw new Error("cannot clone body after it is used");
  return u instanceof ie && typeof u.getBoundary != "function" && (a2 = new PassThrough({ highWaterMark: o2 }), l = new PassThrough({ highWaterMark: o2 }), u.pipe(a2), u.pipe(l), i[N].stream = a2, u = l), u;
}, "clone"), ms = deprecate((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), Io = n$1((i, o2) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : Oo$1(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : Xt$1(i) ? i.type || null : Buffer$1.isBuffer(i) || types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof Zt$1 ? `multipart/form-data; boundary=${o2[N].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${ms(i)}` : i instanceof ie ? null : "text/plain;charset=UTF-8", "extractContentType"), bs$1 = n$1((i) => {
  const { body: o2 } = i[N];
  return o2 === null ? 0 : Xt$1(o2) ? o2.size : Buffer$1.isBuffer(o2) ? o2.length : o2 && typeof o2.getLengthSync == "function" && o2.hasKnownLength && o2.hasKnownLength() ? o2.getLengthSync() : null;
}, "getTotalBytes"), ps = n$1(async (i, { body: o2 }) => {
  o2 === null ? i.end() : await hs$1(o2, i);
}, "writeToStream"), er = typeof ft.validateHeaderName == "function" ? ft.validateHeaderName : (i) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
    const o2 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
    throw Object.defineProperty(o2, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o2;
  }
}, Jr = typeof ft.validateHeaderValue == "function" ? ft.validateHeaderValue : (i, o2) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o2)) {
    const a2 = new TypeError(`Invalid character in header content ["${i}"]`);
    throw Object.defineProperty(a2, "code", { value: "ERR_INVALID_CHAR" }), a2;
  }
};
const _ae = class _ae extends URLSearchParams {
  constructor(o2) {
    let a2 = [];
    if (o2 instanceof _ae) {
      const l = o2.raw();
      for (const [u, m] of Object.entries(l)) a2.push(...m.map((h2) => [u, h2]));
    } else if (o2 != null) if (typeof o2 == "object" && !types.isBoxedPrimitive(o2)) {
      const l = o2[Symbol.iterator];
      if (l == null) a2.push(...Object.entries(o2));
      else {
        if (typeof l != "function") throw new TypeError("Header pairs must be iterable");
        a2 = [...o2].map((u) => {
          if (typeof u != "object" || types.isBoxedPrimitive(u)) throw new TypeError("Each header pair must be an iterable object");
          return [...u];
        }).map((u) => {
          if (u.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
          return [...u];
        });
      }
    } else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return a2 = a2.length > 0 ? a2.map(([l, u]) => (er(l), Jr(l, String(u)), [String(l).toLowerCase(), String(u)])) : undefined, super(a2), new Proxy(this, { get(l, u, m) {
      switch (u) {
        case "append":
        case "set":
          return (h2, S) => (er(h2), Jr(h2, String(S)), URLSearchParams.prototype[u].call(l, String(h2).toLowerCase(), String(S)));
        case "delete":
        case "has":
        case "getAll":
          return (h2) => (er(h2), URLSearchParams.prototype[u].call(l, String(h2).toLowerCase()));
        case "keys":
          return () => (l.sort(), new Set(URLSearchParams.prototype.keys.call(l)).keys());
        default:
          return Reflect.get(l, u, m);
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
    const a2 = this.getAll(o2);
    if (a2.length === 0) return null;
    let l = a2.join(", ");
    return /^content-encoding$/i.test(o2) && (l = l.toLowerCase()), l;
  }
  forEach(o2, a2 = undefined) {
    for (const l of this.keys()) Reflect.apply(o2, a2, [this.get(l), l, this]);
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
    return [...this.keys()].reduce((o2, a2) => (o2[a2] = this.getAll(a2), o2), {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((o2, a2) => {
      const l = this.getAll(a2);
      return a2 === "host" ? o2[a2] = l[0] : o2[a2] = l.length > 1 ? l : l[0], o2;
    }, {});
  }
};
n$1(_ae, "Headers");
let ae = _ae;
Object.defineProperties(ae.prototype, ["get", "entries", "forEach", "values"].reduce((i, o2) => (i[o2] = { enumerable: true }, i), {}));
function ys$1(i = []) {
  return new ae(i.reduce((o2, a2, l, u) => (l % 2 === 0 && o2.push(u.slice(l, l + 2)), o2), []).filter(([o2, a2]) => {
    try {
      return er(o2), Jr(o2, String(a2)), true;
    } catch {
      return false;
    }
  }));
}
n$1(ys$1, "fromRawHeaders");
const gs$1 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Xr = n$1((i) => gs$1.has(i), "isRedirect"), re = Symbol("Response internals");
let H$1 = (_d = class extends ht {
  constructor(o2 = null, a2 = {}) {
    super(o2, a2);
    const l = a2.status != null ? a2.status : 200, u = new ae(a2.headers);
    if (o2 !== null && !u.has("Content-Type")) {
      const m = Io(o2, this);
      m && u.append("Content-Type", m);
    }
    this[re] = { type: "default", url: a2.url, status: l, statusText: a2.statusText || "", headers: u, counter: a2.counter, highWaterMark: a2.highWaterMark };
  }
  get type() {
    return this[re].type;
  }
  get url() {
    return this[re].url || "";
  }
  get status() {
    return this[re].status;
  }
  get ok() {
    return this[re].status >= 200 && this[re].status < 300;
  }
  get redirected() {
    return this[re].counter > 0;
  }
  get statusText() {
    return this[re].statusText;
  }
  get headers() {
    return this[re].headers;
  }
  get highWaterMark() {
    return this[re].highWaterMark;
  }
  clone() {
    return new _d(Kr$1(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
  }
  static redirect(o2, a2 = 302) {
    if (!Xr(a2)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new _d(null, { headers: { location: new URL(o2).toString() }, status: a2 });
  }
  static error() {
    const o2 = new _d(null, { status: 0, statusText: "" });
    return o2[re].type = "error", o2;
  }
  static json(o2 = undefined, a2 = {}) {
    const l = JSON.stringify(o2);
    if (l === undefined) throw new TypeError("data is not JSON serializable");
    const u = new ae(a2 && a2.headers);
    return u.has("content-type") || u.set("content-type", "application/json"), new _d(l, { ...a2, headers: u });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
}, n$1(_d, "Response"), _d);
Object.defineProperties(H$1.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
const _s$1 = n$1((i) => {
  if (i.search) return i.search;
  const o2 = i.href.length - 1, a2 = i.hash || (i.href[o2] === "#" ? "#" : "");
  return i.href[o2 - a2.length] === "?" ? "?" : "";
}, "getSearch");
function Fo(i, o2 = false) {
  return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o2 && (i.pathname = "", i.search = ""), i);
}
n$1(Fo, "stripURLForUseAsAReferrer");
const zo = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]), Ss = "strict-origin-when-cross-origin";
function ws$1(i) {
  if (!zo.has(i)) throw new TypeError(`Invalid referrerPolicy: ${i}`);
  return i;
}
n$1(ws$1, "validateReferrerPolicy");
function Rs(i) {
  if (/^(http|ws)s:$/.test(i.protocol)) return true;
  const o2 = i.host.replace(/(^\[)|(]$)/g, ""), a2 = isIP(o2);
  return a2 === 4 && /^127\./.test(o2) || a2 === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o2) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
}
n$1(Rs, "isOriginPotentiallyTrustworthy");
function Ke$1(i) {
  return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : Rs(i);
}
n$1(Ke$1, "isUrlPotentiallyTrustworthy");
function Ts$1(i, { referrerURLCallback: o2, referrerOriginCallback: a2 } = {}) {
  if (i.referrer === "no-referrer" || i.referrerPolicy === "") return null;
  const l = i.referrerPolicy;
  if (i.referrer === "about:client") return "no-referrer";
  const u = i.referrer;
  let m = Fo(u), h2 = Fo(u, true);
  m.toString().length > 4096 && (m = h2), o2 && (m = o2(m)), a2 && (h2 = a2(h2));
  const S = new URL(i.url);
  switch (l) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return h2;
    case "unsafe-url":
      return m;
    case "strict-origin":
      return Ke$1(m) && !Ke$1(S) ? "no-referrer" : h2.toString();
    case "strict-origin-when-cross-origin":
      return m.origin === S.origin ? m : Ke$1(m) && !Ke$1(S) ? "no-referrer" : h2;
    case "same-origin":
      return m.origin === S.origin ? m : "no-referrer";
    case "origin-when-cross-origin":
      return m.origin === S.origin ? m : h2;
    case "no-referrer-when-downgrade":
      return Ke$1(m) && !Ke$1(S) ? "no-referrer" : m;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${l}`);
  }
}
n$1(Ts$1, "determineRequestsReferrer");
function Cs$1(i) {
  const o2 = (i.get("referrer-policy") || "").split(/[,\s]+/);
  let a2 = "";
  for (const l of o2) l && zo.has(l) && (a2 = l);
  return a2;
}
n$1(Cs$1, "parseReferrerPolicyFromHeader");
const j = Symbol("Request internals"), mt = n$1((i) => typeof i == "object" && typeof i[j] == "object", "isRequest"), Ps = deprecate(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
let Xe$1 = (_e = class extends ht {
  constructor(o2, a2 = {}) {
    let l;
    if (mt(o2) ? l = new URL(o2.url) : (l = new URL(o2), o2 = {}), l.username !== "" || l.password !== "") throw new TypeError(`${l} is an url with embedded credentials.`);
    let u = a2.method || o2.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(u) && (u = u.toUpperCase()), !mt(a2) && "data" in a2 && Ps(), (a2.body != null || mt(o2) && o2.body !== null) && (u === "GET" || u === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
    const m = a2.body ? a2.body : mt(o2) && o2.body !== null ? Kr$1(o2) : null;
    super(m, { size: a2.size || o2.size || 0 });
    const h2 = new ae(a2.headers || o2.headers || {});
    if (m !== null && !h2.has("Content-Type")) {
      const w = Io(m, this);
      w && h2.set("Content-Type", w);
    }
    let S = mt(o2) ? o2.signal : null;
    if ("signal" in a2 && (S = a2.signal), S != null && !fs(S)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let E = a2.referrer == null ? o2.referrer : a2.referrer;
    if (E === "") E = "no-referrer";
    else if (E) {
      const w = new URL(E);
      E = /^about:(\/\/)?client$/.test(w) ? "client" : w;
    } else E = undefined;
    this[j] = { method: u, redirect: a2.redirect || o2.redirect || "follow", headers: h2, parsedURL: l, signal: S, referrer: E }, this.follow = a2.follow === undefined ? o2.follow === undefined ? 20 : o2.follow : a2.follow, this.compress = a2.compress === undefined ? o2.compress === undefined ? true : o2.compress : a2.compress, this.counter = a2.counter || o2.counter || 0, this.agent = a2.agent || o2.agent, this.highWaterMark = a2.highWaterMark || o2.highWaterMark || 16384, this.insecureHTTPParser = a2.insecureHTTPParser || o2.insecureHTTPParser || false, this.referrerPolicy = a2.referrerPolicy || o2.referrerPolicy || "";
  }
  get method() {
    return this[j].method;
  }
  get url() {
    return format(this[j].parsedURL);
  }
  get headers() {
    return this[j].headers;
  }
  get redirect() {
    return this[j].redirect;
  }
  get signal() {
    return this[j].signal;
  }
  get referrer() {
    if (this[j].referrer === "no-referrer") return "";
    if (this[j].referrer === "client") return "about:client";
    if (this[j].referrer) return this[j].referrer.toString();
  }
  get referrerPolicy() {
    return this[j].referrerPolicy;
  }
  set referrerPolicy(o2) {
    this[j].referrerPolicy = ws$1(o2);
  }
  clone() {
    return new _e(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
}, n$1(_e, "Request"), _e);
Object.defineProperties(Xe$1.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
const Es = n$1((i) => {
  const { parsedURL: o2 } = i[j], a2 = new ae(i[j].headers);
  a2.has("Accept") || a2.set("Accept", "*/*");
  let l = null;
  if (i.body === null && /^(post|put)$/i.test(i.method) && (l = "0"), i.body !== null) {
    const S = bs$1(i);
    typeof S == "number" && !Number.isNaN(S) && (l = String(S));
  }
  l && a2.set("Content-Length", l), i.referrerPolicy === "" && (i.referrerPolicy = Ss), i.referrer && i.referrer !== "no-referrer" ? i[j].referrer = Ts$1(i) : i[j].referrer = "no-referrer", i[j].referrer instanceof URL && a2.set("Referer", i.referrer), a2.has("User-Agent") || a2.set("User-Agent", "node-fetch"), i.compress && !a2.has("Accept-Encoding") && a2.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: u } = i;
  typeof u == "function" && (u = u(o2));
  const m = _s$1(o2), h2 = { path: o2.pathname + m, method: i.method, headers: a2[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: u };
  return { parsedURL: o2, options: h2 };
}, "getNodeRequestOptions");
let jo$1 = (_f = class extends Kt {
  constructor(o2, a2 = "aborted") {
    super(o2, a2);
  }
}, n$1(_f, "AbortError"), _f);
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var en$1, Lo;
function vs() {
  if (Lo) return en$1;
  if (Lo = 1, !globalThis.DOMException) try {
    const { MessageChannel: i } = require("worker_threads"), o2 = new i().port1, a2 = new ArrayBuffer();
    o2.postMessage(a2, [a2, a2]);
  } catch (i) {
    i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
  }
  return en$1 = globalThis.DOMException, en$1;
}
n$1(vs, "requireNodeDomexception");
var As = vs();
const Bs$1 = f(As), { stat: tn } = promises;
n$1((i, o2) => Do(statSync(i), i, o2), "blobFromSync");
n$1((i, o2) => tn(i).then((a2) => Do(a2, i, o2)), "blobFrom");
n$1((i, o2) => tn(i).then((a2) => $o$1(a2, i, o2)), "fileFrom");
n$1((i, o2) => $o$1(statSync(i), i, o2), "fileFromSync");
const Do = n$1((i, o2, a2 = "") => new Ze([new ir$1({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a2 }), "fromBlob"), $o$1 = n$1((i, o2, a2 = "") => new Yr([new ir$1({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], basename(o2), { type: a2, lastModified: i.mtimeMs }), "fromFile");
let ir$1 = (_g = class {
  constructor(o2) {
    __privateAdd(this, _e5);
    __privateAdd(this, _t4);
    __privateSet(this, _e5, o2.path), __privateSet(this, _t4, o2.start), this.size = o2.size, this.lastModified = o2.lastModified;
  }
  slice(o2, a2) {
    return new _g({ path: __privateGet(this, _e5), lastModified: this.lastModified, size: a2 - o2, start: __privateGet(this, _t4) + o2 });
  }
  async *stream() {
    const { mtimeMs: o2 } = await tn(__privateGet(this, _e5));
    if (o2 > this.lastModified) throw new Bs$1("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* createReadStream(__privateGet(this, _e5), { start: __privateGet(this, _t4), end: __privateGet(this, _t4) + this.size - 1 });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
}, _e5 = new WeakMap(), _t4 = new WeakMap(), n$1(_g, "BlobDataItem"), _g);
const Is$1 = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function Mo(i, o2) {
  return new Promise((a2, l) => {
    const u = new Xe$1(i, o2), { parsedURL: m, options: h2 } = Es(u);
    if (!Is$1.has(m.protocol)) throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${m.protocol.replace(/:$/, "")}" is not supported.`);
    if (m.protocol === "data:") {
      const g = ts$1(u.url), V = new H$1(g, { headers: { "Content-Type": g.typeFull } });
      a2(V);
      return;
    }
    const S = (m.protocol === "https:" ? Qa : ft).request, { signal: E } = u;
    let w = null;
    const A = n$1(() => {
      const g = new jo$1("The operation was aborted.");
      l(g), u.body && u.body instanceof ie.Readable && u.body.destroy(g), !(!w || !w.body) && w.body.emit("error", g);
    }, "abort");
    if (E && E.aborted) {
      A();
      return;
    }
    const T2 = n$1(() => {
      A(), q();
    }, "abortAndFinalize"), b = S(m.toString(), h2);
    E && E.addEventListener("abort", T2);
    const q = n$1(() => {
      b.abort(), E && E.removeEventListener("abort", T2);
    }, "finalize");
    b.on("error", (g) => {
      l(new te(`request to ${u.url} failed, reason: ${g.message}`, "system", g)), q();
    }), Fs(b, (g) => {
      w && w.body && w.body.destroy(g);
    }), process.version < "v14" && b.on("socket", (g) => {
      let V;
      g.prependListener("end", () => {
        V = g._eventsCount;
      }), g.prependListener("close", (I) => {
        if (w && V < g._eventsCount && !I) {
          const F = new Error("Premature close");
          F.code = "ERR_STREAM_PREMATURE_CLOSE", w.body.emit("error", F);
        }
      });
    }), b.on("response", (g) => {
      b.setTimeout(0);
      const V = ys$1(g.rawHeaders);
      if (Xr(g.statusCode)) {
        const O2 = V.get("Location");
        let z = null;
        try {
          z = O2 === null ? null : new URL(O2, u.url);
        } catch {
          if (u.redirect !== "manual") {
            l(new te(`uri requested responds with an invalid redirect URL: ${O2}`, "invalid-redirect")), q();
            return;
          }
        }
        switch (u.redirect) {
          case "error":
            l(new te(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`, "no-redirect")), q();
            return;
          case "manual":
            break;
          case "follow": {
            if (z === null) break;
            if (u.counter >= u.follow) {
              l(new te(`maximum redirect reached at: ${u.url}`, "max-redirect")), q();
              return;
            }
            const $ = { headers: new ae(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: Kr$1(u), signal: u.signal, size: u.size, referrer: u.referrer, referrerPolicy: u.referrerPolicy };
            if (!cs(u.url, z) || !ds(u.url, z)) for (const pt of ["authorization", "www-authenticate", "cookie", "cookie2"]) $.headers.delete(pt);
            if (g.statusCode !== 303 && u.body && o2.body instanceof ie.Readable) {
              l(new te("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
              return;
            }
            (g.statusCode === 303 || (g.statusCode === 301 || g.statusCode === 302) && u.method === "POST") && ($.method = "GET", $.body = undefined, $.headers.delete("content-length"));
            const M = Cs$1(V);
            M && ($.referrerPolicy = M), a2(Mo(new Xe$1(z, $))), q();
            return;
          }
          default:
            return l(new TypeError(`Redirect option '${u.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      E && g.once("end", () => {
        E.removeEventListener("abort", T2);
      });
      let I = pipeline(g, new PassThrough(), (O2) => {
        O2 && l(O2);
      });
      process.version < "v12.10" && g.on("aborted", T2);
      const F = { url: u.url, status: g.statusCode, statusText: g.statusMessage, headers: V, size: u.size, counter: u.counter, highWaterMark: u.highWaterMark }, Q2 = V.get("Content-Encoding");
      if (!u.compress || u.method === "HEAD" || Q2 === null || g.statusCode === 204 || g.statusCode === 304) {
        w = new H$1(I, F), a2(w);
        return;
      }
      const se = { flush: Ye$1.Z_SYNC_FLUSH, finishFlush: Ye$1.Z_SYNC_FLUSH };
      if (Q2 === "gzip" || Q2 === "x-gzip") {
        I = pipeline(I, Ye$1.createGunzip(se), (O2) => {
          O2 && l(O2);
        }), w = new H$1(I, F), a2(w);
        return;
      }
      if (Q2 === "deflate" || Q2 === "x-deflate") {
        const O2 = pipeline(g, new PassThrough(), (z) => {
          z && l(z);
        });
        O2.once("data", (z) => {
          (z[0] & 15) === 8 ? I = pipeline(I, Ye$1.createInflate(), ($) => {
            $ && l($);
          }) : I = pipeline(I, Ye$1.createInflateRaw(), ($) => {
            $ && l($);
          }), w = new H$1(I, F), a2(w);
        }), O2.once("end", () => {
          w || (w = new H$1(I, F), a2(w));
        });
        return;
      }
      if (Q2 === "br") {
        I = pipeline(I, Ye$1.createBrotliDecompress(), (O2) => {
          O2 && l(O2);
        }), w = new H$1(I, F), a2(w);
        return;
      }
      w = new H$1(I, F), a2(w);
    }), ps(b, u).catch(l);
  });
}
n$1(Mo, "fetch$1");
function Fs(i, o2) {
  const a2 = Buffer$1.from(`0\r
\r
`);
  let l = false, u = false, m;
  i.on("response", (h2) => {
    const { headers: S } = h2;
    l = S["transfer-encoding"] === "chunked" && !S["content-length"];
  }), i.on("socket", (h2) => {
    const S = n$1(() => {
      if (l && !u) {
        const w = new Error("Premature close");
        w.code = "ERR_STREAM_PREMATURE_CLOSE", o2(w);
      }
    }, "onSocketClose"), E = n$1((w) => {
      u = Buffer$1.compare(w.slice(-5), a2) === 0, !u && m && (u = Buffer$1.compare(m.slice(-3), a2.slice(0, 3)) === 0 && Buffer$1.compare(w.slice(-2), a2.slice(3)) === 0), m = w;
    }, "onData");
    h2.prependListener("close", S), h2.on("data", E), i.on("close", () => {
      h2.removeListener("close", S), h2.removeListener("data", E);
    });
  });
}
n$1(Fs, "fixResponseChunkedTransferBadEnding");
const Uo$1 = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
function k$1(i) {
  const o2 = Uo$1.get(i);
  return console.assert(o2 != null, "'this' is expected an Event object, but got", i), o2;
}
n$1(k$1, "pd");
function xo(i) {
  if (i.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
    return;
  }
  i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n$1(xo, "setCancelFlag");
function Je(i, o2) {
  Uo$1.set(this, { eventTarget: i, event: o2, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o2.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const a2 = Object.keys(o2);
  for (let l = 0; l < a2.length; ++l) {
    const u = a2[l];
    u in this || Object.defineProperty(this, u, No(u));
  }
}
n$1(Je, "Event"), Je.prototype = { get type() {
  return k$1(this).event.type;
}, get target() {
  return k$1(this).eventTarget;
}, get currentTarget() {
  return k$1(this).currentTarget;
}, composedPath() {
  const i = k$1(this).currentTarget;
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
  return k$1(this).eventPhase;
}, stopPropagation() {
  const i = k$1(this);
  i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
}, stopImmediatePropagation() {
  const i = k$1(this);
  i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
}, get bubbles() {
  return !!k$1(this).event.bubbles;
}, get cancelable() {
  return !!k$1(this).event.cancelable;
}, preventDefault() {
  xo(k$1(this));
}, get defaultPrevented() {
  return k$1(this).canceled;
}, get composed() {
  return !!k$1(this).event.composed;
}, get timeStamp() {
  return k$1(this).timeStamp;
}, get srcElement() {
  return k$1(this).eventTarget;
}, get cancelBubble() {
  return k$1(this).stopped;
}, set cancelBubble(i) {
  if (!i) return;
  const o2 = k$1(this);
  o2.stopped = true, typeof o2.event.cancelBubble == "boolean" && (o2.event.cancelBubble = true);
}, get returnValue() {
  return !k$1(this).canceled;
}, set returnValue(i) {
  i || xo(k$1(this));
}, initEvent() {
} }, Object.defineProperty(Je.prototype, "constructor", { value: Je, configurable: true, writable: true });
function No(i) {
  return { get() {
    return k$1(this).event[i];
  }, set(o2) {
    k$1(this).event[i] = o2;
  }, configurable: true, enumerable: true };
}
n$1(No, "defineRedirectDescriptor");
function zs(i) {
  return { value() {
    const o2 = k$1(this).event;
    return o2[i].apply(o2, arguments);
  }, configurable: true, enumerable: true };
}
n$1(zs, "defineCallDescriptor");
function js(i, o2) {
  const a2 = Object.keys(o2);
  if (a2.length === 0) return i;
  function l(u, m) {
    i.call(this, u, m);
  }
  n$1(l, "CustomEvent"), l.prototype = Object.create(i.prototype, { constructor: { value: l, configurable: true, writable: true } });
  for (let u = 0; u < a2.length; ++u) {
    const m = a2[u];
    if (!(m in i.prototype)) {
      const S = typeof Object.getOwnPropertyDescriptor(o2, m).value == "function";
      Object.defineProperty(l.prototype, m, S ? zs(m) : No(m));
    }
  }
  return l;
}
n$1(js, "defineWrapper");
function Ho(i) {
  if (i == null || i === Object.prototype) return Je;
  let o2 = rn.get(i);
  return o2 == null && (o2 = js(Ho(Object.getPrototypeOf(i)), i), rn.set(i, o2)), o2;
}
n$1(Ho, "getWrapper");
function Ls(i, o2) {
  const a2 = Ho(Object.getPrototypeOf(o2));
  return new a2(i, o2);
}
n$1(Ls, "wrapEvent");
function Ds(i) {
  return k$1(i).immediateStopped;
}
n$1(Ds, "isStopped");
function $s(i, o2) {
  k$1(i).eventPhase = o2;
}
n$1($s, "setEventPhase");
function Ms(i, o2) {
  k$1(i).currentTarget = o2;
}
n$1(Ms, "setCurrentTarget");
function Vo(i, o2) {
  k$1(i).passiveListener = o2;
}
n$1(Vo, "setPassiveListener");
const Qo = /* @__PURE__ */ new WeakMap(), Yo = 1, Go$1 = 2, tr = 3;
function rr(i) {
  return i !== null && typeof i == "object";
}
n$1(rr, "isObject");
function bt(i) {
  const o2 = Qo.get(i);
  if (o2 == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return o2;
}
n$1(bt, "getListeners");
function Us(i) {
  return { get() {
    let a2 = bt(this).get(i);
    for (; a2 != null; ) {
      if (a2.listenerType === tr) return a2.listener;
      a2 = a2.next;
    }
    return null;
  }, set(o2) {
    typeof o2 != "function" && !rr(o2) && (o2 = null);
    const a2 = bt(this);
    let l = null, u = a2.get(i);
    for (; u != null; ) u.listenerType === tr ? l !== null ? l.next = u.next : u.next !== null ? a2.set(i, u.next) : a2.delete(i) : l = u, u = u.next;
    if (o2 !== null) {
      const m = { listener: o2, listenerType: tr, passive: false, once: false, next: null };
      l === null ? a2.set(i, m) : l.next = m;
    }
  }, configurable: true, enumerable: true };
}
n$1(Us, "defineEventAttributeDescriptor");
function Zo$1(i, o2) {
  Object.defineProperty(i, `on${o2}`, Us(o2));
}
n$1(Zo$1, "defineEventAttribute");
function Ko(i) {
  function o2() {
    pe.call(this);
  }
  n$1(o2, "CustomEventTarget"), o2.prototype = Object.create(pe.prototype, { constructor: { value: o2, configurable: true, writable: true } });
  for (let a2 = 0; a2 < i.length; ++a2) Zo$1(o2.prototype, i[a2]);
  return o2;
}
n$1(Ko, "defineCustomEventTarget");
function pe() {
  if (this instanceof pe) {
    Qo.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0])) return Ko(arguments[0]);
  if (arguments.length > 0) {
    const i = new Array(arguments.length);
    for (let o2 = 0; o2 < arguments.length; ++o2) i[o2] = arguments[o2];
    return Ko(i);
  }
  throw new TypeError("Cannot call a class as a function");
}
n$1(pe, "EventTarget"), pe.prototype = { addEventListener(i, o2, a2) {
  if (o2 == null) return;
  if (typeof o2 != "function" && !rr(o2)) throw new TypeError("'listener' should be a function or an object.");
  const l = bt(this), u = rr(a2), h2 = (u ? !!a2.capture : !!a2) ? Yo : Go$1, S = { listener: o2, listenerType: h2, passive: u && !!a2.passive, once: u && !!a2.once, next: null };
  let E = l.get(i);
  if (E === undefined) {
    l.set(i, S);
    return;
  }
  let w = null;
  for (; E != null; ) {
    if (E.listener === o2 && E.listenerType === h2) return;
    w = E, E = E.next;
  }
  w.next = S;
}, removeEventListener(i, o2, a2) {
  if (o2 == null) return;
  const l = bt(this), m = (rr(a2) ? !!a2.capture : !!a2) ? Yo : Go$1;
  let h2 = null, S = l.get(i);
  for (; S != null; ) {
    if (S.listener === o2 && S.listenerType === m) {
      h2 !== null ? h2.next = S.next : S.next !== null ? l.set(i, S.next) : l.delete(i);
      return;
    }
    h2 = S, S = S.next;
  }
}, dispatchEvent(i) {
  if (i == null || typeof i.type != "string") throw new TypeError('"event.type" should be a string.');
  const o2 = bt(this), a2 = i.type;
  let l = o2.get(a2);
  if (l == null) return true;
  const u = Ls(this, i);
  let m = null;
  for (; l != null; ) {
    if (l.once ? m !== null ? m.next = l.next : l.next !== null ? o2.set(a2, l.next) : o2.delete(a2) : m = l, Vo(u, l.passive ? l.listener : null), typeof l.listener == "function") try {
      l.listener.call(this, u);
    } catch (h2) {
      typeof console < "u" && typeof console.error == "function" && console.error(h2);
    }
    else l.listenerType !== tr && typeof l.listener.handleEvent == "function" && l.listener.handleEvent(u);
    if (Ds(u)) break;
    l = l.next;
  }
  return Vo(u, null), $s(u, 0), Ms(u, null), !u.defaultPrevented;
} }, Object.defineProperty(pe.prototype, "constructor", { value: pe, configurable: true, writable: true });
const _nr = class _nr extends pe {
  constructor() {
    throw super(), new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const o2 = or.get(this);
    if (typeof o2 != "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    return o2;
  }
};
n$1(_nr, "AbortSignal");
let nr = _nr;
Zo$1(nr.prototype, "abort");
function xs() {
  const i = Object.create(nr.prototype);
  return pe.call(i), or.set(i, false), i;
}
n$1(xs, "createAbortSignal");
function Ns(i) {
  or.get(i) === false && (or.set(i, true), i.dispatchEvent({ type: "abort" }));
}
n$1(Ns, "abortSignal");
const or = /* @__PURE__ */ new WeakMap();
Object.defineProperties(nr.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(nr.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
let nn = (_h = class {
  constructor() {
    Jo.set(this, xs());
  }
  get signal() {
    return Xo$1(this);
  }
  abort() {
    Ns(Xo$1(this));
  }
}, n$1(_h, "AbortController"), _h);
const Jo = /* @__PURE__ */ new WeakMap();
function Xo$1(i) {
  const o2 = Jo.get(i);
  if (o2 == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
  return o2;
}
n$1(Xo$1, "getSignal"), Object.defineProperties(nn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(nn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
var Hs = Object.defineProperty, Vs = n$1((i, o2) => Hs(i, "name", { value: o2, configurable: true }), "e");
const ei$1 = Mo;
ti();
function ti() {
  var _a3, _b2, _c2, _d3;
  !((_b2 = (_a3 = globalThis.process) == null ? undefined : _a3.versions) == null ? undefined : _b2.node) && !((_d3 = (_c2 = globalThis.process) == null ? undefined : _c2.env) == null ? undefined : _d3.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n$1(ti, "s"), Vs(ti, "checkNodeEnvironment");
const o = !!((_j = (_i2 = globalThis.process) == null ? undefined : _i2.env) == null ? undefined : _j.FORCE_NODE_FETCH), r = !o && globalThis.fetch || ei$1, n = !o && globalThis.Headers || ae, T = !o && globalThis.AbortController || nn;
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
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key2 = decodeQueryKey(s[1]);
    if (key2 === "__proto__" || key2 === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
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
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
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
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
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
  var _a3, _b2, _c2, _d3, _e6;
  const errorMessage = ((_a3 = ctx.error) == null ? undefined : _a3.message) || ((_b2 = ctx.error) == null ? undefined : _b2.toString()) || "";
  const method = ((_c2 = ctx.request) == null ? undefined : _c2.method) || ((_d3 = ctx.options) == null ? undefined : _d3.method) || "GET";
  const url = ((_e6 = ctx.request) == null ? undefined : _e6.url) || String(ctx.request) || "/";
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
    const r2 = await $fetchRaw(request, options);
    return r2._data;
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
    return r;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new ft.Agent(agentOptions);
  const httpsAgent = new Qa.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return r(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers = globalThis.Headers || n;
const AbortController$1 = globalThis.AbortController || T;
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
        return "3.15.2";
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
  var _a3, _b2, _c2, _d3;
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
    if (((_c2 = nuxtApp.ssrContext) == null ? undefined : _c2.islandContext) && ((_d3 = plugin2.env) == null ? undefined : _d3.islands) === false) {
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
    return unpackMeta(input).sort((a2, b) => {
      var _a3, _b2;
      return (((_a3 = a2[attr]) == null ? undefined : _a3.length) || 0) - (((_b2 = b[attr]) == null ? undefined : _b2.length) || 0);
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
function resolveUnref$2(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function resolveUnrefHeadInput$2(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref$2(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r2) => resolveUnrefHeadInput$2(r2));
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
const unhead_DIw3XN1qJJ = /* @__PURE__ */ defineNuxtPlugin({
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
        const r2 = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r2;
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
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r2) => {
    var _a3;
    return ((_a3 = route.params[r2.slice(1)]) == null ? undefined : _a3.toString()) || "";
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
    component: () => import('./email-confirmation-CDVsgZKp.mjs')
  },
  {
    name: "forgot-password",
    path: "/forgot-password",
    component: () => import('./index-CHhLtfBz.mjs')
  },
  {
    name: "forgot-password-reset",
    path: "/forgot-password/reset",
    component: () => import('./reset-DqY2NiQM.mjs')
  },
  {
    name: "login",
    path: "/login",
    component: () => import('./login-Ck1i6SST.mjs')
  },
  {
    name: "reset-password",
    path: "/reset-password",
    component: () => import('./reset-password-CXfH5WWY.mjs')
  },
  {
    name: "signup-audience",
    path: "/signup/audience",
    component: () => import('./audience-ApI-CkW7.mjs')
  },
  {
    name: "signup-host",
    path: "/signup/host",
    component: () => import('./host-BbB_xJc-.mjs')
  },
  {
    name: "signup",
    path: "/signup",
    component: () => import('./index-BxFUsSKa.mjs')
  },
  {
    name: "create-event",
    path: "/create-event",
    meta: __nuxt_page_meta$2,
    component: () => import('./create-event-BZCOY7BM.mjs')
  },
  {
    name: "events-id-event-details",
    path: "/events/:id()/event-details",
    component: () => import('./event-details-Ctc7bXcb.mjs')
  },
  {
    name: "events-id-event-earnings",
    path: "/events/:id()/event-earnings",
    component: () => import('./event-earnings-BTFglFcB.mjs')
  },
  {
    name: "events-id",
    path: "/events/:id()",
    component: () => import('./index-qyEo1b9Q.mjs')
  },
  {
    name: "events",
    path: "/events",
    component: () => import('./index-ny0qKAWA.mjs')
  },
  {
    name: "host-event_id-request_id-make-payment",
    path: "/:host()/:event_id()/:request_id()/make-payment",
    component: () => import('./make-payment-K5EJmAk2.mjs')
  },
  {
    name: "host-event_id-request_id-request-receipt",
    path: "/:host()/:event_id()/:request_id()/request-receipt",
    component: () => import('./request-receipt-BBrQu1LW.mjs')
  },
  {
    name: "host-event_id-make-a-request",
    path: "/:host()/:event_id()/make-a-request",
    component: () => import('./make-a-request-BJaUfesj.mjs')
  },
  {
    name: "host",
    path: "/:host()",
    component: () => import('./index-CI6NVPIl.mjs')
  },
  {
    name: "audience",
    path: "/audience",
    component: () => import('./audience-Bi8sgcde.mjs')
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
    component: () => import('./dashboard-hP8Igz6q.mjs')
  },
  {
    name: "following-username",
    path: "/following/:username()",
    component: () => import('./_username_-CJjPjLgo.mjs')
  },
  {
    name: "following",
    path: "/following",
    component: () => import('./index-BXwXJ7s3.mjs')
  },
  {
    name: "index",
    path: "/",
    meta: __nuxt_page_meta,
    component: () => import('./index-iePN73BA.mjs')
  },
  {
    name: "order-history",
    path: "/order-history",
    component: () => import('./order-history-d0nuAeOH.mjs')
  },
  {
    name: "privacy-policy",
    path: "/privacy-policy",
    component: () => import('./privacy-policy-i0S5-rfs.mjs')
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import('./profile-CuoKAgV8.mjs')
  },
  {
    name: "search",
    path: "/search",
    component: () => import('./search-B7SPKlFq.mjs')
  },
  {
    name: "terms",
    path: "/terms",
    component: () => import('./terms-WQBAI-JB.mjs')
  },
  {
    name: "wallet-reference-event-earnings",
    path: "/wallet/:reference()/event-earnings",
    component: () => import('./event-earnings-C7soFwzK.mjs')
  },
  {
    name: "wallet-reference-event-payout",
    path: "/wallet/:reference()/event-payout",
    component: () => import('./event-payout-D3-dWvw4.mjs')
  },
  {
    name: "wallet",
    path: "/wallet",
    component: () => import('./index-DkG47__8.mjs')
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
  const source = (route == null ? undefined : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r2) => {
    var _a3;
    return ((_a3 = route.params[r2.slice(1)]) == null ? undefined : _a3.toString()) || "";
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
      for (let j2 = 0; j2 < wordArray.sigBytes; j2 += 4) {
        this.words[this.sigBytes + j2 >>> 2] = wordArray.words[j2 >>> 2];
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
      for (let j2 = 0; j2 < 4 && i * 8 + j2 * 6 < wordArray.sigBytes * 8; j2++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j2) & 63));
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
    let a2 = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f2 = H2[5];
    let g = H2[6];
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
      const ch2 = e & f2 ^ ~e & g;
      const maj = a2 & b ^ a2 & c ^ b & c;
      const sigma0 = (a2 << 30 | a2 >>> 2) ^ (a2 << 19 | a2 >>> 13) ^ (a2 << 10 | a2 >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h2 + sigma1 + ch2 + K[i] + W[i];
      const t2 = sigma0 + maj;
      h2 = g;
      g = f2;
      f2 = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a2;
      a2 = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a2 | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f2 | 0;
    H2[6] = H2[6] + g | 0;
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
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
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
    var _a3, _b2, _c2;
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
      var _a4, _b3, _c3, _d3;
      if (((_b3 = (_a4 = to2.matched[0]) == null ? undefined : _a4.components) == null ? undefined : _b3.default) === ((_d3 = (_c3 = from.matched[0]) == null ? undefined : _c3.components) == null ? undefined : _d3.default)) {
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
    if ((_c2 = nuxtApp.ssrContext) == null ? undefined : _c2.islandContext) {
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
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? undefined : _b3.call(namedMiddleware).then((r2) => r2.default || r2)) : entry2;
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
const _0_siteConfig_LmpRw96T2Q = /* @__PURE__ */ defineNuxtPlugin({
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
const revive_payload_server_otMPQOWVYg = /* @__PURE__ */ defineNuxtPlugin({
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
const robot_meta_server_mE0YlQlQl2 = /* @__PURE__ */ defineNuxtPlugin({
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
function resolveUnref$1(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function resolveUnrefHeadInput$1(ref3) {
  if (ref3 instanceof Promise || ref3 instanceof Date || ref3 instanceof RegExp)
    return ref3;
  const root = resolveUnref$1(ref3);
  if (!ref3 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r2) => resolveUnrefHeadInput$1(r2));
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
const plugin_zj3QRykPIh = /* @__PURE__ */ defineNuxtPlugin({
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
    __publicField(this, "FOLLOW_USER", "follow");
    __publicField(this, "UNFOLLOW_USER", "unfollow");
    __publicField(this, "FOLLOWING_LIST", "followers");
    __publicField(this, "SUBSCRIBE", "subscribe");
    __publicField(this, "UNSUBSCRIBE", "unsubscribe");
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
  async followUser(payload) {
    return this.call("POST", this.FOLLOW_USER, payload);
  }
  async unFollowUser(payload) {
    return this.call("POST", this.UNFOLLOW_USER, payload);
  }
  async fetchFollowingList() {
    return this.call("GET", this.FOLLOWING_LIST);
  }
  async subscribeUser(host_id) {
    return this.call("POST", this.SUBSCRIBE, { host_id });
  }
  async unSubscribeUser(host_id) {
    return this.call("POST", this.UNSUBSCRIBE, { host_id });
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
  unhead_DIw3XN1qJJ,
  plugin$1,
  _0_siteConfig_LmpRw96T2Q,
  revive_payload_server_otMPQOWVYg,
  plugin,
  components_plugin_KR1HBZs4kY,
  robot_meta_server_mE0YlQlQl2,
  plugin_default,
  plugin_zj3QRykPIh,
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
  auth: defineAsyncComponent(() => import('./auth-C167SWqw.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-2mteIFrQ.mjs').then((m) => m.default || m)),
  lander: defineAsyncComponent(() => import('./lander-Bg6NvSF0.mjs').then((m) => m.default || m))
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
    let pageLoadingEndHookAlreadyCalled = false;
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
            pageLoadingEndHookAlreadyCalled = true;
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
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => {
                    if (!pageLoadingEndHookAlreadyCalled) {
                      return nuxtApp.callHook("page:loading:end");
                    }
                    pageLoadingEndHookAlreadyCalled = false;
                  }).finally(done));
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
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr2;
      return isStart ? lr2 : rl;
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
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? undefined : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? undefined : _overflowsData$filter2[0];
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
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
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
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement() && getNodeName(el) !== "body");
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
function rectsAreEqual(a2, b) {
  return a2.x === b.x && a2.y === b.y && a2.width === b.width && a2.height === b.height;
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
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b) => a2[0] < b[0] ? -1 : 1).join() : "");
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
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b) => a2[0] < b[0] ? -1 : 1).join() : "");
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
  ].sort((a2, b) => b.length - a2.length);
  let literals = sortedLiterals.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${sortedLiterals.join("|")}|[\\p{White_Space}]`, "gu");
  let numerals = [
    ...new Intl.NumberFormat(intlOptions.locale, {
      useGrouping: false
    }).format(9876543210)
  ].reverse();
  let indexes = new Map(numerals.map((d, i) => [
    d,
    i
  ]));
  let numeral = new RegExp(`[${numerals.join("")}]`, "g");
  let index = (d) => String(indexes.get(d));
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
function Q(a2, t2) {
  const e = typeof a2 == "string" && !t2 ? `${a2}Context` : t2, n2 = Symbol(e);
  return [(r2) => {
    const i = inject(n2, r2);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n2.toString()}\` not found. Component must be used within ${Array.isArray(a2) ? `one of the following components: ${a2.join(
        ", "
      )}` : `\`${a2}\``}`
    );
  }, (r2) => (provide(n2, r2), r2)];
}
function Wt(a2, t2, e) {
  const n2 = e.originalEvent.target, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  n2.addEventListener(a2, t2, { once: true }), n2.dispatchEvent(l);
}
function jt(a2, t2 = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(e, Math.max(t2, a2));
}
function Ea(a2, t2) {
  let e = a2;
  const n2 = t2.toString(), l = n2.indexOf("."), s = l >= 0 ? n2.length - l : 0;
  if (s > 0) {
    const r2 = 10 ** s;
    e = Math.round(e * r2) / r2;
  }
  return e;
}
function zr(a2, t2, e, n2) {
  t2 = Number(t2), e = Number(e);
  const l = (a2 - (Number.isNaN(t2) ? 0 : t2)) % n2;
  let s = Ea(Math.abs(l) * 2 >= n2 ? a2 + Math.sign(l) * (n2 - Math.abs(l)) : a2 - l, n2);
  return Number.isNaN(t2) ? !Number.isNaN(e) && s > e && (s = Math.floor(Ea(e / n2, n2)) * n2) : s < t2 ? s = t2 : !Number.isNaN(e) && s > e && (s = t2 + Math.floor(Ea((e - t2) / n2, n2)) * n2), s = Ea(s, n2), s;
}
function Kr(a2) {
  return a2.__esModule && Object.prototype.hasOwnProperty.call(a2, "default") ? a2.default : a2;
}
var Hr = function a(t2, e) {
  if (t2 === e) return true;
  if (t2 && e && typeof t2 == "object" && typeof e == "object") {
    if (t2.constructor !== e.constructor) return false;
    var n2, l, s;
    if (Array.isArray(t2)) {
      if (n2 = t2.length, n2 != e.length) return false;
      for (l = n2; l-- !== 0; )
        if (!a(t2[l], e[l])) return false;
      return true;
    }
    if (t2.constructor === RegExp) return t2.source === e.source && t2.flags === e.flags;
    if (t2.valueOf !== Object.prototype.valueOf) return t2.valueOf() === e.valueOf();
    if (t2.toString !== Object.prototype.toString) return t2.toString() === e.toString();
    if (s = Object.keys(t2), n2 = s.length, n2 !== Object.keys(e).length) return false;
    for (l = n2; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[l])) return false;
    for (l = n2; l-- !== 0; ) {
      var r2 = s[l];
      if (!a(t2[r2], e[r2])) return false;
    }
    return true;
  }
  return t2 !== t2 && e !== e;
};
const Xe = /* @__PURE__ */ Kr(Hr);
function Dt(a2, t2, e) {
  const n2 = a2.findIndex((i) => Xe(i, t2)), l = a2.findIndex((i) => Xe(i, e));
  if (n2 === -1 || l === -1)
    return [];
  const [s, r2] = [n2, l].sort((i, u) => i - u);
  return a2.slice(s, r2 + 1);
}
function vt(a2) {
  return a2 == null;
}
function ei(a2, t2) {
  var e;
  const n2 = shallowRef();
  return watchEffect(() => {
    n2.value = a2();
  }, {
    ...t2,
    flush: (e = undefined) != null ? e : "sync"
  }), readonly(n2);
}
function yt(a2) {
  return getCurrentScope() ? (onScopeDispose(a2), true) : false;
}
function ia() {
  const a2 = /* @__PURE__ */ new Set(), t2 = (l) => {
    a2.delete(l);
  };
  return {
    on: (l) => {
      a2.add(l);
      const s = () => t2(l);
      return yt(s), {
        off: s
      };
    },
    off: t2,
    trigger: (...l) => Promise.all(Array.from(a2).map((s) => s(...l)))
  };
}
function ai(a2) {
  let t2 = false, e;
  const n2 = effectScope(true);
  return (...l) => (t2 || (e = n2.run(() => a2(...l)), t2 = true), e);
}
function Sl(a2) {
  let t2 = 0, e, n2;
  const l = () => {
    t2 -= 1, n2 && t2 <= 0 && (n2.stop(), e = undefined, n2 = undefined);
  };
  return (...s) => (t2 += 1, e || (n2 = effectScope(true), e = n2.run(() => a2(...s))), yt(l), e);
}
function Ke(a2) {
  return typeof a2 == "function" ? a2() : unref(a2);
}
function ni(a2) {
  if (!isRef(a2))
    return reactive(a2);
  const t2 = new Proxy({}, {
    get(e, n2, l) {
      return unref(Reflect.get(a2.value, n2, l));
    },
    set(e, n2, l) {
      return isRef(a2.value[n2]) && !isRef(l) ? a2.value[n2].value = l : a2.value[n2] = l, true;
    },
    deleteProperty(e, n2) {
      return Reflect.deleteProperty(a2.value, n2);
    },
    has(e, n2) {
      return Reflect.has(a2.value, n2);
    },
    ownKeys() {
      return Object.keys(a2.value);
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
function El(a2) {
  return ni(computed(a2));
}
const Ye = "undefined" < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const oi = (a2) => typeof a2 < "u", si = Object.prototype.toString, ri = (a2) => si.call(a2) === "[object Object]", Va = () => {
};
function $l(a2) {
  return getCurrentInstance();
}
function It(a2, t2 = 1e4) {
  return customRef((e, n2) => {
    let l = Ke(a2), s;
    const r2 = () => setTimeout(() => {
      l = Ke(a2), n2();
    }, Ke(t2));
    return yt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), l;
      },
      set(i) {
        l = i, n2(), clearTimeout(s), s = r2();
      }
    };
  });
}
function pi(a2, t2) {
  $l() && onBeforeUnmount(a2, t2);
}
function Wn(a2, t2, e = {}) {
  const {
    immediate: n2 = true
  } = e, l = ref(false);
  let s = null;
  function r2() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    l.value = false, r2();
  }
  function u(...d) {
    r2(), l.value = true, s = setTimeout(() => {
      l.value = false, s = null, a2(...d);
    }, Ke(t2));
  }
  return n2 && (l.value = true, Ye), yt(i), {
    isPending: readonly(l),
    start: u,
    stop: i
  };
}
function mi(a2 = 1e3, t2 = {}) {
  const {
    controls: e = false,
    callback: n2
  } = t2, l = Wn(
    n2 ?? Va,
    a2,
    t2
  ), s = computed(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function $e(a2) {
  var t2;
  const e = Ke(a2);
  return (t2 = e == null ? undefined : e.$el) != null ? t2 : e;
}
const Tt = undefined;
function Le(...a2) {
  let t2, e, n2, l;
  if (typeof a2[0] == "string" || Array.isArray(a2[0]) ? ([e, n2, l] = a2, t2 = Tt) : [t2, e, n2, l] = a2, !t2)
    return Va;
  Array.isArray(e) || (e = [e]), Array.isArray(n2) || (n2 = [n2]);
  const s = [], r2 = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, f2, v, p2) => (c.addEventListener(f2, v, p2), () => c.removeEventListener(f2, v, p2)), u = watch(
    () => [$e(t2), Ke(l)],
    ([c, f2]) => {
      if (r2(), !c)
        return;
      const v = ri(f2) ? { ...f2 } : f2;
      s.push(
        ...e.flatMap((p2) => n2.map((g) => i(c, p2, g, v)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), r2();
  };
  return yt(d), d;
}
function yi(a2) {
  return typeof a2 == "function" ? a2 : typeof a2 == "string" ? (t2) => t2.key === a2 : Array.isArray(a2) ? (t2) => a2.includes(t2.key) : () => true;
}
function jn(...a2) {
  let t2, e, n2 = {};
  a2.length === 3 ? (t2 = a2[0], e = a2[1], n2 = a2[2]) : a2.length === 2 ? typeof a2[1] == "object" ? (t2 = true, e = a2[0], n2 = a2[1]) : (t2 = a2[0], e = a2[1]) : (t2 = true, e = a2[0]);
  const {
    target: l = Tt,
    eventName: s = "keydown",
    passive: r2 = false,
    dedupe: i = false
  } = n2, u = yi(t2);
  return Le(l, s, (c) => {
    c.repeat && Ke(i) || u(c) && e(c);
  }, r2);
}
function ja() {
  const a2 = ref(false), t2 = getCurrentInstance();
  return t2 && onMounted(() => {
    a2.value = true;
  }, t2), a2;
}
function Tl(a2, t2 = {}) {
  const {
    immediate: e = true,
    fpsLimit: n2 = undefined,
    window: l = Tt
  } = t2, s = ref(false), r2 = n2 ? 1e3 / n2 : null;
  let i = 0, u = null;
  function d(v) {
    if (!s.value || !l)
      return;
    i || (i = v);
    const p2 = v - i;
    if (r2 && p2 < r2) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = v, a2({ delta: p2, timestamp: v }), u = l.requestAnimationFrame(d);
  }
  function c() {
    !s.value && l && (s.value = true, i = 0, u = l.requestAnimationFrame(d));
  }
  function f2() {
    s.value = false, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && c(), yt(f2), {
    isActive: readonly(s),
    pause: f2,
    resume: c
  };
}
function bi(a2) {
  return JSON.parse(JSON.stringify(a2));
}
function ne(a2, t2, e, n2 = {}) {
  var l, s, r2;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: f2,
    shouldEmit: v
  } = n2, p2 = getCurrentInstance(), g = e || (p2 == null ? undefined : p2.emit) || ((l = p2 == null ? undefined : p2.$emit) == null ? undefined : l.bind(p2)) || ((r2 = (s = p2 == null ? undefined : p2.proxy) == null ? undefined : s.$emit) == null ? undefined : r2.bind(p2 == null ? undefined : p2.proxy));
  let m = d;
  t2 || (t2 = "modelValue"), m = m || `update:${t2.toString()}`;
  const _ = (h2) => i ? typeof i == "function" ? i(h2) : bi(h2) : h2, C = () => oi(a2[t2]) ? _(a2[t2]) : f2, $ = (h2) => {
    v ? v(h2) && g(m, h2) : g(m, h2);
  };
  if (u) {
    const h2 = C(), E = ref(h2);
    let P = false;
    return watch(
      () => a2[t2],
      (D) => {
        P || (P = true, E.value = _(D), nextTick(() => P = false));
      }
    ), watch(
      E,
      (D) => {
        !P && (D !== a2[t2] || c) && $(D);
      },
      { deep: c }
    ), E;
  } else
    return computed({
      get() {
        return C();
      },
      set(h2) {
        $(h2);
      }
    });
}
function Ua(a2) {
  return a2 ? a2.flatMap((t2) => t2.type === Fragment ? Ua(t2.children) : [t2]) : [];
}
const _i = ["INPUT", "TEXTAREA"];
function Rt(a2, t2, e, n2 = {}) {
  if (!t2 || n2.enableIgnoredElement && _i.includes(t2.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r2 = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = n2, [f2, v, p2, g, m, _] = [
    a2.key === "ArrowRight",
    a2.key === "ArrowLeft",
    a2.key === "ArrowUp",
    a2.key === "ArrowDown",
    a2.key === "Home",
    a2.key === "End"
  ], C = p2 || g, $ = f2 || v;
  if (!m && !_ && (!C && !$ || l === "vertical" && $ || l === "horizontal" && C))
    return null;
  const h2 = e ? Array.from(e.querySelectorAll(s)) : r2;
  if (!h2.length)
    return null;
  d && a2.preventDefault();
  let E = null;
  return $ || C ? E = Al(h2, t2, {
    goForward: C ? g : u === "ltr" ? f2 : v,
    loop: i
  }) : m ? E = h2.at(0) || null : _ && (E = h2.at(-1) || null), c && (E == null || E.focus()), E;
}
function Al(a2, t2, e, n2 = a2.length) {
  if (--n2 === 0)
    return null;
  const l = a2.indexOf(t2), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a2.length))
    return null;
  const r2 = (s + a2.length) % a2.length, i = a2[r2];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Al(
    a2,
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
  setup(a2) {
    const t2 = a2, { dir: e, scrollBody: n2, nonce: l } = toRefs(t2);
    return Ei({
      dir: e,
      scrollBody: n2,
      nonce: l,
      useId: t2.useId
    }), (s, r2) => renderSlot(s.$slots, "default");
  }
});
let Pi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Di = (a2 = 21) => {
  let t2 = "", e = a2;
  for (; e--; )
    t2 += Pi[Math.random() * 64 | 0];
  return t2;
};
const $i = Sl(() => {
  const a2 = ref(/* @__PURE__ */ new Map());
  ref();
  const e = computed(() => {
    for (const r2 of a2.value.values())
      if (r2)
        return true;
    return false;
  });
  Ga({
    scrollBody: ref(true)
  });
  return watch(e, (r2, i) => {
    return;
  }, { immediate: true, flush: "sync" }), a2;
});
function ha(a2) {
  const t2 = Di(6), e = $i();
  e.value.set(t2, a2 ?? false);
  const n2 = computed({
    get: () => e.value.get(t2) ?? false,
    set: (l) => e.value.set(t2, l)
  });
  return pi(() => {
    e.value.delete(t2);
  }), n2;
}
const Ii = "data-radix-vue-collection-item";
function Me(a2, t2 = Ii) {
  const e = Symbol();
  return { createCollection: (s) => {
    const r2 = ref([]);
    function i() {
      const u = $e(s);
      return u ? r2.value = Array.from(
        u.querySelectorAll(`[${t2}]:not([data-disabled])`)
      ) : r2.value = [];
    }
    return onBeforeUpdate(() => {
      r2.value = [];
    }), onMounted(i), onUpdated(i), watch(() => s == null ? undefined : s.value, i, { immediate: true }), provide(e, r2), r2;
  }, injectCollection: () => inject(e, ref([])) };
}
function be(a2) {
  const t2 = Ga({
    dir: ref("ltr")
  });
  return computed(() => {
    var e;
    return (a2 == null ? undefined : a2.value) || ((e = t2.dir) == null ? undefined : e.value) || "ltr";
  });
}
function Ae(a2) {
  const t2 = getCurrentInstance(), e = t2 == null ? undefined : t2.type.emits, n2 = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t2 == null ? undefined : t2.type.__name}`
  ), e == null || e.forEach((l) => {
    n2[toHandlerKey(camelize(l))] = (...s) => a2(l, ...s);
  }), n2;
}
function Gn() {
  watchEffect((a2) => {
    return;
  });
}
function Qe(a2) {
  return computed(() => {
    var t2;
    return Ke(a2) ? !!((t2 = $e(a2)) != null && t2.closest("form")) : true;
  });
}
function At(a2) {
  const t2 = getCurrentInstance(), e = Object.keys((t2 == null ? undefined : t2.type.props) ?? {}).reduce((l, s) => {
    const r2 = (t2 == null ? undefined : t2.type.props[s]).default;
    return r2 !== undefined && (l[s] = r2), l;
  }, {}), n2 = toRef(a2);
  return computed(() => {
    const l = {}, s = (t2 == null ? undefined : t2.vnode.props) ?? {};
    return Object.keys(s).forEach((r2) => {
      l[camelize(r2)] = s[r2];
    }), Object.keys({ ...e, ...l }).reduce((r2, i) => (n2.value[i] !== undefined && (r2[i] = n2.value[i]), r2), {});
  });
}
function xe(a2, t2) {
  const e = At(a2), n2 = t2 ? Ae(t2) : {};
  return computed(() => ({
    ...e.value,
    ...n2
  }));
}
function R() {
  const a2 = getCurrentInstance(), t2 = ref(), e = computed(() => {
    var r2, i;
    return ["#text", "#comment"].includes((r2 = t2.value) == null ? undefined : r2.$el.nodeName) ? (i = t2.value) == null ? undefined : i.$el.nextElementSibling : $e(t2);
  }), n2 = Object.assign({}, a2.exposed), l = {};
  for (const r2 in a2.props)
    Object.defineProperty(l, r2, {
      enumerable: true,
      configurable: true,
      get: () => a2.props[r2]
    });
  if (Object.keys(n2).length > 0)
    for (const r2 in n2)
      Object.defineProperty(l, r2, {
        enumerable: true,
        configurable: true,
        get: () => n2[r2]
      });
  Object.defineProperty(l, "$el", {
    enumerable: true,
    configurable: true,
    get: () => a2.vnode.el
  }), a2.exposed = l;
  function s(r2) {
    t2.value = r2, !(r2 instanceof Element || !r2) && (Object.defineProperty(l, "$el", {
      enumerable: true,
      configurable: true,
      get: () => r2.$el
    }), a2.exposed = l);
  }
  return { forwardRef: s, currentRef: t2, currentElement: e };
}
function kl(a2, t2) {
  const e = It(false, 300), n2 = ref(null), l = ia();
  function s() {
    n2.value = null, e.value = false;
  }
  function r2(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, f2 = Ti(c, d.getBoundingClientRect()), v = Ri(c, f2), p2 = Ai(u.getBoundingClientRect()), g = ki([...v, ...p2]);
    n2.value = g, e.value = true;
  }
  return watchEffect((i) => {
    if (a2.value && t2.value) {
      const u = (c) => r2(c, t2.value), d = (c) => r2(c, a2.value);
      a2.value.addEventListener("pointerleave", u), t2.value.addEventListener("pointerleave", d), i(() => {
        var c, f2;
        (c = a2.value) == null || c.removeEventListener("pointerleave", u), (f2 = t2.value) == null || f2.removeEventListener("pointerleave", d);
      });
    }
  }), watchEffect((i) => {
    var u;
    if (n2.value) {
      const d = (c) => {
        var _, C;
        if (!n2.value)
          return;
        const f2 = c.target, v = { x: c.clientX, y: c.clientY }, p2 = ((_ = a2.value) == null ? undefined : _.contains(f2)) || ((C = t2.value) == null ? undefined : C.contains(f2)), g = !Oi(v, n2.value), m = f2.hasAttribute("data-grace-area-trigger");
        p2 ? s() : (g || m) && (s(), l.trigger());
      };
      (u = a2.value) == null || u.ownerDocument.addEventListener("pointermove", d), i(() => {
        var c;
        return (c = a2.value) == null ? undefined : c.ownerDocument.removeEventListener("pointermove", d);
      });
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function Ti(a2, t2) {
  const e = Math.abs(t2.top - a2.y), n2 = Math.abs(t2.bottom - a2.y), l = Math.abs(t2.right - a2.x), s = Math.abs(t2.left - a2.x);
  switch (Math.min(e, n2, l, s)) {
    case s:
      return "left";
    case l:
      return "right";
    case e:
      return "top";
    case n2:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ri(a2, t2, e = 5) {
  const n2 = [];
  switch (t2) {
    case "top":
      n2.push(
        { x: a2.x - e, y: a2.y + e },
        { x: a2.x + e, y: a2.y + e }
      );
      break;
    case "bottom":
      n2.push(
        { x: a2.x - e, y: a2.y - e },
        { x: a2.x + e, y: a2.y - e }
      );
      break;
    case "left":
      n2.push(
        { x: a2.x + e, y: a2.y - e },
        { x: a2.x + e, y: a2.y + e }
      );
      break;
    case "right":
      n2.push(
        { x: a2.x - e, y: a2.y - e },
        { x: a2.x - e, y: a2.y + e }
      );
      break;
  }
  return n2;
}
function Ai(a2) {
  const { top: t2, right: e, bottom: n2, left: l } = a2;
  return [
    { x: l, y: t2 },
    { x: e, y: t2 },
    { x: e, y: n2 },
    { x: l, y: n2 }
  ];
}
function Oi(a2, t2) {
  const { x: e, y: n2 } = a2;
  let l = false;
  for (let s = 0, r2 = t2.length - 1; s < t2.length; r2 = s++) {
    const i = t2[s].x, u = t2[s].y, d = t2[r2].x, c = t2[r2].y;
    u > n2 != c > n2 && e < (d - i) * (n2 - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function ki(a2) {
  const t2 = a2.slice();
  return t2.sort((e, n2) => e.x < n2.x ? -1 : e.x > n2.x ? 1 : e.y < n2.y ? -1 : e.y > n2.y ? 1 : 0), Mi(t2);
}
function Mi(a2) {
  if (a2.length <= 1)
    return a2.slice();
  const t2 = [];
  for (let n2 = 0; n2 < a2.length; n2++) {
    const l = a2[n2];
    for (; t2.length >= 2; ) {
      const s = t2[t2.length - 1], r2 = t2[t2.length - 2];
      if ((s.x - r2.x) * (l.y - r2.y) >= (s.y - r2.y) * (l.x - r2.x))
        t2.pop();
      else break;
    }
    t2.push(l);
  }
  t2.pop();
  const e = [];
  for (let n2 = a2.length - 1; n2 >= 0; n2--) {
    const l = a2[n2];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], r2 = e[e.length - 2];
      if ((s.x - r2.x) * (l.y - r2.y) >= (s.y - r2.y) * (l.x - r2.x))
        e.pop();
      else break;
    }
    e.push(l);
  }
  return e.pop(), t2.length === 1 && e.length === 1 && t2[0].x === e[0].x && t2[0].y === e[0].y ? t2 : t2.concat(e);
}
var Vi = function(a2) {
  return null;
}, zt = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {}, Cn = 0, Ml = function(a2) {
  return a2 && (a2.host || Ml(a2.parentNode));
}, Fi = function(a2, t2) {
  return t2.map(function(e) {
    if (a2.contains(e))
      return e;
    var n2 = Ml(e);
    return n2 && a2.contains(n2) ? n2 : (console.error("aria-hidden", e, "in not contained inside", a2, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Ni = function(a2, t2, e, n2) {
  var l = Fi(t2, Array.isArray(a2) ? a2 : [a2]);
  Da[e] || (Da[e] = /* @__PURE__ */ new WeakMap());
  var s = Da[e], r2 = [], i = /* @__PURE__ */ new Set(); new Set(l); var d = function(f2) {
    !f2 || i.has(f2) || (i.add(f2), d(f2.parentNode));
  };
  l.forEach(d);
  return i.clear(), Cn++, function() {
    r2.forEach(function(f2) {
      var v = zt.get(f2) - 1, p2 = s.get(f2) - 1;
      zt.set(f2, v), s.set(f2, p2), v || (Pa.has(f2) || f2.removeAttribute(n2), Pa.delete(f2)), p2 || f2.removeAttribute(e);
    }), Cn--, Cn || (zt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, Li = function(a2, t2, e) {
  e === undefined && (e = "data-aria-hidden");
  var n2 = Array.from(Array.isArray(a2) ? a2 : [a2]), l = Vi();
  return l ? (n2.push.apply(n2, Array.from(l.querySelectorAll("[aria-live]"))), Ni(n2, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function ya(a2) {
  let t2;
  watch(() => $e(a2), (e) => {
    e ? t2 = Li(e) : t2 && t2();
  }), onUnmounted(() => {
    t2 && t2();
  });
}
let zi = 0;
function he(a2, t2 = "radix") {
  const e = Ga({ useId: undefined });
  return Mo$1.useId ? `${t2}-${Mo$1.useId()}` : e.useId ? `${t2}-${e.useId()}` : `${t2}-${++zi}`;
}
function Vl(a2) {
  const t2 = ref(), e = computed(() => {
    var l;
    return ((l = t2.value) == null ? undefined : l.width) ?? 0;
  }), n2 = computed(() => {
    var l;
    return ((l = t2.value) == null ? undefined : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = $e(a2);
    if (l) {
      t2.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r2) => {
        if (!Array.isArray(r2) || !r2.length)
          return;
        const i = r2[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f2 = Array.isArray(c) ? c[0] : c;
          u = f2.inlineSize, d = f2.blockSize;
        } else
          u = l.offsetWidth, d = l.offsetHeight;
        t2.value = { width: u, height: d };
      });
      return s.observe(l, { box: "border-box" }), () => s.unobserve(l);
    } else
      t2.value = undefined;
  }), {
    width: e,
    height: n2
  };
}
function Fl(a2, t2) {
  const e = ref(a2);
  function n2(s) {
    return t2[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n2(s);
    }
  };
}
const Hi = "data-item-text";
function ga(a2) {
  const t2 = It("", 1e3);
  return {
    search: t2,
    handleTypeaheadSearch: (l, s) => {
      if (!(a2 != null && a2.value) && !s)
        return;
      t2.value = t2.value + l;
      const r2 = (a2 == null ? undefined : a2.value) ?? s, i = (undefined).activeElement, u = r2.map((p2) => {
        var g;
        return {
          ref: p2,
          textValue: ((g = (p2.querySelector(`[${Hi}]`) ?? p2).textContent) == null ? undefined : g.trim()) ?? ""
        };
      }), d = u.find((p2) => p2.ref === i), c = u.map((p2) => p2.textValue), f2 = Yn(c, t2.value, d == null ? undefined : d.textValue), v = u.find((p2) => p2.textValue === f2);
      return v && v.ref.focus(), v == null ? undefined : v.ref;
    },
    resetTypeahead: () => {
      t2.value = "";
    }
  };
}
function qn(a2, t2) {
  return a2.map((e, n2) => a2[(t2 + n2) % a2.length]);
}
function Yn(a2, t2, e) {
  const l = t2.length > 1 && Array.from(t2).every((d) => d === t2[0]) ? t2[0] : t2, s = e ? a2.indexOf(e) : -1;
  let r2 = qn(a2, Math.max(s, 0));
  l.length === 1 && (r2 = r2.filter((d) => d !== e));
  const u = r2.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
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
  setup(a2, { attrs: t2, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n2 = Ua(e.default()), l = n2.findIndex((c) => c.type !== Comment);
      if (l === -1)
        return n2;
      const s = n2[l];
      (u = s.props) == null || delete u.ref;
      const r2 = s.props ? mergeProps(t2, s.props) : t2;
      t2.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = cloneVNode(s, r2);
      for (const c in r2)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r2[c]);
      return n2.length === 1 ? i : (n2[l] = i, n2);
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
  setup(a2, { attrs: t2, slots: e }) {
    const n2 = a2.asChild ? "template" : a2.as;
    return typeof n2 == "string" && ["area", "img", "input"].includes(n2) ? () => h(n2, t2) : n2 !== "template" ? () => h(a2.as, t2, { default: e.default }) : () => h(Xn, t2, { default: e.default });
  }
});
function Ie() {
  const a2 = ref(), t2 = computed(() => {
    var e, n2;
    return ["#text", "#comment"].includes((e = a2.value) == null ? undefined : e.$el.nodeName) ? (n2 = a2.value) == null ? undefined : n2.$el.nextElementSibling : $e(a2);
  });
  return {
    primitiveElement: a2,
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
  setup(a2, { expose: t2, emit: e }) {
    const n2 = a2, s = ne(n2, "open", e, {
      defaultValue: n2.defaultOpen,
      passive: n2.open === undefined
    }), r2 = ne(n2, "disabled");
    return Wi({
      contentId: "",
      disabled: r2,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t2({ open: s }), R(), (i, u) => (openBlock(), createBlock(unref(O), {
      as: i.as,
      "as-child": n2.asChild,
      "data-state": unref(s) ? "open" : "closed",
      "data-disabled": unref(r2) ? "" : undefined
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { open: unref(s) })
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
  setup(a2) {
    const t2 = a2;
    R();
    const e = Nl();
    return (n2, l) => {
      var s, r2;
      return openBlock(), createBlock(unref(O), {
        type: n2.as === "button" ? "button" : undefined,
        as: n2.as,
        "as-child": t2.asChild,
        "aria-controls": unref(e).contentId,
        "aria-expanded": unref(e).open.value,
        "data-state": unref(e).open.value ? "open" : "closed",
        "data-disabled": (s = unref(e).disabled) != null && s.value ? "" : undefined,
        disabled: (r2 = unref(e).disabled) == null ? undefined : r2.value,
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
function Gi(a2, t2) {
  var _;
  const e = ref({}), n2 = ref("none"), l = ref(a2), s = a2.value ? "mounted" : "unmounted";
  let r2;
  const i = ((_ = t2.value) == null ? undefined : _.ownerDocument.defaultView) ?? Tt, { state: u, dispatch: d } = Fl(s, {
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
    a2,
    async (C, $) => {
      var E;
      const h2 = $ !== C;
      if (await nextTick(), h2) {
        const P = n2.value, D = $a(t2.value);
        C ? (d("MOUNT"), D === "none" && c()) : D === "none" || ((E = e.value) == null ? undefined : E.display) === "none" ? (d("UNMOUNT"), c()) : $ && P !== D ? (d("ANIMATION_OUT"), c()) : (d("UNMOUNT"), c());
      }
    },
    { immediate: true }
  );
  const f2 = (C) => {
    const $ = $a(t2.value), h2 = $.includes(
      C.animationName
    );
    u.value === "mounted" ? "enter" : "leave";
    if (C.target === t2.value && h2 && (d("ANIMATION_END"), !l.value)) {
      const P = t2.value.style.animationFillMode;
      t2.value.style.animationFillMode = "forwards", r2 = i == null ? undefined : i.setTimeout(() => {
        var D;
        ((D = t2.value) == null ? undefined : D.style.animationFillMode) === "forwards" && (t2.value.style.animationFillMode = P);
      });
    }
    C.target === t2.value && $ === "none" && d("ANIMATION_END");
  }, v = (C) => {
    C.target === t2.value && (n2.value = $a(t2.value));
  }, p2 = watch(
    t2,
    (C, $) => {
      C ? (e.value = getComputedStyle(C), C.addEventListener("animationstart", v), C.addEventListener("animationcancel", f2), C.addEventListener("animationend", f2)) : (d("ANIMATION_END"), i == null || i.clearTimeout(r2), $ == null || $.removeEventListener("animationstart", v), $ == null || $.removeEventListener("animationcancel", f2), $ == null || $.removeEventListener("animationend", f2));
    },
    { immediate: true }
  ), g = watch(u, () => {
    const C = $a(t2.value);
    n2.value = u.value === "mounted" ? C : "none";
  });
  return onUnmounted(() => {
    p2(), g();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function $a(a2) {
  return a2 && getComputedStyle(a2).animationName || "none";
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
  setup(a2, { slots: t2, expose: e }) {
    var d;
    const { present: n2, forceMount: l } = toRefs(a2), s = ref(), { isPresent: r2 } = Gi(n2, s);
    e({ present: r2 });
    let i = t2.default({ present: r2 });
    i = Ua(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? undefined : i.length) > 1) {
      const c = (d = u == null ? undefined : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
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
    return () => l.value || n2.value || r2.value ? h(t2.default({ present: r2 })[0], {
      ref: (c) => {
        const f2 = $e(c);
        return typeof (f2 == null ? undefined : f2.hasAttribute) > "u" || (f2 != null && f2.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f2.firstElementChild : s.value = f2), f2;
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
  setup(a2) {
    const t2 = a2, e = Nl();
    e.contentId || (e.contentId = he(undefined, "radix-vue-collapsible-content"));
    const n2 = ref(), { forwardRef: l, currentElement: s } = R(), r2 = ref(0), i = ref(0), u = computed(() => e.open.value), d = ref(u.value), c = ref();
    return watch(
      () => {
        var f2;
        return [u.value, (f2 = n2.value) == null ? undefined : f2.present];
      },
      async () => {
        await nextTick();
        const f2 = s.value;
        if (!f2)
          return;
        c.value = c.value || {
          transitionDuration: f2.style.transitionDuration,
          animationName: f2.style.animationName
        }, f2.style.transitionDuration = "0s", f2.style.animationName = "none";
        const v = f2.getBoundingClientRect();
        i.value = v.height, r2.value = v.width, d.value || (f2.style.transitionDuration = c.value.transitionDuration, f2.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (f2, v) => (openBlock(), createBlock(unref(Pe), {
      ref_key: "presentRef",
      ref: n2,
      present: f2.forceMount || unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var p2, g;
        return [
          createVNode(unref(O), mergeProps(f2.$attrs, {
            id: unref(e).contentId,
            ref: unref(l),
            "as-child": t2.asChild,
            as: f2.as,
            "data-state": unref(e).open.value ? "open" : "closed",
            "data-disabled": (p2 = unref(e).disabled) != null && p2.value ? "" : undefined,
            hidden: !((g = n2.value) != null && g.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r2.value}px`
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
function Ll({ type: a2, defaultValue: t2, modelValue: e }) {
  const n2 = e || t2;
  if (vt(a2) && vt(e) && vt(t2))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (e !== undefined && t2 !== undefined && typeof e != typeof t2)
    throw new Error(
      `Invalid prop \`value\` of value \`${e}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t2}\`. The \`value\` prop must be:
  ${a2 === "single" ? "- a string" : a2 === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const l = e !== undefined || t2 !== undefined;
  if (a2 && l) {
    const s = Array.isArray(e) || Array.isArray(t2), r2 = e !== undefined ? "modelValue" : "defaultValue", i = r2 === "modelValue" ? typeof e : typeof t2;
    if (a2 === "single" && s)
      return console.error(`Invalid prop \`${r2}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r2} prop.`), "multiple";
    if (a2 === "multiple" && !s)
      return console.error(`Invalid prop \`${r2}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r2} prop.`), "single";
  }
  return l ? Array.isArray(n2) ? "multiple" : "single" : a2;
}
function Yi({ type: a2, defaultValue: t2, modelValue: e }) {
  return a2 || Ll({ type: a2, defaultValue: t2, modelValue: e });
}
function Xi({ type: a2, defaultValue: t2 }) {
  return t2 !== undefined ? t2 : a2 === "single" ? undefined : [];
}
function zl(a2, t2) {
  const e = ref(Yi(a2)), n2 = ne(a2, "modelValue", t2, {
    defaultValue: Xi(a2),
    passive: a2.modelValue === undefined,
    deep: true
  });
  watch(
    () => [a2.type, a2.modelValue, a2.defaultValue],
    () => {
      const r2 = Ll(a2);
      e.value !== r2 && (e.value = r2);
    },
    { immediate: true }
  );
  function l(r2) {
    if (e.value === "single")
      n2.value = r2 === n2.value ? undefined : r2;
    else {
      const i = [...n2.value || []];
      if (i.includes(r2)) {
        const u = i.findIndex((d) => d === r2);
        i.splice(u, 1);
      } else
        i.push(r2);
      n2.value = i;
    }
  }
  const s = computed(() => e.value === "single");
  return {
    modelValue: n2,
    type: e,
    changeModelValue: l,
    isSingle: s
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { dir: l, disabled: s } = toRefs(e), r2 = be(l), { modelValue: i, changeModelValue: u, isSingle: d } = zl(e, n2), { forwardRef: c, currentElement: f2 } = R();
    return Zi({
      disabled: s,
      direction: r2,
      orientation: e.orientation,
      parentElement: f2,
      isSingle: d,
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
  setup(a2, { expose: t2 }) {
    const e = a2, n2 = qa(), l = computed(
      () => n2.isSingle.value ? e.value === n2.modelValue.value : Array.isArray(n2.modelValue.value) && n2.modelValue.value.includes(e.value)
    ), s = computed(() => n2.disabled.value || e.disabled), r2 = computed(() => s.value ? "" : undefined), i = computed(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t2({ open: l, dataDisabled: r2 });
    const { currentRef: u, currentElement: d } = R();
    Ji({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r2,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function c(f2) {
      var m;
      const v = f2.target;
      if (Array.from(((m = n2.parentElement.value) == null ? undefined : m.querySelectorAll("[data-radix-vue-collection-item]")) ?? []).findIndex((_) => _ === v) === -1)
        return null;
      Rt(
        f2,
        d.value,
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
      "data-disabled": r2.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: withCtx(() => [
        renderSlot(f2.$slots, "default", { open: l.value })
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
  setup(a2) {
    const t2 = a2, e = qa(), n2 = Zn();
    return R(), (l, s) => (openBlock(), createBlock(unref(qi), {
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
        renderSlot(l.$slots, "default")
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
  setup(a2) {
    const t2 = a2, e = qa(), n2 = Zn();
    return R(), (l, s) => (openBlock(), createBlock(unref(O), {
      as: t2.as,
      "as-child": t2.asChild,
      "data-orientation": unref(e).orientation,
      "data-state": unref(n2).dataState.value,
      "data-disabled": unref(n2).dataDisabled.value
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
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
  setup(a2) {
    const t2 = a2, e = qa(), n2 = Zn();
    n2.triggerId || (n2.triggerId = he(undefined, "radix-vue-accordion-trigger"));
    function l() {
      const s = e.isSingle.value && n2.open.value && !e.collapsible;
      n2.disabled.value || s || e.changeModelValue(n2.value.value);
    }
    return (s, r2) => (openBlock(), createBlock(unref(Ui), {
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
      onClick: l
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
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
  setup(a2, { emit: t2 }) {
    const e = a2, l = ne(e, "open", t2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), s = ref(), r2 = ref(), { modal: i } = toRefs(e);
    return Qi({
      open: l,
      modal: i,
      openModal: () => {
        l.value = true;
      },
      onOpenChange: (u) => {
        l.value = u;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: r2
    }), (u, d) => renderSlot(u.$slots, "default", { open: unref(l) });
  }
}), tu = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t2 = a2, e = tt(), { forwardRef: n2, currentElement: l } = R();
    return e.contentId || (e.contentId = he(undefined, "radix-vue-dialog-content")), onMounted(() => {
      e.triggerElement.value = l.value;
    }), (s, r2) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      ref: unref(n2),
      type: s.as === "button" ? "button" : undefined,
      "aria-haspopup": "dialog",
      "aria-expanded": unref(e).open.value || false,
      "aria-controls": unref(e).open.value ? unref(e).contentId : undefined,
      "data-state": unref(e).open.value ? "open" : "closed",
      onClick: unref(e).onOpenToggle
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
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
  setup(a2) {
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
  setup(a2) {
    const t2 = a2;
    return (e, n2) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Hl(a2, t2) {
  var s;
  ((s = t2 == null ? undefined : t2.value) == null ? undefined : s.ownerDocument) ?? (globalThis == null ? undefined : globalThis.document);
  const n2 = ref(false);
  ref(() => {
  });
  return watchEffect((r2) => {
    return;
  }), {
    onPointerDownCapture: () => n2.value = true
  };
}
function Wl(a2, t2) {
  var l;
  ((l = t2 == null ? undefined : t2.value) == null ? undefined : l.ownerDocument) ?? (globalThis == null ? undefined : globalThis.document);
  const n2 = ref(false);
  return watchEffect((s) => {
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { forwardRef: l, currentElement: s } = R(), r2 = computed(
      () => {
        var g;
        return ((g = s.value) == null ? undefined : g.ownerDocument) ?? globalThis.document;
      }
    ), i = computed(() => je.layersRoot), u = computed(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = computed(() => je.layersWithOutsidePointerEventsDisabled.size > 0), c = computed(() => {
      const g = Array.from(i.value), [m] = [...je.layersWithOutsidePointerEventsDisabled].slice(-1), _ = g.indexOf(m);
      return u.value >= _;
    }), f2 = Hl(async (g) => {
      const m = [...je.branches].some(
        (_) => _ == null ? undefined : _.contains(g.target)
      );
      !c.value || m || (n2("pointerDownOutside", g), n2("interactOutside", g), await nextTick(), g.defaultPrevented || n2("dismiss"));
    }, s), v = Wl((g) => {
      [...je.branches].some(
        (_) => _ == null ? undefined : _.contains(g.target)
      ) || (n2("focusOutside", g), n2("interactOutside", g), g.defaultPrevented || n2("dismiss"));
    }, s);
    jn("Escape", (g) => {
      u.value === i.value.size - 1 && (n2("escapeKeyDown", g), g.defaultPrevented || n2("dismiss"));
    });
    let p2;
    return watchEffect((g) => {
      s.value && (e.disableOutsidePointerEvents && (je.layersWithOutsidePointerEventsDisabled.size === 0 && (p2 = r2.value.body.style.pointerEvents, r2.value.body.style.pointerEvents = "none"), je.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && je.layersWithOutsidePointerEventsDisabled.size === 1 && (r2.value.body.style.pointerEvents = p2);
      }));
    }), watchEffect((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), je.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, m) => (openBlock(), createBlock(unref(O), {
      ref: unref(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: d.value ? c.value ? "auto" : "none" : undefined
      }),
      onFocusCapture: unref(v).onFocusCapture,
      onBlurCapture: unref(v).onBlurCapture,
      onPointerdownCapture: unref(f2).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
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
  setup(a2) {
    const t2 = a2, { forwardRef: e, currentElement: n2 } = R();
    return onMounted(() => {
      je.branches.add(n2.value);
    }), onUnmounted(() => {
      je.branches.delete(n2.value);
    }), (l, s) => (openBlock(), createBlock(unref(O), mergeProps({ ref: unref(e) }, t2), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wn = "focusScope.autoFocusOnMount", _n = "focusScope.autoFocusOnUnmount", jo = { bubbles: false, cancelable: true };
function Oa(a2, { select: t2 = false } = {}) {
  const e = (undefined).activeElement;
  for (const n2 of a2)
    if (ct(n2, { select: t2 }), (undefined).activeElement !== e)
      return true;
}
function lu(a2) {
  const t2 = Jn(a2), e = Uo(t2, a2), n2 = Uo(t2.reverse(), a2);
  return [e, n2];
}
function Jn(a2) {
  const t2 = [], e = (undefined).createTreeWalker(a2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n2) => {
      const l = n2.tagName === "INPUT" && n2.type === "hidden";
      return n2.disabled || n2.hidden || l ? NodeFilter.FILTER_SKIP : n2.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t2.push(e.currentNode);
  return t2;
}
function Uo(a2, t2) {
  for (const e of a2)
    if (!su(e, { upTo: t2 }))
      return e;
}
function su(a2, { upTo: t2 }) {
  if (getComputedStyle(a2).visibility === "hidden")
    return true;
  for (; a2; ) {
    if (t2 !== undefined && a2 === t2)
      return false;
    if (getComputedStyle(a2).display === "none")
      return true;
    a2 = a2.parentElement;
  }
  return false;
}
function ru(a2) {
  return a2 instanceof HTMLInputElement && "select" in a2;
}
function ct(a2, { select: t2 = false } = {}) {
  if (a2 && a2.focus) {
    const e = (undefined).activeElement;
    a2.focus({ preventScroll: true }), a2 !== e && ru(a2) && t2 && a2.select();
  }
}
const iu = ai(() => ref([]));
function uu() {
  const a2 = iu();
  return {
    add(t2) {
      const e = a2.value[0];
      t2 !== e && (e == null || e.pause()), a2.value = Go(a2.value, t2), a2.value.unshift(t2);
    },
    remove(t2) {
      var e;
      a2.value = Go(a2.value, t2), (e = a2.value[0]) == null || e.resume();
    }
  };
}
function Go(a2, t2) {
  const e = [...a2], n2 = e.indexOf(t2);
  return n2 !== -1 && e.splice(n2, 1), e;
}
function du(a2) {
  return a2.filter((t2) => t2.tagName !== "A");
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { currentRef: l, currentElement: s } = R();
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
      const f2 = s.value;
      if (await nextTick(), !f2)
        return;
      i.add(u);
      const v = (undefined).activeElement;
      if (!f2.contains(v)) {
        const g = new CustomEvent(wn, jo);
        f2.addEventListener(wn, (m) => n2("mountAutoFocus", m)), f2.dispatchEvent(g), g.defaultPrevented || (Oa(du(Jn(f2)), {
          select: true
        }), (undefined).activeElement === v && ct(f2));
      }
      c(() => {
        f2.removeEventListener(wn, (_) => n2("mountAutoFocus", _));
        const g = new CustomEvent(_n, jo), m = (_) => {
          n2("unmountAutoFocus", _);
        };
        f2.addEventListener(_n, m), f2.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || ct(v ?? (undefined).body, { select: true }), f2.removeEventListener(_n, m), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const f2 = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, v = (undefined).activeElement;
      if (f2 && v) {
        const p2 = c.currentTarget, [g, m] = lu(p2);
        g && m ? !c.shiftKey && v === m ? (c.preventDefault(), e.loop && ct(g, { select: true })) : c.shiftKey && v === g && (c.preventDefault(), e.loop && ct(m, { select: true })) : v === p2 && c.preventDefault();
      }
    }
    return (c, f2) => (openBlock(), createBlock(unref(O), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
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
function Qn(a2) {
  return a2 ? "open" : "closed";
}
function $n(a2) {
  const t2 = (undefined).activeElement;
  for (const e of a2)
    if (e === t2 || (e.focus(), (undefined).activeElement !== t2))
      return;
}
function hu(a2, t2) {
  const { x: e, y: n2 } = a2;
  let l = false;
  for (let s = 0, r2 = t2.length - 1; s < t2.length; r2 = s++) {
    const i = t2[s].x, u = t2[s].y, d = t2[r2].x, c = t2[r2].y;
    u > n2 != c > n2 && e < (d - i) * (n2 - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function yu(a2, t2) {
  if (!t2)
    return false;
  const e = { x: a2.clientX, y: a2.clientY };
  return hu(e, t2);
}
function ua(a2) {
  return a2.pointerType === "mouse";
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = tt(), { forwardRef: s, currentElement: r2 } = R();
    return l.titleId || (l.titleId = he(undefined, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = he(undefined, "radix-vue-dialog-description")), onMounted(() => {
      l.contentElement = r2, (undefined).activeElement !== (undefined).body && (l.triggerElement.value = (undefined).activeElement);
    }), (i, u) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n2("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n2("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), mergeProps({
          id: unref(l).contentId,
          ref: unref(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(l).descriptionId,
          "aria-labelledby": unref(l).titleId,
          "data-state": unref(Qn)(unref(l).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n2("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n2("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n2("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n2("pointerDownOutside", d))
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = tt(), s = Ae(n2), { forwardRef: r2, currentElement: i } = R();
    return ya(i), (u, d) => (openBlock(), createBlock(Ul, mergeProps({ ...e, ...unref(s) }, {
      ref: unref(r2),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": true,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f2;
        c.defaultPrevented || (c.preventDefault(), (f2 = unref(l).triggerElement.value) == null || f2.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const f2 = c.detail.originalEvent, v = f2.button === 0 && f2.ctrlKey === true;
        (f2.button === 2 || v) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
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
  setup(a2, { emit: t2 }) {
    const e = a2, l = Ae(t2);
    R();
    const s = tt(), r2 = ref(false), i = ref(false);
    return (u, d) => (openBlock(), createBlock(Ul, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f2;
        c.defaultPrevented || (r2.value || (f2 = unref(s).triggerElement.value) == null || f2.focus(), c.preventDefault()), r2.value = false, i.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var p2;
        c.defaultPrevented || (r2.value = true, c.detail.originalEvent.type === "pointerdown" && (i.value = true));
        const f2 = c.target;
        ((p2 = unref(s).triggerElement.value) == null ? undefined : p2.contains(f2)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = tt(), s = Ae(n2), { forwardRef: r2 } = R();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(wu, mergeProps({
          key: 0,
          ref: unref(r2)
        }, { ...e, ...unref(s), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(_u, mergeProps({
          key: 1,
          ref: unref(r2)
        }, { ...e, ...unref(s), ...i.$attrs }), {
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
  setup(a2) {
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
  setup(a2) {
    const t2 = tt(), { forwardRef: e } = R();
    return (n2, l) => {
      var s;
      return (s = unref(t2)) != null && s.modal.value ? (openBlock(), createBlock(unref(Pe), {
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
  setup(a2) {
    const t2 = a2;
    R();
    const e = tt();
    return (n2, l) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      type: n2.as === "button" ? "button" : undefined,
      onClick: l[0] || (l[0] = (s) => unref(e).onOpenChange(false))
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
  setup(a2) {
    const t2 = a2, e = tt();
    return R(), (n2, l) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
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
  setup(a2) {
    const t2 = a2;
    R();
    const e = tt();
    return (n2, l) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
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
  setup(a2) {
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
function Tu(a2, t2) {
  const e = ref("idle"), n2 = ref(false), l = (s) => () => {
    n2.value && (e.value = s);
  };
  return onMounted(() => {
    n2.value = true, watch([() => a2.value, () => t2 == null ? undefined : t2.value], ([s, r2]) => {
      if (!s)
        e.value = "error";
      else {
        const i = new (undefined).Image();
        e.value = "loading", i.onload = l("loaded"), i.onerror = l("error"), i.src = s, r2 && (i.referrerPolicy = r2);
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { src: l, referrerPolicy: s } = toRefs(e);
    R();
    const r2 = ql(), i = Tu(l, s);
    return watch(
      i,
      (u) => {
        n2("loadingStatusChange", u), u !== "idle" && (r2.imageLoadingStatus.value = u);
      },
      { immediate: true }
    ), (u, d) => withDirectives((openBlock(), createBlock(unref(O), {
      role: "img",
      "as-child": u.asChild,
      as: u.as,
      src: unref(l),
      "referrer-policy": unref(s)
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
  setup(a2) {
    const t2 = a2, e = ql();
    R();
    const n2 = ref(false);
    let l;
    return watch(e.imageLoadingStatus, (s) => {
      s === "loading" && (n2.value = false, t2.delayMs ? l = setTimeout(() => {
        n2.value = true, clearTimeout(l);
      }, t2.delayMs) : n2.value = true);
    }, { immediate: true }), (s, r2) => n2.value && unref(e).imageLoadingStatus.value !== "loaded" ? (openBlock(), createBlock(unref(O), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
const [Zl, td] = Q("PopperRoot"), Ot = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(a2) {
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
  setup(a2) {
    const t2 = a2, { forwardRef: e, currentElement: n2 } = R(), l = Zl();
    return watchEffect(() => {
      l.onAnchorChange(t2.element ?? n2.value);
    }), (s, r2) => (openBlock(), createBlock(unref(O), {
      ref: unref(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function ad(a2) {
  return a2 !== null;
}
function nd(a2) {
  return {
    name: "transformOrigin",
    options: a2,
    fn(t2) {
      var _, C, $;
      const { placement: e, rects: n2, middlewareData: l } = t2, r2 = ((_ = l.arrow) == null ? undefined : _.centerOffset) !== 0, i = r2 ? 0 : a2.arrowWidth, u = r2 ? 0 : a2.arrowHeight, [d, c] = Bn(e), f2 = { start: "0%", center: "50%", end: "100%" }[c], v = (((C = l.arrow) == null ? undefined : C.x) ?? 0) + i / 2, p2 = ((($ = l.arrow) == null ? undefined : $.y) ?? 0) + u / 2;
      let g = "", m = "";
      return d === "bottom" ? (g = r2 ? f2 : `${v}px`, m = `${-u}px`) : d === "top" ? (g = r2 ? f2 : `${v}px`, m = `${n2.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, m = r2 ? f2 : `${p2}px`) : d === "left" && (g = `${n2.floating.width + u}px`, m = r2 ? f2 : `${p2}px`), { data: { x: g, y: m } };
    }
  };
}
function Bn(a2) {
  const [t2, e = "center"] = a2.split("-");
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = Zl(), { forwardRef: s, currentElement: r2 } = R(), i = ref(), u = ref(), { width: d, height: c } = Vl(u), f2 = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), v = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), p2 = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = computed(() => ({
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
        ...g.value
      }),
      e.avoidCollisions && shift({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? limitShift() : undefined,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && flip({
        ...g.value
      }),
      size({
        ...g.value,
        apply: ({ elements: A, rects: F, availableWidth: j2, availableHeight: W2 }) => {
          const { width: ee, height: G } = F.reference, J = A.floating.style;
          J.setProperty(
            "--radix-popper-available-width",
            `${j2}px`
          ), J.setProperty(
            "--radix-popper-available-height",
            `${W2}px`
          ), J.setProperty(
            "--radix-popper-anchor-width",
            `${ee}px`
          ), J.setProperty(
            "--radix-popper-anchor-height",
            `${G}px`
          );
        }
      }),
      u.value && arrow({ element: u.value, padding: e.arrowPadding }),
      nd({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && hide({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: _, placement: C, isPositioned: $, middlewareData: h2 } = useFloating(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: f2,
        whileElementsMounted: (...A) => autoUpdate(...A, {
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
      $.value && n2("placed");
    });
    const D = computed(
      () => {
        var A;
        return ((A = h2.value.arrow) == null ? undefined : A.centerOffset) !== 0;
      }
    ), I = ref("");
    watchEffect(() => {
      r2.value && (I.value = (undefined).getComputedStyle(r2.value).zIndex);
    });
    const M = computed(() => {
      var A;
      return ((A = h2.value.arrow) == null ? undefined : A.x) ?? 0;
    }), V = computed(() => {
      var A;
      return ((A = h2.value.arrow) == null ? undefined : A.y) ?? 0;
    });
    return ld({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: M,
      arrowY: V,
      shouldHideArrow: D
    }), (A, F) => {
      var j2, W2, ee;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(_),
          transform: unref($) ? unref(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--radix-popper-transform-origin": [
            (j2 = unref(h2).transformOrigin) == null ? undefined : j2.x,
            (W2 = unref(h2).transformOrigin) == null ? undefined : W2.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = unref(h2).hide) == null ? undefined : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        createVNode(unref(O), mergeProps({ ref: unref(s) }, A.$attrs, {
          "as-child": e.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref($) ? undefined : "none"
          }
        }), {
          default: withCtx(() => [
            renderSlot(A.$slots, "default")
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2) {
    const { forwardRef: t2 } = R(), e = od(), n2 = computed(() => id[e.placedSide.value]);
    return (l, s) => {
      var r2, i, u, d;
      return openBlock(), createElementBlock("span", {
        ref: (c) => {
          unref(e).onArrowChange(c);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (r2 = unref(e).arrowX) != null && r2.value ? `${(i = unref(e).arrowX) == null ? undefined : i.value}px` : undefined,
          top: (u = unref(e).arrowY) != null && u.value ? `${(d = unref(e).arrowY) == null ? undefined : d.value}px` : undefined,
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
        createVNode(rd, mergeProps(l.$attrs, {
          ref: unref(t2),
          style: {
            display: "block"
          },
          as: l.as,
          "as-child": l.asChild,
          width: l.width,
          height: l.height
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
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
  setup(a2) {
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
  setup(a2) {
    const t2 = a2, e = computed(() => typeof t2.value == "string" || typeof t2.value == "number" || typeof t2.value == "boolean" ? [{ name: t2.name, value: t2.value }] : typeof t2.value == "object" && Array.isArray(t2.value) ? t2.value.flatMap((n2, l) => typeof n2 == "object" ? Object.entries(n2).map(([s, r2]) => ({ name: `[${l}][${t2.name}][${s}]`, value: r2 })) : { name: `[${t2.name}][${l}]`, value: n2 }) : t2.value !== null && typeof t2.value == "object" && !Array.isArray(t2.value) ? Object.entries(t2.value).map(([n2, l]) => ({ name: `[${t2.name}][${n2}]`, value: l })) : []);
    return (n2, l) => (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (s) => (openBlock(), createBlock(Zt, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n2.required,
      disabled: n2.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), ud = "data-radix-vue-collection-item", [ao, dd] = Q("CollectionProvider");
function ba(a2 = ud) {
  const t2 = ref(/* @__PURE__ */ new Map()), e = ref(), n2 = dd({
    collectionRef: e,
    itemMap: t2,
    attrName: a2
  }), { getItems: l } = Qt(n2), s = computed(() => Array.from(n2.itemMap.value.values())), r2 = computed(() => n2.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r2 };
}
const Ca = defineComponent({
  name: "CollectionSlot",
  setup(a2, { slots: t2 }) {
    const e = ao(), { primitiveElement: n2, currentElement: l } = Ie();
    return watch(l, () => {
      e.collectionRef.value = l.value;
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
  setup(a2, { slots: t2, attrs: e }) {
    const n2 = ao(), { primitiveElement: l, currentElement: s } = Ie();
    return watchEffect((r2) => {
      if (s.value) {
        const i = markRaw(s.value);
        n2.itemMap.value.set(i, { ref: s.value, value: a2.value }), r2(() => n2.itemMap.value.delete(i));
      }
    }), () => h(Xn, { ...e, [n2.attrName]: "", ref: l }, t2);
  }
});
function Qt(a2) {
  const t2 = a2 ?? ao();
  return { getItems: () => {
    const n2 = t2.collectionRef.value;
    if (!n2)
      return [];
    const l = Array.from(n2.querySelectorAll(`[${t2.attrName}]`));
    return Array.from(t2.itemMap.value.values()).sort(
      (i, u) => l.indexOf(i.ref) - l.indexOf(u.ref)
    );
  } };
}
function Xa(a2) {
  const t2 = Ga({
    nonce: ref()
  });
  return computed(() => {
    var e;
    return (a2 == null ? undefined : a2.value) || ((e = t2.nonce) == null ? undefined : e.value);
  });
}
const Za = /* @__PURE__ */ defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t2 = a2;
    return (e, n2) => (openBlock(), createBlock(unref(kt), normalizeProps(guardReactiveProps(t2)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function bd() {
  const a2 = ref(false);
  return onMounted(() => {
    Le("keydown", () => {
      a2.value = true;
    }, { capture: true, passive: true }), Le(["pointerdown", "pointermove"], () => {
      a2.value = false;
    }, { capture: true, passive: true });
  }), a2;
}
const Cd = Sl(bd), [Mt, es] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [wa, wd] = Q("MenuRoot"), oo = /* @__PURE__ */ defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { modal: l, dir: s } = toRefs(e), r2 = be(s), i = ne(e, "open", n2), u = ref(), d = Cd();
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
      isUsingKeyboardRef: d,
      dir: r2,
      modal: l
    }), (c, f2) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), _d2 = "rovingFocusGroup.onEntryFocus", xd = { bubbles: false, cancelable: true }, Ja = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Sd(a2, t2) {
  return t2 !== "rtl" ? a2 : a2 === "ArrowLeft" ? "ArrowRight" : a2 === "ArrowRight" ? "ArrowLeft" : a2;
}
function ts(a2, t2, e) {
  const n2 = Sd(a2.key, e);
  if (!(t2 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n2)) && !(t2 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n2)))
    return Ja[n2];
}
function as(a2, t2 = false, e) {
  const n2 = (e == null ? undefined : e.activeElement) ?? (undefined).activeElement;
  for (const l of a2)
    if (l === n2 || (l.focus({ preventScroll: t2 }), (undefined).activeElement !== n2))
      return;
}
function Ed(a2, t2) {
  return a2.map((e, n2) => a2[(t2 + n2) % a2.length]);
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
  setup(a2, { expose: t2, emit: e }) {
    const n2 = a2, l = e, { loop: s, orientation: r2, dir: i } = toRefs(n2), u = be(i), d = ne(n2, "currentTabStopId", l, {
      defaultValue: n2.defaultCurrentTabStopId,
      passive: n2.currentTabStopId === undefined
    }), c = ref(false), f2 = ref(false), v = ref(0), { getItems: p2 } = ba();
    function g(_) {
      const C = !f2.value;
      if (_.currentTarget && _.target === _.currentTarget && C && !c.value) {
        const $ = new CustomEvent(_d2, xd);
        if (_.currentTarget.dispatchEvent($), l("entryFocus", $), !$.defaultPrevented) {
          const h2 = p2().map((I) => I.ref).filter((I) => I.dataset.disabled !== ""), E = h2.find((I) => I.getAttribute("data-active") === "true"), P = h2.find(
            (I) => I.id === d.value
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
      loop: s,
      dir: u,
      orientation: r2,
      currentTabStopId: d,
      onItemFocus: (_) => {
        d.value = _;
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
          "data-orientation": unref(r2),
          as: _.as,
          "as-child": _.asChild,
          dir: unref(u),
          style: { outline: "none" },
          onMousedown: C[0] || (C[0] = ($) => f2.value = true),
          onMouseup: m,
          onFocus: g,
          onBlur: C[1] || (C[1] = ($) => c.value = false)
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
  setup(a2) {
    const t2 = a2, e = Pd(), n2 = computed(() => t2.tabStopId || he()), l = computed(
      () => e.currentTabStopId.value === n2.value
    ), { getItems: s } = Qt(), { primitiveElement: r2, currentElement: i } = Ie(), u = computed(() => {
      var c;
      return (c = i.value) == null ? undefined : c.getRootNode();
    });
    onMounted(() => {
      t2.focusable && e.onFocusableItemAdd();
    }), onUnmounted(() => {
      t2.focusable && e.onFocusableItemRemove();
    });
    function d(c) {
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
        let v = [...s().map((p2) => p2.ref).filter((p2) => p2.dataset.disabled !== "")];
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
          ref: r2,
          tabindex: l.value ? 0 : -1,
          "data-orientation": unref(e).orientation.value,
          "data-active": c.active,
          "data-disabled": c.focusable ? undefined : "",
          as: c.as,
          "as-child": c.asChild,
          onMousedown: f2[0] || (f2[0] = (v) => {
            c.focusable ? unref(e).onItemFocus(n2.value) : v.preventDefault();
          }),
          onFocus: f2[1] || (f2[1] = (v) => unref(e).onItemFocus(n2.value)),
          onKeydown: d
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = Mt(), s = wa(), { trapFocus: r2, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
    Gn(), ha(i.value);
    const d = ref(""), c = ref(0), f2 = ref(0), v = ref(null), p2 = ref("right"), g = ref(0), m = ref(null), { createCollection: _ } = Me(), { forwardRef: C, currentElement: $ } = R(), h2 = _($);
    watch($, (A) => {
      l.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = ga(h2);
    onUnmounted(() => {
      (undefined).clearTimeout(c.value);
    });
    function P(A) {
      var j2, W2;
      return p2.value === ((j2 = v.value) == null ? undefined : j2.side) && yu(A, (W2 = v.value) == null ? undefined : W2.area);
    }
    async function D(A) {
      var F;
      n2("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (F = $.value) == null || F.focus({
        preventScroll: true
      }));
    }
    function I(A) {
      if (A.defaultPrevented)
        return;
      const j2 = A.target.closest("[data-radix-menu-content]") === A.currentTarget, W2 = A.ctrlKey || A.altKey || A.metaKey, ee = A.key.length === 1, G = Rt(
        A,
        (undefined).activeElement,
        $.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? undefined : s.dir.value,
          focus: true,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (G)
        return G == null ? undefined : G.focus();
      if (A.code === "Space" || (j2 && (A.key === "Tab" && A.preventDefault(), !W2 && ee && E(A.key)), A.target !== $.value) || !pu.includes(A.key))
        return;
      A.preventDefault();
      const J = h2.value;
      jl.includes(A.key) && J.reverse(), $n(J);
    }
    function M(A) {
      var F, j2;
      (j2 = (F = A == null ? undefined : A.currentTarget) == null ? undefined : F.contains) != null && j2.call(F, A.target) || ((undefined).clearTimeout(c.value), d.value = "");
    }
    function V(A) {
      var W2;
      if (!ua(A))
        return;
      const F = A.target, j2 = g.value !== A.clientX;
      if ((W2 = A == null ? undefined : A.currentTarget) != null && W2.contains(F) && j2) {
        const ee = A.clientX > g.value ? "right" : "left";
        p2.value = ee, g.value = A.clientX;
      }
    }
    return $d({
      onItemEnter: (A) => !!P(A),
      onItemLeave: (A) => {
        var F;
        P(A) || ((F = $.value) == null || F.focus(), m.value = null);
      },
      onTriggerLeave: (A) => !!P(A),
      searchRef: d,
      pointerGraceTimerRef: f2,
      onPointerGraceIntentChange: (A) => {
        v.value = A;
      }
    }), (A, F) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      trapped: unref(r2),
      onMountAutoFocus: D,
      onUnmountAutoFocus: F[7] || (F[7] = (j2) => n2("closeAutoFocus", j2))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          "as-child": "",
          "disable-outside-pointer-events": unref(i),
          onEscapeKeyDown: F[2] || (F[2] = (j2) => n2("escapeKeyDown", j2)),
          onPointerDownOutside: F[3] || (F[3] = (j2) => n2("pointerDownOutside", j2)),
          onFocusOutside: F[4] || (F[4] = (j2) => n2("focusOutside", j2)),
          onInteractOutside: F[5] || (F[5] = (j2) => n2("interactOutside", j2)),
          onDismiss: F[6] || (F[6] = (j2) => n2("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(Vt), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": F[0] || (F[0] = (j2) => m.value = j2),
              "as-child": "",
              orientation: "vertical",
              dir: unref(s).dir.value,
              loop: unref(u),
              onEntryFocus: F[1] || (F[1] = (j2) => {
                n2("entryFocus", j2), unref(s).isUsingKeyboardRef.value || j2.preventDefault();
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(Bt), {
                  ref: unref(C),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": unref(Qn)(unref(l).open.value),
                  dir: unref(s).dir.value,
                  side: A.side,
                  "side-offset": A.sideOffset,
                  align: A.align,
                  "align-offset": A.alignOffset,
                  "avoid-collisions": A.avoidCollisions,
                  "collision-boundary": A.collisionBoundary,
                  "collision-padding": A.collisionPadding,
                  "arrow-padding": A.arrowPadding,
                  "prioritize-position": A.prioritizePosition,
                  sticky: A.sticky,
                  "hide-when-detached": A.hideWhenDetached,
                  onKeydown: I,
                  onBlur: M,
                  onPointermove: V
                }, {
                  default: withCtx(() => [
                    renderSlot(A.$slots, "default")
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
  setup(a2) {
    const t2 = a2, e = lo(), { forwardRef: n2 } = R(), l = ref(false);
    async function s(i) {
      if (!i.defaultPrevented && ua(i)) {
        if (t2.disabled)
          e.onItemLeave(i);
        else if (!e.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: true });
        }
      }
    }
    async function r2(i) {
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
          "data-highlighted": l.value ? "" : undefined,
          onPointermove: s,
          onPointerleave: r2,
          onFocus: u[0] || (u[0] = async (d) => {
            await nextTick(), !(d.defaultPrevented || i.disabled) && (l.value = true);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await nextTick(), !d.defaultPrevented && (l.value = false);
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
}), _a2 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { forwardRef: l, currentElement: s } = R(), r2 = wa(), i = lo(), u = ref(false);
    async function d() {
      const c = s.value;
      if (!e.disabled && c) {
        const f2 = new CustomEvent(cu, {
          bubbles: true,
          cancelable: true
        });
        n2("select", f2), await nextTick(), f2.defaultPrevented ? u.value = false : r2.onClose();
      }
    }
    return (c, f2) => (openBlock(), createBlock(ns, mergeProps(e, {
      ref: unref(l),
      onClick: d,
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = xe(e, n2), s = Mt(), { forwardRef: r2, currentElement: i } = R();
    return ya(i), (u, d) => (openBlock(), createBlock(so, mergeProps(unref(l), {
      ref: unref(r2),
      "trap-focus": unref(s).open.value,
      "disable-outside-pointer-events": unref(s).open.value,
      "disable-outside-scroll": true,
      onDismiss: d[0] || (d[0] = (c) => unref(s).onOpenChange(false)),
      onFocusOutside: d[1] || (d[1] = withModifiers((c) => n2("focusOutside", c), ["prevent"]))
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
  setup(a2, { emit: t2 }) {
    const l = xe(a2, t2), s = Mt();
    return (r2, i) => (openBlock(), createBlock(so, mergeProps(unref(l), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: i[0] || (i[0] = (u) => unref(s).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(r2.$slots, "default")
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
  setup(a2, { emit: t2 }) {
    const l = xe(a2, t2), s = Mt(), r2 = wa();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        unref(r2).modal.value ? (openBlock(), createBlock(Id, normalizeProps(mergeProps({ key: 0 }, { ...i.$attrs, ...unref(l) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Td, normalizeProps(mergeProps({ key: 1 }, { ...i.$attrs, ...unref(l) })), {
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2;
    R();
    const l = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), s = ref(), { modal: r2, dir: i } = toRefs(e), u = be(i);
    return ic({
      open: l,
      onOpenChange: (d) => {
        l.value = d;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: r2,
      dir: u
    }), (d, c) => (openBlock(), createBlock(unref(oo), {
      open: unref(l),
      "onUpdate:open": c[0] || (c[0] = (f2) => isRef(l) ? l.value = f2 : null),
      dir: unref(u),
      modal: unref(r2)
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", { open: unref(l) })
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
  setup(a2) {
    const t2 = a2, e = us(), { forwardRef: n2, currentElement: l } = R();
    return onMounted(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = he(undefined, "radix-vue-dropdown-menu-trigger")), (s, r2) => (openBlock(), createBlock(unref(Za), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: unref(e).triggerId,
          ref: unref(n2),
          type: s.as === "button" ? "button" : undefined,
          "as-child": t2.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).open.value ? unref(e).contentId : undefined,
          "data-disabled": s.disabled ? "" : undefined,
          disabled: s.disabled,
          "data-state": unref(e).open.value ? "open" : "closed",
          onClick: r2[0] || (r2[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === false && ((u = unref(e)) == null || u.onOpenToggle(), await nextTick(), unref(e).open.value && i.preventDefault());
          }),
          onKeydown: r2[1] || (r2[1] = withKeys(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && unref(e).onOpenToggle(), i.key === "ArrowDown" && unref(e).onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2, { emit: t2 }) {
    const l = xe(a2, t2);
    R();
    const s = us(), r2 = ref(false);
    function i(u) {
      u.defaultPrevented || (r2.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r2.value = false, u.preventDefault());
    }
    return s.contentId || (s.contentId = he(undefined, "radix-vue-dropdown-menu-content")), (u, d) => {
      var c;
      return openBlock(), createBlock(unref(uo), mergeProps(unref(l), {
        id: unref(s).contentId,
        "aria-labelledby": (c = unref(s)) == null ? undefined : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (f2) => {
          var m;
          if (f2.defaultPrevented) return;
          const v = f2.detail.originalEvent, p2 = v.button === 0 && v.ctrlKey === true, g = v.button === 2 || p2;
          (!unref(s).modal.value || g) && (r2.value = true), (m = unref(s).triggerElement.value) != null && m.contains(f2.target) && f2.preventDefault();
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
  setup(a2, { emit: t2 }) {
    const e = a2, l = Ae(t2);
    return R(), (s, r2) => (openBlock(), createBlock(unref(_a2), normalizeProps(guardReactiveProps({ ...e, ...unref(l) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function mc(a2, t2, e) {
  return a2 === undefined ? false : Array.isArray(a2) ? a2.some((n2) => Ut(n2, t2, e)) : Ut(a2, t2, e);
}
function Ut(a2, t2, e) {
  return a2 === undefined || t2 === undefined ? false : typeof a2 == "string" ? a2 === t2 : typeof e == "function" ? e(a2, t2) : typeof e == "string" ? (a2 == null ? undefined : a2[e]) === (t2 == null ? undefined : t2[e]) : Xe(a2, t2);
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { multiple: l, highlightOnHover: s, orientation: r2, disabled: i, selectionBehavior: u, dir: d } = toRefs(e), { getItems: c } = ba(), { handleTypeaheadSearch: f2 } = ga(), { primitiveElement: v, currentElement: p2 } = Ie(), g = et(), m = be(d), _ = Qe(p2), C = ref(), $ = ref(false), h2 = ref(true), E = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue ?? (l.value ? [] : undefined),
      passive: e.modelValue === undefined,
      deep: true
    });
    function P(N2) {
      if ($.value = true, Array.isArray(E.value)) {
        const Z = E.value.findIndex((X2) => Ut(X2, N2, e.by));
        if (e.selectionBehavior === "toggle") {
          const X2 = [...E.value];
          Z === -1 ? X2.push(N2) : X2.splice(Z, 1), E.value = X2;
        } else
          E.value = [N2], C.value = N2;
      } else
        e.selectionBehavior === "toggle" && Ut(E.value, N2, e.by) ? E.value = undefined : E.value = N2;
      setTimeout(() => {
        $.value = false;
      }, 1);
    }
    const D = ref(null), I = ref(null), M = ref(false), V = ia(), A = ia();
    function F() {
      return c().map((N2) => N2.ref).filter((N2) => N2.dataset.disabled !== "");
    }
    function j2(N2) {
      if (!N2)
        return;
      D.value = N2, D.value.focus(), D.value.scrollIntoView({ block: "nearest" });
      const Z = c().find((X2) => X2.ref === N2);
      n2("highlight", Z);
    }
    function W2(N2) {
      D.value && D.value.click();
    }
    function ee(N2) {
      if ($.value = true, M.value)
        A.trigger(N2);
      else {
        const Z = N2.altKey || N2.ctrlKey || N2.metaKey;
        if (Z && N2.key === "a" && l.value) {
          const X2 = c(), re2 = X2.map((Y) => Y.value);
          E.value = [...re2], N2.preventDefault(), j2(X2[X2.length - 1].ref);
        } else if (!Z) {
          const X2 = f2(N2.key, F());
          X2 && j2(X2);
        }
      }
      setTimeout(() => {
        $.value = false;
      }, 1);
    }
    function G(N2) {
      const Z = D.value;
      Z != null && Z.isConnected && (I.value = Z), D.value = null, n2("leave", N2);
    }
    function J(N2) {
      var X2, re2;
      const Z = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
      if ((X2 = N2.currentTarget) == null || X2.dispatchEvent(Z), n2("entryFocus", Z), !Z.defaultPrevented)
        if (I.value)
          j2(I.value);
        else {
          const Y = (re2 = F()) == null ? undefined : re2[0];
          j2(Y);
        }
    }
    function K2(N2) {
      const Z = ts(N2, r2.value, m.value);
      if (!Z)
        return;
      let X2 = F();
      if (D.value) {
        if (Z === "last")
          X2.reverse();
        else if (Z === "prev" || Z === "next") {
          Z === "prev" && X2.reverse();
          const re2 = X2.indexOf(D.value);
          X2 = X2.slice(re2 + 1);
        }
        z(N2, X2[0]);
      }
      if (X2.length) {
        const re2 = !D.value && Z === "prev" ? X2.length - 1 : 0;
        j2(X2[re2]);
      }
      if (M.value)
        return A.trigger(N2);
    }
    function z(N2, Z) {
      var re2;
      if (!(M.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (N2.altKey || N2.ctrlKey || N2.metaKey) && !N2.shiftKey) && N2.shiftKey) {
        const Y = c().filter((_e6) => _e6.ref.dataset.disabled !== "");
        let se = (re2 = Y.find((_e6) => _e6.ref === Z)) == null ? undefined : re2.value;
        if (N2.key === g.END ? se = Y[Y.length - 1].value : N2.key === g.HOME && (se = Y[0].value), !se || !C.value)
          return;
        const fe = Dt(Y.map((_e6) => _e6.value), C.value, se);
        E.value = fe;
      }
    }
    async function L(N2) {
      if (M.value)
        V.trigger(N2);
      else {
        await nextTick();
        const X2 = F().find((re2) => re2.dataset.state === "checked");
        X2 && j2(X2);
      }
    }
    return watch(E, () => {
      $.value || nextTick(() => {
        L();
      });
    }, { immediate: true, deep: true }), hc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l,
      orientation: r2,
      dir: m,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: D,
      isVirtual: M,
      virtualFocusHook: V,
      virtualKeydownHook: A,
      by: e.by,
      firstValue: C,
      selectionBehavior: u,
      focusable: h2,
      onLeave: G,
      onEnter: J,
      onChangeHighlight: j2,
      onKeydownEnter: W2,
      onKeydownNavigation: K2,
      onKeydownTypeAhead: ee
    }), (N2, Z) => (openBlock(), createBlock(unref(O), {
      ref_key: "primitiveElement",
      ref: v,
      as: N2.as,
      "as-child": N2.asChild,
      dir: unref(m),
      "data-disabled": unref(i) ? "" : undefined,
      onPointerleave: G,
      onFocusout: Z[0] || (Z[0] = async (X2) => {
        const re2 = X2.relatedTarget || X2.target;
        await nextTick(), D.value && unref(p2) && !unref(p2).contains(re2) && G(X2);
      })
    }, {
      default: withCtx(() => [
        renderSlot(N2.$slots, "default", { modelValue: unref(E) }),
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
  setup(a2) {
    const t2 = en(), e = It(false, 10);
    return (n2, l) => (openBlock(), createBlock(unref(Ca), null, {
      default: withCtx(() => [
        createVNode(unref(O), {
          role: "listbox",
          as: n2.as,
          "as-child": n2.asChild,
          tabindex: unref(t2).focusable.value ? unref(t2).highlightedElement.value ? "-1" : "0" : undefined,
          "aria-orientation": unref(t2).orientation.value,
          "aria-multiselectable": !!unref(t2).multiple.value,
          "data-orientation": unref(t2).orientation.value,
          onMousedown: l[0] || (l[0] = withModifiers((s) => e.value = true, ["left"])),
          onFocus: l[1] || (l[1] = (s) => {
            unref(e) || unref(t2).onEnter(s);
          }),
          onKeydown: [
            l[2] || (l[2] = withKeys(withModifiers((s) => {
              unref(t2).focusable.value && unref(t2).onKeydownNavigation(s);
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { forwardRef: l, currentElement: s } = R(), r2 = he(undefined, "radix-vue-listbox-item"), i = en(), u = computed(() => s.value === i.highlightedElement.value), d = computed(() => mc(i.modelValue.value, e.value, i.by)), c = computed(() => i.disabled.value || e.disabled);
    async function f2(p2) {
      n2("select", p2), !(p2 != null && p2.defaultPrevented) && !c.value && p2 && (i.onValueChange(e.value), i.onChangeHighlight(p2.target));
    }
    function v(p2) {
      const g = { originalEvent: p2, value: e.value };
      Wt(yc, f2, g);
    }
    return bc({
      isSelected: d
    }), (p2, g) => (openBlock(), createBlock(unref(Jt), { value: p2.value }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: unref(r2),
          ref: unref(l),
          role: "option",
          tabindex: unref(i).focusable.value ? u.value ? "0" : "-1" : undefined,
          "aria-selected": d.value,
          as: p2.as,
          "as-child": p2.asChild,
          disabled: c.value ? "" : undefined,
          "data-disabled": c.value ? "" : undefined,
          "data-highlighted": u.value ? "" : undefined,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: v,
          onKeydown: withKeys(withModifiers(v, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (m) => {
            unref(i).highlightOnHover.value ? unref(i).onChangeHighlight(unref(s)) : unref(i).focusable.value || unref(i).onChangeHighlight(unref(s));
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
function hs(a2) {
  ref();
  const n2 = ia(), u = ref(false);
  computed(() => $e(a2.target));
  return {
    isPressed: u,
    onTrigger: n2.on
  };
}
function Xo(a2, t2 = ref({})) {
  return El(() => new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(a2.value, t2.value));
}
function zc(a2, t2 = ref({})) {
  return El(() => new $6c7bd7858deea686$export$cd11ab140839f11d(a2.value, t2.value));
}
function Zo(a2, t2, e) {
  let n2 = a2 === "+" ? t2 + e : t2 - e;
  if (t2 % 1 !== 0 || e % 1 !== 0) {
    const l = t2.toString().split("."), s = e.toString().split("."), r2 = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r2, i);
    t2 = Math.round(t2 * u), e = Math.round(e * u), n2 = a2 === "+" ? t2 + e : t2 - e, n2 /= u;
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { disabled: l, min: s, max: r2, step: i, locale: u, formatOptions: d, id: c } = toRefs(e), f2 = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), { primitiveElement: v, currentElement: p2 } = Ie(), g = Qe(p2), m = ref(), _ = computed(
      () => W2(f2.value) === s.value || (s.value && !isNaN(f2.value) ? Zo("-", f2.value, i.value) < s.value : false)
    ), C = computed(
      () => W2(f2.value) === r2.value || (r2.value && !isNaN(f2.value) ? Zo("+", f2.value, i.value) > r2.value : false)
    );
    function $(G, J = 1) {
      var z;
      const K2 = I.parse(((z = m.value) == null ? undefined : z.value) ?? "");
      e.disabled || (isNaN(K2) ? f2.value = s.value ?? 0 : G === "increase" ? f2.value = W2(K2 + (i.value ?? 1) * J) : f2.value = W2(K2 - (i.value ?? 1) * J));
    }
    function h2(G = 1) {
      $("increase", G);
    }
    function E(G = 1) {
      $("decrease", G);
    }
    function P(G) {
      G === "min" && s.value !== undefined ? f2.value = W2(s.value) : G === "max" && r2.value !== undefined && (f2.value = W2(r2.value));
    }
    const D = Xo(u, d), I = zc(u, d), M = computed(() => D.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), V = Xo(u, d), A = computed(() => isNaN(f2.value) ? "" : V.format(f2.value));
    function F(G) {
      return I.isValidPartialNumber(G, s.value, r2.value);
    }
    function j2(G) {
      m.value && (m.value.value = G);
    }
    function W2(G) {
      let J;
      return i.value === undefined || isNaN(i.value) ? J = jt(G, s.value, r2.value) : J = zr(G, s.value, r2.value, i.value), J = I.parse(D.format(J)), J;
    }
    function ee(G) {
      const J = I.parse(G);
      return f2.value = W2(J), G.length ? j2(A.value) : j2(G);
    }
    return Hc({
      modelValue: f2,
      handleDecrease: E,
      handleIncrease: h2,
      handleMinMaxValue: P,
      inputMode: M,
      inputEl: m,
      onInputElement: (G) => m.value = G,
      textValue: A,
      validate: F,
      applyInputValue: ee,
      disabled: l,
      max: r2,
      min: s,
      isDecreaseDisabled: _,
      isIncreaseDisabled: C,
      id: c
    }), (G, J) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps(G.$attrs, {
        ref_key: "primitiveElement",
        ref: v,
        role: "group",
        as: G.as,
        "as-child": G.asChild,
        "data-disabled": unref(l) ? "" : undefined
      }), {
        default: withCtx(() => [
          renderSlot(G.$slots, "default", {
            modelValue: unref(f2),
            textValue: A.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-disabled"]),
      unref(g) ? (openBlock(), createElementBlock("input", {
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
  setup(a2) {
    const t2 = a2, { primitiveElement: e, currentElement: n2 } = Ie(), l = Eo();
    function s(u) {
      u.target === (undefined).activeElement && (Math.abs(u.deltaY) <= Math.abs(u.deltaX) || (u.preventDefault(), u.deltaY > 0 ? l.handleIncrease() : u.deltaY < 0 && l.handleDecrease()));
    }
    onMounted(() => {
      l.onInputElement(n2.value);
    });
    const r2 = ref(l.textValue.value);
    watch(() => l.textValue.value, () => {
      r2.value = l.textValue.value;
    }, { immediate: true, deep: true });
    function i() {
      requestAnimationFrame(() => {
        r2.value = l.textValue.value;
      });
    }
    return (u, d) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      id: unref(l).id.value,
      ref_key: "primitiveElement",
      ref: e,
      value: r2.value,
      role: "spinbutton",
      type: "text",
      tabindex: "0",
      inputmode: unref(l).inputMode.value,
      disabled: unref(l).disabled.value ? "" : undefined,
      "data-disabled": unref(l).disabled.value ? "" : undefined,
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
      "aria-roledescription": "Number field",
      "aria-valuenow": unref(l).modelValue.value,
      "aria-valuemin": unref(l).min.value,
      "aria-valuemax": unref(l).max.value,
      onKeydown: [
        d[0] || (d[0] = withKeys(withModifiers((c) => unref(l).handleIncrease(), ["prevent"]), ["up"])),
        d[1] || (d[1] = withKeys(withModifiers((c) => unref(l).handleDecrease(), ["prevent"]), ["down"])),
        d[2] || (d[2] = withKeys(withModifiers((c) => unref(l).handleIncrease(10), ["prevent"]), ["page-up"])),
        d[3] || (d[3] = withKeys(withModifiers((c) => unref(l).handleDecrease(10), ["prevent"]), ["page-down"])),
        d[4] || (d[4] = withKeys(withModifiers((c) => unref(l).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        d[5] || (d[5] = withKeys(withModifiers((c) => unref(l).handleMinMaxValue("max"), ["prevent"]), ["end"])),
        d[8] || (d[8] = withKeys((c) => {
          var f2;
          return unref(l).applyInputValue((f2 = c.target) == null ? undefined : f2.value);
        }, ["enter"]))
      ],
      onWheel: s,
      onBeforeinput: d[6] || (d[6] = (c) => {
        const f2 = c.target;
        let v = f2.value.slice(0, f2.selectionStart ?? undefined) + (c.data ?? "") + f2.value.slice(f2.selectionEnd ?? undefined);
        unref(l).validate(v) || c.preventDefault();
      }),
      onInput: d[7] || (d[7] = (c) => {
        const f2 = c.target;
        r2.value = f2.value;
      }),
      onChange: i,
      onBlur: d[9] || (d[9] = (c) => {
        var f2;
        return unref(l).applyInputValue((f2 = c.target) == null ? undefined : f2.value);
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
  setup(a2) {
    const t2 = a2, e = Eo(), n2 = computed(() => {
      var u;
      return ((u = e.disabled) == null ? undefined : u.value) || t2.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ie(), { isPressed: r2, onTrigger: i } = hs({ target: s, disabled: n2 });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Increase",
      type: u.as === "button" ? "button" : undefined,
      style: {
        userSelect: unref(r2) ? "none" : undefined
      },
      disabled: n2.value ? "" : undefined,
      "data-disabled": n2.value ? "" : undefined,
      "data-pressed": unref(r2) ? "true" : undefined,
      onContextmenu: d[0] || (d[0] = withModifiers(() => {
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
  setup(a2) {
    const t2 = a2, e = Eo(), n2 = computed(() => {
      var u;
      return ((u = e.disabled) == null ? undefined : u.value) || t2.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ie(), { isPressed: r2, onTrigger: i } = hs({ target: s, disabled: n2 });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (openBlock(), createBlock(unref(O), mergeProps(t2, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Decrease",
      type: u.as === "button" ? "button" : undefined,
      style: {
        userSelect: unref(r2) ? "none" : undefined
      },
      disabled: n2.value ? "" : undefined,
      "data-disabled": n2.value ? "" : undefined,
      "data-pressed": unref(r2) ? "true" : undefined,
      onContextmenu: d[0] || (d[0] = withModifiers(() => {
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { modal: l } = toRefs(e), s = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), r2 = ref(), i = ref(false);
    return Xc({
      contentId: "",
      modal: l,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r2,
      hasCustomAnchor: i
    }), (u, d) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default", { open: unref(s) })
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
  setup(a2) {
    const t2 = a2, e = Nt(), { forwardRef: n2, currentElement: l } = R();
    return onMounted(() => {
      e.triggerElement.value = l.value;
    }), (s, r2) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).hasCustomAnchor.value ? unref(O) : unref(kt)), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(n2),
          type: s.as === "button" ? "button" : undefined,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).contentId,
          "data-state": unref(e).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t2.asChild,
          onClick: unref(e).onOpenToggle
        }, {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = At(e), { forwardRef: s } = R(), r2 = Nt();
    return Gn(), (i, u) => (openBlock(), createBlock(unref(Ya), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n2("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n2("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n2("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n2("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n2("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n2("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => unref(r2).onOpenChange(false))
        }, {
          default: withCtx(() => [
            createVNode(unref(Bt), mergeProps(unref(l), {
              id: unref(r2).contentId,
              ref: unref(s),
              "data-state": unref(r2).open.value ? "open" : "closed",
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = Nt(), s = ref(false);
    ha(true);
    const r2 = xe(e, n2), { forwardRef: i, currentElement: u } = R();
    return ya(u), (d, c) => (openBlock(), createBlock(Cs, mergeProps(unref(r2), {
      ref: unref(i),
      "trap-focus": unref(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = withModifiers(
        (f2) => {
          var v;
          n2("closeAutoFocus", f2), s.value || (v = unref(l).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (f2) => {
        n2("pointerDownOutside", f2);
        const v = f2.detail.originalEvent, p2 = v.button === 0 && v.ctrlKey === true, g = v.button === 2 || p2;
        s.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = Nt(), s = ref(false), r2 = ref(false), i = xe(e, n2);
    return (u, d) => (openBlock(), createBlock(Cs, mergeProps(unref(i), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var f2;
        n2("closeAutoFocus", c), c.defaultPrevented || (s.value || (f2 = unref(l).triggerElement.value) == null || f2.focus(), c.preventDefault()), s.value = false, r2.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var p2;
        n2("interactOutside", c), c.defaultPrevented || (s.value = true, c.detail.originalEvent.type === "pointerdown" && (r2.value = true));
        const f2 = c.target;
        ((p2 = unref(l).triggerElement.value) == null ? undefined : p2.contains(f2)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r2.value && c.preventDefault();
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = Nt(), s = xe(e, n2), { forwardRef: r2 } = R();
    return l.contentId || (l.contentId = he(undefined, "radix-vue-popover-content")), (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(Zc, mergeProps({ key: 0 }, unref(s), { ref: unref(r2) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Jc, mergeProps({ key: 1 }, unref(s), { ref: unref(r2) }), {
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { forwardRef: l } = R(), s = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), { disabled: r2, loop: i, orientation: u, name: d, required: c, dir: f2 } = toRefs(e), v = be(f2);
    return of({
      modelValue: s,
      changeModelValue: (p2) => {
        s.value = p2;
      },
      disabled: r2,
      loop: i,
      orientation: u,
      name: d == null ? undefined : d.value,
      required: c
    }), (p2, g) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      orientation: unref(u),
      dir: unref(v),
      loop: unref(i)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(l),
          role: "radiogroup",
          "data-disabled": unref(r2) ? "" : undefined,
          "as-child": p2.asChild,
          as: p2.as,
          required: unref(c),
          "aria-orientation": unref(u),
          "aria-required": unref(c),
          dir: unref(v),
          name: unref(d)
        }, {
          default: withCtx(() => [
            renderSlot(p2.$slots, "default", { modelValue: unref(s) })
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
  setup(a2, { emit: t2 }) {
    const e = a2, l = ne(e, "checked", t2, {
      passive: e.checked === undefined
    }), { value: s } = toRefs(e), { forwardRef: r2, currentElement: i } = R(), u = Qe(i), d = computed(() => {
      var f2;
      return e.id && i.value ? ((f2 = (undefined).querySelector(`[for="${e.id}"]`)) == null ? undefined : f2.innerText) ?? e.value : undefined;
    });
    function c(f2) {
      l.value = true, u.value && f2.stopPropagation();
    }
    return (f2, v) => (openBlock(), createBlock(unref(O), mergeProps(f2.$attrs, {
      id: f2.id,
      ref: unref(r2),
      role: "radio",
      type: f2.as === "button" ? "button" : undefined,
      as: f2.as,
      "aria-checked": unref(l),
      "aria-label": d.value,
      "as-child": f2.asChild,
      disabled: f2.disabled ? "" : undefined,
      "data-state": unref(l) ? "checked" : "unchecked",
      "data-disabled": f2.disabled ? "" : undefined,
      value: unref(s),
      required: f2.required,
      name: f2.name,
      onClick: withModifiers(c, ["stop"])
    }), {
      default: withCtx(() => [
        renderSlot(f2.$slots, "default", { checked: unref(l) }),
        unref(u) ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "true",
          value: unref(s),
          checked: !!unref(l),
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
  setup(a2) {
    const t2 = a2, { forwardRef: e, currentElement: n2 } = R(), l = nf(), s = computed(() => l.disabled.value || t2.disabled), r2 = computed(() => l.required.value || t2.required), i = computed(() => {
      var f2;
      return ((f2 = l.modelValue) == null ? undefined : f2.value) === t2.value;
    });
    uf({ disabled: s, checked: i });
    const u = ref(false), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    Le("keydown", (f2) => {
      d.includes(f2.key) && (u.value = true);
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
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: withCtx(() => [
        createVNode(sf, mergeProps({ ...f2.$attrs, ...t2 }, {
          ref: unref(e),
          checked: i.value,
          required: r2.value,
          disabled: s.value,
          "onUpdate:checked": v[0] || (v[0] = (p2) => unref(l).changeModelValue(f2.value)),
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
  setup(a2) {
    const t2 = a2, { value: e } = toRefs(t2), n2 = ref();
    return (l, s) => (openBlock(), createBlock(unref(Zt), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n2
        }, t2, {
          "onUpdate:modelValue": s[0] || (s[0] = (r2) => isRef(e) ? e.value = r2 : null),
          "default-value": unref(e)
        }), [
          renderSlot(l.$slots, "default")
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), s = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    }), r2 = ref(), i = ref(), u = ref({
      x: 0,
      y: 0
    }), d = ref(false), { required: c, disabled: f2, dir: v } = toRefs(e), p2 = be(v);
    Bs({
      triggerElement: r2,
      onTriggerChange: (C) => {
        r2.value = C;
      },
      valueElement: i,
      onValueElementChange: (C) => {
        i.value = C;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (C) => {
        d.value = C;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (C) => {
        l.value = C;
      },
      open: s,
      required: c,
      onOpenChange: (C) => {
        s.value = C;
      },
      dir: p2,
      triggerPointerDownPosRef: u,
      disabled: f2
    });
    const g = Qe(r2), m = ref(/* @__PURE__ */ new Set()), _ = computed(() => Array.from(m.value).map((C) => {
      var $;
      return ($ = C.props) == null ? undefined : $.value;
    }).join(";"));
    return Lf({
      onNativeOptionAdd: (C) => {
        m.value.add(C);
      },
      onNativeOptionRemove: (C) => {
        m.value.delete(C);
      }
    }), (C, $) => (openBlock(), createBlock(unref(Ot), null, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default", {
          modelValue: unref(l),
          open: unref(s)
        }),
        unref(g) ? (openBlock(), createBlock(Vf, mergeProps({ key: _.value }, C.$attrs, {
          "aria-hidden": "true",
          tabindex: "-1",
          required: unref(c),
          name: C.name,
          autocomplete: C.autocomplete,
          disabled: unref(f2),
          value: unref(l),
          onChange: $[0] || ($[0] = (h2) => l.value = h2.target.value)
        }), {
          default: withCtx(() => [
            unref(l) === undefined ? (openBlock(), createElementBlock("option", Ff)) : createCommentVNode("", true),
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
function Is(a2) {
  return a2 === "" || vt(a2);
}
const Ly = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a2) {
    const t2 = a2, e = wt(), n2 = computed(() => {
      var p2;
      return ((p2 = e.disabled) == null ? undefined : p2.value) || t2.disabled;
    }), { forwardRef: l, currentElement: s } = R();
    e.contentId || (e.contentId = he(undefined, "radix-vue-select-content")), onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r2 } = Me(), i = r2(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = ga(i);
    function f2() {
      n2.value || (e.onOpenChange(true), c());
    }
    function v(p2) {
      f2(), e.triggerPointerDownPosRef.value = {
        x: Math.round(p2.pageX),
        y: Math.round(p2.pageY)
      };
    }
    return (p2, g) => (openBlock(), createBlock(unref(kt), { "as-child": "" }, {
      default: withCtx(() => {
        var m, _, C, $;
        return [
          createVNode(unref(O), {
            ref: unref(l),
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
            "data-placeholder": unref(Is)(($ = unref(e).modelValue) == null ? undefined : $.value) ? "" : undefined,
            "as-child": p2.asChild,
            as: p2.as,
            onClick: g[0] || (g[0] = (h2) => {
              var E;
              (E = h2 == null ? undefined : h2.currentTarget) == null || E.focus();
            }),
            onPointerdown: g[1] || (g[1] = (h2) => {
              if (h2.pointerType === "touch")
                return h2.preventDefault();
              const E = h2.target;
              E.hasPointerCapture(h2.pointerId) && E.releasePointerCapture(h2.pointerId), h2.button === 0 && h2.ctrlKey === false && (v(h2), h2.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = withModifiers(
              (h2) => {
                h2.pointerType === "touch" && v(h2);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (h2) => {
              const E = unref(u) !== "";
              !(h2.ctrlKey || h2.altKey || h2.metaKey) && h2.key.length === 1 && E && h2.key === " " || (unref(d)(h2.key), unref(zf).includes(h2.key) && (f2(), h2.preventDefault()));
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { injectCollection: l } = Me(), s = wt(), r2 = _t(), i = l(), u = ref(false), d = ref(true), c = ref(), { forwardRef: f2, currentElement: v } = R(), { viewport: p2, selectedItem: g, selectedItemText: m, focusSelectedItem: _ } = r2;
    function C() {
      if (s.triggerElement.value && s.valueElement.value && c.value && v.value && (p2 != null && p2.value) && (g != null && g.value) && (m != null && m.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P = v.value.getBoundingClientRect(), D = s.valueElement.value.getBoundingClientRect(), I = m.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const Se = I.left - P.left, ye = D.left - Se, de = E.left - ye, Te = E.width + de, Oe = Math.max(Te, P.width), ze = (undefined).innerWidth - Ue, xt = jt(ye, Ue, Math.max(Ue, ze - Oe));
          c.value.style.minWidth = `${Te}px`, c.value.style.left = `${xt}px`;
        } else {
          const Se = P.right - I.right, ye = (undefined).innerWidth - D.right - Se, de = (undefined).innerWidth - E.right - ye, Te = E.width + de, Oe = Math.max(Te, P.width), ze = (undefined).innerWidth - Ue, xt = jt(
            ye,
            Ue,
            Math.max(Ue, ze - Oe)
          );
          c.value.style.minWidth = `${Te}px`, c.value.style.right = `${xt}px`;
        }
        const M = i.value, V = (undefined).innerHeight - Ue * 2, A = p2.value.scrollHeight, F = (undefined).getComputedStyle(v.value), j2 = Number.parseInt(
          F.borderTopWidth,
          10
        ), W2 = Number.parseInt(F.paddingTop, 10), ee = Number.parseInt(
          F.borderBottomWidth,
          10
        ), G = Number.parseInt(
          F.paddingBottom,
          10
        ), J = j2 + W2 + A + G + ee, K2 = Math.min(
          g.value.offsetHeight * 5,
          J
        ), z = (undefined).getComputedStyle(p2.value), L = Number.parseInt(z.paddingTop, 10), N2 = Number.parseInt(
          z.paddingBottom,
          10
        ), Z = E.top + E.height / 2 - Ue, X2 = V - Z, re2 = g.value.offsetHeight / 2, Y = g.value.offsetTop + re2, se = j2 + W2 + Y, fe = J - se;
        if (se <= Z) {
          const Se = g.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const ye = v.value.clientHeight - p2.value.offsetTop - p2.value.offsetHeight, de = Math.max(
            X2,
            re2 + (Se ? N2 : 0) + ye + ee
          ), Te = se + de;
          c.value.style.height = `${Te}px`;
        } else {
          const Se = g.value === M[0];
          c.value.style.top = "0px";
          const de = Math.max(
            Z,
            j2 + p2.value.offsetTop + (Se ? L : 0) + re2
          ) + fe;
          c.value.style.height = `${de}px`, p2.value.scrollTop = se - Z + p2.value.offsetTop;
        }
        c.value.style.margin = `${Ue}px 0`, c.value.style.minHeight = `${K2}px`, c.value.style.maxHeight = `${V}px`, n2("placed"), requestAnimationFrame(() => u.value = true);
      }
    }
    const $ = ref("");
    onMounted(async () => {
      await nextTick(), C(), v.value && ($.value = (undefined).getComputedStyle(v.value).zIndex);
    });
    function h2(E) {
      E && d.value === true && (C(), _ == null || _(), d.value = false);
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
        zIndex: $.value
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
  setup(a2) {
    const e = At(a2);
    return (n2, l) => (openBlock(), createBlock(unref(Bt), mergeProps(unref(e), { style: {
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = wt();
    Gn(), ha(e.bodyLock);
    const { createCollection: s } = Me(), r2 = ref();
    ya(r2);
    const i = s(r2), { search: u, handleTypeaheadSearch: d } = ga(i), c = ref(), f2 = ref(), v = ref(), p2 = ref(false), g = ref(false);
    function m() {
      f2.value && r2.value && $n([f2.value, r2.value]);
    }
    watch(p2, () => {
      m();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: C } = l;
    watchEffect((P) => {
      if (!r2.value)
        return;
      let D = { x: 0, y: 0 };
      const I = (V) => {
        var A, F;
        D = {
          x: Math.abs(
            Math.round(V.pageX) - (((A = C.value) == null ? undefined : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((F = C.value) == null ? undefined : F.y) ?? 0)
          )
        };
      }, M = (V) => {
        var A;
        V.pointerType !== "touch" && (D.x <= 10 && D.y <= 10 ? V.preventDefault() : (A = r2.value) != null && A.contains(V.target) || _(false), (undefined).removeEventListener("pointermove", I), C.value = null);
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
    function $(P) {
      const D = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !D && P.key.length === 1 && d(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
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
      content: r2,
      viewport: c,
      onViewportChange: (P) => {
        c.value = P;
      },
      itemRefCallback: (P, D, I) => {
        var A, F;
        const M = !g.value && !I;
        (((A = l.modelValue) == null ? undefined : A.value) !== undefined && ((F = l.modelValue) == null ? undefined : F.value) === D || M) && (f2.value = P, M && (g.value = true));
      },
      selectedItem: f2,
      selectedItemText: v,
      onItemLeave: () => {
        var P;
        (P = r2.value) == null || P.focus();
      },
      itemTextRefCallback: (P, D, I) => {
        var A, F;
        const M = !g.value && !I;
        (((A = l.modelValue) == null ? undefined : A.value) !== undefined && ((F = l.modelValue) == null ? undefined : F.value) === D || M) && (v.value = P);
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
        n2("closeAutoFocus", I), !I.defaultPrevented && ((M = unref(l).triggerElement.value) == null || M.focus({ preventScroll: true }), I.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: D[2] || (D[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: D[3] || (D[3] = (I) => unref(l).onOpenChange(false)),
          onEscapeKeyDown: D[4] || (D[4] = (I) => n2("escapeKeyDown", I)),
          onPointerDownOutside: D[5] || (D[5] = (I) => n2("pointerDownOutside", I))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(
              P.position === "popper" ? jf : Wf
            ), mergeProps({ ...P.$attrs, ...unref(E) }, {
              id: unref(l).contentId,
              ref: (I) => {
                r2.value = unref($e)(I);
              },
              role: "listbox",
              "data-state": unref(l).open.value ? "open" : "closed",
              dir: unref(l).dir.value,
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
              onKeydown: $
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
  setup(a2) {
    return Bs(a2.context), (e, n2) => renderSlot(e.$slots, "default");
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
  setup(a2, { emit: t2 }) {
    const e = a2, l = xe(e, t2), s = wt(), r2 = ref();
    onMounted(() => {
      r2.value = new DocumentFragment();
    });
    const i = ref(), u = computed(() => e.forceMount || s.open.value);
    return (d, c) => {
      var f2;
      return u.value ? (openBlock(), createBlock(unref(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: true
      }, {
        default: withCtx(() => [
          createVNode(Gf, normalizeProps(guardReactiveProps({ ...unref(l), ...d.$attrs })), {
            default: withCtx(() => [
              renderSlot(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((f2 = i.value) != null && f2.present) && r2.value ? (openBlock(), createElementBlock("div", Yf, [
        (openBlock(), createBlock(Teleport, { to: r2.value }, [
          createVNode(qf, { context: unref(s) }, {
            default: withCtx(() => [
              renderSlot(d.$slots, "default")
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
  setup(a2) {
    const t2 = a2, { disabled: e } = toRefs(t2), n2 = wt(), l = _t(Lt), { forwardRef: s, currentElement: r2 } = R(), i = computed(() => {
      var m;
      return ((m = n2.modelValue) == null ? undefined : m.value) === t2.value;
    }), u = ref(false), d = ref(t2.textValue ?? ""), c = he(undefined, "radix-vue-select-item-text");
    async function f2(m) {
      await nextTick(), !(m != null && m.defaultPrevented) && (e.value || (n2.onValueChange(t2.value), n2.onOpenChange(false)));
    }
    async function v(m) {
      var _;
      await nextTick(), !m.defaultPrevented && (e.value ? (_ = l.onItemLeave) == null || _.call(l) : m.currentTarget.focus({ preventScroll: true }));
    }
    async function p2(m) {
      var _;
      await nextTick(), !m.defaultPrevented && m.currentTarget === (undefined).activeElement && ((_ = l.onItemLeave) == null || _.call(l));
    }
    async function g(m) {
      var C;
      await nextTick(), !(m.defaultPrevented || ((C = l.searchRef) == null ? undefined : C.value) !== "" && m.key === " ") && (Kf.includes(m.key) && f2(), m.key === " " && m.preventDefault());
    }
    if (t2.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      r2.value && l.itemRefCallback(
        r2.value,
        t2.value,
        t2.disabled
      );
    }), Xf({
      value: t2.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d.value = ((d.value || (m == null ? undefined : m.textContent)) ?? "").trim();
      }
    }), (m, _) => (openBlock(), createBlock(unref(O), {
      ref: unref(s),
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
      onKeydown: g
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
  setup(a2) {
    const t2 = a2, e = Ts();
    return (n2, l) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(O), mergeProps({
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
  setup(a2) {
    const t2 = a2, e = wt(), n2 = _t(Lt), l = Nf(), s = Ts(), { forwardRef: r2, currentElement: i } = R(), u = computed(() => {
      var d;
      return h("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        textContent: (d = i.value) == null ? undefined : d.textContent
      });
    });
    return onMounted(() => {
      i.value && (s.onItemTextChange(i.value), n2.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), l.onNativeOptionAdd(u.value));
    }), onBeforeUnmount(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, c) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        id: unref(s).textId,
        ref: unref(r2)
      }, { ...t2, ...d.$attrs }, { "data-item-text": "" }), {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      unref(s).isSelected.value && unref(e).valueElement.value && !unref(e).valueElementHasChildren.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: unref(e).valueElement.value
      }, [
        renderSlot(d.$slots, "default")
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
  setup(a2) {
    const t2 = a2, { nonce: e } = toRefs(t2), n2 = Xa(e), l = _t(Lt), s = l.position === "item-aligned" ? $o() : undefined, { forwardRef: r2, currentElement: i } = R();
    onMounted(() => {
      l == null || l.onViewportChange(i.value);
    });
    const u = ref(0);
    function d(c) {
      const f2 = c.currentTarget, { shouldExpandOnScrollRef: v, contentWrapper: p2 } = s ?? {};
      if (v != null && v.value && (p2 != null && p2.value)) {
        const g = Math.abs(u.value - f2.scrollTop);
        if (g > 0) {
          const m = (undefined).innerHeight - Ue * 2, _ = Number.parseFloat(
            p2.value.style.minHeight
          ), C = Number.parseFloat(p2.value.style.height), $ = Math.max(_, C);
          if ($ < m) {
            const h2 = $ + g, E = Math.min(m, h2), P = h2 - E;
            p2.value.style.height = `${E}px`, p2.value.style.bottom === "0px" && (f2.scrollTop = P > 0 ? P : 0, p2.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = f2.scrollTop;
    }
    return (c, f2) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(O), mergeProps({
        ref: unref(r2),
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
        onScroll: d
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
  setup(a2) {
    const { forwardRef: t2, currentElement: e } = R(), n2 = wt(), l = useSlots();
    return onBeforeMount(() => {
      var r2;
      const s = !!Ua((r2 = l == null ? undefined : l.default) == null ? undefined : r2.call(l)).length;
      n2.onValueElementHasChildrenChange(s);
    }), onMounted(() => {
      n2.valueElement = e;
    }), (s, r2) => (openBlock(), createBlock(unref(O), {
      ref: unref(t2),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          unref(Is)((i = unref(n2).modelValue) == null ? undefined : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(s.placeholder), 1)
          ], 64)) : renderSlot(s.$slots, "default", { key: 1 })
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { orientation: l, dir: s } = toRefs(e), r2 = be(s);
    R();
    const i = ne(e, "modelValue", n2, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === undefined
    }), u = ref();
    return Kp({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r2,
      activationMode: e.activationMode,
      baseId: he(undefined, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (openBlock(), createBlock(unref(O), {
      dir: unref(r2),
      "data-orientation": unref(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", { modelValue: unref(i) })
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
  setup(a2) {
    const t2 = a2, { loop: e } = toRefs(t2), { forwardRef: n2, currentElement: l } = R(), s = fn();
    return s.tabsList = l, (r2, i) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      orientation: unref(s).orientation.value,
      dir: unref(s).dir.value,
      loop: unref(e)
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          ref: unref(n2),
          role: "tablist",
          "as-child": r2.asChild,
          as: r2.as,
          "aria-orientation": unref(s).orientation.value
        }, {
          default: withCtx(() => [
            renderSlot(r2.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function lr(a2, t2) {
  return `${a2}-trigger-${t2}`;
}
function sr(a2, t2) {
  return `${a2}-content-${t2}`;
}
const bg = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a2) {
    const t2 = a2, { forwardRef: e } = R(), n2 = fn(), l = computed(() => lr(n2.baseId, t2.value)), s = computed(() => sr(n2.baseId, t2.value)), r2 = computed(() => t2.value === n2.modelValue.value), i = ref(r2.value);
    return onMounted(() => {
      requestAnimationFrame(() => {
        i.value = false;
      });
    }), (u, d) => (openBlock(), createBlock(unref(Pe), {
      present: r2.value,
      "force-mount": ""
    }, {
      default: withCtx(({ present: c }) => [
        createVNode(unref(O), {
          id: s.value,
          ref: unref(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r2.value ? "active" : "inactive",
          "data-orientation": unref(n2).orientation.value,
          "aria-labelledby": l.value,
          hidden: !c.value,
          tabindex: "0",
          style: normalizeStyle({
            animationDuration: i.value ? "0s" : undefined
          })
        }, {
          default: withCtx(() => [
            u.forceMount || r2.value ? renderSlot(u.$slots, "default", { key: 0 }) : createCommentVNode("", true)
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
  setup(a2) {
    const t2 = a2, { forwardRef: e } = R(), n2 = fn(), l = computed(() => lr(n2.baseId, t2.value)), s = computed(() => sr(n2.baseId, t2.value)), r2 = computed(() => t2.value === n2.modelValue.value);
    return (i, u) => (openBlock(), createBlock(unref(Ft), {
      "as-child": "",
      focusable: !i.disabled,
      active: r2.value
    }, {
      default: withCtx(() => [
        createVNode(unref(O), {
          id: l.value,
          ref: unref(e),
          role: "tab",
          type: i.as === "button" ? "button" : undefined,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r2.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": r2.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : undefined,
          "data-orientation": unref(n2).orientation.value,
          onMousedown: u[0] || (u[0] = withModifiers((d) => {
            !i.disabled && d.ctrlKey === false ? unref(n2).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = withKeys((d) => unref(n2).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = unref(n2).activationMode !== "manual";
            !r2.value && !i.disabled && d && unref(n2).changeModelValue(i.value);
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
  setup(a2) {
    const t2 = a2, { label: e, duration: n2, swipeDirection: l, swipeThreshold: s } = toRefs(t2), r2 = ref(), i = ref(0), u = ref(false), d = ref(false);
    if (t2.label && typeof t2.label == "string" && !t2.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return jp({
      label: e,
      duration: n2,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r2,
      onViewportChange(c) {
        r2.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, f2) => renderSlot(c.$slots, "default");
  }
}), Up = "toast.swipeStart", Gp = "toast.swipeMove", qp = "toast.swipeCancel", Yp = "toast.swipeEnd", On = "toast.viewportPause", kn = "toast.viewportResume";
function Aa(a2, t2, e) {
  const n2 = e.originalEvent.currentTarget, l = new CustomEvent(a2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t2 && n2.addEventListener(a2, t2, { once: true }), n2.dispatchEvent(l);
}
function ol(a2, t2, e = 0) {
  const n2 = Math.abs(a2.x), l = Math.abs(a2.y), s = n2 > l;
  return t2 === "left" || t2 === "right" ? s && n2 > e : !s && l > e;
}
function Xp(a2) {
  return a2.nodeType === a2.ELEMENT_NODE;
}
function ir(a2) {
  const t2 = [];
  return Array.from(a2.childNodes).forEach((n2) => {
    if (n2.nodeType === n2.TEXT_NODE && n2.textContent && t2.push(n2.textContent), Xp(n2)) {
      const l = n2.ariaHidden || n2.hidden || n2.style.display === "none", s = n2.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r2 = n2.dataset.radixToastAnnounceAlt;
          r2 && t2.push(r2);
        } else
          t2.push(...ir(n2));
    }
  }), t2;
}
const Zp = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounce",
  setup(a2) {
    const t2 = vn(), e = mi(1e3), n2 = ref(false);
    return Tl(() => {
      n2.value = true;
    }), (l, s) => unref(e) || n2.value ? (openBlock(), createBlock(unref(Zt), { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(unref(t2).label.value) + " ", 1),
        renderSlot(l.$slots, "default")
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { forwardRef: l, currentElement: s } = R(), r2 = vn(), i = ref(null), u = ref(null), d = computed(
      () => typeof e.duration == "number" ? e.duration : r2.duration.value
    ), c = ref(0), f2 = ref(d.value), v = ref(0), p2 = ref(d.value), g = Tl(() => {
      const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
      p2.value = Math.max(f2.value - $, 0);
    }, { fpsLimit: 60 });
    function m($) {
    }
    function _() {
      var h2, E;
      ((h2 = s.value) == null ? undefined : h2.contains((undefined).activeElement)) && ((E = r2.viewport.value) == null || E.focus()), r2.isClosePausedRef.value = false, n2("close");
    }
    const C = computed(() => s.value ? ir(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const $ = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error($);
    }
    return watchEffect(($) => {
      const h2 = r2.viewport.value;
      if (h2) {
        const E = () => {
          m(f2.value), g.resume(), n2("resume");
        }, P = () => {
          const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
          f2.value = f2.value - D, (undefined).clearTimeout(v.value), g.pause(), n2("pause");
        };
        return h2.addEventListener(On, P), h2.addEventListener(kn, E), () => {
          h2.removeEventListener(On, P), h2.removeEventListener(kn, E);
        };
      }
    }), watch(() => [e.open, d.value], () => {
      f2.value = d.value, e.open && !r2.isClosePausedRef.value && m(d.value);
    }, { immediate: true }), jn("Escape", ($) => {
      n2("escapeKeyDown", $), $.defaultPrevented || (r2.isFocusedToastEscapeKeyDownRef.value = true, _());
    }), onMounted(() => {
      r2.onToastAdd();
    }), onUnmounted(() => {
      r2.onToastRemove();
    }), Qp({ onClose: _ }), ($, h2) => (openBlock(), createElementBlock(Fragment, null, [
      C.value ? (openBlock(), createBlock(Zp, {
        key: 0,
        role: "status",
        "aria-live": $.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("", true),
      unref(r2).viewport.value ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: unref(r2).viewport.value
      }, [
        createVNode(unref(O), mergeProps({
          ref: unref(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, $.$attrs, {
          as: $.as,
          "as-child": $.asChild,
          "data-state": $.open ? "open" : "closed",
          "data-swipe-direction": unref(r2).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: h2[0] || (h2[0] = withModifiers((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: h2[1] || (h2[1] = (E) => {
            if (!i.value) return;
            const P = E.clientX - i.value.x, D = E.clientY - i.value.y, I = !!u.value, M = ["left", "right"].includes(unref(r2).swipeDirection.value), V = ["left", "up"].includes(unref(r2).swipeDirection.value) ? Math.min : Math.max, A = M ? V(0, P) : 0, F = M ? 0 : V(0, D), j2 = E.pointerType === "touch" ? 10 : 2, W2 = { x: A, y: F }, ee = { originalEvent: E, delta: W2 };
            I ? (u.value = W2, unref(Aa)(unref(Gp), (G) => n2("swipeMove", G), ee)) : unref(ol)(W2, unref(r2).swipeDirection.value, j2) ? (u.value = W2, unref(Aa)(unref(Up), (G) => n2("swipeStart", G), ee), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > j2 || Math.abs(D) > j2) && (i.value = null);
          }),
          onPointerup: h2[2] || (h2[2] = (E) => {
            const P = u.value, D = E.target;
            if (D.hasPointerCapture(E.pointerId) && D.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const I = E.currentTarget, M = { originalEvent: E, delta: P };
              unref(ol)(P, unref(r2).swipeDirection.value, unref(r2).swipeThreshold.value) ? unref(Aa)(unref(Yp), (V) => n2("swipeEnd", V), M) : unref(Aa)(unref(qp), (V) => n2("swipeCancel", V), M), I == null || I.addEventListener("click", (V) => V.preventDefault(), {
                once: true
              });
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot($.$slots, "default", {
              remaining: p2.value,
              duration: d.value
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, { forwardRef: l } = R(), s = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    });
    return (r2, i) => (openBlock(), createBlock(unref(Pe), {
      present: r2.forceMount || unref(s)
    }, {
      default: withCtx(() => [
        createVNode(ev, mergeProps({
          ref: unref(l),
          open: unref(s),
          type: r2.type,
          as: r2.as,
          "as-child": r2.asChild,
          duration: r2.duration
        }, r2.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = false),
          onPause: i[1] || (i[1] = (u) => n2("pause")),
          onResume: i[2] || (i[2] = (u) => n2("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n2("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n2("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, f2 = u.currentTarget;
            f2.setAttribute("data-swipe", "move"), f2.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), f2.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, f2 = u.currentTarget;
            f2.setAttribute("data-swipe", "end"), f2.style.removeProperty("--radix-toast-swipe-move-x"), f2.style.removeProperty("--radix-toast-swipe-move-y"), f2.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), f2.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = false;
          })
        }), {
          default: withCtx(({ remaining: u, duration: d }) => [
            renderSlot(r2.$slots, "default", {
              remaining: u,
              duration: d,
              open: unref(s)
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
  setup(a2) {
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
  setup(a2) {
    const t2 = a2, e = Jp(), { forwardRef: n2 } = R();
    return (l, s) => (openBlock(), createBlock(ur, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps(t2, {
          ref: unref(n2),
          type: l.as === "button" ? "button" : undefined,
          onClick: s[0] || (s[0] = (r2) => unref(e).onClose())
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
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
  setup(a2) {
    if (!a2.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = R();
    return (n2, l) => n2.altText ? (openBlock(), createBlock(ur, {
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
  setup(a2, { emit: t2 }) {
    const e = t2, n2 = vn();
    return (l, s) => (openBlock(), createBlock(unref(Zt), {
      "aria-hidden": "true",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r2) => {
        var d;
        const i = r2.relatedTarget;
        !((d = unref(n2).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
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
  setup(a2) {
    const t2 = a2, { hotkey: e, label: n2 } = toRefs(t2), { forwardRef: l, currentElement: s } = R(), { createCollection: r2 } = Me(), i = r2(s), u = vn(), d = computed(() => u.toastCount.value > 0), c = ref(), f2 = ref(), v = computed(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    jn(e.value, () => {
      s.value.focus();
    }), onMounted(() => {
      u.onViewportChange(s.value);
    }), watchEffect((g) => {
      const m = s.value;
      if (d.value && m) {
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
        }, $ = (P) => {
          !m.contains(P.relatedTarget) && C();
        }, h2 = () => {
          m.contains((undefined).activeElement) || C();
        }, E = (P) => {
          var M, V, A;
          const D = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !D) {
            const F = (undefined).activeElement, j2 = P.shiftKey;
            if (P.target === m && j2) {
              (M = c.value) == null || M.focus();
              return;
            }
            const G = p2({ tabbingDirection: j2 ? "backwards" : "forwards" }), J = G.findIndex((K2) => K2 === F);
            Oa(G.slice(J + 1)) ? P.preventDefault() : j2 ? (V = c.value) == null || V.focus() : (A = f2.value) == null || A.focus();
          }
        };
        m.addEventListener("focusin", _), m.addEventListener("focusout", $), m.addEventListener("pointermove", _), m.addEventListener("pointerleave", h2), m.addEventListener("keydown", E), (undefined).addEventListener("blur", _), (undefined).addEventListener("focus", C), g(() => {
          m.removeEventListener("focusin", _), m.removeEventListener("focusout", $), m.removeEventListener("pointermove", _), m.removeEventListener("pointerleave", h2), m.removeEventListener("keydown", E), (undefined).removeEventListener("blur", _), (undefined).removeEventListener("focus", C);
        });
      }
    });
    function p2({ tabbingDirection: g }) {
      const _ = i.value.map((C) => {
        const $ = [C, ...Jn(C)];
        return g === "forwards" ? $ : $.reverse();
      });
      return (g === "forwards" ? _.reverse() : _).flat();
    }
    return (g, m) => (openBlock(), createBlock(unref(ou), {
      role: "region",
      "aria-label": typeof unref(n2) == "string" ? unref(n2).replace("{hotkey}", v.value) : unref(n2)(v.value),
      tabindex: "-1",
      style: normalizeStyle({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? undefined : "none"
      })
    }, {
      default: withCtx(() => [
        d.value ? (openBlock(), createBlock(ll, {
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
          ref: unref(l),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: withCtx(() => [
            renderSlot(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (openBlock(), createBlock(ll, {
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2) {
    const t2 = a2, { delayDuration: e, skipDelayDuration: n2, disableHoverableContent: l, disableClosingTrigger: s, ignoreNonKeyboardFocus: r2, disabled: i } = toRefs(t2);
    R();
    const u = ref(true), d = ref(false), { start: c, stop: f2 } = Wn(() => {
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
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r2
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2;
    R();
    const l = Oo(), s = computed(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r2 = computed(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = computed(() => e.disabled ?? l.disabled.value), u = computed(() => e.delayDuration ?? l.delayDuration.value), d = computed(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), c = ne(e, "open", n2, {
      defaultValue: e.defaultOpen,
      passive: e.open === undefined
    });
    watch(c, (h2) => {
      l.onClose && (h2 ? (l.onOpen(), (undefined).dispatchEvent(new CustomEvent(cr))) : l.onClose());
    });
    const f2 = ref(false), v = ref(), p2 = computed(() => c.value ? f2.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: m } = Wn(() => {
      f2.value = true, c.value = true;
    }, u, { immediate: false });
    function _() {
      m(), f2.value = false, c.value = true;
    }
    function C() {
      m(), c.value = false;
    }
    function $() {
      g();
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
        l.isOpenDelayed.value ? $() : _();
      },
      onTriggerLeave() {
        s.value ? C() : m();
      },
      onOpen: _,
      onClose: C,
      disableHoverableContent: s,
      disableClosingTrigger: r2,
      disabled: i,
      ignoreNonKeyboardFocus: d
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
  setup(a2) {
    const t2 = a2, e = mn(), n2 = Oo();
    e.contentId || (e.contentId = he(undefined, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = R(), r2 = ref(false), i = ref(false), u = computed(() => e.disabled.value ? {} : {
      click: m,
      focus: p2,
      pointermove: f2,
      pointerleave: v,
      pointerdown: c,
      blur: g
    });
    onMounted(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      setTimeout(() => {
        r2.value = false;
      }, 1);
    }
    function c() {
      r2.value = true, (undefined).addEventListener("pointerup", d, { once: true });
    }
    function f2(_) {
      _.pointerType !== "touch" && !i.value && !n2.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = true);
    }
    function v() {
      e.onTriggerLeave(), i.value = false;
    }
    function p2(_) {
      var C, $;
      r2.value || e.ignoreNonKeyboardFocus.value && !(($ = (C = _.target).matches) != null && $.call(C, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function m() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (_, C) => (openBlock(), createBlock(unref(kt), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(O), mergeProps({
          ref: unref(l),
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = mn(), { forwardRef: s } = R(), r2 = useSlots(), i = computed(() => {
      var c;
      return (c = r2.default) == null ? undefined : c.call(r2);
    }), u = computed(() => {
      var v;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function f2(p2) {
        typeof p2.children == "string" && p2.type !== Comment ? c += p2.children : Array.isArray(p2.children) && p2.children.forEach((g) => f2(g));
      }
      return (v = i.value) == null || v.forEach((p2) => f2(p2)), c;
    }), d = computed(() => {
      const { ariaLabel: c, ...f2 } = e;
      return f2;
    });
    return onMounted(() => {
      Le(undefined, "scroll", (c) => {
        const f2 = c.target;
        f2 != null && f2.contains(l.trigger.value) && l.onClose();
      }), Le(undefined, cr, l.onClose);
    }), (c, f2) => (openBlock(), createBlock(unref(gt), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: f2[0] || (f2[0] = (v) => n2("escapeKeyDown", v)),
      onPointerDownOutside: f2[1] || (f2[1] = (v) => {
        var p2;
        unref(l).disableClosingTrigger.value && ((p2 = unref(l).trigger.value) != null && p2.contains(v.target)) && v.preventDefault(), n2("pointerDownOutside", v);
      }),
      onFocusOutside: f2[2] || (f2[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: f2[3] || (f2[3] = (v) => unref(l).onClose())
    }, {
      default: withCtx(() => [
        createVNode(unref(Bt), mergeProps({
          ref: unref(s),
          "data-state": unref(l).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default"),
            createVNode(unref(Zt), {
              id: unref(l).contentId,
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
  setup(a2) {
    const e = At(a2), { forwardRef: n2, currentElement: l } = R(), { trigger: s, onClose: r2 } = mn(), i = Oo(), { isPointerInTransit: u, onPointerExit: d } = kl(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r2();
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
  setup(a2, { emit: t2 }) {
    const e = a2, n2 = t2, l = mn(), s = xe(e, n2), { forwardRef: r2 } = R();
    return (i, u) => (openBlock(), createBlock(unref(Pe), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(unref(l).disableHoverableContent.value ? fr : cv), mergeProps({ ref: unref(r2) }, unref(s)), {
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
  setup(a2) {
    const t2 = a2;
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
  setup(a2) {
    const t2 = a2;
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
                        _push4(ssrRenderComponent(unref(X), { class: "size-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(X), { class: "size-4" })
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
                        createVNode(unref(X), { class: "size-4" })
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
                      createVNode(unref(X), { class: "size-4" })
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
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function resolveUnrefHeadInput(ref3) {
  if (ref3 instanceof Promise || ref3 instanceof Date || ref3 instanceof RegExp)
    return ref3;
  const root = resolveUnref(ref3);
  if (!ref3 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r2) => resolveUnrefHeadInput(r2));
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
      ogImage: () => `${APP_BASE_URL}/images/SpinRequest.jpg`,
      ogImageSecureUrl: () => `${APP_BASE_URL}/images/SpinRequest.jpg`,
      ogImageAlt: "Spin Request",
      ogImageWidth: 217,
      ogImageHeight: 217,
      ogImageType: "image/png",
      twitterSite: "@spinrequest",
      twitterImage: () => `${APP_BASE_URL}/images/SpinRequest.jpg`,
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
      logo: `${APP_BASE_URL}/images/SpinRequest.jpg`,
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
    const _Error404 = defineAsyncComponent(() => import('./error-404-DV3O-Yg0.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-Bhgt8Qvd.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_ioredis@5.4.2_magicast@0.3.5__55lqgu7v5h4ti5ooit6fp5wlwm/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_ioredis@5.4.2_magicast@0.3.5__55lqgu7v5h4ti5ooit6fp5wlwm/node_modules/nuxt/dist/app/components/nuxt-root.vue");
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

export { Uy as $, gy as A, hy as B, Cg as C, yy as D, parseQuery as E, Fh as F, nuxtLinkDefaults as G, hasProtocol as H, resolveRouteObject as I, joinURL as J, withTrailingSlash as K, withoutTrailingSlash as L, Mh as M, hash as N, fetchDefaults as O, useRequestFetch as P, Ny as Q, Ry as R, Ly as S, Ty as T, Ui as U, Qy as V, zy as W, Ky as X, Xy as Y, jy as Z, _sfc_main$4 as _, useNuxtApp as a, Yy as a0, Lg as a1, zg as a2, Kg as a3, jg as a4, Hg as a5, Wg as a6, eu as a7, tu as a8, Dv as a9, defineNuxtRouteMiddleware as aA, Zt$1 as aB, Yr as aC, sh as aD, rh as aE, ih as aF, uh as aG, ch as aH, Eu as aa, xu as ab, Gl as ac, Pu as ad, Du as ae, ys as af, gs as ag, bs as ah, ws as ai, _s as aj, Fv as ak, Nv as al, Lv as am, useRequestEvent as an, withLeadingSlash as ao, parseURL as ap, defu as aq, encodeParam as ar, encodePath as as, useJsonld as at, _v as au, xv as av, Ev as aw, Pv as ax, Sv as ay, useState as az, useAuth as b, useRoute as c, decodeBase64 as d, entry$1 as default, useSeoMeta as e, useRouter as f, __nuxt_component_0 as g, formatMoney as h, gg as i, bg as j, cn as k, useNotifications as l, ji as m, navigateTo as n, kh as o, useAsyncData as p, qi as q, readableTimeDifference as r, showToast as s, useRuntimeConfig as t, useHead$2 as u, getInitials as v, getHexColor as w, formattedTimeDifference as x, yg as y, my as z };
//# sourceMappingURL=server.mjs.map
