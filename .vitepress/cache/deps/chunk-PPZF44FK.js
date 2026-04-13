import {
  $re,
  Are,
  Bre,
  Cre,
  Ere,
  Gc,
  J$,
  Lre,
  Mre,
  Pvt,
  Sre,
  Tre,
  _re,
  iT,
  oT
} from "./chunk-3UODNKBR.js";

// node_modules/vitepress-plugin-legend/dist/arc-CegaQWj_-DUexKeov.js
function fn(i) {
  return i.innerRadius;
}
function ln(i) {
  return i.outerRadius;
}
function gn(i) {
  return i.startAngle;
}
function pn(i) {
  return i.endAngle;
}
function xn(i) {
  return i && i.padAngle;
}
function mn(i, d, I, q, v, T, S, a) {
  var L = I - i, r = q - d, n = S - v, p = a - T, u = p * L - n * r;
  if (!(u * u < iT))
    return u = (n * (d - T) - p * (i - v)) / u, [i + u * L, d + u * r];
}
function Y(i, d, I, q, v, T, S) {
  var a = i - I, L = d - q, r = (S ? T : -T) / Are(a * a + L * L), n = r * L, p = -r * a, u = i + n, s = d + p, e = I + n, f = q + p, _ = (u + e) / 2, o = (s + f) / 2, x = e - u, g = f - s, A = x * x + g * g, F = v - T, O = u * f - e * s, P = (g < 0 ? -1 : 1) * Are(Sre(0, F * F * A - O * O)), W = (O * g - x * P) / A, B = (-O * x - g * P) / A, R = (O * g + x * P) / A, m = (-O * x + g * P) / A, h = W - _, t = B - o, c = R - _, j = m - o;
  return h * h + t * t > c * c + j * j && (W = R, B = m), {
    cx: W,
    cy: B,
    x01: -n,
    y01: -p,
    x11: W * (v / F - 1),
    y11: B * (v / F - 1)
  };
}
function dn() {
  var i = fn, d = ln, I = Gc(0), q = null, v = gn, T = pn, S = xn, a = null, L = Pvt(r);
  function r() {
    var n, p, u = +i.apply(this, arguments), s = +d.apply(this, arguments), e = v.apply(this, arguments) - oT, f = T.apply(this, arguments) - oT, _ = $re(f - e), o = f > e;
    if (a || (a = n = L()), s < u && (p = s, s = u, u = p), !(s > iT)) a.moveTo(0, 0);
    else if (_ > Tre - iT)
      a.moveTo(s * _re(e), s * Ere(e)), a.arc(0, 0, s, e, f, !o), u > iT && (a.moveTo(u * _re(f), u * Ere(f)), a.arc(0, 0, u, f, e, o));
    else {
      var x = e, g = f, A = e, F = f, O = _, P = _, W = S.apply(this, arguments) / 2, B = W > iT && (q ? +q.apply(this, arguments) : Are(u * u + s * s)), R = Mre($re(s - u) / 2, +I.apply(this, arguments)), m = R, h = R, t, c;
      if (B > iT) {
        var j = Bre(B / u * Ere(W)), k = Bre(B / s * Ere(W));
        (O -= j * 2) > iT ? (j *= o ? 1 : -1, A += j, F -= j) : (O = 0, A = F = (e + f) / 2), (P -= k * 2) > iT ? (k *= o ? 1 : -1, x += k, g -= k) : (P = 0, x = g = (e + f) / 2);
      }
      var G = s * _re(x), Q = s * Ere(x), M = u * _re(F), N = u * Ere(F);
      if (R > iT) {
        var U = s * _re(g), X = s * Ere(g), Z = u * _re(A), $ = u * Ere(A), H;
        if (_ < J$)
          if (H = mn(G, Q, Z, $, U, X, M, N)) {
            var J = G - H[0], V = Q - H[1], K = U - H[0], w = X - H[1], nn = 1 / Ere(Lre((J * K + V * w) / (Are(J * J + V * V) * Are(K * K + w * w))) / 2), tn = Are(H[0] * H[0] + H[1] * H[1]);
            m = Mre(R, (u - tn) / (nn - 1)), h = Mre(R, (s - tn) / (nn + 1));
          } else
            m = h = 0;
      }
      P > iT ? h > iT ? (t = Y(Z, $, G, Q, s, h, o), c = Y(U, X, M, N, s, h, o), a.moveTo(t.cx + t.x01, t.cy + t.y01), h < R ? a.arc(t.cx, t.cy, h, Cre(t.y01, t.x01), Cre(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, h, Cre(t.y01, t.x01), Cre(t.y11, t.x11), !o), a.arc(0, 0, s, Cre(t.cy + t.y11, t.cx + t.x11), Cre(c.cy + c.y11, c.cx + c.x11), !o), a.arc(c.cx, c.cy, h, Cre(c.y11, c.x11), Cre(c.y01, c.x01), !o))) : (a.moveTo(G, Q), a.arc(0, 0, s, x, g, !o)) : a.moveTo(G, Q), !(u > iT) || !(O > iT) ? a.lineTo(M, N) : m > iT ? (t = Y(M, N, U, X, u, -m, o), c = Y(G, Q, Z, $, u, -m, o), a.lineTo(t.cx + t.x01, t.cy + t.y01), m < R ? a.arc(t.cx, t.cy, m, Cre(t.y01, t.x01), Cre(c.y01, c.x01), !o) : (a.arc(t.cx, t.cy, m, Cre(t.y01, t.x01), Cre(t.y11, t.x11), !o), a.arc(0, 0, u, Cre(t.cy + t.y11, t.cx + t.x11), Cre(c.cy + c.y11, c.cx + c.x11), o), a.arc(c.cx, c.cy, m, Cre(c.y11, c.x11), Cre(c.y01, c.x01), !o))) : a.arc(0, 0, u, F, A, o);
    }
    if (a.closePath(), n) return a = null, n + "" || null;
  }
  return r.centroid = function() {
    var n = (+i.apply(this, arguments) + +d.apply(this, arguments)) / 2, p = (+v.apply(this, arguments) + +T.apply(this, arguments)) / 2 - J$ / 2;
    return [_re(p) * n, Ere(p) * n];
  }, r.innerRadius = function(n) {
    return arguments.length ? (i = typeof n == "function" ? n : Gc(+n), r) : i;
  }, r.outerRadius = function(n) {
    return arguments.length ? (d = typeof n == "function" ? n : Gc(+n), r) : d;
  }, r.cornerRadius = function(n) {
    return arguments.length ? (I = typeof n == "function" ? n : Gc(+n), r) : I;
  }, r.padRadius = function(n) {
    return arguments.length ? (q = n == null ? null : typeof n == "function" ? n : Gc(+n), r) : q;
  }, r.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : Gc(+n), r) : v;
  }, r.endAngle = function(n) {
    return arguments.length ? (T = typeof n == "function" ? n : Gc(+n), r) : T;
  }, r.padAngle = function(n) {
    return arguments.length ? (S = typeof n == "function" ? n : Gc(+n), r) : S;
  }, r.context = function(n) {
    return arguments.length ? (a = n ?? null, r) : a;
  }, r;
}

export {
  dn
};
//# sourceMappingURL=chunk-PPZF44FK.js.map
