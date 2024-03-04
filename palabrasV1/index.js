let letra;
let temporizador;
let tiempoLimite = 5; // Tiempo límite en segundos
let listaPalabras = [];

function comenzarJuego() 
{
  reiniciarJuego();
  generarLetraAleatoria();
  mostrarLetra();
  iniciarTemporizador();
  document.getElementById("entradaPalabra").classList.remove("escondido");
}

function reiniciarJuego() 
{
  clearInterval(temporizador);
  listaPalabras = [];
  document.getElementById("listaPalabras").innerHTML = '';
}

function generarLetraAleatoria() 
{
  const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const indiceAleatorio = Math.floor(Math.random() * abecedario.length);
  letra = abecedario.charAt(indiceAleatorio);
}

function mostrarLetra() 
{
  document.getElementById("letraMostrada").textContent = "Letra: " + letra;
}

function iniciarTemporizador() 
{
  let tiempoRestante = tiempoLimite;
  actualizarVisualizacionTemporizador(tiempoRestante);
  
  temporizador = setInterval(function() {
    tiempoRestante--;
    actualizarVisualizacionTemporizador(tiempoRestante);
    
    if (tiempoRestante === -1) {
      clearInterval(temporizador);
      finalizarJuego();
    }
  }, 1000);
}

function actualizarVisualizacionTemporizador(tiempoRestante) 
{
  document.getElementById("temporizador").textContent = "Tiempo restante: " + tiempoRestante + " segundos";
}

function finalizarJuego() 
{
  alert("Tiempo agotado. Puntuación: " + listaPalabras.length + ". Palabras ingresadas: " + listaPalabras.join(', '));
  document.getElementById("temporizador").textContent = "Tiempo restante: " + "0" + " segundos";
}

document.getElementById("entradaPalabra").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    verificarPalabra();
  }
});

function verificarPalabra() 
{
  const entradaPalabra = document.getElementById("entradaPalabra").value.toUpperCase();

  if (entradaPalabra.startsWith(letra)) 
  {
    clearInterval(temporizador);
    iniciarTemporizador();
    listaPalabras.push(entradaPalabra);
    document.getElementById("listaPalabras").innerHTML += "<li>" + entradaPalabra + "</li>";
    document.getElementById("entradaPalabra").value = '';
  } else 
  {
    document.getElementById("entradaPalabra").value = '';
  }
}
