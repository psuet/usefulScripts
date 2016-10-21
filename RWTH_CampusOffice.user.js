
// ==UserScript==
// @name         RWTH - Campus Office Enhancer
// @namespace    https://github.com/psuet/userscripts/
// @version      0.11
// @description  Adds Option "Meine Pflichtmodule" instead of the Campus Office Help
// @description  You have to be a student at RWTH Aachen University to be able to use this userscript
// @updateURL    https://raw.githubusercontent.com/psuet/userscripts/master/RWTH_CampusOffice.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/userscripts/master/RWTH_CampusOffice.user.js
// @author       Paul Sütterlin
// @match        https://www.campus.rwth-aachen.de/office/*
// @icon         https://www.campus.rwth-aachen.de/office/system/utils/img/ioLogo/rwth.ico
// @grant        none
// ==/UserScript==

(function() {

var links = document.evaluate("//a[contains(@href, 'system/help/frameset.asp')]", document, null,
XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i=0; i < links.snapshotLength; i++)
{
  var thisLink = links.snapshotItem(i);
  console.log(thisLink);
  thisLink.innerHTML = 'Meine Plichtmodule';
  thisLink.href = 'https://www.campus.rwth-aachen.de/office/views/campus/eventlist.asp?group=Bachelor+of+Science+%28B%2ESc%2E%29&field=Informatik+%28B%2ESc%2E%29&mode=field&gguid=0x1C30F2F3AFE6BB4DBB426B3EE7B03C33';
  thisLink.target = '_blank';
}
})();
