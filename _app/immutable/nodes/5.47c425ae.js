import{a as S,A as x}from"../chunks/Alert.c5f9b6a9.js";import{s as E,f as p,g as $,h as g,d as m,j as h,i as v,x as C,u as T,a as j,c as A}from"../chunks/scheduler.61460114.js";import{S as I,i as P,t as _,c as D,a as d,g as M,b,d as k,m as w,e as y}from"../chunks/index.04befc36.js";import{S as O,C as V}from"../chunks/SvelteMarkdown.02b5fd7a.js";const q=async({params:l})=>{const t=S+l.slug;try{const a=await fetch(t);if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);const e=await a.text();return console.log(e.length),{content:e}}catch{}},G=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function z(l){let t,a;return t=new x({props:{message:"No data found"}}),{c(){b(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),a=!0},p:T,i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){y(t,e)}}}function B(l){let t,a,e,r,c;return a=new O({props:{source:l[0].content}}),r=new V({}),{c(){t=p("article"),b(a.$$.fragment),e=j(),b(r.$$.fragment),this.h()},l(n){t=$(n,"ARTICLE",{class:!0});var s=g(t);k(a.$$.fragment,s),s.forEach(m),e=A(n),k(r.$$.fragment,n),this.h()},h(){h(t,"class","prose")},m(n,s){v(n,t,s),w(a,t,null),v(n,e,s),w(r,n,s),c=!0},p(n,s){const f={};s&1&&(f.source=n[0].content),a.$set(f)},i(n){c||(d(a.$$.fragment,n),d(r.$$.fragment,n),c=!0)},o(n){_(a.$$.fragment,n),_(r.$$.fragment,n),c=!1},d(n){n&&(m(t),m(e)),y(a),y(r,n)}}}function H(l){let t,a,e,r,c;const n=[B,z],s=[];function f(o,i){return o[0].content?0:1}return e=f(l),r=s[e]=n[e](l),{c(){t=p("div"),a=p("div"),r.c(),this.h()},l(o){t=$(o,"DIV",{class:!0});var i=g(t);a=$(i,"DIV",{class:!0});var u=g(a);r.l(u),u.forEach(m),i.forEach(m),this.h()},h(){h(a,"class","max-w-3xl mx-auto"),h(t,"class","min-h-screen")},m(o,i){v(o,t,i),C(t,a),s[e].m(a,null),c=!0},p(o,[i]){let u=e;e=f(o),e===u?s[e].p(o,i):(M(),_(s[u],1,1,()=>{s[u]=null}),D(),r=s[e],r?r.p(o,i):(r=s[e]=n[e](o),r.c()),d(r,1),r.m(a,null))},i(o){c||(d(r),c=!0)},o(o){_(r),c=!1},d(o){o&&m(t),s[e].d()}}}function L(l,t,a){let{data:e}=t;return l.$$set=r=>{"data"in r&&a(0,e=r.data)},[e]}class J extends I{constructor(t){super(),P(this,t,L,H,E,{data:0})}}export{J as component,G as universal};
