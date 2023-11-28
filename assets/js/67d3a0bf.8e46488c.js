"use strict";(self.webpackChunkvert_ig_o_docs=self.webpackChunkvert_ig_o_docs||[]).push([[4444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"Offline Installation"},a=void 0,s={unversionedId:"general/Offline-Installation",id:"general/Offline-Installation",title:"Offline Installation",description:"This page will assist you in setting up the EESP software on your own infrastructure disconnected from the internet. This is the recommended method for organizations with stricter security requirements.",source:"@site/docs/general/Offline-Installation.md",sourceDirName:"general",slug:"/general/Offline-Installation",permalink:"/docs/general/Offline-Installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Offline Installation"},sidebar:"GeneralSidebar",previous:{title:"Online Installation",permalink:"/docs/general/Online-Installation"}},l={},p=[{value:"Step 1: Configuring the Console",id:"step-1-configuring-the-console",level:2},{value:"Step 2: Creating the Admin user",id:"step-2-creating-the-admin-user",level:2},{value:"Step 3: Connecting the editor, headsets and live viewer.",id:"step-3-connecting-the-editor-headsets-and-live-viewer",level:2},{value:"Step 4: Launching a multiplayer server.",id:"step-4-launching-a-multiplayer-server",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will assist you in setting up the EESP software on your own infrastructure disconnected from the internet. This is the recommended method for organizations with stricter security requirements.\nThis method is more complex and will require some technical knowledge about networking.\nThis page will provide an example of how to set up the software, but you are free to expand on this to fit the needs of your organization better."),(0,r.kt)("h1",{id:"requirements"},"Requirements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A computer:")," This Windows or Linux computer will act as a server for the EESP Console and the multiplayer sessions."),(0,r.kt)("p",{parentName:"li"},"1.1. This computer also needs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," installed. If you are using Linux, make sure ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," is also installed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A WI-FI network:")," This network does not need to be connected to the internet. The computer and headsets need to be connected to this network.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A static IP address"),": The IP address of the computer should remain the same. If the IP address changes, you will need to repeat some of the installation process to switch to the new IP address."))),(0,r.kt)("p",null,"The online installation is by far the easiest and is recommended for most users. The offline installation should be done by someone with more technical knowledge."),(0,r.kt)("h1",{id:"example-setup"},"Example Setup"),(0,r.kt)("p",null,"This sections will provide a simple example of how the EESP software can be set up on your infrastructure."),(0,r.kt)("h2",{id:"step-1-configuring-the-console"},"Step 1: Configuring the Console"),(0,r.kt)("p",null,"Some settings in the console need to be updated before you can launch it.\nNavigate to the root directory of the Console.\nOpen the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file. The first lines of the file contain some options that need to be configured. If the .env file in not visible, make sure hidden items are enabled in your file explorer settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JWT_SECRET_KEY: This should be complex combination of letters, numbers and symbols."),(0,r.kt)("li",{parentName:"ul"},"DEFAULT_EMAIL: The email address that will be used for the System Administrator account."),(0,r.kt)("li",{parentName:"ul"},"PASSWORD_EXPIRATION: Passwords will need to be changed every 60 days by default. This can be disabled by using ",(0,r.kt)("strong",{parentName:"li"},"-1")," instead.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Env Config",src:n(4953).Z,width:"1341",height:"222"})),(0,r.kt)("p",null,"open the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,r.kt)("strong",{parentName:"p"},"VERTIgO-froten-end")," folder."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUBLIC_HEADSET_SERVER: The IP address of the Console computer followed by the port. ",(0,r.kt)("strong",{parentName:"li"},"Example: 192.168.1.100:8181")),(0,r.kt)("li",{parentName:"ul"},"PUBLIC_MAIN_SERVER: The IP address of the Console computer followed by the port. ",(0,r.kt)("strong",{parentName:"li"},"Example: 192.168.1.100:3001")),(0,r.kt)("li",{parentName:"ul"},"PUBLIC_API_PROTOCOL: The offline Console will use HTTP by default. HTTPS can be configured using a reverse proxy such as Nginx. This is outside of the score for this document."),(0,r.kt)("li",{parentName:"ul"},"JWT_SECRET_KEY: This has to be the same JWT_SECRET_KEY you used in the previous ",(0,r.kt)("strong",{parentName:"li"},".env")," file.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Frontend Env Config",src:n(4226).Z,width:"1333",height:"295"})),(0,r.kt)("p",null,"Navigate to the root of the Console in a terminal application. Type ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up --build -d"),". The first time installation will require internet connection to download some required components. If your current network does not have internet you can temporarily switch your computer to a different network with internet connection and switch back to the offline network when the installation has completed.\nYou can verify that the console is running by opening the Docker Desktop program on windows and check if all boxed inside the ",(0,r.kt)("strong",{parentName:"p"},"vertigo-full-stack")," container are green. ",(0,r.kt)("img",{alt:"Console is running",src:n(7445).Z,width:"2242",height:"1337"})),(0,r.kt)("p",null,"Open your browser and navigate to ",(0,r.kt)("strong",{parentName:"p"},"http://you-ip-address:8080"),". If the login screen appears, it is set up correctly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Console Login",src:n(8244).Z,width:"2553",height:"1247"})),(0,r.kt)("h2",{id:"step-2-creating-the-admin-user"},"Step 2: Creating the Admin user"),(0,r.kt)("p",null,"Open your browser and navigate to ",(0,r.kt)("strong",{parentName:"p"},"http://you-ip-address:3000/seed"),". This page will generate the user you configured inside the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file earlier using a random password. Find the random password on the page and copy it to the clipboard. Navigate to ",(0,r.kt)("strong",{parentName:"p"},"http://you-ip-address:8080")," to login using the email and random password and follow the instructions to choose a new password."),(0,r.kt)("h2",{id:"step-3-connecting-the-editor-headsets-and-live-viewer"},"Step 3: Connecting the editor, headsets and live viewer."),(0,r.kt)("p",null,"Please follow the same instructions provided on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/Online-installation"},"Online Installation Guide")," but replace ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://vertigo.altheria.com"},"https://vertigo.altheria.com"))," with the IP address of your Console server, for example ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://192.168.1.100"},"http://192.168.1.100")),". Return to this page after you completed all steps."),(0,r.kt)("h2",{id:"step-4-launching-a-multiplayer-server"},"Step 4: Launching a multiplayer server."),(0,r.kt)("p",null,"This section is a work in progress and will be updated soon."))}u.isMDXComponent=!0},7445:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-is-running-d99cbe3885b89d915f557b78dc939de8.png"},8244:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-login-44479dc0b53e90b1aff0509cdc9ee811.png"},4953:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/env-config-8389a26f952a76daebddfa6a5ea6fadd.png"},4226:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/frontend-env-config-c5aa314230071a29369b1ee80d257a40.png"}}]);