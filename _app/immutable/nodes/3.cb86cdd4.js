import{s as ee,f as p,g,r as ae,j as f,i as P,u as L,d as u,h as $,x as c,A as ce,C as De,z as fe,a as T,l as ie,c as j,m as se,n as me,D as de}from"../chunks/scheduler.61460114.js";import{S as te,i as ne,b as z,d as G,m as R,a as F,t as Z,e as K}from"../chunks/index.04befc36.js";import{e as W}from"../chunks/each.e59479a4.js";import{B as Le}from"../chunks/Blog.3c280fc9.js";import{P as Se}from"../chunks/Project.04429854.js";import{w as Be}from"../chunks/index.9a050ffc.js";import{a as we}from"../chunks/navhide.16964f8a.js";function Ne(l){let e,t=`<div class="hero-content flex-col md:flex-row max-w-4xl"><div><h1 class="text-5xl font-bold"><span class="text-primary">2.</span> About Me</h1> <p class="pt-6">&quot;Hello there! I&#39;m Md. Zonaid, and I&#39;m passionate about crafting internet
				products through coding. My journey into the world of coding began in
				2013 when I gained access to play video games on my Java Nokia mobile
				phone. Curiosity led me to start searching on Google for ways to build
				apps and games. At that time, I didn&#39;t have access to a laptop, but that
				didn&#39;t stop me. I eventually learned Java and began my journey into
				Android app development.&quot;</p> <p class="pt-6">&quot;Fast-forward to today, and I&#39;m immersed in the world of computer
				science. I&#39;m currently pursuing a degree in computer science while
				actively engaging in various web projects. My passion lies in continuous
				learning and building innovative solutions using technologies like React
				and React Native. Whether it&#39;s web development or mobile applications,
				I&#39;m dedicated to expanding my knowledge and creating impactful digital
				experiences.&quot;</p> <div class="py-6"><p>Here are a few technologies I’ve been working with recently:</p> <div class="flex flex-row my-3"><div class="mr-10"><li>JavaScript (ES6+)</li> <li>TypeScript</li> <li>React</li> <li>Next.js</li></div> <div class=""><li>Python</li> <li>Django</li> <li>Java</li> <li>Flutter(Dart)</li></div></div></div></div> <div class="md:self-start mt-10 md:mt-24"><img src="ih.jpg" class="max-w-[250px] rounded-lg shadow-2xl justify-start"/></div></div>`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(n){e=g(n,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),ae(e)!=="svelte-yqrr73"&&(e.innerHTML=t),this.h()},h(){f(e,"class","hero min-h-screen"),f(e,"id","section2")},m(n,i){P(n,e,i)},p:L,i:L,o:L,d(n){n&&u(e)}}}class Ve extends te{constructor(e){super(),ne(this,e,null,Ne,ee,{})}}function Ae(l){let e,t=`<div class="hero-content text-center"><div class="max-w-md"><h1 class="text-5xl font-bold"><span class="text-primary">6.</span> Get in Touch</h1> <p class="py-6">Although I’m not currently looking for any new opportunities, my inbox
				is always open. Whether you have a question or just want to say hi, I’ll
				try my best to get back to you!</p> <button class="btn btn-primary">Send Hello</button></div></div>`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(n){e=g(n,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-94yqcv"&&(e.innerHTML=t),this.h()},h(){f(e,"class","hero min-h-screen")},m(n,i){P(n,e,i)},p:L,i:L,o:L,d(n){n&&u(e)}}}class Oe extends te{constructor(e){super(),ne(this,e,null,Ae,ee,{})}}function Pe(l){let e,t=`<div class="hero-content"><div class=""><p class="text-lg font-semibold">Hi, I&#39;m</p> <h1 class="text-6xl sm:text-7xl font-bold py-5">Md. Zonaid</h1> <h1 class="text-4xl sm:text-5xl font-bold">I build software for cross platform.</h1> <p class="py-6 text-lg max-w-md">I’m a software engineer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I’m focused on
				building interactive study platform.</p> <button class="btn btn-primary"><a href="#section2">Get Started</a></button></div></div>`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(n){e=g(n,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-6mgc"&&(e.innerHTML=t),this.h()},h(){f(e,"class","hero min-h-screen")},m(n,i){P(n,e,i)},p:L,i:L,o:L,d(n){n&&u(e)}}}class Ue extends te{constructor(e){super(),ne(this,e,null,Pe,ee,{})}}const he=[{id:"section1",name:"Top"},{id:"section2",name:"About Me"},{id:"section3",name:"Work"},{id:"section4",name:"Projects"},{id:"section5",name:"Blogs"},{id:"section6",name:"Contact"}],pe=Be(0);function He(l,e){const t=document.getElementById(l);t&&(we.set(!0),t.scrollIntoView({behavior:"smooth"}),setTimeout(()=>we.set(!1),1e3),pe.set(e))}function xe(l,e,t){const n=l.slice();return n[2]=e[t],n[4]=t,n}function ke(l){let e,t,n,i;function s(){return l[1](l[2],l[4])}return{c(){e=p("button"),this.h()},l(r){e=g(r,"BUTTON",{class:!0}),$(e).forEach(u),this.h()},h(){f(e,"class",t="step "+(l[4]===l[0]?"step-primary":""))},m(r,a){P(r,e,a),n||(i=fe(e,"click",s),n=!0)},p(r,a){l=r,a&1&&t!==(t="step "+(l[4]===l[0]?"step-primary":""))&&f(e,"class",t)},d(r){r&&u(e),n=!1,i()}}}function qe(l){let e,t,n=W(he),i=[];for(let s=0;s<n.length;s+=1)i[s]=ke(xe(l,n,s));return{c(){e=p("div"),t=p("ul");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var r=$(e);t=g(r,"UL",{class:!0});var a=$(t);for(let d=0;d<i.length;d+=1)i[d].l(a);a.forEach(u),r.forEach(u),this.h()},h(){f(t,"class","steps steps-vertical"),f(e,"class","hidden fixed top-48 right-[-15px] md:inline-block")},m(s,r){P(s,e,r),c(e,t);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(t,null)},p(s,[r]){if(r&1){n=W(he);let a;for(a=0;a<n.length;a+=1){const d=xe(s,n,a);i[a]?i[a].p(d,r):(i[a]=ke(d),i[a].c(),i[a].m(t,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},i:L,o:L,d(s){s&&u(e),ce(i,s)}}}function We(l,e,t){let n;return De(l,pe,s=>t(0,n=s)),[n,(s,r)=>He(s.id,r)]}class Xe extends te{constructor(e){super(),ne(this,e,We,qe,ee,{})}}function Ie(l,e,t){const n=l.slice();return n[5]=e[t],n}function Ee(l,e,t){const n=l.slice();return n[8]=e[t],n[10]=t,n}function Te(l){let e,t=l[8].company+"",n,i,s;function r(...a){return l[4](l[10],...a)}return{c(){e=p("button"),n=ie(t),this.h()},l(a){e=g(a,"BUTTON",{class:!0});var d=$(e);n=se(d,t),d.forEach(u),this.h()},h(){f(e,"class","tab tab-lifted"),de(e,"tab-active",l[10]==l[0])},m(a,d){P(a,e,d),c(e,n),i||(s=fe(e,"click",r),i=!0)},p(a,d){l=a,d&1&&de(e,"tab-active",l[10]==l[0])},d(a){a&&u(e),i=!1,s()}}}function je(l){let e,t=l[5]+"",n;return{c(){e=p("li"),n=ie(t)},l(i){e=g(i,"LI",{});var s=$(e);n=se(s,t),s.forEach(u)},m(i,s){P(i,e,s),c(e,n)},p(i,s){s&2&&t!==(t=i[5]+"")&&me(n,t)},d(i){i&&u(e)}}}function Je(l){let e,t,n,i='<span class="text-primary">3.</span> My Work History',s,r,a,d,b,x=l[1].rule+"",C,N,O,S=l[1].timeline+"",B,X,M,D=W(l[2]),y=[];for(let h=0;h<D.length;h+=1)y[h]=Te(Ee(l,D,h));let H=W(l[1].contributions),_=[];for(let h=0;h<H.length;h+=1)_[h]=je(Ie(l,H,h));return{c(){e=p("div"),t=p("div"),n=p("h2"),n.innerHTML=i,s=T(),r=p("div");for(let h=0;h<y.length;h+=1)y[h].c();a=T(),d=p("div"),b=p("h4"),C=ie(x),N=T(),O=p("p"),B=ie(S),X=T(),M=p("ol");for(let h=0;h<_.length;h+=1)_[h].c();this.h()},l(h){e=g(h,"DIV",{class:!0});var w=$(e);t=g(w,"DIV",{class:!0});var o=$(t);n=g(o,"H2",{class:!0,"data-svelte-h":!0}),ae(n)!=="svelte-bu6e1y"&&(n.innerHTML=i),s=j(o),r=g(o,"DIV",{class:!0});var I=$(r);for(let A=0;A<y.length;A+=1)y[A].l(I);I.forEach(u),a=j(o),d=g(o,"DIV",{class:!0});var U=$(d);b=g(U,"H4",{class:!0});var Q=$(b);C=se(Q,x),Q.forEach(u),N=j(U),O=g(U,"P",{class:!0});var V=$(O);B=se(V,S),V.forEach(u),X=j(U),M=g(U,"OL",{class:!0});var q=$(M);for(let A=0;A<_.length;A+=1)_[A].l(q);q.forEach(u),U.forEach(u),o.forEach(u),w.forEach(u),this.h()},h(){f(n,"class","text-4xl font-bold mb-10"),f(r,"class","tabs"),f(b,"class","text-lg font-bold"),f(O,"class","text-base font-light"),f(M,"class","py-2"),f(d,"class","my-5"),f(t,"class","p-4 md:w-[512px]"),f(e,"class","hero min-h-screen bg-base-400 justify-start md:justify-center")},m(h,w){P(h,e,w),c(e,t),c(t,n),c(t,s),c(t,r);for(let o=0;o<y.length;o+=1)y[o]&&y[o].m(r,null);c(t,a),c(t,d),c(d,b),c(b,C),c(d,N),c(d,O),c(O,B),c(d,X),c(d,M);for(let o=0;o<_.length;o+=1)_[o]&&_[o].m(M,null)},p(h,[w]){if(w&13){D=W(h[2]);let o;for(o=0;o<D.length;o+=1){const I=Ee(h,D,o);y[o]?y[o].p(I,w):(y[o]=Te(I),y[o].c(),y[o].m(r,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=D.length}if(w&2&&x!==(x=h[1].rule+"")&&me(C,x),w&2&&S!==(S=h[1].timeline+"")&&me(B,S),w&2){H=W(h[1].contributions);let o;for(o=0;o<H.length;o+=1){const I=Ie(h,H,o);_[o]?_[o].p(I,w):(_[o]=je(I),_[o].c(),_[o].m(M,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=H.length}},i:L,o:L,d(h){h&&u(e),ce(y,h),ce(_,h)}}}function ze(l,e,t){let n;const i=[{company:"Action Tokens",rule:"Backend Developer",timeline:"May 2018 - Present",contributions:["Builded transection of the steller API","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, est."]},{company:"Nuna Art Project",contributions:["lorem vong cong and dong","itls file to do that or thais"],rule:"Transection Builder",timeline:"XXX to XXX"}];let s=0;function r(d,b){t(0,s=b)}const a=(d,b)=>r(b,d);return l.$$.update=()=>{l.$$.dirty&1&&t(1,n=i[s])},[s,n,i,r,a]}class Ge extends te{constructor(e){super(),ne(this,e,ze,Je,ee,{})}}const Re=[{badge:"Cool",desc:"it is a short des",filename:"filename.md",tags:["ami","tmi"],thumbnail:"project.jpg",title:"vong",date:"a"},{badge:"Cool",desc:"it is a short des",filename:"filename.md",tags:["ami","tmi"],thumbnail:"project.jpg",title:"vong",date:""}],Fe=[{app:{name:"ihABC",logoUrl:"vong"},filename:"ihabc.md",thumbnail:"project.jpg",desc:"It is a interactive platform to teach kids alphabet.",badge:"Cool",tags:["kids","solar2d","game"]},{app:{name:"ihStudy",logoUrl:"vong"},filename:"ihabc.md",thumbnail:"project.jpg"},{app:{name:"ami tmari premo vikari , amiake",logoUrl:"vong"},filename:"ihabc.md",thumbnail:"project.jpg",desc:"It is a interactive platform to teach kids alphabet.It is a interactive platform to teach kids alphabet."}];function Ce(l,e,t){const n=l.slice();return n[2]=e[t],n[4]=t,n}function Me(l){let e,t,n=l[4]+1+". "+l[2].name,i,s,r,a;function d(){return l[1](l[2],l[4])}return{c(){e=p("li"),t=p("button"),i=ie(n),s=T(),this.h()},l(b){e=g(b,"LI",{});var x=$(e);t=g(x,"BUTTON",{});var C=$(t);i=se(C,n),C.forEach(u),s=j(x),x.forEach(u),this.h()},h(){de(t,"bg-base-300",l[4]===l[0])},m(b,x){P(b,e,x),c(e,t),c(t,i),c(e,s),r||(a=fe(t,"click",d),r=!0)},p(b,x){l=b,x&1&&de(t,"bg-base-300",l[4]===l[0])},d(b){b&&u(e),r=!1,a()}}}function Ze(l){let e,t,n,i,s,r,a,d,b,x,C,N,O,S,B,X,M,D,y,H,_,h,w,o,I,U='<label for="my-drawer-4" class="btn btn-circle fixed bottom-0 right-0 md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label>',Q,V,q,A,J,oe;r=new Ue({}),b=new Ve({}),N=new Ge({}),B=new Se({props:{projects:Fe}}),D=new Le({props:{blogs:Re}}),_=new Oe({}),w=new Xe({});let Y=W(he),k=[];for(let m=0;m<Y.length;m+=1)k[m]=Me(Ce(l,Y,m));return{c(){e=p("div"),t=p("input"),n=T(),i=p("div"),s=p("section"),z(r.$$.fragment),a=T(),d=p("section"),z(b.$$.fragment),x=T(),C=p("section"),z(N.$$.fragment),O=T(),S=p("section"),z(B.$$.fragment),X=T(),M=p("section"),z(D.$$.fragment),y=T(),H=p("section"),z(_.$$.fragment),h=T(),z(w.$$.fragment),o=T(),I=p("div"),I.innerHTML=U,Q=T(),V=p("div"),q=p("label"),A=T(),J=p("ul");for(let m=0;m<k.length;m+=1)k[m].c();this.h()},l(m){e=g(m,"DIV",{class:!0});var E=$(e);t=g(E,"INPUT",{id:!0,type:!0,class:!0}),n=j(E),i=g(E,"DIV",{});var v=$(i);s=g(v,"SECTION",{id:!0});var le=$(s);G(r.$$.fragment,le),le.forEach(u),a=j(v),d=g(v,"SECTION",{id:!0});var ge=$(d);G(b.$$.fragment,ge),ge.forEach(u),x=j(v),C=g(v,"SECTION",{id:!0});var ve=$(C);G(N.$$.fragment,ve),ve.forEach(u),O=j(v),S=g(v,"SECTION",{id:!0});var be=$(S);G(B.$$.fragment,be),be.forEach(u),X=j(v),M=g(v,"SECTION",{id:!0});var _e=$(M);G(D.$$.fragment,_e),_e.forEach(u),y=j(v),H=g(v,"SECTION",{id:!0});var $e=$(H);G(_.$$.fragment,$e),$e.forEach(u),v.forEach(u),h=j(E),G(w.$$.fragment,E),o=j(E),I=g(E,"DIV",{class:!0,"data-svelte-h":!0}),ae(I)!=="svelte-w67k7m"&&(I.innerHTML=U),Q=j(E),V=g(E,"DIV",{class:!0});var re=$(V);q=g(re,"LABEL",{for:!0,class:!0}),$(q).forEach(u),A=j(re),J=g(re,"UL",{class:!0});var ye=$(J);for(let ue=0;ue<k.length;ue+=1)k[ue].l(ye);ye.forEach(u),re.forEach(u),E.forEach(u),this.h()},h(){f(t,"id","my-drawer-4"),f(t,"type","checkbox"),f(t,"class","drawer-toggle"),f(s,"id","section1"),f(d,"id","section2"),f(C,"id","section3"),f(S,"id","section4"),f(M,"id","section5"),f(H,"id","section6"),f(I,"class","drawer-content"),f(q,"for","my-drawer-4"),f(q,"class","drawer-overlay"),f(J,"class","menu p-4 w-1/2 min-h-full bg-base-200 text-base-content flex flex-col justify-end"),f(V,"class","drawer-side z-20"),f(e,"class","drawer drawer-end")},m(m,E){P(m,e,E),c(e,t),c(e,n),c(e,i),c(i,s),R(r,s,null),c(i,a),c(i,d),R(b,d,null),c(i,x),c(i,C),R(N,C,null),c(i,O),c(i,S),R(B,S,null),c(i,X),c(i,M),R(D,M,null),c(i,y),c(i,H),R(_,H,null),c(e,h),R(w,e,null),c(e,o),c(e,I),c(e,Q),c(e,V),c(V,q),c(V,A),c(V,J);for(let v=0;v<k.length;v+=1)k[v]&&k[v].m(J,null);oe=!0},p(m,[E]){if(E&1){Y=W(he);let v;for(v=0;v<Y.length;v+=1){const le=Ce(m,Y,v);k[v]?k[v].p(le,E):(k[v]=Me(le),k[v].c(),k[v].m(J,null))}for(;v<k.length;v+=1)k[v].d(1);k.length=Y.length}},i(m){oe||(F(r.$$.fragment,m),F(b.$$.fragment,m),F(N.$$.fragment,m),F(B.$$.fragment,m),F(D.$$.fragment,m),F(_.$$.fragment,m),F(w.$$.fragment,m),oe=!0)},o(m){Z(r.$$.fragment,m),Z(b.$$.fragment,m),Z(N.$$.fragment,m),Z(B.$$.fragment,m),Z(D.$$.fragment,m),Z(_.$$.fragment,m),Z(w.$$.fragment,m),oe=!1},d(m){m&&u(e),K(r),K(b),K(N),K(B),K(D),K(_),K(w),ce(k,m)}}}function Ke(l,e,t){let n;return De(l,pe,s=>t(0,n=s)),[n,(s,r)=>He(s.id,r)]}class st extends te{constructor(e){super(),ne(this,e,Ke,Ze,ee,{})}}export{st as component};
