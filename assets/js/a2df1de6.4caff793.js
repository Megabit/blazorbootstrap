"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[59457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,b=d["".concat(s,".").concat(p)]||d[p]||c[p]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58034:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(87462),r=n(67294),l=n(3905),i=n(72389);function o(e){let{children:t,fallback:n}=e;return(0,i.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}n(73935);function s(){let e=document.getElementById("divCarbonAd");if(e){let t=document.getElementById("_carbonads_js");t&&t.remove(),t=document.createElement("script"),t.async=!0,t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom",t.type="text/javascript",t.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},e.replaceChildren(),e.appendChild(t)}return null}const m={toc:[]},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{id:"divCarbonAd"}),(0,l.kt)(o,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,l.kt)(s,{mdxType:"RenderAd"}))))}d.isMDXComponent=!0},99905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(58034);const i={title:"Blazor Currency Input Component",description:"Use the Blazor Bootstrap `CurrencyInput` component to show the numbers in the user's locale format, including the currency symbol.",image:"https://i.imgur.com/mihpoXk.png",sidebar_label:"Currency Input",sidebar_position:2},o="Blazor Currency Input",s={unversionedId:"forms/currency-input",id:"forms/currency-input",title:"Blazor Currency Input Component",description:"Use the Blazor Bootstrap `CurrencyInput` component to show the numbers in the user's locale format, including the currency symbol.",source:"@site/docs/04-forms/currency-input.mdx",sourceDirName:"04-forms",slug:"/forms/currency-input",permalink:"/forms/currency-input",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/04-forms/currency-input.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Blazor Currency Input Component",description:"Use the Blazor Bootstrap `CurrencyInput` component to show the numbers in the user's locale format, including the currency symbol.",image:"https://i.imgur.com/mihpoXk.png",sidebar_label:"Currency Input",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Auto Complete",permalink:"/forms/autocomplete"},next:{title:"Date Input",permalink:"/forms/date-input"}},m={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"Events",id:"events",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Show currency symbols for the different locales",id:"show-currency-symbols-for-the-different-locales",level:3},{value:"Hide currency symbol",id:"hide-currency-symbol",level:3},{value:"Using fraction digits and integer digits",id:"using-fraction-digits-and-integer-digits",level:3},{value:"Wrap the number with parentheses instead of appending a minus sign",id:"wrap-the-number-with-parentheses-instead-of-appending-a-minus-sign",level:3},{value:"Generic type",id:"generic-type",level:3},{value:"Enable min and max",id:"enable-min-and-max",level:3},{value:"Text alignment",id:"text-alignment",level:3},{value:"Allow negative numbers",id:"allow-negative-numbers",level:3},{value:"Disable",id:"disable",level:3},{value:"Validations",id:"validations",level:3},{value:"Events: ValueChanged",id:"events-valuechanged",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-currency-input"},"Blazor Currency Input"),(0,r.kt)("p",null,"Use the Blazor Bootstrap ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrencyInput")," component to show the numbers in the user's locale format, including the currency symbol."),(0,r.kt)(l.ZP,{mdxType:"CarbonAd"}),(0,r.kt)("img",{src:"https://i.imgur.com/mihpoXk.png",alt:"Blazor Bootstrap: Currency Input Component"}),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AllowNegativeNumbers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allows negative numbers. By default, negative numbers are not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AutoComplete"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates whether the NumberInput can complete the values automatically by the browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CurrencySign"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CurrencySign")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CurrencySign.Standard")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EnableMinMax"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether to restrict the user input to Min and Max range. If true, restricts the user input between the Min and Max range. Else accepts the user input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HideCurrencySymbol"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether to hide the currency symbol are not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"en-US")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the locale.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'Gets or sets the max. Max ignored if EnableMinMax="false".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaximumFractionDigits"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of fraction digits to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},'Gets or sets the min. Min ignored if EnableMinMax="false".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MinimumFractionDigits"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The minimum number of fraction digits to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MinimumIntegerDigits"),(0,r.kt)("td",{parentName:"tr",align:"left"},"byte"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified length) when formatted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Placeholder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the placeholder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TextAlignment"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Alignment")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Alignment.None")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the text alignment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TValue"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the value.")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disable()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disables currency input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable()"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enables currency input.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ValueChanged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This event fired on every user keystroke that changes the ",(0,r.kt)("inlineCode",{parentName:"td"},"CurrencyInput")," value.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"e + -")," are blocked. For all integral numeric types, dot ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is blocked."),(0,r.kt)("img",{src:"https://i.imgur.com/fL9IlP1.png",alt:"Blazor Bootstrap: Currency Input Component - Basic usage"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2} showLineNumbers","{2}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <CurrencyInput TValue="int" @bind-Value="@amount1" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount1</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private int amount1 = 12345678;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#basic-usage"},"See demo here")),(0,r.kt)("h3",{id:"show-currency-symbols-for-the-different-locales"},"Show currency symbols for the different locales"),(0,r.kt)("img",{src:"https://i.imgur.com/mihpoXk.png",alt:"Blazor Bootstrap: Currency Input Component - Show currency symbols for the different locales"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,9,15,21,27,33,39,45,51} showLineNumbers","{3,9,15,21,27,33,39,45,51}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Locale: <b>en-IN</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount1" Locale="en-IN" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount1</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>en-US</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount2" Locale="en-US" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount2</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>fr-FR</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount3" Locale="fr-FR" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount3</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>es-ES</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount4" Locale="es-ES" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount4</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>de-DE</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount5" Locale="de-DE" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount5</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>fr-CA</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount6" Locale="fr-CA" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount6</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>en-PH</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount7" Locale="en-PH" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount7</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>en-SE</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount8" Locale="en-SE" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount8</div>\n\n<div class="mb-3">\n    <label class="form-label">Locale: <b>zh-CN</b></label>\n    <CurrencyInput TValue="int" @bind-Value="@amount9" Locale="zh-CN" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount9</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private int amount1 = 12345678;\n    private int amount2 = 12345678;\n    private int amount3 = 12345678;\n    private int amount4 = 12345678;\n    private int amount5 = 12345678;\n    private int amount6 = 12345678;\n    private int amount7 = 12345678;\n    private int amount8 = 12345678;\n    private int amount9 = 12345678;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#show-currency-symbols-for-the-different-locales"},"See demo here")),(0,r.kt)("h3",{id:"hide-currency-symbol"},"Hide currency symbol"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"HideCurrencySymbol")," parameter value to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to hide the currency symbol."),(0,r.kt)("img",{src:"https://i.imgur.com/1L1utF6.png",alt:"Blazor Bootstrap: Currency Input Component - "}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2,5} showLineNumbers","{2,5}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <CurrencyInput \n        TValue="double" \n        @bind-Value="@amount1"\n        HideCurrencySymbol="true"\n        Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Value: @amount1</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private double amount1 = 4.33;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#hide-currency-symbol"},"See demo here")),(0,r.kt)("h3",{id:"using-fraction-digits-and-integer-digits"},"Using fraction digits and integer digits"),(0,r.kt)("p",null,"In the below example, formatting adds zeros to display minimum integers and fractions."),(0,r.kt)("img",{src:"https://i.imgur.com/gcwNP8c.png",alt:"Blazor Bootstrap: Currency Input Component - Using fraction digits and integer digits"}),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("b",null,"MinimumFractionDigits")," and ",(0,r.kt)("b",null,"MaximumFractionDigits")," parameters are applicable for floating-point numeric types only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2,5,6} showLineNumbers","{2,5,6}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <CurrencyInput \n        TValue="double" \n        @bind-Value="@amount1" \n        MinimumIntegerDigits="3" \n        MinimumFractionDigits="4" \n        Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Value: @amount1</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private double amount1 = 4.33;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#using-fraction-digits-and-integer-digits"},"See demo here")),(0,r.kt)("h3",{id:"wrap-the-number-with-parentheses-instead-of-appending-a-minus-sign"},"Wrap the number with parentheses instead of appending a minus sign"),(0,r.kt)("p",null,"In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the ",(0,r.kt)("b",null,"CurrencySign")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounting"),". The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/terrN93.png",alt:"Blazor Bootstrap: Currency Input Component - Wrap the number with parentheses instead of appending a minus sign"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{2,5} showLineNumbers","{2,5}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <CurrencyInput \n        TValue="int" \n        @bind-Value="@amount1"\n        CurrencySign="CurrencySign.Accounting"\n        Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Value: @amount1</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"@code {\n    private int amount1 = -21231;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#wrap-the-number-with-parentheses-instead-of-appending-a-minus-sign"},"See demo here")),(0,r.kt)("h3",{id:"generic-type"},"Generic type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CurrencyInput")," is a generic component. Always specify the exact type. In the below example ",(0,r.kt)("b",null,"TValue")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"int?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"float?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"double?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"decimal"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"decimal?"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/uslzD65.png",alt:"Blazor Bootstrap: Currency Input Component - Generic type"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,8,13,18,23,28,33,38} showLineNumbers","{3,8,13,18,23,28,33,38}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Enter int number</label>\n    <CurrencyInput TValue="int" @bind-Value="@amount" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter int? number</label>\n    <CurrencyInput TValue="int?" @bind-Value="@amount2" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter float number</label>\n    <CurrencyInput TValue="float" @bind-Value="@amount3" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter float? number</label>\n    <CurrencyInput TValue="float?" @bind-Value="@amount4" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter double number</label>\n    <CurrencyInput TValue="double" @bind-Value="@amount5" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter double? number</label>\n    <CurrencyInput TValue="double?" @bind-Value="@amount6" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter decimal number</label>\n    <CurrencyInput TValue="decimal" @bind-Value="@amount7" />\n</div>\n\n<div class="mb-3">\n    <label class="form-label">Enter decimal? number</label>\n    <CurrencyInput TValue="decimal?" @bind-Value="@amount8" />\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int amount;\n    private int? amount2;\n    private float amount3;\n    private float? amount4;\n    private double amount5;\n    private double? amount6;\n    private decimal amount7;\n    private decimal? amount8;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#generic-type"},"See demo here")),(0,r.kt)("h3",{id:"enable-min-and-max"},"Enable min and max"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},'EnableMinMax="true"')," and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Max")," parameters to restrict the user input between the Min and Max range."),(0,r.kt)("img",{src:"https://i.imgur.com/0Fsxcs9.png",alt:"Blazor Bootstrap: Currency Input Component - Enable min and max"}),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the user tries to enter a number in the ",(0,r.kt)("b",null,"CurrencyInput")," field which is out of range, then it will override with Min or Max value based on the context.\nIf the user input is less than the Min value, then it will override with the Min value.\nIf the user input exceeds the Max value, it will override with the Max value.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <CurrencyInput TValue="decimal?" @bind-Value="@amount" ShowCurrencySymbol="true" EnableMinMax="true" Min="10" Max="500" Placeholder="Enter amount" />\n    <span class="form-text">Tip: The amount must be between 10 and 500.</span>\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private decimal? amount;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#enable-min-and-max"},"See demo here")),(0,r.kt)("h3",{id:"text-alignment"},"Text alignment"),(0,r.kt)("p",null,"You can change the text alignment according to your need. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextAlignment")," parameter to set the alignment. In the below example, alignment is set to center and end."),(0,r.kt)("img",{src:"https://i.imgur.com/0Ye7o1y.png",alt:"Blazor Bootstrap: Currency Input Component - Text alignment"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,9} showLineNumbers","{3,9}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <CurrencyInput TValue="int" @bind-Value="@amount" ShowCurrencySymbol="true" TextAlignment="Alignment.Center" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n\n<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <CurrencyInput TValue="decimal" @bind-Value="@amount2" ShowCurrencySymbol="true" TextAlignment="Alignment.End" Placeholder="Enter amount" />\n</div>\n<div class="mb-3">Entered Amount: @amount2</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int amount;\n    private decimal amount2 = 2.34M;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#text-alignment"},"See demo here")),(0,r.kt)("h3",{id:"allow-negative-numbers"},"Allow negative numbers"),(0,r.kt)("p",null,"By default, negative numbers are not allowed. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowNegativeNumbers")," parameter to true to allow the negative numbers."),(0,r.kt)("img",{src:"https://i.imgur.com/tTY2wdT.png",alt:"Blazor Bootstrap: Currency Input Component - Allow negative numbers"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3} showLineNumbers","{3}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <CurrencyInput TValue="int" @bind-Value="@amount" ShowCurrencySymbol="true" AllowNegativeNumbers="true" Placeholder="Enter amount" />\n    <span class="form-text">Tip: Negative numbers are also allowed.</span>\n</div>\n<div class="mb-3">Entered Amount: @amount</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},"@code {\n    private int amount;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#allow-negative-numbers"},"See demo here")),(0,r.kt)("h3",{id:"disable"},"Disable"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("b",null,"Disabled")," parameter to disable the CurrencyInput."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{5,9-11} showLineNumbers","{5,9-11}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <CurrencyInput TValue="int?"\n                   @bind-Value="@amount"\n                   Disabled="@disabled"\n                   Placeholder="Enter amount" />\n</div>\n\n<Button Color="ButtonColor.Primary" @onclick="Enable"> Enable </Button>\n<Button Color="ButtonColor.Secondary" @onclick="Disable"> Disable </Button>\n<Button Color="ButtonColor.Warning" @onclick="Toggle"> Toggle </Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,5,7,9} showLineNumbers","{3,5,7,9}":!0,showLineNumbers:!0},"@code {\n    private int? amount;\n    private bool disabled = true;\n\n    private void Enable() => disabled = false;\n\n    private void Disable() => disabled = true;\n\n    private void Toggle() => disabled = !disabled;\n}\n")),(0,r.kt)("p",null,"Also, use ",(0,r.kt)("strong",{parentName:"p"},"Enable()")," and ",(0,r.kt)("strong",{parentName:"p"},"Disable()")," methods to enable and disable the CurrencyInput."),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not use both the ",(0,r.kt)("strong",{parentName:"p"},"Disabled")," parameter and ",(0,r.kt)("strong",{parentName:"p"},"Enable()")," & ",(0,r.kt)("strong",{parentName:"p"},"Disable()")," methods.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{3,9-10} showLineNumbers","{3,9-10}":!0,showLineNumbers:!0},'<div class="mb-3">\n    <label class="form-label">Amount</label>\n    <CurrencyInput @ref="currencyInput"\n                   TValue="int?"\n                   @bind-Value="@amount"\n                   Placeholder="Enter amount" />\n</div>\n\n<Button Color="ButtonColor.Secondary" @onclick="Disable"> Disable </Button>\n<Button Color="ButtonColor.Primary" @onclick="Enable"> Enable </Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2,5,7} showLineNumbers","{2,5,7}":!0,showLineNumbers:!0},"@code {\n    private CurrencyInput<int?> currencyInput = default!;\n    private int? amount;\n\n    private void Disable() => currencyInput.Disable();\n\n    private void Enable() => currencyInput.Enable();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#disable"},"See demo here")),(0,r.kt)("h3",{id:"validations"},"Validations"),(0,r.kt)("p",null,"Like any other blazor input components, ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrencyInput")," supports validations. Add the DataAnnotations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrencyInput")," component to validate the user input before submitting the form. In the below example, we used ",(0,r.kt)("b",null,"Required")," and ",(0,r.kt)("b",null,"Range")," attributes."),(0,r.kt)("img",{src:"https://i.imgur.com/K9cyIJg.png",alt:"Blazor Bootstrap: Currency Input Component - Validations"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{17,18,23,24,31,32,39,40} showLineNumbers","{17,18,23,24,31,32,39,40}":!0,showLineNumbers:!0},'@using System.ComponentModel.DataAnnotations\n\n<style>\n    .valid.modified:not([type=checkbox]) {\n        outline: 1px solid #26b050;\n    }\n\n    .invalid {\n        outline: 1px solid red;\n    }\n\n    .validation-message {\n        color: red;\n    }\n</style>\n\n<EditForm EditContext="@editContext" OnValidSubmit="HandleOnValidSubmit">\n    <DataAnnotationsValidator />\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Item Price: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <CurrencyInput TValue="decimal?" Value="invoice.Price" Locale="en-US" ShowCurrencySymbol="true" ValueExpression="() => invoice.Price" ValueChanged="(value) => PriceChanged(value)" Placeholder="Enter price" />\n            <ValidationMessage For="@(() => invoice.Price)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Item Discount:</label>\n        <div class="col-md-10">\n            <CurrencyInput TValue="decimal?" Value="invoice.Discount" Locale="en-US" ShowCurrencySymbol="true" ValueExpression="() => invoice.Discount" ValueChanged="(value) => DiscountChanged(value)" Placeholder="Enter discount" />\n            <ValidationMessage For="@(() => invoice.Discount)" />\n        </div>\n    </div>\n\n    <div class="form-group row mb-3">\n        <label class="col-md-2 col-form-label">Total Amount: <span class="text-danger">*</span></label>\n        <div class="col-md-10">\n            <CurrencyInput TValue="decimal?" @bind-Value="invoice.Total" Locale="en-US" ShowCurrencySymbol="true" Disabled="true" Placeholder="Enter total" />\n            <ValidationMessage For="@(() => invoice.Total)" />\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-md-12 text-right">\n            <Button Type="ButtonType.Button" Color="ButtonColor.Secondary" Class="float-end" @onclick="ResetForm">Reset</Button>\n            <Button Type="ButtonType.Submit" Color="ButtonColor.Success" Class="float-end me-2">Submit</Button>\n        </div>\n    </div>\n</EditForm>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{2-3,7,36,46,49-61} showLineNumbers","{2-3,7,36,46,49-61}":!0,showLineNumbers:!0},'@code {\n    private Invoice invoice = new();\n    private EditContext editContext;\n\n    protected override void OnInitialized()\n    {\n        editContext = new EditContext(invoice);\n        base.OnInitialized();\n    }\n\n    protected override void OnParametersSet()\n    {\n        CalculateToatl();\n        base.OnParametersSet();\n    }\n\n    private void PriceChanged(decimal? value)\n    {\n        invoice.Price = value;\n        CalculateToatl();\n    }\n\n    private void DiscountChanged(decimal? value)\n    {\n        invoice.Discount = value;\n        CalculateToatl();\n    }\n\n    private void CalculateToatl()\n    {\n        var price = invoice.Price.HasValue ? invoice.Price.Value : 0;\n        var discount = invoice.Discount.HasValue ? invoice.Discount.Value : 0;\n        invoice.Total = price - discount;\n    }\n\n    public void HandleOnValidSubmit()\n    {\n        Console.WriteLine($"Price: {invoice.Price}");\n        Console.WriteLine($"Discount: {invoice.Discount}");\n        Console.WriteLine($"Total: {invoice.Total}");\n    }\n\n    private void ResetForm()\n    {\n        invoice = new();\n        editContext = new EditContext(invoice);\n    }\n\n    public class Invoice\n    {\n        [Required(ErrorMessage = "Price required.")]\n        [Range(60, 500, ErrorMessage = "Price should be between 60 and 500.")]\n        public decimal? Price { get; set; } = 22M;\n\n        [Range(0, 50, ErrorMessage = "Discount should be between 0 and 50.")]\n        public decimal? Discount { get; set; }\n\n        [Required(ErrorMessage = "Amount required.")]\n        [Range(10, 500, ErrorMessage = "Total should be between 60 and 500.")]\n        public decimal? Total { get; set; }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#validations"},"See demo here")),(0,r.kt)("h3",{id:"events-valuechanged"},"Events: ValueChanged"),(0,r.kt)("p",null,"This event fires on every user keystroke that changes the ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrencyInput")," value."),(0,r.kt)("img",{src:"https://i.imgur.com/h8HFgYj.png",alt:"Blazor Bootstrap: Currency Input Component - ValueChanged"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{4} showLineNumbers","{4}":!0,showLineNumbers:!0},'<div class="row mb-3">\n    <label class="col-md-2 col-form-label">Item Price: <span class="text-danger">*</span></label>\n    <div class="col-md-10">\n        <CurrencyInput TValue="decimal?" Value="price" ValueExpression="() => price" ValueChanged="(value) => PriceChanged(value)" Placeholder="Enter price" />\n    </div>\n</div>\n<div>\n    @displayPrice\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{5-9} showLineNumbers","{5-9}":!0,showLineNumbers:!0},'@code {\n    private decimal? price = 10M;\n    private string displayPrice;\n\n    private void PriceChanged(decimal? value)\n    {\n        price = value; // this is mandatory\n        displayPrice = $"Price: {value}, changed at {DateTime.Now.ToLocalTime()}.";\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/form/currency-input#event-value-changed"},"See demo here")))}p.isMDXComponent=!0}}]);