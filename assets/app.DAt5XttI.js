import{R as i}from"./chunks/theme.C5eUdm3m.js";import{z as o,A as u,R as l,B as c,C as f,D as d,E as m,G as h,H as A,I as g,J as C,d as P,a as R,m as v,K as w,L as y,M as E,N as b,O as S}from"./chunks/framework.7VeGwsXP.js";function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(i),T=P({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=R();return v(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&y(),E(),b(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=O(),t=L();t.provide(l,e);const a=c(e.route);return t.provide(f,a),t.component("Content",d),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function L(){return A(T)}function O(){let e=o,t;return g(a=>{let n=C(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{D as createApp};
