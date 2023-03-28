"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[166],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},l="Miscellaneous",i={unversionedId:"extensions/advanced",id:"extensions/advanced",title:"Miscellaneous",description:"Translations and Localizations",source:"@site/docs/extensions/advanced.md",sourceDirName:"extensions",slug:"/extensions/advanced",permalink:"/dashboard/extensions/advanced",draft:!1,tags:[],version:"current",lastUpdatedAt:1680019731,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"addTableColumn",permalink:"/dashboard/extensions/extension-api-methods/add-table-column"},next:{title:"Storybook",permalink:"/dashboard/storybook"}},s={},c=[{value:"Translations and Localizations",id:"translations-and-localizations",level:2},{value:"Using yarn link",id:"using-yarn-link",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("h2",{id:"translations-and-localizations"},"Translations and Localizations"),(0,r.kt)("p",null,"Extensive documentation on translations and localizations can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/dashboard/code-base-works/on-screen-text-and-translations"},"On-screen Text and Translations")," section. Apart from directory location, the same rules for Rancher Dashboard apply for extensions."),(0,r.kt)("p",null,"Generating localizations in extensions is done per package via a translation YAML file found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./pkg/<extension-name>/l10n")," directory. If a translation is not included in the user's selected language, it will fall back to English."),(0,r.kt)("h2",{id:"using-yarn-link"},"Using yarn link"),(0,r.kt)("p",null,"You may want to develop your extension with the very latest dashboard code rather than the code published in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@rancher/shell")," npm module."),(0,r.kt)("p",null,"Suppose we are creating a new UI - it will include the Rancher Shell code via its npm package, so if we needed to make changes to the shell, we'd have to make those changes, publish them as a new version of the package and update our UI to use it."),(0,r.kt)("p",null,"We can ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn link")," to improve this workflow."),(0,r.kt)("p",null,"With the Dashboard repository checked out, we can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd shell\nyarn link\n")),(0,r.kt)("p",null,"Then, in our other app's folder, we can:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn link @rancher/shell\n")),(0,r.kt)("p",null,"This will link the package used by the app to the dashboard source code. We can make changes to the shell code in the Rancher Dashboard repository and the separate app will hot-reload."),(0,r.kt)("p",null,"This allows us to develop a new UI Application and be able to make changes to the Shell - in this use case, we're working against two git repositories, so we need to ensure we commit changes accordingly."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: This feature is most useful for dashboard developers - generally we encourage the use of the published shell module")))}p.isMDXComponent=!0}}]);