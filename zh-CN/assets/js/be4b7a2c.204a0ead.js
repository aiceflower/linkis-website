"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[12624],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),k=r,d=f["".concat(s,".").concat(k)]||f[k]||u[k]||o;return t?i.createElement(d,a(a({ref:n},c),{},{components:t})):i.createElement(d,a({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57769:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],l={title:"\u542f\u7528 Knife4j",sidebar_position:12},s=void 0,p={unversionedId:"deployment/involve-knife4j-into-linkis",id:"version-1.2.0/deployment/involve-knife4j-into-linkis",isDocsHomePage:!1,title:"\u542f\u7528 Knife4j",description:"knife4j\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/deployment/involve-knife4j-into-linkis.md",sourceDirName:"deployment",slug:"/deployment/involve-knife4j-into-linkis",permalink:"/zh-CN/docs/latest/deployment/involve-knife4j-into-linkis",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/deployment/involve-knife4j-into-linkis.md",tags:[],version:"1.2.0",sidebarPosition:12,frontMatter:{title:"\u542f\u7528 Knife4j",sidebar_position:12},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"\u5f00\u542f Prometheus \u76d1\u63a7",permalink:"/zh-CN/docs/latest/deployment/involve-prometheus-into-linkis"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/latest/user-guide/overview"}},c=[{value:"knife4j\u4ecb\u7ecd",id:"knife4j\u4ecb\u7ecd",children:[]},{value:"Linkis\u96c6\u6210knif4j",id:"linkis\u96c6\u6210knif4j",children:[{value:"\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j",id:"\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j",children:[]},{value:"\u975e\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j",id:"\u975e\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j",children:[]}]},{value:"\u8fdb\u5165Knife4j\u9875\u9762",id:"\u8fdb\u5165knife4j\u9875\u9762",children:[]}],u={toc:c};function f(e){var n=e.components,l=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"knife4j\u4ecb\u7ecd"},"knife4j\u4ecb\u7ecd"),(0,o.kt)("p",null,"knife4j\u662f\u4e3aJava MVC\u6846\u67b6\u96c6\u6210Swagger\u751f\u6210Api\u6587\u6863\u7684\u589e\u5f3a\u89e3\u51b3\u65b9\u6848,\u524d\u8eab\u662fswagger-bootstrap-ui,\u53d6\u540dknife4j\u662f\u5e0c\u671b\u5b83\u80fd\u50cf\u4e00\u628a\u5315\u9996\u4e00\u6837\u5c0f\u5de7,\u8f7b\u91cf,\u5e76\u4e14\u529f\u80fd\u5f3a\u608d!\u5176\u5e95\u5c42\u662f\u5bf9Springfox\u7684\u5c01\u88c5\uff0c\u4f7f\u7528\u65b9\u5f0f\u4e5f\u548cSpringfox\u4e00\u81f4\uff0c\u53ea\u662f\u5bf9\u63a5\u53e3\u6587\u6863UI\u8fdb\u884c\u4e86\u4f18\u5316\n",(0,o.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u529f\u80fd\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6587\u6863\u8bf4\u660e\uff1a\u6839\u636eSwagger\u7684\u89c4\u8303\u8bf4\u660e\uff0c\u8be6\u7ec6\u5217\u51fa\u63a5\u53e3\u6587\u6863\u7684\u8bf4\u660e\uff0c\u5305\u62ec\u63a5\u53e3\u5730\u5740\u3001\u7c7b\u578b\u3001\u8bf7\u6c42\u793a\u4f8b\u3001\u8bf7\u6c42\u53c2\u6570\u3001\u54cd\u5e94\u793a\u4f8b\u3001\u54cd\u5e94\u53c2\u6570\u3001\u54cd\u5e94\u7801\u7b49\u4fe1\u606f\uff0c\u5bf9\u8be5\u63a5\u53e3\u7684\u4f7f\u7528\u60c5\u51b5\u4e00\u76ee\u4e86\u7136\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u8c03\u8bd5\uff1a\u63d0\u4f9b\u5728\u7ebf\u63a5\u53e3\u8054\u8c03\u7684\u5f3a\u5927\u529f\u80fd\uff0c\u81ea\u52a8\u89e3\u6790\u5f53\u524d\u63a5\u53e3\u53c2\u6570,\u540c\u65f6\u5305\u542b\u8868\u5355\u9a8c\u8bc1\uff0c\u8c03\u7528\u53c2\u6570\u53ef\u8fd4\u56de\u63a5\u53e3\u54cd\u5e94\u5185\u5bb9\u3001headers\u3001\u54cd\u5e94\u65f6\u95f4\u3001\u54cd\u5e94\u72b6\u6001\u7801\u7b49\u4fe1\u606f\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5728\u7ebf\u8c03\u8bd5\u3002")),(0,o.kt)("h2",{id:"linkis\u96c6\u6210knif4j"},"Linkis\u96c6\u6210knif4j"),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j"},"\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j"),(0,o.kt)("p",null,"\u4fee\u6539application-linkis.yml\u6587\u4ef6\u8bbe\u7f6eknife4j.production=false"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"knife4j:\n  enable: true\n  production: false\n")),(0,o.kt)("p",null,"\u4fee\u6539 linkis.properties\u6587\u4ef6\u6253\u5f00\u6d4b\u8bd5\u6a21\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.test.mode=true\nwds.linkis.test.user=hadoop\n")),(0,o.kt)("p",null,"\u91cd\u542f\u6240\u6709\u670d\u52a1\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7http://ip:port/api/rest_j/v1/doc.html \u8bbf\u95eeknife4j\u9875\u9762"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"http://ip:port/api/rest_j/v1/doc.html \n")),(0,o.kt)("h3",{id:"\u975e\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j"},"\u975e\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u542f\u52a8knif4j"),(0,o.kt)("p",null,"\u4fee\u6539application-linkis.yml\u6587\u4ef6\u8bbe\u7f6eknife4j.production=false"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"knife4j:\n  enable: true\n  production: false\n")),(0,o.kt)("p",null,"\u4fee\u6539 linkis.properties\u6587\u4ef6\u6dfb\u52a0wds.linkis.server.user.restful.uri.pass.auth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wds.linkis.server.user.restful.uri.pass.auth=/api/rest_j/v1/doc.html,/api/rest_j/v1/swagger-resources,/api/rest_j/v1/webjars,/api/rest_j/v1/v2/api-docs\n")),(0,o.kt)("p",null,"\u91cd\u542f\u6240\u6709\u670d\u52a1\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7http://ip:port/api/rest_j/v1/doc.html \u8bbf\u95eeknife4j\u9875\u9762"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"http://ip:port/api/rest_j/v1/doc.html \n")),(0,o.kt)("p",null,"\u7531\u4e8eknife4j\u8c03\u8bd5\u5404\u63a5\u53e3\u65f6\uff0c\u9700\u8981\u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\uff0c\u9700\u624b\u5de5\u5728\u6d4f\u89c8\u5668\u6dfb\u52a0\u5982\u4e0bcookie\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\u7528\u6237\u767b\u5f55ticket-id\nbdp-user-ticket-id=\n#\u5de5\u4f5c\u7a7a\u95f4ID\nworkspaceId=\n#\u5185\u90e8\u8bf7\u6c42\u5f00\u5173\ndataworkcloud_inner_request=true\n")),(0,o.kt)("p",null,"\u4ee5Chrome\u6d4f\u89c8\u5668\u4e3a\u4f8b\n",(0,o.kt)("img",{src:t(69285).Z})),(0,o.kt)("h2",{id:"\u8fdb\u5165knife4j\u9875\u9762"},"\u8fdb\u5165Knife4j\u9875\u9762"),(0,o.kt)("p",null,"\u901a\u8fc7http://ip:port/api/rest_j/v1/doc.html \u8bbf\u95eeknife4j\u9875\u9762\n",(0,o.kt)("img",{src:t(31965).Z}),"\n\u70b9\u51fb\u63a5\u53e3\u540d\u79f0\u53ef\u5c55\u793a\u8be6\u7ec6\u7684\u63a5\u53e3\u6587\u6863\n",(0,o.kt)("img",{src:t(52406).Z}),"\n\u70b9\u51fb\u201c\u8c03\u8bd5\u201d\u5e76\u5f55\u5165\u53c2\u6570\u53ef\u5bf9\u63a5\u53e3\u8fdb\u884c\u8c03\u8bd5\n",(0,o.kt)("img",{src:t(76149).Z})),(0,o.kt)("p",null,"\u8be6\u7ec6\u4f7f\u7528\u6307\u5357\u53ef\u6d4f\u89c8knife4j\u5b98\u7f51\u67e5\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://doc.xiaominfo.com/knife4j/"},"https://doc.xiaominfo.com/knife4j/")))}f.isMDXComponent=!0},69285:function(e,n,t){n.Z=t.p+"assets/images/Knife4j_addcookie-4e3b5b6fd1a992cd6ea0f7f8faf6be40.png"},76149:function(e,n,t){n.Z=t.p+"assets/images/Knife4j_debug-521c5873cc58c458ea67e065c0174225.png"},31965:function(e,n,t){n.Z=t.p+"assets/images/Knife4j_home-7d4279e2ce931c3a0919d9a3b2b5bf56.png"},52406:function(e,n,t){n.Z=t.p+"assets/images/Knife4j_interface-521c5873cc58c458ea67e065c0174225.png"}}]);