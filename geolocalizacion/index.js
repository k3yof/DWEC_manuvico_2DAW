let watchId; // Para almacenar el ID de la geolocalización activa

document.getElementById('startBtn').addEventListener('click', iniciarGeolocalizacion);
document.getElementById('stopBtn').addEventListener('click', detenerGeolocalizacion);
document.getElementById('clearBtn').addEventListener('click', eliminarHistorial);

function iniciarGeolocalizacion() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(actualizarPosicion, mostrarError);
    } else {
        alert("Tu navegador no soporta geolocalización");
    }
}

function detenerGeolocalizacion() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function eliminarHistorial() {
    localStorage.removeItem('historial');
    actualizarHistorial([]);
}

function actualizarPosicion(posicion) {
    const infoDiv = document.getElementById('info');
    const historialUl = document.getElementById('historial');

    const coordenadas = `Latitud: ${posicion.coords.latitude}, Longitud: ${posicion.coords.longitude}`;
    const hora = new Date(posicion.timestamp).toLocaleTimeString();

    // Mostrar en la página
    infoDiv.textContent = `Coordenadas: ${coordenadas}, Hora: ${hora}`;

    // Actualizar historial en localStorage
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push({ coordenadas, hora });
    localStorage.setItem('historial', JSON.stringify(historial));

    // Mostrar historial en la página
    actualizarHistorial(historial);
}

function mostrarError(error) {
    console.error('Error en la geolocalización:', error.message);
}

function actualizarHistorial(historial) {
    const historialUl = document.getElementById('historial');
    historialUl.innerHTML = '';

    historial.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.coordenadas} - ${item.hora}`;
        historialUl.appendChild(li);
    });
}
