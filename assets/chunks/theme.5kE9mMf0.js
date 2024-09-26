import{r as h,u as Q,d as _,a as b,o as l,c as r,b as s,F as g,e as x,f as u,n as C,w as I,t as v,g as L,h as q,T as A,i as w,p as y,j as $,k as D,_ as m,l as S,m as U,q as Y,s as f,v as K,x as W,y as X,z as e1}from"./framework.C_E3gWJ1.js";function H(o){let t=o.replace(/^\//,"");return t=t.replace(/\.html$/,""),t}function t1(){const o=location.search,t=new URLSearchParams(o),e={};return t.forEach((a,n)=>{e[n]=a}),e}const V=h(),B=h(),P=h(),Z=()=>{const o=Q();return o.onBeforeRouteChange=t=>{B.value&&B.value()},o.onAfterRouteChanged=t=>{V.value=H(t),P.value&&P.value()},{router:o,pagePath:V,onBeforeRouteChange:t=>{B.value=t},onAfterRouteChanged:t=>{P.value=t}}},T=o=>(y("data-v-a041deb7"),o=o(),$(),o),s1={class:"header flex items-center"},o1={id:"desktop-menu",class:"w-full h-full"},a1=T(()=>s("a",{class:"px-2 text-slate-50",href:"/"},[s("div",null,[s("span",{class:"text-xl"},"M"),D("tn"),s("span",{class:"text-xl"},"S"),D("ea")])],-1)),n1={class:"flex flex-row gap-2"},l1=["href"],r1={id:"mobile-menu",class:"w-full h-full relative mx-5"},c1={class:"menu-icon"},i1=T(()=>s("span",null,null,-1)),d1=T(()=>s("span",null,null,-1)),u1=T(()=>s("span",null,null,-1)),p1=[i1,d1,u1],_1={class:"mx-auto"},h1={class:"inline-block px-2 h-full font-bold text-slate-50",href:"/"},v1=["onClick"],f1=_({__name:"index",setup(o){const{pagePath:t,router:e}=Z(),{theme:a,site:n}=b(),i=n.value.base,d=a.value.menuList,c=h(!1),M=N=>{e.go(i+N).then(()=>{c.value=!1})},J=()=>{c.value=!c.value};return(N,k)=>(l(),r("header",s1,[s("nav",o1,[a1,s("ul",n1,[(l(!0),r(g,null,x(u(d),p=>(l(),r("li",{key:p.link,class:C({active:u(t)===p.link})},[s("a",{class:"mx-1 text-slate-50",href:u(i)+p.link},[s("i",{class:C(["mr-1 fa-solid",["fa-"+p.icon]])},null,2),s("span",null,v(p.text),1)],8,l1)],2))),128))])]),s("nav",r1,[s("div",c1,[s("div",{class:C(["burger",{checked:c.value}]),onClick:I(J,["stop"])},p1,2)]),s("div",_1,[s("a",h1,[s("span",null,v(u(n).title),1)])])]),L(A,{name:"fade-in-left"},{default:q(()=>[c.value?(l(),r("div",{key:0,class:"mobile-menu-page",onMousewheel:k[0]||(k[0]=I(()=>{},["prevent"])),onTouchmove:k[1]||(k[1]=I(()=>{},["prevent"]))},[s("ul",null,[(l(!0),r(g,null,x(u(d),p=>(l(),r("li",{class:C(["text-center py-1",{active:u(t)===p.link}]),key:p.link},[s("div",{class:"mx-1",onClick:he=>M(p.link)},[s("i",{class:C(["mr-1 fa-solid",["fa-"+p.icon]])},null,2),s("span",null,v(p.text),1)],8,v1)],2))),128))])],32)):w("",!0)]),_:1})]))}}),g1=m(f1,[["__scopeId","data-v-a041deb7"]]),m1=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],C1=_({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(o){const t=h(!1);return S(()=>{t.value=!0,U(()=>import("./giscus-BNK3dBIH.B_EkeIy7.js"),[])}),(e,a)=>t.value?(l(),r("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,m1)):w("",!0)}}),L1=o=>(y("data-v-6606046f"),o=o(),$(),o),x1={class:"page-full"},w1={class:"content-page"},b1=L1(()=>s("div",null,"other",-1)),y1={class:"giscus-box mt-2 mx-2 pt-2"},$1=_({__name:"index",setup(o){const{page:t}=b();return(e,a)=>{const n=Y("Content");return l(),r("div",x1,[s("section",w1,[b1,L(n,{id:"markdown-content"}),s("div",y1,[(l(),f(u(C1),{key:u(t).filePath,repo:"mtnsea/mtnsea.github.io","repo-id":"R_kgDOM3StnQ",category:"General","category-id":"DIC_kwDOM3Stnc4Cizbr",mapping:"pathname",strict:"0","reactions-enabled":"1","emit-metadata":"0","input-position":"top",theme:"light",lang:"zh-CN"}))])])])}}}),M1=m($1,[["__scopeId","data-v-6606046f"]]),k1={class:"page-full"},I1=_({__name:"index",setup(o){const{theme:t}=b(),{aboutMe:e}=t.value;return(a,n)=>(l(),r("div",k1,[s("p",null,v(u(e).name),1),s("p",null,v(u(e).desc),1)]))}}),E1="/assets/avatar.C8fqxqYC.png",O=o=>(y("data-v-0e88ca8a"),o=o(),$(),o),S1={class:"post-card select-none"},Z1={class:"relative pb-1"},T1={class:"cursor-default py-1"},B1={class:"tags-box flex p-1"},P1=O(()=>s("div",{class:"flex-1"},"TAGS",-1)),R1={key:0,class:"flex-auto flex items-center gap-1 flex-wrap"},N1=["onClick"],D1=O(()=>s("i",{class:"fa-solid fa-tag"},null,-1)),V1=_({__name:"PostsCard",props:{posts:{type:Object,required:!0},noTag:{type:Boolean,default:!1}},setup(o){const{router:t}=Z(),e=o,a=i=>{t.go(`/categories/?tag=${i}`)},n=()=>{t.go(e.posts.url)};return(i,d)=>(l(),r("div",S1,[s("h3",{class:"post-title cursor-pointer",onClick:n},[s("span",Z1,v(e.posts.title),1)]),s("p",T1,v(e.posts.date.string||"--/--/--"),1),s("div",B1,[P1,e.posts.tags.length>0?(l(),r("div",R1,[e.noTag?w("",!0):(l(!0),r(g,{key:0},x(e.posts.tags,c=>(l(),r("div",{class:"tag cursor-pointer flex items-center gap-1 px-2 py-1 rounded-md",key:c,onClick:I(M=>a(c),["stop"])},[D1,s("span",null,v(c),1)],8,N1))),128))])):w("",!0)])]))}}),z=m(V1,[["__scopeId","data-v-0e88ca8a"]]),E=JSON.parse('[{"title":"api-examples","url":"/posts/api-examples.html","tags":["test","Examples"],"date":{"time":null,"string":null}},{"title":"Examples","url":"/posts/markdown-examples.html","tags":["tag2","test"],"date":{"time":1725883200000,"string":"9/9/2024"}},{"title":"Test MD","url":"/posts/test.html","tags":["tag1","test"],"date":{"time":1725969600000,"string":"9/10/2024"}}]'),q1=K('<div class="absolute inset-0" data-v-1775bcc2><div class="author-card rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-v-1775bcc2><div class="avatar-div" data-v-1775bcc2><div class="author-avatar overflow-hidden p-1" data-v-1775bcc2><img class="w-full h-full rounded-[50%]" src="'+E1+'" alt="avatar" data-v-1775bcc2></div></div><div class="p-2 overflow-hidden rounded-b-lg" data-v-1775bcc2> 123 </div></div></div><div class="absolute bottom-[10px] left-1/2 width-[26px] -translate-x-1/2" data-v-1775bcc2><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-v-1775bcc2><path class="angles-path" d="M511.975 960c-16.376 0-32.76-6.25-45.24-18.75l-320-320c-25-25-25-65.5 0-90.5s65.5-25 90.5 0L511.975 805.6l274.8-274.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5l-320 320C544.775 953.8 528.375 960 511.975 960z" data-v-1775bcc2></path><path class="angles-path" d="M511.975 576c-16.4 0-32.8-6.2-45.2-18.8l-320-320c-25-25-25-65.5 0-90.5s65.5-25 90.5 0L511.975 421.6 786.775 146.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5l-320 320C544.775 569.8 528.375 576 511.975 576z" data-v-1775bcc2></path></svg></div>',2),A1=[q1],H1={class:"page-full"},O1={class:"p-3"},z1=_({__name:"index",setup(o){Z();const t=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return S(()=>{console.log(E)}),(e,a)=>(l(),r(g,null,[s("div",{class:"welcome-section relative",onClick:t},A1),s("section",H1,[s("div",O1,[(l(!0),r(g,null,x(u(E),n=>(l(),f(z,{id:n.url,posts:n},null,8,["id","posts"]))),256))])])],64))}}),j1=m(z1,[["__scopeId","data-v-1775bcc2"]]),j=o=>(y("data-v-e0a4ebe1"),o=o(),$(),o),F1={class:"page-full"},G1={class:"flex flex-wrap gap-2"},J1=["id","onClick"],Q1=j(()=>s("i",{class:"fa-solid fa-tag"},null,-1)),U1=j(()=>s("p",null,"文章",-1)),Y1=_({__name:"index",setup(o){const t=W([]),e=h(""),a=h([]);X(e,i=>{a.value=E.filter(d=>{var c;return(c=d.tags)==null?void 0:c.includes(i)})});const n=()=>{E.forEach(i=>{i.tags&&i.tags.forEach(d=>{t.includes(d)||t.push(d)})})};return S(()=>{const{tag:i}=t1();i&&(e.value=i),n()}),(i,d)=>(l(),r("div",F1,[s("div",G1,[(l(!0),r(g,null,x(t,c=>(l(),r("div",{class:C(["tag flex items-center gap-1 p-2 rounded-md cursor-pointer",{active:e.value===c}]),id:c,onClick:M=>e.value=c},[Q1,s("span",null,v(c),1)],10,J1))),256))]),s("div",null,[U1,(l(!0),r(g,null,x(a.value,c=>(l(),f(z,{id:c.url,posts:c,noTag:""},null,8,["id","posts"]))),256))])]))}}),K1=m(Y1,[["__scopeId","data-v-e0a4ebe1"]]),W1=_({__name:"index",setup(o){const{frontmatter:t}=b();return(e,a)=>(l(),r("main",null,[u(t).home?(l(),f(j1,{key:0})):u(t).about?(l(),f(I1,{key:1})):u(t).categories?(l(),f(K1,{key:2})):(l(),f(M1,{key:3}))]))}}),X1=m(W1,[["__scopeId","data-v-78a12109"]]),ee={class:"footer-text"},te=_({__name:"index",setup(o){const{theme:t}=b(),{footer:e}=t.value;return(a,n)=>(l(),r("footer",null,[s("p",ee,v(u(e).text),1)]))}}),se=o=>(y("data-v-30300e5c"),o=o(),$(),o),oe={key:0,class:"loader-page fixed inset-0 flex z-50 items-center justify-center"},ae=se(()=>s("div",{class:"loader"},[s("div",null,[s("ul",null,[s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])])])]),s("span",{class:"loader-text"},"Loading...")],-1)),ne=[ae],le=_({__name:"index",props:{show:{type:Boolean}},setup(o){const t=o;return(e,a)=>(l(),f(A,{name:"fade"},{default:q(()=>[t.show?(l(),r("div",oe,ne)):w("",!0)]),_:1}))}}),re=m(le,[["__scopeId","data-v-30300e5c"]]);function ce(o="#409EFF"){const t=o,e=ie();if(!e)return;let a=`:root {
`;a+=`  --color-main: ${t};
`;for(let n=1;n<=9;n++)a+=`  --color-main-light-${n}: ${de(t,n/10)};
`;for(let n=1;n<=9;n++)a+=`  --color-main-dark-${n}: ${ue(t,n/10)};
`;a+="}",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),document.head.appendChild(e)}function ie(){const o=document.getElementById("theme-variable");if(o&&o instanceof HTMLStyleElement)return o;{const t=document.createElement("style");return t.type="text/css",t.id="theme-variable",t.innerHTML="",t}}function F(o){if(!R(o))return null;o=o.replace("#","");let t=o.match(/../g);return!t||t.length!==3?null:t.map(a=>parseInt(a,16))}function G(o,t,e){if(o<0||o>255||t<0||t>255||e<0||e>255)throw new Error("Invalid RGB values. Values must be between 0 and 255.");let a=[o.toString(16),t.toString(16),e.toString(16)];for(let n=0;n<3;n++)a[n].length==1&&(a[n]=`0${a[n]}`);return`#${a.join("")}`}function de(o,t){if(!R(o))throw new Error("Invalid color format");if(isNaN(t)||t<0||t>1)throw new Error("Level must be between 0 and 1");try{let e=F(o);if(!e)throw new Error("Invalid color format");for(let a=0;a<3;a++)e[a]=(255-e[a])*t+e[a]|0;return G(e[0],e[1],e[2])}catch{throw new Error("Error in color conversion")}}function R(o){return/^#([a-fA-F0-9]{6})$/.test(o)}function ue(o,t){if(!R(o))throw new Error("Invalid color format");if(isNaN(t)||t<0||t>1)throw new Error("Level must be between 0 and 1");try{let e=F(o);if(!e)throw new Error("Invalid color format");for(let a=0;a<3;a++)e[a]=e[a]*(1-t)|0;return G(e[0],e[1],e[2])}catch{throw new Error("Error in color conversion")}}const pe={class:"w-full overflow-x-hidden"},_e=_({__name:"Layout",setup(o){const{pagePath:t,onBeforeRouteChange:e,onAfterRouteChanged:a}=Z();e(()=>{d.value=!0}),a(()=>{setTimeout(()=>{d.value=!1},650)});const n=h(!1),i=h(!1),d=h(!0);return setTimeout(()=>{n.value=!0,i.value&&(d.value=!1)},650),e1(()=>{t.value=H(location.pathname)}),S(()=>{ce("#F1939C"),i.value=!0,n.value&&(d.value=!1)}),(c,M)=>(l(),r("div",pe,[L(re,{show:d.value},null,8,["show"]),L(g1),L(X1),L(te)]))}}),fe={Layout:_e,enhanceApp({app:o,router:t,siteData:e}){}};export{fe as R};
