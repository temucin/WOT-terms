"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[62838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=i,f=p["".concat(l,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="duplicity",s={unversionedId:"glossary/duplicity",id:"glossary/duplicity",title:"duplicity",description:"Duplicity",source:"@site/docs/04_glossary/duplicity.md",sourceDirName:"04_glossary",slug:"/glossary/duplicity",permalink:"/WOT-terms/docs/glossary/duplicity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"duplicity detection",permalink:"/WOT-terms/docs/glossary/duplicity-detection"},next:{title:"easyCLA_trick",permalink:"/WOT-terms/docs/glossary/easyCLA_trick"}},l={},c=[{value:"Duplicity",id:"duplicity-1",level:2},{value:"KERI related",id:"keri-related",level:2},{value:"Outside world",id:"outside-world",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"duplicity"},"duplicity"),(0,i.kt)("h2",{id:"duplicity-1"},"Duplicity"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Duplicity")," is used to describe external inconsistency. Publication of two or more versions of a KEL, each of which is internally consistent is duplicity. Given that signatures are non-repudiable any duplicity is detectable and provable given possession of any two mutually inconsistent versions of a KEL. In KERI ",(0,i.kt)("a",{parentName:"p",href:"inconsistency"},"consistency")," is is used to described data that is internally consistent and cryptographically verifiably so."),(0,i.kt)("h2",{id:"keri-related"},"KERI related"),(0,i.kt)("p",null,"Duplicity means the existence of ",(0,i.kt)("strong",{parentName:"p"},"more than one version")," of a verifiable KEL for a given AID. Because every event in a KEL must be signed with non-repudiable signatures any inconsistency between any two instances of the KEL for a given AID is provable evidence of duplicity on the part of the signers with respect to either or both the key-state of that AID and/or any anchored data at a given key-state. A shorter KEL that does not differ in any of its events with respect to another but longer KEL is not duplicitous but merely incomplete. To clarify, duplicity evident means that duplicity is provable via the presentation of a set of two or more mutually inconsistent but independently verifiable instances of a KEL.\nSource ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,i.kt)("h2",{id:"outside-world"},"Outside world"),(0,i.kt)("p",null,"In common language 'duplicity' has a slightly different connotation: 'two-facedness', 'dishonesty', 'deceitfulness', 'deviousness,'two-facedness', 'falseness'."))}d.isMDXComponent=!0}}]);