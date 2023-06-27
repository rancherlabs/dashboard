"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[3039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="Quickstart",l={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quickstart",description:"Running for Development",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/dashboard/getting-started/quickstart",draft:!1,tags:[],version:"current",lastUpdatedAt:1687893635,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Developer Documentation",permalink:"/dashboard/home"},next:{title:"Concepts",permalink:"/dashboard/getting-started/concepts"}},s={},d=[{value:"Running for Development",id:"running-for-development",level:2},{value:"Other Building Modes",id:"other-building-modes",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("h2",{id:"running-for-development"},"Running for Development"),(0,o.kt)("p",null,"To get started running the UI for development:"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 16 (later versions are currently not supported)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"yarn:\n",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --global yarn")))),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\nyarn install\n\n# For development, serve with hot reload at https://localhost:8005\n# using the endpoint for your Rancher API\nAPI=https://your-rancher yarn dev\n# or put the variable into a .env file\n# Goto https://localhost:8005\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," is the URL of a deployed Rancher environment (backend API)")),(0,o.kt)("h2",{id:"other-building-modes"},"Other Building Modes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This documentation is out of date")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Build for standalone use within Rancher\n# (These are done on commit/tag via Drone)\n./scripts/build-embedded # for embedding into rancher builds\n./scripts/build-hosted # for hosting on a static file webserver and pointing Rancher\'s ui-dashboard-index at it\n# Output in dist/\n\n# Build and run with server-side-rendering\n# (This method and SSR are not currently used, but should be maintained for future)\nyarn build\nyarn start\n\n# Develop via Docker instead of a local nodejs\ndocker build -f Dockerfile.dev -t dashboard:dev .\ndocker run -v $(pwd):/src \\\n  -v dashboard_node:/src/node_modules \\\n  -p 8005:8005 \\\n  -e API=https://your-rancher \\\n  dashboard:dev\n# The first time will take *forever* installing node_modules into the volume; it will be faster next time.\n# Goto https://localhost:8005\n\n# Developing against a standalone "Steve" API on a Mac\ngit clone https://github.com/rancher/steve.git\ncd steve\nmake run-host\n\ncd dashboard\ndocker build -f Dockerfile.dev -t rancher/dashboard:dev .\ndocker run -v $(pwd):/src \\\n  -v dashboard_node:/src/node_modules \\\n  -p 8005:8005 \\\n  -e API=http://172.17.0.1:8989 \\\n  rancher/dashboard:dev\n# The first time will take *forever* installing node_modules into the volume; it will be faster next time.\n# Goto https://localhost:8005\n')))}p.isMDXComponent=!0}}]);