"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[479],{3905:function(t,o,n){n.d(o,{Zo:function(){return c},kt:function(){return d}});var e=n(7294);function r(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function l(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),n.push.apply(n,e)}return n}function a(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?l(Object(n),!0).forEach((function(o){r(t,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))}))}return t}function u(t,o){if(null==t)return{};var n,e,r=function(t,o){if(null==t)return{};var n,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)n=l[e],o.indexOf(n)>=0||(r[n]=t[n]);return r}(t,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)n=l[e],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=e.createContext({}),s=function(t){var o=e.useContext(i),n=o;return t&&(n="function"==typeof t?t(o):a(a({},o),t)),n},c=function(t){var o=s(t.components);return e.createElement(i.Provider,{value:o},t.children)},p={inlineCode:"code",wrapper:function(t){var o=t.children;return e.createElement(e.Fragment,{},o)}},m=e.forwardRef((function(t,o){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,B=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?e.createElement(B,a(a({ref:o},c),{},{components:n})):e.createElement(B,a({ref:o},c))}));function d(t,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=m;var u={};for(var i in o)hasOwnProperty.call(o,i)&&(u[i]=o[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return e.createElement.apply(null,a)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2149:function(t,o,n){n.r(o),n.d(o,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var e=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],u={sidebar_label:"Buttons",sidebar_position:2},i="Buttons",s={unversionedId:"components/buttons",id:"components/buttons",isDocsHomePage:!1,title:"Buttons",description:"Documentation and examples for BlazorBootstrap Buttons.",source:"@site/docs/components/buttons.md",sourceDirName:"components",slug:"/components/buttons",permalink:"/blazorbootstrap/docs/components/buttons",editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/components/buttons.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Buttons",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/blazorbootstrap/docs/components/alerts"},next:{title:"Modal",permalink:"/blazorbootstrap/docs/components/modal"}},c=[{value:"Examples",id:"examples",children:[{value:"Buttons",id:"buttons-1",children:[],level:3},{value:"Button tags",id:"button-tags",children:[],level:3},{value:"Outline Buttons",id:"outline-buttons",children:[],level:3},{value:"Sizes",id:"sizes",children:[],level:3},{value:"Disable State",id:"disable-state",children:[],level:3},{value:"Block Buttons",id:"block-buttons",children:[],level:3},{value:"Button Toogle States",id:"button-toogle-states",children:[],level:3},{value:"Button with Loading",id:"button-with-loading",children:[],level:3},{value:"Buttons with Tooltip",id:"buttons-with-tooltip",children:[],level:3},{value:"Events",id:"events",children:[{value:"Click event",id:"click-event",children:[],level:4},{value:"Double click event",id:"double-click-event",children:[],level:4},{value:"Click event with arguments",id:"click-event-with-arguments",children:[],level:4}],level:3}],level:2}],p={toc:c};function m(t){var o=t.components,n=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,e.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"buttons"},"Buttons"),(0,l.kt)("p",null,"Documentation and examples for BlazorBootstrap Buttons."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"buttons-1"},"Buttons"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"> Primary </Button>\n    <Button Color="ButtonColor.Secondary"> Secondary </Button>\n    <Button Color="ButtonColor.Success"> Success </Button>\n    <Button Color="ButtonColor.Danger"> Danger </Button>\n    <Button Color="ButtonColor.Warning"> Warning </Button>\n    <Button Color="ButtonColor.Info"> Info </Button>\n    <Button Color="ButtonColor.Light"> Light </Button>\n    <Button Color="ButtonColor.Dark"> Dark </Button>\n    <Button Color="ButtonColor.Link"> Link </Button>\n</p>\n')),(0,l.kt)("h3",{id:"button-tags"},"Button tags"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" To="#"> Link </Button>\n    <Button Type="ButtonType.Submit" Color="ButtonColor.Primary" To="#"> Button </Button>\n</p>\n')),(0,l.kt)("h3",{id:"outline-buttons"},"Outline Buttons"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Outline="true"> Primary </Button>\n    <Button Color="ButtonColor.Secondary" Outline="true"> Secondary </Button>\n    <Button Color="ButtonColor.Success" Outline="true"> Success </Button>\n    <Button Color="ButtonColor.Danger" Outline="true"> Danger </Button>\n    <Button Color="ButtonColor.Warning" Outline="true"> Warning </Button>\n    <Button Color="ButtonColor.Info" Outline="true"> Info </Button>\n    <Button Color="ButtonColor.Dark" Outline="true"> Dark </Button>\n</p>\n')),(0,l.kt)("h3",{id:"sizes"},"Sizes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Large"> Large button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Large"> Large button </Button>\n</p>\n<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Small"> Small button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Small"> Small button </Button>\n</p>\n')),(0,l.kt)("h3",{id:"disable-state"},"Disable State"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Large button </Button>\n    <Button Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Large button </Button>\n</p>\n<p>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Primary" Size="Size.Large" Disabled="true"> Primary link </Button>\n    <Button Type="ButtonType.Link" Color="ButtonColor.Secondary" Size="Size.Large" Disabled="true"> Link </Button>\n</p>\n')),(0,l.kt)("h3",{id:"block-buttons"},"Block Buttons"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2 d-md-block mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2 col-6 mx-auto mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">\n    <Button Color="ButtonColor.Primary"> Button </Button>\n    <Button Color="ButtonColor.Primary"> Button </Button>\n</div>\n')),(0,l.kt)("h3",{id:"button-toogle-states"},"Button Toogle States"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary"> Toggle button </Button>\n    <Button Color="ButtonColor.Primary" Active="true"> Active toggle button </Button>\n    <Button Color="ButtonColor.Primary" Disabled="true"> Disabled toggle button </Button>\n</p>\n')),(0,l.kt)("h3",{id:"button-with-loading"},"Button with Loading"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" Loading="true" />\n    <Button Color="ButtonColor.Primary" Loading="true" LoadingText="Saving..." />\n    <Button Color="ButtonColor.Primary" Loading="true">\n        <LoadingTemplate>\n            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>\n            Loading...\n        </LoadingTemplate>\n    </Button>\n</p>\n')),(0,l.kt)("h3",{id:"buttons-with-tooltip"},"Buttons with Tooltip"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Top"> Tooltip Top </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Right"> Tooltip Right </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Bottom"> Tooltip Bottom </Button>\n\n    <Button Color="ButtonColor.Primary" TooltipTitle="Tooltip text" TooltipPlacement="TooltipPlacement.Left"> Tooltip Left </Button>\n</p>\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"HTML tooltips not supported at this moment."))),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("h4",{id:"click-event"},"Click event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" @onclick="OnClick"> Click Event </Button>\n</p>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'@code{\n\n    protected void OnClick(EventArgs args)\n    {\n        Console.WriteLine("click event");\n    }\n\n}\n')),(0,l.kt)("h4",{id:"double-click-event"},"Double click event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" @ondblclick="OnDoubleClick"> Double Click Event </Button>\n</p>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'@code{\n\n    protected void OnDoubleClick(EventArgs args)\n    {\n        Console.WriteLine("double click event");\n    }\n\n}\n')),(0,l.kt)("h4",{id:"click-event-with-arguments"},"Click event with arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cshtml"},'<p>\n    <Button Color="ButtonColor.Primary" @onclick="((args) => OnClickWithArgs(args, message))"> Click   Args </Button>\n</p>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs"},'@code{\n\n    public string message = "Test message";\n\n    protected void OnClickWithArgs(EventArgs args, string message)\n    {\n        Console.WriteLine($"message: {message}");\n    }\n\n}\n')))}m.isMDXComponent=!0}}]);