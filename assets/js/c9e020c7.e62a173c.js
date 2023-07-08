"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[56716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=s(r),f=o,u=y["".concat(p,".").concat(f)]||y[f]||d[f]||a;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[y]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,c={unversionedId:"glossary/cryptonym",id:"glossary/cryptonym",title:"cryptonym",description:"Definition",source:"@site/docs/glossary/cryptonym.md",sourceDirName:"glossary",slug:"/glossary/cryptonym",permalink:"/WOT-terms/docs/glossary/cryptonym",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cryptographic-strength",permalink:"/WOT-terms/docs/glossary/cryptographic-strength"},next:{title:"custodial-agent",permalink:"/WOT-terms/docs/glossary/custodial-agent"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"KERI related",id:"keri-related",level:2}],l={toc:s},y="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A code name, call sign or cryptonym is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_word_(figure_of_speech)"},"code word")," or name used, sometimes clandestinely, to refer to another name, word, project, or person.\\\nSource ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_name"},"Wikipedia")),(0,o.kt)("h2",{id:"keri-related"},"KERI related"),(0,o.kt)("p",null,"A cryptographic pseudonymous identifier represented by a string of characters derived from a random or pseudo-random secret seed or salt via a one-way cryptographic function with a sufficiently high degree of cryptographic strength (e.g. 128 bits, see appendix on ",(0,o.kt)("a",{parentName:"p",href:"cryptographic-strength"},"cryptographic strength"),". A cryptonym is a type of primitive.\\\nDue the ",(0,o.kt)("a",{parentName:"p",href:"entropy"},"entropy")," in its ",(0,o.kt)("a",{parentName:"p",href:"derivation"},"derivation"),", a cryptonym is a universally unique identifier and only the ",(0,o.kt)("a",{parentName:"p",href:"controller"},"controller")," of the secret ",(0,o.kt)("a",{parentName:"p",href:"salt"},"salt")," or ",(0,o.kt)("a",{parentName:"p",href:"seed"},"seed")," from which the cryptonym is derived may prove control over the cryptonym. Therefore the derivation function MUST be associated with the cryptonym and MAY be encoded as part of the cryptonym itself.\\\nSource ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md"},"Smith, ietf-keri draft")))}d.isMDXComponent=!0}}]);