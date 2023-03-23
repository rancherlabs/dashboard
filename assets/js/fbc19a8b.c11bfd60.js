"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8756:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="Auth Providers",o={unversionedId:"guide/auth-providers",id:"guide/auth-providers",title:"Auth Providers",description:"Github",source:"@site/docs/guide/auth-providers.md",sourceDirName:"guide",slug:"/guide/auth-providers",permalink:"/dashboard/guide/auth-providers",draft:!1,tags:[],version:"current",lastUpdatedAt:1679597097,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Package Management",permalink:"/dashboard/guide/package-management"},next:{title:"API",permalink:"/dashboard/code-base-works/api-resources-and-schemas"}},p={},d=[{value:"Github",id:"github",level:2},{value:"Developer Set up",id:"developer-set-up",level:3},{value:"Multiple GitHub auth configs",id:"multiple-github-auth-configs",level:3},{value:"Keycloak",id:"keycloak",level:2},{value:"Developer Set Up (SAML)",id:"developer-set-up-saml",level:3},{value:"Developer Set Up (OIDC)",id:"developer-set-up-oidc",level:3}],u={toc:d};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"auth-providers"},"Auth Providers"),(0,r.kt)("h2",{id:"github"},"Github"),(0,r.kt)("h3",{id:"developer-set-up"},"Developer Set up"),(0,r.kt)("p",null,"Follow the in-dashboard instructions when configuring a Github auth provider."),(0,r.kt)("h3",{id:"multiple-github-auth-configs"},"Multiple GitHub auth configs"),(0,r.kt)("p",null,"The auth system supports multiple GitHub auth URLs and using the appropriate one based on the Host header that a request comes in on.  Configuring this is not exposed in the regular UI, but is particularly useful for development against a server that already has GitHub setup."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"management.cattle.io.authconfig"),", edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," entry.  Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"hostnameToClientId")," map of Host header value -> GitHub client ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'hostnameToClientId:\n  "localhost:8005": <your GitHub Client ID for localhost:8005>\n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),", namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-global-data"),", edit ",(0,r.kt)("inlineCode",{parentName:"p"},"githubconfig-clientsecret"),".  Add GitHub client ID -> base64-encoded client secret to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"data:\n  clientsecret: <the normal client secret already configured>\n  <your client id>: <your base64-encoded client secret for localhost:8005>\n")),(0,r.kt)("h2",{id:"keycloak"},"Keycloak"),(0,r.kt)("h3",{id:"developer-set-up-saml"},"Developer Set Up (SAML)"),(0,r.kt)("p",null,"Use the steps below to set up a Keycloak instance for dev environments and configure an Auth Provider for it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bring up a local Keycloak instance in docker using the instructions at ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/getting-started/getting-started-docker"},"here"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Ensure that the admin user has a first name, last name and email. These fields are referenced in the Keycloak client's mappers which are then referenced in the Rancher's auth provider config.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Double check the client has the correct checkboxes set, specifically the Mappers ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," entry."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using either the Ember or Vue UI set up the Keycloak auth provider by follow the instructions at ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/keycloak-saml/"},"here")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"givenName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,r.kt)("td",{parentName:"tr",align:null},"member")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entity ID Field"),(0,r.kt)("td",{parentName:"tr",align:null},"Depending on Rancher API Url. For instance when running Dashboard locally ",(0,r.kt)("inlineCode",{parentName:"td"},"https://192.168.86.26:8005/v1-saml/keycloak/saml/metadata"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Depending on Rancher API Url. For instance when running Dashboard locally ",(0,r.kt)("inlineCode",{parentName:"td"},"https://192.168.86.26:8005/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key"),(0,r.kt)("td",{parentName:"tr",align:null},"For key and cert files, export the Client in the Keycloak UI via the ",(0,r.kt)("inlineCode",{parentName:"td"},"Clients")," list page and extract & wrap the ",(0,r.kt)("inlineCode",{parentName:"td"},"saml.signing.certificate")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"saml.signing.private.key")," as cert files (see ",(0,r.kt)("a",{parentName:"td",href:"https://gist.github.com/PhilipSchmid/506b33cd74ddef4064d30fba50635c5b"},"step 5")," for more info).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"See Private Key section above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"For the SAML Metadata, download as per Rancher docs. Be sure to follow the ",(0,r.kt)("inlineCode",{parentName:"td"},"NOTE")," instructions regarding ",(0,r.kt)("inlineCode",{parentName:"td"},"EntitiesDescriptor")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"EntityDescriptor"),". For a better set of instructions see ",(0,r.kt)("a",{parentName:"td",href:"https://gist.github.com/PhilipSchmid/506b33cd74ddef4064d30fba50635c5b"},"step 6"))))))),(0,r.kt)("h3",{id:"developer-set-up-oidc"},"Developer Set Up (OIDC)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Vue UI set up the Keycloak OIDC provider with the following values"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Find via the keycloak console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Find via the keycloak console (client's credentials tab)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key (optional)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Certificate (optional)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak URL"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of keycloak instance (no path)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak Realm"),(0,r.kt)("td",{parentName:"tr",align:null},"Find via the keycloak console (above menu on left or in path after /realms/)")))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The user used when enabling the provider must be an Admin or in a group")))}s.isMDXComponent=!0}}]);