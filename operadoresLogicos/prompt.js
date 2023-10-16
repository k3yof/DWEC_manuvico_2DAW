'use strict';

const user = prompt("Quién eres?", "");
const contrasena = prompt("Contraseña?", "");

const userValido = "Admin";
const contrasenaValida = "ElMejor";
const cancelar = "Cancelar";

if(user === userValido){

    if (contrasena === contrasenaValida){
        alert("Bienvenido!");
    } else if (contrasena === cancelar){
        alert("Cancelado");
    } else {
        alert("Contraseña incorrecta");
    }

}else if(user === cancelar){
    alert("Cancelado");
}else{
    alert("No sé quién eres");
}