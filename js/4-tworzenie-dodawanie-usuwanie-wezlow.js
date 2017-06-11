'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];
console.log(document.getElementById('parFirst').children);
console.log(istniejacyWezel);

var newElement = document.createElement('p');

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf');

console.log(newElementContent);

newElement.appendChild(newElementContent);

console.log(newElement);

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);
