var O = Object.defineProperty, _ = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var l = (r, t, e) => t in r ? O(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, $ = (r, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && l(r, e, t[e]);
  if (y)
    for (var e of y(t))
      x.call(t, e) && l(r, e, t[e]);
  return r;
}, b = (r, t) => _(r, S(t));
var p = (r, t, e) => l(r, typeof t != "symbol" ? t + "" : t, e);
const T = (r) => (t) => {
  if (t >= r)
    return !0;
  throw new Error(`${t} cannot be less than ${r}`);
}, F = (r) => (t) => {
  if (t <= r)
    return !0;
  throw new Error(`${t} cannot be greater than ${r}`);
}, I = (r) => (t) => {
  if (t === r)
    return !0;
  throw new Error(`${t} !== ${r}`);
}, M = (r) => (t) => {
  if (t.length >= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too short. Min: ${r}`);
}, N = (r) => (t) => {
  if (t.length <= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too long. Min: ${r}`);
}, k = (r) => (t) => {
  if (t.length === r)
    return !0;
  throw new Error(`The value's length (${t.length}) !== ${r}`);
}, q = () => (r) => {
  if (r < 0)
    return !0;
  throw new Error(`Value must be negative: ${r}`);
}, V = () => (r) => {
  if (r >= 0)
    return !0;
  throw new Error(`Value must be positive: ${r}`);
}, E = (r, t = void 0) => {
  const e = new RegExp(r, t);
  return (n) => {
    if (e.test(n))
      return !0;
    throw new Error(`${n} doesn't match the pattern: ${String(r)}${t ? "/" + String(t) : ""}`);
  };
}, a = (r) => (t) => {
  if (!r.includes(t))
    return !0;
  throw new Error(`${t} is forbidden: [${r.join(", ")}]`);
}, h = (r) => (t) => {
  if (r.includes(t))
    return !0;
  throw new Error(`${t} is not on the list: [${r.join(", ")}]`);
}, z = () => (r) => {
  const t = `The value cannot be empty: ${r}`;
  if (Array.isArray(r) || typeof r == "string") {
    if (r.length > 0)
      return !0;
    throw new Error(t);
  }
  if (typeof r == "object") {
    if (Object.keys(r).length > 0)
      return !0;
    throw new Error(t);
  }
  throw new Error(`Invalid value type: ${typeof r}`);
}, u = (r) => (t) => Object.keys(t).filter((e) => {
  try {
    return r(e);
  } catch (n) {
    return !1;
  }
}), f = (r, t) => r.length === t.length && r.every((e, n) => e === t[n]), D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrays: f,
  filterObjectKeys: u
}, Symbol.toStringTag, { value: "Module" })), j = (r) => {
  const t = u(h(r));
  return (e) => {
    const n = t(e);
    if (f(n, Object.keys(e)))
      return !0;
    const i = u(a(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, L = (r) => {
  const t = u(a(r));
  return (e) => {
    const n = t(e);
    if (f(n, Object.keys(e)))
      return !0;
    const i = u(h(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, P = () => {
  const r = E(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return (t) => {
    try {
      return r(t), !0;
    } catch (e) {
      throw new Error(`Invalid email: ${t}`);
    }
  };
}, G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allowedFields: j,
  allowlist: h,
  blockedFields: L,
  blocklist: a,
  email: P,
  exact: I,
  exactLength: k,
  max: F,
  maxLength: N,
  min: T,
  minLength: M,
  negative: q,
  notEmpty: z,
  positive: V,
  regexp: E
}, Symbol.toStringTag, { value: "Module" })), C = (r) => {
  if (!Number.isNaN(r) && typeof r == "number")
    return !0;
  throw new Error(`${r} is NaN`);
}, K = (r) => {
  if (Number.isInteger(r))
    return !0;
  throw new Error(`Value must be integer: ${r}`);
}, R = (r) => {
  if (typeof r == "string")
    return !0;
  throw new Error(`${r} is not a string`);
}, U = (r) => {
  if (typeof r == "boolean")
    return !0;
  throw new Error(`${r} must be boolean`);
}, d = (r) => {
  if (Array.isArray(r))
    return !0;
  throw new Error(`${r} must be an array`);
}, w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: d,
  bool: U,
  int: K,
  number: C,
  string: R
}, Symbol.toStringTag, { value: "Module" })), c = (r, t, e = "") => {
  const n = h(Object.keys(w));
  if (typeof t == "string")
    return n(t), w[t](r);
  if (Array.isArray(t) && t.length === 1)
    return n(t[0]), d(r) && r.every((o) => c(o, t[0]));
  if (typeof t != "object")
    throw new Error(`${e ? e + " | " : ""}Invalid config: ${t}`);
  if (j(["type", "required", "rules", "nullable"])(t), t.required === !0 && r === void 0)
    throw new Error(`${e ? e + " | " : ""}Value is required`);
  if (t.nullable === !0 && r === null)
    return !0;
  if (r === null)
    throw new Error(`${e ? e + " | " : ""}Value cannot be null`);
  if (Array.isArray(t.type) && t.type.length === 1) {
    const o = b($({}, t), {
      type: t.type[0]
    });
    return d(r) && r.every(
      (i, s) => c(i, o, `${e}[${s}]`)
    );
  }
  return n(t.type), w[t.type](r), t.rules && t.rules.forEach((o) => {
    o(r);
  }), !0;
}, g = (r, t) => {
  const e = Object.keys(t), n = Object.keys(r), o = [], i = e.filter((s) => t[s].required !== !0 ? !1 : !n.includes(s));
  return i.length > 0 && o.push(`Missing required fields: ${i.join(", ")}`), n.every((s) => {
    if (!e.includes(s)) {
      o.push(`Unknown field: ${s}`);
      return;
    }
    try {
      return c(r[s], t[s], s);
    } catch (m) {
      o.push(m);
    }
  }), { success: o.length === 0, errors: o };
};
class H {
  constructor(t) {
    p(this, "schema", {});
    this.schema = t;
  }
  validate(t) {
    const { success: e, errors: n } = this.validateSafely(t);
    if (e)
      return !0;
    throw new Error(`Validation error:
${n.join(`
`)}`);
  }
  validateSafely(t) {
    return g(t, this.schema);
  }
}
const J = (r, t, e = "") => {
  const n = [];
  try {
    c(r, t, e);
  } catch (o) {
    n.push(o);
  }
  return { success: n.length === 0, errors: n };
}, Q = (r, t) => {
  const { success: e, errors: n } = g(r, t);
  if (e)
    return !0;
  throw new Error(`Validation error:
${n.join(`
`)}`);
};
export {
  H as Schemer,
  G as rules,
  w as types,
  D as utils,
  c as validate,
  Q as validateObject,
  g as validateObjectSafely,
  J as validateSafely
};
