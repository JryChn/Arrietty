"use strict";function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}!function(){var e,o,n;window.top===window||"https://poly.google.com"===window.location.origin&&(e=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(o=window.location.ancestorOrigins)||1===o.length&&o[0]===e)&&(n=!1,function o(){var t=-1!==window.location.pathname.indexOf("/view/");n!==t&&(n=t,window.parent.postMessage({bm_method:"polyBackState",bm_value:n},e)),setTimeout(o,100)}()))}();