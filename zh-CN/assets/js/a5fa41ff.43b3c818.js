"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[58824],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return _}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(t),_=i,k=u["".concat(c,".").concat(_)]||u[_]||d[_]||l;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var o=2;o<l;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80763:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=["components"],s={title:"ElasticSearch \u5f15\u64ce",sidebar_position:11},c=void 0,o={unversionedId:"engine-usage/elasticsearch",id:"version-1.2.0/engine-usage/elasticsearch",isDocsHomePage:!1,title:"ElasticSearch \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis1.X \u4e2d\uff0cElasticSearch \u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/engine-usage/elasticsearch.md",sourceDirName:"engine-usage",slug:"/engine-usage/elasticsearch",permalink:"/zh-CN/docs/latest/engine-usage/elasticsearch",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2.0/engine-usage/elasticsearch.md",tags:[],version:"1.2.0",sidebarPosition:11,frontMatter:{title:"ElasticSearch \u5f15\u64ce",sidebar_position:11},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Pipeline \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/pipeline"},next:{title:"Presto \u5f15\u64ce",permalink:"/zh-CN/docs/latest/engine-usage/presto"}},p=[{value:"1. \u73af\u5883\u51c6\u5907",id:"1-\u73af\u5883\u51c6\u5907",children:[]},{value:"2. \u90e8\u7f72\u548c\u914d\u7f6e",id:"2-\u90e8\u7f72\u548c\u914d\u7f6e",children:[{value:"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 \u5f15\u64ce\u7684\u6807\u7b7e",id:"23-\u5f15\u64ce\u7684\u6807\u7b7e",children:[]},{value:"2.4 ElasticSearch \u5f15\u64ce\u76f8\u5173\u914d\u7f6e",id:"24-elasticsearch-\u5f15\u64ce\u76f8\u5173\u914d\u7f6e",children:[]}]},{value:"3. ElasticSearch\u5f15\u64ce\u4f7f\u7528",id:"3-elasticsearch\u5f15\u64ce\u4f7f\u7528",children:[{value:"3.1 \u51c6\u5907\u64cd\u4f5c",id:"31-\u51c6\u5907\u64cd\u4f5c",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]}]},{value:"4. ElasticSearch\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4-elasticsearch\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis1.X \u4e2d\uff0cElasticSearch \u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"1-\u73af\u5883\u51c6\u5907"},"1. \u73af\u5883\u51c6\u5907"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ElasticSearch \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u51c6\u5907 ElasticSearch \u670d\u52a1\u5e76\u63d0\u4f9b\u8fde\u63a5\u4fe1\u606f\uff0c\u5982 ElasticSearch \u96c6\u7fa4\u7684\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u7b49"),(0,l.kt)("h2",{id:"2-\u90e8\u7f72\u548c\u914d\u7f6e"},"2. \u90e8\u7f72\u548c\u914d\u7f6e"),(0,l.kt)("h3",{id:"21-\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 \u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,l.kt)("p",null,"\u6ce8\u610f: \u7f16\u8bd1 ElasticSearch \u5f15\u64ce\u4e4b\u524d\u9700\u8981\u8fdb\u884c Linkis \u9879\u76ee\u5168\u91cf\u7f16\u8bd1",(0,l.kt)("br",{parentName:"p"}),"\n","\u53d1\u5e03\u7684\u5b89\u88c5\u90e8\u7f72\u5305\u4e2d\u9ed8\u8ba4\u4e0d\u5305\u542b\u6b64\u5f15\u64ce\u63d2\u4ef6\uff0c\n\u4f60\u53ef\u4ee5\u6309",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis\u5f15\u64ce\u5b89\u88c5\u6307\u5f15"),"\u90e8\u7f72\u5b89\u88c5 \uff0c\u6216\u8005\u6309\u4ee5\u4e0b\u6d41\u7a0b\uff0c\u624b\u52a8\u7f16\u8bd1\u90e8\u7f72"),(0,l.kt)("p",null,"\u5355\u72ec\u7f16\u8bd1 ElasticSearch \u5f15\u64ce "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-engineconn-plugins/elasticsearch/\nmvn clean install\n")),(0,l.kt)("h3",{id:"22-\u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 \u7269\u6599\u7684\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,l.kt)("p",null,"\u5c06 2.1 \u6b65\u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u5305,\u4f4d\u4e8e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/jdbc/target/out/elasticsearch\n")),(0,l.kt)("p",null,"\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,l.kt)("p",null,"\u5e76\u91cd\u542flinkis-engineplugin\uff08\u6216\u8005\u901a\u8fc7\u5f15\u64ce\u63a5\u53e3\u8fdb\u884c\u5237\u65b0\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-engineplugin\n")),(0,l.kt)("h3",{id:"23-\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 \u5f15\u64ce\u7684\u6807\u7b7e"),(0,l.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,l.kt)("p",null,"\u7ba1\u7406\u53f0\u7684\u914d\u7f6e\u662f\u6309\u7167\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u5982\u679c\u65b0\u589e\u7684\u5f15\u64ce\uff0c\u6709\u914d\u7f6e\u53c2\u6570\u9700\u8981\u914d\u7f6e\u7684\u8bdd\uff0c\u9700\u8981\u4fee\u6539\u5bf9\u5e94\u7684\u8868\u7684\u5143\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1ahive-2.3.3\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @ENGINE_LABEL=\"elasticsearch-7.6.2\";\nSET @ENGINE_IDE=CONCAT('*-IDE,',@ENGINE_LABEL);\nSET @ENGINE_NAME=\"elasticsearch\";\n\n-- add es engine to IDE\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @ENGINE_IDE, 'OPTIONAL', 2, now(), now());\nselect @label_id := id from `linkis_cg_manager_label` where label_value = @ENGINE_IDE;\ninsert into `linkis_ps_configuration_category` (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- insert configuration key\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.cluster', '\u4f8b\u5982:http://127.0.0.1:9200', '\u8fde\u63a5\u5730\u5740', 'http://127.0.0.1:9200', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.datasource', '\u8fde\u63a5\u522b\u540d', '\u8fde\u63a5\u522b\u540d', 'hadoop', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.username', 'username', 'ES\u96c6\u7fa4\u7528\u6237\u540d', '\u65e0', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.password', 'password', 'ES\u96c6\u7fa4\u5bc6\u7801', '\u65e0', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.auth.cache', '\u5ba2\u6237\u7aef\u662f\u5426\u7f13\u5b58\u8ba4\u8bc1', '\u5ba2\u6237\u7aef\u662f\u5426\u7f13\u5b58\u8ba4\u8bc1', 'false', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sniffer.enable', '\u5ba2\u6237\u7aef\u662f\u5426\u5f00\u542f sniffer', '\u5ba2\u6237\u7aef\u662f\u5426\u5f00\u542f sniffer', 'false', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.http.method', '\u8c03\u7528\u65b9\u5f0f', 'HTTP\u8bf7\u6c42\u65b9\u5f0f', 'GET', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.http.endpoint', '/_search', 'JSON \u811a\u672c\u8c03\u7528\u7684 Endpoint', '/_search', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sql.endpoint', '/_sql', 'SQL \u811a\u672c\u8c03\u7528\u7684 Endpoint', '/_sql', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.sql.format', 'SQL \u811a\u672c\u8c03\u7528\u7684\u6a21\u677f\uff0c%s \u66ff\u6362\u6210 SQL \u4f5c\u4e3a\u8bf7\u6c42\u4f53\u8bf7\u6c42Es \u96c6\u7fa4', '\u8bf7\u6c42\u4f53', '{\"query\":\"%s\"}', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.es.headers.*', '\u5ba2\u6237\u7aef Headers \u914d\u7f6e', '\u5ba2\u6237\u7aef Headers \u914d\u7f6e', '\u65e0', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.engineconn.concurrent.limit', '\u5f15\u64ce\u6700\u5927\u5e76\u53d1', '\u5f15\u64ce\u6700\u5927\u5e76\u53d1', '100', 'None', '', @ENGINE_NAME, 0, 0, 1, '\u6570\u636e\u6e90\u914d\u7f6e');\n\n\n-- elasticsearch engine -*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as config_key_id, label.id AS engine_type_label_id FROM `linkis_ps_configuration_config_key` config\nINNER JOIN `linkis_cg_manager_label` label ON config.engine_conn_type = @ENGINE_NAME and label_value = @ENGINE_IDE);\n\n-- elasticsearch engine default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select relation.config_key_id AS config_key_id, '' AS config_value, relation.engine_type_label_id AS config_label_id FROM `linkis_ps_configuration_key_engine_relation` relation\nINNER JOIN `linkis_cg_manager_label` label ON relation.engine_type_label_id = label.id AND label.label_value = @ENGINE_IDE);\n\n")),(0,l.kt)("h3",{id:"24-elasticsearch-\u5f15\u64ce\u76f8\u5173\u914d\u7f6e"},"2.4 ElasticSearch \u5f15\u64ce\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.cluster"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u96c6\u7fa4\uff0c\u591a\u4e2a\u8282\u70b9\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.datasource"),(0,l.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch datasource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u96c6\u7fa4\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u96c6\u7fa4\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.auth.cache"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u662f\u5426\u7f13\u5b58\u8ba4\u8bc1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sniffer.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u662f\u5426\u5f00\u542f sniffer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.http.method"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u65b9\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.http.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"/_search"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON \u811a\u672c\u8c03\u7528\u7684 Endpoint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"/_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL \u811a\u672c\u8c03\u7528\u7684 Endpoint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.format"),(0,l.kt)("td",{parentName:"tr",align:null},'{"query":"%s"}'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"SQL \u811a\u672c\u8c03\u7528\u7684\u6a21\u677f\uff0c%s \u66ff\u6362\u6210 SQL \u4f5c\u4e3a\u8bf7\u6c42\u4f53\u8bf7\u6c42Es \u96c6\u7fa4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.headers.*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef Headers \u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f15\u64ce\u6700\u5927\u5e76\u53d1")))),(0,l.kt)("h2",{id:"3-elasticsearch\u5f15\u64ce\u4f7f\u7528"},"3. ElasticSearch\u5f15\u64ce\u4f7f\u7528"),(0,l.kt)("h3",{id:"31-\u51c6\u5907\u64cd\u4f5c"},"3.1 \u51c6\u5907\u64cd\u4f5c"),(0,l.kt)("p",null,"\u60a8\u9700\u8981\u914d\u7f6eElasticSearch\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u5305\u62ec\u8fde\u63a5\u5730\u5740\u4fe1\u606f\u6216\u7528\u6237\u540d\u5bc6\u7801(\u5982\u679c\u542f\u7528)\u7b49\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22620332/182787195-8051bf25-1e1e-47e5-ad88-4896278857f2.png",alt:"ElasticSearch"}),"  "),(0,l.kt)("p",null,"\u56fe3-1 ElasticSearch\u914d\u7f6e\u4fe1\u606f"),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u518d\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\u4e2d\u7684params.configuration.runtime\u8fdb\u884c\u4fee\u6539\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"linkis.es.cluster\nlinkis.es.datasource\nlinkis.es.username               \nlinkis.es.password\n")),(0,l.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"-codeType \u53c2\u6570\u8bf4\u660e")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"essql\uff1a\u901a\u8fc7SQL\u811a\u672c\u7684\u65b9\u5f0f\u6267\u884cElasticSearch\u5f15\u64ce\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},"esjson\uff1a\u901a\u8fc7JSON\u811a\u672c\u7684\u65b9\u5f0f\u6267\u884cElasticSearch\u5f15\u64ce\u4efb\u52a1")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cElasticSearch\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"essql\u65b9\u5f0f\u793a\u4f8b")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4f7f\u7528\u8fd9\u79cd\u5f62\u5f0f\uff0cElasticSearch\u670d\u52a1\u5fc5\u987b\u5b89\u88c5SQL\u63d2\u4ef6\uff0c\u5b89\u88c5\u65b9\u5f0f\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NLPchina/elasticsearch-sql#elasticsearch-762"},"https://github.com/NLPchina/elasticsearch-sql#elasticsearch-762")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},' sh ./bin/linkis-cli -submitUser hadoop -engineType elasticsearch-7.6.2 -codeType essql -code \'{"sql": "select * from kibana_sample_data_ecommerce limit 10\' -runtimeMap linkis.es.http.method=GET -runtimeMap linkis.es.http.endpoint=/_sql -runtimeMap linkis.es.datasource=hadoop  -runtimeMap linkis.es.cluster=127.0.0.1:9200\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"esjson\u65b9\u5f0f\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -submitUser hadoop -engineType elasticsearch-7.6.2 -codeType esjson -code \'{"query": {"match": {"order_id": "584677"}}}\' -runtimeMap linkis.es.http.method=GET -runtimeMap linkis.es.http.endpoint=/kibana_sample_data_ecommerce/_search -runtimeMap linkis.es.datasource=hadoop  -runtimeMap linkis.es.cluster=127.0.0.1:9200\n')),(0,l.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/latest/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,l.kt)("h2",{id:"4-elasticsearch\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4. ElasticSearch\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,l.kt)("p",null,"ElasticSearch\u7684\u7528\u6237\u8bbe\u7f6e\u4e3b\u8981\u662f\u8bbe\u7f6eElasticSearch\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u4f46\u662f\u5efa\u8bae\u7528\u6237\u5c06\u6b64\u5bc6\u7801\u7b49\u4fe1\u606f\u8fdb\u884c\u52a0\u5bc6\u7ba1\u7406\u3002"))}u.isMDXComponent=!0}}]);