import { openBlock, createElementBlock, createElementVNode } from 'vue';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  fill: "none"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      "clip-path": "url(#a)",
      opacity: ".7"
    }, [
      createElementVNode("path", {
        fill: "#fff",
        "fill-rule": "evenodd",
        d: "M2.667 14a11.333 11.333 0 1 1 20.235 7.016l4.869 4.87a1.333 1.333 0 0 1-1.885 1.885l-4.87-4.87a11.332 11.332 0 0 1-18.349-8.9M14 8a1.333 1.333 0 0 0 0 2.667A3.333 3.333 0 0 1 17.334 14 1.333 1.333 0 1 0 20 14a6 6 0 0 0-6-6",
        "clip-rule": "evenodd"
      })
    ], -1),
    createElementVNode("defs", null, [
      createElementVNode("clipPath", { id: "a" }, [
        createElementVNode("path", {
          fill: "#fff",
          d: "M0 0h32v32H0z"
        })
      ])
    ], -1)
  ]));
}
const bubbleSearch = { render };

export { bubbleSearch as default, render };
//# sourceMappingURL=bubble-search-DzcmqvES.mjs.map
