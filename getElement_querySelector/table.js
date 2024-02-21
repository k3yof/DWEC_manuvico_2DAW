'use strict';

let table = document.getElementById('age-table');  //La tabla con id="age-table"

table.getElementsByTagName('label');  //Todos los elementos label dentro de la tabla
document.querySelectorAll('#age-table label');

table.rows[0].cells[0];  //El primer td en la tabla(con la palabra "Edad")
table.getElementsByTagName('td')[0];
table.querySelector('td');


let form = document.getElementsByName('search')[0];  //El form con el nombre "Search"

document.querySelector('form[name="search"]');


form.getElementsByTagName('input')[0];  //El primer input en este form
form.querySelector('input');


let inputs = form.querySelectorAll('input');  //Busca el último input en el form
inputs[inputs.length-1];  //Cogemos el último