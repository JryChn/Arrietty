"use strict";!function(){var o="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,r=o.runtime.getURL("PATH/").replace("/PATH/",""),i=r.startsWith("moz-extension://");function n(e){var n=r+"/pages/wei_"+e+"/"+e+"-",t=i?".svg":".png";o.browserAction.setIcon({path:{16:n+"16"+t,19:n+"19"+t,32:n+"32"+t,38:n+"38"+t}})}window.bmSetBrowserActionIcon=n,window.bmSetBrowserAction=function(){o.runtime.getManifest().chrome_url_overrides&&(o.browserAction.onClicked.addListener(function(){o.tabs.create({url:o.runtime.getURL("app.html?environment=newtab")})}),n("newtab")),o.storage.sync.get("bm_pref__main__extensionicon",function(e){"gsa_nobg"===e.bm_pref__main__extensionicon&&n("gsa_nobg")})}}();