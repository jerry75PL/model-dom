'use strict';
var pierwszyDiv = document.getElementById('parFirst');
//console.log (pierwszyDiv);
//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);
//console.log(pierwszyDiv.childNodes);
//console.log(pierwszyDiv.childNodes[3]);
//console.log(pierwszyDiv.children);
console.log(pierwszyDiv.lastChild);
console.log(pierwszyDiv.firstChild);


var pierwszyChild = pierwszyDiv.childNodes[4];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);
console.log(pierwszyChild.nextSibling.nodeType);
console.log(pierwszyChild.previousSibling);
console.log(pierwszyChild.nextSibling.nextSibling);


