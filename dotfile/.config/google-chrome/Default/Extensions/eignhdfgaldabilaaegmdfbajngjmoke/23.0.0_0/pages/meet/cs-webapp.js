"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var n,e;function r(e){return e?"A"===e.tagName?e:r(e.parentNode):null}window.top!==window&&"https://meet.google.com"===window.location.origin&&(n=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=window.location.ancestorOrigins)||1===e.length&&e[0]===n)&&(document.addEventListener("mousedown",function(e){var t,o=r(e.target);o&&!o.bmProcessed&&(o.bmProcessed=!0,o.href&&o.origin.match(/^https:\/\/[a-z]{1,}\.app\.goo\.gl$/)&&(t=o.searchParams,o.href=t.get("link")||t.get("afl")))}),document.addEventListener("click",function(e){var t=r(e.target),o=t&&t.href;o&&(window.parent.postMessage({bm_method:"meetOpenUrl",bm_value:o},n),e.stopPropagation(),e.preventDefault())}),window.addEventListener("load",function(){var e=document.querySelector('body > div > script + div div[role="dialog"] > div > div[jsaction][class] > div:first-child[role="button"]');e&&e.click(),setTimeout(function(){document.documentElement.dataset.bmDialogClosed="1"},500)})))}();