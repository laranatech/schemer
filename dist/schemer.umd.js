(function(n,s){typeof exports=="object"&&typeof module!="undefined"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(n=typeof globalThis!="undefined"?globalThis:n||self,s(n.schemer={}))})(this,function(n){"use strict";var U=Object.defineProperty,B=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var p=(n,s,u)=>s in n?U(n,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[s]=u,g=(n,s)=>{for(var u in s||(s={}))G.call(s,u)&&p(n,u,s[u]);if(m)for(var u of m(s))H.call(s,u)&&p(n,u,s[u]);return n},O=(n,s)=>B(n,D(s));var S=(n,s,u)=>p(n,typeof s!="symbol"?s+"":s,u);const s=r=>e=>{if(e>=r)return!0;throw new Error(`${e} cannot be less than ${r}`)},u=r=>e=>{if(e<=r)return!0;throw new Error(`${e} cannot be greater than ${r}`)},_=r=>e=>{if(e===r)return!0;throw new Error(`${e} !== ${r}`)},T=r=>e=>{if(e.length>=r)return!0;throw new Error(`The value's length (${e.length}) is too short. Min: ${r}`)},A=r=>e=>{if(e.length<=r)return!0;throw new Error(`The value's length (${e.length}) is too long. Min: ${r}`)},F=r=>e=>{if(e.length===r)return!0;throw new Error(`The value's length (${e.length}) !== ${r}`)},M=()=>r=>{if(r<0)return!0;throw new Error(`Value must be negative: ${r}`)},I=()=>r=>{if(r>=0)return!0;throw new Error(`Value must be positive: ${r}`)},E=(r,e=void 0)=>{const t=new RegExp(r,e);return o=>{if(t.test(o))return!0;throw new Error(`${o} doesn't match the pattern: ${String(r)}${e?"/"+String(e):""}`)}},w=r=>e=>{if(!r.includes(e))return!0;throw new Error(`${e} is forbidden: [${r.join(", ")}]`)},f=r=>e=>{if(r.includes(e))return!0;throw new Error(`${e} is not on the list: [${r.join(", ")}]`)},k=()=>r=>{const e=`The value cannot be empty: ${r}`;if(Array.isArray(r)||typeof r=="string"){if(r.length>0)return!0;throw new Error(e)}if(typeof r=="object"){if(Object.keys(r).length>0)return!0;throw new Error(e)}throw new Error(`Invalid value type: ${typeof r}`)},h=r=>e=>Object.keys(e).filter(t=>{try{return r(t)}catch(o){return!1}}),y=(r,e)=>r.length===e.length&&r.every((t,o)=>t===e[o]),N=Object.freeze(Object.defineProperty({__proto__:null,compareArrays:y,filterObjectKeys:h},Symbol.toStringTag,{value:"Module"})),j=r=>{const e=h(f(r));return t=>{const o=e(t);if(y(o,Object.keys(t)))return!0;const l=h(w(r))(t);throw new Error(`${t} has Invalid fields: [${l.join(", ")}]`)}},q=Object.freeze(Object.defineProperty({__proto__:null,allowedFields:j,allowlist:f,blockedFields:r=>{const e=h(w(r));return t=>{const o=e(t);if(y(o,Object.keys(t)))return!0;const l=h(f(r))(t);throw new Error(`${t} has Invalid fields: [${l.join(", ")}]`)}},blocklist:w,email:()=>{const r=E(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return e=>{try{return r(e),!0}catch(t){throw new Error(`Invalid email: ${e}`)}}},exact:_,exactLength:F,max:u,maxLength:A,min:s,minLength:T,negative:M,notEmpty:k,positive:I,regexp:E},Symbol.toStringTag,{value:"Module"})),V=r=>{if(!Number.isNaN(r)&&typeof r=="number")return!0;throw new Error(`${r} is NaN`)},P=r=>{if(Number.isInteger(r))return!0;throw new Error(`Value must be integer: ${r}`)},z=r=>{if(typeof r=="string")return!0;throw new Error(`${r} is not a string`)},L=r=>{if(typeof r=="boolean")return!0;throw new Error(`${r} must be boolean`)},b=r=>{if(Array.isArray(r))return!0;throw new Error(`${r} must be an array`)},a=Object.freeze(Object.defineProperty({__proto__:null,array:b,bool:L,int:P,number:V,string:z},Symbol.toStringTag,{value:"Module"})),d=(r,e,t="")=>{const o=f(Object.keys(a));if(typeof e=="string")return o(e),a[e](r);if(Array.isArray(e)&&e.length===1)return o(e[0]),b(r)&&r.every(i=>d(i,e[0]));if(typeof e!="object")throw new Error(`${t?t+" | ":""}Invalid config: ${e}`);if(j(["type","required","rules","nullable"])(e),e.required===!0&&r===void 0)throw new Error(`${t?t+" | ":""}Value is required`);if(e.nullable===!0&&r===null)return!0;if(r===null)throw new Error(`${t?t+" | ":""}Value cannot be null`);if(Array.isArray(e.type)&&e.type.length===1){const i=O(g({},e),{type:e.type[0]});return b(r)&&r.every((l,c)=>d(l,i,`${t}[${c}]`))}return o(e.type),a[e.type](r),e.rules&&e.rules.forEach(i=>{i(r)}),!0},$=(r,e)=>{const t=Object.keys(e),o=Object.keys(r),i=[],l=t.filter(c=>e[c].required!==!0?!1:!o.includes(c));return l.length>0&&i.push(`Missing required fields: ${l.join(", ")}`),o.every(c=>{if(!t.includes(c)){i.push(`Unknown field: ${c}`);return}try{return d(r[c],e[c],c)}catch(R){i.push(R)}}),{success:i.length===0,errors:i}};class x{constructor(e){S(this,"schema",{});this.schema=e}validate(e){const{success:t,errors:o}=this.validateSafely(e);if(t)return!0;throw new Error(`Validation error:
${o.join(`
`)}`)}validateSafely(e){return $(e,this.schema)}}const C=(r,e,t="")=>{const o=[];try{d(r,e,t)}catch(i){o.push(i)}return{success:o.length===0,errors:o}},K=(r,e)=>{const{success:t,errors:o}=$(r,e);if(t)return!0;throw new Error(`Validation error:
${o.join(`
`)}`)};n.Schemer=x,n.rules=q,n.types=a,n.utils=N,n.validate=d,n.validateObject=K,n.validateObjectSafely=$,n.validateSafely=C,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
