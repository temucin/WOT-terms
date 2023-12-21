"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[32109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o="confidentiality",l={unversionedId:"glossary/confidentiality",id:"glossary/confidentiality",title:"confidentiality",description:"Definition",source:"@site/docs/04_glossary/confidentiality.md",sourceDirName:"04_glossary",slug:"/glossary/confidentiality",permalink:"/WOT-terms/docs/glossary/confidentiality",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"concise binary object representation",permalink:"/WOT-terms/docs/glossary/concise-binary-object-representation"},next:{title:"configuration files",permalink:"/WOT-terms/docs/glossary/configuration-files"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"KERI related",id:"keri-related",level:2},{value:"Also see",id:"also-see",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"confidentiality"},"confidentiality"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"All statements in a conversation are only known by the parties to that conversation. Source: Samuel Smith, at IIW-37, Oct 2023."),(0,i.kt)("p",null,"Confidentiality involves a set of rules or a promise usually executed through ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Confidentiality_agreements"},"confidentiality agreements")," that limits the access or places restrictions on certain types of information.",(0,i.kt)("br",{parentName:"p"}),"\n","More on source ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Confidentiality"},"Wikipedia")),(0,i.kt)("h2",{id:"keri-related"},"KERI related"),(0,i.kt)("p",null,"The three properties, authenticity, confidentiality, and privacy inhabit a trade space. ...\nOne can have any two of the three (privacy, authenticity, confidentiality) at the highest level but not all three.",(0,i.kt)("br",{parentName:"p"}),"\n","The trilemma insists that one must make a trade-off by prioritizing one or two properties over a third."),(0,i.kt)("p",null,"The ToIP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/TechArch/blob/main/spec.md#61-design-goals"},"design goals")," reflect that trade-off and provide an order of importance. The design goals indicate that one should start with high authenticity, then high confidentiality, and then as high as possible privacy, given there is no trade-off with respect to the other two."),(0,i.kt)("p",null,"More on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/SPAC_Message.md"},"Source")," Samuel Smith SPAC whitepaper."),(0,i.kt)("h2",{id:"also-see"},"Also see"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"authenticity"},"authenticity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"privacy"},"privacy"))))}f.isMDXComponent=!0}}]);