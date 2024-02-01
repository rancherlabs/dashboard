"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[3128],{5788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>h});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(5072),o=(n(1504),n(5788));const i={},a="Moving Existing Code",l={unversionedId:"extensions/moving-existing-code",id:"extensions/moving-existing-code",title:"Moving Existing Code",description:"During the transition to the new folder structure in 2.6.5 required by the extension work ...",source:"@site/docs/extensions/moving-existing-code.md",sourceDirName:"extensions",slug:"/extensions/moving-existing-code",permalink:"/dashboard/extensions/moving-existing-code",draft:!1,tags:[],version:"current",lastUpdatedAt:1706819655,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{}},s={},p=[{value:"Step 1",id:"step-1",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"moving-existing-code"},"Moving Existing Code"),(0,o.yg)("p",null,"During the transition to the new folder structure in 2.6.5 required by the extension work ..."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Run the script ",(0,o.yg)("inlineCode",{parentName:"li"},"./scripts/rejig")," to move folders to their new location in the ",(0,o.yg)("inlineCode",{parentName:"li"},"shell")," folder and update the appropriate import statements\nUse this to convert older PRs to the new format"),(0,o.yg)("li",{parentName:"ul"},"Run the script ",(0,o.yg)("inlineCode",{parentName:"li"},"./scripts/rejig -d")," to move folders to their old location and update imports again\nUse this to convert newer branches to the old format (possibly useful for branches)",(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"IMPORTANT - This script contains a ",(0,o.yg)("inlineCode",{parentName:"p"},"git reset --hard"))))),(0,o.yg)("h2",{id:"step-1"},"Step 1"),(0,o.yg)("p",null,"The basis of this step 1 is to move the majority of the code under the ",(0,o.yg)("inlineCode",{parentName:"p"},"shell")," folder. Additionally, the top-level ",(0,o.yg)("inlineCode",{parentName:"p"},"nuxt.config.js")," is updated\nto extend a base version now located within the ",(0,o.yg)("inlineCode",{parentName:"p"},"shell")," folder. This includes updated nuxt and webpack configuration to get everything working with the\nmoved folders."),(0,o.yg)("p",null,"Note that this represents the minimum to get things working - the next step would be to move the Rancher and Harvester code out from the ",(0,o.yg)("inlineCode",{parentName:"p"},"shell")," folder into a number\nof UI Package folders under the top-level ",(0,o.yg)("inlineCode",{parentName:"p"},"pkg")," folder. This would then reduce the scope of what's in the ",(0,o.yg)("inlineCode",{parentName:"p"},"shell")," folder to be the core common UI that we would\nwant to share across our UIs. So, bear in mind, that ultimately, we wouldn't just be moving all of the code under ",(0,o.yg)("inlineCode",{parentName:"p"},"shell"),"."),(0,o.yg)("p",null,"The rework supports a number of use cases, which we will talk through below."))}u.isMDXComponent=!0}}]);