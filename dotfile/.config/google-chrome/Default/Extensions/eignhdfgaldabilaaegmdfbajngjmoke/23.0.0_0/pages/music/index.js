"use strict";cjce.registerTemplate("bm-p-music",function(a,e){var n="#ff5722",i="https://play.google.com/music/listen";"0"!==e.account.authuser&&(i+="?u="+e.account.authuser),i+="#/";var c=cjce.createElement("bm-ogb",{serviceIcon:"play_music",serviceLabel:cjBasics.lang.i18n("cj_i18n_00431","Play Music"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{color:n,onSubmit:function(a){var n=i+"sr/"+encodeURIComponent(a);e.openTab(n)},submitInNewTab:!0},bmApis:e,onNewTab:function(){e.openTab(i)}});a.appendChild(c),e.setOnPageDisplayHandler(c.cjceSearchboxEl.select);var l=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});function s(a,n){e.openTab(n.newTabUrl)}var _=[{label:cjBasics.lang.i18n("cj_i18n_01356","Music library"),newTabUrl:i+"wmp",iconName:"__mdi:library_music"},{label:cjBasics.lang.i18n("cj_i18n_01358","Recents"),newTabUrl:i+"recents",iconName:"__mdi:history"},{label:cjBasics.lang.i18n("cj_i18n_00202","Top charts"),newTabUrl:i+"wtc",iconName:"__mdi:star_outline"},{label:cjBasics.lang.i18n("cj_i18n_00203","New Releases"),newTabUrl:i+"wnr",iconName:"__mdi:new_releases"},{label:cjBasics.lang.i18n("cj_i18n_00209","Browse Stations"),newTabUrl:i+"wbs",iconName:"__mdi:bigtop_updates"},{label:cjBasics.lang.i18n("cj_i18n_00205","Artists"),newTabUrl:i+"tps",iconName:"__mdi:cj_sj_podcast"},{header:!0,color:n,label:cjBasics.lang.i18n("cj_i18n_01356","Music library")},{label:cjBasics.lang.i18n("cj_i18n_01196","Playlists"),newTabUrl:i+"wmp",iconName:"__mdi:playlist_play"},{label:cjBasics.lang.i18n("cj_i18n_00204","Stations"),newTabUrl:i+"wms",iconName:"__mdi:bigtop_updates"},{label:cjBasics.lang.i18n("cj_i18n_00205","Artists"),newTabUrl:i+"artists",iconName:"__mdi:person"},{label:cjBasics.lang.i18n("cj_i18n_00206","Albums"),newTabUrl:i+"albums",iconName:"__mdi:album"},{label:cjBasics.lang.i18n("cj_i18n_00207","Songs"),newTabUrl:i+"all",iconName:"__mdi:music_note"},{label:cjBasics.lang.i18n("cj_i18n_00208","Genres"),newTabUrl:i+"genres",iconName:"__mdi:genres"}],r=cjce.createElement("bm-navlist",{compact:!0,items:_,onClick:s,onNewTab:s});l.appendChild(r),a.appendChild(l)});