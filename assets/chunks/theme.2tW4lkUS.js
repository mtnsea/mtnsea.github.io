import{r as g,u as Q,d as h,a as b,o as n,c as r,b as s,F as m,e as C,f as i,n as x,w as M,t as p,g as w,h as q,T as A,i as v,p as E,j as I,k as D,_ as L,l as S,m as U,q as Y,s as f,v as K,x as W,y as X,z as t1}from"./framework.C_E3gWJ1.js";function H(o){let e=o.replace(/^\//,"");return e=e.replace(/\.html$/,""),e}function e1(){const o=location.search,e=new URLSearchParams(o),t={};return e.forEach((a,l)=>{t[l]=a}),t}const V=g(),B=g(),P=g(),Z=()=>{const o=Q();return o.onBeforeRouteChange=e=>{B.value&&B.value()},o.onAfterRouteChanged=e=>{V.value=H(e),P.value&&P.value()},{router:o,pagePath:V,onBeforeRouteChange:e=>{B.value=e},onAfterRouteChanged:e=>{P.value=e}}},T=o=>(E("data-v-a041deb7"),o=o(),I(),o),s1={class:"header flex items-center"},o1={id:"desktop-menu",class:"w-full h-full"},a1=T(()=>s("a",{class:"px-2 text-slate-50",href:"/"},[s("div",null,[s("span",{class:"text-xl"},"M"),D("tn"),s("span",{class:"text-xl"},"S"),D("ea")])],-1)),n1={class:"flex flex-row gap-2"},l1=["href"],r1={id:"mobile-menu",class:"w-full h-full relative mx-5"},c1={class:"menu-icon"},i1=T(()=>s("span",null,null,-1)),u1=T(()=>s("span",null,null,-1)),d1=T(()=>s("span",null,null,-1)),p1=[i1,u1,d1],_1={class:"mx-auto"},h1={class:"inline-block px-2 h-full font-bold text-slate-50",href:"/"},g1=["onClick"],f1=h({__name:"index",setup(o){const{pagePath:e,router:t}=Z(),{theme:a,site:l}=b(),u=l.value.base,d=a.value.menuList,c=g(!1),y=N=>{t.go(u+N).then(()=>{c.value=!1})},J=()=>{c.value=!c.value};return(N,$)=>(n(),r("header",s1,[s("nav",o1,[a1,s("ul",n1,[(n(!0),r(m,null,C(i(d),_=>(n(),r("li",{key:_.link,class:x({active:i(e)===_.link})},[s("a",{class:"mx-1 text-slate-50",href:i(u)+_.link},[s("i",{class:x(["mr-1 fa-solid",["fa-"+_.icon]])},null,2),s("span",null,p(_.text),1)],8,l1)],2))),128))])]),s("nav",r1,[s("div",c1,[s("div",{class:x(["burger",{checked:c.value}]),onClick:M(J,["stop"])},p1,2)]),s("div",_1,[s("a",h1,[s("span",null,p(i(l).title),1)])])]),w(A,{name:"fade-in-left"},{default:q(()=>[c.value?(n(),r("div",{key:0,class:"mobile-menu-page",onMousewheel:$[0]||($[0]=M(()=>{},["prevent"])),onTouchmove:$[1]||($[1]=M(()=>{},["prevent"]))},[s("ul",null,[(n(!0),r(m,null,C(i(d),_=>(n(),r("li",{class:x(["text-center py-1",{active:i(e)===_.link}]),key:_.link},[s("div",{class:"mx-1",onClick:_t=>y(_.link)},[s("i",{class:x(["mr-1 fa-solid",["fa-"+_.icon]])},null,2),s("span",null,p(_.text),1)],8,g1)],2))),128))])],32)):v("",!0)]),_:1})]))}}),v1=L(f1,[["__scopeId","data-v-a041deb7"]]),m1=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],C1=h({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(o){const e=g(!1);return S(()=>{e.value=!0,U(()=>import("./giscus-BNK3dBIH.B_EkeIy7.js"),[])}),(t,a)=>e.value?(n(),r("giscus-widget",{key:0,id:t.id,host:t.host,repo:t.repo,repoid:t.repoId,category:t.category,categoryid:t.categoryId,mapping:t.mapping,term:t.term,strict:t.strict,reactionsenabled:t.reactionsEnabled,emitmetadata:t.emitMetadata,inputposition:t.inputPosition,theme:t.theme,lang:t.lang,loading:t.loading},null,8,m1)):v("",!0)}}),L1={class:"page-full"},x1={class:"content-page"},w1={key:0},b1={key:0,class:"giscus-box mt-2 mx-2 pt-2"},y1=h({__name:"index",setup(o){const{page:e,frontmatter:t}=b();return console.log(t),(a,l)=>{const u=Y("Content");return n(),r("div",L1,[s("section",x1,[s("div",null,[s("p",null,p(i(t).title),1),i(t).tags&&i(t).tags.length>0?(n(),r("p",w1,[(n(!0),r(m,null,C(i(t).tags,(d,c)=>(n(),r("span",{key:c},p(d),1))),128))])):v("",!0)]),w(u,{id:"markdown-content"}),i(t).giscus!==!1?(n(),r("div",b1,[(n(),f(i(C1),{key:i(e).filePath,repo:"mtnsea/mtnsea.github.io","repo-id":"R_kgDOM3StnQ",category:"General","category-id":"DIC_kwDOM3Stnc4Cizbr",mapping:"pathname",strict:"0","reactions-enabled":"1","emit-metadata":"0","input-position":"top",theme:"light",lang:"zh-CN"}))])):v("",!0)])])}}}),$1=L(y1,[["__scopeId","data-v-2e9455b4"]]),M1={class:"page-full"},k1=h({__name:"index",setup(o){const{theme:e}=b(),{aboutMe:t}=e.value;return(a,l)=>(n(),r("div",M1,[s("p",null,p(i(t).name),1),s("p",null,p(i(t).desc),1)]))}}),E1="/assets/avatar.C8fqxqYC.png",O=o=>(E("data-v-f5434b8b"),o=o(),I(),o),I1={class:"post-card select-none"},S1={class:"relative pb-1"},Z1={class:"cursor-default py-1"},T1={key:0,class:"tags-box flex p-1"},B1=O(()=>s("div",{class:"flex-1"},"TAGS",-1)),P1={key:0,class:"flex-auto flex items-center gap-1 flex-wrap"},R1=["onClick"],N1=O(()=>s("i",{class:"fa-solid fa-tag"},null,-1)),D1=h({__name:"PostsCard",props:{posts:{type:Object,required:!0},noTag:{type:Boolean,default:!1}},setup(o){const{router:e}=Z(),t=o,a=u=>{e.go(`/categories/?tag=${u}`)},l=()=>{e.go(t.posts.url)};return(u,d)=>(n(),r("div",I1,[s("h3",{class:"post-title cursor-pointer",onClick:l},[s("span",S1,p(t.posts.title),1)]),s("p",Z1,p(t.posts.date.string||"--/--/--"),1),t.posts.tags?(n(),r("div",T1,[B1,t.posts.tags.length>0?(n(),r("div",P1,[t.noTag?v("",!0):(n(!0),r(m,{key:0},C(t.posts.tags,c=>(n(),r("div",{class:"tag cursor-pointer flex items-center gap-1 px-2 py-1 rounded-md",key:c,onClick:M(y=>a(c),["stop"])},[N1,s("span",null,p(c),1)],8,R1))),128))])):v("",!0)])):v("",!0)]))}}),z=L(D1,[["__scopeId","data-v-f5434b8b"]]),k=JSON.parse('[{"title":"api-examples","url":"/posts/api-examples.html","tags":["test","Examples"],"date":{"time":null,"string":null}},{"title":"关于Giscus","url":"/posts/giscus.html","tags":["theme"],"date":{"time":1727352000000,"string":"9/26/2024"}},{"title":"Examples","url":"/posts/markdown-examples.html","tags":["tag2","test"],"date":{"time":1725883200000,"string":"9/9/2024"}},{"title":"Test MD","url":"/posts/test.html","tags":["tag1","test"],"date":{"time":1725969600000,"string":"9/10/2024"}},{"title":"关于theme","url":"/posts/theme.html","tags":["theme"],"date":{"time":1727352000000,"string":"9/26/2024"}}]'),V1=K('<div class="absolute inset-0" data-v-1775bcc2><div class="author-card rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-v-1775bcc2><div class="avatar-div" data-v-1775bcc2><div class="author-avatar overflow-hidden p-1" data-v-1775bcc2><img class="w-full h-full rounded-[50%]" src="'+E1+'" alt="avatar" data-v-1775bcc2></div></div><div class="p-2 overflow-hidden rounded-b-lg" data-v-1775bcc2> 123 </div></div></div><div class="absolute bottom-[10px] left-1/2 width-[26px] -translate-x-1/2" data-v-1775bcc2><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-v-1775bcc2><path class="angles-path" d="M511.975 960c-16.376 0-32.76-6.25-45.24-18.75l-320-320c-25-25-25-65.5 0-90.5s65.5-25 90.5 0L511.975 805.6l274.8-274.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5l-320 320C544.775 953.8 528.375 960 511.975 960z" data-v-1775bcc2></path><path class="angles-path" d="M511.975 576c-16.4 0-32.8-6.2-45.2-18.8l-320-320c-25-25-25-65.5 0-90.5s65.5-25 90.5 0L511.975 421.6 786.775 146.8c25-25 65.5-25 90.5 0s25 65.5 0 90.5l-320 320C544.775 569.8 528.375 576 511.975 576z" data-v-1775bcc2></path></svg></div>',2),q1=[V1],A1={class:"page-full"},H1={class:"p-3"},O1=h({__name:"index",setup(o){Z();const e=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return S(()=>{console.log(k)}),(t,a)=>(n(),r(m,null,[s("div",{class:"welcome-section relative",onClick:e},q1),s("section",A1,[s("div",H1,[(n(!0),r(m,null,C(i(k),l=>(n(),f(z,{id:l.url,posts:l},null,8,["id","posts"]))),256))])])],64))}}),z1=L(O1,[["__scopeId","data-v-1775bcc2"]]),j=o=>(E("data-v-e0a4ebe1"),o=o(),I(),o),j1={class:"page-full"},F1={class:"flex flex-wrap gap-2"},G1=["id","onClick"],J1=j(()=>s("i",{class:"fa-solid fa-tag"},null,-1)),Q1=j(()=>s("p",null,"文章",-1)),U1=h({__name:"index",setup(o){const e=W([]),t=g(""),a=g([]);X(t,u=>{a.value=k.filter(d=>{var c;return(c=d.tags)==null?void 0:c.includes(u)})});const l=()=>{k.forEach(u=>{u.tags&&u.tags.forEach(d=>{e.includes(d)||e.push(d)})})};return S(()=>{const{tag:u}=e1();u&&(t.value=u),l()}),(u,d)=>(n(),r("div",j1,[s("div",F1,[(n(!0),r(m,null,C(e,c=>(n(),r("div",{class:x(["tag flex items-center gap-1 p-2 rounded-md cursor-pointer",{active:t.value===c}]),id:c,onClick:y=>t.value=c},[J1,s("span",null,p(c),1)],10,G1))),256))]),s("div",null,[Q1,(n(!0),r(m,null,C(a.value,c=>(n(),f(z,{id:c.url,posts:c,noTag:""},null,8,["id","posts"]))),256))])]))}}),Y1=L(U1,[["__scopeId","data-v-e0a4ebe1"]]),K1=h({__name:"index",setup(o){const{frontmatter:e}=b();return(t,a)=>(n(),r("main",null,[i(e).home?(n(),f(z1,{key:0})):i(e).about?(n(),f(k1,{key:1})):i(e).categories?(n(),f(Y1,{key:2})):(n(),f($1,{key:3}))]))}}),W1=L(K1,[["__scopeId","data-v-78a12109"]]),X1={class:"footer-text"},tt=h({__name:"index",setup(o){const{theme:e}=b(),{footer:t}=e.value;return(a,l)=>(n(),r("footer",null,[s("p",X1,p(i(t).text),1)]))}}),et=o=>(E("data-v-30300e5c"),o=o(),I(),o),st={key:0,class:"loader-page fixed inset-0 flex z-50 items-center justify-center"},ot=et(()=>s("div",{class:"loader"},[s("div",null,[s("ul",null,[s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])]),s("li",null,[s("svg",{fill:"currentColor",viewBox:"0 0 90 120"},[s("path",{d:"M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"})])])])]),s("span",{class:"loader-text"},"Loading...")],-1)),at=[ot],nt=h({__name:"index",props:{show:{type:Boolean}},setup(o){const e=o;return(t,a)=>(n(),f(A,{name:"fade"},{default:q(()=>[e.show?(n(),r("div",st,at)):v("",!0)]),_:1}))}}),lt=L(nt,[["__scopeId","data-v-30300e5c"]]);function rt(o="#409EFF"){const e=o,t=ct();if(!t)return;let a=`:root {
`;a+=`  --color-main: ${e};
`;for(let l=1;l<=9;l++)a+=`  --color-main-light-${l}: ${it(e,l/10)};
`;for(let l=1;l<=9;l++)a+=`  --color-main-dark-${l}: ${ut(e,l/10)};
`;a+="}",t.styleSheet?t.styleSheet.cssText=a:t.appendChild(document.createTextNode(a)),document.head.appendChild(t)}function ct(){const o=document.getElementById("theme-variable");if(o&&o instanceof HTMLStyleElement)return o;{const e=document.createElement("style");return e.type="text/css",e.id="theme-variable",e.innerHTML="",e}}function F(o){if(!R(o))return null;o=o.replace("#","");let e=o.match(/../g);return!e||e.length!==3?null:e.map(a=>parseInt(a,16))}function G(o,e,t){if(o<0||o>255||e<0||e>255||t<0||t>255)throw new Error("Invalid RGB values. Values must be between 0 and 255.");let a=[o.toString(16),e.toString(16),t.toString(16)];for(let l=0;l<3;l++)a[l].length==1&&(a[l]=`0${a[l]}`);return`#${a.join("")}`}function it(o,e){if(!R(o))throw new Error("Invalid color format");if(isNaN(e)||e<0||e>1)throw new Error("Level must be between 0 and 1");try{let t=F(o);if(!t)throw new Error("Invalid color format");for(let a=0;a<3;a++)t[a]=(255-t[a])*e+t[a]|0;return G(t[0],t[1],t[2])}catch{throw new Error("Error in color conversion")}}function R(o){return/^#([a-fA-F0-9]{6})$/.test(o)}function ut(o,e){if(!R(o))throw new Error("Invalid color format");if(isNaN(e)||e<0||e>1)throw new Error("Level must be between 0 and 1");try{let t=F(o);if(!t)throw new Error("Invalid color format");for(let a=0;a<3;a++)t[a]=t[a]*(1-e)|0;return G(t[0],t[1],t[2])}catch{throw new Error("Error in color conversion")}}const dt={class:"w-full overflow-x-hidden"},pt=h({__name:"Layout",setup(o){const{pagePath:e,onBeforeRouteChange:t,onAfterRouteChanged:a}=Z();t(()=>{d.value=!0}),a(()=>{setTimeout(()=>{d.value=!1},650)});const l=g(!1),u=g(!1),d=g(!0);return setTimeout(()=>{l.value=!0,u.value&&(d.value=!1)},650),t1(()=>{e.value=H(location.pathname)}),S(()=>{rt("#F1939C"),u.value=!0,l.value&&(d.value=!1)}),(c,y)=>(n(),r("div",dt,[w(lt,{show:d.value},null,8,["show"]),w(v1),w(W1),w(tt)]))}}),gt={Layout:pt,enhanceApp({app:o,router:e,siteData:t}){}};export{gt as R};