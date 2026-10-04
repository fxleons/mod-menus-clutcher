// ==UserScript==
// @name         RetardRage Loader
// @namespace    rrage
// @version      1.0
// @description  Loads RetardRage cheat code from GitHub
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @run-at       document-idle
// @noframes
// ==/UserScript==
(function () {
  'use strict';
  var CODE_URL = 'https://raw.githubusercontent.com/higuys67/RRage/refs/heads/main/RetardRage-Code.js';
  GM_xmlhttpRequest({
    method: 'GET',
    url: CODE_URL + (CODE_URL.indexOf('?') < 0 ? '?v=1' : '&v=1'),
    onload: function (r) {
      try {
        if (r.status !== 200) { console.error('[rrage] HTTP', r.status); return; }
        (0, eval)(r.responseText);
        console.log('[rrage] loaded, press P');
      } catch (e) { console.error('[rrage] eval fail', e); }
    },
    onerror: function (e) { console.error('[rrage] download fail', e); }
  });
})();
