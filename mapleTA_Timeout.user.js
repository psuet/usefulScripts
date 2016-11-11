// ==UserScript==
// @name         MapleTA Timeout Solver / Reminder
// @namespace    https://github.com/psuet
// @version      0.1
// @licence      MIT-Licence
// @description  Warns about anonying timeouts on placementtester.com
// @author       Paul Sütterlin
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/mapleTA_Timeout.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/mapleTA_Timeout.user.js
// @match        https://place38.placementtester.com/*
// @grant        none
// ==/UserScript==

(function() {
    let sPath = window.location.pathname;
    if ( sPath === "/rwth-aachen/modules/ClassHomepage.do" || sPath === "/rwth-aachen/"){  
        setInterval('location.reload();',800000);
    }else if (sPath === "/rwth-aachen/modules/test.Test"){
        setInterval('alert("Achtung: BITTE SPEICHERE DEINE ERGEBNISSE ZWISCHENDURCH!")',800000);
    } 
})();
