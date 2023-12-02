"use strict";(self.webpackChunkblazorbootstrap=self.webpackChunkblazorbootstrap||[]).push([[6918],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(e),c=r,k=m["".concat(s,".").concat(c)]||m[c]||h[c]||i;return e?n.createElement(k,l(l({ref:a},p),{},{components:e})):n.createElement(k,l({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},58034:(t,a,e)=>{e.d(a,{ZP:()=>m});var n=e(87462),r=e(67294),i=e(3905),l=e(72389);function o(t){let{children:a,fallback:e}=t;return(0,l.Z)()?r.createElement(r.Fragment,null,a?.()):e??null}e(73935);function s(){let t=document.getElementById("divCarbonAd");if(t){let a=document.getElementById("_carbonads_js");a&&a.remove(),a=document.createElement("script"),a.async=!0,a.id="_carbonads_js",a.src="//cdn.carbonads.com/carbon.js?serve=CWYICKJI&placement=docsblazorbootstrapcom",a.type="text/javascript",a.onerror=function(){console.error(`An error occurred while loading the script: ${source}`)},t.replaceChildren(),t.appendChild(a)}return null}const d={toc:[]},p="wrapper";function m(t){let{components:a,...e}=t;return(0,i.kt)(p,(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{id:"divCarbonAd"}),(0,i.kt)(o,{fallback:null,mdxType:"BrowserOnly"},(()=>(0,i.kt)(s,{mdxType:"RenderAd"}))))}m.isMDXComponent=!0},17486:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=e(87462),r=(e(67294),e(3905)),i=e(58034);const l={title:"Blazor Pie Chart Components",description:"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories.",image:"https://i.imgur.com/dDpIuzk.png",sidebar_label:"Pie Chart",sidebar_position:4},o="Blazor Pie Chart",s={unversionedId:"data-visualization/pie-chart",id:"data-visualization/pie-chart",title:"Blazor Pie Chart Components",description:"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories.",source:"@site/docs/06-data-visualization/pie-chart.mdx",sourceDirName:"06-data-visualization",slug:"/data-visualization/pie-chart",permalink:"/data-visualization/pie-chart",draft:!1,editUrl:"https://github.com/vikramlearning/blazorbootstrap/edit/master/docs/docs/06-data-visualization/pie-chart.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Blazor Pie Chart Components",description:"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories.",image:"https://i.imgur.com/dDpIuzk.png",sidebar_label:"Pie Chart",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Line Chart",permalink:"/data-visualization/line-chart"},next:{title:"Modal Service",permalink:"/services/modal"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"ChartData Members",id:"chartdata-members",level:2},{value:"PieChartDataset Members",id:"piechartdataset-members",level:2},{value:"PieChartDatasetDataLabels Members",id:"piechartdatasetdatalabels-members",level:2},{value:"PieChartOptions Members",id:"piechartoptions-members",level:2},{value:"Examples",id:"examples",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"Data labels",id:"data-labels",level:3}],m={toc:p},h="wrapper";function c(t){let{components:a,...e}=t;return(0,r.kt)(h,(0,n.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blazor-pie-chart"},"Blazor Pie Chart"),(0,r.kt)("p",null,"A Blazor Bootstrap pie chart component is a circular chart that shows the proportional values of different categories."),(0,r.kt)(i.ZP,{mdxType:"CarbonAd"}),(0,r.kt)("img",{src:"https://i.imgur.com/dDpIuzk.png",alt:"Blazor Chart Component - Blazor Pie Chart"}),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Height"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets chart height."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Width"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets chart width."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Return type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AddDataAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ChartData")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds data to bar chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AddDatasetAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ChartData")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds dataset to bar chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"InitializeAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Task"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initialize Bar Chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UpdateAsync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Task"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Bar Chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"chartdata-members"},"ChartData Members"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Labels"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Labels."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Datasets"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<IChartDataset>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Datasets."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"piechartdataset-members"},"PieChartDataset Members"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"PieChartDataset")," implements ",(0,r.kt)("strong",{parentName:"p"},"IChartDataset"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BackgroundColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BackgroundColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BorderColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BorderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the BorderWidth."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Clip"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: clip: {left: 5, top: false, right: -2, bottom: 0}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the Data."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Datalabels"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PieChartDatasetDataLabels")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the data labels"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configures the visibility state of the dataset. Set it to true, to hide the dataset from the chart."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HoverBackgroundColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBackgroundColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HoverBorderColor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<string>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderColor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HoverBorderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"List<double>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the HoverBorderWidth."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get or sets the chart type."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"piechartdatasetdatalabels-members"},"PieChartDatasetDataLabels Members"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Anchor"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"center")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the anchor."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BorderWidth"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"double?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the border width."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.2")))),(0,r.kt)("h2",{id:"piechartoptions-members"},"PieChartOptions Members"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"PieChartOptions")," implements ",(0,r.kt)("strong",{parentName:"p"},"ChartOptions"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Added Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Locale"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string?")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the locale. By default, the chart is using the default locale of the platform which is running on."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Plugins"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PieChartPlugins")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Plugins."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.10.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Responsive"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Gets or sets the Responsive."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.0.0")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/blazor-webassembly"},"getting started guide")," for setting up charts."),(0,r.kt)("h3",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"In the following example, a categorical 12-color palette is used."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For data visualization, you can use the predefined palettes ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorBuilder.CategoricalTwelveColors")," for a 12-color palette and ",(0,r.kt)("inlineCode",{parentName:"p"},"ColorBuilder.CategoricalSixColors")," for a 6-color palette.\nThese palettes offer a range of distinct and visually appealing colors that can be applied to represent different categories or data elements in your visualizations.")),(0,r.kt)("img",{src:"https://i.imgur.com/ieBupT2.png",alt:"Blazor Bootstrap: Pie Chart Component - How it works"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<PieChart @ref="pieChart" Width="500" Class="mb-5" />\n\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await RandomizeAsync()"> Randomize </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDatasetAsync()"> Add Dataset </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDataAsync()">Add Data</Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'@code {\n    private PieChart pieChart = default!;\n    private PieChartOptions pieChartOptions = default!;\n    private ChartData chartData = default!;\n    private string[]? backgroundColors;\n\n    private int datasetsCount = 0;\n    private int dataLabelsCount = 0;\n\n    private Random random = new();\n\n    protected override void OnInitialized()\n    {\n        backgroundColors = ColorBuilder.CategoricalTwelveColors;\n        chartData = new ChartData { Labels = GetDefaultDataLabels(4), Datasets = GetDefaultDataSets(1) };\n\n        pieChartOptions = new();\n        pieChartOptions.Responsive = true;\n        pieChartOptions.Plugins.Title.Text = "2022 - Sales";\n        pieChartOptions.Plugins.Title.Display = true;\n    }\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            await pieChart.InitializeAsync(chartData, pieChartOptions);\n        }\n        await base.OnAfterRenderAsync(firstRender);\n    }\n\n    private async Task RandomizeAsync()\n    {\n        if (chartData is null || chartData.Datasets is null || !chartData.Datasets.Any()) return;\n\n        var newDatasets = new List<IChartDataset>();\n\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is PieChartDataset pieChartDataset\n                && pieChartDataset is not null\n                && pieChartDataset.Data is not null)\n            {\n                var count = pieChartDataset.Data.Count;\n\n                var newData = new List<double>();\n                for (var i = 0; i < count; i++)\n                {\n                    newData.Add(random.Next(0, 100));\n                }\n\n                pieChartDataset.Data = newData;\n                newDatasets.Add(pieChartDataset);\n            }\n        }\n\n        chartData.Datasets = newDatasets;\n\n        await pieChart.UpdateAsync(chartData, pieChartOptions);\n    }\n\n    private async Task AddDatasetAsync()\n    {\n        if (chartData is null || chartData.Datasets is null) return;\n\n        var chartDataset = GetRandomPieChartDataset();\n        chartData = await pieChart.AddDatasetAsync(chartData, chartDataset, pieChartOptions);\n    }\n\n    private async Task AddDataAsync()\n    {\n        if (dataLabelsCount >= 12)\n            return;\n\n        if (chartData is null || chartData.Datasets is null)\n            return;\n\n        var data = new List<IChartDatasetData>();\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is PieChartDataset pieChartDataset)\n                data.Add(new PieChartDatasetData(pieChartDataset.Label, random.Next(0, 100), backgroundColors![dataLabelsCount]));\n        }\n\n        chartData = await pieChart.AddDataAsync(chartData, GetNextDataLabel(), data);\n\n        dataLabelsCount += 1;\n    }\n\n    #region Data Preparation\n\n    private List<IChartDataset> GetDefaultDataSets(int numberOfDatasets)\n    {\n        var datasets = new List<IChartDataset>();\n\n        for (var index = 0; index < numberOfDatasets; index++)\n        {\n            datasets.Add(GetRandomPieChartDataset());\n        }\n\n        return datasets;\n    }\n\n    private PieChartDataset GetRandomPieChartDataset()\n    {\n        datasetsCount += 1;\n        return new() { Label = $"Team {datasetsCount}", Data = GetRandomData(), BackgroundColor = GetRandomBackgroundColors() };\n    }\n\n    private List<double> GetRandomData()\n    {\n        var data = new List<double>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            data.Add(random.Next(0, 100));\n        }\n\n        return data;\n    }\n\n    private List<string> GetRandomBackgroundColors()\n    {\n        var colors = new List<string>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            colors.Add(backgroundColors![index]);\n        }\n\n        return colors;\n    }\n\n    private List<string> GetDefaultDataLabels(int numberOfLabels)\n    {\n        var labels = new List<string>();\n        for (var index = 0; index < numberOfLabels; index++)\n        {\n            labels.Add(GetNextDataLabel());\n            dataLabelsCount += 1;\n        }\n\n        return labels;\n    }\n\n    private string GetNextDataLabel() => $"Product {dataLabelsCount + 1}";\n\n    private string GetNextDataBackgrounfColor() => backgroundColors![dataLabelsCount];\n\n    #endregion  Data Preparation\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/charts/pie-chart#how-it-works"},"See the demo here.")),(0,r.kt)("h3",{id:"data-labels"},"Data labels"),(0,r.kt)("img",{src:"https://i.imgur.com/dDpIuzk.png",alt:"Blazor Bootstrap: Pie Chart Component - Data labels"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cshtml",metastring:"{} showLineNumbers","{}":!0,showLineNumbers:!0},'<PieChart @ref="pieChart" Width="500" Class="mb-5" />\n\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await RandomizeAsync()"> Randomize </Button>\n<Button Type="ButtonType.Button" Color="ButtonColor.Primary" Size="Size.Small" @onclick="async () => await AddDataAsync()">Add Data</Button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{28,94,96,98} showLineNumbers","{28,94,96,98}":!0,showLineNumbers:!0},'@code {\n    private PieChart pieChart = default!;\n    private PieChartOptions pieChartOptions = default!;\n    private ChartData chartData = default!;\n    private string[]? backgroundColors;\n\n    private int datasetsCount = 0;\n    private int dataLabelsCount = 0;\n\n    private Random random = new();\n\n    protected override void OnInitialized()\n    {\n        backgroundColors = ColorBuilder.CategoricalTwelveColors;\n        chartData = new ChartData { Labels = GetDefaultDataLabels(4), Datasets = GetDefaultDataSets(3) };\n\n        pieChartOptions = new();\n        pieChartOptions.Responsive = true;\n        pieChartOptions.Plugins.Title.Text = "2022 - Sales";\n        pieChartOptions.Plugins.Title.Display = true;\n    }\n\n    protected override async Task OnAfterRenderAsync(bool firstRender)\n    {\n        if (firstRender)\n        {\n            // pass the plugin name to enable the data labels\n            await pieChart.InitializeAsync(chartData: chartData, chartOptions: pieChartOptions, plugins: new string[] { "ChartDataLabels" });\n        }\n        await base.OnAfterRenderAsync(firstRender);\n    }\n\n    private async Task RandomizeAsync()\n    {\n        if (chartData is null || chartData.Datasets is null || !chartData.Datasets.Any()) return;\n\n        var newDatasets = new List<IChartDataset>();\n\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is PieChartDataset pieChartDataset\n                && pieChartDataset is not null\n                && pieChartDataset.Data is not null)\n            {\n                var count = pieChartDataset.Data.Count;\n\n                var newData = new List<double>();\n                for (var i = 0; i < count; i++)\n                {\n                    newData.Add(random.Next(0, 100));\n                }\n\n                pieChartDataset.Data = newData;\n                newDatasets.Add(pieChartDataset);\n            }\n        }\n\n        chartData.Datasets = newDatasets;\n\n        await pieChart.UpdateAsync(chartData, pieChartOptions);\n    }\n\n    private async Task AddDataAsync()\n    {\n        if (dataLabelsCount >= 12)\n            return;\n\n        if (chartData is null || chartData.Datasets is null)\n            return;\n\n        var data = new List<IChartDatasetData>();\n        foreach (var dataset in chartData.Datasets)\n        {\n            if (dataset is PieChartDataset pieChartDataset)\n                data.Add(new PieChartDatasetData(pieChartDataset.Label, random.Next(0, 100), backgroundColors![dataLabelsCount]));\n        }\n\n        chartData = await pieChart.AddDataAsync(chartData, GetNextDataLabel(), data);\n\n        dataLabelsCount += 1;\n    }\n\n    #region Data Preparation\n\n    private List<IChartDataset> GetDefaultDataSets(int numberOfDatasets)\n    {\n        var datasets = new List<IChartDataset>();\n\n        for (var index = 0; index < numberOfDatasets; index++)\n        {\n            var dataset = GetRandomPieChartDataset();\n\n            if (index == 0)\n                dataset.Datalabels.Anchor = "end";\n            else if (index == numberOfDatasets - 1)\n                dataset.Datalabels.Anchor = "end";\n            else\n                dataset.Datalabels.Anchor = "center";\n\n            datasets.Add(dataset);\n        }\n\n        return datasets;\n    }\n\n    private PieChartDataset GetRandomPieChartDataset()\n    {\n        datasetsCount += 1;\n        return new() { Label = $"Team {datasetsCount}", Data = GetRandomData(), BackgroundColor = GetRandomBackgroundColors() };\n    }\n\n    private List<double> GetRandomData()\n    {\n        var data = new List<double>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            data.Add(random.Next(0, 100));\n        }\n\n        return data;\n    }\n\n    private List<string> GetRandomBackgroundColors()\n    {\n        var colors = new List<string>();\n        for (var index = 0; index < dataLabelsCount; index++)\n        {\n            colors.Add(backgroundColors![index]);\n        }\n\n        return colors;\n    }\n\n    private List<string> GetDefaultDataLabels(int numberOfLabels)\n    {\n        var labels = new List<string>();\n        for (var index = 0; index < numberOfLabels; index++)\n        {\n            labels.Add(GetNextDataLabel());\n            dataLabelsCount += 1;\n        }\n\n        return labels;\n    }\n\n    private string GetNextDataLabel() => $"Product {dataLabelsCount + 1}";\n\n    private string GetNextDataBackgrounfColor() => backgroundColors![dataLabelsCount];\n\n    #endregion  Data Preparation\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://demos.blazorbootstrap.com/charts/pie-chart#data-labels"},"See the demo here.")))}c.isMDXComponent=!0}}]);