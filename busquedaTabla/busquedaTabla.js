'use strict';

const tabla= document.getElementById('gridDatos');

const buscar= document.createElement('input');

buscar.setAttribute('placeholder', 'Introduce tu búsqueda');

buscar.setAttribute('type', 'text');

tabla.parentElement.prepend(buscar);

buscar.addEventListener('input', evento => {
    const textoBusqueda= evento.target.value.toLowerCase();

    const filas= tabla.querySelectorAll('.fila');

    filas.forEach(fila => {
        const celdas= fila.querySelectorAll('td');

        let mostrarFila= false;

        celdas.forEach(celda => {
            if(celda.textContent.toLowerCase().includes(textoBusqueda)){
                mostrarFila= true;
            }
        });

        if(mostrarFila){
            fila.style.display= '';
        }else{
            fila.style.display= 'none';
        }
    });
});
