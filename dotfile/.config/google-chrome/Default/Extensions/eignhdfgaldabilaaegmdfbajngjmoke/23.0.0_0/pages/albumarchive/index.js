"use strict";cjce.registerTemplate("bm-p-albumarchive",function(e,n){var c="https://get.google.com",a=c+"/"+n.wizPath+"albumarchive/"+n.account.obfuscatedId,i=cjBasics.uniqueId.generate(),t=cjBasics.urlParams.attach(a,{bm_cid:"albumarchive",bm_iid:i,bm_udm:n.darkMode?"1":null,bm_wiz:"1",bm_cst:"1",hl:cjBasics.lang.current});cjBasics.webRequest.handleIframeHeaders([c+"/*bm_iid="+i+"*"],{disableOgs:c,handleFirefoxInject:!0});var l={albumarchive:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),shortcutId:"409"},relatedHeader:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},myaccount:{iconName:"__mdi:cjg_account",label:cjBasics.lang.i18n("cj_i18n_01506","Account"),shortcutId:"79"},photos:{iconName:"__mdi:photos",label:cjBasics.lang.i18n("cj_i18n_00429","Photos"),shortcutId:"89"},blogger:{iconName:"__mdi:post_blogger",label:cjBasics.lang.i18n("cj_i18n_00189","Blogger"),shortcutId:"21"}},o=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"album_archive",serviceLabel:"Google",pageLabel:cjBasics.lang.i18n("cj_i18n_00181","Album Archive"),bmApis:n,onNewTab:function(){m.cjceGetCleanUrl(c).then(function(e){var c=e||a;n.openTab(c)})}});e.appendChild(o);var s=cjce.createElement("bm-navlist",{selectedId:"albumarchive",items:l,onClick:function(e){n.pageManager.navigate(e)},onNewTab:function(e,c){var a=c.newTabUrl||cjgShortcuts.getUrl(c.shortcutId,n.account);n.openTab(a)}});o.cjceDrawerEl.appendChild(s);var r=cjce.createElement("cjmd-iconbutton",{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),onClick:function(){m.cjceSendFrameCommand({method:"bmCstClickDomElement",value:'path[d*=" 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1."]'},c)}});o.cjceAppendChild(r);var m=cjce.createElement("bm-iframe",{src:t,solid:!0,shadow:!0,onLoad:function(){o.cjceSetLoading(!1)}});e.appendChild(m)});