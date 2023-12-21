"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[65123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57810:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},o="derivation code",l={unversionedId:"glossary/derivation-code",id:"glossary/derivation-code",title:"derivation code",description:"Definition",source:"@site/docs/04_glossary/derivation-code.md",sourceDirName:"04_glossary",slug:"/glossary/derivation-code",permalink:"/WOT-terms/docs/glossary/derivation-code",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"delegation",permalink:"/WOT-terms/docs/glossary/delegation"},next:{title:"designated aliases",permalink:"/WOT-terms/docs/glossary/designated-aliases"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:3},{value:"Relation with KERI",id:"relation-with-keri",level:3},{value:"Example KERI derivation codes",id:"example-keri-derivation-codes",level:4},{value:"Beware",id:"beware",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"derivation-code"},"derivation code"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"To properly extract and use the ",(0,i.kt)("a",{parentName:"p",href:"public-key-infrastructure"},"public key")," embedded in a ",(0,i.kt)("a",{parentName:"p",href:"self-certifying-identifier"},"self-certifying identifier")," we need to know the cryptographic ",(0,i.kt)("em",{parentName:"p"},"signing scheme")," used by the ",(0,i.kt)("a",{parentName:"p",href:"key-pair"},"key pair"),". KERI includes this very compactly in the identifier, by replacing the pad character (a character used to fill a void to able to always end up with a fixed length public key) with a special character that encodes the derivation process. We call this the ",(0,i.kt)("em",{parentName:"p"},"derivation code"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example suppose that the 44 character Base-64 with trailing pad character for the public key is as follows:\n",(0,i.kt)("inlineCode",{parentName:"p"},"F5pxRJP6THrUtlDdhh07hJEDKrJxkcR9m5u1xs33bhp="),"\nIf B is the value of the derivation code then the resultant self-contained string is as follows:\n",(0,i.kt)("inlineCode",{parentName:"p"},"BF5pxRJP6THrUtlDdhh07hJEDKrJxkcR9m5u1xs33bhp"))),(0,i.kt)("h3",{id:"relation-with-keri"},"Relation with KERI"),(0,i.kt)("p",null,"All crypto material appears in ",(0,i.kt)("inlineCode",{parentName:"p"},"KERI")," in a fully ",(0,i.kt)("a",{parentName:"p",href:"qualified"},"qualified")," representation. This includes a derivation code prepended to the crypto-material.\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/WebOfTrust/keri/blob/main/images/derivation-code.png",alt:null})),(0,i.kt)("h4",{id:"example-keri-derivation-codes"},"Example KERI derivation codes"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/weboftrust/WOT-terms/static/img/derivation-code.png",alt:"example derivation code in KERI"})," "),(0,i.kt)("h2",{id:"beware"},"Beware"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_derivation_function"},"Key derivation functions")," are not related to the pre-pended derivation codes used in KERI."))}u.isMDXComponent=!0}}]);