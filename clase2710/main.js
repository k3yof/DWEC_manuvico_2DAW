'use strict';

let styles = ["Jazz","Blues"];
console.log(styles.length);
console.log(styles.toString());
styles.push("Rock-n-Roll");
console.log(styles.toString());
console.log(styles.length);
//Tiene que ser la mitad
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
console.log(styles.toString());
styles.unshift("Rap","Reggae");
console.log(styles.toString());


function sumInput()
{
    let numbers = [];
    let value =0;
    do{
        value = prompt("Un numero porfa");
        numbers.push(+value);

    }while(value != null && value != "" && isFinite(value));
    numbers.pop();
    let sumaNumeros =0;
    for (let i of numbers)
    {
        sumaNumeros = sumaNumeros + i;
    }

    return sumaNumeros;
}

sumInput();
