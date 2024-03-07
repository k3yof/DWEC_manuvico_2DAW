document.getElementById('buscar').addEventListener('click', function () {
    var texto = document.getElementById('texto').value.toLowerCase();
    var filas = document.getElementById('tablaDatos').getElementsByTagName('tr');

    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName('td');
        var mostrarFila = false;

        for (var j = 0; j < celdas.length; j++) {
            if (celdas[j].innerHTML.toLowerCase().indexOf(texto) > -1) {
                mostrarFila = true;
                break;
            }
        }

        filas[i].style.display = mostrarFila ? '' : 'none';
    }
});
