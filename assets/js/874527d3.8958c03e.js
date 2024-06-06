"use strict";(self.webpackChunkvert_ig_o_docs=self.webpackChunkvert_ig_o_docs||[]).push([[1703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3,title:"EESP AI Installation"},o=void 0,s={unversionedId:"general/EESP-AI-Installation",id:"general/EESP-AI-Installation",title:"EESP AI Installation",description:"The NPC AI used RASA and RIVA developed by NVIDIA. This feature is mostly a proof of concept is will not be practical for most training due to its hardware requirements and difficulty to modify for different trainings.",source:"@site/docs/general/EESP-AI-Installation.md",sourceDirName:"general",slug:"/general/EESP-AI-Installation",permalink:"/docs/general/EESP-AI-Installation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"EESP AI Installation"},sidebar:"GeneralSidebar",previous:{title:"Offline Installation",permalink:"/docs/general/Offline-Installation"}},l={},p=[{value:"Installation Instructions (Windows)",id:"installation-instructions-windows",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The NPC AI used RASA and RIVA developed by NVIDIA. This feature is mostly a proof of concept is will not be practical for most training due to its hardware requirements and difficulty to modify for different trainings."),(0,i.kt)("h2",{id:"installation-instructions-windows"},"Installation Instructions (Windows)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Windows 11 22H2 or later")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install NVIDIA drivers (",(0,i.kt)("a",{parentName:"p",href:"https://www.nvidia.com/download/index.aspx"},"https://www.nvidia.com/download/index.aspx"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Windows Subsystem for Linux (WSL 2)"),(0,i.kt)("p",{parentName:"li"},"\u2013 Open Powershell and type wsl --install\n\u2013 Check version with wsl -l -v, should output v2")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install latest Windows 11 updates")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Docker Desktop v5.15 or later"),(0,i.kt)("p",{parentName:"li"},"\u2013 Check Settings/General: Use the WSL2 based engine\n\u2013 Check Settings/Resources/WSL Integration: Enable integration with my default\nWSL distro\n\u2013 If needed check additional distros")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open WSL:"),(0,i.kt)("p",{parentName:"li"},"\u2013 Update Ubuntu: ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get update && sudo apt-get upgrade"),"\n\u2013 Check WSL GPU capability by running ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-smi"),", should output GPU information\n\u2013 Check docker GPU capability:\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker run --gpus all nvcr.io/nvidia/k8s/cuda-sample:nbody nbody -gpu -benchmark"),"\nshould output some performance measurements"),(0,i.kt)("p",{parentName:"li"},"\u2013 Go to: ",(0,i.kt)("a",{parentName:"p",href:"https://ngc.nvidia.com/signin"},"NVIDIA NGC")," and create an account and verify via email address ","[IMAGE 1]"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"IMG 1",src:n(1956).Z,width:"898",height:"172"})),(0,i.kt)("p",{parentName:"li"},"\u2013 Download and setup ngc cli linux ",(0,i.kt)("a",{parentName:"p",href:"https://ngc.nvidia.com/setup/installers/cli"},"https://ngc.nvidia.com/setup/installers/cli")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"IMG 2",src:n(3341).Z,width:"1588",height:"574"})),(0,i.kt)("p",{parentName:"li"},"You can install it using the ",(0,i.kt)("strong",{parentName:"p"},"series of terminal commands")," shown in the previous link. Don't forget the last step shown where you need to ",(0,i.kt)("inlineCode",{parentName:"p"},"ngc config set"),"using the API key. This key can be found by going to the Profile/Setup tab and then clicking on generate API key (",(0,i.kt)("a",{parentName:"p",href:"https://org.ngc.nvidia.com/setup/api-key"},"https://org.ngc.nvidia.com/setup/api-key"),")"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"IMG 3",src:n(2537).Z,width:"1596",height:"724"})),(0,i.kt)("p",{parentName:"li"},"Enter the API key to the ngc config set command once generated."))),(0,i.kt)("p",null,"   \u2013 Make ngc available from path export ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH=~/ngc:$PATH")," into .bashrc and restart shell\n\u2013 In WSL make sure you are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/altheria"),". Now with an ngc account you can download the ",(0,i.kt)("strong",{parentName:"p"},"latest RIVA quickstart"),":\n",(0,i.kt)("inlineCode",{parentName:"p"},"ngc registry resource download-version nvidia/riva/riva_quickstart:2.15.0"),"\nThis downloads ",(0,i.kt)("strong",{parentName:"p"},"version 2.15"),". For newer versions refere to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html"},"https://docs.nvidia.com/deeplearning/riva/user-guide/docs/quick-start-guide.html"),"\n\u2013 Change directory to the downloaded quickstart directory and open the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.sh"),", then set ",(0,i.kt)("inlineCode",{parentName:"p"},"service_enabled_nlp=false"),".This also speeds up initialization of Riva and uses less space."),(0,i.kt)("p",null,"   \u2013 Run ",(0,i.kt)("inlineCode",{parentName:"p"},"bash riva_init.sh")," to initialize Riva. This may take up to 40 minutes and should finish with a message, that the initialization was complete\n\u2013 Load the ",(0,i.kt)("strong",{parentName:"p"},"rasa_server")," image into docker. Use this command Linux ",(0,i.kt)("inlineCode",{parentName:"p"},"docker load < rasa_server_latest.tar.gz"),", (you can also do so from windows terminal with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker load -i rasa_server_latest.tar.gz"),")"),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the directory in which WSL is storing the data and go to ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/altheria/riva_quickstart_v2.15.0/"),". There you can paste the script from this repo named ",(0,i.kt)("inlineCode",{parentName:"p"},"run_rasa.sh")," into that riva folder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In this same folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/altheria/riva_quickstart_v2.15.0/"),"paste the folder that contains the training files ",(0,i.kt)("inlineCode",{parentName:"p"},"rasa_training_files")," . These are the files you will give to the model to be trained on. If you want to try for a custom training just replace the files but respect the naming of the files. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now in Windows (wherever you downloaded this repo) you can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"run_ai.bat "),"by double clicking on it. This will run both AI models: riva and rasa (and it also trains rasa with the new provided files)"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: If having issues executing the scripts it's most likely a path issue. In this case open ",(0,i.kt)("inlineCode",{parentName:"em"},"run_ai.bat")," or ",(0,i.kt)("inlineCode",{parentName:"em"},"run_rasa.sh")," and adapt the paths accordingly.")))}u.isMDXComponent=!0},1956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-3c8982fceda19e984ec670f093ddbe1b.png"},3341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-c6a00aae2fda6c031373337107014f45.png"},2537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-578369d5ccbeb23e59397bdf6cd901b4.png"}}]);