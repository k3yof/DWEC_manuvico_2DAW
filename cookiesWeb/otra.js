'use strict';

const idioma= obtenerCookie('idioma');
const modo= obtenerCookie('modo');

const traducciones = {
    'es': {
        'titulo': 'Otra Página',
        'idioma': 'Idioma',
        'modo': 'Modo'
    },
    'en': {
        'titulo': 'Another Page',
        'idioma': 'Language',
        'modo': 'Mode'
    }
};

document.write('<h1>' + traducciones[idioma].titulo + '</h1>');
document.write('<p>' + traducciones[idioma].idioma + ': ' + idioma + '</p>');
document.write('<p>' + traducciones[idioma].modo + ': ' + modo + '</p>');


function obtenerCookie(nombre){

    const cookies= document.cookie.split(';');

    for(let i= 0; i < cookies.length; i++){

        const cookie= cookies[i].trim();

        if(cookie.indexOf(nombre + '=') === 0){
            
            return cookie.substring(nombre.length + 1);
        }
    }

    return null;
}


if(modo === 'oscuro'){
    activarModoOscuro();
}else{
    activarModoClaro();
}

function activarModoOscuro(){
    document.body.classList.add('modo-oscuro');
}

function activarModoClaro(){
    document.body.classList.remove('modo-oscuro');
}




