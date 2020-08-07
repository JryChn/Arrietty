"use strict";cjce.registerTemplate("bm-p-drive",function(s,l){var o,c,t,e,d,m,p,_,u,v,f,g,r,h,b,j="my-drive",y=j,T=j,w=!1,B=(Math.round(document.documentElement.offsetHeight*document.documentElement.offsetWidth/7500),"https://drive.google.com/drive/"+l.wizPath);function C(){var e=B+("folder"===j||"shareddrive"===j?"folders/"+f.id:"search"===j?"search?q="+encodeURIComponent(p.value):j);l.openTab(e)}var a,S=["trash","starred","my-drive","folder"],x=window.atob("QUl6YVN5RFA3MkZMTVpCNng0ejZDVnlCOG8wQUthWC0yRDdueGMw"),U="https://content.googleapis.com",E=U+"/drive/v3/",N=["https://www.googleapis.com/auth/drive"],L=["https://www.googleapis.com/auth/drive.apps.readonly"],z=!0,k=cjgApis.auth.requireToken(l.account,N).catch(function(e){return z=!1,e}),A={},P=["196802322321","230754619982","335078253515","619683526622","629453589428","796396377186","889782162350","897606708560","952342923413","1083656409722"],q={name:cjBasics.lang.i18n("cj_i18n_01990","Name"),lastModified:cjBasics.lang.i18n("cj_i18n_00093","Last modified"),lastModifiedByMe:cjBasics.lang.i18n("cj_i18n_00094","Last modified by me"),lastOpenedByMe:cjBasics.lang.i18n("cj_i18n_00095","Last opened by me")},I={name:"name",lastModified:"modifiedTime desc",lastModifiedByMe:"modifiedByMeTime desc",lastOpenedByMe:"viewedByMeTime desc"},M={archive:"(mimeType = 'application/bzip2' or mimeType = 'application/gzip' or mimeType = 'application/gzip-compressed' or mimeType = 'application/gzipped' or mimeType = 'application/rar' or mimeType = 'application/tar' or mimeType = 'application/x-bzip' or mimeType = 'application/x-bzip-compressed-tar' or mimeType = 'application/x-bzip2' or mimeType = 'application/x-gtar' or mimeType = 'application/x-gtar-compressed' or mimeType = 'application/x-gunzip' or mimeType = 'application/x-gzip' or mimeType = 'application/x-gzip-compressed' or mimeType = 'application/x-rar' or mimeType = 'application/x-tar' or mimeType = 'application/x-tgz' or mimeType = 'application/x-zip' or mimeType = 'application/x-zip-compressed' or mimeType = 'application/zip' or mimeType = 'gzip/document' or mimeType = 'multipart/x-gzip' or mimeType = 'multipart/x-rar' or mimeType = 'multipart/x-tar' or mimeType = 'multipart/x-zip' or mimeType = 'multipart/zip')",audio:"(mimeType = 'audio/3gp' or mimeType = 'audio/midi' or mimeType = 'audio/mp4a-latm' or mimeType = 'audio/mpeg' or mimeType = 'audio/mpeg3' or mimeType = 'audio/ogg' or mimeType = 'audio/x-ms-wma' or mimeType = 'audio/x-wav' or mimeType = 'audio/wav')",document:"(mimeType = 'application/msword' or mimeType = 'application/vnd.google-apps.document' or mimeType = 'application/vnd.google-apps.kix' or mimeType = 'application/vnd.ms-word' or mimeType = 'application/vnd.oasis.opendocument.text' or mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' or mimeType = 'text/plain')",drawing:"(mimeType = 'application/vnd.oasis.opendocument.graphics' or mimeType = 'image/vnd.adobe.photoshop' or mimeType = 'image/x-photoshop' or mimeType = 'application/illustrator' or mimeType = 'application/vnd.google-apps.drawing')",folder:"(mimeType = 'application/vnd.google-apps.folder')",form:"(mimeType = 'application/vnd.google-apps.form' or mimeType = 'application/vnd.google-apps.freebird')",image:"(mimeType = 'image/jpeg' or mimeType = 'image/png' or mimeType = 'image/gif' or mimeType = 'image/tiff' or mimeType = 'image/x-ms-bmp' or mimeType = 'image/svg+xml' or mimeType = 'image/vnd.microsoft.icon')",pdf:"(mimeType = 'application/pdf')",presentation:"(mimeType = 'application/mspowerpoint' or mimeType = 'application/vnd.ms-powerpoint' or mimeType = 'application/vnd.oasis.opendocument.presentation' or mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' or mimeType = 'application/vnd.google-apps.presentation' or mimeType = 'application/vnd.google-apps.punch')",spreadsheet:"(mimeType = 'application/msexcel' or mimeType = 'application/vnd.google-apps.form' or mimeType = 'application/vnd.google-apps.freebird' or mimeType = 'application/vnd.google-apps.ritz' or mimeType = 'application/vnd.google-apps.spreadsheet' or mimeType = 'application/vnd.ms-excel' or mimeType = 'application/vnd.oasis.opendocument.spreadsheet' or mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')",video:"(mimeType = 'video/3gpp' or mimeType = 'video/avi' or mimeType = 'video/dv' or mimeType = 'video/flv' or mimeType = 'video/mp2p' or mimeType = 'video/mp2t' or mimeType = 'video/mp4' or mimeType = 'video/mpeg' or mimeType = 'video/mpv' or mimeType = 'video/ogg' or mimeType = 'video/quicktime' or mimeType = 'video/x-flv' or mimeType = 'video/x-msvideo' or mimeType = 'video/x-ms-wmv' or mimeType = 'video/x-m4v' or mimeType = 'video/x-ms-asf' or mimeType = 'video/x-matroska' or mimeType = 'video/x-dv' or mimeType = 'video/webm')"},O={document:{fabLabel:cjBasics.lang.i18n("cj_i18n_00607","New document"),label:cjBasics.lang.i18n("cj_i18n_00391","Docs"),newTabUrl:cjgShortcuts.getUrl("299",l.account),icon:{size:32,name:"__mdi:drive_document",color:"#4285f4"}},spreadsheet:{fabLabel:cjBasics.lang.i18n("cj_i18n_00608","New spreadsheet"),label:cjBasics.lang.i18n("cj_i18n_00393","Sheets"),newTabUrl:cjgShortcuts.getUrl("300",l.account),icon:{size:32,name:"__mdi:drive_spreadsheet",color:"#34a853"}},presentation:{fabLabel:cjBasics.lang.i18n("cj_i18n_00609","New presentation"),label:cjBasics.lang.i18n("cj_i18n_00407","Slides"),newTabUrl:cjgShortcuts.getUrl("301",l.account),icon:{size:32,name:"__mdi:drive_presentation",color:"#fbbc05"}},upload:{fabLabel:cjBasics.lang.i18n("cj_i18n_01933","Upload file"),label:cjBasics.lang.i18n("cj_i18n_01934","File upload"),onClick:function(){e.click()},newTabUrl:"__bm_drive_upload",icon:{size:32,name:"__mdi:file_upload"}},folder:{fabLabel:cjBasics.lang.i18n("cj_i18n_01935","New folder"),label:cjBasics.lang.i18n("cj_i18n_01794","Folder"),newTabUrl:"__bm_drive_folder",onClick:function(){var e=cjce.createElement("cjmd-textfield",{label:cjBasics.lang.i18n("cj_i18n_01937","Folder title")}),i=cjBasics.lang.i18n("cj_i18n_01939","Untitled folder");e.cjceValue=i;var a=cjce.createElement("cjmd-dialog",{title:cjBasics.lang.i18n("cj_i18n_01936","Create new folder"),message:cjBasics.lang.i18n("cj_i18n_01938","Please enter a folder title"),confirmLabel:cjBasics.lang.i18n("cj_i18n_00626","Create"),cancelLabel:cjBasics.lang.i18n("cj_i18n_01659","Cancel"),additionalFragment:e,onConfirm:function(){!function(e){var i={name:e,mimeType:"application/vnd.google-apps.folder"};"folder"!==j&&"shareddrive"!==j||(i.parents=[f.id]);var a=U+"/drive/v3/files";cjgApis.request(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json; charset=UTF-8"}},{account:l.account,requiredScopes:N}).then(G)}(e.cjceValue||i)}});document.body.appendChild(a),setTimeout(function(){a.showModal(),a=null,e.cjceSelect()})},icon:{size:32,name:"__mdi:create_new_folder"}},form:{fabLabel:cjBasics.lang.i18n("cj_i18n_00631","New form"),label:cjBasics.lang.i18n("cj_i18n_00408","Forms"),newTabUrl:cjgShortcuts.getUrl("329",l.account),icon:{size:32,name:"__mdi:drive_form",color:"#673ab7"}},drawing:{label:cjBasics.lang.i18n("cj_i18n_00409","Drawings"),newTabUrl:cjgShortcuts.getUrl("47",l.account),icon:{size:32,name:"__mdi:drive_drawing",color:"#ea4335"}},atari:{label:cjBasics.lang.i18n("cj_i18n_00112","Sites"),newTabUrl:cjgShortcuts.getUrl("406",l.account),icon:{size:32,name:"__mdi:atari_site",color:"#3e50b4"}},table:{label:cjBasics.lang.i18n("cj_i18n_00446","Fusion Tables"),newTabUrl:"https://www.google.com/fusiontables/DataSource?dsrcid=implicit&authuser="+l.account.authuser,icon:{size:32,name:"__mdi:drive_fusiontable",color:"#34a853"}},map:{label:cjBasics.lang.i18n("cj_i18n_00410","My Maps"),newTabUrl:"https://www.google.com/maps/d/u/"+l.account.authuser+"/drive?state=%7B%22action%22%3A%22create%22%7D",icon:{size:32,name:"__mdi:file_map",color:"#ea4335"}},script:{label:cjBasics.lang.i18n("cj_i18n_00447","Apps Script"),newTabUrl:cjgShortcuts.getUrl("730",l.account),icon:{size:32,name:"__mdi:drive_script",color:"#1a73e8"}},jam:{label:cjBasics.lang.i18n("cj_i18n_00813","Jamboard"),newTabUrl:"https://jamboard.google.com/create?authuser="+l.account.authuser,icon:{size:32,name:"__mdi:cj_jam_drive",color:"#fb8c00"}}},D=["document","spreadsheet","presentation","form","drawing","atari","table","script","map","jam"].map(function(e){return O[e]}),F={pdf:{icon:{name:"__mdi:drive_pdf",color:"#ea4335"},label:cjBasics.lang.i18n("cj_i18n_00137","PDFs")},document:{icon:{name:"__mdi:drive_document",color:"#4285f4"},label:cjBasics.lang.i18n("cj_i18n_00138","Text documents")},spreadsheet:{icon:{name:"__mdi:drive_spreadsheet",color:"#34a853"},label:cjBasics.lang.i18n("cj_i18n_00139","Spreadsheets")},presentation:{icon:{name:"__mdi:drive_presentation",color:"#fbbc05"},label:cjBasics.lang.i18n("cj_i18n_00140","Presentations")},image:{icon:{name:"__mdi:drive_image",color:"#ea4335"},label:cjBasics.lang.i18n("cj_i18n_00141","Photos & images")},video:{icon:{name:"__mdi:drive_video",color:"#ea4335"},label:cjBasics.lang.i18n("cj_i18n_00142","Videos")}},R={priority:{label:cjBasics.lang.i18n("cj_i18n_06245","Priority"),iconName:"__mdi:priority_outline",newTabUrl:B+"priority"},"my-drive":{label:cjBasics.lang.i18n("cj_i18n_00001","My Drive"),iconName:"__mdi:my_drive",newTabUrl:B+"my-drive"},"shared-with-me":{label:cjBasics.lang.i18n("cj_i18n_00002","Shared with me"),iconName:"__mdi:people",newTabUrl:B+"shared-with-me"},recent:{label:cjBasics.lang.i18n("cj_i18n_00003","Recent"),iconName:"__mdi:schedule",newTabUrl:B+"recent"},starred:{label:cjBasics.lang.i18n("cj_i18n_00004","Starred"),iconName:"__mdi:star_outline",newTabUrl:B+"starred"},trash:{label:cjBasics.lang.i18n("cj_i18n_00005","Bin"),iconName:"__mdi:delete",newTabUrl:B+"trash"},computers:{label:cjBasics.lang.i18n("cj_i18n_01307","Computers"),iconName:"__mdi:devices",external:!0,newTabUrl:B+"computers"},backups:{label:cjBasics.lang.i18n("cj_i18n_01308","Backups"),iconName:"__mdi:mobile_friendly",external:!0,newTabUrl:B+"backups"},storage:{label:cjBasics.lang.i18n("cj_i18n_00077","Upgrade storage"),iconName:"__mdi:storage",external:!0,newTabUrl:"https://drive.google.com/"+l.wizPath+"settings/storage"}};function J(e){return"my-drive"===e||"priority"===e||"recent"===e||"starred"===e||"shared-with-me"===e}function G(){var i;z&&(m.cjceSetLoading(!0),i=function(){var e=I[h];if("shared-with-me"===j)return{q:"trashed = false and not 'me' in owners and sharedWithMe",orderBy:"sharedWithMeTime desc"};if("recent"===j)return{q:"(not mimeType = 'application/vnd.google-apps.folder') and trashed = false",orderBy:"recency desc"};if("trash"===j)return{q:"trashed = true and explicitlyTrashed = true",orderBy:"folder,"+e};if("starred"===j)return{q:"trashed = false and starred = true",orderBy:"folder,"+e};if("my-drive"===j)return{q:"trashed = false and 'root' in parents",orderBy:"folder,"+e};if("priority"===j)return{priority:!0};if("folder"===j)return{q:"trashed = false and '"+f.id+"' in parents",orderBy:"folder,"+e};if("shareddrive"===j)return{q:"trashed = false and '"+f.id+"' in parents",orderBy:"folder,"+e};if("search"!==j)return null;var i,a,n=p.value,r=["trashed = false"],c=n;return-1!==n.indexOf("type:")&&(c="",i=n.split("type:")[1],-1!==n.indexOf(" ")&&(c=n.split(" ")[1],i=i.split(" ")[0]),a=M[i],r.push(a)),r.push("fullText contains '"+c+"'"),{q:r.join(" and ")}}(),l.requirePage("doclist").then(function(){var e=cjce.createElement("cjg-doclist",{gAccount:l.account,darkMode:l.darkMode,additionalFragment:!i.priority&&_,listview:!i.priority&&w,shadow:"thinOnScroll",openInNew:l.openTab,onFolderClick:n,onLoadingChange:function(e){m.cjceSetLoading(e)},searching:"search"===j,cachingId:J(j)?"bm_cache_v30__drive__mainviewcache_"+j:null,orderBy:i.orderBy,priority:i.priority,q:i.q});cjce.replaceChild(s,e,o),o=e}))}function V(e,i){var a=R[e];u.hidden="folder"!==e,"search"!==j&&"folder"!==j&&("folder"===e?(y=j,g=f):"search"===e&&(T=j,r=f)),j=e,f=i,t&&(t.cjceSelectedId=e),a?m.cjceSetPageLabel(a.label):"folder"===j?(u.cjceSetPageLabel(""),function t(s){var e=cjBasics.urlParams.attach(E+"files/"+s.id,{fields:"name,id,parents,driveId",prettyPrint:"false",supportsAllDrives:"true",includeItemsFromAllDrives:"true"});cjgApis.request(e,{fetchAs:"json"},{account:l.account,requiredScopes:N}).then(function(e){var i=document.createElement("span"),a=e.name||cjBasics.lang.i18n("cj_i18n_01794","Folder"),n=e.driveId===e.id;n&&(a=A[e.id]||cjBasics.lang.i18n("cj_i18n_01795","Shared drive")),i.textContent=a;var r,c,o=u.querySelector(".bm-p-drive-foldertree");o?(r=document.createTextNode(" > "),i.addEventListener("click",function(){o.firstChild===i?n?V("shareddrive",{id:e.id,label:a}):V("my-drive"):V("folder",s)}),c=o.firstChild,o.insertBefore(r,c),o.insertBefore(i,r)):((o=document.createElement("span")).classList.add("bm-p-drive-foldertree"),o.appendChild(i),u.cjceSetPageLabel(o)),"parents"in e&&t({id:e.parents[0]})})}(f)):"shareddrive"===j&&(t.cjceSelectedId="shareddrive-"+i.id,m.cjceSetPageLabel(i.label));var n=-1===S.indexOf(e);b.style.display=n?"none":"",G(),J(e)&&browserStorage.local.setItem("bm_pref__drive__lastid",e)}function n(e){var i=e.folderColorRgb;"#8f8f8f"===i&&(i=null),V("folder",{label:e.name,id:e.id,color:i})}function H(e){var i=p.value;-1!==i.indexOf("type:")&&(i=i.split(" ")[1]),p.value="type:"+e+(i?" "+i:""),m.cjceSetNavigatorCollapseState(!0),"search"===j?G():V("search")}function W(e){var i=function(e){if("folder"!==j&&"shareddrive"!==j)return e;var i=new URL(e);return i.searchParams.set("folder",f.id),i.href}(e);l.openTab(i)}function Z(){d=cjce.createElement("cjmd-sheet",{from:"bottom",triggerElement:v});var e=cjce.createElement("bm-shortcutlist",{onNewTab:function(e){"__bm_drive_upload"===e?O.upload.onClick():"__bm_drive_folder"===e&&O.folder.onClick()},items:z?[O.folder,O.upload]:[]});d.appendChild(e);var i=cjce.createElement("cjmd-subheader",{color:!0,label:cjBasics.lang.i18n("cj_i18n_01309","Google apps")});d.appendChild(i);var a=cjce.createElement("bm-shortcutlist",{onNewTab:W,items:D});d.appendChild(a);var o=document.createElement("div");function n(e){o.textContent="";var i,a,n,r="NOT_AUTHORIZED"===e,c=Array.isArray(e)&&0<e.length;(r||c)&&(i=cjce.createElement("cjmd-subheader",{color:!0,label:cjBasics.lang.i18n("cj_i18n_01310","More apps")}),o.appendChild(i),r?(a=cjce.createElement("bm-inlinepermission",{description:cjBasics.lang.i18n("cj_i18n_01311","Grant read-only access to your Drive Apps so we can list more apps here"),onClick:function(){cjgApis.auth.requestPermissions(l.account,L)}}),o.appendChild(a)):(n=cjce.createElement("bm-shortcutlist",{onNewTab:W,items:e}),o.appendChild(n)))}d.appendChild(o);var r,c=null,t=!1;cjgApis.cache.getItem(l.account,"bm_cache_v30__drive__createapps").then(function(e){!t&&e&&(c=JSON.stringify(e),n(e))}),r=cjBasics.urlParams.attach(U+"/drive/v2/apps",{prettyPrint:"false",hl:cjBasics.lang.current,fields:"items(supportsCreate,id,name,createUrl,icons(size,category,iconUrl))"}),cjgApis.request(r,{fetchAs:"json"},{account:l.account,pa:"optional",key:x,requiredScopes:L}).then(function(e){var n=[];return e.items.forEach(function(e){var i,a;e.supportsCreate&&-1===P.indexOf(e.id)&&(a=24*window.devicePixelRatio,e.icons.sort(function(e,i){return e.size<i.size?1:-1}).forEach(function(e){"application"===e.category&&e.size>=a&&(i=e.iconUrl)}),n.push({label:e.name,newTabUrl:e.createUrl,icon:{url:i}}))}),n},function(){return"NOT_AUTHORIZED"}).then(function(e){t=!0;var i=JSON.stringify(e);c&&i===c||(n(e),cjgApis.cache.setItem(l.account,"bm_cache_v30__drive__createapps",e))}),s.appendChild(d)}function i(e){d||Z(),setTimeout(function(){d.cjceToggleState(!0)}),setTimeout(function(){var e=d.querySelector(".cjmd-item");e&&e.focus()},50)}function Q(o){return n=o,new Promise(function(e,i){var a=new window.FileReader;a.readAsBinaryString(n),a.addEventListener("load",function(){e(a.result)}),a.addEventListener("error",function(){var e=new Error("Read as binary failed");i(e)})}).then(function(e){var i=o.type||"application/octet-stream",a={name:o.name,mimeType:i};"folder"!==j&&"shareddrive"!==j||(a.parents=[f.id]);var n="bmfg_upload_boundary",r=["--"+n,"Content-Type: application/json; charset=UTF-8",'Content-Disposition: form-data; name="metadata"',"",JSON.stringify(a),"--"+n,"Content-Type: "+i,'Content-Disposition: form-data; name="file"',"",e,"--"+n+"--"].join("\n"),c=cjBasics.urlParams.attach(U+"/upload/drive/v3/files",{uploadType:"multipart",prettyPrint:"false",fields:""});return cjgApis.request(c,{method:"POST",body:r,headers:{"Content-Type":'multipart/related; boundary="'+n+'"'}},{account:l.account,requiredScopes:N})},function(){});var n}function Y(){v=cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_00090","New file"),isPlaceholder:!0,onClick:i});var e=cjce.createElement("cjmd-fabgroup",{items:["main","upload","folder","document","spreadsheet","presentation","form"].map(function(e){if("main"===e)return v;var i,a,n="upload"===e||"folder"===e,r=(i=O[e],a=n,cjce.createElement("cjmd-fab",{mini:!0,label:i.fabLabel,color:i.icon.color,fill:!a&&l.darkMode,iconName:i.icon.name,onClick:i.onClick||function(){W(i.newTabUrl)}}));return n&&k.then(function(){z||r.remove()}),r})});s.appendChild(e)}function K(e){var i=cjBasics.urlParams.attach(B+"search",{q:e});l.openTab(i)}function X(e){c.textContent="";var i=["priority","my-drive","shared-with-me","recent","starred","trash"].map(function(e){var i=R[e];return"trash"===e&&((i=Object.assign({},i)).divider=!0),i.id=e,i}),a=e.length;if(0<a){i.push({header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01782","Shared drives")});for(var n=0;n<a;n++){var r=e[n];A[r.id]=r.name,i.push({id:"shareddrive-"+r.id,iconName:"__mdi:cjg_blank_drive",label:r.name,sharedDriveId:r.id,newTabUrl:B+"folders/"+r.id,divider:n===a-1})}}["computers","backups","storage"].forEach(function(e){i.push(R[e])}),t=cjce.createElement("bm-navlist",{compact:!0,isSelector:!0,selectedId:j,items:i,onChange:function(e,i){z&&(i.sharedDriveId?V("shareddrive",{label:i.label,id:i.sharedDriveId}):V(e))},onNewTab:function(e,i){l.openTab(i.newTabUrl)}}),c.appendChild(t)}function $(){if(!l.account.validSession)return X([]),0;var e,i=!1,a="";cjgApis.cache.getItem(l.account,"bm_cache_v30__drive__shareddrives").then(function(e){i||(e=e||[],a=JSON.stringify(e),X(e))}),e=cjBasics.urlParams.attach(E+"drives",{prettyPrint:"false",fields:"drives(id,name)",pageSize:"100"}),cjgApis.request(e,{fetchAs:"json"},{account:l.account,requiredScopes:N}).then(function(e){var i=e.drives;return cjgApis.cache.setItem(l.account,"bm_cache_v30__drive__shareddrives",i),i},function(){return[]}).then(function(e){i=!0,e=e||[],JSON.stringify(e)!==a&&X(e)})}(a=document.createElement("input")).type="file",a.multiple=!0,a.style.display="none",a.addEventListener("change",function(){m.cjceSetLoading(!0);for(var e=[],i=0;i<a.files.length;i++)e.push(Q(a.files[i]));Promise.all(e).catch(function(){}).then(function(){m.cjceSetLoading(!1),G()})}),e=a,s.appendChild(e),m=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"drive",bmApis:l,onNewTab:C,pageLabel:R[j].label,serviceLabel:cjBasics.lang.i18n("cj_i18n_00390","Drive"),searchbox:{onClear:function(){V(T,r)},onSubmit:function(e){if(!z)return K(e);"search"!==j?V("search"):G()},onMetaSubmit:K}}),c=m.cjceDrawerEl,$(),(p=m.cjceSearchboxEl).classList.add("bm-p-drive-searchbox"),s.appendChild(m),l.setOnPageDisplayHandler(function(){p.select()}),Y(),Promise.all([browserStorage.local.getItem("bm_pref__drive__lastid"),browserStorage.sync.getItem("bm_pref__drive__thumbs"),browserStorage.sync.getItem("bm_pref__drive__order")]).then(function(e){var i,a=e[0],n=e[1];i=e[2],h=i in q?i:"modifiedTime desc"===i?"lastModified":"modifiedByMeTime desc"===i?"lastModifiedByMe":"viewedByMeTime desc"===i?"lastOpenedByMe":"name",j=a||"my-drive",m.cjceSetPageLabel(R[j].label),w=!n,_=function(){var e=cjce.createElement("cjmd-appbar");function i(e){w=!w,a.hidden=w,n.hidden=!w,browserStorage.sync.setItem("bm_pref__drive__thumbs",!w),G()}e.classList.add("bm-p-drive-filterbar"),b=cjce.createElement("cjmd-iconbuttonmenu",{label:cjBasics.lang.i18n("cj_i18n_00096","Order by"),iconName:"__mdi:cj_sort_by_alpha",items:q,selectedId:h,isSelector:!0,onChange:function(e){h=e,G(),browserStorage.sync.setItem("bm_pref__drive__order",e)}}),e.appendChild(b);var a=cjce.createElement("cjmd-iconbutton",{label:cjBasics.lang.i18n("cj_i18n_00106","Change view"),iconName:"__mdi:view_list",onClick:i});a.hidden=w,e.appendChild(a);var n=cjce.createElement("cjmd-iconbutton",{label:cjBasics.lang.i18n("cj_i18n_00106","Change view"),iconName:"__mdi:view_module",onClick:i});return n.hidden=!w,e.appendChild(n),e}(),(u=cjce.createElement("bm-ogb",{displayBack:!0,floating:!0,aboveTopDrawer:!0,bmApis:l,onNewTab:C,serviceLabel:cjBasics.lang.i18n("cj_i18n_00390","Drive"),pageLabel:R["my-drive"].label,onBack:function(){V(y,g)}})).hidden=!0,s.appendChild(u);var r=cjce.createElement("cjmd-menu",{variant:"searchbox",items:F,onClick:H});r.classList.add("bm-p-drive-searchmenu");var c=cjce.createElement("cjmd-iconbutton",{iconName:"__mdi:arrow_drop_down"});cjce.applyTemplate(c,"basic-togglemenuhandler",{menuElement:r}),c.classList.add("bm-p-drive-searchmenubutton"),p.appendChild(c),p.appendChild(r),G(),t.cjceSelectedId=j,window.requestIdleCallback&&window.requestIdleCallback(Z)}),k.then(function(e){var i,a,n,r,c;z||(cjgApis.cache.remove(l.account,["bm_cache_v30__drive__shareddrives","bm_cache_v30__drive__createapps","bm_cache_v30__drive__mainviewcache_shared-with-me","bm_cache_v30__drive__mainviewcache_recent","bm_cache_v30__drive__mainviewcache_trash","bm_cache_v30__drive__mainviewcache_starred","bm_cache_v30__drive__mainviewcache_my-drive","bm_cache_v30__drive__mainviewcache_priority"]),i=cjce.createElement("bm-ogb",{serviceIcon:"drive",bmApis:l,onNewTab:C,pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00390","Drive"),searchbox:{onSubmit:K,submitInNewTab:!0}}),cjce.replaceChild(s,i,m),(p=i.cjceSearchboxEl).focus(),a=cjce.createElement("cjmd-container",{shadow:"thinOnScroll",scrollable:!0}),n=cjce.createElement("bm-inlinepermission",{description:cjBasics.lang.i18n("cj_i18n_01313","Grant access to your Google Drive Account so we can list your files and folders here"),divider:!0,onClick:function(){cjgApis.auth.requestPermissions(l.account,e.cjg_missing_scopes)}}),a.appendChild(n),r=Object.keys(R).map(function(e){var i=R[e];return i.external=!0,i}),(c=(t=cjce.createElement("bm-navlist",{compact:!0,items:r,onNewTab:function(e,i){l.openTab(i.newTabUrl)}})).firstChild).hidden=!0,cjgApis.info.getUserDomain(l.account).then(function(e){e&&(c.hidden=!1)}),a.appendChild(t),cjce.replaceChild(s,a,o))})});