function ordenarTabla(columna) {
  var tabla = document.getElementById("miTabla");
  var filas = Array.from(tabla.rows).slice(1); // Ignorar la fila de encabezado
  filas.sort(function(a, b) {
    var textoA = a.cells[columna].textContent;
    var textoB = b.cells[columna].textContent;
    return textoA.localeCompare(textoB);
  });
  
  // Limpiar la tabla
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  // Agregar las filas ordenadas a la tabla
  filas.forEach(function(fila) {
    tabla.appendChild(fila);
  });
}

// Llamar a la función de ordenar cuando sea necesario, por ejemplo, al hacer clic en un encabezado de columna
document.querySelectorAll("#miTabla th").forEach(function(th, index) {
  th.addEventListener("click", function() {
    ordenarTabla(index);
  });
});