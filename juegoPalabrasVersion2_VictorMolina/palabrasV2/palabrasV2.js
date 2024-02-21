'use strict';


let vTiempo;  //Variable para el temporizador
let limiteTiempo;  //Tiempo límite en segundos
let letraActual;  //Letra actual seleccionada
let diccionario;  //Diccionario de palabras

let listaPalabras= [];  //Lista de palabras introducidas
let nombreUsuario= '';  //Nombre del usuario
let puntuacionTotal= 0;  //Puntuación total acumulada
let partidasJugadas= 0;  //Número de partidas jugadas
let puntuacionPalabra= 0;


//Función para cargar el diccionario desde la URL
async function cargarDiccionario() {
    const respuesta= await fetch('https://raw.githubusercontent.com/fran-dawbaza/spanish-dictionary/main/diccionario.json');
    diccionario= await respuesta.json();
}

function startGame() {

    clearTimeout(vTiempo);  //Reiniciamos el tiempo cada vez que comenzamos el juego

    limiteTiempo= 10;

    document.getElementById('vTiempo').innerText= limiteTiempo;

    temporizador();

    
    const abecedario= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  //Mostramos la letra inicial aleatoriamente al comenzar el juego

    const randomIndex= Math.floor(Math.random() * abecedario.length);

    letraActual= abecedario[randomIndex];

    document.getElementById('letraActual').innerText= letraActual.toUpperCase();

    
    listaPalabras = [];  //Limpiamos la lista cada vez que empezamos otra partida
}



function temporizador() {

    vTiempo= setTimeout(() => {
        limiteTiempo--;

        document.getElementById('vTiempo').innerText= limiteTiempo;

        if(limiteTiempo > 0) {
            temporizador();  //Reiniciamos el tiempo
        }else {
            gameOver();
            //actualizarEstadisticas();
        }

    }, 1000);
}



function comprobarPalabra(palabra) {

    const muestraImagenElement= document.getElementById('muestraImagen');
    const img= document.createElement('img');

    if(!diccionario.includes(palabra) || listaPalabras.includes(palabra)) {  //Mostramos la imagen que corresponde segun la palabra introducida
        img.src= '../incorrecto.png';
        muestraImagenElement.innerHTML= '';
        muestraImagenElement.appendChild(img);

        return;  //Salimos si la palabra no sirve o ya estaba metida
    }


    let puntosLetraInicial = 0;
    let puntosLongitud = 0;


    switch(palabra.charAt(0).toUpperCase()) {  //Puntos para las letras del inicio de la palabra
        case 'A':
        case 'C':
        case 'D':
        case 'E':
            puntosLetraInicial= 1;
            break;

        case 'M':
        case 'P':
        case 'R':
        case 'S':
        case 'T':
            puntosLetraInicial= 2;
            break;

        case 'B':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'V':
            puntosLetraInicial= 3;
            break;

        case 'J':
        case 'L':
        case 'N':
        case 'O':
        case 'Z':
            puntosLetraInicial= 4;
            break;

        case 'K':
        case 'Ñ':
        case 'Q':
        case 'U':
        case 'W':
        case 'X':
        case 'Y':
            puntosLetraInicial= 5;
            break;

        default:
            puntosLetraInicial= 0;
    }


    const longitudPalabra= palabra.length;  //Miramos la longitud de las palabras que hemos introducido

    switch(true) {
        case longitudPalabra >= 8 && longitudPalabra <= 12:
            puntosLongitud= 1;
            break;
        case longitudPalabra === 6 || longitudPalabra === 7 || longitudPalabra === 13 || longitudPalabra === 14:
            puntosLongitud= 2;
            break;
        case longitudPalabra === 5 || longitudPalabra === 15:
            puntosLongitud= 3;
            break;
        case longitudPalabra === 4 || longitudPalabra === 16 || longitudPalabra === 17:
            puntosLongitud= 4;
            break;
        default:
            puntosLongitud= 5;
    }


    const letrasEspeciales= ['K', 'Ñ', 'Q', 'W', 'X', 'Y'];

    let puntosLetrasEspeciales= 0;
    
    letrasEspeciales.forEach(letra => {  //Comprobamos si alguna de las primeras letras son las especiales
        if(palabra.toUpperCase().includes(letra)) {
            puntosLetrasEspeciales++;
        }
    });

    
    puntuacionPalabra= puntosLetraInicial + puntosLongitud + puntosLetrasEspeciales;  //Calculamos la puntuación total

    listaPalabras.push(palabra);  //Actualizamos la lista de palabras


    img.src= '../correcto.png';  //Actualizamos la imagen
    muestraImagenElement.innerHTML= '';  
    muestraImagenElement.appendChild(img);
}



