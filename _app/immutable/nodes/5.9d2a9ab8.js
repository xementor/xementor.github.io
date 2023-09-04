import{S as x,C as y}from"../chunks/SvelteMarkdown.253e30b1.js";import{s as A,f as u,a as C,g as h,h as f,d as m,c as E,j as _,i as j,w as p}from"../chunks/scheduler.0248a49d.js";import{S as k,i as I,b as $,d as v,m as w,a as b,t as S,e as T}from"../chunks/index.0db10fe2.js";const W=({params:o})=>({title:o.slug,content:`
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`}),q=Object.freeze(Object.defineProperty({__proto__:null,load:W},Symbol.toStringTag,{value:"Module"}));function D(o){let e,s,n,a,d,r,l;return a=new x({props:{source:o[0].content}}),r=new y({}),{c(){e=u("div"),s=u("div"),n=u("article"),$(a.$$.fragment),d=C(),$(r.$$.fragment),this.h()},l(t){e=h(t,"DIV",{class:!0});var c=f(e);s=h(c,"DIV",{class:!0});var i=f(s);n=h(i,"ARTICLE",{class:!0});var g=f(n);v(a.$$.fragment,g),g.forEach(m),d=E(i),v(r.$$.fragment,i),i.forEach(m),c.forEach(m),this.h()},h(){_(n,"class","prose"),_(s,"class","max-w-3xl mx-auto"),_(e,"class","min-h-screen")},m(t,c){j(t,e,c),p(e,s),p(s,n),w(a,n,null),p(s,d),w(r,s,null),l=!0},p(t,[c]){const i={};c&1&&(i.source=t[0].content),a.$set(i)},i(t){l||(b(a.$$.fragment,t),b(r.$$.fragment,t),l=!0)},o(t){S(a.$$.fragment,t),S(r.$$.fragment,t),l=!1},d(t){t&&m(e),T(a),T(r)}}}function M(o,e,s){let{data:n}=e;return o.$$set=a=>{"data"in a&&s(0,n=a.data)},[n]}class z extends k{constructor(e){super(),I(this,e,M,D,A,{data:0})}}export{z as component,q as universal};
