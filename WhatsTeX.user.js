// ==UserScript==
// @name           WhatsTeX
// @namespace      https://paulsuetterlin.de
// @author         Paul Sütterlin
// @description    LaTeX for WhatsApp
// @version        0.1
// @downloadURL    https://github.com/psuet/usefulScripts/raw/master/WhatsTeX.user.js
// @updateURL      https://github.com/psuet/usefulScripts/raw/master/WhatsTeX.user.js
// @include        https://web.whatsapp.com/
// ==/UserScript==

var n=/([\s\S]*?)\$\$([\s\S]*?)\$\$([\s\S]*)/m,q=/\$\$([\s\S]*?)\$\$/m,r=/\$\$([\s\S]*?)\$\$/mg;function v(a){var b=document.createElement("img");b.src="https://www.codecogs.com/gif.latex?"+a;b.title=a;b.alt="$$"+a+"$$";b.style.display="inline";b.addEventListener("dblclick",w,!1);return b}
textContentData=function(a,b,c,d,f){var g=b[c];for(a=a.firstChild;null!==a&&c<b.length;a=a.nextSibling)if(7!=a.nodeType&&8!=a.nodeType){for(var e=d+a.textContent.length;e>g;){3==a.nodeType||4==a.nodeType?(f.push({node:a,offset:g-d}),c++):(f=textContentData(a,b,c,d,f),c=f.length);if(c>=b.length)break;g=b[c]}d=e}return f};
function x(a){try{a.document.body.hasAttribute("_texified")||(a.document.addEventListener("keydown",y,!0),a.document.body.setAttribute("_texified",!0));for(var b=a.document.body.textContent,c=[];null!==(theMatch=r.exec(b));)c.push(theMatch.index),c.push(theMatch.index+theMatch[0].length-1);for(var d=textContentData(a.document.body,c,0,0,[]),b=0;b<d.length;b+=2){var c=void 0,f=d[b].node,g=d[b].offset,e=d[b+1].node,t=d[b+1].offset+1;if(f==e){if(c=f,"TEXTAREA"!=c.parentNode.nodeName)for(;c.nodeValue.match(q);){textNodeSplit=
n.exec(c.nodeValue);c.nodeValue="";var p=document.createTextNode(textNodeSplit[3]);c.parentNode.insertBefore(p,c);var u=v(textNodeSplit[2]);c.parentNode.insertBefore(u,p);c.parentNode.insertBefore(document.createTextNode(textNodeSplit[1]),u);c=p}}else if(f.parentNode==e.parentNode){for(c=f;c!=e&&(1!=c.nodeType||"BR"==c.tagName||"WBR"==c.tagName);c=c.nextSibling);if(c==e){var k=document.createRange();k.setStart(f,g);k.setEnd(e,t);var l=k.toString(),l=l.substring(2,l.length-2);k.detach();var h=document.createRange();
h.setStart(f,g);h.setEndBefore(e);h.deleteContents();h.insertNode(v(l));e.parentNode.insertBefore(document.createTextNode(e.nodeValue.substring(t)),e);e.nodeValue="";h.detach()}}}for(var m=a.document.evaluate("//img[contains(@alt, '$$')]",a.document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null),d=0;d<m.snapshotLength;d++)m.snapshotItem(d).addEventListener("dblclick",w,!1)}catch(B){}b=0;for(m=a.frames.length;b<m;b++)x(a.frames[b])}
function z(a){var b=a.currentTarget.textContent,b=v(b.substring(2,b.length-2));a.currentTarget.parentNode.replaceChild(b,a.currentTarget)}function w(a){a=a.currentTarget;var b=document.createElement("span");b.appendChild(document.createTextNode("$$"+a.title+"$$"));b.addEventListener("dblclick",z,!1);var c=document.createElement("span");c.appendChild(b);a.parentNode.replaceChild(c,a)}function y(){}function A(){x(window.top)}self==top&&(A(),setInterval(A,3E3));
