"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[9955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"Blazor Preload Component",description:"Indicate the loading state of a page with Blazor Bootstrap preload component.",image:"https://i.imgur.com/3pvzbXY.png",sidebar_label:"Preload",sidebar_position:13},l="Blazor Preload",i={unversionedId:"components/preload",id:"components/preload",title:"Blazor Preload Component",description:"Indicate the loading state of a page with Blazor Bootstrap preload component.",source:"@site/docs/components/preload.md",sourceDirName:"components",slug:"/components/preload",permalink:"/docs/components/preload",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/preload.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Blazor Preload Component",description:"Indicate the loading state of a page with Blazor Bootstrap preload component.",image:"https://i.imgur.com/3pvzbXY.png",sidebar_label:"Preload",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Placeholders",permalink:"/docs/components/placeholders"},next:{title:"Progress",permalink:"/docs/components/progress"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Preload Service",id:"preload-service",level:2},{value:"Methods",id:"methods",level:3},{value:"Examples",id:"examples",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blazor-preload"},"Blazor Preload"),(0,a.kt)("p",null,"Indicate the loading state of a page with Blazor Bootstrap preload component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Things to know when using the ",(0,a.kt)("inlineCode",{parentName:"strong"},"Preload")," component:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"Preload")," component to your current page or your layout page."),(0,a.kt)("li",{parentName:"ul"},"Inject ",(0,a.kt)("inlineCode",{parentName:"li"},"PreloadService")),(0,a.kt)("li",{parentName:"ul"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"preloadService.Show()")," before you make any call to the API."),(0,a.kt)("li",{parentName:"ul"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"preloadService.Hide()")," after you get the response from the API.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,a.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Color"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SpinnerColor")),(0,a.kt)("td",{parentName:"tr",align:null},"Gets or sets the spinner color."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SpinnerColor.None"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IsVerticallyCentered"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the preload vertically in the center of the page."),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))))),(0,a.kt)("h2",{id:"preload-service"},"Preload Service"),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Show"),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the preload.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hide"),(0,a.kt)("td",{parentName:"tr",align:null},"Hides the preload.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can customize the color with ",(0,a.kt)("inlineCode",{parentName:"p"},"Color")," parameter. You can use any of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SpinnerColor")," values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cshml",metastring:"showLineNumbers",showLineNumbers:!0},'<Preload Color="SpinnerColor.Light"></Preload>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{6,13,22} showLineNumbers","{6,13,22}":!0,showLineNumbers:!0},"@code {\n    [Inject] protected PreloadService PageLoadingService { get; set; }\n\n    protected override void OnInitialized()\n    {\n        Task.Run(async () => await LoadSpinnerAsync());\n    }\n\n    private async Task LoadSpinnerAsync()\n    {\n        try\n        {\n            PageLoadingService.Show();\n            await Task.Delay(5000);\n        }\n        catch\n        {\n            // catch exception\n        }\n        finally\n        {\n            PageLoadingService.Hide();\n        }\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/preload#examples"},"See Preload demo here.")))}c.isMDXComponent=!0}}]);