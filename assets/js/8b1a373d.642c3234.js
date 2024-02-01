"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[224],{5788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>h});var o=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(5072),r=(t(1504),t(5788));const a={},i="Machine Config",l={unversionedId:"extensions/usecases/node-driver/machine-config",id:"extensions/usecases/node-driver/machine-config",title:"Machine Config",description:"Similar to the Cloud Credential component, the Machine Config component should display the controls for the fields of the node driver that are relevant to the configuration of the machine to be created.  The machine pool name, saving, etc is handled outside of the component. You can use fetch() to load data from the provider's API (e.g. list of regions or instance types) as needed.",source:"@site/docs/extensions/usecases/node-driver/machine-config.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/machine-config",permalink:"/dashboard/extensions/usecases/node-driver/machine-config",draft:!1,tags:[],version:"current",lastUpdatedAt:1706819655,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cloud Credential",permalink:"/dashboard/extensions/usecases/node-driver/cloud-credential"},next:{title:"Advanced",permalink:"/dashboard/extensions/usecases/node-driver/advanced"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,o.c)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"machine-config"},"Machine Config"),(0,r.yg)("p",null,"Similar to the Cloud Credential component, the Machine Config component should display the controls for the fields of the node driver that are relevant to the configuration of the machine to be created.  The machine pool name, saving, etc is handled outside of the component. You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"fetch()")," to load data from the provider's API (e.g. list of regions or instance types) as needed."),(0,r.yg)("p",null,"A machine config component for a given driver will be automatically registered when placed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"machine-config")," folder and named with the name of the driver (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"openstack.vue"),")."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: Your extension's entry file must call ",(0,r.yg)("inlineCode",{parentName:"p"},"importTypes")," for the automatic registration to work")),(0,r.yg)("p",null,"The selected cloud credential ID is available as a ",(0,r.yg)("inlineCode",{parentName:"p"},"credentialId")," prop.  You will always know that ID, and can use it to make API calls, but ",(0,r.yg)("strong",{parentName:"p"},"should not")," rely on being able to actually retrieve the cloud credential model corresponding to it.  Users with lesser permissions may be able to edit a cluster, but not have permission to see the credential being used to manage it."),(0,r.yg)("p",null,"Your component can emit a ",(0,r.yg)("inlineCode",{parentName:"p"},"validationChanged")," event every time a value changes to report validation status of the machine configuration."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," property of the component will be bound to the machine configuration resource. The fields available on that resource are determined by the corresponding node driver."),(0,r.yg)("p",null,"Other properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"busy")," - Boolean to indicate if the controls should be disabled while the UI is busy (typically during a save operation)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"mode")," - String mode - can be ",(0,r.yg)("inlineCode",{parentName:"li"},"view"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"edit")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"create"),". Controls should be disabled when in view mode. Controls should be populated from existing values for the view and edit modes.")),(0,r.yg)("p",null,"Example Machine Config UI:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example Machine Config UI!",src:t(1380).c,width:"1054",height:"671"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: The UI provided by the custom component is shown in the blue box. The full Machine Pool Ui is shown to give context.")))}u.isMDXComponent=!0},1380:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/openstack-machine-config-4ca28a2bffe44849e4db14fa2e78d6fc.png"}}]);