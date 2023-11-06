


function camelize(str)
{
    let strPalabras = str.split('-');
    let frase = strPalabras[0].toLowerCase();
    // background-color
    for ( let i =1 ;i<strPalabras.length;i++)
    {
        frase += strPalabras[i].charAt(0).toUpperCase() + strPalabras[i].slice(1);
    }
    console.log(frase);
    return frase;
}
camelize("el-victor-esta-bueno");


function filterRange(arr,min,max)
{
    let dev = arr.filter(element => element >= min && element <= max);
    return dev;

}
const originalArray = [1, 5, 8, 10, 15, 20];
const resultArray = filterRange(originalArray, 5, 15);

console.log(resultArray);
console.log(originalArray);

function filterRangeInPlace(arr,min,max)
{
    
    //0
    //min =2;
    //max = 5;
    //str.length = 7;
    //console.log(arr.toString());
    let elem;
    let arrayNuevo = [];
    while ( elem = arr.pop())
    {
        if (elem >= min && elem <= max)
        {
            arrayNuevo.push(elem);
        }
        
    }
    //bucle para copiar
    //console.log(arr.toString());
    //console.log(arrayNuevo.toString());
    while ( elem = arrayNuevo.pop())
    {
            arr.push(elem);
    }
    //console.log(arr.toString());
    return arr;
    
}
const originaArray = [1, 5, 8, 10, 15, 20];
const resulArray = filterRangeInPlace(originaArray, 5, 15);

console.log(resulArray.toString());


const decreciente = (a, b) => b - a;
let arr = [5, 2, 1, -10, 8];

arr.sort(decreciente);

console.log(arr.toString());


function copySorted(arr) {
    return arr.slice().sort();
}


let arrayNuevo = ["Arbol", "Virgen", "Estrella"];

let sorted = copySorted(arrayNuevo);

console.log( sorted );
console.log( arrayNuevo );