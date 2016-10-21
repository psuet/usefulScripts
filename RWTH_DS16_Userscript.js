// ==UserScript==
// @name         RWTH - DS16 Enhancer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  MathJAX FTW
// @author       Paul Sütterlin
// @match        https://www2.math.rwth-aachen.de/DS16/exquery.html
// @grant        none
// ==/UserScript==

(function() {
// Sets default Format for "Übungen" to MathJAX  
document.evaluate("//select[@name='format']",document,null,9,null).singleNodeValue.selectedIndex=1;

})();
