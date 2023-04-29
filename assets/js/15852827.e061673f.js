"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[9281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"terms/glossary/naive-conversion",id:"terms/glossary/naive-conversion",title:"naive-conversion",description:"Definition",source:"@site/docs/terms/glossary/naive-conversion.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/naive-conversion",permalink:"/WOT-terms/docs/terms/glossary/naive-conversion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"multisig",permalink:"/WOT-terms/docs/terms/glossary/multisig"},next:{title:"namespace",permalink:"/WOT-terms/docs/terms/glossary/namespace"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"CESR related",id:"cesr-related",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Non-CESR Base64 conversion. How people are used to using the Base64 encode and decode. Without ",(0,a.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/pre-pad"},"pre-pad"),"ding etc all the stuff CESR does to ensure aligns on 24 bit boundaries so ",(0,a.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/CESR"},"CESR")," never uses the '=' pad character. But naive ",(0,a.kt)("a",{parentName:"p",href:"Base64.md"},"Base64")," will pad if the length is not 24 bit aligned.\\\nSource: Samuel Smith in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/issues/34"},"issue 34")),(0,a.kt)("p",null,"Naive conversion is a text to binary conversion or vice versa that doesn't anticipate on either ",(0,a.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/composability"},"composability")," and / or on the ",(0,a.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/concatenation"},"concatenation")," capability of the result of such an operation."),(0,a.kt)("h2",{id:"cesr-related"},"CESR related"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#conversions"},"IETF draft CESR")," there's much attention for naive ",(0,a.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/base64"},"Base64")," conversions, because it helps explaining the necessity of stable code characters and padding in CESR to achieve:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/self-framing"},"self-framing")),(0,a.kt)("li",{parentName:"ul"},"round-robin ",(0,a.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/composability"},"composability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/concatenation"},"concatenation")," options"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/pipelining"},"pipelined")," streaming")))}u.isMDXComponent=!0}}]);