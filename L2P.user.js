// ==UserScript==
// @name         L2P Enhancer
// @namespace    https://github.com/psuet/userscripts/
// @version      0.11
// @description  Autoredirects you to the page "My Courses"
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/L2P.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/L2P.user.js
// @author       Paul Sütterlin
// @match        https://www3.elearning.rwth-aachen.de/*
// @grant        none
// ==/UserScript==

(function() {
    if(window.location.href.indexOf("/start/SitePages/Start.aspx") > -1) {
       window.location.href = "https://www3.elearning.rwth-aachen.de/l2p/foyer/SitePages/MyCourses.aspx";
    }
})();
