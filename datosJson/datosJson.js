document.addEventListener('DOMContentLoaded', function () {

    fetch('datosJson.json')
        .then(response => response.json())

        .then(datos => {
        
            const usuarios= datos.usuarios;  //Accedemos a la lista de usuarios
    
            const tabla= document.getElementById("tablaUsuario");  //Recorremos la lista y los añadimos a la tabla
    
            usuarios.forEach(usuario => {
                const filaUsuario= tabla.insertRow();
                const celdaNombre= filaUsuario.insertCell(0);
                const celdaApellidos= filaUsuario.insertCell(1);
        
                celdaNombre.innerHTML= usuario.nombre;
                celdaApellidos.innerHTML= usuario.apellidos;
            });
        })
        .catch(error => console.error('Error al cargar:', error));
  });
  