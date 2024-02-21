'use strict';

/* let temp; //Variable donde almacenamos el temporizador

function empiezaReloj() {
    temp= setInterval(actualizaReloj, 1000); // Actualizamos los segundos
}

function pararReloj() {
    clearInterval(temp);  //Paramos el temporizador

    temp= null;
}

function actualizaReloj() {
    let ahora= new Date();

    let horas= ahora.getHours();
    let mins= ahora.getMinutes();
    let seg= ahora.getSeconds();
    
    horas= horas < 10 ? '0' + horas : horas;  //Agregamos un cero delante si fuese necesario
    mins= mins < 10 ? '0' + mins : mins;
    seg= seg < 10 ? '0' + seg : seg;
    
    document.querySelector('.hour').innerHTML= horas;  //Actualizamos los elementos HTML con la hora actual
    document.querySelector('.min').innerHTML= mins;
    document.querySelector('.sec').innerHTML= seg;
} */

let id;
let enCurso= false;

function cambioReloj() {
    
    if(enCurso){
        
        clearInterval(id);
    
    }else{
        
        id= setInterval(actualizarReloj, 1000);
    
    }

    enCurso= !enCurso;
}

function actualizarReloj() {
    const relojElem= document.getElementById('reloj');

    const ahora= new Date();

    const horas= ahora.getHours().toString().padStart(2, '0');
    const minutos= ahora.getMinutes().toString().padStart(2, '0');
    const segundos= ahora.getSeconds().toString().padStart(2, '0');

    relojElem.textContent= `${horas}:${minutos}:${segundos}`;
}




