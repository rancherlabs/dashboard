"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2976],{5788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>m});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||o;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(5072),r=(t(1504),t(5788));const o={},i="Custom page",l={unversionedId:"extensions/api/nav/custom-page",id:"extensions/api/nav/custom-page",title:"Custom page",description:"Defining a custom page for an Extension (virtualType)",source:"@site/docs/extensions/api/nav/custom-page.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/custom-page",permalink:"/dashboard/extensions/api/nav/custom-page",draft:!1,tags:[],version:"current",lastUpdatedAt:1706819655,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Products",permalink:"/dashboard/extensions/api/nav/products"},next:{title:"Resource page",permalink:"/dashboard/extensions/api/nav/resource-page"}},p={},u=[{value:"Defining a custom page for an Extension (virtualType)",id:"defining-a-custom-page-for-an-extension-virtualtype",level:2}],s={toc:u},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"custom-page"},"Custom page"),(0,r.yg)("h2",{id:"defining-a-custom-page-for-an-extension-virtualtype"},"Defining a custom page for an Extension (virtualType)"),(0,r.yg)("p",null,"As we've seen from the previous chapter, a developer can register a top-level product with the ",(0,r.yg)("inlineCode",{parentName:"p"},"product")," function. How about adding a custom page to your extension product? To do that, we can use the function ",(0,r.yg)("inlineCode",{parentName:"p"},"virtualType")," coming from ",(0,r.yg)("inlineCode",{parentName:"p"},"$plugin.DSL"),". As an example usage of that method, one could do the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const CUSTOM_PAGE_NAME = 'page1';\n  \n  const { \n    product,\n    virtualType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: { // this is the entry route for the Extension product, which is registered below\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n\n  // => => => creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n}\n")),(0,r.yg)("p",null,"With the route definition in the router (check the ",(0,r.yg)("a",{parentName:"p",href:"#routes-definition-for-an-extension-as-a-top-level-product"},"Extension Routing"),') chapter, you can define which Vue component will be loaded as a custom page. That will act as a "blank canvas" to render anything you want.'),(0,r.yg)("p",null,"The acceptable parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"virtualType")," function are defined here:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"name")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Page name (should be unique)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"label")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"side-menu label for this page")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"labelKey")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},'Same as "label" but allows for translation. Will superseed "label"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"icon")),(0,r.yg)("td",{parentName:"tr",align:null},"[String"),(0,r.yg)("td",{parentName:"tr",align:null},"icon name (based on ",(0,r.yg)("a",{parentName:"td",href:"https://rancher.github.io/icons/"},"rancher icons"),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"weight")),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"Side menu ordering (bigger number on top)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"route")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,r.yg)("td",{parentName:"tr",align:null},"Route for this custom page")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: If no ",(0,r.yg)("inlineCode",{parentName:"p"},"label")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"labelKey")," is set, then the side-menu label will be the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field")))}c.isMDXComponent=!0}}]);