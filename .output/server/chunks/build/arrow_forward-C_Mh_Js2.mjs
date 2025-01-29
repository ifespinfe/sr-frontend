import { openBlock, createElementBlock, createElementVNode } from 'vue';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("mask", {
      id: "a",
      width: "24",
      height: "24",
      x: "0",
      y: "0",
      maskUnits: "userSpaceOnUse",
      style: { "mask-type": "alpha" }
    }, [
      createElementVNode("path", {
        fill: "#D9D9D9",
        d: "M0 24V0h24v24z"
      })
    ], -1),
    createElementVNode("g", { mask: "url(#a)" }, [
      createElementVNode("path", {
        fill: "#A799FF",
        d: "M19.305 12.701a1 1 0 0 1-.7.288.9.9 0 0 1-.7-.263l-4.9-4.9v11.175a.97.97 0 0 1-.288.713.97.97 0 0 1-.712.287.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713V7.826l-4.9 4.9a.9.9 0 0 1-.7.263 1 1 0 0 1-.7-.288.95.95 0 0 1-.275-.7q0-.425.275-.7l6.6-6.6a.7.7 0 0 1 .312-.213 1.2 1.2 0 0 1 .388-.062q.2 0 .375.062a.9.9 0 0 1 .325.213l6.6 6.6a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7"
      })
    ], -1)
  ]));
}
const arrow_forward = { render };

export { arrow_forward as default, render };
//# sourceMappingURL=arrow_forward-C_Mh_Js2.mjs.map
