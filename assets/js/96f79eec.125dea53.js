"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[10183],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>m});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=c(i),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||n;return i?r.createElement(m,o(o({ref:t},f),{},{components:i})):r.createElement(m,o({ref:t},f))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},82848:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=i(87462),a=(i(67294),i(3905));const n={},o=void 0,s={unversionedId:"glossary/validator",id:"glossary/validator",title:"validator",description:"Definition",source:"@site/docs/glossary/validator.md",sourceDirName:"glossary",slug:"/glossary/validator",permalink:"/WOT-terms/docs/glossary/validator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"Glossary",previous:{title:"validate",permalink:"/WOT-terms/docs/glossary/validate"},next:{title:"veracity",permalink:"/WOT-terms/docs/glossary/veracity"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:2},{value:"To be Sam-Smith precise in KERI",id:"to-be-sam-smith-precise-in-keri",level:2},{value:"ESSIF-lab definitions",id:"essif-lab-definitions",level:2}],f={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"determines current authoritative key set for identifier from at least one key event (receipt) log. Types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validator of any verifiable data structure"),(0,a.kt)("li",{parentName:"ul"},"Validator as a node in distributed consensus or participant")),(0,a.kt)("p",null,"Validator and ",(0,a.kt)("a",{parentName:"p",href:"verifier"},"verifier")," are close to synonyms for our purposes."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"validator")," in ",(0,a.kt)("a",{parentName:"p",href:"key-event-receipt-infrastructure-(KERI)"},"KERI")," and ",(0,a.kt)("a",{parentName:"p",href:"authentic-chained-data-container-(ACDC)"},"ACDC"),' is anybody that wants to establish control-authority over an identifier, created by the controller of the identifier. Validators verify the log, they apply duplicity detection or they leverage somebody else\'s duplicity detection or apply any other logic so they can say "Yes, these are events I can trust".'),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"During validation of virtual credentials for example, a ",(0,a.kt)("a",{parentName:"p",href:"verifier"},"verifier")," checks to see if a verifiable ",(0,a.kt)("a",{parentName:"p",href:"credential"},"credential")," (",(0,a.kt)("a",{parentName:"p",href:"VC"},"VC"),") has been signed by the controller of this VC using the applicable verification method."),(0,a.kt)("h2",{id:"to-be-sam-smith-precise-in-keri"},"To be Sam-Smith precise in KERI"),(0,a.kt)("p",null,"Any entity or agent that evaluates whether or not a given signed statement as attributed to an identifier is valid at the time of its issuance. A valid statement MUST be verifiable, that is, has a verifiable signature from the current controlling keypair(s) at the time of its issuance. Therefore a Validator must first act as a Verifier in order to establish the root authoritative set of keys. Once verified, the Validator may apply other criteria or constraints to the statement in order to determine its validity for a given use case. When that statement is part of a verifiable data structure then the cryptographic verification includes verifying digests and any other structural commitments or constraints. To elaborate, with respect to an AID, for example, a Validator first evaluates one or more KELs in order to determine if it can rely on (trust) the key state (control authority) provided by any given KEL. A necessary but insufficient condition for a valid KEL is it is verifiable i.e. is internally inconsistent with respect to compliance with the KERI protocol. An invalid KEL from the perspective of a Validator may be either unverifiable or may be verifiable but duplicitous with respect to some other verifiable version of that KEL. Detected duplicity by a given validator means that the validator has seen more than one verifiable version of a KEL for a given AID. Reconciliable duplicity means that one and only one version of a KEL as seen by a Validator is accepted as the authoritative version for that validator. Irreconcilable duplicity means that none of the versions of a KEL as seen by a validator are accepted as the authoritative one for that validator. The conditions for reconcilable duplicity are described later.\\\nSource ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,a.kt)("h2",{id:"essif-lab-definitions"},"ESSIF-lab definitions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#verify"},"verify"))," definition is in sync with the definition in the KERI/ACDC vocabulary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#verifier"},"verifier"))," definition is in sync with the definition in the KERI/ACDC vocabulary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#validate"},"validate"))," definition is very general, however in the KERI/ACDC vocabulary 'validate' currently has diverse meanings including this one"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#validator"},"validator"))," definition is a generalisation of the much more specific definition in the KERI/ACDC vocabulary")))}p.isMDXComponent=!0}}]);