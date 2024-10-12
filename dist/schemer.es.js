var F = Object.defineProperty, q = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var a = (r, t, e) => t in r ? F(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, y = (r, t) => {
  for (var e in t || (t = {}))
    k.call(t, e) && a(r, e, t[e]);
  if (f)
    for (var e of f(t))
      V.call(t, e) && a(r, e, t[e]);
  return r;
}, b = (r, t) => q(r, P(t));
var p = (r, t, e) => a(r, typeof t != "symbol" ? t + "" : t, e);
const v = (r) => (t) => {
  if (t >= r)
    return !0;
  throw new Error(`${t} cannot be less than ${r}`);
}, z = (r) => (t) => {
  if (t <= r)
    return !0;
  throw new Error(`${t} cannot be greater than ${r}`);
}, L = (r) => (t) => {
  if (t === r)
    return !0;
  throw new Error(`${t} !== ${r}`);
}, R = (r) => (t) => {
  if (t.length >= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too short. Min: ${r}`);
}, C = (r) => (t) => {
  if (t.length <= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too long. Min: ${r}`);
}, K = (r) => (t) => {
  if (t.length === r)
    return !0;
  throw new Error(`The value's length (${t.length}) !== ${r}`);
}, U = () => (r) => {
  if (r < 0)
    return !0;
  throw new Error(`Value must be negative: ${r}`);
}, h = () => (r) => {
  if (r >= 0)
    return !0;
  throw new Error(`Value must be positive: ${r}`);
}, j = (r, t = void 0) => {
  const e = new RegExp(r, t);
  return (n) => {
    if (e.test(n))
      return !0;
    throw new Error(`${n} doesn't match the pattern: ${String(r)}${t ? "/" + String(t) : ""}`);
  };
}, d = (r) => (t) => {
  if (!r.includes(t))
    return !0;
  throw new Error(`${t} is forbidden: [${r.join(", ")}]`);
}, l = (r) => (t) => {
  if (r.includes(t))
    return !0;
  throw new Error(`${t} is not on the list: [${r.join(", ")}]`);
}, B = () => (r) => {
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
}), w = (r, t) => r.length === t.length && r.every((e, n) => e === t[n]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrays: w,
  filterObjectKeys: c
}, Symbol.toStringTag, { value: "Module" })), m = (r) => {
  const t = c(l(r));
  return (e) => {
    const n = t(e);
    if (w(n, Object.keys(e)))
      return !0;
    const i = c(d(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, D = (r) => {
  const t = c(d(r));
  return (e) => {
    const n = t(e);
    if (w(n, Object.keys(e)))
      return !0;
    const i = c(l(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, g = () => {
  const r = j(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return (t) => {
    try {
      return r(t), !0;
    } catch (e) {
      throw new Error(`Invalid email: ${t}`);
    }
  };
}, or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allowedFields: m,
  allowlist: l,
  blockedFields: D,
  blocklist: d,
  email: g,
  exact: L,
  exactLength: K,
  max: z,
  maxLength: C,
  min: v,
  minLength: R,
  negative: U,
  notEmpty: B,
  positive: h,
  regexp: j
}, Symbol.toStringTag, { value: "Module" })), G = (r) => {
  if (!Number.isNaN(r) && typeof r == "number")
    return !0;
  throw new Error(`${r} is NaN`);
}, H = (r) => {
  if (Number.isInteger(r))
    return !0;
  throw new Error(`Value must be integer: ${r}`);
}, J = (r) => {
  if (typeof r == "string")
    return !0;
  throw new Error(`${r} is not a string`);
}, Q = (r) => {
  if (typeof r == "boolean")
    return !0;
  throw new Error(`${r} must be boolean`);
}, O = (r) => {
  if (Array.isArray(r))
    return !0;
  throw new Error(`${r} must be an array`);
}, _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: O,
  bool: Q,
  int: H,
  number: G,
  string: J
}, Symbol.toStringTag, { value: "Module" })), S = l(Object.keys(_)), $ = (r, t) => t === "any" ? !0 : (S(t), _[t](r)), E = (r, t, e = "") => (O(r), t.type instanceof T ? r.every((n) => t.type.validate(n)) : (S(t.type), r.every((n, o) => u(n, t, `${e}[${o}]`)))), W = (r, t, e = "") => {
  if (t.nullable === !0 && r === null)
    return !0;
  if (r === null)
    throw new Error(`${e ? e + " | " : ""}Value cannot be null`);
  return !1;
}, X = (r, t, e = "") => {
  if (t.required === !0 && r === void 0)
    throw new Error(`${e ? e + " | " : ""}Value is required`);
  return !0;
}, Y = (r, t = "") => {
  if (typeof r != "object")
    throw new Error(`${t ? t + " | " : ""}Invalid config: ${r}`);
  return m(["type", "required", "rules", "nullable"])(r);
}, u = (r, t, e = "") => typeof t == "string" ? $(r, t) : t instanceof T ? t.validate(r) : Array.isArray(t) && t.length === 1 ? E(r, { type: t[0] }, e) : (Y(t, e), X(r, t, e), W(r, t, e) ? !0 : Array.isArray(t.type) && t.type.length === 1 ? E(r, b(y({}, t), { type: t.type[0] }), e) : ($(r, t.type), t.rules && t.rules.forEach((n) => n(r)), !0)), A = (r, t) => {
  const e = Object.keys(t), n = Object.keys(r), o = [], i = e.filter((s) => t[s].required !== !0 ? !1 : !n.includes(s));
  return i.length > 0 && o.push(`Missing required fields: ${i.join(", ")}`), n.every((s) => {
    if (!e.includes(s)) {
      o.push(`Unknown field: ${s}`);
      return;
    }
    try {
      return u(r[s], t[s], s);
    } catch (M) {
      o.push(M);
    }
  }), { success: o.length === 0, errors: o };
};
class T {
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
    return A(t, this.schema);
  }
}
const sr = (r, t, e = "") => {
  const n = [];
  try {
    u(r, t, e);
  } catch (o) {
    n.push(o);
  }
  return { success: n.length === 0, errors: n };
}, ir = (r, t) => {
  const { success: e, errors: n } = A(r, t);
  if (e)
    return !0;
  throw new Error(`Validation error:
${n.join(`
`)}`);
}, x = {
  type: "string",
  rules: [
    g()
  ]
}, Z = (r) => u(r, x), N = {
  type: "int",
  rules: [
    h()
  ]
}, rr = (r) => u(r, N), I = {
  type: "number",
  rules: [
    h()
  ]
}, tr = (r) => u(r, I), ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  email: x,
  positiveInt: N,
  positiveNumber: I,
  validateEmail: Z,
  validatePositiveInt: rr,
  validatePositiveNumber: tr
}, Symbol.toStringTag, { value: "Module" }));
export {
  T as Schemer,
  ur as common,
  or as rules,
  _ as types,
  nr as utils,
  u as validate,
  ir as validateObject,
  A as validateObjectSafely,
  sr as validateSafely
};
