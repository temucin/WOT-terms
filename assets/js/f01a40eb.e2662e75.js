"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[65248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},o="bexter",l={unversionedId:"glossary/bexter",id:"glossary/bexter",title:"bexter",description:"Definition",source:"@site/docs/04_glossary/bexter.md",sourceDirName:"04_glossary",slug:"/glossary/bexter",permalink:"/WOT-terms/docs/glossary/bexter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"best available data acceptance mechanism",permalink:"/WOT-terms/docs/glossary/best-available-data-acceptance-mechanism"},next:{title:"binding",permalink:"/WOT-terms/docs/glossary/binding"}},s={},p=[{value:"Definition",id:"definition",level:2},{value:"More details",id:"more-details",level:2},{value:"Example uses:",id:"example-uses",level:4},{value:"Attributes",id:"attributes",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bexter"},"bexter"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"The class variable length text that is used in CESR and preserves the round-trip transposability using Base64 URL safe-only encoding even though the text variable length."),(0,n.kt)("h2",{id:"more-details"},"More details"),(0,n.kt)("p",null,"From ",(0,n.kt)("a",{parentName:"p",href:"https://keripy.readthedocs.io/en/latest/?badge=latest"},"readthedocs.io")),(0,n.kt)("p",null,"Bexter is subclass of Matter, cryptographic material, for variable length strings that only contain Base64 URL safe characters, i.e. Base64 text (bext)."),(0,n.kt)("p",null,"When created using the 'bext' paramaeter, the encoded matter in qb64 format in the text domain is more compact than would be the case if the string were passed in as raw bytes. The text is used as is to form the value part of the\nqb64 version not including the leader."),(0,n.kt)("p",null,"Due to ambiguity that arises from pre-padding bext whose length is a multiple of three with one or more 'A' chars. Any bext that starts with an 'A' and whose length is either a multiple of 3 or 4 may not round trip. Bext with a leading 'A' whose length is a multiple of four may have the leading 'A' stripped when round tripping."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bexter(bext='ABBB').bext == 'BBB'"),(0,n.kt)("li",{parentName:"ul"},"Bexter(bext='BBB').bext == 'BBB'"),(0,n.kt)("li",{parentName:"ul"},"Bexter(bext='ABBB').qb64 == '4AABABBB' == Bexter(bext='BBB').qb64")),(0,n.kt)("p",null,"To avoid this problem, only use for applications of base 64 strings that never start with 'A'"),(0,n.kt)("p",null,"Examples: base64 text strings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'bext = ""'),(0,n.kt)("li",{parentName:"ul"},"qb64 = '4AAA'"),(0,n.kt)("li",{parentName:"ul"},'bext = "-"'),(0,n.kt)("li",{parentName:"ul"},"qb64 = '6AABAAA-'"),(0,n.kt)("li",{parentName:"ul"},'bext = "-A"'),(0,n.kt)("li",{parentName:"ul"},"qb64 = '5AABAA-A'"),(0,n.kt)("li",{parentName:"ul"},'bext = "-A-"'),(0,n.kt)("li",{parentName:"ul"},"qb64 = '4AABA-A-'"),(0,n.kt)("li",{parentName:"ul"},'bext = "-A-B"'),(0,n.kt)("li",{parentName:"ul"},"qb64 = '4AAB-A-B'")),(0,n.kt)("h4",{id:"example-uses"},"Example uses:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CESR encoded paths for nested SADs and SAIDs"),(0,n.kt)("li",{parentName:"ul"},"CESR encoded fractionally weighted threshold expressions")),(0,n.kt)("h4",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,'Inherited Properties:  (See Matter)\n.pad  is int number of pad chars given raw\n.code is  str derivation code to indicate cypher suite\n.raw is bytes crypto material only without code\n.index is int count of attached crypto material by context (receipts)\n.qb64 is str in Base64 fully qualified with derivation code + crypto mat\n.qb64b is bytes in Base64 fully qualified with derivation code + crypto mat\n.qb2  is bytes in binary with derivation code + crypto material\n.transferable is Boolean, True when transferable derivation code False otherwise\nProperties:\n.text is the Base64 text value, .qb64 with text code and leader removed.\nHidden:\n._pad is method to compute  .pad property\n._code is str value for .code property\n._raw is bytes value for .raw property\n._index is int value for .index property\n._infil is method to compute fully qualified Base64 from .raw and .code\n._exfil is method to extract .code and .raw from fully qualified Base64\nMethods:\n"""'))}d.isMDXComponent=!0}}]);