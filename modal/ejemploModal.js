// Ventana modal
const modal = document.getElementById("ventanaModal");
const modal1 = document.getElementById("ventanaModalI");
const modal2= document.getElementById("ventanaModalR");

// Botón que abre el modal
const boton = document.getElementById("español");
const boton1 = document.getElementById("ingles");
const boton2 = document.getElementById("ruso");


// Hace referencia al elemento <span> que tiene la X que cierra la ventana
const span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
    modal.style.display = "block";
});
boton1.addEventListener("click",function() {
    modal1.style.display = "block";
});
boton2.addEventListener("click",function() {
    modal2.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
    modal.style.display = "none";
});
span.addEventListener("click",function() {
    modal1.style.display = "none";
});
span.addEventListener("click",function() {
    modal2.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
window.addEventListener("click",function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
});
window.addEventListener("click",function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
});