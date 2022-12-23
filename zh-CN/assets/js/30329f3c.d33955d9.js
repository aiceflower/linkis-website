"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[65544],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return t?o.createElement(d,i(i({ref:n},c),{},{components:t})):o.createElement(d,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var r={};for(var u in n)hasOwnProperty.call(n,u)&&(r[u]=n[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const l={title:"\u5982\u4f55\u7f16\u5199 Github Action",authors:["BeaconTown"],tags:["github"]},i=void 0,r={permalink:"/zh-CN/blog/2022/07/04/how-to-add-auto-bot",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-07-04-how-to-add-auto-bot.md",title:"\u5982\u4f55\u7f16\u5199 Github Action",description:"1 \u6982\u8ff0",date:"2022-07-04T00:00:00.000Z",formattedDate:"2022\u5e747\u67084\u65e5",tags:[{label:"github",permalink:"/zh-CN/blog/tags/github"}],readingTime:12.075,hasTruncateMarker:!1,authors:[{name:"BeaconTown",title:"\u5b66\u751f",url:"https://github.com/Beacontownfc/",imageURL:"https://avatars.githubusercontent.com/u/89081023?s=40&v=4",key:"BeaconTown"}],frontMatter:{title:"\u5982\u4f55\u7f16\u5199 Github Action",authors:["BeaconTown"],tags:["github"]},prevItem:{title:"\u5982\u4f55\u8fdb\u884c Kubernetes \u90e8\u7f72",permalink:"/zh-CN/blog/2022/07/16/deploy-linkis-with-kubernetes"},nextItem:{title:"Apache Linkis Meet up",permalink:"/zh-CN/blog/2022/06/09/meetup-content-review"}},u={authorsImageUrls:[void 0]},s=[{value:"1 \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2 \u4e00\u4e9b\u540d\u8bcd\u672f\u8bed",id:"2-\u4e00\u4e9b\u540d\u8bcd\u672f\u8bed",level:2},{value:"2.1 \u4ec0\u4e48\u662f\u6301\u7eed\u96c6\u6210",id:"21-\u4ec0\u4e48\u662f\u6301\u7eed\u96c6\u6210",level:4},{value:"2.2 yaml\u662f\u4ec0\u4e48",id:"22-yaml\u662f\u4ec0\u4e48",level:4},{value:"3 \u5f00\u59cb\u7f16\u5199\u7b2c\u4e00\u4e2aworkflow",id:"3-\u5f00\u59cb\u7f16\u5199\u7b2c\u4e00\u4e2aworkflow",level:2},{value:"3.1 \u5982\u4f55\u81ea\u5b9aworkflow\u7684\u540d\u5b57",id:"31-\u5982\u4f55\u81ea\u5b9aworkflow\u7684\u540d\u5b57",level:4},{value:"3.2 \u5982\u4f55\u81ea\u5b9aworkflow\u7684\u89e6\u53d1\u4e8b\u4ef6",id:"32-\u5982\u4f55\u81ea\u5b9aworkflow\u7684\u89e6\u53d1\u4e8b\u4ef6",level:4},{value:"3.3 \u5982\u4f55\u5b9a\u4e49\u4e00\u4e2ajob",id:"33-\u5982\u4f55\u5b9a\u4e49\u4e00\u4e2ajob",level:4},{value:"3.4 \u5982\u4f55\u5b9a\u4e49 job \u7684\u8fd0\u884c\u73af\u5883",id:"34-\u5982\u4f55\u5b9a\u4e49-job-\u7684\u8fd0\u884c\u73af\u5883",level:4},{value:"3.5 step\u7684\u4f7f\u7528",id:"35-step\u7684\u4f7f\u7528",level:4},{value:"4 \u5982\u4f55\u7f16\u5199\u81ea\u5df1\u7684action",id:"4-\u5982\u4f55\u7f16\u5199\u81ea\u5df1\u7684action",level:2},{value:"4.1 action.yml\u7684\u914d\u7f6e",id:"41-actionyml\u7684\u914d\u7f6e",level:4},{value:"4.2\u4f7f\u7528Docker\u955c\u50cf",id:"42\u4f7f\u7528docker\u955c\u50cf",level:4},{value:"5 Github action\u9879\u76ee\u5b9e\u6218",id:"5-github-action\u9879\u76ee\u5b9e\u6218",level:2},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:5},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:5}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6982\u8ff0"},"1 \u6982\u8ff0"),(0,a.kt)("p",null,"\u5927\u5bb6\u77e5\u9053\uff0c",(0,a.kt)("a",{parentName:"p",href:"#21-%E4%BB%80%E4%B9%88%E6%98%AF%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90"},"\u6301\u7eed\u96c6\u6210"),"\u7531\u5f88\u591a\u64cd\u4f5c\u7ec4\u6210\uff0c\u6bd4\u5982\u6293\u53d6\u4ee3\u7801\u3001\u8fd0\u884c\u6d4b\u8bd5\u3001\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u53d1\u5e03\u5230\u7b2c\u4e09\u65b9\u670d\u52a1\u7b49\u7b49\u3002gitHub \u628a\u8fd9\u4e9b\u64cd\u4f5c\u5c31\u79f0\u4e3a actions\u3002\u5f88\u591a\u64cd\u4f5c\u5728\u4e0d\u540c\u9879\u76ee\u91cc\u9762\u662f\u7c7b\u4f3c\u7684\uff0c\u5b8c\u5168\u53ef\u4ee5\u5171\u4eab\u3002github\u6ce8\u610f\u5230\u4e86\u8fd9\u4e00\u70b9\uff0c\u60f3\u51fa\u4e86\u4e00\u4e2a\u5f88\u5999\u7684\u70b9\u5b50\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u628a\u6bcf\u4e2a\u64cd\u4f5c\u5199\u6210\u72ec\u7acb\u7684\u811a\u672c\u6587\u4ef6\uff0c\u5b58\u653e\u5230\u4ee3\u7801\u4ed3\u5e93\uff0c\u4f7f\u5f97\u5176\u4ed6\u5f00\u53d1\u8005\u53ef\u4ee5\u5f15\u7528\u3002\u5982\u679c\u4f60\u9700\u8981\u67d0\u4e2a action\uff0c\u4e0d\u5fc5\u81ea\u5df1\u5199\u590d\u6742\u7684\u811a\u672c\uff0c\u76f4\u63a5\u5f15\u7528\u4ed6\u4eba\u5199\u597d\u7684 action \u5373\u53ef\uff0c\u6574\u4e2a\u6301\u7eed\u96c6\u6210\u8fc7\u7a0b\uff0c\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a actions \u7684\u7ec4\u5408\u3002\u8fd9\u5c31\u662fgitHub actions \u6700\u7279\u522b\u7684\u5730\u65b9\u3002"),(0,a.kt)("p",null,"Github\u4e3a\u5e7f\u5927\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace"},"github action\u5e02\u573a"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece\u8fd9\u4e2a\u5e02\u573a\u4e2d\u627e\u5230\u6211\u4eec\u60f3\u8981\u7684github action\u5e76\u914d\u7f6e\u5230\u4ed3\u5e93\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"workflow"),"\u4e2d\u5b9e\u73b0\u81ea\u52a8\u5316\u64cd\u4f5c\uff0c\u5f53\u7136\u8fd9\u4e2a\u5e02\u573a\u80fd\u63d0\u4f9b\u7684github action\u6709\u9650\uff0c\u6709\u4e9b\u60c5\u51b5\u4e0b\u627e\u4e0d\u5230\u80fd\u6ee1\u8db3\u6211\u4eec\u9700\u6c42\u7684github action\uff0c\u672c\u7bc7\u535a\u5ba2\u5728\u540e\u9762\u6211\u4e5f\u4f1a\u6559\u5927\u5bb6\u5982\u4f55\u81ea\u5df1\u7f16\u5199github action\u3002"),(0,a.kt)("h2",{id:"2-\u4e00\u4e9b\u540d\u8bcd\u672f\u8bed"},"2 \u4e00\u4e9b\u540d\u8bcd\u672f\u8bed"),(0,a.kt)("h4",{id:"21-\u4ec0\u4e48\u662f\u6301\u7eed\u96c6\u6210"},"2.1 \u4ec0\u4e48\u662f\u6301\u7eed\u96c6\u6210"),(0,a.kt)("p",null,"\u7b80\u5355\u8bf4\u5c31\u662f\u81ea\u52a8\u5316\u7a0b\u5e8f\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u524d\u7aef\u7a0b\u5e8f\u5458\u6bcf\u6b21\u63d0\u4ea4\u4ee3\u7801\u5230 Github \u7684\u4ed3\u5e93\u540e\uff0cGithub \u90fd\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u673a\uff08Mac / Windows / Linux \u4efb\u6211\u4eec\u9009\uff09\uff0c\u6765\u6267\u884c\u4e00\u6bb5\u6216\u591a\u6bb5\u6307\u4ee4\uff08\u7531\u6211\u4eec\u5b9a\uff09\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n")),(0,a.kt)("h4",{id:"22-yaml\u662f\u4ec0\u4e48"},"2.2 yaml\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"\u6211\u4eec\u96c6\u6210github action\u7684\u505a\u6cd5\uff0c\u5c31\u662f\u5728\u6211\u4eec\u4ed3\u5e93\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflow"),"\u76ee\u5f55\uff0c\u91cc\u9762\u653e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"*.yaml"),"\u6587\u4ef6\u2014\u2014\u8fd9\u4e2ayaml\u6587\u4ef6\u5c31\u662f\u6211\u4eec\u914d\u7f6egithub action\u6240\u7528\u7684\u6587\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a\u975e\u5e38\u5bb9\u6613\u7684\u811a\u672c\u8bed\u8a00\uff0c\u5bf9\u4e8e\u4e0d\u719f\u6089yaml\u7684\u7528\u6237\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes"},"\u53c2\u8003\u6b64\u5904"),"\u3002"),(0,a.kt)("h2",{id:"3-\u5f00\u59cb\u7f16\u5199\u7b2c\u4e00\u4e2aworkflow"},"3 \u5f00\u59cb\u7f16\u5199\u7b2c\u4e00\u4e2aworkflow"),(0,a.kt)("h4",{id:"31-\u5982\u4f55\u81ea\u5b9aworkflow\u7684\u540d\u5b57"},"3.1 \u5982\u4f55\u81ea\u5b9aworkflow\u7684\u540d\u5b57"),(0,a.kt)("p",null,"Workflow\u7684\u540d\u79f0\uff0cgithub\u5728\u5b58\u50a8\u5e93\u7684Action\u9875\u9762\u4e0a\u663e\u793aWorkflow\u7684\u540d\u79f0\u3002\u5982\u679c\u6211\u4eec\u7701\u7565 name\uff0c\u5219github\u4f1a\u5c06\u5176\u8bbe\u7f6e\u4e3a\u76f8\u5bf9\u4e8e\u5b58\u50a8\u5e93\u6839\u76ee\u5f55\u7684\u5de5\u4f5c\u6d41\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: \n  Say Hello\n")),(0,a.kt)("h4",{id:"32-\u5982\u4f55\u81ea\u5b9aworkflow\u7684\u89e6\u53d1\u4e8b\u4ef6"},"3.2 \u5982\u4f55\u81ea\u5b9aworkflow\u7684\u89e6\u53d1\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u6709\u5f88\u591a\uff0c\u4f8b\u5982\uff1a\u7528\u6237\u63d0\u4ea4pull request\u5230\u4ed3\u5e93\u3001\u7528\u6237\u7ed9\u4ed3\u5e93\u63d0\u4ea4issue\u6216\u8005\u7528\u6237\u5173\u95edissue\u7b49\uff0c\u6211\u4eec\u5e0c\u671b\u67d0\u4e9b\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u81ea\u52a8\u6267\u884cworkflow\uff0c\u8fd9\u5c31\u9700\u8981\u5b9a\u4e49\u89e6\u53d1\u4e8b\u4ef6\u4e86\u3002\u4e0b\u9762\u662f\u81ea\u5b9a\u89e6\u53d1\u4e8b\u4ef6\u7684\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  pull_request\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u80fd\u5728\u7528\u6237\u63d0\u4ea4pull request\u65f6\u89e6\u53d1workflow\uff0c\u5bf9\u4e8e\u591a\u4e2a\u4e8b\u4ef6\u6211\u4eec\u7528\u65b9\u62ec\u53f7\u62ec\u8d77\u6765\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  [pull_request,pull]\n")),(0,a.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u5e0c\u671b\u89e6\u53d1\u4e8b\u4ef6\u80fd\u66f4\u5177\u4f53\u4e00\u4e9b\uff0c\u5c31\u6bd4\u5982\u5f53\u4e00\u4e2apull request\u5173\u95ed\u6216\u91cd\u65b0\u5f00\u542f\u65f6\u89e6\u53d1workflow\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  pull_request:\n    type: \n      [reopend,closed]\n")),(0,a.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u89e6\u53d1\u4e8b\u4ef6\u8bf7\u53c2\u8003\u6b64\u5904\u7684",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-workflow-events"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h4",{id:"33-\u5982\u4f55\u5b9a\u4e49\u4e00\u4e2ajob"},"3.3 \u5982\u4f55\u5b9a\u4e49\u4e00\u4e2ajob"),(0,a.kt)("p",null,"\u4e00\u4e2aWorkflow\u7531\u4e00\u4e2a\u6216\u591a\u4e2ajobs\u6784\u6210\uff0c\u542b\u4e49\u662f\u4e00\u6b21\u6301\u7eed\u96c6\u6210\u7684\u8fd0\u884c\uff0c\u53ef\u4ee5\u5b8c\u6210\u591a\u4e2a\u4efb\u52a1\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: \n  Say Hello\non: \n  pull_request\njobs:\n  my_first_job:\n    name: My first job\n  my_second_job:\n    name: My second job\n")),(0,a.kt)("p",null,"\u6bcf\u4e2ajob\u5fc5\u987b\u5177\u6709\u4e00\u4e2aid\u4e0e\u4e4b\u5173\u8054\u3002\u4e0a\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"my_first_job"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"my_second_job"),"\u5c31\u662fjob\u7684id\u3002"),(0,a.kt)("h4",{id:"34-\u5982\u4f55\u5b9a\u4e49-job-\u7684\u8fd0\u884c\u73af\u5883"},"3.4 \u5982\u4f55\u5b9a\u4e49 job \u7684\u8fd0\u884c\u73af\u5883"),(0,a.kt)("p",null,"\u6307\u5b9a\u8fd0\u884cjob\u7684\u8fd0\u884c\u73af\u5883\uff0cgithub\u4e0a\u53ef\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"macos"),(0,a.kt)("li",{parentName:"ul"},"linux")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u6307\u5b9a\u8fd0\u884c\u73af\u5883\u7684\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# \u53d7\u9650\u4e8e\u7bc7\u5e45\uff0c\u524d\u9762\u4ee3\u7801\u90e8\u5206\u7701\u7565\njobs:\n  my_first_job:\n    name: My first job\n  runs-on: macos-10.15\n")),(0,a.kt)("h4",{id:"35-step\u7684\u4f7f\u7528"},"3.5 step\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u6bcf\u4e2ajob\u7531\u591a\u4e2astep\u6784\u6210\uff0c\u5b83\u4f1a\u4ece\u4e0a\u81f3\u4e0b\u4f9d\u6b21\u6267\u884c\u3002step\u53ef\u4ee5\u8fd0\u884ccommands\uff08\u5982linxu\u547d\u4ee4\uff09\u4ee5\u53caaction\u3002\n\u4e0b\u9762\u662f\u4e00\u4e2a\u8f93\u51fahello world\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# \u53d7\u9650\u4e8e\u7bc7\u5e45\uff0c\u524d\u9762\u4ee3\u7801\u90e8\u5206\u7701\u7565\njobs:\n  my_first_job:\n    name: My first job\n  runs-on: macos-10.15\n  step:\n    - name: Print a greeting\n    # \u5b9a\u4e49 step \u7684\u73af\u5883\u53d8\u91cf\n      env:\n        FIRST_WORD: Hello\n        SECOND_WORD: WORD\n      # \u8fd0\u884c\u6307\u4ee4\uff1a\u8f93\u51fa\u73af\u5883\u53d8\u91cf\n      run: |\n        echo $FIRST_WORD $SECOND_WORD.\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u662faction\u7684\u4f7f\u7528\uff0c\u8fd9\u91cc\u7684action\u5176\u5b9e\u5c31\u662f\u547d\u4ee4\uff0c\u6bd4\u5982github\u5b98\u65b9\u7ed9\u4e86\u6211\u4eec\u4e00\u4e9b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace?type=actions&query=actions"},"\u9ed8\u8ba4\u7684\u547d\u4ee4"),"\uff0c\u6211\u4e48\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u547d\u4ee4\u6765\u51cf\u5c11\u4ed3\u5e93\u4e2dworkflow\u7684\u4ee3\u7801\u91cf\u3002\u6700\u5e38\u89c1\u7684action\u662f",(0,a.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/marketplace/actions/checkout"},"checkout"),"\uff0c\u5b83\u53ef\u4ee5\u628a\u4ed3\u5e93\u4e2d\u6700\u65b0\u7684\u4ee3\u7801\u514b\u9686\u5230Workflow\u7684\u5de5\u4f5c\u533a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# \u53d7\u9650\u4e8e\u7bc7\u5e45\uff0c\u524d\u9762\u4ee3\u7801\u90e8\u5206\u7701\u7565\n  step:\n    - name: Check out git repository \n      uses: actions/checkout@v2\n")),(0,a.kt)("p",null,"\u6709\u4e9baction\u4f1a\u9700\u8981\u4f20\u5165\u989d\u5916\u7684\u53c2\u6570\uff0c\u4e00\u822c\u4f7f\u7528with\u6765\u8bbe\u7f6e\u53c2\u6570\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# \u53d7\u9650\u4e8e\u7bc7\u5e45\uff0c\u524d\u9762\u4ee3\u7801\u90e8\u5206\u7701\u7565\n  step:\n    - name: Check out git repository \n      uses: actions/checkout@v2\n      uses: actions/setup-node@v2.2.0\n        with:\n          node-version: 14\n")),(0,a.kt)("h2",{id:"4-\u5982\u4f55\u7f16\u5199\u81ea\u5df1\u7684action"},"4 \u5982\u4f55\u7f16\u5199\u81ea\u5df1\u7684action"),(0,a.kt)("h4",{id:"41-actionyml\u7684\u914d\u7f6e"},"4.1 action.yml\u7684\u914d\u7f6e"),(0,a.kt)("p",null,"\u5f53\u5728github action\u5e02\u573a\u4e0a\u627e\u4e0d\u5230\u6211\u4eec\u60f3\u8981\u7684action\u65f6\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u52a8\u624b\u7f16\u5199\u6ee1\u8db3\u81ea\u5df1\u9700\u6c42\u7684action\u3002\u81ea\u5b9aaction\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".github"),"\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"actions"),"\u76ee\u5f55\uff0c\u7136\u540e\u518d\u65b0\u5efa\u4e00\u4e2a\u81ea\u5b9a\u7684action\u540d\u79f0\u7684\u76ee\u5f55\u3002\u6bcf\u4e2aaction\u90fd\u9700\u8981\u6709\u4e00\u4e2aaction.yml\u7684\u914d\u7f6e\u6587\u4ef6\uff0caction.yml\u7684runs\u6bb5\u5236\u5b9a\u4e86\u64cd\u4f5c\u7684\u542f\u52a8\u65b9\u5f0f\u3002\u542f\u52a8\u65b9\u5f0f\u53ef\u4ee5\u5206\u4e3a\u4e09\u79cd\uff1a\u8fd0\u884c Node.js\u811a\u672c\uff0c\u8fd0\u884cDocker\u955c\u50cf\uff0c\u8fd0\u884c\u7ec4\u5408\u811a\u672c\u3002\u4e0b\u9762\u8bf4\u660eaction.yml\u7684\u5e38\u7528\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: \u81ea\u5b9aaction\u7684\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},"description: \u5bf9action\u9700\u8981\u4f20\u5165\u7684\u53c2\u6570\u6216\u8005\u8f93\u51fa\u8fdb\u884c\u58f0\u660e"),(0,a.kt)("li",{parentName:"ul"},"inputs: \u81ea\u5b9a\u9700\u8981\u8f93\u5165\u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"outputs: \u8f93\u51fa\u7684\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"runs: \u542f\u52a8\u65b9\u5f0f")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2aaction.yml\u7684\u914d\u7f6e\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: "example action"\n\ndescription: "This is an example action"\n\ninputs:\n  param1:\n    description: "The first param of this action"\n    required: true  #\u5fc5\u4f20\u53c2\u6570\u5fc5\u987b\u8981\u8bbe\u7f6erequired\u4e3atrue\n\n  param2:\n    description: "The second param of this action"\n    required: true\n\noutputs:\n  out1:\n    description: "The outputs of this action"\n\nruns:\n  using: node16\n  main: dist/index.js\n  post: dist/index.js\n')),(0,a.kt)("p",null,"\u5c06runs.using\u8bbe\u7f6e\u4e3anode16\u6216node12\uff0c\u5c31\u53ef\u4ee5\u6307\u5b9a\u4e3a\u542f\u52a8Node.js\u811a\u672c\u3002\u7528main\u5b57\u6bb5\u6307\u5b9a\u811a\u672c\u7684\u5165\u53e3\u70b9\u3002\u542f\u52a8\u7684\u65b9\u5f0f\u7c7b\u4f3c\u4e8e\u76f4\u63a5\u8fd0\u884cnode main.js\uff0c\u6240\u4ee5\u5e76\u4e0d\u4f1a\u4ece package.json\u4e2d\u5b89\u88c5\u4f9d\u8d56\u3002\u56e0\u6b64\uff0c\u5728\u5f00\u53d1\u65f6\uff0c\u4e00\u822c\u90fd\u4f1a\u4f7f\u7528\u6253\u5305\u5de5\u5177\u5c06\u4f9d\u8d56\u9879\u6253\u5305\u5230\u4e00\u8d77\uff0c\u8f93\u51fa\u4e00\u4e2a\u5355\u72ec\u7684js\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u5165\u53e3\u70b9\u3002post\u5b57\u6bb5\u53ef\u4ee5\u6307\u5b9a\u6e05\u7406\u5de5\u4f5c\uff0c\u8fd9\u91cc\u7684\u5185\u5bb9\u5c06\u4f1a\u5728 workflow \u7ed3\u675f\u65f6\u8fd0\u884c\u3002"),(0,a.kt)("h4",{id:"42\u4f7f\u7528docker\u955c\u50cf"},"4.2\u4f7f\u7528Docker\u955c\u50cf"),(0,a.kt)("p",null,"\u82e5\u4f7f\u7528Docker\uff0c\u6211\u4eec\u9700\u8981\u628aaction.yml\u4e2d\u7684runs\u4fee\u6539\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"runs:\n  using: docker\n  image: Dockerfile\n")),(0,a.kt)("p",null,"image \u6307\u5b9a\u955c\u50cf\u542f\u52a8\u9700\u8981\u7684Dockerfile\uff0c\u8fd9\u91cc\u6307\u5b9a\u4e3a\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684Dockerfile\u6587\u4ef6\uff0c\u5728 Dockerfile\u4e2d\uff0c\u7528ENTRYPOINT\u6216\u8005CMD\u6307\u5b9a\u542f\u52a8\u7684\u811a\u672c\u3002\u6bd4\u5982\u8fd9\u6837\u5b9a\u4e49\u4e00\u4e2a\u7528python\u8fd0\u884c\u811a\u672c\u7684\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker"},'FROM python:3\n\nRUN pip install --no-cache-dir requests\n\nCOPY . .\n\nCMD [ "python", "/main.py"]\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ef\u4ee5\u770b\u51fa\u4f7f\u7528Docker\u7684\u4f18\u70b9\uff1a\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8fd0\u884c\u73af\u5883\uff0c\u5c31\u80fd\u591f\u4f7f\u7528\u9664\u4e86Node.js\u4ee5\u5916\u7684\u73af\u5883\uff0c\u4e5f\u80fd\u4f7f\u7528\u5176\u4ed6\u7684\u8bed\u8a00\u3002"),(0,a.kt)("h2",{id:"5-github-action\u9879\u76ee\u5b9e\u6218"},"5 Github action\u9879\u76ee\u5b9e\u6218"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u6211\u4f1a\u4ee5\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u6765\u8bb2\u8ff0\u5982\u4f55\u7f16\u5199\u81ea\u5df1\u7684github action\u3002"),(0,a.kt)("h5",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684github\u4ed3\u5e93\u4e2d\u6709\u8bb8\u591a\u5f85\u5904\u7406\u7684issue\uff0c\u7528\u6237\u63d0\u4ea4\u7684\u6bcf\u4e00\u4e2apull request\u53ef\u80fd\u4f1a\u5173\u8054\u4e00\u4e2aissue\uff0c\u5982\u679c\u6bcf\u5408\u5e76\u4e00\u4e2apull request\u540e\u5c31\u8981\u624b\u52a8\u5173\u95ed\u4e00\u4e2aissue\u4f1a\u76f8\u5f53\u7e41\u7410\u3002"),(0,a.kt)("h5",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),(0,a.kt)("p",null,"\u8fd9\u65f6workflow\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002\u6211\u4eec\u53ef\u4ee5\u76d1\u542cpull request\u7684closed\u4e8b\u4ef6\uff0c\u540c\u65f6\u5224\u65adclosed\u65f6\u662f\u88abmerged\u5173\u95ed\u8fd8\u662f\u975emerged\u5173\u95ed\u3002\u5982\u679c\u662fmerged\u5173\u95ed\u5219\u5173\u95ed\u5173\u8054\u7684issue\u3002\n\u4f46\u8fd9\u91cc\u4ecd\u7136\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5982\u4f55\u83b7\u53d6\u5173\u8054\u7684issue\uff1f\u6211\u4eec\u53ef\u4ee5\u8981\u6c42\u7528\u6237\u5728\u63d0\u4ea4pull request\u65f6\u5728\u63cf\u8ff0\u90e8\u5206\u6dfb\u52a0\u9700\u8981\u5173\u8054\u7684issue\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"#345"),"\uff0c\u518d\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"345"),"\u7684issue\u7f16\u53f7\u62bd\u53d6\u51fa\u6765\u3002\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u5462\uff1f\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u6765\u7f16\u5199github action\u3002\u4e3a\u4e86\u8ba9github action\u7a0b\u5e8f\u66f4\u52a0\u7b80\u6d01\uff0c\u8fd9\u91cc\u6211\u4f7f\u7528docker\u6765\u542f\u52a8github action\u3002\u9996\u5148\u662f\u51c6\u5907action.yml\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'# github action \u7684\u540d\u79f0\nname: "Auto_close_associate_issue"\n# \u8be5action\u7684\u63cf\u8ff0\ndescription: "Auto close an issue which associate with a PR."\n\n#\u5b9a\u4e49\u9700\u8981\u8f93\u5165\u7684\u53c2\u6570\ninputs:\n  # \u7b2c\u4e00\u4e2a\u53c2\u6570\u540d\u53ebprbody\n  prbody: \n    #\u5bf9\u8be5\u53c2\u6570\u540d\u7684\u63cf\u8ff0\n    description: "The body of the PR to search for related issues"\n    # \u5fc5\u987b\u53c2\u6570\n    required: true\n\noutputs:\n  #\u8f93\u51fa\u7684\u53c2\u6570\u540d\n  issurNumber:\n    description: "The issue number"\n\nruns:\n  # \u4f7f\u7528docker\u955c\u50cf\n  using: "docker"\n  image: "Dockerfile"\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u7f16\u5199\u811a\u672c\u6587\u4ef6\uff0c\u5728\u8fd9\u6211\u4f7f\u7528node.js\u6765\u7f16\u5199\u811a\u672c\uff0c\u6b64\u811a\u672c\u7684\u601d\u8def\u662f\uff1a\u5148\u4ece\u73af\u5883\u4e2d\u83b7\u53d6\u53d8\u91cf\u503c\uff0c\u62bd\u53d6\u51faissue\u7f16\u53f7\u518d\u8f93\u51fa\u5230\u73af\u5883\u4e2d\uff0c\u5bf9\u5e94\u7684\u811a\u672c\uff08\u53d6\u540d\u4e3amain.js\uff09\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u6240\u6709\u4f20\u7ed9github action\u7684\u53c2\u6570\u4e00\u5f8b\u5927\u5199\uff0c\u4e14\u9700\u8981\u52a0\u4e0aINPUT_\u524d\u7f00\uff0c\u6b64\u5904\u662fgithub\u89c4\u5b9a\u7684\nlet body = process.env['INPUT_PRBODY']; \n// \u5229\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u62bd\u53d6\u51faissue\u7f16\u53f7\u6570\u5b57\nlet pattern = /#\\d+/;\nlet issueNumber = body.match(pattern)[0].replace('#', '');\n// \u8f93\u51fa\u5230\u73af\u5883\u4e2d\nconsole.log(`::set-output name=issueNumber::${issueNumber}`);\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u662fdocker\u7684\u955c\u50cf\u6587\u4ef6\uff08\u6587\u4ef6\u540d\u4e3aDockerfile\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'FROM node:10.15\n\nCOPY . .\n\nCMD [ "node", "/main.js"]\n')),(0,a.kt)("p",null,"\u6700\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".github/actions/Auto_close_associate_issue"),"\u8def\u5f84\u4e0b\u653e\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"action.yml"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\u4ee5\u53ca",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),"\u4e09\u4e2a\u6587\u4ef6\uff0c\u4e00\u4e2aaction\u7684\u7f16\u5199\u5230\u6b64\u7ed3\u675f\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u7684\u6700\u540e\u5c31\u662f\u7f16\u5199workflow\uff0cworkflow\u7684\u914d\u7f6e\u5728",(0,a.kt)("a",{parentName:"p",href:"#3-%E5%BC%80%E5%A7%8B%E7%BC%96%E5%86%99%E7%AC%AC%E4%B8%80%E4%B8%AAworkflow"},"\u5f00\u59cb\u7f16\u5199\u7b2c\u4e00\u4e2aworkflow"),"\u4e2d\u8fdb\u884c\u4e86\u7ec6\u81f4\u8bb2\u8ff0\uff0c\u8fd9\u91cc\u5c31\u4e0d\u4f5c\u5177\u4f53\u8d58\u8ff0\u4e86\uff0c\u5177\u4f53\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: Auto close issue when PR is merged\n\non:\n  pull_request_target:\n    types: [ closed ]\n\njobs:\n  close-issue:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: "Auto issue closer"\n        uses: ./.github/actions/Auto_close_associate_issue/\n        id: Closer\n        with:\n          prbody: ${{ github.event.pull_request.body }}\n\n      - name: Close Issue\n        uses: peter-evans/close-issue@v2\n        if: ${{ github.event.pull_request.merged }}\n        with:\n          issue-number: ${{ steps.Closer.outputs.issueNumber }}\n          comment: The associated PR has been merged, this issue is automatically closed, you can reopend if necessary.\n        env:\n          Github_Token: ${{ secrets.GITHUB_TOKEN }}\n          PRNUM: ${{ github.event.pull_request.number }}\n')))}p.isMDXComponent=!0}}]);