"use strict";cjce.registerTemplate("bm-p-playconsole",function(e,a){var n="https://play.google.com/apps/publish/#";function c(e){a.openTab(n+e)}function i(e,a){c(a.newTabUrl)}var l=cjce.createElement("bm-ogb",{serviceIcon:"play_devconsole",serviceLabel:cjBasics.lang.i18n("cj_i18n_00478","Play Console"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:a,onNewTab:function(){c("")}});e.appendChild(l);var s=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});e.appendChild(s);var _=[{label:cjBasics.lang.i18n("cj_i18n_01808","All applications"),newTabUrl:"AppListPlace",iconName:"__mdi:cj_play_android"},{label:cjBasics.lang.i18n("cj_i18n_01809","Game services"),newTabUrl:"GameListPlace",iconName:"__mdi:play_games"},{label:cjBasics.lang.i18n("cj_i18n_01484","Alerts"),newTabUrl:"AlertsPlace",iconName:"__mdi:warning"},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01810","Download reports")},{label:cjBasics.lang.i18n("cj_i18n_00801","Reviews"),newTabUrl:"BulkExportPlace:bet=REVIEW",iconName:"__mdi:star"},{label:cjBasics.lang.i18n("cj_i18n_01811","Statistics"),newTabUrl:"BulkExportPlace:bet=STATS",iconName:"__mdi:assessment"},{label:cjBasics.lang.i18n("cj_i18n_01812","User acquisition"),newTabUrl:"BulkExportPlace:bet=USER_ACQUISITION",iconName:"__mdi:cj_person_trending_up"},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_00298","Settings")},{label:cjBasics.lang.i18n("cj_i18n_01813","Account details"),newTabUrl:"ProfilePlace",iconName:"__mdi:business"},{label:cjBasics.lang.i18n("cj_i18n_01814","API access"),newTabUrl:"ApiAccessPlace",iconName:"__mdi:extension"},{label:cjBasics.lang.i18n("cj_i18n_01815","Benchmarking preferences"),newTabUrl:"PeersetOptOutPlace",iconName:"__mdi:speed"},{label:cjBasics.lang.i18n("cj_i18n_01816","Developer page"),newTabUrl:"DeveloperPagePlace",iconName:"__mdi:web"},{label:cjBasics.lang.i18n("cj_i18n_01817","Pricing templates"),newTabUrl:"PricingTemplatePlace",iconName:"__mdi:attach_money"},{label:cjBasics.lang.i18n("cj_i18n_01818","Manage email lists"),newTabUrl:"TestersListsPlace",iconName:"__mdi:people"},{label:cjBasics.lang.i18n("cj_i18n_01440","Preferences"),newTabUrl:"EmailPrefsPlace",iconName:"__mdi:tune"}],r=cjce.createElement("bm-navlist",{compact:!0,theme:"solid",items:_,onClick:i,onNewTab:i});s.appendChild(r)});