"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[5385],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return d}});var n=o(7294);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,l=function(t,e){if(null==t)return{};var o,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=s(o),d=l,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return o?n.createElement(b,i(i({ref:e},c),{},{components:o})):n.createElement(b,i({ref:e},c))}));function d(t,e){var o=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=o.length,i=new Array(r);i[0]=u;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:l,i[1]=a;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4831:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=o(7462),l=o(3366),r=(o(7294),o(3905)),i=["components"],a={sidebar_label:"Tooltips",sidebar_position:12},p="Tooltips",s={unversionedId:"components/tooltips",id:"components/tooltips",isDocsHomePage:!1,title:"Tooltips",description:"Documentation and examples for adding custom BlazorBootstrap Tooltips.",source:"@site/docs/components/tooltips.md",sourceDirName:"components",slug:"/components/tooltips",permalink:"/docs/components/tooltips",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/tooltips.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_label:"Tooltips",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Toasts",permalink:"/docs/components/toasts"}},c=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Tooltips",id:"tooltips-1",children:[],level:3},{value:"Disabled button with tooltip",id:"disabled-button-with-tooltip",children:[],level:3},{value:"Tooltip icon with click event",id:"tooltip-icon-with-click-event",children:[],level:3}],level:2}],m={toc:c};function u(t){var e=t.components,o=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tooltips"},"Tooltips"),(0,r.kt)("p",null,"Documentation and examples for adding custom BlazorBootstrap Tooltips."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Descritpion"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChildContent"),(0,r.kt)("td",{parentName:"tr",align:null},"RenderFragment"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the content to be rendered inside this."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Placement"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the tooltip placement. Default is top right."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TooltipPlacement.Top")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays informative text when users hover, focus, or tap an element."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"tooltips-1"},"Tooltips"),(0,r.kt)("div",null,(0,r.kt)("img",{src:"https://i.imgur.com/uqvqb2i.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,r.kt)("div",null,(0,r.kt)("img",{src:"https://i.imgur.com/ZHLTCvX.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,r.kt)("div",null,(0,r.kt)("img",{src:"https://i.imgur.com/jwJUhkV.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,r.kt)("div",null,(0,r.kt)("img",{src:"https://i.imgur.com/T2YMw9p.jpg",alt:"Blazor Bootstrap: Tooltip Component"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div>\n    <Tooltip TooltipTitle="Tooltip Left" TooltipPlacement="TooltipPlacement.Left">Tooltip Left</Tooltip>\n</div>\n<div>\n    <Tooltip TooltipTitle="Tooltip Top">Tooltip Top</Tooltip>\n</div>\n<div>\n    <Tooltip TooltipTitle="Tooltip Right" TooltipPlacement="TooltipPlacement.Right">Tooltip Right</Tooltip>\n</div>\n<div>\n    <Tooltip TooltipTitle="Tooltip Bottom" TooltipPlacement="TooltipPlacement.Bottom">Tooltip Bottom</Tooltip>\n</div>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tooltips#examples"},"See tooltips demo here.")),(0,r.kt)("h3",{id:"disabled-button-with-tooltip"},"Disabled button with tooltip"),(0,r.kt)("img",{src:"https://i.imgur.com/PGlmZS3.jpg",alt:"Blazor Bootstrap: Tooltip Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Tooltip Class="d-inline-block" TooltipTitle="Disabled button"role="button">\n    <button class="btn btn-primary" type="button" disabled>Disabled button</button>\n</Tooltip>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tooltips#disabled-button-with-tootip"},"See disabled button with tooltip demo here.")),(0,r.kt)("h3",{id:"tooltip-icon-with-click-event"},"Tooltip icon with click event"),(0,r.kt)("img",{src:"https://i.imgur.com/D3FrZba.jpg",alt:"Blazor Bootstrap: Tooltip Component"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml"},'<Tooltip TooltipTitle="Click here" @onclick="OnClick" role="button">\n    <i class="bi bi-arrow-repeat text-danger"></i>\n</Tooltip>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'@code {\n    private void OnClick()\n    {\n        Console.WriteLine($"clicked");\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.getblazorbootstrap.com/tooltips#icon-with-click-event"},"See icon with tooltip demo here.")))}u.isMDXComponent=!0}}]);