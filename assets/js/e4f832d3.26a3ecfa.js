"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Air-gapped Environments",l={unversionedId:"extensions/advanced/air-gapped-environments",id:"extensions/advanced/air-gapped-environments",title:"Air-gapped Environments",description:'In order to load an extension within an air-gapped instance of Rancher, you will need to import an Extension Catalog Image to provide the extension assets, which are then served within the "Available" tab of the Extensions page and can be installed as normal.',source:"@site/docs/extensions/advanced/air-gapped-environments.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/air-gapped-environments",permalink:"/dashboard/extensions/advanced/air-gapped-environments",draft:!1,tags:[],version:"current",lastUpdatedAt:1688453507,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Common Types",permalink:"/dashboard/extensions/api/common"},next:{title:"Localization",permalink:"/dashboard/extensions/advanced/localization"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building the Extension Catalog Image",id:"building-the-extension-catalog-image",level:2},{value:"Github Workflow",id:"github-workflow",level:3},{value:"Manual Build",id:"manual-build",level:3},{value:"Importing the Extension Catalog Image",id:"importing-the-extension-catalog-image",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"air-gapped-environments"},"Air-gapped Environments"),(0,i.kt)("p",null,'In order to load an extension within an air-gapped instance of Rancher, you will need to import an Extension Catalog Image to provide the extension assets, which are then served within the "Available" tab of the Extensions page and can be installed as normal.'),(0,i.kt)("p",null,"The Extension Catalog Image (ECI) contains the assets of each extension which give the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-operator"},"ui-plugin-operator")," the necessary files to load an extension into the Rancher Dashboard. "),(0,i.kt)("p",null,"We have implemented an action within the Extensions page to take care of the heavy lifting for you by creating the necessary resources."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The ECI is comprised of a hardened ",(0,i.kt)("a",{parentName:"p",href:"https://registry.suse.com/bci/bci-base-15sp4/index.html"},"SLE BCI")," image with an ",(0,i.kt)("a",{parentName:"p",href:"https://nginx.org/en/"},"NGINX")," service which supplies the minified extension files.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Loading an extension into an air-gapped envrionment requires a few prerequisites, namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Extension needs to be bundled into the ECI"),(0,i.kt)("li",{parentName:"ul"},"A registry to house the ECI"),(0,i.kt)("li",{parentName:"ul"},"Access to this registry within the air-gapped Cluster")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Any Secrets that are required to authenticate with the registry ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MUST"))," be created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-ui-plugin-system")," namespace. ")),(0,i.kt)("h2",{id:"building-the-extension-catalog-image"},"Building the Extension Catalog Image"),(0,i.kt)("p",null,"Currently there are two options available for building your extension into an ECI. You can use the predefined Github Workflow, if you plan on housing the extension within a Github repository, or you can manually build and publish your extension to a specified registry."),(0,i.kt)("p",null,"In either case, the ECI will need to be published to a registry that is accessible from the air-gapped cluster."),(0,i.kt)("h3",{id:"github-workflow"},"Github Workflow"),(0,i.kt)("p",null,"If using the provided Github workflow with your extension, the extension will be built and published for each package version to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"Github Container Registry")," (",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr"),")."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: The extension image that is built will contain Helm charts for each subsequent package (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"./pkg/<EXTENSION_NAME>"),"). In order to release a new version of a package, the root extension will need to be published with an updated tag within ",(0,i.kt)("inlineCode",{parentName:"p"},"./package.json"),".")),(0,i.kt)("p",null,"Once the extension has been published you will then be able to pull, tag, and push the ECI into your desired registry."),(0,i.kt)("p",null,"From a machine that has access to both the desired registry and ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io"),", pull the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull ghcr.io/<ORGANIZATION>/ui-extension-<REPO>:<TAG>\n")),(0,i.kt)("p",null,"Then re-tag and push the image to your registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker tag ghcr.io/<ORGANIZATION>/ui-extension-<REPO>:<TAG> <MY_REGISTRY>/<ORGANIZATION>/ui-extension-<REPO>:TAG\ndocker push <MY_REGISTRY>/<ORGANIZATION>/ui-extension-<REPO>:TAG\n")),(0,i.kt)("p",null,"Proceed to the ",(0,i.kt)("a",{parentName:"p",href:"#importing-the-catalog-image"},"Importing the Extension Catalog Image")," step."),(0,i.kt)("h3",{id:"manual-build"},"Manual Build"),(0,i.kt)("p",null,"The ECI can also be built manually using the ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn publish-pkgs -c")," command."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Building Prerequisites"))),(0,i.kt)("p",null,"This method requires a few tools to be installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/"},"make")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"nodejs")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"12.0.0")," < ",(0,i.kt)("inlineCode",{parentName:"li"},"17.0.0")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"yarn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikefarah/yq/#install"},"yq")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"4.0.0")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"3.0.0")," )")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Running the Build Manually"))),(0,i.kt)("p",null,"To build, simply run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn publish-pkgs -cp -r <REGISTRY> -o <ORGANIZATION>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-c")," - Specifies the script to build the extension as a container image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-p")," - To push the built image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-r")," - Specifies the Container Registry"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o")," - Specifies the Organization name for the image (defaults to 'rancher')")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Additional Script Usage"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Usage: yarn publish-pkgs [<options>] [plugins]\n options:\n  -p           Push container images on build\n  -f           Force building the chart even if it already exists\n  -r <name>    Specify destination container registry for built images\n  -o <name>    Specify destination container registry organization for built images\n  -i <prefix>  Specify prefix for the built container image (default: 'ui-extension-')\n  -c           Build as a container image rather than publishing to Github\n  -s <repo>    Specify destination GitHub repository (org/name) - defaults to the git origin (implies -g)\n  -b <branch>  Specify destination GitHub branch (implies -g)\n")),(0,i.kt)("h2",{id:"importing-the-extension-catalog-image"},"Importing the Extension Catalog Image"),(0,i.kt)("p",null,"Importing the ECI is fairly straightforward, you will need the Catalog Image Reference from your registry and any secrets necessary to authenticate with the registry."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Any Secrets that are required to authenticate with the registry ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MUST"))," be created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-ui-plugin-system")," namespace. ")),(0,i.kt)("p",null,'Within the Extensions page, select "Manage Extension Catalog" from the action menu in the top right. From here you will be able to see any Extension Catalog Images loaded previously along with their state, name, image used for the deployment, and cache state (used by the ',(0,i.kt)("inlineCode",{parentName:"p"},"ui-plugin-operator"),")."),(0,i.kt)("p",null,'To import an ECI, click on the "Import Extension Catalog" button:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manage Catalog Action",src:n(4810).Z,width:"1135",height:"350"})),(0,i.kt)("p",null,"Fill out the form within the modal with your Catalog Reference Image URI (for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"<MY_REGISTRY>/<ORGANIZATION>/ui-extension-<REPO>:TAG"),") and any secrets necessary to pull the image."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If the registry is not supplied within the URI, it will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"hub.docker.io"),".")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If the version of the image is omitted, this will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"latest"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extension Catalog Import",src:n(2157).Z,width:"1135",height:"750"})),(0,i.kt)("p",null,"The resources mentioned ",(0,i.kt)("a",{parentName:"p",href:"#air-gapped-environments"},"above"),' will be created. You can navigate back to the main Extensions page by selecting breadcrumb link for "Extension" button from the header title in the top left of the screen.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigate Charts List",src:n(2749).Z,width:"1137",height:"333"})),(0,i.kt)("p",null,'Within the "Available", tab the newly imported extensions are now available to be installed normally.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Available Charts",src:n(9979).Z,width:"1158",height:"441"})))}c.isMDXComponent=!0},9979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/available-charts-06b108004dcbbc4e5805dbe241f21f7b.png"},2157:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-catalog-dialog-bb20a1729e655d9e86c3e405db961d5a.png"},4810:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/manage-catalog-action-d4275b4446f422b1978ea0794f16c5fe.png"},2749:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/navigate-chart-list-fe685d9198d763327979c45973645043.png"}}]);