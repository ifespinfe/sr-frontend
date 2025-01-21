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
        d: "M16 2.667c7.364 0 13.334 5.97 13.334 13.333S23.364 29.333 16 29.333 2.667 23.364 2.667 16 8.637 2.667 16 2.667m0 18.666a1.334 1.334 0 1 0 0 2.668 1.334 1.334 0 0 0 0-2.668m0-12.666a4.833 4.833 0 0 0-4.833 4.833 1.334 1.334 0 0 0 2.667 0 2.166 2.166 0 1 1 2.973 2.013c-.901.36-2.14 1.283-2.14 2.82v.334a1.334 1.334 0 0 0 2.667 0c0-.326.066-.488.348-.627l.116-.053A4.835 4.835 0 0 0 16 8.667"
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
const bubbleQuestionMark = { render };

export { bubbleQuestionMark as default, render };
//# sourceMappingURL=bubble-question-mark-CzHuPARu.mjs.map
