"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[67485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"glossary/payload",id:"glossary/payload",title:"payload",description:"Definition",source:"@site/docs/04_glossary/payload.md",sourceDirName:"04_glossary",slug:"/glossary/payload",permalink:"/WOT-terms/docs/glossary/payload",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/04_glossary/payload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pathing",permalink:"/WOT-terms/docs/glossary/pathing"},next:{title:"peer-to-peer",permalink:"/WOT-terms/docs/glossary/peer-to-peer"}},s={},p=[{value:"Definition",id:"definition",level:2},{value:"KERI context",id:"keri-context",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"The term 'payload' is used to distinguish between the 'interesting' information in a chunk of data or similar, and the overhead to support it. It is borrowed from transportation, where it refers to the part of the load that 'pays': for example, a tanker truck may carry 20 tons of oil, but the fully loaded vehicle weighs much more than that - there's the vehicle itself, the driver, fuel, the tank, etc. It costs money to move all these, but the customer only cares about (and pays for) the oil, hence, 'pay-load'. ",(0,o.kt)("a",{parentName:"p",href:"https://softwareengineering.stackexchange.com/questions/158603/what-does-the-term-payload-mean-in-programming"},"Source"),"."),(0,o.kt)("h2",{id:"keri-context"},"KERI context"),(0,o.kt)("p",null,"Now payload in ",(0,o.kt)("inlineCode",{parentName:"p"},"KERI"),". The payload of an item in an ",(0,o.kt)("inlineCode",{parentName:"p"},"Event Log")," is one the following cryptographic building blocks in KERI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a content digest hash "),(0,o.kt)("li",{parentName:"ul"},"a root hash of a Merkle-tree"),(0,o.kt)("li",{parentName:"ul"},"a public key\nNote tha KERI never puts raw data or privacy-sensitive data in a ",(0,o.kt)("inlineCode",{parentName:"li"},"KEL")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"KERL"),".")))}d.isMDXComponent=!0}}]);