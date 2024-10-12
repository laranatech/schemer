"use strict";var I=Object.defineProperty,F=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var a=(r,e,t)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$=(r,e)=>{for(var t in e||(e={}))q.call(e,t)&&a(r,t,e[t]);if(p)for(var t of p(e))k.call(e,t)&&a(r,t,e[t]);return r},E=(r,e)=>F(r,P(e));var j=(r,e,t)=>a(r,typeof e!="symbol"?e+"":e,t);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const V=r=>e=>{if(e>=r)return!0;throw new Error(`${e} cannot be less than ${r}`)},z=r=>e=>{if(e<=r)return!0;throw new Error(`${e} cannot be greater than ${r}`)},L=r=>e=>{if(e===r)return!0;throw new Error(`${e} !== ${r}`)},R=r=>e=>{if(e.length>=r)return!0;throw new Error(`The value's length (${e.length}) is too short. Min: ${r}`)},C=r=>e=>{if(e.length<=r)return!0;throw new Error(`The value's length (${e.length}) is too long. Min: ${r}`)},K=r=>e=>{if(e.length===r)return!0;throw new Error(`The value's length (${e.length}) !== ${r}`)},U=()=>r=>{if(r<0)return!0;throw new Error(`Value must be negative: ${r}`)},d=()=>r=>{if(r>=0)return!0;throw new Error(`Value must be positive: ${r}`)},O=(r,e=void 0)=>{const t=new RegExp(r,e);return n=>{if(t.test(n))return!0;throw new Error(`${n} doesn't match the pattern: ${String(r)}${e?"/"+String(e):""}`)}},h=r=>e=>{if(!r.includes(e))return!0;throw new Error(`${e} is forbidden: [${r.join(", ")}]`)},l=r=>e=>{if(r.includes(e))return!0;throw new Error(`${e} is not on the list: [${r.join(", ")}]`)},B=()=>r=>{const e=`The value cannot be empty: ${r}`;if(Array.isArray(r)||typeof r=="string"){if(r.length>0)return!0;throw new Error(e)}if(typeof r=="object"){if(Object.keys(r).length>0)return!0;throw new Error(e)}throw new Error(`Invalid value type: ${typeof r}`)},c=r=>e=>Object.keys(e).filter(t=>{try{return r(t)}catch(n){return!1}}),y=(r,e)=>r.length===e.length&&r.every((t,n)=>t===e[n]),D=Object.freeze(Object.defineProperty({__proto__:null,compareArrays:y,filterObjectKeys:c},Symbol.toStringTag,{value:"Module"})),S=r=>{const e=c(l(r));return t=>{const n=e(t);if(y(n,Object.keys(t)))return!0;const u=c(h(r))(t);throw new Error(`${t} has Invalid fields: [${u.join(", ")}]`)}},G=r=>{const e=c(h(r));return t=>{const n=e(t);if(y(n,Object.keys(t)))return!0;const u=c(l(r))(t);throw new Error(`${t} has Invalid fields: [${u.join(", ")}]`)}},_=()=>{const r=O(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return e=>{try{return r(e),!0}catch(t){throw new Error(`Invalid email: ${e}`)}}},H=Object.freeze(Object.defineProperty({__proto__:null,allowedFields:S,allowlist:l,blockedFields:G,blocklist:h,email:_,exact:L,exactLength:K,max:z,maxLength:C,min:V,minLength:R,negative:U,notEmpty:B,positive:d,regexp:O},Symbol.toStringTag,{value:"Module"})),J=r=>{if(!Number.isNaN(r)&&typeof r=="number")return!0;throw new Error(`${r} is NaN`)},Q=r=>{if(Number.isInteger(r))return!0;throw new Error(`Value must be integer: ${r}`)},W=r=>{if(typeof r=="string")return!0;throw new Error(`${r} is not a string`)},X=r=>{if(typeof r=="boolean")return!0;throw new Error(`${r} must be boolean`)},T=r=>{if(Array.isArray(r))return!0;throw new Error(`${r} must be an array`)},f=Object.freeze(Object.defineProperty({__proto__:null,array:T,bool:X,int:Q,number:J,string:W},Symbol.toStringTag,{value:"Module"})),A=l(Object.keys(f)),m=(r,e)=>e==="any"?!0:(A(e),f[e](r)),g=(r,e,t="")=>(T(r),e.type instanceof b?r.every(n=>e.type.validate(n)):(A(e.type),r.every((n,o)=>i(n,e,`${t}[${o}]`)))),Y=(r,e,t="")=>{if(e.nullable===!0&&r===null)return!0;if(r===null)throw new Error(`${t?t+" | ":""}Value cannot be null`);return!1},Z=(r,e,t="")=>{if(e.required===!0&&r===void 0)throw new Error(`${t?t+" | ":""}Value is required`);return!0},rr=(r,e="")=>{if(typeof r!="object")throw new Error(`${e?e+" | ":""}Invalid config: ${r}`);return S(["type","required","rules","nullable"])(r)},i=(r,e,t="")=>typeof e=="string"?m(r,e):e instanceof b?e.validate(r):Array.isArray(e)&&e.length===1?g(r,{type:e[0]},t):(rr(e,t),Z(r,e,t),Y(r,e,t)?!0:Array.isArray(e.type)&&e.type.length===1?g(r,E($({},e),{type:e.type[0]}),t):(m(r,e.type),e.rules&&e.rules.forEach(n=>n(r)),!0)),w=(r,e)=>{const t=Object.keys(e),n=Object.keys(r),o=[],u=t.filter(s=>e[s].required!==!0?!1:!n.includes(s));return u.length>0&&o.push(`Missing required fields: ${u.join(", ")}`),n.every(s=>{if(!t.includes(s)){o.push(`Unknown field: ${s}`);return}try{return i(r[s],e[s],s)}catch(x){o.push(x)}}),{success:o.length===0,errors:o}};class b{constructor(e){j(this,"schema",{});this.schema=e}validate(e){const{success:t,errors:n}=this.validateSafely(e);if(t)return!0;throw new Error(`Validation error:
${n.join(`
`)}`)}validateSafely(e){return w(e,this.schema)}}const er=(r,e,t="")=>{const n=[];try{i(r,e,t)}catch(o){n.push(o)}return{success:n.length===0,errors:n}},tr=(r,e)=>{const{success:t,errors:n}=w(r,e);if(t)return!0;throw new Error(`Validation error:
${n.join(`
`)}`)},v={type:"string",rules:[_()]},nr=r=>i(r,v),M={type:"int",rules:[d()]},or=r=>i(r,M),N={type:"number",rules:[d()]},sr=r=>i(r,N),ir=Object.freeze(Object.defineProperty({__proto__:null,email:v,positiveInt:M,positiveNumber:N,validateEmail:nr,validatePositiveInt:or,validatePositiveNumber:sr},Symbol.toStringTag,{value:"Module"}));exports.Schemer=b;exports.common=ir;exports.rules=H;exports.types=f;exports.utils=D;exports.validate=i;exports.validateObject=tr;exports.validateObjectSafely=w;exports.validateSafely=er;
