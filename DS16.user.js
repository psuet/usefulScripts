// ==UserScript==
// @name         DS16 
// @namespace    https://github.com/psuet/userscripts/
// @version      0.21
// @description  MathJAX FTW
// @author       Paul Sütterlin
// @match        https://www2.math.rwth-aachen.de/DS16/exquery.html
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/DS16.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/DS16.user.js
// @grant        none
// ==/UserScript==

(function() {
document.evaluate("//select[@name='format']",document,null,9,null).singleNodeValue.selectedIndex=1;

})();
