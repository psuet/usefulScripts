
// ==UserScript==
// @name         RWTH - Campus Office Enhancer
// @namespace    https://github.com/psuet/userscripts/
// @version      0.1
// @description  Adds Option "Meine Pflichtmodule" instead of the Campus Office Help
// @updateURL    https://raw.githubusercontent.com/psuet/userscripts/master/RWTH_CampusOffice_Userscript.js
// @downloadURL  https://raw.githubusercontent.com/psuet/userscripts/master/RWTH_CampusOffice_Userscript.js
// @author       Paul Sütterlin
// @match        https://www.campus.rwth-aachen.de/office/*
// @grant        none
// ==/UserScript==

(function() {

var links = document.evaluate("//a[contains(@href, 'system/help/frameset.asp')]", document, null,
XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i=0; i < links.snapshotLength; i++)
{
  var thisLink = links.snapshotItem(i);
  console.log(thisLink);
  thisLink.innerHTML = 'Mein Plichtmodule';
  thisLink.href = 'https://www.campus.rwth-aachen.de/office/views/campus/eventlist.asp?group=Bachelor+of+Science+%28B%2ESc%2E%29&field=Informatik+%28B%2ESc%2E%29&mode=field&gguid=0x1C30F2F3AFE6BB4DBB426B3EE7B03C33';
  thisLink.target = '_blank';
}
})();
