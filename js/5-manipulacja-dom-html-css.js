'use strict';
var mainHeader = document.getElementById('main-header');

console.log(mainHeader);

mainHeader.innerHTML = 'Treść Nagłówka';


var link = document.getElementsByClassName('link')[0];

console.log(link);

link.href = 'http:onet.pl';

link.className = "nowa-klasa";

mainHeader.style.color = "#11aa22";

link.text = 'ddd'
