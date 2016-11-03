// ==UserScript==
// @name         Campus Office Enhancer
// @namespace    https://github.com/psuet/userscripts/
// @version      0.22
// @description  Adds Option "Meine Pflichtmodule" instead of the Campus Office Help
// @description  Removes entries from sidebar for deprecated functions
// @updateURL    https://raw.githubusercontent.com/psuet/userscripts/master/CampusOffice.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/userscripts/master/CampusOffice.user.js
// @author       Paul Sütterlin
// @match        https://www.campus.rwth-aachen.de/office/*
// @icon         https://www.campus.rwth-aachen.de/office/system/utils/img/ioLogo/rwth.ico
// @grant        none
// ==/UserScript==

(function() {
    //DONT FORGET TO SET URL TO MODULE LIST
    var urltoModule = 'https://www.campus.rwth-aachen.de/office/views/campus/eventlist.asp?group=Bachelor+of+Science+%28B%2ESc%2E%29&field=Informatik+%28B%2ESc%2E%29&mode=field&gguid=0x1C30F2F3AFE6BB4DBB426B3EE7B03C33';
    var linkstohelp = document.evaluate("//a[contains(@href, 'system/help/frameset.asp')]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i=0; i < linkstohelp.snapshotLength; i++)
    {
        var linktohelp = linkstohelp.snapshotItem(i);
        console.log(linktohelp);
        linktohelp.innerHTML = 'Meine Plichtmodule';
        linktohelp.href = urltoModule;
        linktohelp.target = '_blank';
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
