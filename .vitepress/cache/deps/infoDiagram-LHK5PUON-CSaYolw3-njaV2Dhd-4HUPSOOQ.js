import {
  Iy
} from "./chunk-SGMUMMDM.js";
import "./chunk-3TDT3HWZ.js";
import "./chunk-STDC4IMW.js";
import "./chunk-W3ZJYFUP.js";
import {
  F,
  Tt,
  WT,
  p9t,
  uW
} from "./chunk-3UODNKBR.js";
import "./chunk-CIQQ7TXU.js";

// node_modules/vitepress-plugin-legend/dist/infoDiagram-LHK5PUON-CSaYolw3-njaV2Dhd.js
var g = {
  parse: F(async (r) => {
    const a = await Iy("info", r);
    Tt.debug(a);
  }, "parse")
};
var m = {
  version: WT.version + ""
};
var f = F(() => m.version, "getVersion");
var v = {
  getVersion: f
};
var c = F((r, a, n) => {
  Tt.debug(`rendering info diagram
` + r);
  const t = p9t(a);
  uW(t, 100, 400, true), t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
}, "draw");
var x = { draw: c };
var u = {
  parser: g,
  db: v,
  renderer: x
};
export {
  u as diagram
};
//# sourceMappingURL=infoDiagram-LHK5PUON-CSaYolw3-njaV2Dhd-4HUPSOOQ.js.map
