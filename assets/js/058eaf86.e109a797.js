"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[62729],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),p=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return s.createElement(l.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},x=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(t),x=r,m=f["".concat(l,".").concat(x)]||f[x]||u[x]||a;return t?s.createElement(m,i(i({ref:n},c),{},{components:t})):s.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=x;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[f]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}x.displayName="MDXCreateElement"},14816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=t(87462),r=(t(67294),t(3905));const a={},i="Create search index",o={unversionedId:"How we did/Create-search-index",id:"How we did/Create-search-index",title:"Create search index",description:"Fetch the content from various websites.",source:"@site/docs/How we did/Create-search-index.md",sourceDirName:"How we did",slug:"/How we did/Create-search-index",permalink:"/WOT-terms/docs/How we did/Create-search-index",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chatbots",permalink:"/WOT-terms/docs/How we did/Chatbots"},next:{title:"Docusaurus process",permalink:"/WOT-terms/docs/How we did/Docusaurus-process"}},l={},p=[{value:"Fetch the content from various websites.",id:"fetch-the-content-from-various-websites",level:2},{value:"Import into Typesense",id:"import-into-typesense",level:2}],c={toc:p},f="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-search-index"},"Create search index"),(0,r.kt)("h2",{id:"fetch-the-content-from-various-websites"},"Fetch the content from various websites."),(0,r.kt)("p",null,"First we have to fetch the content from various websites."),(0,r.kt)("p",null,"We use the Puppeteer library. Puppeteer can also process JavaScript, so dynamically added content, like knowledgelevel will also be collected."),(0,r.kt)("mermaid",{value:"\ngraph TD\n    Start --\x3e\n\n    Scraper[\"Scraper\\n(Node.js)\"]\n    \n    Scraper --\x3e|Multiple domains synchronously|N{\"Site 1: \\n remote sitemap.xml\\nexists?\"}\n    \n    Scraper --\x3e |Multiple domains synchronously|M{\"Site 2: \\n remote sitemap.xml\\nexists?\"} --\x3e ...\n    \n    N --\x3e |Yes| B[Scrape using\\nremote sitemap]\n    \n    N --\x3e |No| O{\"List of urls on\\na page exists?\"} \n    \n    O --\x3e |Yes| P[Scrape using list\\nof urls on a page]\n\n    O --\x3e |No| sdf[\"Create sitemap.xml\\nmanually or via createSitemap.js\"]\n\n    sdf --\x3e fgkwiw[\"Scrape using sitemap.xml manually\\ncreated or via createSitem.js\"]\n\n    assignKeys[\"Assign scrape results to keys in array object\n    [{\n        &nbsp;&nbsp;&nbsp;&nbsp;siteName: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;url: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;content: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;tag: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;firstHeadingBeforeElement: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;timestamp: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl0': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl1': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl2': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;'hierarchy.lvl3': 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;knowledgeLevel: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;type: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;pageTitle: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;imgUrl: 'xxx'\n        &nbsp;&nbsp;&nbsp;&nbsp;imgMeta: 'xxx'\n    }]\n\"]\nstyle assignKeys text-align: left\n    \n    B --\x3e assignKeys\n    fgkwiw --\x3e assignKeys\n    P --\x3e assignKeys\n    \n    assignKeys --\x3e storeJson[\"Store in JSON file\"]\n    storeJson --\x3e storeJsonl[\"Convert to JSONL file\"]\n    storeJsonl --\x3e Import[\"Import in TypeSense\\nindex (via Curl)\"]\n    \n\n\n"}),(0,r.kt)("h2",{id:"import-into-typesense"},"Import into Typesense"),(0,r.kt)("p",null,"In Typesense a \u201cdocument\u201d is what a \u201crecord\u201d is in a database."),(0,r.kt)("p",null,"More info on the Typesense website: ",(0,r.kt)("a",{parentName:"p",href:"https://typesense.org/docs/0.24.1/api/documents.html#index-multiple-documents"},"https://typesense.org/docs/0.24.1/api/documents.html#index-multiple-documents")),(0,r.kt)("p",null,"The documents we want to import have to follow a scheme. The current scheme we use is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "created_at": xxx,\n  "default_sorting_field": "",\n  "enable_nested_fields": false,\n  "fields": [\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "url",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "content",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "timestamp",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "hierarchy.lvl0",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "hierarchy.lvl1",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "hierarchy.lvl2",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "hierarchy.lvl3",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "knowledgeLevel",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "siteName",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "tag",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "type",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "pageTitle",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "firstHeadingBeforeElement",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "source",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "author",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "creationDate",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": true,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "imgUrl",\n      "optional": true,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "imgMeta",\n      "optional": false,\n      "sort": false,\n      "type": "string"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "contentLength",\n      "optional": false,\n      "sort": false,\n      "type": "int32"\n    },\n    {\n      "facet": false,\n      "index": true,\n      "infix": false,\n      "locale": "",\n      "name": "imgMetaLength",\n      "optional": false,\n      "sort": false,\n      "type": "int32"\n    }\n  ],\n  "name": "xxx",\n  "num_documents": xxx,\n  "symbols_to_index": [],\n  "token_separators": []\n}\n')),(0,r.kt)("p",null,"You can create a scheme yourself. For example: the ",(0,r.kt)("inlineCode",{parentName:"p"},"imgMeta")," entry is something we chose to create and it contains text around an image. Later on in your client code, you can retrieve this information."))}u.isMDXComponent=!0}}]);