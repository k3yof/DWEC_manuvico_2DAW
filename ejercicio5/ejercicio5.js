const boton = document.getElementById("español");
const boton1 = document.getElementById("ingles");
const boton2 = document.getElementById("ruso");

let mensaje = document.getElementById("frase");

boton.addEventListener("click",function() {
    document.getElementById("frase").innerHTML = "Hola como estas";
    document.getElementById("frase").style.color = "red";
});
boton1.addEventListener("click",function() {
    document.getElementById("frase").innerHTML = "hi, how are u";
    mensaje.style.color = "blue";
});
boton2.addEventListener("click",function() {
    mensaje.innerHTML = "Привет, как дела";
    mensaje.style.color = "purple";
});