function gameOver() {

    clearTimeout(vTiempo);  //Detenemos el temporizador
  
    /* const puntuacion = listaPalabras.length;
    //const listaPalabrasString = listaPalabras.join(', ');

    document.getElementById('interfaz').innerHTML += `<p style="border-top: 4px solid #4caf50; margin: 20px 0;">Tiempo agotado. Puntuación básica: ${puntuacion}</p>
                                                     `;
                                                     
                                                     //<p>Palabras introducidas: ${listaPalabrasString}</p> */

    actualizarEstadisticas(nombreUsuario);
}

  

function init() {

    nombreUsuario= prompt('¡Bienvenido! Por favor, ingresa tu nombre:');
    
    if(!nombreUsuario || nombreUsuario.trim() === '') {
        nombreUsuario= 'Invitado';
    }

    
    const userData= JSON.parse(localStorage.getItem('userData'));  //Cargamos los datos del usuario desde localStorage si existen
    
    if(userData){
        puntuacionTotal= userData.puntuacionTotal || 0;
        partidasJugadas= userData.partidasJugadas || 0;
    }

    cargarDiccionario();

    startGame();  //Comenzar el juego al hacer clic en el botón

    document.getElementById('startButton').disabled = true;  //Desactivar el botón después de iniciar el juego
}



function reiniciarJuego() {

    document.getElementById('nuevaInterfaz').style.display= 'none';

    listaPalabras= [];

    clearTimeout(vTiempo);

    limiteTiempo= 10;

    startGame();
}



/* function actualizarEstadisticas(nombre) {

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData[nombre]) {
        
        userData[nombre] = {
            partidasJugadas: 0,
            puntuacionTotal: 0,
        };
    }

    userData[nombre].partidasJugadas++;
    userData[nombre].puntuacionTotal= userData[nombre].puntuacionTotal + puntuacionPalabra;  //puntuacionPalabra se calcula en la función comprobarPalabra

    const puntuacionPromedio = userData[nombre].puntuacionTotal / userData[nombre].partidasJugadas;  //Calcular puntuación promedio

    localStorage.setItem('userData', JSON.stringify(userData));

    const nuevaInterfaz= document.getElementById('nuevaInterfaz');
    nuevaInterfaz.style.display= 'block';

    document.getElementById('nombreUsuario').innerText = nombre;
    document.getElementById('puntuacionObtenida').innerText= puntuacionPalabra.toString();
    document.getElementById('puntuacionPromedio').innerText= puntuacionPromedio.toFixed(2);
    document.getElementById('numPartidas').innerText= partidasJugadas.toString();
} */

function actualizarEstadisticas(nombre) {
    if(!localStorage.getItem('userData')) {
        
        localStorage.setItem('userData', JSON.stringify({}));
    }

    const userData= JSON.parse(localStorage.getItem('userData'));

    if(!userData[nombre]) {
        
        userData[nombre]= {
            partidasJugadas: 0,
            puntuacionTotal: 0,
        };
    }

    userData[nombre].partidasJugadas++;
    userData[nombre].puntuacionTotal= userData[nombre].puntuacionTotal + puntuacionPalabra;

    const puntuacionPromedio= userData[nombre].puntuacionTotal / userData[nombre].partidasJugadas;

    localStorage.setItem('userData', JSON.stringify(userData));

    const nuevaInterfaz= document.getElementById('nuevaInterfaz');
    nuevaInterfaz.style.display= 'block';

    document.getElementById('nombreUsuario').innerText= nombre;
    document.getElementById('puntuacionObtenida').innerText= puntuacionPalabra.toString();
    document.getElementById('puntuacionPromedio').innerText= puntuacionPromedio.toFixed(2);
    document.getElementById('numPartidas').innerText= userData[nombre].partidasJugadas.toString();
}



document.getElementById('startButton').addEventListener('click', init);
document.getElementById('reiniciarJuego').addEventListener('click', reiniciarJuego);

document.getElementById('palabraInput').addEventListener('keypress', function (e) {
    if(e.key === 'Enter') {
        const palabra= e.target.value.toLowerCase().trim();
        
        e.target.value= '';  //Limpiar el input después de ingresar la palabra

        comprobarPalabra(palabra);  //Verificar si la palabra es válida
    }
});



