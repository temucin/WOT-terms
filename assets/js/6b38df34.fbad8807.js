"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[35361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"glossary/blinded-revocation-registry",id:"glossary/blinded-revocation-registry",title:"blinded-revocation-registry",description:"Definition",source:"@site/docs/glossary/blinded-revocation-registry.md",sourceDirName:"glossary",slug:"/glossary/blinded-revocation-registry",permalink:"/WOT-terms/docs/glossary/blinded-revocation-registry",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"blind-oobi",permalink:"/WOT-terms/docs/glossary/blind-oobi"},next:{title:"branch",permalink:"/WOT-terms/docs/glossary/branch"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Important observation",id:"important-observation",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"The current state of a ",(0,o.kt)("a",{parentName:"p",href:"transaction-event-log"},"transaction event log")," (TEL) ",(0,o.kt)("strong",{parentName:"p"},"be hidden or blinded")," such that ",(0,o.kt)("em",{parentName:"p"},"the only way")," for a potential verifier of the state to observe that state is ",(0,o.kt)("em",{parentName:"p"},"when the controller of a designated AID discloses it")," at the time of presentation."),(0,o.kt)("p",null,"{BE CAREFUL WITH THE REST, JUST TEXT SNIPPETS TYPED IN FROM A CONVERSATION }"),(0,o.kt)("p",null,"No information can be obtained via a ",(0,o.kt)("a",{parentName:"p",href:"rainbow-table-attack"},"rainbow table attack")," because the hash has enough ",(0,o.kt)("a",{parentName:"p",href:"entropy"},"entropy")," added to it."),(0,o.kt)("p",null,"{TBW on the basis of the last half hour of the recording ACDC meetup Dec 6 }"),(0,o.kt)("p",null,"The issuer creates and signs of the bulk issuance set of credentials and shares a salt with the any presenters.\nThe shared salt correlates between the issuer and the issuee, but that is the worst problem we have to consider, which is acceptable."),(0,o.kt)("p",null,"See more in the section ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#blindable-state-tel"},"blindable state tel")),(0,o.kt)("h2",{id:"important-observation"},"Important observation"),(0,o.kt)("p",null,'The presenter get to do the decomposition. And conclude: "Yes that was an approved schema issued by the issuer!"'))}d.isMDXComponent=!0}}]);