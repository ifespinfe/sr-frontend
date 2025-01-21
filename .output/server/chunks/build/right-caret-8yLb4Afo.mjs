import { openBlock, createElementBlock, createElementVNode } from 'vue';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "25",
  fill: "none"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("mask", {
      id: "a",
      width: "24",
      height: "25",
      x: "0",
      y: "0",
      maskUnits: "userSpaceOnUse",
      style: { "mask-type": "alpha" }
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M0 .5h24v24H0z"
      })
    ], -1),
    createElementVNode("g", { mask: "url(#a)" }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M8.025 22.5 6.25 20.725l8.225-8.225L6.25 4.275 8.025 2.5l10 10z"
      })
    ], -1)
  ]));
}
const rightCaret = { render };

export { rightCaret as default, render };
//# sourceMappingURL=right-caret-8yLb4Afo.mjs.map
