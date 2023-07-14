"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[11636],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(i),d=n,c=h["".concat(l,".").concat(d)]||h[d]||m[d]||a;return i?r.createElement(c,o(o({ref:t},p),{},{components:i})):r.createElement(c,o({ref:t},p))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},43766:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=i(87462),n=(i(67294),i(3905));const a={sidebar:"HowWeDidSidebar"},o="Embed a Github-hosted image in a Github wiki page",s={unversionedId:"How we did/embed-github-hosted-image-in-github-wiki-page",id:"How we did/embed-github-hosted-image-in-github-wiki-page",title:"Embed a Github-hosted image in a Github wiki page",description:"Issue",source:"@site/docs/How we did/embed-github-hosted-image-in-github-wiki-page.md",sourceDirName:"How we did",slug:"/How we did/embed-github-hosted-image-in-github-wiki-page",permalink:"/WOT-terms/docs/How we did/embed-github-hosted-image-in-github-wiki-page",draft:!1,tags:[],version:"current",frontMatter:{sidebar:"HowWeDidSidebar"},sidebar:"tutorialSidebar",previous:{title:"Create an online table to link terms to resources",permalink:"/WOT-terms/docs/How we did/create-terms-link-table"},next:{title:"Fill out terms in the WebofTrust wiki",permalink:"/WOT-terms/docs/How we did/fill-out-terms-toip-wiki"}},l={},u=[{value:"Issue",id:"issue",level:2},{value:"Confusion",id:"confusion",level:2},{value:"How to do it the right way?",id:"how-to-do-it-the-right-way",level:2},{value:"Resume",id:"resume",level:2}],p={toc:u},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"embed-a-github-hosted-image-in-a-github-wiki-page"},"Embed a Github-hosted image in a Github wiki page"),(0,n.kt)("h2",{id:"issue"},"Issue"),(0,n.kt)("p",null,"The URL of an image hosted on Github is not what it seems."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Example"),"\\\nThe link the image was broken here: ",(0,n.kt)("a",{parentName:"p",href:"https://trustoverip.github.io/acdc/glossary#prefix"},"https://trustoverip.github.io/acdc/glossary#prefix"),', it did not show an image. However, copying the image link results in "',(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png%22"},'https://github.com/WebOfTrust/keri/blob/main/images/prefix.png"'),", and if you paste this link, you do get an image!")),(0,n.kt)("p",null,"What's going on here? And why is this relevant?"),(0,n.kt)("p",null,"We are better off knowing what the difference between 'raw' and 'generated' in Github means, so we can move faster and more be efficient. Read on."),(0,n.kt)("h2",{id:"confusion"},"Confusion"),(0,n.kt)("p",null,"When you check an image into Github, and then browse to the image's path in the repo, github doesn't display the raw picture."),(0,n.kt)("p",null,"Rather, it displays ",(0,n.kt)("strong",{parentName:"p"},"a generated html page")," that includes a bunch of Github framing so you can see the repo, the version history, etc."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Example continued"),"\\\nIf you look at the wiki page for the glossary entry in question: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/acdc/wiki//prefix"},"https://github.com/trustoverip/acdc/wiki//prefix"),", you will see that the URL of the image is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png"},"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png"),".")),(0,n.kt)("p",null,'Even though that URL ends with "png", what it returns is not a raw PNG, but an actual web page.'),(0,n.kt)("h2",{id:"how-to-do-it-the-right-way"},"How to do it the right way?"),(0,n.kt)("p",null,"To embed an image properly in a github wiki page (whether the wiki page is a terms wiki or not), ",(0,n.kt)("strong",{parentName:"p"},"you need to get the URL for the raw image file"),". You can get this done by"),(0,n.kt)("p",null,"THREE different ways!"),(0,n.kt)("p",null,"A."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'clicking the button that says "Download" and'),(0,n.kt)("li",{parentName:"ol"},'right-clicking the image and choose "Copy Image Address"')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example result: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/WebOfTrust/keri/main/images/prefix.png"))),(0,n.kt)("p",null,"OR"),(0,n.kt)("p",null,"B."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'right-clicking on the button that says "Download" and'),(0,n.kt)("li",{parentName:"ol"},'choosing "Copy Link"')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example result: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/WebOfTrust/keri/raw/main/images/prefix.png"))),(0,n.kt)("p",null,"Either way will work. Here's the proof :), that I've deleted already:"),(0,n.kt)("img",{src:"https://hackmd.io/_uploads/B1l9wwX-09.png",width:"700"}),(0,n.kt)("p",null,"C. Just add ",(0,n.kt)("inlineCode",{parentName:"p"},"?raw=true")," to the URL"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"example result: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true"},"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true"))),(0,n.kt)("p",null,"Either way will work. And here is the proof, that I've already deleted of course from the production environment:"),(0,n.kt)("img",{src:"https://hackmd.io/_uploads/S15bh7Z09.png",width:"800"}),(0,n.kt)("h2",{id:"resume"},"Resume"),(0,n.kt)("p",null,"I think this will fix your broken image links and resolve the issue mentioned above."))}m.isMDXComponent=!0}}]);