"use strict";cjce.registerTemplate("bm-p-one",function(e,c){var a,n,t,i="https://one.google.com",s="/"+c.wizPath,o=i+s,r=o+"getupdates",d=cjBasics.uniqueId.generate(),l={bm_cid:"one",bm_iid:d,bm_wiz:"1",bm_cst:"1",hl:cjBasics.lang.current};cjBasics.webRequest.handleIframeHeaders([i+"/*bm_iid="+d+"*"],{handleFirefoxInject:!0}),n=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:"one",pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),serviceLabel:cjBasics.lang.i18n("cj_i18n_01165","Google One"),bmApis:c,onNewTab:function(){c.openTab(o)}}),t=cjce.createElement("cjmd-iconbutton",{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),onClick:function(){a.cjceSendFrameCommand({method:"bmCstUpdatePath",value:cjBasics.urlParams.attach(s,l)})}}),n.cjceAppendChild(t),e.appendChild(n),cjBasics.webRequest.catchAndStop([r],function(){a.src=cjBasics.urlParams.attach(r,l)},!0),cjBasics.webRequest.catchAndStop(["https://play.google.com/store/epurchase*com.google.android.apps.subscriptions.red*parent="+i+"*"],function(e){c.openTab(e)},!0),a=cjce.createElement("bm-iframe",{solid:"#fff",shadow:!0,src:cjBasics.urlParams.attach(o,l),onLoad:function(){n.cjceSetLoading(!1)}}),e.appendChild(a)});