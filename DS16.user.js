// ==UserScript==
// @name         DS16 
// @namespace    https://github.com/psuet/usefulScripts/
// @version      0.23
// @description  MathJAX FTW
// @author       Paul Sütterlin
// @match        https://www2.math.rwth-aachen.de/*/exquery.html
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/DS16.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/DS16.user.js
// @grant        none
// ==/UserScript==

(function() {
document.evaluate("//select[@name='format']",document,null,9,null).singleNodeValue.selectedIndex=1;

})();
