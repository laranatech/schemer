var E = Object.defineProperty;
var g = (r, t, e) => t in r ? E(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var f = (r, t, e) => g(r, typeof t != "symbol" ? t + "" : t, e);
const j = (r) => (t) => {
  if (t >= r)
    return !0;
  throw new Error(`${t} cannot be less than ${r}`);
}, m = (r) => (t) => {
  if (t <= r)
    return !0;
  throw new Error(`${t} cannot be greater than ${r}`);
}, O = (r) => (t) => {
  if (t === r)
    return !0;
  throw new Error(`${t} !== ${r}`);
}, _ = (r) => (t) => {
  if (t.length >= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too short. Min: ${r}`);
}, S = (r) => (t) => {
  if (t.length <= r)
    return !0;
  throw new Error(`The value's length (${t.length}) is too long. Min: ${r}`);
}, x = (r) => (t) => {
  if (t.length === r)
    return !0;
  throw new Error(`The value's length (${t.length}) !== ${r}`);
}, T = () => (r) => {
  if (r < 0)
    return !0;
  throw new Error(`Value must be negative: ${r}`);
}, A = () => (r) => {
  if (r >= 0)
    return !0;
  throw new Error(`Value must be positive: ${r}`);
}, a = (r, t = void 0) => {
  const e = new RegExp(r, t);
  return (n) => {
    if (e.test(n))
      return !0;
    throw new Error(`${n} doesn't match the pattern: ${String(r)}${t ? "/" + String(t) : ""}`);
  };
}, l = (r) => (t) => {
  if (!r.includes(t))
    return !0;
  throw new Error(`${t} is forbidden: [${r.join(", ")}]`);
}, c = (r) => (t) => {
  if (r.includes(t))
    return !0;
  throw new Error(`${t} is not on the list: [${r.join(", ")}]`);
}, F = () => (r) => {
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
}), w = (r, t) => r.length === t.length && r.every((e, n) => e === t[n]), L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compareArrays: w,
  filterObjectKeys: u
}, Symbol.toStringTag, { value: "Module" })), y = (r) => {
  const t = u(c(r));
  return (e) => {
    const n = t(e);
    if (w(n, Object.keys(e)))
      return !0;
    const i = u(l(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, M = (r) => {
  const t = u(l(r));
  return (e) => {
    const n = t(e);
    if (w(n, Object.keys(e)))
      return !0;
    const i = u(c(r))(e);
    throw new Error(`${e} has Invalid fields: [${i.join(", ")}]`);
  };
}, I = () => {
  const r = a(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return (t) => {
    try {
      return r(t), !0;
    } catch (e) {
      throw new Error(`Invalid email: ${t}`);
    }
  };
}, P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allowedFields: y,
  allowlist: c,
  blockedFields: M,
  blocklist: l,
  email: I,
  exact: O,
  exactLength: x,
  max: m,
  maxLength: S,
  min: j,
  minLength: _,
  negative: T,
  notEmpty: F,
  positive: A,
  regexp: a
}, Symbol.toStringTag, { value: "Module" })), N = (r) => {
  if (!Number.isNaN(r) && typeof r == "number")
    return !0;
  throw new Error(`${r} is NaN`);
}, k = (r) => {
  if (Number.isInteger(r))
    return !0;
  throw new Error(`Value must integer: ${r}`);
}, q = (r) => {
  if (typeof r == "string")
    return !0;
  throw new Error(`${r} is not a string`);
}, V = (r) => {
  if (typeof r == "boolean")
    return !0;
  throw new Error(`${r} must be boolean`);
}, $ = (r) => {
  if (Array.isArray(r))
    return !0;
  throw new Error(`${r} must be an array`);
}, h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: $,
  bool: V,
  int: k,
  number: N,
  string: q
}, Symbol.toStringTag, { value: "Module" })), d = (r, t, e = "") => {
  const n = c(Object.keys(h));
  if (typeof t == "string")
    return n(t), h[t](r);
  if (Array.isArray(t) && t.length === 1)
    return $(r) && r.every((o) => d(o, t[0]));
  if (typeof t != "object")
    throw new Error(`${e ? e + " | " : ""}Invalid config: ${t}`);
  if (y(["type", "required", "rules", "nullable"])(t), t.required === !0 && r === void 0)
    throw new Error(`${e ? e + " | " : ""}Value is required`);
  if (t.nullable === !0 && r === null)
    return !0;
  if (r === null)
    throw new Error(`${e ? e + " | " : ""}Value cannot be null`);
  return n(t.type), h[t.type](r), t.rules && t.rules.forEach((o) => {
    o(r);
  }), !0;
}, b = (r, t) => {
  const e = Object.keys(t), n = Object.keys(r), o = [], i = e.filter((s) => t[s].required !== !0 ? !1 : !n.includes(s));
  return i.length > 0 && o.push(`Missing required fields: ${i.join(", ")}`), n.every((s) => {
    if (!e.includes(s)) {
      o.push(`Unknown field: ${s}`);
      return;
    }
    try {
      return d(r[s], t[s], s);
    } catch (p) {
      o.push(p);
    }
  }), { success: o.length === 0, errors: o };
};
class K {
  constructor(t) {
    f(this, "schema", {});
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
    return b(t, this.schema);
  }
}
const R = (r, t, e = "") => {
  const n = [];
  try {
    d(r, t, e);
  } catch (o) {
    n.push(o);
  }
  return { success: n.length === 0, errors: n };
}, U = (r, t) => {
  const { success: e, errors: n } = b(r, t);
  if (e)
    return !0;
  throw new Error(`Validation error:
${n.join(`
`)}`);
};
export {
  K as Schemer,
  P as rules,
  h as types,
  L as utils,
  d as validate,
  U as validateObject,
  b as validateObjectSafely,
  R as validateSafely
};
