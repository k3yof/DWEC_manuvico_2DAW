'use strict';

const ulElem= document.getElementById('ul');  //Cogemos el elemento ul

const li2= document.createElement('li');  //Creamos los elementos li
const li3= document.createElement('li');

li2.textContent= '2';
li3.textContent= '3';

const liElem1= document.getElementById('one');  //Cogemos los valores de los li que queremos separar
const liElem4= document.getElementById('two');

ulElem.insertBefore(li2, liElem4);  //Metemos los nuevos li
ulElem.insertBefore(li3, liElem4);



