if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const t=e=>r(e,o),l={module:{uri:o},exports:u,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(n(...e),u)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"resume"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Resume/css/app.09d7b166.css",revision:null},{url:"/Resume/index.html",revision:"772ab490832cb9ab81b18772ad45a048"},{url:"/Resume/js/FontAwesome/all.min.js",revision:"9cff8d5f256fe1fbda6f0b6452531d8b"},{url:"/Resume/js/app.6fe5b210.js",revision:null},{url:"/Resume/js/chunk-vendors.ea7791f1.js",revision:null},{url:"/Resume/manifest.json",revision:"d49cf6b1baa26ed7d400b042944ed7d0"},{url:"/Resume/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
