"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[70944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,y=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var n=r(87462),a=r(67294),i=r(3905);const o=["https://github.com/WebOfTrust/keripy","https://github.com/WebOfTrust/cardano-backer","https://github.com/WebOfTrust/cesride","https://github.com/WebOfTrust/keria","https://github.com/WebOfTrust/signify-ts","https://github.com/WebOfTrust/signifypy"],s=async e=>{const t=await fetch("https://dwarshuis.com/various/kerisse/proxy/proxy-curl.php?url="+e);return t.ok?await t.text():"Failed to fetch data"},c=e=>{if("undefined"!=typeof window){return(new DOMParser).parseFromString(e,"text/html")}},l=async e=>{for(const t of o){const r=await s(t+"/commits"),n=c(r),a=await s(t+"/issues"),i=c(a),o=t.split("/"),l=o[3],u=o[4];if("undefined"!=typeof window&&"undefined"!=typeof document){const t=n.querySelector(".TimelineItem"),r=t?t.querySelector("h2").innerText.trim():"",a=t.querySelector(".Details p a.Link--primary"),o=a?a.getAttribute("href"):"",s=a?a.innerText:"",c=t.querySelector(".commit-author"),m=c?c.innerText:"",p=i.querySelector('div[aria-label="Issues"] .Link--primary'),f=p?p.getAttribute("href"):"",y=p?p.innerText:"";e((e=>[...e,{owner:l,repoName:u,commitDate:r,commitLink:o,commitMessage:s,commitAuthor:m,issueLink:f,issueMessage:y}]))}}};l();const u=e=>{let{outputData:t}=e;return a.createElement("ul",{className:"list-group list-group-flush"},t.map(((e,t)=>a.createElement("li",{key:t,className:"list-group-item "},a.createElement("h3",{key:t},e.owner," \u2013 ",e.repoName),a.createElement("h4",{class:"fs-6"},a.createElement("mark",null,e.commitDate)),a.createElement("p",null,a.createElement("a",{target:"_blank",rel:"noopener",href:`https://github.com/${e.commitLink}`},e.commitMessage," (",e.commitAuthor,")")),e.issueMessage&&a.createElement(a.Fragment,null,a.createElement("h4",{class:"fs-6"},a.createElement("mark",null,"Latest issue")),a.createElement("p",null,a.createElement("a",{target:"_blank",rel:"noopener",href:`https://github.com/${e.issueLink}`},e.issueMessage)))))))},m=()=>{const[e,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{await l(t)})()}),[]),a.createElement(u,{outputData:e})},p=()=>a.createElement("div",{className:"realtime"},a.createElement(m,null)),f={},y="Github latest activity",b={unversionedId:"github-latest-activity/index",id:"github-latest-activity/index",title:"Github latest activity",description:"Information fetched on page load. Info about a selection of repo's.",source:"@site/docs/github-latest-activity/index.mdx",sourceDirName:"github-latest-activity",slug:"/github-latest-activity/",permalink:"/WOT-terms/docs/github-latest-activity/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebOfTrust-keria-main-docs-protocol",permalink:"/WOT-terms/docs/carbon-copies/WebOfTrust-keria-main-docs-protocol"},next:{title:"Various external glossaries",permalink:"/WOT-terms/docs/category/various-external-glossaries"}},d={},h=[],g={toc:h},v="wrapper";function O(e){let{components:t,...r}=e;return(0,i.kt)(v,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-latest-activity"},"Github latest activity"),(0,i.kt)("p",null,"Information fetched on page load. Info about a selection of repo's."),(0,i.kt)(p,{mdxType:"RealtimeScraper"}))}O.isMDXComponent=!0}}]);