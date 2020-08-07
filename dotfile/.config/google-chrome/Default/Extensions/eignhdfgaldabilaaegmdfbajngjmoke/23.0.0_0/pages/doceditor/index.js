"use strict";cjce.registerTemplate("bm-p-doceditor",function(n,c){var t,i,_,p,g,e={docs:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00391","Docs"),entityName:cjBasics.lang.i18n("cj_i18n_00099","documents"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00607","New document"),iconName:"docs",hasTemplates:!0,emptyStateIcon:"__mdi:drive_document",primaryColor:"#4285f4",docPath:"document",mimeTypes:["application/msword","application/vnd.google-apps.document","application/vnd.ms-word","application/vnd.ms-word.document.12","application/vnd.ms-word.document.macroEnabled.12","application/vnd.msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},sheets:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00393","Sheets"),entityName:cjBasics.lang.i18n("cj_i18n_00100","spreadsheets"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00608","New spreadsheet"),iconName:"sheets",hasTemplates:!0,emptyStateIcon:"__mdi:drive_spreadsheet",primaryColor:"#34a853",primaryLoadingColor:!0,docPath:"spreadsheets",mimeTypes:["application/msexcel","application/vnd.google-apps.spreadsheet","application/vnd.ms-excel","application/vnd.ms-excel.document.12","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.msexcel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]},slides:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00407","Slides"),entityName:cjBasics.lang.i18n("cj_i18n_00101","presentations"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00609","New presentation"),iconName:"slides",hasTemplates:!0,emptyStateIcon:"__mdi:drive_presentation",primaryColor:"#f5a900",primaryLoadingColor:!0,docPath:"presentation",mimeTypes:["application/mspowerpoint","application/vnd.google-apps.presentation","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint.document.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.mspowerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"]},drawings:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_01270","Drawings"),entityName:cjBasics.lang.i18n("cj_i18n_00103","drawings"),newFileLabel:cjBasics.lang.i18n("cj_i18n_06298","New drawing"),iconName:"drawings",emptyStateIcon:"__mdi:drive_drawing",primaryColor:"#ea4335",primaryLoadingColor:!0,noExternalSearch:!0,docPath:"drawings",mimeTypes:["application/illustrator","application/vnd.google-apps.drawing","application/vnd.oasis.opendocument.graphics","image/vnd.adobe.photoshop","image/x-photoshop"]},forms:{portalLabel:cjBasics.lang.i18n("cj_i18n_01289","Docs Suite"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00408","Forms"),entityName:cjBasics.lang.i18n("cj_i18n_00102","forms"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00631","New form"),iconName:"forms",hasTemplates:!0,emptyStateIcon:"__mdi:drive_form",primaryColor:"#673ab7",primaryLoadingColor:!0,docPath:"forms",mimeTypes:["application/vnd.google-apps.form","application/vnd.google-apps.freebird"]},atari:{portalLabel:cjBasics.lang.i18n("cj_i18n_00112","Sites"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00112","Sites"),entityName:cjBasics.lang.i18n("cj_i18n_00105","sites"),newFileLabel:cjBasics.lang.i18n("cj_i18n_00688","New site"),iconName:"atari",emptyStateIcon:"__mdi:atari_site",primaryColor:"#3f51b5",primaryLoadingColor:!0,mainShortcutId:"405",mimeTypes:["application/vnd.google-apps.sites","application/vnd.google-apps.site"]},jamboard:{serviceLabel:cjBasics.lang.i18n("cj_i18n_00813","Jamboard"),pageLabel:cjBasics.lang.i18n("cj_i18n_01290","Jams"),entityName:cjBasics.lang.i18n("cj_i18n_01291","jams"),newFileLabel:cjBasics.lang.i18n("cj_i18n_01948","New jam"),iconName:"jamboard",emptyStateIcon:"__mdi:cj_jam_drive",primaryColor:"#fb8c00",mainShortcutId:"740",mimeTypes:["application/vnd.google-apps.jam"]},script:{serviceLabel:cjBasics.lang.i18n("cj_i18n_00447","Apps Script"),pageLabel:cjBasics.lang.i18n("cj_i18n_01293","Projects"),entityName:cjBasics.lang.i18n("cj_i18n_01294","scripts"),iconName:"script",emptyStateIcon:"__mdi:drive_script",primaryColor:"#1a73e8",listview:!0,noViewToggle:!0,mainShortcutId:"126",mimeTypes:["application/vnd.google-apps.script","application/vnd.google-apps.appmaker"]},appmaker:{serviceLabel:cjBasics.lang.i18n("cj_i18n_00769","App Maker"),pageLabel:cjBasics.lang.i18n("cj_i18n_00216","Apps"),entityName:cjBasics.lang.i18n("cj_i18n_06243","apps"),newFileLabel:cjBasics.lang.i18n("cj_i18n_06244","New app"),iconName:"app_maker",emptyStateIcon:"__mdi:cjg_app_maker",primaryColor:"#ef6c00",listview:!0,noViewToggle:!0,mainShortcutId:"493",mimeTypes:["application/vnd.google-apps.appmaker"]},datastudio:{portalLabel:cjBasics.lang.i18n("cj_i18n_00333","Data Studio"),serviceLabel:cjBasics.lang.i18n("cj_i18n_01299","Reports"),entityName:cjBasics.lang.i18n("cj_i18n_00098","reports"),iconName:"data_studio",emptyStateIcon:"__mdi:cj_gmp_data_studio_report",primaryColor:"#1a73e8",whiteTheme:!0,listview:!0,noViewToggle:!0,mainShortcutId:"366",mimeTypes:["application/vnd.google-analytics.rap.report"]},mymaps:{portalLabel:cjBasics.lang.i18n("cj_i18n_00423","Maps"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00410","My Maps"),entityName:cjBasics.lang.i18n("cj_i18n_00104","maps"),newFileLabel:cjBasics.lang.i18n("cj_i18n_06299","New map"),iconName:"my_maps",emptyStateIcon:"__mdi:place",primaryColor:"#ea4335",noExternalSearch:!0,mainShortcutId:"167",mimeTypes:["application/vnd.google-apps.map"]}},o=c.instanceParameters.productId,j=e[o]||{},s="(mimeType = '"+(j.mimeTypes||[]).join("' or mimeType = '")+"')",r=j.entityName,u=j.iconName||"docs_suite",l=j.emptyStateIcon,b="bm_pref__"+o+"__",h=j.serviceLabel,v=j.portalLabel||h,w=j.pageLabel||h,B=j.listview,y=j.primaryColor||"#1a73e8",f=!j.primaryLoadingColor||y,N=j.noNewFile,d=j.docPath,T="all",S="lastOpenedByMe",I=!1,L="",C=!0,x=cjgApis.auth.requireToken(c.account,["https://www.googleapis.com/auth/drive"]).catch(function(e){return C=!1,e}),E="https://datastudio.google.com",M=E+"/u/"+c.account.authuser+"/",m={all:null,owned:"'me' in owners",shared:"sharedWithMe"},k={name:"name",lastModified:"modifiedTime desc",lastModifiedByMe:"modifiedByMeTime desc",lastOpenedByMe:"viewedByMeTime desc"},U="https://script.google.com/"+c.wizPath+"home/",P="appmaker"===o||"script"===o;function D(){var a;C&&(p.cjceSetLoading(!0),a=["trashed = false",s],m[T]&&a.push(m[T]),I&&a.push("fullText contains '"+L+"'"),c.requirePage("doclist").then(function(){var e=cjce.createElement("cjg-doclist",{darkMode:c.darkMode,gAccount:c.account,noNewFile:N,onLoadingChange:function(e){p.cjceSetLoading(e)},openInNew:c.openTab,listview:B,entityName:r,emptyStateIcon:l,primaryColor:y,searching:I,cachingId:I?null:"bm_cache_v30__"+o+"__doclist__"+T,shadow:"thinOnScroll",orderBy:I?null:k[S],q:a.join(" and ")});cjce.replaceChild(n,e,t),t=e}))}function F(e,a){var i=a||{};return"appmaker"===o&&(i.file_type="app_maker"),cjBasics.urlParams.attach(U+e,i)}function A(e){I!==e&&(I=e,_.hidden=e,D())}function q(e){var a,i=P?F("search",{q:e}):(a=c.account.authuser,(d?"https://docs.google.com/"+d+"/u/"+a+"/?q=":"atari"===o?cjBasics.urlParams.attach("https://sites.google.com/new",{authuser:"0"===a?null:a,q:""}):"datastudio"===o?"https://datastudio.google.com/u/"+a+"/navigation/reporting/search/":"jamboard"===o?"https://jamboard.google.com/u/"+a+"/?q=":void 0)+encodeURIComponent(e));c.openTab(i)}function O(e){j.noExternalSearch||C?A(L=e):q(e)}function R(e){var a=e||o,i=c.account.authuser;return"datastudio"===a?"https://datastudio.google.com/u/"+i+"/reporting/":"mymaps"===a?cjBasics.urlParams.attach("https://www.google.com/maps/d/u/"+i+"/drive",{state:JSON.stringify({action:"create",userId:c.account.obfuscatedId})}):"atari"===a?"https://sites.google.com/create?authuser="+i:"appmaker"===a?"https://appmaker.google.com/create?authuser="+i:"script"===a?"https://script.google.com/create?authuser="+i:"jamboard"===a?"https://jamboard.google.com/create?authuser="+i:d?"https://docs.google.com/"+d+"/create?authuser="+i:void 0}function V(){var e=R();c.openTab(e)}function G(){var e=J()+"?ftv=1";c.openTab(e)}function H(a){return cjce.createElement("cjmd-fab",{mini:!0,color:!0,label:a.label,iconName:a.iconName,onClick:function(){var e=M+a.urlPath;c.openTab(e)}})}function J(){return d?"https://docs.google.com/"+d+"/u/"+c.account.authuser+"/":cjgShortcuts.getUrl(j.mainShortcutId,c.account)}!function(){p=cjce.createElement("bm-ogb",{drawer:{color:!1},loading:f,serviceIcon:u,serviceLabel:v,pageLabel:w,searchbox:{color:y,onClear:function(){A(!1)},onSubmit:O,onMetaSubmit:j.noExternalSearch?null:q},bmApis:c,onNewTab:function(){if(I)q(L);else{if(P)return e=F("all"===T||"shared"===T?T:"my"),void c.openTab(e);var e,a=J();c.openTab(a)}}}),n.appendChild(p),c.setOnPageDisplayHandler(p.cjceSearchboxEl.select),"datastudio"===o&&cjce.applyTemplate(p,"append-g-marketing-toggle",{cjgShortcuts:cjgShortcuts,bmApis:c,selectedId:"datastudio"}),i=p.cjceDrawerEl;var e=cjce.createElement("bm-navlist",{selectedId:o,compact:"datastudio"===o,items:function(){if("atari"===o)return{atari:{label:cjBasics.lang.i18n("cj_i18n_00112","Sites"),iconName:"__mdi:atari_site",color:"#3e50b4",colorIcon:!0,shortcutId:"405",divider:!0},relatedHeader:{header:!0,color:y,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},sites:{label:cjBasics.lang.i18n("cj_i18n_00111","Classic Sites"),iconName:"__mdi:drive_site",shortcutId:"130"},drive:{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"__mdi:drive",shortcutId:"48"}};if(P)return{starred:{label:cjBasics.lang.i18n("cj_i18n_01295","Starred projects"),iconName:"__mdi:star_outline",newTabUrl:F("starred"),external:!0},my:{label:cjBasics.lang.i18n("cj_i18n_01296","My projects"),iconName:"__mdi:folder",newTabUrl:F("my"),external:!0},all:{label:cjBasics.lang.i18n("cj_i18n_01297","All projects"),iconName:"__mdi:folder",newTabUrl:F("all"),external:!0},shared:{label:cjBasics.lang.i18n("cj_i18n_00002","Shared with me"),iconName:"__mdi:people",newTabUrl:F("shared"),external:!0},trash:{label:cjBasics.lang.i18n("cj_i18n_00005","Bin"),iconName:"__mdi:delete",newTabUrl:F("trash"),divider:!0,external:!0},executions:{label:cjBasics.lang.i18n("cj_i18n_01298","My executions"),iconName:"__mdi:settings_ethernet",newTabUrl:F("executions"),external:!0},triggers:{label:cjBasics.lang.i18n("cj_i18n_01710","My triggers"),iconName:"__mdi:alarm",newTabUrl:F("triggers"),divider:!0,external:!0},start:{label:cjBasics.lang.i18n("cj_i18n_01711","Getting started"),iconName:"__mdi:play_circle_outline",newTabUrl:F("start"),external:!0},usersettings:{label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),iconName:"__mdi:settings",newTabUrl:F("usersettings"),external:!0}};if("datastudio"!==o)return"jamboard"===o?{jamboard:{label:cjBasics.lang.i18n("cj_i18n_01290","Jams"),iconName:"__mdi:cj_jam_drive",color:"#fb8c00",colorIcon:!0,shortcutId:"740"},adminconsole:{label:cjBasics.lang.i18n("cj_i18n_01292","Admin Console"),iconName:"__mdi:cjg_admin_console",newTabUrl:"https://admin.google.com/"+c.wizPath+"ac/jamboards",external:!0,divider:!0},relatedHeader:{header:!0,color:y,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},drive:{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"__mdi:drive",shortcutId:"48"}}:"mymaps"===o?{mymaps:{label:cjBasics.lang.i18n("cj_i18n_00410","My Maps"),iconName:"__mdi:file_map",color:"#ea4335",colorIcon:!0,shortcutId:"167",divider:!0},relatedHeader:{header:!0,color:y,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},drive:{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"__mdi:drive",shortcutId:"48"},maps:{label:cjBasics.lang.i18n("cj_i18n_00423","Maps"),iconName:"__mdi:maps",shortcutId:"101"}}:{docs:{label:cjBasics.lang.i18n("cj_i18n_00391","Docs"),iconName:"__mdi:drive_document",color:"#4285f4",colorIcon:!0,shortcutId:"46"},sheets:{label:cjBasics.lang.i18n("cj_i18n_00393","Sheets"),iconName:"__mdi:drive_spreadsheet",color:"#34a853",colorIcon:!0,shortcutId:"128"},slides:{label:cjBasics.lang.i18n("cj_i18n_00407","Slides"),iconName:"__mdi:drive_presentation",color:"#f5a900",colorIcon:!0,shortcutId:"133"},forms:{label:cjBasics.lang.i18n("cj_i18n_00408","Forms"),iconName:"__mdi:drive_form",color:"#673ab7",colorIcon:!0,shortcutId:"57"},drawings:{label:cjBasics.lang.i18n("cj_i18n_00409","Drawings"),iconName:"__mdi:drive_drawing",color:"#ea4335",colorIcon:!0,shortcutId:"47",divider:!0},drive:{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"__mdi:drive",shortcutId:"48"}};var e="https://support.google.com/datastudio/answer/",a="0"===c.account.authuser?"":"?authuser="+c.account.authuser;return{datastudio:{color:"#1a73e8",iconName:"__mdi:cj_gmp_data_studio_report",label:cjBasics.lang.i18n("cj_i18n_01299","Reports"),newTabUrl:M+"navigation/reporting"},sources:{iconName:"__mdi:cj_gmp_data_studio_source",label:cjBasics.lang.i18n("cj_i18n_01300","Data sources"),newTabUrl:M+"navigation/datasources",external:!0},explorer:{iconName:"__mdi:cj_gmp_data_studio_explore",label:cjBasics.lang.i18n("cj_i18n_01301","Explorer"),newTabUrl:M+"navigation/explorer",external:!0,divider:!0},productoverview:{iconName:"__mdi:web_asset",label:cjBasics.lang.i18n("cj_i18n_01302","Product overview"),newTabUrl:E+"/overview",external:!0},gallery:{iconName:"__mdi:view_quilt",label:cjBasics.lang.i18n("cj_i18n_01303","Report gallery"),newTabUrl:E+"/gallery",external:!0},connect:{iconName:"__mdi:compare_arrows",label:cjBasics.lang.i18n("cj_i18n_01304","Connect to data"),newTabUrl:E+"/data",external:!0,divider:!0},newfeatures:{iconName:"__mdi:new_releases",label:cjBasics.lang.i18n("cj_i18n_01305","New features"),newTabUrl:e+"6311467"+a,external:!0},tutorials:{iconName:"__mdi:video_youtube",label:cjBasics.lang.i18n("cj_i18n_01306","Video tutorials"),newTabUrl:e+"6390659"+a,external:!0}}}(),onClick:function(e){c.pageManager.navigate(e)},onNewTab:function(e,a){var i=a.newTabUrl;a.shortcutId&&(i=cjgShortcuts.getUrl(a.shortcutId,c.account)),c.openTab(i)}});i.appendChild(e);var a=function(){if(N)return null;var e=j.newFileLabel||cjBasics.lang.i18n("cj_i18n_00090","New file"),a=cjce.createElement("gmd-fab",{label:e,onClick:V});if("datastudio"===o)return cjce.createElement("cjmd-fabgroup",{items:[a,H({label:cjBasics.lang.i18n("cj_i18n_06217","New report"),iconName:"__mdi:cj_gmp_data_studio_report",urlPath:"reporting/"}),H({label:cjBasics.lang.i18n("cj_i18n_06218","New data source"),iconName:"__mdi:cj_gmp_data_studio_source",urlPath:"datasources/create"}),H({label:cjBasics.lang.i18n("cj_i18n_06219","New explorer"),iconName:"__mdi:cj_gmp_data_studio_explore",urlPath:"explorer/temp"})]});if("script"===o)return cjce.createElement("cjmd-fabgroup",{items:[a,cjce.createElement("cjmd-fab",{mini:!0,color:"#ef6c00",label:cjBasics.lang.i18n("cj_i18n_06244","New app"),iconName:"__mdi:cjg_app_maker",onClick:function(){var e=R("appmaker");c.openTab(e)}})]});if(!j.hasTemplates)return a;var i=cjce.createElement("cjmd-fab",{mini:!0,color:y,label:cjBasics.lang.i18n("cj_i18n_06216","From template"),iconName:"__mdi:category",onClick:G});return cjce.createElement("cjmd-fabgroup",{items:[a,i]})}();a&&n.appendChild(a);var l=b+"thumbs",d=b+"filter",m=b+"order";browserStorage.sync.get([l,d,m]).then(function(e){var a=e[l];"boolean"==typeof a&&(B=!a);var i=e[d];"string"==typeof i&&(T=i);var n,c,t,o,s=e[m];function r(e){B=!B,n.hidden=B,c.hidden=!B,D(),browserStorage.sync.setItem(b+"thumbs",!B)}"string"==typeof s&&(S=s),t=cjce.createElement("cjmd-appbar",{secondary:!0}),o=cjce.createElement("cjmd-tabs",{color:y,items:{all:cjBasics.lang.i18n("cj_i18n_00107","All"),owned:cjBasics.lang.i18n("cj_i18n_00108","Owned by me"),shared:cjBasics.lang.i18n("cj_i18n_00002","Shared with me")},onChange:function(e){T=e,browserStorage.sync.setItem(b+"filter",e),D()},selectedId:T}),t.appendChild(o),_=cjce.createElement("cjmd-iconbuttonmenu",{label:cjBasics.lang.i18n("cj_i18n_00096","Order by"),iconName:"__mdi:cj_sort_by_alpha",items:{name:cjBasics.lang.i18n("cj_i18n_01990","Name"),lastModified:cjBasics.lang.i18n("cj_i18n_00093","Last modified"),lastModifiedByMe:cjBasics.lang.i18n("cj_i18n_00094","Last modified by me"),lastOpenedByMe:cjBasics.lang.i18n("cj_i18n_00095","Last opened by me")},selectedId:S,isSelector:!0,onChange:function(e){S=e,D(),browserStorage.sync.setItem("bm_pref__drive__order",e)}}),t.appendChild(_),j.noViewToggle||((n=cjce.createElement("cjmd-iconbutton",{label:cjBasics.lang.i18n("cj_i18n_00106","Change view"),iconName:"__mdi:view_list",onClick:r})).hidden=B,t.appendChild(n),(c=cjce.createElement("cjmd-iconbutton",{label:cjBasics.lang.i18n("cj_i18n_00106","Change view"),iconName:"__mdi:view_module",onClick:r})).hidden=!B,t.appendChild(c)),g=t,p.appendChild(g),D()}),x.then(function(e){var a,i;C||(p.cjceSetLoading(!1),cjgApis.cache.remove(c.account,["bm_cache_v30__"+o+"__doclist__"+T]),g&&g.remove(),a=cjce.createElement("cjmd-container",{shadow:"thin"}),i=cjce.createElement("bm-fulldialog",{inline:!0,lockup:{label:h},iconName:u,message:cjBasics.lang.i18n("cj_i18n_00089","Before you can use this page, you need to give the extension access to Google Drive"),actionLabel:cjBasics.lang.i18n("cj_i18n_01916","Continue with Google"),actionG:!0,action:function(){cjgApis.auth.requestPermissions(c.account,e.cjg_missing_scopes)}}),a.appendChild(i),cjce.replaceChild(n,a,t))})}()});