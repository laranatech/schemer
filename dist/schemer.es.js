var P = Object.defineProperty, k = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var h = (r, t, e) => t in r ? P(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, p = (r, t) => {
  for (var e in t || (t = {}))
    z.call(t, e) && h(r, e, t[e]);
  if ($)
    for (var e of $(t))
      L.call(t, e) && h(r, e, t[e]);
  return r;
}, E = (r, t) => k(r, V(t));
var j = (r, t, e) => h(r, typeof t != "symbol" ? t + "" : t, e);
const C = (r) => (t) => {
  if (t >= r)
    return !0;
  throw new Error(`${t} cannot be less than ${r}`);
}, R = (r) => (t) => {
  if (t <= r)
    return !0;
  throw new Error(`${t} cannot be greater than ${r}`);
}, K = (r) => (t) => {
  if (t === r)
    return !0;
  throw new Error(`${t} !== ${r}`);
}, U = (r) => (t) => {
  if (t.length >= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too short. Min: ${r}`);
}, B = (r) => (t) => {
  if (t.length <= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too long. Min: ${r}`);
}, D = (r) => (t) => {
  if (t.length === r)
    return !0;
  throw new Error(`The value's length (${t.length}) !== ${r}`);
}, G = () => (r) => {
  if (r < 0)
    return !0;
  throw new Error(`Value must be negative: ${r}`);
}, f = () => (r) => {
  if (r >= 0)
    return !0;
  throw new Error(`Value must be positive: ${r}`);
}, w = (r, t = void 0) => {
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
}, H = () => (r) => {
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
}), b = (r, t) => r.length === t.length && r.every((e, n) => e === t[n]), a = (r) => {
  const t = w(/^class\s/);
  try {
    return typeof r == "function" && t(r);
  } catch (e) {
    return !1;
  }
}, ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrays: b,
  filterObjectKeys: c,
  isClass: a
}, Symbol.toStringTag, { value: "Module" })), g = (r) => {
  const t = c(l(r));
  return (e) => {
    const n = t(e);
    if (b(n, Object.keys(e)))
      return !0;
    const i = c(y(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, J = (r) => {
  const t = c(y(r));
  return (e) => {
    const n = t(e);
    if (b(n, Object.keys(e)))
      return !0;
    const i = c(l(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, _ = () => {
  const r = w(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return (t) => {
    try {
      return r(t), !0;
    } catch (e) {
      throw new Error(`Invalid email: ${t}`);
    }
  };
}, ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allowedFields: g,
  allowlist: l,
  blockedFields: J,
  blocklist: y,
  email: _,
  exact: K,
  exactLength: D,
  max: R,
  maxLength: B,
  min: C,
  minLength: U,
  negative: G,
  notEmpty: H,
  positive: f,
  regexp: w
}, Symbol.toStringTag, { value: "Module" })), Q = (r) => {
  if (!Number.isNaN(r) && typeof r == "number")
    return !0;
  throw new Error(`${r} is NaN`);
}, W = (r) => {
  if (Number.isInteger(r))
    return !0;
  throw new Error(`Value must be integer: ${r}`);
}, X = (r) => {
  if (typeof r == "string")
    return !0;
  throw new Error(`${r} is not a string`);
}, Y = (r) => {
  if (typeof r == "boolean")
    return !0;
  throw new Error(`${r} must be boolean`);
}, O = (r) => {
  if (Array.isArray(r))
    return !0;
  throw new Error(`${r} must be an array`);
}, S = (r, t) => {
  if (r instanceof t)
    return !0;
  throw new Error(`${r} is not an instance of ${t}`);
}, Z = (r) => {
  if (typeof r == "function")
    return !0;
  throw new Error(`${r} is not a function`);
}, A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: O,
  bool: Y,
  func: Z,
  instance: S,
  int: W,
  number: Q,
  string: X
}, Symbol.toStringTag, { value: "Module" })), T = l(Object.keys(A)), d = (r, t) => t === "any" ? !0 : a(t) ? S(r, t) : (T(t), A[t](r)), m = (r, t, e = "") => (O(r), t.type instanceof N ? r.every((n) => t.type.validate(n)) : a(t.type) ? r.every((n) => d(n, t.type)) : (T(t.type), r.every((n, o) => u(n, t, `${e}[${o}]`)))), v = (r, t, e = "") => {
  if (t.nullable === !0 && r === null)
    return !0;
  if (r === null)
    throw new Error(`${e ? e + " | " : ""}Value cannot be null`);
  return !1;
}, rr = (r, t, e = "") => {
  if (t.required === !0 && r === void 0)
    throw new Error(`${e ? e + " | " : ""}Value is required`);
  return t.required === !1 && r === void 0;
}, tr = (r, t = "") => {
  if (typeof r != "object")
    throw new Error(`${t ? t + " | " : ""}Invalid config: ${r}`);
  return g(["type", "required", "rules", "nullable"])(r);
}, u = (r, t, e = "") => typeof t == "string" || a(t) ? d(r, t) : t instanceof N ? t.validate(r) : Array.isArray(t) && t.length === 1 ? m(r, { type: t[0] }, e) : (tr(t, e), rr(r, t, e) || v(r, t, e) ? !0 : Array.isArray(t.type) && t.type.length === 1 ? m(r, E(p({}, t), { type: t.type[0] }), e) : (d(r, t.type), t.rules && t.rules.forEach((n) => n(r)), !0)), x = (r, t) => {
  const e = Object.keys(t), n = Object.keys(r), o = [], i = e.filter((s) => t[s].required !== !0 ? !1 : !n.includes(s));
  return i.length > 0 && o.push(`Missing required fields: ${i.join(", ")}`), n.every((s) => {
    if (!e.includes(s)) {
      o.push(`Unknown field: ${s}`);
      return;
    }
    try {
      return u(r[s], t[s], s);
    } catch (F) {
      o.push(F);
    }
  }), { success: o.length === 0, errors: o };
};
class N {
  constructor(t) {
    j(this, "schema", {});
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
    return x(t, this.schema);
  }
}
const cr = (r, t, e = "") => {
  const n = [];
  try {
    u(r, t, e);
  } catch (o) {
    n.push(o);
  }
  return { success: n.length === 0, errors: n };
}, lr = (r, t) => {
  const { success: e, errors: n } = x(r, t);
  if (e)
    return !0;
  throw new Error(`Validation error:
${n.join(`
`)}`);
}, I = {
  type: "string",
  rules: [
    _()
  ]
}, er = (r) => u(r, I), M = {
  type: "int",
  rules: [
    f()
  ]
}, nr = (r) => u(r, M), q = {
  type: "number",
  rules: [
    f()
  ]
}, or = (r) => u(r, q), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  email: I,
  positiveInt: M,
  positiveNumber: q,
  validateEmail: er,
  validatePositiveInt: nr,
  validatePositiveNumber: or
}, Symbol.toStringTag, { value: "Module" }));
export {
  N as Schemer,
  ar as common,
  ur as rules,
  A as types,
  ir as utils,
  u as validate,
  lr as validateObject,
  x as validateObjectSafely,
  cr as validateSafely
};
