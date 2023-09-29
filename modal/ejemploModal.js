// Ventana modal
const modal = document.getElementById("ventanaModal");

// Botón que abre el modal
const boton = document.getElementById("español");
const boton1 = document.getElementById("ingles");
const boton2 = document.getElementById("ruso");


// Hace referencia al elemento <span> que tiene la X que cierra la ventana
const span = document.getElementsByClassName("cerrar")[0];


// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
    modal.style.display = "block";
    modal.style.color = "red";
});
boton1.addEventListener("click",function() {
    modal.style.display = "block";
    document.getElementById("h2").innerHTML="Modal Windows"
    document.getElementById("p").innerHTML="This text is on english"
    modal.style.color = "blue";
});
boton2.addEventListener("click",function() {
    modal.style.display = "block";
    document.getElementById("h2").innerHTML="Модальное окно"
    document.getElementById("p").innerHTML="Привет, как дела"
    modal.style.color = "green";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
    modal.style.display = "none";
});


// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});