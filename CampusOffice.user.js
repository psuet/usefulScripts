// ==UserScript==
// @name         Campus Office Enhancer
// @namespace    https://github.com/psuet/usefulScripts/
// @version      1.0.0
// @description  Adds Option "Informatik" instead of the Campus Office Help
// @description  Removes entries from sidebar for deprecated functions
// @updateURL    https://raw.githubusercontent.com/psuet/usefulScripts/master/CampusOffice.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/usefulScripts/master/CampusOffice.user.js
// @author       Paul Sütterlin, Benjamin Stutte, Julius Rickert
// @match        https://www.campus.rwth-aachen.de/office/*
// @icon         https://www.campus.rwth-aachen.de/office/system/utils/img/ioLogo/rwth.ico
// @grant        none
// ==/UserScript==

(function() {
    //DONT FORGET TO SET URL TO MODULE LIST
    // Current: WS17/18 Informatik
    var urltoModule = 'https://www.campus.rwth-aachen.de/office/views/campus/eventlist.asp?group=Bachelor+of+Science+%28B%2ESc%2E%29&field=Informatik+%28B%2ESc%2E%29&gguid=0x8901F5DB775EE74BBB1E7C8DC01BAF86&mode=field';
    var linkstohelp = document.evaluate("//a[contains(@href, 'system/help/frameset.asp')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i=0; i < linkstohelp.snapshotLength; i++)
    {
        var linktohelp = linkstohelp.snapshotItem(i);
        console.log(linktohelp);
        linktohelp.innerHTML = 'Informatik';
        linktohelp.style.color = 'red';
        linktohelp.style['line-height'] = '6em';
        linktohelp.style['font-size'] = '2em';
        linktohelp.style['text-transform'] = 'uppercase';
        linktohelp.href = urltoModule;
        linktohelp.target = '_self';
    }

    removeFromSidebar("E-Mail Zugänge",2);
    removeFromSidebar("Adressen",2);
    removeFromSidebar("Funktion eingestellt",3);
})();

function removeFromSidebar(str,parents){
    var links = document.evaluate('//text()[contains(., \"' + str + '\")]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var j=0; j < links.snapshotLength; j++)
    {
        var link  = links.snapshotItem(j);
        console.log("Element:");
        console.log(link);

        for(var a=0; a<parents; a++)
        {
            link = link.parentNode;
            console.log(link);
        }
        console.log(link.remove());
    }
}
