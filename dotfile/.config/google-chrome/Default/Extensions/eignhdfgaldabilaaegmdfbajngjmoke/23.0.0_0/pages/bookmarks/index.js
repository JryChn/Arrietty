"use strict";cjce.registerTemplate("bm-p-bookmarks",function(u,f){var B,o,i,r,s,m,C=cjBasics.lang.i18n("cj_i18n_01250","All items"),E="https://www.google.com/bookmarks/",x="0"===f.account.authuser?null:f.account.authuser,L=cjBasics.urlParams.attach(E,{authuser:x}),d="_bm_all";function n(e){var a=cjBasics.urlParams.attach(E+"find",{q:e,authuser:x});f.openTab(a)}function j(e,a){var c=a||{};c.sig=B;var n=cjBasics.urlParams.attach(E+(e||""),{authuser:x});return cjBasics.ajax(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},body:cjBasics.urlParams.create(c)})}function t(e,a){var c=e;return a&&(c+=","+a),j("mark",{op:"modlabel",labels:c})}function e(){var e=cjBasics.urlParams.attach(E+"lookup",{start:"0",num:"1000000000",hl:cjBasics.lang.current,authuser:x});return cjBasics.ajax(e).then(function(e){var a,c;c=(a=e).match(/data-signature=["']([a-zA-Z0-9-_]{44})["']/)||a.match(/name="sig" value="([a-zA-Z0-9-_]{44})"/)||a.match(/sig=([a-zA-Z0-9-_]{44})["']/)||a.match(/sig\\x3d([a-zA-Z0-9-_]{44})["']/)||a.match(/value="([a-zA-Z0-9-_]{44})"/),B=c?c[1]:null;var n='id="search">',l=-1===e.indexOf(n)?"":e.split(n)[1].split('<div style="text-align: center;"')[0],t=(new window.DOMParser).parseFromString(l,"text/html").querySelectorAll('div[id] > span[id*="bkmk_view_"]'),i={_bm_all:{iconName:"__mdi:home",label:C,newTabUrl:L}};function o(e){i[e]||e.startsWith("_bm_unlabeled")||(i[e]={customLabel:!0,iconName:"__mdi:label",label:e,newTabUrl:cjBasics.urlParams.attach(E+"lookup",{authuser:x,q:'label:"'+e+'"'})})}for(var r=[],s=0;s<t.length;s++){var m=t[s],d=m.querySelector('[id*="bkmk_info_"]'),b=d?d.textContent:"",u=["_bm_all"];if(d)for(var j=d.querySelectorAll("span > a"),_=0;_<j.length;_++)u.push(j[_].textContent);else u.push("_bm_unlabeled");u.forEach(o);var h=m.querySelector('[id*="bkmk_href_"]'),k=new URLSearchParams(h.search),p=m.querySelector("[data-bookmark-id]");r.push({id:p&&p.dataset.bookmarkId||null,url:k.get("q"),title:h.textContent,timestamp:parseInt(m.querySelector("script").textContent.split("_tsRender(")[1].split(",")[0],10),labels:u,labelsText:b})}var g=Object.keys(i).map(function(e){var a=i[e];return a.id=e,a});g.push({id:"_bm_unlabeled",iconName:"__mdi:label_off",label:cjBasics.lang.i18n("cj_i18n_00369","Unlabeled"),newTabUrl:cjBasics.urlParams.attach(E+"lookup",{authuser:x,q:"label:^none"})});var v={bookmarks:r,labels:g};return cjgApis.cache.setItem(f.account,"bm_cache_v30__bookmarks__bookmarks",v),v})}function b(a,c){var e=c.customLabel?{renameLabel:{iconName:"__mdi:cjg_rename",label:cjBasics.lang.i18n("cj_i18n_01940","Rename")},deleteLabel:{iconName:"__mdi:delete",label:cjBasics.lang.i18n("cj_i18n_01563","Delete")}}:{copyBookmark:{iconName:"__mdi:link",label:cjBasics.lang.i18n("cj_i18n_01901","Copy link")},editBookmark:{iconName:"__mdi:edit",label:cjBasics.lang.i18n("cj_i18n_05629","Edit")},deleteBookmark:{iconName:"__mdi:delete",label:cjBasics.lang.i18n("cj_i18n_01563","Delete")}},n=cjce.createElement("cjmd-iconbuttonmenu",{label:cjBasics.lang.i18n("cj_i18n_06294","More actions"),items:e,onClick:function(e){"copyBookmark"===e?cjBasics.clipboard.copy(c.url):"deleteBookmark"===e?j("mark",{dlq:c.id}).then(function(){a.remove()}):"editBookmark"===e?k({bkmk:c.url,title:c.title},!0):"deleteLabel"===e?t(c.label).then(function(){a.remove(),h()}):"renameLabel"===e&&function(e){var a=cjce.createElement("cjmd-textfield",{label:cjBasics.lang.i18n("cj_i18n_06314","Label name")}),c=cjBasics.lang.i18n("cj_i18n_01737","(No title)"),n=e.label||c;a.cjceValue=n;var l=cjce.createElement("cjmd-dialog",{title:cjBasics.lang.i18n("cj_i18n_06312","Rename bookmark label"),message:cjBasics.lang.i18n("cj_i18n_06313","Please enter a new label name"),confirmLabel:cjBasics.lang.i18n("cj_i18n_01940","Rename"),cancelLabel:cjBasics.lang.i18n("cj_i18n_01659","Cancel"),additionalFragment:a,onConfirm:function(){var e=a.cjceValue||c;t(n,e).then(h)}});document.body.appendChild(l),setTimeout(function(){l.showModal(),l=null,a.cjceSelect()})}(c)}});return n.classList.add("cjmd-item__hovertools"),n}function l(e){i.textContent="";var a,c,n,l=((a=e)[a.length-1].divider=!0,a.concat([{id:"_bm_settings",iconName:"__mdi:settings",newTabUrl:cjBasics.urlParams.attach(E+"mark",{op:"editl",authuser:x}),label:cjBasics.lang.i18n("cj_i18n_00010","Manage labels"),external:!0},{id:"_bm_export",iconName:"__mdi:file_download",newTabUrl:cjBasics.urlParams.attach(E+"bookmarks.html",{hl:cjBasics.lang.current,authuser:x}),label:cjBasics.lang.i18n("cj_i18n_01251","Export bookmarks"),external:!0},{id:"_bm_deleteall",iconName:"__mdi:delete",newTabUrl:cjBasics.urlParams.attach(E+"edit",{ceh:"1",authuser:x}),label:cjBasics.lang.i18n("cj_i18n_06315","Delete all bookmarks"),external:!0}]));for(var t in d="_bm_all",r=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:d,items:l,onChange:function(e,a){d=e,s.cjceSetPageLabel(a.label);var c=!1;m.hidden=!0;for(var n=o.querySelectorAll(".cjmd-item"),l=0;l<n.length;l++){var t=n[l],i=-1===t.bookmarkLabels.indexOf(e);t.hidden=i,c||i||(c=!0)}c||(m.hidden=!1)},onNewTab:function(e,a){f.openTab(a.newTabUrl)}}),l){l[t].customLabel&&l[t].cjceDomEl&&(n=b((c=l[t]).cjceDomEl,c),c.cjceDomEl.appendChild(n))}i.appendChild(r)}function _(e,a){var c,n=e.bookmarks;a||l(e.labels),o.textContent="",m=cjce.createElement("cjmd-emptystate",{color:!0,label:cjBasics.lang.i18n("cj_i18n_00370","No bookmarks found"),subLabel:cjBasics.lang.i18n("cj_i18n_00371","To add a bookmark, click the add button at the bottom"),iconName:"__mdi:star_outline"}),0<n.length&&(m.hidden=!0,c=cjce.createElement("cjmd-list"),n.forEach(function(e){var a=function(a){var c=cjce.createElement("cjmd-item");c.addEventListener("click",function(e){e.target===c&&f.openTab(a.url)}),c.bookmarkLabels=a.labels;var e=cjce.createElement("cjmd-icon",{favicon:a.url});c.appendChild(e);var n=document.createElement("div");n.className="cjmd-item__body";var l=document.createElement("div");l.className="cjmd-item__header",l.textContent=a.title,n.appendChild(l);var t=document.createElement("div");t.className="cjmd-secondarytext",t.textContent=a.url,n.appendChild(t);var i=document.createElement("div");i.className="cjmd-secondarytext";var o=[];a.labelsText&&o.push(a.labelsText),i.textContent=o.join(" - "),n.appendChild(i),c.appendChild(n);var r=b(c,a);return c.appendChild(r),c}(e);c.appendChild(a)}),o.appendChild(c)),o.appendChild(m),a||s.cjceSetLoading(!1)}function h(){return s.cjceSetLoading(!0),e().then(_)}function k(e,a){var c=cjce.createElement("cjmd-container",{solid:!0,floating:!0}),n=cjce.createElement("bm-ogb",{displayBack:!0,serviceIcon:"bookmarks",serviceLabel:cjBasics.lang.i18n("cj_i18n_00190","Bookmarks"),pageLabel:a?cjBasics.lang.i18n("cj_i18n_04577","Edit bookmark"):cjBasics.lang.i18n("cj_i18n_00009","Add bookmark"),onBack:function(){c.remove()},bmApis:f});c.appendChild(n);var l=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});c.appendChild(l);var t=document.createElement("div");t.className="bm-p-bookmarks-form",l.appendChild(t);var i=cjce.createElement("cjmd-textfield",{floatingLabel:!0,label:cjBasics.lang.i18n("cj_i18n_06316","Name")});t.appendChild(i);var o=cjce.createElement("cjmd-textfield",{floatingLabel:!0,label:cjBasics.lang.i18n("cj_i18n_06317","Location (URL)")});a||t.appendChild(o);var r=cjce.createElement("cjmd-textfield",{floatingLabel:!0,label:cjBasics.lang.i18n("cj_i18n_06318","Labels")});t.appendChild(r);var s=cjce.createElement("cjmd-textfield",{floatingLabel:!0,label:cjBasics.lang.i18n("cj_i18n_06319","Notes"),multiline:!0});t.appendChild(s);var m=cjce.createElement("cjmd-button",{label:cjBasics.lang.i18n("cj_i18n_01363","Save"),fill:!0,color:!0,onClick:function(){var e;j("mark",{title:(e={title:i.cjceValue,bkmk:o.cjceValue,labels:r.cjceValue,annotation:s.cjceValue}).title||cjBasics.lang.i18n("cj_i18n_01737","(No title)"),bkmk:e.bkmk,labels:e.labels||"",annotation:e.annotation||""}).then(function(){c.remove(),h()})}});n.cjceAppendChild(m);var d=e&&e.title;d&&(i.cjceValue=d);var b=e&&e.bkmk;b&&(o.cjceValue=b),u.appendChild(c),setTimeout(function(){i.cjceSelect()})}!function(){var a;s=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:"bookmarks",serviceLabel:cjBasics.lang.i18n("cj_i18n_00190","Bookmarks"),pageLabel:C,searchbox:{onSubmit:n,submitInNewTab:!0},drawer:!0,bmApis:f,onNewTab:function(){var e=null,a=r&&r.cjceSelectedId;a&&"_bm_all"!==a&&(e="label:"+a),"_bm_unlabeled"===a&&(e="label:^none");var c=cjBasics.urlParams.attach(E+"lookup",{authuser:x,q:e});f.openTab(c)}}),u.appendChild(s),f.setOnPageDisplayHandler(s.cjceSearchboxEl.select),i=s.cjceDrawerEl;var c=cjce.createElement("cjmd-fab",{mini:!0,color:!0,iconName:"__mdi:link",label:cjBasics.lang.i18n("cj_i18n_06295","Bookmark this"),onClick:function(){k({bkmk:a.url,title:a.title})}});cjBasics.navigator.getActionableUrl().then(function(e){e?(a=e,c.title=cjBasics.lang.i18n("cj_i18n_06295","Bookmark this")+" ("+a.url+")"):c.remove()});var e=cjce.createElement("cjmd-fabgroup",{items:[cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_00009","Add bookmark"),onClick:function(){k()}}),c]});u.appendChild(e),o=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),u.appendChild(o),cjgApis.cache.getItem(f.account,"bm_cache_v30__bookmarks__bookmarks").then(function(e){return e||{bookmarks:[],labels:[]}}).then(function(e){_(e,!0)}),h()}()});