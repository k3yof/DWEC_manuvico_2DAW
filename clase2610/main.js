'use strict';

function ucFirst(str) {
    if (str.length === 0) {
        return str; // Si esta vacia delvovemo la cadena vacia
    }
    
    // Ponemos la primera en mayuscula y le concadenamos el resta de la cadena
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("Cadena 1"));

function checkSpam(str) {

    str = str.toLowerCase();

    if (str.includes('viagra') || str.includes('xxx')) {
        return true;
    } else {
        return false;
    }
}

console.log("Tiene la palabra prohibida: "+checkSpam("Buy xxx"));

function trunca(str,maxlength)
{
    if (str.length <= maxlength) {
        return str; //Si la longitud de la cadena es menor o igual que la longitud del usuario no necesitamos truncar
    } else {
        // Truncamos la cadena para que sea hasta maxlength y le ponemos tres puntos 
        return str.slice(0, maxlength) + '…';
    }
}

console.log(trunca("que lo que pasa manin como ta",5));