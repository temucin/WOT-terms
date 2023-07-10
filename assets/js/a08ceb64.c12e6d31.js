"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={sidebar:"HowWeDidSidebar"},i="Sync agenda to production via local",c={unversionedId:"How we did/sync-agenda-to-production-via-local",id:"How we did/sync-agenda-to-production-via-local",title:"Sync agenda to production via local",description:"Problem",source:"@site/docs/How we did/sync-agenda-to-production-via-local.md",sourceDirName:"How we did",slug:"/How we did/sync-agenda-to-production-via-local",permalink:"/WOT-terms/docs/How we did/sync-agenda-to-production-via-local",draft:!1,tags:[],version:"current",frontMatter:{sidebar:"HowWeDidSidebar"},sidebar:"HowWeDidSidebar",previous:{title:"Embed a Github-hosted image in a Github wiki page",permalink:"/WOT-terms/docs/How we did/embed-github-hosted-image-in-github-wiki-page"},next:{title:"Load ToIP glossary in weboftrust github page",permalink:"/WOT-terms/docs/How we did/load-glossary-weboftrust-in-docusaurus"}},l={},d=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"The command reports back",id:"the-command-reports-back",level:3}],s={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync-agenda-to-production-via-local"},"Sync agenda to production via local"),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"We edit HackMD.io files during meetings. There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Versions and github sync")," option in HackMD.io."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/HkkAyTGps.png",alt:null})),(0,o.kt)("p",null,"If this is not configured to direct access the production site, we need to sync this explicitly."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Suppose ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," is the github site where to HackMD.io file has been push to."),(0,o.kt)("p",null,"Then locally in git repo and present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch (!) say:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"git fetch origin\ngit checkout origin/main -- agenda.md\n")),(0,o.kt)("h3",{id:"the-command-reports-back"},"The command reports back"),(0,o.kt)("p",null,'Changes to be committed: (use "git restore --staged \\<file',">",'..." to unstage)\\\nmodified: agenda.md'),(0,o.kt)("p",null,'git commit -m "agenda.md updated"'),(0,o.kt)("p",null,"Be sure that you've staged what you wanted to stage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'git commit -m "agenda.md updated"\ngit push upstream main\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Upstream")," is in this case the production server."))}u.isMDXComponent=!0}}]);