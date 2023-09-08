"use strict";(self.webpackChunkvert_ig_o_docs=self.webpackChunkvert_ig_o_docs||[]).push([[6706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Launch a training",s={unversionedId:"trainer-web-app/Training/LaunchingTraining",id:"trainer-web-app/Training/LaunchingTraining",title:"Launch a training",description:"TODO: Add images",source:"@site/docs/trainer-web-app/Training/LaunchingTraining.md",sourceDirName:"trainer-web-app/Training",slug:"/trainer-web-app/Training/LaunchingTraining",permalink:"/docs/trainer-web-app/Training/LaunchingTraining",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"webAppSidebar",previous:{title:"General",permalink:"/docs/trainer-web-app/General"},next:{title:"How to view results",permalink:"/docs/trainer-web-app/Training/ViewResults"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"Common issues",id:"common-issues",level:2},{value:"No headsets online",id:"no-headsets-online",level:3},{value:"No server available",id:"no-server-available",level:3},{value:"Stuck on loading screen",id:"stuck-on-loading-screen",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"launch-a-training"},"Launch a training"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"TODO: Add images")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User must be logged in"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User must have permission to read or created the training"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Have the amount of headsets needed for the training online and added")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"http://eesp.altheria.local/trainings"},"the training page")," the training page."),(0,r.kt)("li",{parentName:"ol"},"Find the training to launch and click on the launch button."),(0,r.kt)("li",{parentName:"ol"},"Select the headset for each trainee. and enter their ID and select their role."),(0,r.kt)("li",{parentName:"ol"},"Press launch")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Once you press launch, don't forget to click ",(0,r.kt)("inlineCode",{parentName:"p"},"open whit EESP")," if it asks you to.")),(0,r.kt)("h2",{id:"common-issues"},"Common issues"),(0,r.kt)("h3",{id:"no-headsets-online"},"No headsets online"),(0,r.kt)("p",null,"When you select the headsets for trainees and the screen is empty, it means that there are no headsets online.\nCheck in the headset page if the headsets are online and if not, turn them on and start the EESP app."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the headsets tab is empty, it means that there are no headsets added to the system.\ngo to ",(0,r.kt)("a",{parentName:"p",href:"../Headset/AddHeadset"},"add headset docs")," to check how to add headsets to the system.")),(0,r.kt)("h3",{id:"no-server-available"},"No server available"),(0,r.kt)("p",null,"When this happens, it means that there are no servers available.\nThis could be because all servers are already in use or because the servers are offline."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this keeps happening, restart the server computer.")),(0,r.kt)("h3",{id:"stuck-on-loading-screen"},"Stuck on loading screen"),(0,r.kt)("p",null,"This can happen when the server or headsets are not responding.\nIf the counter says ",(0,r.kt)("inlineCode",{parentName:"p"},"0/X")," it means that the server is not responding.\nIf the counter says ",(0,r.kt)("inlineCode",{parentName:"p"},"Y/X")," it means that on or more of the headsets are not responding.\nCheck the headsets and try to relaunch the training."))}u.isMDXComponent=!0}}]);