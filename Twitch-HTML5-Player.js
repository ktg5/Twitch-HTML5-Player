// ==UserScript==
// @name         Twitch HTML5 Player
// @namespace    https://github.com/ktg5/Twitch-HTML5-Player/
// @version      1.0dev1
// @description  Try to recreate the old Twitch player looks.
// @author       ktg5
// @match        *://*.twitch.tv/*
// @updateURL    https://github.com/ktg5/Twitch-HTML5-Player/raw/dev/Twitch-HTML5-Player.user.js
// @downloadURL  https://github.com/ktg5/Twitch-HTML5-Player/raw/dev/Twitch-HTML5-Player.user.js
// @resource     CSS https://github.com/ktg5/Twitch-HTML5-Player/raw/dev/style.css
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    // IMPORT CSS
    const CSS1 = GM_getResourceText("CSS")
    GM_addStyle(CSS1);
})();