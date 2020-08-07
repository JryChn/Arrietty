"use strict";cjce.registerTemplate("bm-p-mapswithcompanion",function(a,c){var n="https://www.google.com",e=n;cjBasics.navigator.opera&&(e="https://maps.google.com");var t,o,i,s=e+"/maps/companion",r="0"===c.account.authuser?null:c.account.authuser,l=cjgApis.companion.getInitData(),m=l.id,u=l.hash,h=l.parameters,p=cjBasics.uniqueId.generate(),d="",_=cjBasics.lang.i18n("cj_i18n_00061","Explore");var g,b,j,f,v,w=["q","Wc"],S=(b="bm_cache_v30__mapswithcompanion__functionnames",{set:function(a){I().then(function(){B(a),browserStorage.local.setItem(b,a),cjgApis.cache.setItem(c.account,b,a)})},restore:I});function B(a){Array.isArray(a)&&a.forEach(function(a,e){var n;"string"==typeof(n=a)&&/^[a-zA-Z$]{1,3}$/.test(n)&&(w[e]=a)})}function I(){return g=g||cjgApis.cache.getItem(c.account,b).then(function(a){return Array.isArray(a)?void B(a):browserStorage.local.getItem(b).then(B)})}function N(a){t&&t.cjceSendFrameCommand(a,e)}function y(a,e){N({method:"mapswithcompanionUpdateSearchQuery",value:a}),e&&setTimeout(function(){N({method:"mapswithcompanionSubmitSearchQuery",value:a})})}function x(a){var e=cjBasics.urlParams.attach(n+"/maps/search/",{api:"1",query:a,authuser:"0"!==c.account.authuser?c.account.authuser:null});c.openTab(e)}function T(){var e;t=cjce.createElement("bm-iframe",{src:(e={bm_cid:"mapswithcompanion",bm_iid:p,bm_wiz:"1",bm_wfn:w.join("_"),hl:cjBasics.lang.current,authuser:"0"===c.account.authuser?null:c.account.authuser},Object.keys(h).forEach(function(a){e[a]=h[a]}),e.usegapi=null,cjBasics.urlParams.attach(s,e)+u),solid:"#fff",sandbox:"allow-scripts allow-forms allow-same-origin allow-popups",onLoad:function(){o.cjceSetLoading(!1)},onMessage:function(a){var e;"string"==typeof a&&a.startsWith("!_{")?(e=cjgApis.companion.handleOpenUrlMessage(a,m,c.account))&&c.openTab(e):"mapswithcompanionBackState"===a.bm_method?o.cjceSetBackState(Boolean(a.bm_value)):"mapswithcompanionNewFunctionNames"===a.bm_method?S.set(a.bm_value):"mapswithcompanionUpdatePageTitle"===a.bm_method&&o.cjceSetPageLabel(a.bm_value||_)}}),a.appendChild(t)}function A(){t.cjceSendFrameRequest({method:"mapswithcompanionOpenInNew",value:'img[src*="x/arrow_back_"]'},e).then(function(a){var e;if(!a)return d?x(d):void(a||(e=cjBasics.urlParams.attach(n+"/maps",{authuser:r}),c.openTab(e)))})}function C(a){N({method:"mapswithcompanionToggleFocusState",value:a})}o=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"maps",pageLabel:_,serviceLabel:cjBasics.lang.i18n("cj_i18n_00423","Maps"),searchbox:{onInput:function(a){y(a,!1)},onSubmit:function(a){y(d=a,!0),i.value="",C(!1),o.cjceNavigatorEl.cjceSetCollapseState(!1)},onMetaSubmit:x,onClear:function(){y(d="",!0)},onFocusChanged:C},bmApis:c,onNewTab:A,onBack:function(){N({method:"mapswithcompanionGoBack"}),i.value="",C(!1),o.cjceSetNavigatorCollapseState(!1)}}),a.appendChild(o),i=o.cjceSearchboxEl,c.setOnPageDisplayHandler(function(){i.select(),C(!0)}),j=o.cjceDrawerEl,f={home:{iconName:"__mdi:place",label:_,shortcutId:"101"},locationsharing:{label:cjBasics.lang.i18n("cj_i18n_00863","Location sharing"),shortcutId:"590",iconName:"__mdi:record_voice_over",external:!0},places:{label:cjBasics.lang.i18n("cj_i18n_00127","Your places"),shortcutId:"557",iconName:"__mdi:bookmarks",external:!0},contributions:{label:cjBasics.lang.i18n("cj_i18n_00128","Your contributions"),shortcutId:"332",iconName:"__mdi:rate_review",external:!0},timeline:{label:cjBasics.lang.i18n("cj_i18n_00129","Your timeline"),shortcutId:"185",iconName:"__mdi:timeline",external:!0},yourdata:{label:cjBasics.lang.i18n("cj_i18n_01780","Your data in Maps"),shortcutId:"912",iconName:"__mdi:cjg_account",external:!0,divider:!0},mymaps:{label:cjBasics.lang.i18n("cj_i18n_00410","My Maps"),shortcutId:"167",iconName:"__mdi:file_map"},earth:{label:cjBasics.lang.i18n("cj_i18n_00471","Earth"),shortcutId:"49",iconName:"__mdi:earth",external:!c.servicesDatabase.earth}},v=cjce.createElement("bm-navlist",{items:f,selectedId:"home",onClick:function(a){"home"!==a&&c.pageManager.navigate(a)},onNewTab:function(a,e){var n=e.newTabUrl||cjgShortcuts.getUrl(e.shortcutId,c.account);c.openTab(n)}}),j.appendChild(v),cjBasics.webRequest.handleIframeHeaders([s+"*bm_iid="+p+"*"],{handleSwCache:!0,handleFirefoxInject:!0}),S.restore().then(T)});