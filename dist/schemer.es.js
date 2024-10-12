var I = Object.defineProperty, T = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var b = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var h = (r, t, e) => t in r ? I(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, $ = (r, t) => {
  for (var e in t || (t = {}))
    N.call(t, e) && h(r, e, t[e]);
  if (b)
    for (var e of b(t))
      F.call(t, e) && h(r, e, t[e]);
  return r;
}, p = (r, t) => T(r, M(t));
var E = (r, t, e) => h(r, typeof t != "symbol" ? t + "" : t, e);
const P = (r) => (t) => {
  if (t >= r)
    return !0;
  throw new Error(`${t} cannot be less than ${r}`);
}, k = (r) => (t) => {
  if (t <= r)
    return !0;
  throw new Error(`${t} cannot be greater than ${r}`);
}, q = (r) => (t) => {
  if (t === r)
    return !0;
  throw new Error(`${t} !== ${r}`);
}, V = (r) => (t) => {
  if (t.length >= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too short. Min: ${r}`);
}, z = (r) => (t) => {
  if (t.length <= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too long. Min: ${r}`);
}, L = (r) => (t) => {
  if (t.length === r)
    return !0;
  throw new Error(`The value's length (${t.length}) !== ${r}`);
}, C = () => (r) => {
  if (r < 0)
    return !0;
  throw new Error(`Value must be negative: ${r}`);
}, d = () => (r) => {
  if (r >= 0)
    return !0;
  throw new Error(`Value must be positive: ${r}`);
}, m = (r, t = void 0) => {
  const e = new RegExp(r, t);
  return (n) => {
    if (e.test(n))
      return !0;
    throw new Error(`${n} doesn't match the pattern: ${String(r)}${t ? "/" + String(t) : ""}`);
  };
}, y = (r) => (t) => {
  if (!r.includes(t))
    return !0;
  throw new Error(`${t} is forbidden: [${r.join(", ")}]`);
}, l = (r) => (t) => {
  if (r.includes(t))
    return !0;
  throw new Error(`${t} is not on the list: [${r.join(", ")}]`);
}, K = () => (r) => {
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
}, c = (r) => (t) => Object.keys(t).filter((e) => {
  try {
    return r(e);
  } catch (n) {
    return !1;
  }
}), f = (r, t) => r.length === t.length && r.every((e, n) => e === t[n]), X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrays: f,
  filterObjectKeys: c
}, Symbol.toStringTag, { value: "Module" })), j = (r) => {
  const t = c(l(r));
  return (e) => {
    const n = t(e);
    if (f(n, Object.keys(e)))
      return !0;
    const i = c(y(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, R = (r) => {
  const t = c(y(r));
  return (e) => {
    const n = t(e);
    if (f(n, Object.keys(e)))
      return !0;
    const i = c(l(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, g = () => {
  const r = m(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return (t) => {
    try {
      return r(t), !0;
    } catch (e) {
      throw new Error(`Invalid email: ${t}`);
    }
  };
}, Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allowedFields: j,
  allowlist: l,
  blockedFields: R,
  blocklist: y,
  email: g,
  exact: q,
  exactLength: L,
  max: k,
  maxLength: z,
  min: P,
  minLength: V,
  negative: C,
  notEmpty: K,
  positive: d,
  regexp: m
}, Symbol.toStringTag, { value: "Module" })), U = (r) => {
  if (!Number.isNaN(r) && typeof r == "number")
    return !0;
  throw new Error(`${r} is NaN`);
}, B = (r) => {
  if (Number.isInteger(r))
    return !0;
  throw new Error(`Value must be integer: ${r}`);
}, D = (r) => {
  if (typeof r == "string")
    return !0;
  throw new Error(`${r} is not a string`);
}, G = (r) => {
  if (typeof r == "boolean")
    return !0;
  throw new Error(`${r} must be boolean`);
}, w = (r) => {
  if (Array.isArray(r))
    return !0;
  throw new Error(`${r} must be an array`);
}, a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: w,
  bool: G,
  int: B,
  number: U,
  string: D
}, Symbol.toStringTag, { value: "Module" })), u = (r, t, e = "") => {
  const n = l(Object.keys(a));
  if (typeof t == "string")
    return t === "any" ? !0 : (n(t), a[t](r));
  if (Array.isArray(t) && t.length === 1)
    return n(t[0]), w(r) && r.every((o) => u(o, t[0]));
  if (typeof t != "object")
    throw new Error(`${e ? e + " | " : ""}Invalid config: ${t}`);
  if (j(["type", "required", "rules", "nullable"])(t), t.required === !0 && r === void 0)
    throw new Error(`${e ? e + " | " : ""}Value is required`);
  if (t.nullable === !0 && r === null)
    return !0;
  if (r === null)
    throw new Error(`${e ? e + " | " : ""}Value cannot be null`);
  if (Array.isArray(t.type) && t.type.length === 1) {
    const o = p($({}, t), {
      type: t.type[0]
    });
    return w(r) && r.every(
      (i, s) => u(i, o, `${e}[${s}]`)
    );
  }
  return n(t.type), a[t.type](r), t.rules && t.rules.forEach((o) => {
    o(r);
  }), !0;
}, O = (r, t) => {
  const e = Object.keys(t), n = Object.keys(r), o = [], i = e.filter((s) => t[s].required !== !0 ? !1 : !n.includes(s));
  return i.length > 0 && o.push(`Missing required fields: ${i.join(", ")}`), n.every((s) => {
    if (!e.includes(s)) {
      o.push(`Unknown field: ${s}`);
      return;
    }
    try {
      return u(r[s], t[s], s);
    } catch (A) {
      o.push(A);
    }
  }), { success: o.length === 0, errors: o };
};
class Z {
  constructor(t) {
    E(this, "schema", {});
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
    return O(t, this.schema);
  }
}
const v = (r, t, e = "") => {
  const n = [];
  try {
    u(r, t, e);
  } catch (o) {
    n.push(o);
  }
  return { success: n.length === 0, errors: n };
}, rr = (r, t) => {
  const { success: e, errors: n } = O(r, t);
  if (e)
    return !0;
  throw new Error(`Validation error:
${n.join(`
`)}`);
}, _ = {
  type: "string",
  rules: [
    g()
  ]
}, H = (r) => u(r, _), S = {
  type: "int",
  rules: [
    d()
  ]
}, J = (r) => u(r, S), x = {
  type: "number",
  rules: [
    d()
  ]
}, Q = (r) => u(r, x), tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  email: _,
  positiveInt: S,
  positiveNumber: x,
  validateEmail: H,
  validatePositiveInt: J,
  validatePositiveNumber: Q
}, Symbol.toStringTag, { value: "Module" }));
export {
  Z as Schemer,
  tr as common,
  Y as rules,
  a as types,
  X as utils,
  u as validate,
  rr as validateObject,
  O as validateObjectSafely,
  v as validateSafely
};
