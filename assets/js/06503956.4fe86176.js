"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),c=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(b,l(l({ref:t},u),{},{components:r})):o.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1,title:"Types",description:"Comment d\xe9finir le type d'outil n\xe9cessaire pour r\xe9colter un bloc ?",tags:["blocs","tools"]},l=void 0,s={unversionedId:"blocs/tools/types",id:"version-1.18/blocs/tools/types",title:"Types",description:"Comment d\xe9finir le type d'outil n\xe9cessaire pour r\xe9colter un bloc ?",source:"@site/versioned_docs/version-1.18/blocs/tools/types.md",sourceDirName:"blocs/tools",slug:"/blocs/tools/types",permalink:"/1.18/blocs/tools/types",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18/blocs/tools/types.md",tags:[{label:"blocs",permalink:"/1.18/tags/blocs"},{label:"tools",permalink:"/1.18/tags/tools"}],version:"1.18",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Types",description:"Comment d\xe9finir le type d'outil n\xe9cessaire pour r\xe9colter un bloc ?",tags:["blocs","tools"]},sidebar:"tutorialSidebar",previous:{title:"Tiers",permalink:"/1.18/blocs/tools/tiers"},next:{title:"Mod\xe8les",permalink:"/1.18/category/models"}},a={},c=[{value:"Types d&#39;outil de base",id:"types-doutil-de-base",level:2},{value:"Types d&#39;outil customs",id:"types-doutil-customs",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Depuis la 1.17, le type d'outil n\xe9cessaire pour r\xe9colter un bloc est d\xe9fini par un tag attribu\xe9 le contenant."),(0,n.kt)("h2",{id:"types-doutil-de-base"},"Types d'outil de base"),(0,n.kt)("p",null,"Si vous souhaitez que votre bloc soit r\xe9coltable \xe0 la main, il n'est pas n\xe9cessaire de l'ajouter dans un tag. Dans le cas contraire, assurez-vous d'ajouter votre bloc au(x) tag(s) our qu'ainsi votre bloc puisse se miner plus rapidement avec les outils associ\xe9s (et si la ",(0,n.kt)("a",{parentName:"p",href:"../properties"},"propri\xe9t\xe9")," ",(0,n.kt)("inlineCode",{parentName:"p"},"requiresToolForDrops()")," est d\xe9finie, cela impliquera que les outils sp\xe9cifi\xe9s seront les seuls pour r\xe9colter le butin du bloc) :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hache : ",(0,n.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/axe")),(0,n.kt)("li",{parentName:"ul"},"Pioche : ",(0,n.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/pickaxe")),(0,n.kt)("li",{parentName:"ul"},"Pelle : ",(0,n.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/shovel")),(0,n.kt)("li",{parentName:"ul"},"Houe : ",(0,n.kt)("inlineCode",{parentName:"li"},"minecraft:mineable/hoe"))),(0,n.kt)("h2",{id:"types-doutil-customs"},"Types d'outil customs"),(0,n.kt)("p",null,"Pour cr\xe9er un type custom, il vous suffit de cr\xe9er un tag (qui sera contenu dans le dossier ",(0,n.kt)("inlineCode",{parentName:"p"},"data/modid/tags/blocks"),") ainsi que sa variable associ\xe9e comme celle-ci :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public static final TagKey<Block> MON_TOOL_TYPE = BlockTags.create(new ResourceLocation("modid", "mon_tool_type"));\n')),(0,n.kt)("p",null,"Il vous suffira ensuite d'utiliser ce tag dans l'appel ",(0,n.kt)("inlineCode",{parentName:"p"},"super()")," du constructeur de votre classe h\xe9riti\xe8re de ",(0,n.kt)("inlineCode",{parentName:"p"},"DiggerItem"),"."))}p.isMDXComponent=!0}}]);