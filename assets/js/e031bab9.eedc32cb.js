"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"terms/glossary/parside",id:"terms/glossary/parside",title:"parside",description:"Definition",source:"@site/docs/terms/glossary/parside.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/parside",permalink:"/WOT-terms/docs/terms/glossary/parside",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pad",permalink:"/WOT-terms/docs/terms/glossary/pad"},next:{title:"partial-pre-rotation",permalink:"/WOT-terms/docs/terms/glossary/partial-pre-rotation"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Background",id:"background",level:2},{value:"Design ideas Feb 2023",id:"design-ideas-feb-2023",level:2},{value:"Related",id:"related",level:2},{value:"Working",id:"working",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"is a bunch of generators. Responsible for pulling out a stream of bits from a CESR stream and parse it.\nSam Smith suggested for Parside to not iterate stuff, only parse chunks delimited by the ",(0,n.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/count-code"},"count code"),". (Source Cesride: meeting Feb 2 2023)"),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"CESR primitives are self-framing (which is relatively new). That means that you can construct your parser modually. We can dispatch the parsing of the stream to an entity. The ",(0,n.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/strip-parameter"},"strip parameter")," tells us what part will be parsed be which code."),(0,n.kt)("h2",{id:"design-ideas-feb-2023"},"Design ideas Feb 2023"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Parside should be concerned with parsing group codes, ",(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/cesride"},"cesride")," concerned with parsing primitives."),(0,n.kt)("li",{parentName:"ol"},"Parside will contain a ",(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/count-code"},"count code")," at the beginning of the stream, each cesr primitive is self framing, JSON is not; hence the ",(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/version-string"},"Version string"),"."),(0,n.kt)("li",{parentName:"ol"},'Parside could "load" the tables it supports for dynamically loaded code tables'),(0,n.kt)("li",{parentName:"ol"},"Parside could look at how/if we can return an interator/generator")),(0,n.kt)("p",null,"Source Cesride: meeting Feb 2 2023 notes"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Cesride parses the CESR primitives")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Parside parses the ",(0,n.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/group-code"},"group codes"))),(0,n.kt)("p",null,"| TBW |"),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/version-code"},"Version code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/version-string"},"Version string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/strip-parameter"},"Strip parameter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/cesride"},"Cesride")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/WOT-terms/docs/terms/glossary/sniffer"},"Sniffer"))),(0,n.kt)("p",null,"Source Cesride: meeting Feb 2 2023"),(0,n.kt)("h2",{id:"working"},"Working"),(0,n.kt)("p",null,"Parside should start with a default version for CESR. Anytime it gets a version count code it changes the version and also elevates to the top level (the version count code must appear at the top level). The version count code determines which CESR table to load when parsing the stream. The ",(0,n.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/sniffer"},"sniffer")," detects if CESR binary, CESR Text, JSON, CBOR, MGPK. If any of the last three then the parser regexes to find the version string inside the JSON, CBOR, and MGPK and from the version string extracts the number of characters/bytes that is the length of the JSON, CBOR, or MGPK. The parser then resumes sniffing. When the sniff is CESR then when at the top level looks for the CESR version count code or any other count codes. The interpretation of the count codes is dependent on the version count code that is why the Parser has to start with a default version count code because the stream may not begin with a version code or may have resumed after a cold restart. When a count code is parsed then the parser may descend into parsing whats inside group for a group count code which may recursively nest down a ways.\\\nSource Slack Cesride thread: Feb 2 2023"))}u.isMDXComponent=!0}}]);