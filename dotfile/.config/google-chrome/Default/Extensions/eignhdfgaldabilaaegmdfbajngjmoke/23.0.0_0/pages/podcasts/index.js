"use strict";cjce.registerTemplate("bm-p-podcasts",function(e,i){var s,c=!cjBasics.wrif.supported,a="https://podcasts.google.com",n=a+"/"+i.wizPath,t={home:{newTabUrl:n,iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home")},subscriptions:{newTabUrl:n+"subscriptions",iconName:"__mdi:view_list",label:cjBasics.lang.i18n("cj_i18n_00154","Subscriptions"),external:!0}};function o(e){i.openTab(n+e)}function l(e,c){i.openTab(c.newTabUrl)}function r(e){o("?q="+encodeURIComponent(e))}function b(){o("")}if(c){s=cjce.createElement("bm-ogb",{serviceIcon:"podcasts",serviceLabel:cjBasics.lang.i18n("cj_i18n_06235","Podcasts"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{submitInNewTab:!0,onSubmit:r},bmApis:i,onNewTab:b}),e.appendChild(s),i.setOnPageDisplayHandler(s.cjceSearchboxEl.select);var m=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});return e.appendChild(m),p=cjce.createElement("bm-navlist",{items:t,onClick:l,onNewTab:l}),void m.appendChild(p)}s=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"podcasts",serviceLabel:cjBasics.lang.i18n("cj_i18n_06235","Podcasts"),pageLabel:t.home.label,searchbox:{submitInNewTab:!0,onSubmit:r},bmApis:i,onNewTab:function(){h.cjceGetCleanUrl(a).then(function(e){e?i.openTab(e):b()})},onBack:function(){h.cjceSendFrameCommand({method:"bmCstNavigateBack"},a)}}),e.appendChild(s),i.setOnPageDisplayHandler(s.cjceSearchboxEl.select);var d=s.cjceDrawerEl,p=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"home",items:t,onChange:function(e,c){h.src=u(c.newTabUrl),s.cjceSetPageLabel(c.label)},onNewTab:l});d.appendChild(p);var j=cjBasics.uniqueId.generate();function u(e){return cjBasics.urlParams.attach(e,{bm_cid:"podcasts",bm_cst:"2",bm_wiz:"1",bm_iid:j,hl:cjBasics.lang.current})}cjBasics.webRequest.handleIframeHeaders([a+"/*bm_iid="+j+"*"],{disableOgs:a,handleFirefoxInject:!0});var h=cjce.createElement("bm-iframe",{src:u(n),solid:"#fff",shadow:!0,onLoad:function(){s.cjceSetLoading(!1)},onMessage:function(e){var c,a=e.bm_method,n=e.bm_value;"podcastsBackState"===a?s.cjceSetBackState(n):"bmCstOpenUrl"===a&&(c=cjBasics.cleanBmUrl(n),i.openTab(c))}});e.appendChild(h)});