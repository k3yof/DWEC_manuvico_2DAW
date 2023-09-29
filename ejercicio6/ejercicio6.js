const boton = document.getElementById("español");
const boton1 = document.getElementById("ingles");
const boton2 = document.getElementById("ruso");

let mensaje = document.getElementById("frase");

boton.addEventListener("click",function() {
    alert(document.getElementById("frase").innerHTML = "Hola como estas");
    // alert(document.getElementById("frase").style.color = "red");
});
boton1.addEventListener("click",function() {
    alert(document.getElementById("frase").innerHTML = "hi, how are u");
    // alert(mensaje.style.color = "blue");
});
boton2.addEventListener("click",function() {
    alert(mensaje.innerHTML = "Привет, как дела");
    // alert(mensaje.style.color = "purple");
});