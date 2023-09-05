"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,c={unversionedId:"glossary/contractually-protected-disclosure",id:"glossary/contractually-protected-disclosure",title:"contractually-protected-disclosure",description:"Definition",source:"@site/docs/04_glossary/contractually-protected-disclosure.md",sourceDirName:"04_glossary",slug:"/glossary/contractually-protected-disclosure",permalink:"/WOT-terms/docs/glossary/contractually-protected-disclosure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"contingent-disclosure",permalink:"/WOT-terms/docs/glossary/contingent-disclosure"},next:{title:"control-authority",permalink:"/WOT-terms/docs/glossary/control-authority"}},i={},l=[{value:"Definition",id:"definition",level:2},{value:"Relation",id:"relation",level:2},{value:"Rule",id:"rule",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Usage of schema-based and contract-based controls to limit the exchange of information to provide both mechanical and legal protection on the sharing of data. "),(0,o.kt)("p",null,"Mechanical protection is composed of sharing the schema of the data to be shared prior to sharing the actual data contents. This mechanical protection is then combined through the IPEX protocol with disclosures of legal contracts to be agreed to prior to sharing the desired data contents."),(0,o.kt)("p",null,"Once the legal agreements have been met then the disclosure mechanism exchanges the desired data contents."),(0,o.kt)("p",null,"This is also the most elaborate form of disclosure by an ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/IPEX"},"IPEX"),". Contractually protected disclosure includes both ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/chain-link-confidentiality"},"chain-link confidential")," and ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/contingent-disclosure"},"contingent disclosure"),".\\\nParaphrased by @henkvancann based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-ipex/blob/main/draft-ssmith-ipex.md#discussion"},"source")),(0,o.kt)("h2",{id:"relation"},"Relation"),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"IPEX"},"IPEX")," protocol leverages important features of ",(0,o.kt)("a",{parentName:"p",href:"acdc.md"},"ACDC"),"s and ancillary protocols such as ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/CESR"},"CESR"),", ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/SAID"},"SAID"),"s, and ",(0,o.kt)("a",{parentName:"p",href:"cesr-proof.md"},"CESR-Proofs")," as well as ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/ricardian-contract"},"Ricardian contract"),"s and graduated disclosure (partial, selective, full) to enable contractually protected disclosure. Contractually protected disclosure includes both ","[chain-link confidential]","(chain-link confidential) and ","[contingent disclosure]","(contingent disclosure.md)."),(0,o.kt)("h2",{id:"rule"},"Rule"),(0,o.kt)("p",null,"The disclosure performed by a presentation exchange MAY be ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/graduated-disclosure"},"graduated")," and MAY be ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/glossary/contractually-protected-disclosure"},"contractually")," protected."))}p.isMDXComponent=!0}}]);