"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[15523],{3905:function(t,n,e){e.d(n,{Zo:function(){return m},kt:function(){return N}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),d=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=d(t.components);return a.createElement(p.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},o=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),o=d(e),N=r,s=o["".concat(p,".").concat(N)]||o[N]||k[N]||l;return e?a.createElement(s,i(i({ref:n},m),{},{components:e})):a.createElement(s,i({ref:n},m))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=o;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var d=2;d<l;d++)i[d]=e[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}o.displayName="MDXCreateElement"},14483:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return o}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),i=["components"],u={title:"Linkis\u5185\u7f6e\u65f6\u95f4\u53d8\u91cf\u4ecb\u7ecd",sidebar_position:7},p=void 0,d={unversionedId:"user-guide/using_dynamic_variables",id:"user-guide/using_dynamic_variables",isDocsHomePage:!1,title:"Linkis\u5185\u7f6e\u65f6\u95f4\u53d8\u91cf\u4ecb\u7ecd",description:"1.\u603b\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/using_dynamic_variables.md",sourceDirName:"user-guide",slug:"/user-guide/using_dynamic_variables",permalink:"/zh-CN/docs/1.2.0/user-guide/using_dynamic_variables",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/using_dynamic_variables.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Linkis\u5185\u7f6e\u65f6\u95f4\u53d8\u91cf\u4ecb\u7ecd",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"DataSource Client SDK \u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.2.0/user-guide/linkis-datasource-client"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.2.0/engine-usage/overview"}},m=[{value:"1.\u603b\u8ff0",id:"1\u603b\u8ff0",children:[{value:"\u9700\u6c42\u80cc\u666f",id:"\u9700\u6c42\u80cc\u666f",children:[]},{value:"\u76ee\u6807",id:"\u76ee\u6807",children:[]}]},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",children:[]},{value:"3. \u529f\u80fd\u4ecb\u7ecd",id:"3-\u529f\u80fd\u4ecb\u7ecd",children:[{value:"3.1 \u5185\u7f6e\u53d8\u91cf\u4e3e\u4f8b",id:"31-\u5185\u7f6e\u53d8\u91cf\u4e3e\u4f8b",children:[]},{value:"3.2 \u81ea\u5b9a\u4e49\u53d8\u91cf\u4f7f\u7528\u5b9e\u4f8b",id:"32-\u81ea\u5b9a\u4e49\u53d8\u91cf\u4f7f\u7528\u5b9e\u4f8b",children:[]}]}],k={toc:m};function o(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u603b\u8ff0"},"1.\u603b\u8ff0"),(0,l.kt)("h3",{id:"\u9700\u6c42\u80cc\u666f"},"\u9700\u6c42\u80cc\u666f"),(0,l.kt)("p",null,"\u7528\u6237\u5e0c\u671b\u5728\u5199\u4ee3\u7801\u65f6\uff0c\u5bf9\u65f6\u95f4\u7684\u683c\u5f0f\u8981\u6c42\u5343\u53d8\u4e07\u5316,\u5df2\u6709\u7684",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis\u81ea\u5b9a\u4e49\u53d8\u91cf"),"\u76ee\u524d\u8fd8\u4e0d\u8db3\u4ee5\u652f\u6491\u8fd9\u4e9b\u9700\u6c42\u3002\u53e6\u5916,\u5df2\u6709\u7684\u65f6\u95f4\u8fd0\u7b97-1\u6709\u4e9b\u8868\u793a\u51cf\u4e00\u4e2a\u6708,\u6709\u4e9b\u5219\u662f\u51cf\u4e00\u5929,\u7528\u6237\u5f88\u5bb9\u6613\u6df7\u6dc6"),(0,l.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u65e5\u671f\u5185\u7f6e\u53d8\u91cf\u90fd\u662f\u76f8\u5bf9run_date\u8ba1\u7b97\u51fa\u6765"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301Pattern\u683c\u5f0f\u65f6\u95f4\u4e14\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u968f\u610f\u6307\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\xb1y/\xb1M/\xb1d/\xb1H\u7b49\u7b49")),(0,l.kt)("p",null,"Pattern\u683c\u5f0f\u5bf9\u7167\u8868:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Letter"),(0,l.kt)("th",{parentName:"tr",align:null},"Date or Time Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Presentation"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"Era designator"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"AD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year"),(0,l.kt)("td",{parentName:"tr",align:null},"Year"),(0,l.kt)("td",{parentName:"tr",align:null},"1996; 96")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Week year"),(0,l.kt)("td",{parentName:"tr",align:null},"Year"),(0,l.kt)("td",{parentName:"tr",align:null},"2009; 09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month in year"),(0,l.kt)("td",{parentName:"tr",align:null},"Month"),(0,l.kt)("td",{parentName:"tr",align:null},"July; Jul; 07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w"),(0,l.kt)("td",{parentName:"tr",align:null},"Week in year"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"W"),(0,l.kt)("td",{parentName:"tr",align:null},"Week in month"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"Day in year"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"189")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day in month"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of week in month"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"Day name in week"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Tuesday; Tue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u"),(0,l.kt)("td",{parentName:"tr",align:null},"Day number of week (1 = Monday, \u2026, 7 = Sunday)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},"Am/pm marker"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"k"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (1-24)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"K"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (0-11)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"h"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (1-12)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null},"Millisecond"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"z"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"General time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"Pacific Standard Time; PST; GMT-08:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Z"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"RFC 822 time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"-0800")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"ISO 8601 time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"-08; -0800; -08:00")))),(0,l.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u603b\u4f53\u8bbe\u8ba1\u548c\u6280\u672f\u67b6\u6784\u53c2\u7167",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis\u81ea\u5b9a\u4e49\u53d8\u91cf")),(0,l.kt)("h2",{id:"3-\u529f\u80fd\u4ecb\u7ecd"},"3. \u529f\u80fd\u4ecb\u7ecd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linkis\u652f\u6301\u7684\u53d8\u91cf\u7c7b\u578b\u5206\u4e3a\u81ea\u5b9a\u4e49\u53d8\u91cf(\u4e0d\u505a\u8d58\u8ff0)\u548c\u7cfb\u7edf\u5185\u7f6e\u53d8\u91cf\uff0c\u81ea\u5b9a\u53d8\u91cf\u65e5\u671f\u652f\u6301+-\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4e2d+-\u662f\u5148\u5bf9linkis\u5185\u7f6e\u53c2\u6570run_date\u8fdb\u884c\u8fd0\u7b97,\u7136\u540e\u5c06%\u4e4b\u524d\u7684pattern\u5b57\u6bb5\u8fdb\u884c\u66ff\u6362,\u975ePattern\u5b57\u7b26\u4e0d\u652f\u6301\u8fd0\u7b97\u66ff\u6362\u3002")),(0,l.kt)("h3",{id:"31-\u5185\u7f6e\u53d8\u91cf\u4e3e\u4f8b"},"3.1 \u5185\u7f6e\u53d8\u91cf\u4e3e\u4f8b"),(0,l.kt)("p",null,"\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d/\u4e1a\u52a1\u5b9e\u9645\u60c5\u51b5\u5b9a\u4e49\u9700\u8981\u52a8\u6001\u6e32\u67d3\u7684\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"variable"),(0,l.kt)("th",{parentName:"tr",align:null},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01%-2y}"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-01-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-01%-2M}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-dd%-2d}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-03-31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy MM ----- HH%-1H}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021 04 ----- 14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyyMMdd%-1d}"),(0,l.kt)("td",{parentName:"tr",align:null},"20210401")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyyMM01%-1M}"),(0,l.kt)("td",{parentName:"tr",align:null},"20210301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{HH%-1H}"),(0,l.kt)("td",{parentName:"tr",align:null},"14")))),(0,l.kt)("h3",{id:"32-\u81ea\u5b9a\u4e49\u53d8\u91cf\u4f7f\u7528\u5b9e\u4f8b"},"3.2 \u81ea\u5b9a\u4e49\u53d8\u91cf\u4f7f\u7528\u5b9e\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5b501: sql")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('&{yyyyMMdd%-1d}', '%Y%m%d'))), '%Y%m%d')\n")),(0,l.kt)("p",null,"\u6e32\u67d3\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('20220705', '%Y%m%d'))), '%Y%m%d')\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5b502: shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls  s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=&{yyyyMMdd%-1d}/\n")),(0,l.kt)("p",null,"\u6e32\u67d3\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls  s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=20220705/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5b503: datax json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "setting": {\n      "speed": {\n        "channel": 1\n      }\n    },\n    "content": [\n      {\n        "reader": {\n          "name": "s3reader",\n          "parameter": {\n            "bucket": "**************",\n            "path": [\n              "ads/tmp/ccass_tm_announcements/&{yyyyMMdd%-1d}/"\n            ],\n            "stored": "parquet",\n            "compression": "NONE",\n            "column": [\n              {\n                "index": 0,\n                "type": "int"\n              },\n              {\n                "index": 1,\n                "type": "string",\n                "constant": "&{yyyyMMdd%-1d}"\n              }\n            ]\n          }\n        },\n        "writer": {\n          "name": "streamwriter",\n          "parameter": {\n            "print": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"\u6e32\u67d3\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "setting": {\n      "speed": {\n        "channel": 1\n      }\n    },\n    "content": [\n      {\n        "reader": {\n          "name": "s3reader",\n          "parameter": {\n            "bucket": "**************",\n            "path": [\n              "ads/tmp/ccass_tm_announcements/20220705/"\n            ],\n            "stored": "parquet",\n            "compression": "NONE",\n            "column": [\n              {\n                "index": 0,\n                "type": "int"\n              },\n              {\n                "index": 1,\n                "type": "string",\n                "constant": "20220705"\n              }\n            ]\n          }\n        },\n        "writer": {\n          "name": "streamwriter",\n          "parameter": {\n            "print": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5b504:python")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(&{yyyyMMdd%-1d})\n")),(0,l.kt)("p",null,"\u6e32\u67d3\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," 20220705\n")))}o.isMDXComponent=!0}}]);