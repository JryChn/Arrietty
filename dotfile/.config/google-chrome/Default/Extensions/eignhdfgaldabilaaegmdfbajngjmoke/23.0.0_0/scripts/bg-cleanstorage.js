"use strict";function bmCleanStorage(){var m,p="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser;p&&p.storage&&p.storage.local&&(p.storage.local.get(null,function(e){var r=Object.keys(e).filter(function(e){return-1===e.indexOf("bm_pref")&&-1===e.indexOf("bm_cache_v30")&&!e.startsWith("cj_landing_")});0<r.length&&p.storage.local.remove(r)}),p.storage.sync&&(m={prefTasksDueDate:"bm_pref__tasks__duedate",prefDriveThumbnailView:"bm_pref__drive__thumbs",prefatariThumbnailView:"bm_pref__atari__thumbs",prefatariFilterBy:"bm_pref__atari__filter",prefatariOrderBy:"bm_pref__atari__order",prefdatastudioFilterBy:"bm_pref__datastudio__filter",prefdatastudioOrderBy:"bm_pref__datastudio__order",prefdocsThumbnailView:"bm_pref__docs__thumbs",prefdocsFilterBy:"bm_pref__docs__filter",prefdocsOrderBy:"bm_pref__docs__order",prefdrawingsThumbnailView:"bm_pref__drawings__thumbs",prefdrawingsFilterBy:"bm_pref__drawings__filter",prefdrawingsOrderBy:"bm_pref__drawings__order",prefformsThumbnailView:"bm_pref__forms__thumbs",prefformsFilterBy:"bm_pref__forms__filter",prefformsOrderBy:"bm_pref__forms__order",prefjamboardThumbnailView:"bm_pref__jamboard__thumbs",prefjamboardFilterBy:"bm_pref__jamboard__filter",prefjamboardOrderBy:"bm_pref__jamboard__order",prefmymapsThumbnailView:"bm_pref__mymaps__thumbs",prefmymapsFilterBy:"bm_pref__mymaps__filter",prefmymapsOrderBy:"bm_pref__mymaps__order",prefscriptFilterBy:"bm_pref__script__filter",prefscriptOrderBy:"bm_pref__script__order",prefsheetsThumbnailView:"bm_pref__sheets__thumbs",prefsheetsFilterBy:"bm_pref__sheets__filter",prefsheetsOrderBy:"bm_pref__sheets__order",prefslidesThumbnailView:"bm_pref__slides__thumbs",prefslidesFilterBy:"bm_pref__slides__filter",prefslidesOrderBy:"bm_pref__slides__order","dense-mode":"bm_pref__main__densemode","selected-services":"bm_pref__portal__services",serviceClicks:"bm_pref__applauncher__clicks","news-edition":"bm_pref__news__edition",prefTrendsHottrendsEdition:"bm_pref__trends__edition"},p.storage.sync.get(null,function(_){var s=Object.keys(_),t=[],f={},i=!1;s.forEach(function(e){var r;e.startsWith("bm_pref")||(t.push(e),(r=m[e])&&-1===s.indexOf(r)&&(i=!0,f[r]=_[e]))}),i&&p.storage.sync.set(f),0<t.length&&p.storage.sync.remove(t)})))}