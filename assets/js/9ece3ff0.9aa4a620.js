"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[14783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={sidebar:"HowWeDidSidebar"},s="Docusaurus process",a={unversionedId:"How we did/Docusaurus-process",id:"How we did/Docusaurus-process",title:"Docusaurus process",description:"",source:"@site/docs/How we did/Docusaurus-process.md",sourceDirName:"How we did",slug:"/How we did/Docusaurus-process",permalink:"/WOT-terms/docs/How we did/Docusaurus-process",draft:!1,tags:[],version:"current",frontMatter:{sidebar:"HowWeDidSidebar"},sidebar:"HowWeDidSidebar",previous:{title:"Chatbots",permalink:"/WOT-terms/docs/How we did/Chatbots"},next:{title:"Fill out terms in the WebofTrust wiki",permalink:"/WOT-terms/docs/How we did/fill-out-terms-toip-wiki"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docusaurus-process"},"Docusaurus process"),(0,o.kt)("mermaid",{value:'\nflowchart TD\n\nsubgraph server-side\nStart\n\n--\x3e A["Import Google Sheet data\\ninto .md file (Node.js)"]\n\nA --\x3e B["Run Docsaurus Build"]\n\nB --\x3e C["Deploy to GitHub Pages"]\nend\n\nsubgraph client-side-JavaScript-plugins\ncrossLinks["Add functionality:\\nCross links"]\n--\x3e insertVideo\n--\x3e insertSubtitles["Insert Subtitles"]\n--\x3e dynamicTables["Add functionality:\\nDynamic Tables"]\n--\x3e elementGoFullScreen["Add functionality:\\nmake overview table go full screen"]\n--\x3e writeChanges["Add functionality:\\nwrite changes to Overview"]\n--\x3e horizontalScrollHint["Add functionality:\\nHorizontal Scroll Hint"]\n--\x3e showDefinitionsOnClick["Add functionality:\\nShow inline definitions On Click"]\n--\x3e addDataTypes["Add knowledge level and\\ntype category as html attrib\\nto &lt;article&gt;"]\n--\x3e showGPTsummary["Add functionality:\\nShow GPT summary"]\n--\x3e PageReady["Page ready to view"]\n--\x3e End\n\n\nend\n\nserver-side --\x3e client-side-JavaScript-plugins\n\n'}))}p.isMDXComponent=!0}}]);