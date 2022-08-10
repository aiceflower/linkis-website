"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[13273],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39816:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=["components"],o={title:"ElasticSearch Engine Usage",sidebar_position:11},s=void 0,c={unversionedId:"engine-usage/elasticsearch",id:"engine-usage/elasticsearch",isDocsHomePage:!1,title:"ElasticSearch Engine Usage",description:"This article mainly introduces the configuration, deployment and use of ElasticSearch EngineConn in Linkis1.0.",source:"@site/docs/engine-usage/elasticsearch.md",sourceDirName:"engine-usage",slug:"/engine-usage/elasticsearch",permalink:"/docs/1.2.0/engine-usage/elasticsearch",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/engine-usage/elasticsearch.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"ElasticSearch Engine Usage",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Pipeline Engine",permalink:"/docs/1.2.0/engine-usage/pipeline"},next:{title:"Presto Engine",permalink:"/docs/1.2.0/engine-usage/presto"}},u=[{value:"1. Environment configuration before using the ElasticSearch EngineConn",id:"1-environment-configuration-before-using-the-elasticsearch-engineconn",children:[]},{value:"2. ElasticSearch engineConn configuration and deployment",id:"2-elasticsearch-engineconn-configuration-and-deployment",children:[{value:"2.1 ElasticSearch version selection and compilation",id:"21-elasticsearch-version-selection-and-compilation",children:[]},{value:"2.2 ElasticSearch EngineConn deployment and loading",id:"22-elasticsearch-engineconn-deployment-and-loading",children:[]},{value:"2.3 ElasticSearch EngineConn Labels",id:"23-elasticsearch-engineconn-labels",children:[]},{value:"2.4 ElasticSearch EngineConn configurations",id:"24-elasticsearch-engineconn-configurations",children:[]}]},{value:"3. The use of ElasticSearch EngineConn",id:"3-the-use-of-elasticsearch-engineconn",children:[{value:"3.1 Ready to operate",id:"31-ready-to-operate",children:[]},{value:"3.2 How to use Linkis SDK",id:"32-how-to-use-linkis-sdk",children:[]},{value:"3.2 How to use Linkis-cli",id:"32-how-to-use-linkis-cli",children:[]}]},{value:"4. ElasticSearch EngineConn user settings",id:"4-elasticsearch-engineconn-user-settings",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article mainly introduces the configuration, deployment and use of ElasticSearch EngineConn in Linkis1.0."),(0,l.kt)("h2",{id:"1-environment-configuration-before-using-the-elasticsearch-engineconn"},"1. Environment configuration before using the ElasticSearch EngineConn"),(0,l.kt)("p",null,"If you want to use the ElasticSearch EngineConn on your server, you need to prepare the ElasticSearch connection information, such as the connection address, user name and password of the ElasticSearch service, etc."),(0,l.kt)("h2",{id:"2-elasticsearch-engineconn-configuration-and-deployment"},"2. ElasticSearch engineConn configuration and deployment"),(0,l.kt)("h3",{id:"21-elasticsearch-version-selection-and-compilation"},"2.1 ElasticSearch version selection and compilation"),(0,l.kt)("p",null,"Note: The Linkis project needs to be fully compiled before ElasticSearch EngineConn is built."),(0,l.kt)("p",null,"The published installation and deployment packages do not contain the engine plugin by default."),(0,l.kt)("p",null,"You can click ","[Linkis engine installation guide]"," (",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"),")  to deployment installation, or according to the following process, Manual compilation and deployment"),(0,l.kt)("p",null,"Compile ElasticSearch engine separately"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"${linkis_code_dir}/linkis-enginepconn-lugins/engineconn-plugins/elasticsearch/\nmvn clean install\n")),(0,l.kt)("h3",{id:"22-elasticsearch-engineconn-deployment-and-loading"},"2.2 ElasticSearch EngineConn deployment and loading"),(0,l.kt)("p",null,"Upload the engine package compiled in Step 2.1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${linkis_code_dir}/linkis-engineconn-plugins/engineconn-plugins/jdbc/target/out/elasticsearch\n")),(0,l.kt)("p",null,"to the engine directory on the server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,l.kt)("h3",{id:"23-elasticsearch-engineconn-labels"},"2.3 ElasticSearch EngineConn Labels"),(0,l.kt)("p",null,"Linkis1.x works with tags, so you need to insert data into our database as shown below."),(0,l.kt)("p",null,"The configuration of the management console is managed by engine labels. If a new engine needs to be configured, you need to modify the metadata of the corresponding table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  Insert the key and default values for the engine's configuration parameters\nlinkis_cg_manager_label\uff1aInsert engine label such as\uff1aelasticsearch-7.6.2\nlinkis_ps_configuration_category\uff1a Insert the directory association of the engine\nlinkis_ps_configuration_config_value\uff1a Insert the configuration that the engine needs to show\nlinkis_ps_configuration_key_engine_relation:Association between configuration items and engines\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\nSET @ELASTICSEARCHENG_LABEL=\"elasticsearch-7.6.2\";\nSET @ELASTICSEARCHENG_ALL=CONCAT('*-*,',@ELASTICSEARCHENG_LABEL);\nSET @ELASTICSEARCHENG_IDE=CONCAT('*-IDE,',@ELASTICSEARCHENG_LABEL);\n\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@ELASTICSEARCHENG_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType',@ELASTICSEARCHENG_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @ELASTICSEARCHENG_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.elasticsearcheng.url', 'such as:http://127.0.0.1:8080', 'conn address', 'http://127.0.0.1:8080', 'Regex', '^\\\\s*http://([^:]+)(:\\\\d+)(/[^\\\\?]+)?(\\\\?\\\\S*)?$', 'elasticsearcheng', 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.elasticsearcheng.catalog', 'catalog', 'catalog', 'system', 'None', '', 'elasticsearcheng', 0, 0, 1, 'data source conf');\nINSERT INTO `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `engine_conn_type`, `is_hidden`, `is_advanced`, `level`, `treeName`) VALUES ('linkis.elasticsearcheng.source', 'source', 'source', 'global', 'None', '', 'elasticsearcheng', 0, 0, 1, 'data source conf');\n\n\n-- elasticsearcheng-*\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'elasticsearcheng' and label_value = @ELASTICSEARCHENG_ALL);\n\n-- elasticsearcheng default configuration\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @ELASTICSEARCHENG_ALL);\n\n")),(0,l.kt)("h3",{id:"24-elasticsearch-engineconn-configurations"},"2.4 ElasticSearch EngineConn configurations"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"configurations"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"is necessary"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.cluster"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9200"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster\uff0cseparate multiple nodes using commas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.username"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.password"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch cluster password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.auth.cache"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the client is cache authenticated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sniffer.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the sniffer is enabled on the client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.http.method"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Request methods")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.http.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"/_search"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"the Endpoint in JSON Script")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"/_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"the Endpoint in SQL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.sql.format"),(0,l.kt)("td",{parentName:"tr",align:null},'{"query":"%s"}'),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"the template of SQL script call , %s replaced with SQL as the body of the request request ElasticSearch cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.es.headers.*"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Headers configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.engineconn.concurrent.limit"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum engine concurrency of ElasticSearch cluster")))),(0,l.kt)("h2",{id:"3-the-use-of-elasticsearch-engineconn"},"3. The use of ElasticSearch EngineConn"),(0,l.kt)("h3",{id:"31-ready-to-operate"},"3.1 Ready to operate"),(0,l.kt)("p",null,"You need to configure ElasticSearch connection information, including connection address information and user name and password (if needed)."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/22620332/182787195-8051bf25-1e1e-47e5-ad88-4896278857f2.png",alt:"ElasticSearch"}),"  "),(0,l.kt)("p",null,"Figure 3-1 ElasticSearch Configuration information"),(0,l.kt)("p",null,"You can also specify in the RuntimeMap of the submitted task."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"linkis.es.cluster\nlinkis.es.username               |\nlinkis.es.password\n")),(0,l.kt)("h3",{id:"32-how-to-use-linkis-sdk"},"3.2 How to use Linkis SDK"),(0,l.kt)("p",null,"Linkis provides a client method to call ElasticSearch tasks. The call method is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2.0/user-guide/linkiscli-manual"},"JAVA SDK Manual"),"."),(0,l.kt)("p",null,"For the ElasticSearch task, you only need to change the EngineConnType and CodeType parameters in the Demo."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "elasticsearch-7.6.2"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "elasticsearch"); // required codeType\n')),(0,l.kt)("h3",{id:"32-how-to-use-linkis-cli"},"3.2 How to use Linkis-cli"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"-codeType parameter description")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"sql/essql\uff1a"),(0,l.kt)("li",{parentName:"ul"},"json/esjson\uff1arequest parameters are submitted in JSON format")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Using the sample")),(0,l.kt)("p",null,"After Linkis 1.0, you can submit tasks through cli. We only need to specify the corresponding EngineConn and CodeType tag types. The use of ElasticSearch is as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -submitUser hadoop -engineType elasticsearch-7.6.2 -codeType json -code \'{"query": {"match": {"order_id": "584677"}}}\' -runtimeMap linkis.es.http.method=GET -runtimeMap linkis.es.http.endpoint=/kibana_sample_data_ecommerce/_search\n')),(0,l.kt)("p",null,"Specific use can refer to\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.2.0/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,l.kt)("h2",{id:"4-elasticsearch-engineconn-user-settings"},"4. ElasticSearch EngineConn user settings"),(0,l.kt)("p",null,"ElasticSearch user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information."))}p.isMDXComponent=!0}}]);