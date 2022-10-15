"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,v=p["".concat(i,".").concat(c)]||p[c]||m[c]||s;return a?n.createElement(v,l(l({ref:t},d),{},{components:a})):n.createElement(v,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},55:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1,title:"Framework",description:"Comment utiliser le framework de test int\xe9gr\xe9 \xe0 Forge ?",tags:["avanc\xe9","game_test"]},l=void 0,o={unversionedId:"advanced/gametests/framework",id:"advanced/gametests/framework",title:"Framework",description:"Comment utiliser le framework de test int\xe9gr\xe9 \xe0 Forge ?",source:"@site/docs/advanced/gametests/framework.md",sourceDirName:"advanced/gametests",slug:"/advanced/gametests/framework",permalink:"/advanced/gametests/framework",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/advanced/gametests/framework.md",tags:[{label:"avanc\xe9",permalink:"/tags/avance"},{label:"game_test",permalink:"/tags/game-test"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Framework",description:"Comment utiliser le framework de test int\xe9gr\xe9 \xe0 Forge ?",tags:["avanc\xe9","game_test"]},sidebar:"documentationSidebar",previous:{title:"GameTest Framework",permalink:"/category/gametests"},next:{title:"Batches",permalink:"/advanced/gametests/batches"}},i={},u=[{value:"Cr\xe9er un test",id:"cr\xe9er-un-test",level:2},{value:"La template",id:"la-template",level:3},{value:"Le code",id:"le-code",level:3},{value:"Si vous choisissez de garder le test uniquement dans votre projet",id:"si-vous-choisissez-de-garder-le-test-uniquement-dans-votre-projet",level:4},{value:"Si vous choisissez de garder le test avec votre mod",id:"si-vous-choisissez-de-garder-le-test-avec-votre-mod",level:4},{value:"Cr\xe9er la classe des tests",id:"cr\xe9er-la-classe-des-tests",level:4},{value:"Renommer la template",id:"renommer-la-template",level:4},{value:"Remplir le GameTest (la m\xe9thode)",id:"remplir-le-gametest-la-m\xe9thode",level:4},{value:"Lancer les tests",id:"lancer-les-tests",level:2},{value:"Lancer les tests avec la configuration runClient",id:"lancer-les-tests-avec-la-configuration-runclient",level:3},{value:"Lancer les tests avec la configuration runGameTestServer",id:"lancer-les-tests-avec-la-configuration-rungametestserver",level:3}],d={toc:u};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le ",(0,r.kt)("strong",{parentName:"p"},"Game Test Framework")," est, comme son nom l'indique, un ",(0,r.kt)("em",{parentName:"p"},"framework")," permettant de ",(0,r.kt)("em",{parentName:"p"},"tester")," le jeu. Plus pr\xe9cis\xe9ment, il permet de tester des m\xe9caniques du jeu stock\xe9es sous forme de structures et ex\xe9cut\xe9es par groupes, par exemple le pathfinding d'un villageois ou encore un piston qui pousse des blocks."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si vous souhaitez en savoir plus sur ce framework, par exemple sur comment Mojang l'utilise, je vous invite \xe0 regarder ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=vXaWOJTCYNg"},"cette vid\xe9o"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"L'impl\xe9mentation de ce syst\xe8me pour les moddeurs ayant \xe9t\xe9 ajout\xe9e dans Forge 39.0.88, vous devez \xeatre dans une version sup\xe9rieure ou \xe9gale \xe0 celle-ci pour l'utiliser (Je vous invite cependant \xe0 utiliser la derni\xe8re version, car il y a eu des changements dans ce syst\xe8me depuis son impl\xe9mentation)."),(0,r.kt)("p",{parentName:"admonition"},"Vous devez aussi v\xe9rifier que pour chaque configuration de lancement dans votre build.gradle, vous avez bien la ligne suivante : property ",(0,r.kt)("inlineCode",{parentName:"p"},"forge.enabledGameTestNamespaces"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"votre_mod_id"),", celle-ci activant tous les tests li\xe9s \xe0 votre modid."),(0,r.kt)("p",{parentName:"admonition"},"Enfin, si vous ne l'avez pas, je vous invite \xe0 ajouter la configuration de lancement ",(0,r.kt)("inlineCode",{parentName:"p"},"runGameTestServer")," avec les autres. Celle-ci va lancer un serveur sur votre ordinateur qui va ex\xe9cuter tous les tests puis se fermer. Vous pouvez trouver plus d'informations dessus dans la section ",(0,r.kt)("strong",{parentName:"p"},"Ex\xe9cuter les tests"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Le code en question (remplacez bien ",(0,r.kt)("code",null,"votre_mod_id")," par votre modid, attention il est pr\xe9sent plusieurs fois)"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"gameTestServer {\n    workingDirectory project.file('run')\n    \n    // Recommended logging data for a userdev environment\n    // The markers can be added/remove as needed separated by commas.\n    // \"SCAN\": For mods scan.\n    // \"REGISTRIES\": For firing of registry events.\n    // \"REGISTRYDUMP\": For getting the contents of all registries.\n    property 'forge.logging.markers', 'REGISTRIES'\n    \n    // Recommended logging level for the console\n    // You can set various levels here.\n    // Please read: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels\n    property 'forge.logging.console.level', 'debug'\n    \n    // Comma-separated list of namespaces to load gametests from. Empty = all namespaces.\n    property 'forge.enabledGameTestNamespaces', 'votre_mod_id'\n\n    mods {\n        votre_mod_id {\n            source sourceSets.main\n        }\n    }\n}\n")))),(0,r.kt)("h2",{id:"cr\xe9er-un-test"},"Cr\xe9er un test"),(0,r.kt)("h3",{id:"la-template"},"La template"),(0,r.kt)("p",null,"Pour cr\xe9er un test, il suffit d'aller en jeu et d'utiliser la commande :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/test create nomDuTest longueurDeLaStructure hauteurDeLaStructure profondeurDeLaStructure")),(0,r.kt)("p",null,"(La longueur, la largeur et la profondeur de la structure sont des valeurs optionnelles)\nLe nom du test n'est pas important, car il devra \xeatre chang\xe9 plus tard de toute fa\xe7on."),(0,r.kt)("p",null,"Vous devriez normalement voir quelque chose de similaire \xe0 cela :\n",(0,r.kt)("img",{alt:"Une nouvelle template",src:a(877).Z,width:"856",height:"512"})),(0,r.kt)("p",null,"Une fois cela fait, je vous invite \xe0 construire votre test. Je testerais ici le hopper \xe0 des fins de d\xe9monstrations. J'ai donc juste pos\xe9 un hopper, comme cela :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Une template avec un hopper",src:a(7714).Z,width:"856",height:"512"})),(0,r.kt)("p",null,'Une fois votre template(le nom de ce que vous venez de cr\xe9er) de test finie, il vous suffit de faire un clic droit sur le bloc de structure(celui qui est violet) et de cliquer sur le bouton "SAVE" ',(0,r.kt)("strong",{parentName:"p"},"en bas \xe0 droite"),"(pas l'autre)."),(0,r.kt)("h3",{id:"le-code"},"Le code"),(0,r.kt)("p",null,"Avant de continuer, vous devez faire un choix :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soit vous d\xe9cidez de garder le test uniquement dans votre projet, par exemple il ne sera pas inclus dans le jar que vous cr\xe9erez ou sur votre repo git si vous en avez"),(0,r.kt)("li",{parentName:"ul"},"Soit vous pr\xe9f\xe9rez l'inclure")),(0,r.kt)("h4",{id:"si-vous-choisissez-de-garder-le-test-uniquement-dans-votre-projet"},"Si vous choisissez de garder le test uniquement dans votre projet"),(0,r.kt)("p",null,"Dans le jeu, faites la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"/test exportthis"),'. Ensuite, allez dans le dossier run \xe0 la racine de votre projet, puis dans le dossier gameteststructures. Vous devriez normalement trouver un fichier qui a le m\xeame nom que celui de votre test. Vous pouvez maintenant passer la section correspondant \xe0 l\'autre choix, et lorsque que je parlerais ensuite du "fichier s\xe9lectionn\xe9", je parlerais de celui-l\xe0.'),(0,r.kt)("h4",{id:"si-vous-choisissez-de-garder-le-test-avec-votre-mod"},"Si vous choisissez de garder le test avec votre mod"),(0,r.kt)("p",null,"Allez dans le dossier run \xe0 la racine de votre projet. Ensuite, allez dans saves puis s\xe9lectionnez le dossier qui correspond au nom du monde dans lequel vous avez cr\xe9\xe9 votre template. Il vous suffit juste d'aller dans generated/minecraft/structures et vous devriez trouver un fichier qui a le m\xeame nom que la template que vous avez cr\xe9\xe9e. Copiez ce fichier et collez-le dans le dossier de vos structures (dans le dossier resources : data/modid/structures). Lorsque je parlerais du fichier s\xe9lectionn\xe9, ce sera de celui que vous venez de coller."),(0,r.kt)("h4",{id:"cr\xe9er-la-classe-des-tests"},"Cr\xe9er la classe des tests"),(0,r.kt)("p",null,"Une fois votre fichier s\xe9lectionn\xe9, il va falloir cr\xe9er une classe qui va contenir vos tests. Le nom et l'emplacement sont bien s\xfbr libres. Une fois cette classe cr\xe9\xe9e, vous devez signaler \xe0 Forge qu'elle existe et qu'elle contient des tests. Pour ce faire, vous avez deux solutions :"),(0,r.kt)("p",null,"Soit utiliser l'annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHolder")," comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GameTestHolder("votre_mod_id")\npublic class VotreClasseDeTests{\n    //etc\n}\n')),(0,r.kt)("p",null,"Soit utiliser l'event RegisterGameTestsEvent :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void onRegisterGameTests(RegisterGameTestsEvent event) {\n    event.register(VotreClasseDeTests.class);\n}\n")),(0,r.kt)("p",null,"Vous pouvez maintenant cr\xe9er dans cette m\xeame classe la m\xe9thode qui va s'occuper de votre test. Cette m\xe9thode doit utiliser l'annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@GameTest")," et accepter comme argument un",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHelper"),"."),(0,r.kt)("p",null,"L'annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@GameTest")," est configurable avec les arguments suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom de l'argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Valeur par d\xe9faut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeoutTicks")),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit le temps maximal d'ex\xe9cution de ce test avant qu'il ne renvoie une erreur (le test peut finir son ex\xe9cution avant s'il succ\xe8de). Pour des tests utilisant des choses al\xe9atoires comme les entit\xe9s ou les random tick(du bl\xe9 qui pousse par exemple), il est conseill\xe9 d'augmenter ce temps."),(0,r.kt)("td",{parentName:"tr",align:null},"100 ticks (5 secondes)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batch")),(0,r.kt)("td",{parentName:"tr",align:null},"Le nom d'un groupe qui peut \xeatre utilis\xe9 pour grouper des tests similaires ensemble."),(0,r.kt)("td",{parentName:"tr",align:null},'"defaultBatch"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rotationSteps")),(0,r.kt)("td",{parentName:"tr",align:null},"Permet de tourner une template. 0 = aucune rotation, 1 = 90 degr\xe9s dans le sens des aiguilles d'une montre, 2 = 180 degr\xe9s, 3 = 270 degr\xe9s dans le sens des aiguilles d'une montre. N'importe quelle valeur non comprise entre 0 et 3 retournera une erreur."),(0,r.kt)("td",{parentName:"tr",align:null},"0 (Aucune rotation)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"Si cette valeur est mise \xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", le groupe de tests entier retournera une erreur si le test n'est pas valid\xe9. Au contraire, si cette valeur est mise \xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", l'erreur sera pr\xe9sente dans les logs mais n'affectera pas le groupe de tests."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"templateNamespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Ajout\xe9e par Forge, cet argument d\xe9termine depuis quel namespace (un modid est un namespace) la template sera charg\xe9e. Cet argument d\xe9termine aussi si un GameTest sera charg\xe9 en se basant sur la propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"td"},"forge.enabledGameTestNamespaces")," qui est dans chacune de vos configurations de lancement."),(0,r.kt)("td",{parentName:"tr",align:null},'"minecraft"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"template")),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit le chemin d'acc\xe8s \xe0 la template relatif \xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"data/modid/structures")," utilis\xe9 pour la charger."),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"setupTicks")),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit combien de ticks le jeu attend apr\xe8s avoir fait appara\xeetre la template avant que le game test ne commence."),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attempts")),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit combien de fois le jeu essaye d'ex\xe9cuter le game test avant de renvoyer une erreur (si le nombre de succ\xe8s requis est atteint avant, le jeu valide le test et arr\xeate de l'ex\xe9cuter)."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requiredSuccesses")),(0,r.kt)("td",{parentName:"tr",align:null},"D\xe9finit combien de fois le test doit r\xe9ussir pour qu'il soit valid\xe9 et ne renvoie pas d'erreur. Cette valeur ne fait rien si ",(0,r.kt)("inlineCode",{parentName:"td"},"attempts")," est \xe9gal \xe0 1."),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si vous ne sp\xe9cifiez pas l'argument ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),", Forge prendra le nom de la m\xe9thode qui g\xe8re le GameTest en question(en minuscules). Forge ajoute aussi d'ailleurs le nom de la classe(aussi en minuscules) o\xf9 le GameTest est et un point avant ce nom pour obtenir le chemin final, qui ressemble \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"data/modid/structures/nomdelaclasse.nomdelatemplate.nbt")," ou \xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"run/gameteststructures/nomdelaclasse.nomdelatemplate.snbt"),". Si vous ne voulez pas que Forge rajoute le nom de la classe avant le nom de la template, vous pouvez rajouter l'annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@PrefixGameTestTemplate(false)"),"devant la m\xe9thode ou la classe (s'appliquera \xe0 toutes les m\xe9thodes) "),(0,r.kt)("p",{parentName:"admonition"},"Si vous avez utilis\xe9 l'annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@GameTestHolder")," avec votre modid, vous n'avez pas besoin de sp\xe9cifier le ",(0,r.kt)("inlineCode",{parentName:"p"},"templateNamespace"),". Ce n'est pas le cas si vous utilisez l'event ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterGameTestEvent"),"."),(0,r.kt)("p",{parentName:"admonition"},"Veuillez aussi noter que le ",(0,r.kt)("inlineCode",{parentName:"p"},"templateNamespace")," sert aussi \xe0 d\xe9terminer si le test sera ex\xe9cut\xe9 ou non, en m\xe9thode du ou des modid renseign\xe9s dans le build.gradle dans les lignes ",(0,r.kt)("inlineCode",{parentName:"p"},"property 'forge.enabledGameTestNamespaces', 'votre_mod_id'")," dans vos configurations de lancement pr\xe9sentes dans votre build.gradle. Vous pouvez d'ailleurs utiliser plusieurs modid pour les tests comme ceci : ",(0,r.kt)("inlineCode",{parentName:"p"},"property 'forge.enabledGameTestNamespaces', 'votre_mod_id,autre_mod_id,encore_un_autre'"))),(0,r.kt)("h4",{id:"renommer-la-template"},"Renommer la template"),(0,r.kt)("p",null,"Maintenant que vous avez toutes ces informations, je vous invite \xe0 renommer votre template (le fichier s\xe9lectionn\xe9) ou \xe0 ajuster la ou les annotations qui sont devant votre m\xe9thode."),(0,r.kt)("h4",{id:"remplir-le-gametest-la-m\xe9thode"},"Remplir le GameTest (la m\xe9thode)"),(0,r.kt)("p",null,"Dans le GameTest, vous pouvez ajouter des instructions qui permettent d'ex\xe9cuter votre test, puis des instructions permettant de v\xe9rifier que le test a r\xe9ussi. L'instance de la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHelper")," que vous recevez en argument est faite pour cela."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"La classe ",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHelper")," contient une grande quantit\xe9 de m\xe9thodes visant \xe0 aider \xe0 ex\xe9cuter votre test et \xe0 v\xe9rifier que tout s'est bien pass\xe9. Pour voir toutes les m\xe9thodes disponibles, je vous invite \xe0 aller regarder le code de cette classe."),(0,r.kt)("p",{parentName:"admonition"},"Dans la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHelper"),", lorsqu'une instance de la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockPos")," est demand\xe9e, pour poser un bloc par exemple, ",(0,r.kt)("strong",{parentName:"p"},"elle doit \xeatre en coordonn\xe9es relatives"),", c'est-\xe0-dire en coordonn\xe9es par rapport \xe0 l'origine de la template (le structure block).")),(0,r.kt)("p",null,"Comme dit plus haut, les m\xe9thodes de la class ",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHelper")," sont l\xe0 pour vous aider \xe0 remplir votre GameTest."),(0,r.kt)("p",null,"Dans mon exemple j'utiliserais la template cr\xe9\xe9e plus haut"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@GameTest(template = \"hopper_test\")\npublic static void doHopperTest(GameTestHelper helper){\n    helper.spawnItem(Items.DIAMOND, 2, 3, 2); // Fait appara\xeetre un diamant en (2, 3, 2)\n    helper.assertAtTickTimeContainerContains(20, new BlockPos(2, 2, 2), Items.DIAMOND); // Attend 20 ticks puis v\xe9rifie que le conteneur en (2, 2, 2)(le hopper) contient un diamant\n    helper.runAtTickTime(21, helper::succeed); // attend jusqu'au 21\xe8me tick du test puis le valide si aucune erreur ne s'est produite\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si le GameTest n'est pas une m\xe9thode statique, une nouvelle instance de votre classe de tests sera cr\xe9\xe9e pour chaque test.")),(0,r.kt)("p",null,"Les noms des m\xe9thodes et des variables ne sont pas importants, vous pouvez mettre ce que vous voulez."),(0,r.kt)("p",null,"Peu importe le type de test, vous devriez trouver une m\xe9thode qui vous permettra de le r\xe9aliser dans la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"GameTestHelper"),"."),(0,r.kt)("h2",{id:"lancer-les-tests"},"Lancer les tests"),(0,r.kt)("p",null,"Pour lancer les tests et v\xe9rifier leurs bons fonctionnements, vous avez deux solutions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les lancer en jeu dans la configuration runClient"),(0,r.kt)("li",{parentName:"ul"},"Les lancer de mani\xe8re non visible avec la configuration runGameTestServer")),(0,r.kt)("h3",{id:"lancer-les-tests-avec-la-configuration-runclient"},"Lancer les tests avec la configuration runClient"),(0,r.kt)("p",null,"Lorsque vous \xeates en jeu, vous pouvez soit lancer tous les tests en utilisant la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"/test runAll"),", soit lancer un test sp\xe9cifique avec ",(0,r.kt)("inlineCode",{parentName:"p"},"/test run <nom_du_test>"),"."),(0,r.kt)("p",null,"Une fois le ou les tests lanc\xe9s, vous devriez voir les templates \xeatre ajout\xe9es au monde et les tests s'ex\xe9cuter."),(0,r.kt)("p",null,"Si un test est un succ\xe8s, un beacon vert appara\xeetra proche de la template."),(0,r.kt)("p",null,"Si un test \xe9choue, un beacon rouge appara\xeetra proche de la template ainsi qu'un livre contenant les erreurs pos\xe9 sur un pupitre. Vous aurez aussi un message dans le chat."),(0,r.kt)("p",null,"Si vous voulez ex\xe9cuter \xe0 nouveau un test, vous pouvez le faire en utilisant la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"/test runThis"),", qui ex\xe9cutera \xe0 nouveau le test le plus proche du joueur. Vous pouvez aussi appuyer sur le bouton pos\xe9 sur le command block proche du test."),(0,r.kt)("h3",{id:"lancer-les-tests-avec-la-configuration-rungametestserver"},"Lancer les tests avec la configuration runGameTestServer"),(0,r.kt)("p",null,"Pour ex\xe9cuter les tests avec la configuration runGameTestServer, il vous suffit de la lancer."),(0,r.kt)("p",null,"Cette configuration lance un serveur minecraft qui va ex\xe9cuter les tests puis s'arr\xeater."),(0,r.kt)("p",null,"Le code de sortie de la configuration runGameTestServer est \xe9gal au nombre de tests marqu\xe9 comme requis qui ont \xe9chou\xe9."),(0,r.kt)("p",null,"C'est la configuration utilis\xe9e pour faire de la CI par exemple."))}m.isMDXComponent=!0},877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gametest_nouvelle_template-a012d3ed21b26327b606ff64e5350493.png"},7714:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gametest_template_hopper-5600d4547d9f3e0462cd5936fa82238a.png"}}]);