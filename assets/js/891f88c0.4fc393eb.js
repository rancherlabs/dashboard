"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Miscellaneous",i={unversionedId:"extensions/advanced",id:"extensions/advanced",title:"Miscellaneous",description:"Using yarn link",source:"@site/docs/extensions/advanced.md",sourceDirName:"extensions",slug:"/extensions/advanced",permalink:"/dashboard/extensions/advanced",draft:!1,tags:[],version:"current",lastUpdatedAt:1679597097,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"addTableColumn",permalink:"/dashboard/extensions/extension-api-methods/add-table-column"},next:{title:"Storybook",permalink:"/dashboard/storybook"}},s={},c=[{value:"Using yarn link",id:"using-yarn-link",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("h2",{id:"using-yarn-link"},"Using yarn link"),(0,a.kt)("p",null,"You may want to develop your extension with the very latest dashboard code rather than the code published in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@rancher/shell")," npm module."),(0,a.kt)("p",null,"Suppose we are creating a new UI - it will include the Rancher Shell code via its npm package, so if we needed to make changes to the shell, we'd have to make those changes, publish them as a new version of the package and update our UI to use it."),(0,a.kt)("p",null,"We can ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn link")," to improve this workflow."),(0,a.kt)("p",null,"With the Dashboard repository checked out, we can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd shell\nyarn link\n")),(0,a.kt)("p",null,"Then, in our other app's folder, we can:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn link @rancher/shell\n")),(0,a.kt)("p",null,"This will link the package used by the app to the dashboard source code. We can make changes to the shell code in the Rancher Dashboard repository and the separate app will hot-reload."),(0,a.kt)("p",null,"This allows us to develop a new UI Application and be able to make changes to the Shell - in this use case, we're working against two git repositories, so we need to ensure we commit changes accordingly."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This feature is most useful for dashboard developers - generally we encourage the use of the published shell module")))}u.isMDXComponent=!0}}]);