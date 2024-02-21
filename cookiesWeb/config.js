'use strict';

function guardarConfiguracion() {
    
    const idiomaSeleccionado= document.getElementById('idioma').value;
    const modoSeleccionado= document.getElementById('modo').value;

    document.cookie= 'idioma=' + idiomaSeleccionado;
    document.cookie= 'modo=' + modoSeleccionado;

    window.location.href= 'index.html';
}