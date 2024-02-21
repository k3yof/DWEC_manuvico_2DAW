function crearCalendario(year, month) {
    // Crear la cadena de la tabla
    let tableHTML = "<table><tr><th>Domingo</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th></tr><tr>";

    // Crear el objeto de fecha para el primer día del mes
    const firstDay = new Date(year, month - 1);
    let day = 1;

    // Rellenar celdas vacías hasta el primer día del mes
    for (let i = 0; i < firstDay.getDay(); i++) {
        tableHTML += "<td></td>";
    }

    // Agregar días al calendario
    while (firstDay.getMonth() + 1 === month) {
        // Agregar nueva celda al calendario
        tableHTML += `<td>${day}</td>`;

        // Si es domingo, agregar nueva fila
        if (firstDay.getDay() === 6) {
            tableHTML += "</tr><tr>";
        }

        // Aumentar el día en el objeto de fecha
        firstDay.setDate(firstDay.getDate() + 1);
        day++;
    }

    // Completar la última fila con celdas vacías si es necesario
    while (firstDay.getDay() > 0 && firstDay.getDay() < 7) {
        tableHTML += "<td></td>";
        firstDay.setDate(firstDay.getDate() + 1);
    }

    // Cerrar la tabla
    tableHTML += "</tr></table>";

    // Asignar la cadena de la tabla al innerHTML de un elemento HTML (por ejemplo, un div)
    document.getElementById('calendarioContainer').innerHTML = tableHTML;
}

// Ejemplo de uso para crear el calendario de febrero de 2022
crearCalendario(2024, 1);
