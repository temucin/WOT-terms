"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[26835],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,d=p["".concat(i,".").concat(y)]||p[y]||u[y]||s;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},29235:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=e=>{let{termsData:t}=e;const r={};t.forEach((e=>{const t=e.term.charAt(0).toUpperCase();r[t]||(r[t]=e.anchor)}));const a=Array.from({length:26},((e,t)=>String.fromCharCode(65+t)));return n.createElement("div",{id:"glossary_content-container"},n.createElement("div",{id:"alphabet-index",className:"fs-4"},"[ ",a.map(((e,t)=>n.createElement(n.Fragment,{key:e},n.createElement("a",{href:`#${r[e]}`},e),t<a.length-1&&n.createElement("span",null," | "))))," ]"),n.createElement("dl",{id:"glossary_content"},t.map((e=>n.createElement(n.Fragment,{key:e.term},n.createElement("dt",null,n.createElement("a",{id:e.anchor},e.term)),n.createElement("dd",{dangerouslySetInnerHTML:{__html:e.definition}}))))))}},60034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),s=r(29235);const o={},l="External Nist Glossary",i={unversionedId:"glossaries-external/glossary-nist",id:"glossaries-external/glossary-nist",title:"External Nist Glossary",description:"",source:"@site/docs/glossaries-external/glossary-nist.mdx",sourceDirName:"glossaries-external",slug:"/glossaries-external/glossary-nist",permalink:"/WOT-terms/docs/glossaries-external/glossary-nist",draft:!1,editUrl:"https://github.com/WebOfTrust/WOT-terms/tree/main/docs/glossaries-external/glossary-nist.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External eSSIF-Lab Glossary",permalink:"/WOT-terms/docs/glossaries-external/glossary-essiflab"},next:{title:"External ToIP Glossary",permalink:"/WOT-terms/docs/glossaries-external/glossary-toip"}},c={},m=r(65871),p=[],u={toc:p},y="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"external-nist-glossary"},"External Nist Glossary"),(0,a.kt)(s.Z,{termsData:m,mdxType:"CreateExternalGlossary"}))}d.isMDXComponent=!0}}]);