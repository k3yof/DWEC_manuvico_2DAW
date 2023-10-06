
let nombre= prompt("Cual es el nombre inicial de javaScript?", "");


if(nombre == 'ECMAScript')
{
    alert("Muy bien el nombre es : " + nombre);
}else{
    alert("Incorrecto el nombre es ECMAScript,no es : " + nombre);
}

let num = prompt('Dame un numero: ', 0);

if (num > 0) {
  alert( "Mayor que cero" );
} else if (num < 0) {
  alert( "Menor que cero");
} else {
  alert( "Igual que cero" );
}

let age = prompt('Dame un numero: ', 0);
if (age >= 14 && age <= 90)
{
    alert ("Mayor que 14 y menor que 90");
}

let age1 = prompt('Dame un numero: ', 0);
if (age1 <= 14 || age1 >= 90)
{
    alert ("No esta en el rango entre 14 y 90");
}

let age2 = prompt('Dame un numero: ', 0);
if (!(age2 >= 14 && age2 <= 90))
{
    alert ("No esta en el rango");
}