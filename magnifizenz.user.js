// ==UserScript==
// @name         Schmachtenberg
// @namespace    https://github.com/psuet/usefulScripts/
// @version      1.0.2
// @description  Brings back Schmachtenberg to campusOffice
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/magnifizenz.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/magnifizenz.user.js
// @author       Julius Rickert
// @match        https://www.campus.rwth-aachen.de/office/
// @icon         https://www.campus.rwth-aachen.de/office/system/utils/img/ioLogo/rwth.ico
// @grant        none
// ==/UserScript==

(function() {
    let img = document.querySelector('img[src="system/help/images/magnifizenz.jpg"]').parentElement;
    img.innerHTML = '<img src="https://rwth.fun/magnifizenz.jpg" integrity="sha384-V1kwHliOPoD/2tyAsKnujW7pwfF4C3tFKZiOVUVFqQtI6mWRoLa3VKOepe8bBclD">';
    img.parentElement.nextElementSibling.querySelector('td').innerHTML = 'Univ.-Prof. Dr.-Ing. Ernst Schmachtenberg<br>Rektor der RWTH Aachen';
})();
