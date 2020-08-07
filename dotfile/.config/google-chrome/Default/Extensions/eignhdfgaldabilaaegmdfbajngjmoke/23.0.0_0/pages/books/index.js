"use strict";cjce.registerTemplate("bm-p-books",function(n,u){var a,o="books"===(u.instanceParameters.productId||"books"),t=["https://www.googleapis.com/auth/books"],c="https://content.googleapis.com/books/v1/",s=window.atob("QUl6YVN5QVBncHJvLXAtRXc1ZGtTRDlUVW5aZENJZGJDS1VOQ0Zj"),i=12;o&&n.style.setProperty("--accent-color","#0179ca");var l="https://play.google.com",r="https://books.google.com",d="https://www.google.com",b=r+"/books?op=library";o?b=l+"/books?authuser="+u.account.authuser:"0"!==u.account.authuser&&(b+="&authuser="+u.account.authuser);var h,m,_,p,f,j,g,v="eBooks",k={libraryHeader:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_00807","My library")},historyHeader:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01685","My history")},favorites:{label:cjBasics.lang.i18n("cj_i18n_00692","Favorites"),shelfId:0,iconName:"__mdi:star_outline",newTabUrl:w(0)},purchases:{label:o?cjBasics.lang.i18n("cj_i18n_00310","Purchases"):cjBasics.lang.i18n("cj_i18n_01686","Purchased"),shelfId:1,iconName:"__mdi:local_offer",newTabUrl:e("books/purchases")},toRead:{label:cjBasics.lang.i18n("cj_i18n_01690","To read"),shelfId:2,iconName:"__mdi:notifications",newTabUrl:w(2)},readingNow:{label:cjBasics.lang.i18n("cj_i18n_01687","Reading now"),shelfId:3,iconName:"__mdi:visibility",newTabUrl:w(3)},haveRead:{label:cjBasics.lang.i18n("cj_i18n_01688","Have read"),shelfId:4,iconName:"__mdi:history",newTabUrl:w(4)},reviewed:{label:cjBasics.lang.i18n("cj_i18n_01689","Reviewed"),shelfId:5,iconName:"__mdi:rate_review",newTabUrl:w(5)},recentlyViewed:{label:cjBasics.lang.i18n("cj_i18n_01107","Recently viewed"),shelfId:6,iconName:"__mdi:schedule",newTabUrl:w(6)},eBooks:{label:o?cjBasics.lang.i18n("cj_i18n_00807","My library"):cjBasics.lang.i18n("cj_i18n_01693","Ebooks"),shelfId:7,iconName:"__mdi:library_books",newTabUrl:e("books")},forYou:{label:o?cjBasics.lang.i18n("cj_i18n_01055","For you"):cjBasics.lang.i18n("cj_i18n_01684","Books for you"),shelfId:8,iconName:"__mdi:person",newTabUrl:o?e("store/books"):w(8)},browsingHistory:{label:cjBasics.lang.i18n("cj_i18n_01692","Browsing history"),shelfId:9,external:!0,iconName:"__mdi:history",newTabUrl:w(9)},audiobooks:{label:cjBasics.lang.i18n("cj_i18n_01678","Audiobooks"),external:!0,iconName:"__mdi:headset",newTabUrl:e("books/audiobooks")},play:{label:cjBasics.lang.i18n("cj_i18n_00134","Shop"),iconName:"__mdi:shop",newTabUrl:e("store/books"),divider:!0,external:!cjBasics.wrif.supported},uploads:{label:cjBasics.lang.i18n("cj_i18n_01680","Uploads"),external:!0,iconName:"__mdi:file_upload",newTabUrl:e("books/uploads")},rentals:{label:cjBasics.lang.i18n("cj_i18n_01682","Rentals"),external:!0,iconName:"__mdi:newsstand",newTabUrl:e("books/rentals")},samples:{label:cjBasics.lang.i18n("cj_i18n_01681","Samples"),external:!0,iconName:"__mdi:book",newTabUrl:e("books/samples")},family:{label:cjBasics.lang.i18n("cj_i18n_01219","Family"),external:!0,iconName:"__mdi:people",newTabUrl:e("books/family"),divider:!0},classicbooks:{label:cjBasics.lang.i18n("cj_i18n_01911","Google Books"),iconName:"__mdi:collections_bookmark",newTabUrl:w(null)}};function e(e){return l+"/"+e+"?authuser="+u.account.authuser}function w(e){return cjBasics.urlParams.attach(r+"/books",{as_coll:e,authuser:"0"===u.account.authuser?null:u.account.authuser})}function y(e){return k[e].shelfId}function B(e){var a;e&&"not_authorized"===e.cjg_error&&(n.textContent="",a=cjce.createElement("bm-fulldialog",{bmApis:u,onNewTab:function(){u.openTab(b)},lockup:{label:o?cjBasics.lang.i18n("cj_i18n_00285","Play Books"):cjBasics.lang.i18n("cj_i18n_00460","Books")},iconName:o?"play_books":"books",message:cjBasics.lang.i18n("cj_i18n_00321","Before you can use this page, you need to give access to load your Google Books. In case you only want to search for books, navigate to the search page in this extension."),actionLabel:cjBasics.lang.i18n("cj_i18n_01916","Continue with Google"),actionG:!0,action:function(){cjgApis.auth.requestPermissions(u.account,e.cjg_missing_scopes)}}),n.appendChild(a))}function I(e,a){var n=a||{};n.hl=cjBasics.lang.current,n.prettyPrint="false";var o=cjBasics.urlParams.attach(c+e,n);return cjgApis.request(o,{fetchAs:"json"},{pa:"optional",account:u.account,key:s,requiredScopes:t})}function T(e){return g.cjceSetLoading(!0),function t(c){var s=void 0!==c.shelf;if(s&&!0!==c.noCache&&7===c.shelf)return cjgApis.cache.getItem(u.account,"bm_cache_v30__books__mybooks").then(function(e){return c.noCache=!0,e?{result:e,newRequest:!0,freshRequest:function(){return t(c)}}:t(c)});c.startIndex=c.startIndex||0;var e="volumes";return c.shelf&&(e="mylibrary/bookshelves/"+c.shelf+"/volumes"),I(e,{q:c.q,maxResults:c.maxResults,fields:"items(id,volumeInfo(title,previewLink,authors))",filter:s?null:c.searchFilter,startIndex:c.startIndex}).then(function(e){var a=e.items,n=[];a&&a.forEach(function(e){var a=e.volumeInfo;n.push({id:e.id,title:a.title,previewLink:a.previewLink,authors:a.authors,openBook:Boolean(c.shelf)})});var o={result:n,newRequest:0===c.startIndex};return s&&0===c.startIndex&&7===c.shelf&&cjgApis.cache.setItem(u.account,"bm_cache_v30__books__mybooks",n),e.items=e.items||[],e.totalItems-c.startIndex-e.items.length!=0&&(o.followupRequest=function(){return c.startIndex+=c.maxResults,t(c)}),o},B)}({maxResults:i,searchFilter:h.selected,shelf:e.shelf,q:e.q})}function N(e){var a,n=e.id;return o?l+"/books/reader?id="+encodeURIComponent(n)+"&authuser="+u.account.authuser:(a=d+"/books/edition/_/"+encodeURIComponent(n),"0"!==u.account.authuser&&(a+="?authuser="+u.account.authuser),a)}function x(e){var a=e&&e.followupRequest;a&&_.cjceSetInfiniteScroll(function(){a().then(x)});var n,o=e&&Array.isArray(e.result)?e.result:[];e&&e.newRequest&&(_.textContent="",m=cjce.createElement("cjmd-grid"),_.appendChild(m),0===o.length&&(n=cjce.createElement("cjmd-emptystate",{color:!0,label:cjBasics.lang.i18n("cj_i18n_00322","No books found"),iconName:"__mdi:book"}),_.appendChild(n))),0!==o.length&&o.forEach(function(e){var a=function(a){var e=cjce.createElement("cjmd-griditem",{onClick:function(){var e=N(a);u.openTab(e)}}),n=cjBasics.urlParams.attach("https://books.google.com/books/content/reader",{printsec:"frontcover",img:"1",zoom:"1",id:a.id}),o=document.createElement("div");o.className="bm-p-books-thumbnail",o.style.backgroundImage='url("'+n+'")',e.appendChild(o);var t=document.createElement("div");t.className="cjmd-grid__item__bottom",e.appendChild(t);var c=document.createElement("div");c.className="cjmd-grid__item__textcontainer",t.appendChild(c);var s=document.createElement("div");s.textContent=a.title,c.appendChild(s);var i,l,r=20;return Array.isArray(a.authors)&&((i=document.createElement("div")).className="cjmd-secondarytext",i.textContent=a.authors.join(" "),c.appendChild(i)),a.previewLink&&!a.openBook&&(r-=5,l=cjce.createElement("cjmd-iconbutton",{iconName:"__mdi:visibility",label:cjBasics.lang.i18n("cj_i18n_01161","Preview"),onClick:function(){u.openTab(a.previewLink+"&authuser="+u.account.authuser)}}),t.appendChild(l)),a.title.length>r&&(s.title=a.title),e}(e);m.appendChild(a)}),e&&e.freshRequest?e.freshRequest().then(x):g.cjceSetLoading(!1)}function C(){_.textContent="";var e=p.value;a=e,h.hidden=!1,T({q:e}).then(x)}function U(e){var a=cjBasics.urlParams.attach(l+"/store/search",{q:e,c:"books",authuser:u.account.authuser});u.openTab(a)}function R(e){var a=cjBasics.urlParams.attach(d+"/search",{q:e,tbm:"bks",authuser:"0"===u.account.authuser?null:u.account.authuser});u.openTab(a)}function E(e){return e.map(function(e){var a=k[e];return a.id=e,a})}function q(){var s,n;cjce.applyTemplate(f,"bm-loading"),s=[],n=["historyHeader","purchases","reviewed","recentlyViewed","browsingHistory"],(o?(s=E(["eBooks","audiobooks","play","forYou","purchases","uploads","rentals","samples","family","classicbooks"]),Promise.resolve(s)):(s=E(["libraryHeader","eBooks","favorites","readingNow","toRead","haveRead","forYou"]),I("mylibrary/bookshelves",{fields:"items(id,title,volumeCount)"}).then(function(e){var c=[];e.items.forEach(function(e){var a=e.id;if("number"==typeof a)if(a<10)for(var n=0;n<s.length;n++)s[n].shelfId===a&&(s[n].infoSuffix=e.volumeCount);else{var o="bookshelf-"+a,t={id:o,shelfId:a,label:e.title,infoSuffix:e.volumeCount,iconName:"__mdi:newsstand",newTabUrl:w(a)};k[o]=t,c.push(t)}}),c.sort(function(e,a){return e.label>a.label?-1:1}),s=s.concat(c);var a=E(n);return s=s.concat(a)}))).then(function(e){j=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"eBooks",compact:!o,items:e,onChange:function(e,a){if("classicbooks"===e||"play"===e){if(j.cjceSelectedId=v,"classicbooks"===e)return void u.pageManager.navigate(e);if("play"===e)return void u.pageManager.navigate(e,{typeId:"books"})}v=e,_.textContent="",a&&(b=a.newTabUrl,g.cjceSetPageLabel(a.label)),T({shelf:y(e)}).then(x)},onNewTab:function(e,a){u.openTab(a.newTabUrl)}}),f.appendChild(j),f.cjceSetLoading(!1)},B)}g=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:o?"play_books":"books",serviceLabel:o?cjBasics.lang.i18n("cj_i18n_00285","Play Books"):cjBasics.lang.i18n("cj_i18n_00460","Books"),pageLabel:k[v].label,searchbox:{suggestHandler:function(e){return cjgApis.suggestquery.get({gAccount:u.account,hl:cjBasics.lang.current,q:e,ds:"bo"})},submitInNewTab:o,onSubmit:o?U:C,onMetaSubmit:o?U:R,onClear:function(){a="",h.hidden=!0,T({shelf:y(v)}).then(x)}},bmApis:u,onNewTab:function(){a?(o?U:R)(a):u.openTab(b)}}),n.appendChild(g),f=g.cjceDrawerEl,p=g.cjceSearchboxEl,q(),(h=cjce.createElement("cjmd-selectbox",{onChange:C,options:[{value:"ebooks",label:cjBasics.lang.i18n("cj_i18n_00198","All prices"),selected:!0},{value:"free-ebooks",label:cjBasics.lang.i18n("cj_i18n_00199","Free")},{value:"paid-ebooks",label:cjBasics.lang.i18n("cj_i18n_00200","Paid")}]})).hidden=!0,g.cjceAppendChild(h),_=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll",infiniteScroll:!0}),u.setOnPageDisplayHandler(p.select),n.appendChild(_),T({shelf:7}).then(x)});