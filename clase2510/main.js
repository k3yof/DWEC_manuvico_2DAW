'use strict';

function readNumber() {
    let numero;

    do {
        numero= prompt("Introduce un numero: ")
    } while (numero!== null && !isFinite(numero));

    return numero=== null ? null : +numero;
}

alert(readNumber()); 

function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 3) );

function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
alert( randomInteger(1, 3) );