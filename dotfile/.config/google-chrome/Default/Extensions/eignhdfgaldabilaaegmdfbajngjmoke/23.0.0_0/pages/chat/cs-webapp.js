"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var o,e,n;function t(){var e=document.querySelector('div[aria-label][role="banner"] > div:first-child'),t=!e||"none"===window.getComputedStyle(e).display;n!==t&&(n=t,document.documentElement.dataset.bmChatShowNav=t?"1":"0",window.parent.postMessage({bm_method:"chatHideNav",bm_value:t},o))}function r(){t(),setTimeout(r,1e3)}function i(){var e=document.querySelector("body > div > c-wiz");new window.MutationObserver(t).observe(e,{attributes:!0,attributeFilter:["class"],attributeOldValue:!1}),setTimeout(r,1e3)}window.top!==window&&"https://chat.google.com"===window.location.origin&&(o=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=window.location.ancestorOrigins)||1===e.length&&e[0]===o)&&(n=!1,"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?i():window.addEventListener("DOMContentLoaded",i)))}();