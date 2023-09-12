"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[7913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},s="Install this project",o={unversionedId:"how-we-did/install",id:"how-we-did/install",title:"Install this project",description:"This repo is a documentation website with a Typesense search engine and a scraper engine that collects documentation.",source:"@site/docs/how-we-did/install.md",sourceDirName:"how-we-did",slug:"/how-we-did/install",permalink:"/WOT-terms/docs/how-we-did/install",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WOT-terms home page texts sources",permalink:"/WOT-terms/docs/how-we-did/homepage-text-altering"},next:{title:"WOT How we did's",permalink:"/WOT-terms/docs/how-we-did/intro"}},l={},p=[{value:"Run website",id:"run-website",level:2},{value:"Run Scrapers",id:"run-scrapers",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-this-project"},"Install this project"),(0,a.kt)("p",null,"This repo is a documentation website with a Typesense search engine and a scraper engine that collects documentation."),(0,a.kt)("p",null,"This website is built in Docusaurus ( ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"https://docusaurus.io")," ). The Typesense search engine is integrated in Docusaurus. Also the scraper engine code is inside the Docusaurus code."),(0,a.kt)("p",null,"This repo has three parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docusaurus documentation")," site"),(0,a.kt)("li",{parentName:"ul"},"Typesense ",(0,a.kt)("strong",{parentName:"li"},"search engine")),(0,a.kt)("li",{parentName:"ul"},"Chatbot (under construction)")),(0,a.kt)("h2",{id:"run-website"},"Run website"),(0,a.kt)("p",null,"What should you do to install this project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone url"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," based on ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," and secret info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now you can run a local version of the ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus website"),":\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ npx docusaurus start"),". The search engine also works now."))),(0,a.kt)("h2",{id:"run-scrapers"},"Run Scrapers"),(0,a.kt)("p",null,"On your OS install (use a package manager e.g., apt, yum, brew, etc.):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jq")," (",(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"https://stedolan.github.io/jq/"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curl")," (",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/"},"https://curl.se/"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ImageMagick")," (",(0,a.kt)("a",{parentName:"li",href:"https://imagemagick.org"},"https://imagemagick.org"),")")),(0,a.kt)("p",null,"Now you can refresh the ",(0,a.kt)("strong",{parentName:"p"},"search index")," if needed:\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ sh search-index-typesense/main.sh")),(0,a.kt)("p",null,"This takes about half an hour."),(0,a.kt)("p",null,"Instructions on how to use createSitemap.js:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/blob/main/search-index-typesense/createSitemap.js"},"https://github.com/WebOfTrust/WOT-terms/blob/main/search-index-typesense/createSitemap.js")))}m.isMDXComponent=!0}}]);