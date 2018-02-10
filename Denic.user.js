// ==UserScript==
// @name         denic WhoIs
// @namespace    https://github.com/psuet/usefulScripts/
// @version      1.0.0
// @description  Stops anoying questions
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/Denic.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/Denic.user.js
// @author       Paul Sütterlin
// @match        https://www.denic.de/webwhois-web20/de
// @icon         https://www.denic.de/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("justification").innerHTML="Blah Blah Blah";
    document.getElementById("reason2").checked = true;
})();
