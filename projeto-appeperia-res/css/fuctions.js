const BtMobile = document.getElementsByid('btMenu');


function showMenu (){
const nav = document.getElementsByid ('nav');

nav.classList.add('active');



}

BtMobile.addEventLister('click', showMenu);