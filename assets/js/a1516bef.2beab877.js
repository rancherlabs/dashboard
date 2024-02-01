"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4816],{5788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>h});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(5072),a=(n(1504),n(5788));const i={title:"Cluster creation with NetBios compatibile hostnames",description:"Adding NetBios compatibility when creating a cluster",authors:["richa"],tags:["Manager","Windows"]},o=void 0,c={permalink:"/dashboard/blog/2023/04/16/hostname-truncation/hostname-truncation",source:"@site/blog/2023-04-16-hostname-truncation/hostname-truncation.md",title:"Cluster creation with NetBios compatibile hostnames",description:"Adding NetBios compatibility when creating a cluster",date:"2023-04-16T00:00:00.000Z",formattedDate:"April 16, 2023",tags:[{label:"Manager",permalink:"/dashboard/blog/tags/manager"},{label:"Windows",permalink:"/dashboard/blog/tags/windows"}],readingTime:.41,hasTruncateMarker:!1,authors:[{name:"Richa Bisht",title:"UX/UI Design and Development",url:"https://github.com/bisht-richa",imageURL:"https://github.com/bisht-richa.png",key:"richa"}],frontMatter:{title:"Cluster creation with NetBios compatibile hostnames",description:"Adding NetBios compatibility when creating a cluster",authors:["richa"],tags:["Manager","Windows"]},prevItem:{title:"Easily configure and build ISOs with Elemental",permalink:"/dashboard/blog/2023/04/18/elemental-iso-build/elemental-iso-build"},nextItem:{title:"Inactivity notification and timeout settings in the UI",permalink:"/dashboard/blog/2023/04/13/socket-disconnect-modal"}},s={authorsImageUrls:[void 0]},l=[{value:"Truncating Hostnames",id:"truncating-hostnames",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,r.c)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"truncating-hostnames"},"Truncating Hostnames"),(0,a.yg)("p",null,"Kubernetes allows for 63 character hostnames but for systems running Windows there is a hard limit of 15 characters. We've added a checkbox to the cluster creation UI which will tell the Rancher server to truncate the machine pool hostnames to 15 character when creating a cluster."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Hostname-truncation",src:n(668).c,width:"2356",height:"1070"})),(0,a.yg)("p",null,"Users will be notified when editing clusters or singular machine pools with settings beyond those supported by the UI. Changing the truncation setting after creation is currently not supported."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Hostname-truncation-cluster-warning",src:n(8504).c,width:"2356",height:"1070"})),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Hostname-truncation-machine-pool-warning",src:n(5572).c,width:"2356",height:"1070"})))}d.isMDXComponent=!0},668:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/image-500e624e819d4c056b2784fadbfd4584.png"},8504:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/image1-7d5f52da58afa0d1433837d30cea11ac.png"},5572:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/image2-9ea5df646bfccc6d700203998da8df9c.png"}}]);