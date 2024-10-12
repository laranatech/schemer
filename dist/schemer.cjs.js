"use strict";var O=Object.defineProperty,S=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var a=(r,e,t)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&a(r,t,e[t]);if(b)for(var t of b(e))T.call(e,t)&&a(r,t,e[t]);return r},p=(r,e)=>S(r,_(e));var E=(r,e,t)=>a(r,typeof e!="symbol"?e+"":e,t);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const M=r=>e=>{if(e>=r)return!0;throw new Error(`${e} cannot be less than ${r}`)},x=r=>e=>{if(e<=r)return!0;throw new Error(`${e} cannot be greater than ${r}`)},F=r=>e=>{if(e===r)return!0;throw new Error(`${e} !== ${r}`)},I=r=>e=>{if(e.length>=r)return!0;throw new Error(`The value's length (${e.length}) is too short. Min: ${r}`)},N=r=>e=>{if(e.length<=r)return!0;throw new Error(`The value's length (${e.length}) is too long. Min: ${r}`)},k=r=>e=>{if(e.length===r)return!0;throw new Error(`The value's length (${e.length}) !== ${r}`)},q=()=>r=>{if(r<0)return!0;throw new Error(`Value must be negative: ${r}`)},V=()=>r=>{if(r>=0)return!0;throw new Error(`Value must be positive: ${r}`)},j=(r,e=void 0)=>{const t=new RegExp(r,e);return n=>{if(t.test(n))return!0;throw new Error(`${n} doesn't match the pattern: ${String(r)}${e?"/"+String(e):""}`)}},d=r=>e=>{if(!r.includes(e))return!0;throw new Error(`${e} is forbidden: [${r.join(", ")}]`)},h=r=>e=>{if(r.includes(e))return!0;throw new Error(`${e} is not on the list: [${r.join(", ")}]`)},P=()=>r=>{const e=`The value cannot be empty: ${r}`;if(Array.isArray(r)||typeof r=="string"){if(r.length>0)return!0;throw new Error(e)}if(typeof r=="object"){if(Object.keys(r).length>0)return!0;throw new Error(e)}throw new Error(`Invalid value type: ${typeof r}`)},u=r=>e=>Object.keys(e).filter(t=>{try{return r(t)}catch(n){return!1}}),y=(r,e)=>r.length===e.length&&r.every((t,n)=>t===e[n]),z=Object.freeze(Object.defineProperty({__proto__:null,compareArrays:y,filterObjectKeys:u},Symbol.toStringTag,{value:"Module"})),g=r=>{const e=u(h(r));return t=>{const n=e(t);if(y(n,Object.keys(t)))return!0;const i=u(d(r))(t);throw new Error(`${t} has Invalid fields: [${i.join(", ")}]`)}},L=r=>{const e=u(d(r));return t=>{const n=e(t);if(y(n,Object.keys(t)))return!0;const i=u(h(r))(t);throw new Error(`${t} has Invalid fields: [${i.join(", ")}]`)}},C=()=>{const r=j(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return e=>{try{return r(e),!0}catch(t){throw new Error(`Invalid email: ${e}`)}}},K=Object.freeze(Object.defineProperty({__proto__:null,allowedFields:g,allowlist:h,blockedFields:L,blocklist:d,email:C,exact:F,exactLength:k,max:x,maxLength:N,min:M,minLength:I,negative:q,notEmpty:P,positive:V,regexp:j},Symbol.toStringTag,{value:"Module"})),R=r=>{if(!Number.isNaN(r)&&typeof r=="number")return!0;throw new Error(`${r} is NaN`)},U=r=>{if(Number.isInteger(r))return!0;throw new Error(`Value must be integer: ${r}`)},B=r=>{if(typeof r=="string")return!0;throw new Error(`${r} is not a string`)},D=r=>{if(typeof r=="boolean")return!0;throw new Error(`${r} must be boolean`)},w=r=>{if(Array.isArray(r))return!0;throw new Error(`${r} must be an array`)},l=Object.freeze(Object.defineProperty({__proto__:null,array:w,bool:D,int:U,number:R,string:B},Symbol.toStringTag,{value:"Module"})),c=(r,e,t="")=>{const n=h(Object.keys(l));if(typeof e=="string")return n(e),l[e](r);if(Array.isArray(e)&&e.length===1)return n(e[0]),w(r)&&r.every(o=>c(o,e[0]));if(typeof e!="object")throw new Error(`${t?t+" | ":""}Invalid config: ${e}`);if(g(["type","required","rules","nullable"])(e),e.required===!0&&r===void 0)throw new Error(`${t?t+" | ":""}Value is required`);if(e.nullable===!0&&r===null)return!0;if(r===null)throw new Error(`${t?t+" | ":""}Value cannot be null`);if(Array.isArray(e.type)&&e.type.length===1){const o=p($({},e),{type:e.type[0]});return w(r)&&r.every((i,s)=>c(i,o,`${t}[${s}]`))}return n(e.type),l[e.type](r),e.rules&&e.rules.forEach(o=>{o(r)}),!0},f=(r,e)=>{const t=Object.keys(e),n=Object.keys(r),o=[],i=t.filter(s=>e[s].required!==!0?!1:!n.includes(s));return i.length>0&&o.push(`Missing required fields: ${i.join(", ")}`),n.every(s=>{if(!t.includes(s)){o.push(`Unknown field: ${s}`);return}try{return c(r[s],e[s],s)}catch(m){o.push(m)}}),{success:o.length===0,errors:o}};class G{constructor(e){E(this,"schema",{});this.schema=e}validate(e){const{success:t,errors:n}=this.validateSafely(e);if(t)return!0;throw new Error(`Validation error:
${n.join(`
`)}`)}validateSafely(e){return f(e,this.schema)}}const H=(r,e,t="")=>{const n=[];try{c(r,e,t)}catch(o){n.push(o)}return{success:n.length===0,errors:n}},J=(r,e)=>{const{success:t,errors:n}=f(r,e);if(t)return!0;throw new Error(`Validation error:
${n.join(`
`)}`)};exports.Schemer=G;exports.rules=K;exports.types=l;exports.utils=z;exports.validate=c;exports.validateObject=J;exports.validateObjectSafely=f;exports.validateSafely=H;
