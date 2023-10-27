"use strict";(self.webpackChunkvert_ig_o_docs=self.webpackChunkvert_ig_o_docs||[]).push([[4252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,title:"Step flow/Node Editor"},a=void 0,l={unversionedId:"eesp-editor/EESPEditorOverview/StepFlowBodeEditor",id:"eesp-editor/EESPEditorOverview/StepFlowBodeEditor",title:"Step flow/Node Editor",description:"Overview",source:"@site/docs/eesp-editor/EESPEditorOverview/StepFlowBodeEditor.md",sourceDirName:"eesp-editor/EESPEditorOverview",slug:"/eesp-editor/EESPEditorOverview/StepFlowBodeEditor",permalink:"/docs/eesp-editor/EESPEditorOverview/StepFlowBodeEditor",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Step flow/Node Editor"},sidebar:"eespEditorSidebar",previous:{title:"Media library",permalink:"/docs/eesp-editor/EESPEditorOverview/MediaLibrary"},next:{title:"VR preview",permalink:"/docs/eesp-editor/EESPEditorOverview/VRpreview"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Node/Step",id:"nodestep",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"HUB",src:n(2778).Z,width:"2233",height:"1256"})),(0,i.kt)("p",null,"In this window you can see and edit the different steps of the training. "),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"HUB",src:n(1401).Z,width:"641",height:"305"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Move: Keep the middle mouse button press ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zoom: Scroll up and down inside the tab but outside of the node. "))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HUB",src:n(5965).Z,width:"602",height:"289"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Node: represent each step you created. You can add more by clicking on Add node. The parameters of the selected step are shown on the right. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Random node:  "))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HUB",src:n(3389).Z,width:"843",height:"435"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create a connectable node that will randomize, by an equivalent amount, the possibility of transitioning into any of the steps connected to its output. This node can have only one input but can be connected to as many outputs as needed. ")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete node: Delete the selected node in the editor.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Center view: Recenter the view on the middle of the panel. "))),(0,i.kt)("h2",{id:"nodestep"},"Node/Step"),(0,i.kt)("p",null,"On each node, you will be able to see multiple pieces of information about its content and what is happening inside of it. "),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"HUB",src:n(1971).Z,width:"380",height:"346"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name of the step ")),(0,i.kt)("p",null,"Can be changed on the right side of the pannel. It is important to rename it for the trainer to know what is happening in it without having to goes into the detail. "),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Condition group:  ")),(0,i.kt)("p",null,"A step is composed of the conditions and behaviors that need to be executed by the trainee to progress to the next step.",(0,i.kt)("br",{parentName:"p"}),"\n","Within a condition group, you can have as many behaviors as you wish. The trainee will only proceed to the next step when all the behaviors within a condition group are completed.",(0,i.kt)("br",{parentName:"p"}),"\n","You can add a condition group by pressing the '+' button.\nEach group has its own output. This means that if you want the training to vary depending on the trainee's actions, you can achieve that by adding multiple condition groups to a step. "),(0,i.kt)("p",null,"State: If a state (ex: fire) is given to the object that has a behavior.\nObject: The name of the object to which the behavior has been assigned.\nUser: Will be added with V2. "),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Step parameters: ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings: Open the same tab as the one on the right in the editor panel.    "),(0,i.kt)("li",{parentName:"ul"},"Name: Where you can change the name of the selected step.   "),(0,i.kt)("li",{parentName:"ul"},"Free teleportation: Setting it off disables the ability of the trainee to teleport in VR.    "),(0,i.kt)("li",{parentName:"ul"},"Show step validation: Show an animation in vr at the end of the steps that told the trainee that he succedeed.    "),(0,i.kt)("li",{parentName:"ul"},"Reset: Force the trainee to start from the position the VR module is located.  "),(0,i.kt)("li",{parentName:"ul"},"Type of stage: First stage means that the \u2018Reader will start from this step   "),(0,i.kt)("li",{parentName:"ul"},"Fade in/Out: Fade either in or out when a step is finished or start. Interesting to enable when you reset the VR module.   "),(0,i.kt)("li",{parentName:"ul"},"Delete stage Node: Delete the selected step "),(0,i.kt)("li",{parentName:"ul"},"Disconnect in: Disconnect the entry connection. If multiple steps are connected it disconnects them one by one starting from the first one that got plugged in. "),(0,i.kt)("li",{parentName:"ul"},"Disconnect out: Disconnect the output connection. "),(0,i.kt)("li",{parentName:"ul"},"Disconnect all: Disconnect all connections.  ")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Add condition group ")),(0,i.kt)("p",null,"See .2 Condition group "),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Entry ")),(0,i.kt)("p",null,"The entry point is where you connect the condition group of the previous step. To connect them, click on an output and then the entry. An entry can have multiple outputs connected to it. "),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Output(s) ")),(0,i.kt)("p",null,"A node can have multiple outputs. Each condition group has one. When the condition is validated the output will be triggered. To link an output to an input click on the output and then select the input you want to connect it to.\nMultiple outputs can be connected to the same entry."))}u.isMDXComponent=!0},2778:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/25Overview-683280793fe6b4e0a23b6601785a3d3d.png"},1401:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/26Movestep-31bd3a86918c04e8d3853d066e9a7e54.PNG"},5965:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/27Stepsettings-9dcfe2fb29bb8701c1ed9229cd705a8d.PNG"},3389:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/28randomnode-9d783d08c577091bd89dfc6506a528b4.png"},1971:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/29NodeStep-bc59278ef46db1f742136ea365f27d24.PNG"}}]);