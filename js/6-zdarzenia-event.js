'use strict';

//var secondLink = document.getElementsByTagName('a')[1];
//
//console.log(secondLink);
//
//
//function alarm(e) {
//    e.preventDefault();
//    console.log('kliknięto kolejny link');
////    alert('kliknięto kolejny link');
//    
//    console.log(e.type);
//    console.log(e);
//}
//
//secondLink.onclick = alarm; // wywołujemy finkcję alarm na drugim linku po kliknięciu
//
//var thirdLink = document.getElementsByTagName('a')[2];
//
//thirdLink.addEventListener('click',alarm); // wywołujemy finkcję alarm na 3 linku po kliknięciu za pomocą event Listenera
//
//thirdLink.removeEventListener('click', alarm); // usuwamy Event Listenera 
//
//
//var mainHeader = document.getElementById('main-header'); //pobieramy header
//
//function resize(e) {
//    if (e.type == 'mouseover'){ mainHeader.style.fontSize = '70px';}
//    else{
//        mainHeader.style.fontSize = 'inherit';
//    }
//}
//
//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;


function klikHeader(){
    console.log('kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;


function klikH1(e) {
    console.log('kliknąłęś w H1');
    e.stopPropagation();
}

document.getElementsByTagName('h1')[0].onclick = klikH1;