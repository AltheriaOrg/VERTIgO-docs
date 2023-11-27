"use strict";(self.webpackChunkvert_ig_o_docs=self.webpackChunkvert_ig_o_docs||[]).push([[7814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,title:"Online Installation"},a=void 0,s={unversionedId:"general/Online-Installation",id:"general/Online-Installation",title:"Online Installation",description:"This page will guide you through the installation steps for the online version of EESP. The online version connects to the EESP Console hosted on AWS at https://vertigo.altheria.com. Therefore, this setup requires internet connection to work. If your organization has strict security requirements you can install the EESP Console on your own infrastructure completely disconnected from the internet.",source:"@site/docs/general/Online-Installation.md",sourceDirName:"general",slug:"/general/Online-Installation",permalink:"/docs/general/Online-Installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Online Installation"},sidebar:"GeneralSidebar",next:{title:"Offline Installation",permalink:"/docs/general/Offline-Installation"}},l={},c=[],d={toc:c},h="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will guide you through the installation steps for the online version of EESP. The online version connects to the EESP Console hosted on AWS at ",(0,r.kt)("a",{parentName:"p",href:"https://vertigo.altheria.com"},"https://vertigo.altheria.com"),". Therefore, this setup requires internet connection to work. If your organization has strict security requirements you can install the EESP Console on your own infrastructure completely disconnected from the internet."),(0,r.kt)("p",null,"The online installation is by far the easiest and is recommended for most users."),(0,r.kt)("h1",{id:"step-1-download-the-files"},"Step 1: Download the files"),(0,r.kt)("p",null,"The Editor, VR Reader and Live Viewer will be distributed using a download link provided by Altheria. "),(0,r.kt)("h1",{id:"step-2-run-the-editor"},"Step 2: Run the Editor"),(0,r.kt)("p",null,"Launch the EESP Editor .exe file and log in using your account. If you do not have an account yet you need to contact your organization administrator who will create your account.\n",(0,r.kt)("img",{alt:"editor-login.png",src:n(9898).Z,width:"1036",height:"788"}),"\nThe domain field is the address of the EESP Console you will be connecting to and does not need to be modified if you with to use the online EESP Console.\nThe editor can the headset in tethered mode (usb cable) can already be used without any more setup. Please continue to step 3 to complete the installation process so you can launch multiplayer sessions."),(0,r.kt)("h1",{id:"step-3-install-the-eesp-reader-on-the-headsets"},"Step 3: Install the EESP Reader on the headsets"),(0,r.kt)("p",null,"Connect the headsets to the computer using a USB cable. On the right panel of the editor it should say a headset is connected. If this is not the case, you might need to confirm a popup inside the VR headset.\n",(0,r.kt)("img",{alt:"install-apk.png",src:n(7319).Z,width:"1255",height:"703"}),"\nPress the ",(0,r.kt)("strong",{parentName:"p"},"Install APK")," button and select the .apk file that you downloaded. The installation process will begin and should not take longer than a couple minutes.\nThe ",(0,r.kt)("strong",{parentName:"p"},"Connect Headset")," button is used to set the EESP Console that the headset will use to the EESP Console the editor is currently using. This is only required if you want to switch the headset from the Online EESP to an Offline EESP console or the reverse."),(0,r.kt)("h1",{id:"step-4-add-headset-to-console"},"Step 4: Add Headset To Console"),(0,r.kt)("p",null,"Navigate to the headsets page on the ",(0,r.kt)("a",{parentName:"p",href:"https://vertigo.altheria.com"},"EESP Console"),' and press the "Add Headset" button. This will open a popup window.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console-add-headset.png",src:n(9544).Z,width:"1676",height:"543"})),(0,r.kt)("p",null,"Launch the EESP Reader Application in the VR headset."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console-add-headset-popup.png",src:n(511).Z,width:"641",height:"390"})),(0,r.kt)("p",null,"Press the + button in the Console to add the headset. You can rename the headset by navigating back to the Headsets page and pressing the triple dots button on the headset.\nAfter adding the headset for the first time you need to restart the Reader app before you can start using it."),(0,r.kt)("h1",{id:"step-5-setup-live-viewer"},"Step 5: Setup Live Viewer"),(0,r.kt)("p",null,"Press the ",(0,r.kt)("strong",{parentName:"p"},"Connect Live Viewer")," button.\n",(0,r.kt)("img",{alt:"connect-live-viewe.png",src:n(7590).Z,width:"1255",height:"703"}),"\nA file with the name ",(0,r.kt)("strong",{parentName:"p"},"register_live_viewer.reg")," will be created in the folder where you installed the EESP Editor. Open the ",(0,r.kt)("strong",{parentName:"p"},"register_live_viewer.reg")," and accept the popup window.\n",(0,r.kt)("img",{alt:"run-reg-file.png",src:n(4724).Z,width:"961",height:"312"}),"\nThe installation is now complete."))}p.isMDXComponent=!0},7590:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/connect-live-viewer-8fdfac6f8259e246b5fc594dff97f328.png"},511:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-add-headset-popup-a26a12ba9038811ecabe368fe971148e.png"},9544:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-add-headset-cb03b49e00e47cf8101f9b4cbaefed1e.png"},9898:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/editor-login-02348427dc2965fa5e75e3ea51bf4577.png"},7319:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/install-apk-7122924dd90c2482fac35a55aba15846.png"},4724:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/run-reg-file-1b8505818f060f215357831f5f6641a3.png"}}]);