"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[9608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Resource page",l={unversionedId:"extensions/api/nav/resource-page",id:"extensions/api/nav/resource-page",title:"Resource page",description:"Defining a kubernetes resource as a page for an Extension (configureType)",source:"@site/docs/extensions/api/nav/resource-page.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/resource-page",permalink:"/dashboard/extensions/api/nav/resource-page",draft:!1,tags:[],version:"current",lastUpdatedAt:1699882484,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Custom page",permalink:"/dashboard/extensions/api/nav/custom-page"},next:{title:"Side menu",permalink:"/dashboard/extensions/api/nav/side-menu"}},s={},u=[{value:"Defining a kubernetes resource as a page for an Extension (configureType)",id:"defining-a-kubernetes-resource-as-a-page-for-an-extension-configuretype",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resource-page"},"Resource page"),(0,r.kt)("h2",{id:"defining-a-kubernetes-resource-as-a-page-for-an-extension-configuretype"},"Defining a kubernetes resource as a page for an Extension (configureType)"),(0,r.kt)("p",null,"One of the most common view types in Rancher Dashboard is the list view for a kubernetes resource. What if you wanted to include a similiar view on your Extension product for a given resource? For that we can use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"configureType")," coming from ",(0,r.kt)("inlineCode",{parentName:"p"},"$plugin.DSL"),". As an example usage of that method, one could do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  // example of using an existing k8s resource as a page\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  \n  const { \n    product,\n    configureType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  // => => => defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: We strongly encourange the usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"customRoute")," to make sure we follow the same route structure as the other routes on the same Extension product. Check pattern ",(0,r.kt)("a",{parentName:"p",href:"#overview-on-routing-structure-for-a-top-level-extension-product"},"here"),".")),(0,r.kt)("p",null,"The acceptable parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"configureType")," function are defined here:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"displayName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Display name for the given resource. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"YOUR_K8S_RESOURCE_NAME")," (based on example) if you haven't defined a ",(0,r.kt)("inlineCode",{parentName:"td"},"displayName"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isCreatable")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If the 'create' button is available on the list view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isEditable")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If a resource instance is editable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isRemovable")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If a resource instance is deletable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"showAge")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If the 'age' column is available on the list view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"showState")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If the 'state' column is available on the list view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"canYaml")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If the k8s resource can be edited/created via YAML editor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customRoute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,r.kt)("td",{parentName:"tr",align:null},"Route for this resource page")))))}d.isMDXComponent=!0}}]);