"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var n,t,i,s,r,a;function e(){var t,e,o;t=window.location.pathname.match(/\/(?:u\/\d\/)?([a-z]{2,30})(?:\/l\/(\d{10,28}))?/),i=t[1],s=t[2],o=document.documentElement.textContent.split('[["'+s+'","')[1],a=o?(e=o.split('",["'),r=e[0].split('",')[0],e[1].split('"],')[0].split('"]\n')[0].split('"]↵')[0].split('"]')[0].split('","')):r=null,window.parent.postMessage({bm_method:"mybusinessWebsiteData",bm_value:{viewId:i,listingId:s,listingTitle:r,addressData:a}},n)}function o(){window.parent.postMessage({bm_method:"mybusinessStopLoading"},n),e()}window.top!==window&&"https://business.google.com"===window.location.origin&&(n=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(t=window.location.ancestorOrigins)||1===t.length&&t[0]===n)&&(document.addEventListener("mousedown",function(t){var e=function t(e){return e?"A"===e.tagName?e:t(e.parentNode):null}(t.target);e&&-1===e.search.indexOf("bm_")&&"https://ads.google.com"!==e.origin&&"https://adwords.google.com"!==e.origin&&(e.search=window.location.search)}),function t(){e(),setTimeout(t,1e3)}(),"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?o():window.addEventListener("DOMContentLoaded",o)))}();