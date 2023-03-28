"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Developer Documentation",c={unversionedId:"home",id:"home",title:"Developer Documentation",description:"Welcome to the Rancher Dashboard Developer Documentation.",source:"@site/docs/home.md",sourceDirName:".",slug:"/home",permalink:"/dashboard/home",draft:!1,tags:[],version:"current",lastUpdatedAt:1680019731,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"mainSidebar",next:{title:"Quickstart",permalink:"/dashboard/getting-started/quickstart"}},s={},l=[{value:"How this Documentation is Organised",id:"how-this-documentation-is-organised",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-documentation"},"Developer Documentation"),(0,o.kt)("p",null,"Welcome to the Rancher Dashboard Developer Documentation."),(0,o.kt)("p",null,"Rancher Dashboard is the extensible UI that ships a part of the Open-Source ",(0,o.kt)("a",{parentName:"p",href:"https://www.rancher.com"},"Rancher platform"),"."),(0,o.kt)("p",null,"This documentation is intended to help developers contribute to the Dashboard UI either directly or through Rancher Extensions."),(0,o.kt)("h2",{id:"how-this-documentation-is-organised"},"How this Documentation is Organised"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"getting-started/concepts"},"Getting Started")," section documents general concepts, the development environment and provides a walk-through of the Rancher Dashboard UI."),(0,o.kt)("p",null,"Extension developers should head over to the ",(0,o.kt)("a",{parentName:"p",href:"extensions/introduction"},"Extensions")," section and start their journey there."))}u.isMDXComponent=!0}}]);