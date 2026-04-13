import {
  Fe,
  Ue,
  je
} from "./chunk-J6GKK7P3.js";
import {
  it
} from "./chunk-BIWCY3FE.js";
import {
  y
} from "./chunk-QDHDAQB6.js";
import "./chunk-STDC4IMW.js";
import "./chunk-W3ZJYFUP.js";
import "./chunk-BXWTBNHE.js";
import "./chunk-EYPLDYDM.js";
import {
  A1,
  F,
  Hvt,
  Tt,
  _n,
  as,
  gn,
  hW,
  uW,
  yu
} from "./chunk-3UODNKBR.js";
import "./chunk-CIQQ7TXU.js";

// node_modules/vitepress-plugin-legend/dist/stateDiagram-MI5ZYTHO-DUpd8xBQ-BpMWAYEV.js
var F2 = F((e) => e.append("circle").attr("class", "start-state").attr("r", _n().state.sizeUnit).attr("cx", _n().state.padding + _n().state.sizeUnit).attr("cy", _n().state.padding + _n().state.sizeUnit), "drawStartState");
var W = F((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", _n().state.textHeight).attr("class", "divider").attr("x2", _n().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider");
var j = F((e, n) => {
  const g = e.append("text").attr("x", 2 * _n().state.padding).attr("y", _n().state.textHeight + 2 * _n().state.padding).attr("font-size", _n().state.fontSize).attr("class", "state-title").text(n.id), s = g.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", _n().state.padding).attr("y", _n().state.padding).attr("width", s.width + 2 * _n().state.padding).attr("height", s.height + 2 * _n().state.padding).attr("rx", _n().state.radius), g;
}, "drawSimpleState");
var J = F((e, n) => {
  const g = F(function(o, u, b) {
    const m = o.append("tspan").attr("x", 2 * _n().state.padding).text(u);
    b || m.attr("dy", _n().state.textHeight);
  }, "addTspan"), s = e.append("text").attr("x", 2 * _n().state.padding).attr("y", _n().state.textHeight + 1.3 * _n().state.padding).attr("font-size", _n().state.fontSize).attr("class", "state-title").text(n.descriptions[0]).node().getBBox(), d = s.height, c = e.append("text").attr("x", _n().state.padding).attr(
    "y",
    d + _n().state.padding * 0.4 + _n().state.dividerMargin + _n().state.textHeight
  ).attr("class", "state-description");
  let l = true, a = true;
  n.descriptions.forEach(function(o) {
    l || (g(c, o, a), a = false), l = false;
  });
  const r = e.append("line").attr("x1", _n().state.padding).attr("y1", _n().state.padding + d + _n().state.dividerMargin / 2).attr("y2", _n().state.padding + d + _n().state.dividerMargin / 2).attr("class", "descr-divider"), x = c.node().getBBox(), h = Math.max(x.width, s.width);
  return r.attr("x2", h + 3 * _n().state.padding), e.insert("rect", ":first-child").attr("x", _n().state.padding).attr("y", _n().state.padding).attr("width", h + 2 * _n().state.padding).attr("height", x.height + d + 2 * _n().state.padding).attr("rx", _n().state.radius), e;
}, "drawDescrState");
var Y = F((e, n, g) => {
  const s = _n().state.padding, d = 2 * _n().state.padding, c = e.node().getBBox(), l = c.width, a = c.x, r = e.append("text").attr("x", 0).attr("y", _n().state.titleShift).attr("font-size", _n().state.fontSize).attr("class", "state-title").text(n.id), x = r.node().getBBox().width + d;
  let h = Math.max(x, l);
  h === l && (h = h + d);
  let o;
  const u = e.node().getBBox();
  n.doc, o = a - s, x > l && (o = (l - h) / 2 + s), Math.abs(a - u.x) < s && x > l && (o = a - (x - l) / 2);
  const b = 1 - _n().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", o).attr("y", b).attr("class", g ? "alt-composit" : "composit").attr("width", h).attr(
    "height",
    u.height + _n().state.textHeight + _n().state.titleShift + 1
  ).attr("rx", "0"), r.attr("x", o + s), x <= l && r.attr("x", a + (h - d) / 2 - x / 2 + s), e.insert("rect", ":first-child").attr("x", o).attr(
    "y",
    _n().state.titleShift - _n().state.textHeight - _n().state.padding
  ).attr("width", h).attr("height", _n().state.textHeight * 3).attr("rx", _n().state.radius), e.insert("rect", ":first-child").attr("x", o).attr(
    "y",
    _n().state.titleShift - _n().state.textHeight - _n().state.padding
  ).attr("width", h).attr("height", u.height + 3 + 2 * _n().state.textHeight).attr("rx", _n().state.radius), e;
}, "addTitleAndBox");
var X = F((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", _n().state.sizeUnit + _n().state.miniPadding).attr(
  "cx",
  _n().state.padding + _n().state.sizeUnit + _n().state.miniPadding
).attr(
  "cy",
  _n().state.padding + _n().state.sizeUnit + _n().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", _n().state.sizeUnit).attr("cx", _n().state.padding + _n().state.sizeUnit + 2).attr("cy", _n().state.padding + _n().state.sizeUnit + 2)), "drawEndState");
var q = F((e, n) => {
  let g = _n().state.forkWidth, s = _n().state.forkHeight;
  if (n.parentId) {
    let d = g;
    g = s, s = d;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", g).attr("height", s).attr("x", _n().state.padding).attr("y", _n().state.padding);
}, "drawForkJoinState");
var Z = F((e, n, g, s) => {
  let d = 0;
  const c = s.append("text");
  c.style("text-anchor", "start"), c.attr("class", "noteText");
  let l = e.replace(/\r\n/g, "<br/>");
  l = l.replace(/\n/g, "<br/>");
  const a = l.split(yu.lineBreakRegex);
  let r = 1.25 * _n().state.noteMargin;
  for (const x of a) {
    const h = x.trim();
    if (h.length > 0) {
      const o = c.append("tspan");
      if (o.text(h), r === 0) {
        const u = o.node().getBBox();
        r += u.height;
      }
      d += r, o.attr("x", n + _n().state.noteMargin), o.attr("y", g + d + 1.25 * _n().state.noteMargin);
    }
  }
  return { textWidth: c.node().getBBox().width, textHeight: d };
}, "_drawLongText");
var _ = F((e, n) => {
  n.attr("class", "state-note");
  const g = n.append("rect").attr("x", 0).attr("y", _n().state.padding), s = n.append("g"), { textWidth: d, textHeight: c } = Z(e, 0, 0, s);
  return g.attr("height", c + 2 * _n().state.noteMargin), g.attr("width", d + _n().state.noteMargin * 2), g;
}, "drawNote");
var H = F(function(e, n) {
  const g = n.id, s = {
    id: g,
    label: n.id,
    width: 0,
    height: 0
  }, d = e.append("g").attr("id", g).attr("class", "stateGroup");
  n.type === "start" && F2(d), n.type === "end" && X(d), (n.type === "fork" || n.type === "join") && q(d, n), n.type === "note" && _(n.note.text, d), n.type === "divider" && W(d), n.type === "default" && n.descriptions.length === 0 && j(d, n), n.type === "default" && n.descriptions.length > 0 && J(d, n);
  const c = d.node().getBBox();
  return s.width = c.width + 2 * _n().state.padding, s.height = c.height + 2 * _n().state.padding, s;
}, "drawState");
var L = 0;
var K = F(function(e, n, g) {
  const s = F(function(r) {
    switch (r) {
      case je.relationType.AGGREGATION:
        return "aggregation";
      case je.relationType.EXTENSION:
        return "extension";
      case je.relationType.COMPOSITION:
        return "composition";
      case je.relationType.DEPENDENCY:
        return "dependency";
    }
  }, "getRelationType");
  n.points = n.points.filter((r) => !Number.isNaN(r.y));
  const d = n.points, c = Hvt().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  }).curve(A1), l = e.append("path").attr("d", c(d)).attr("id", "edge" + L).attr("class", "transition");
  let a = "";
  if (_n().state.arrowMarkerAbsolute && (a = hW(true)), l.attr(
    "marker-end",
    "url(" + a + "#" + s(je.relationType.DEPENDENCY) + "End)"
  ), g.title !== void 0) {
    const r = e.append("g").attr("class", "stateLabel"), { x, y: h } = as.calcLabelPosition(n.points), o = yu.getRows(g.title);
    let u = 0;
    const b = [];
    let m = 0, S = 0;
    for (let f = 0; f <= o.length; f++) {
      const p = r.append("text").attr("text-anchor", "middle").text(o[f]).attr("x", x).attr("y", h + u), w = p.node().getBBox();
      m = Math.max(m, w.width), S = Math.min(S, w.x), Tt.info(w.x, x, h + u), u === 0 && (u = p.node().getBBox().height, Tt.info("Title height", u, h)), b.push(p);
    }
    let N = u * o.length;
    if (o.length > 1) {
      const f = (o.length - 1) * u * 0.5;
      b.forEach((p, w) => p.attr("y", h + w * u - f)), N = u * o.length;
    }
    const i = r.node().getBBox();
    r.insert("rect", ":first-child").attr("class", "box").attr("x", x - m / 2 - _n().state.padding / 2).attr("y", h - N / 2 - _n().state.padding / 2 - 3.5).attr("width", m + _n().state.padding).attr("height", N + _n().state.padding), Tt.info(i);
  }
  L++;
}, "drawEdge");
var B;
var T = {};
var Q = F(function() {
}, "setConf");
var V = F(function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers");
var tt = F(function(e, n, g, s) {
  B = _n().state;
  const d = _n().securityLevel;
  let c;
  d === "sandbox" && (c = gn("#i" + n));
  const l = d === "sandbox" ? gn(c.nodes()[0].contentDocument.body) : gn("body"), a = d === "sandbox" ? c.nodes()[0].contentDocument : document;
  Tt.debug("Rendering diagram " + e);
  const r = l.select(`[id='${n}']`);
  V(r);
  const x = s.db.getRootDoc();
  D(x, r, void 0, false, l, a, s);
  const h = B.padding, o = r.node().getBBox(), u = o.width + h * 2, b = o.height + h * 2, m = u * 1.75;
  uW(r, b, m, B.useMaxWidth), r.attr(
    "viewBox",
    `${o.x - B.padding}  ${o.y - B.padding} ` + u + " " + b
  );
}, "draw");
var et = F((e) => e ? e.length * B.fontSizeFactor : 1, "getLabelWidth");
var D = F((e, n, g, s, d, c, l) => {
  const a = new y({
    compound: true,
    multigraph: true
  });
  let r, x = true;
  for (r = 0; r < e.length; r++)
    if (e[r].stmt === "relation") {
      x = false;
      break;
    }
  g ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: x ? 1 : B.edgeLengthFactor,
    nodeSep: x ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: x ? 1 : B.edgeLengthFactor,
    nodeSep: x ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  });
  const h = l.db.getStates(), o = l.db.getRelations(), u = Object.keys(h);
  for (const i of u) {
    const f = h[i];
    g && (f.parentId = g);
    let p;
    if (f.doc) {
      let w = n.append("g").attr("id", f.id).attr("class", "stateGroup");
      p = D(f.doc, w, f.id, !s, d, c, l);
      {
        w = Y(w, f, s);
        let k = w.node().getBBox();
        p.width = k.width, p.height = k.height + B.padding / 2, T[f.id] = { y: B.compositTitleSize };
      }
    } else
      p = H(n, f, a);
    if (f.note) {
      const w = {
        descriptions: [],
        id: f.id + "-note",
        note: f.note,
        type: "note"
      }, k = H(n, w, a);
      f.note.position === "left of" ? (a.setNode(p.id + "-note", k), a.setNode(p.id, p)) : (a.setNode(p.id, p), a.setNode(p.id + "-note", k)), a.setParent(p.id, p.id + "-group"), a.setParent(p.id + "-note", p.id + "-group");
    } else
      a.setNode(p.id, p);
  }
  Tt.debug("Count=", a.nodeCount(), a);
  let b = 0;
  o.forEach(function(i) {
    b++, Tt.debug("Setting edge", i), a.setEdge(
      i.id1,
      i.id2,
      {
        relation: i,
        width: et(i.title),
        height: B.labelHeight * yu.getRows(i.title).length,
        labelpos: "c"
      },
      "id" + b
    );
  }), it(a), Tt.debug("Graph after layout", a.nodes());
  const m = n.node();
  a.nodes().forEach(function(i) {
    i !== void 0 && a.node(i) !== void 0 ? (Tt.warn("Node " + i + ": " + JSON.stringify(a.node(i))), d.select("#" + m.id + " #" + i).attr(
      "transform",
      "translate(" + (a.node(i).x - a.node(i).width / 2) + "," + (a.node(i).y + (T[i] ? T[i].y : 0) - a.node(i).height / 2) + " )"
    ), d.select("#" + m.id + " #" + i).attr("data-x-shift", a.node(i).x - a.node(i).width / 2), c.querySelectorAll("#" + m.id + " #" + i + " .divider").forEach((f) => {
      const p = f.parentElement;
      let w = 0, k = 0;
      p && (p.parentElement && (w = p.parentElement.getBBox().width), k = parseInt(p.getAttribute("data-x-shift"), 10), Number.isNaN(k) && (k = 0)), f.setAttribute("x1", 0 - k + 8), f.setAttribute("x2", w - k - 8);
    })) : Tt.debug("No Node " + i + ": " + JSON.stringify(a.node(i)));
  });
  let S = m.getBBox();
  a.edges().forEach(function(i) {
    i !== void 0 && a.edge(i) !== void 0 && (Tt.debug("Edge " + i.v + " -> " + i.w + ": " + JSON.stringify(a.edge(i))), K(n, a.edge(i), a.edge(i).relation));
  }), S = m.getBBox();
  const N = {
    id: g || "root",
    label: g || "root",
    width: 0,
    height: 0
  };
  return N.width = S.width + 2 * B.padding, N.height = S.height + 2 * B.padding, Tt.debug("Doc rendered", N, a), N;
}, "renderDoc");
var at = {
  setConf: Q,
  draw: tt
};
var st = {
  parser: Fe,
  get db() {
    return new je(1);
  },
  renderer: at,
  styles: Ue,
  init: F((e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
  }, "init")
};
export {
  st as diagram
};
//# sourceMappingURL=stateDiagram-MI5ZYTHO-DUpd8xBQ-BpMWAYEV-772GAHXS.js.map
