// ==UserScript==
// @name         DS16 Check forgotten "-"
// @namespace    https://github.com/psuet/usefulScripts/
// @version      0.1.1
// @description  Avoid invalid answers due to forgotten "-" answers
// @updateURL    https://github.com/psuet/usefulScripts/raw/master/DS16_2.user.js
// @downloadURL  https://github.com/psuet/usefulScripts/raw/master/DS16_2.user.js
// @author       Paul Sütterlin
// @require http://code.jquery.com/jquery-latest.js
// @match        https://www2.math.rwth-aachen.de/DS16/QuerySheet
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    $('label').filter(function() {
        return $(this).html() == " -";
    }).each(function() {
        let labelForTxt = $(this).attr('for');
        $('#' + labelForTxt).addClass("warn");
    });
})();

$("form").submit(function(e) {
    let self = this;
    console.log(self);
    if ($(".warn:checkbox:checked").length > 0) {
        e.preventDefault();
        alert("Nicht alle leeren Antworten wurden abgewählt /n Dies solltest du vor der endgültigen Abgabe beheben.");
        self.submit();
    }
});
