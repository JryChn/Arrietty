"use strict";!function(){var m="https://www.google.com",d=m+"/maps/reserve/",_={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:!0},bookings:{iconName:"__mdi:view_list",label:cjBasics.lang.i18n("cj_i18n_01753","Bookings"),newTabUrl:!0},packs:{iconName:"__mdi:library_books",label:cjBasics.lang.i18n("cj_i18n_01754","Packs"),newTabUrl:!0,divider:!0},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:!0}};function j(e){return"home"===e?d:d+e}cjce.registerTemplate("bm-p-reserve",function(n,a){var c,i,s,r="bookings",t=cjBasics.uniqueId.generate(),o={bm_cid:"reserve",bm_cst:"1",bm_wiz:"1",bm_iid:t,hl:cjBasics.lang.current};function l(e){r=e,(s.cjceSelectedId=e)in _&&c.cjceSetPageLabel(_[e].label)}function b(e){return cjBasics.urlParams.attach(j(e),o)}!function(){c=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"reserve",serviceLabel:cjBasics.lang.i18n("cj_i18n_01752","Reserve"),pageLabel:_[r].label,bmApis:a,onNewTab:function(){i.cjceGetCleanUrl(m).then(function(e){var n=e||j(r);a.openTab(n)})}}),n.appendChild(c);var e=c.cjceDrawerEl;s=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:r,items:_,onChange:function(e){var n;l(e),n=e,c.cjceSetLoading(!0),i.src=b(n)},onNewTab:function(e){var n;n=j(e),a.openTab(n)}}),e.appendChild(s),cjBasics.webRequest.catchAndStop([d+"merchant*"],function(e){a.openTab(e)}),cjBasics.webRequest.handleIframeHeaders([m+"/maps*bm_iid="+t+"*"],{disableOgs:m,handleSwCache:!0,handleFirefoxInject:!0}),i=cjce.createElement("bm-iframe",{shadow:!a.darkMode,src:b(r),onLoad:function(){c.cjceSetLoading(!1)},onMessage:function(e){var n=e.bm_method,a=e.bm_value;"reserveCurrentView"===n&&l(a)}}),n.appendChild(i)}()})}();