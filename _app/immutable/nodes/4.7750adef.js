import{b as h,A as $}from"../chunks/Alert.c5f9b6a9.js";import{s as k,f as v,g as y,h as j,d as _,j as w,i as S,u as P}from"../chunks/scheduler.61460114.js";import{S as T,i as A,t as i,c as B,a as u,g as D,b as d,d as p,m as g,e as b}from"../chunks/index.04befc36.js";import{B as E}from"../chunks/Blog.3c280fc9.js";const O=async()=>{try{const a=h+"jsons/blogs.json",t=await fetch(a);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch{}},V=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));function q(a){let t,r;return t=new $({props:{message:"Data couldn't fetched from server"}}),{c(){d(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){g(t,e,o),r=!0},p:P,i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){i(t.$$.fragment,e),r=!1},d(e){b(t,e)}}}function x(a){let t,r;return t=new E({props:{blogs:a[0].blogs}}),{c(){d(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){g(t,e,o),r=!0},p(e,o){const c={};o&1&&(c.blogs=e[0].blogs),t.$set(c)},i(e){r||(u(t.$$.fragment,e),r=!0)},o(e){i(t.$$.fragment,e),r=!1},d(e){b(t,e)}}}function z(a){let t,r,e,o;const c=[x,q],s=[];function m(n,l){return n[0].blogs?0:1}return r=m(a),e=s[r]=c[r](a),{c(){t=v("div"),e.c(),this.h()},l(n){t=y(n,"DIV",{class:!0});var l=j(t);e.l(l),l.forEach(_),this.h()},h(){w(t,"class","min-h-screen")},m(n,l){S(n,t,l),s[r].m(t,null),o=!0},p(n,[l]){let f=r;r=m(n),r===f?s[r].p(n,l):(D(),i(s[f],1,1,()=>{s[f]=null}),B(),e=s[r],e?e.p(n,l):(e=s[r]=c[r](n),e.c()),u(e,1),e.m(t,null))},i(n){o||(u(e),o=!0)},o(n){i(e),o=!1},d(n){n&&_(t),s[r].d()}}}function C(a,t,r){let{data:e}=t;return a.$$set=o=>{"data"in o&&r(0,e=o.data)},[e]}class F extends T{constructor(t){super(),A(this,t,C,z,k,{data:0})}}export{F as component,V as universal};
