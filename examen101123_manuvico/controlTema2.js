//MANUEL VICO REVELLES

'use strict';

function validarDimensiones(altura,ancho) 
{
  //Compruebo que todo este bien metido y no hay nada que no este definido,null o no seaa un numero
    if ((altura !== null && altura !== undefined && !isNaN(altura) && altura > 0) && (ancho !== null && ancho !== undefined && !isNaN(ancho) && ancho > 0))
        return true;  
    else 
        return false; 
}

function marco(altura,ancho)
{
    if (validarDimensiones(altura, ancho)) 
    {
        let figura = new Array(altura);

        // Creamos cada fila para ahora rellenar
        for (let i = 0; i < altura; i++) 
        {
            figura[i] = new Array(ancho);
        }

        //Poner 1 en la primera fila
        for (let i = 0; i < ancho; i++) 
        {
            figura[0][i] = 1;
        }

        // Entre la primera y la ultima
        for (let i = 1; i < altura - 1; i++) 
        {
          //Pongo el primer 1
            figura[i][0] = 1;   
              
            for (let j = 1; j < ancho - 1; j++) 
            {
                figura[i][j] = 0;
            }
            //Pongo el ultimo 1
            figura[i][ancho - 1] = 1;   
        }

        //Poner 1 en la ultima fila
        for (let i = 0; i < ancho; i++) 
        {
            figura[altura-1][i] = 1;
        }
    return figura;
    } 
    else 
    {
        alert("Prueba con otras dimensiones");
    }
}

function encuentraIndices(valorBuscar,valorBuscado)
{
    let indices = new Array();

    if (validarArray(valorBuscar))
    {
        for (let i = 0; i < valorBuscar.length; i++)
        {
            if (valorBuscado === valorBuscar[i])
                indices.push(i);
        }
    return indices;
    }
    else
    {
        alert("El primer parámetro debe ser un array válido")
    }
}

function validarArray(arr)
{
  //Function para saber si es un array o no 
    if (Array.isArray(arr))
        return true;
    else
        return false;
}





    function miSplice(arr, posicion, numeroDeElementosAEliminar) 
    {
        // Validar la posición desde la que queremos empezar a cortar
        if ((posicion >= 0 && posicion < arr.length) && validarArray(arr)) 
        {
            //copiamos los valores hacia la izquierda tantos indices como elementos "eliminamos"
            for (let i = posicion + numeroDeElementosAEliminar; i < arr.length; i++) 
            {
                arr[i - numeroDeElementosAEliminar] = arr[i];
            }    
            // Cortamos el array para eliminar los elementos repetidos del final
            arr.length = arr.length - numeroDeElementosAEliminar;
            
            // si el usuario quiere añadir elementos
            if (arguments.length > 3) 
            {
                for (let i = 3; i < arguments.length; i++) 
                {
                    arr.push(arguments[i]);
                }
            }
        } else 
        {
            alert("Posición índice no válida");
            if(validarArray(arr))
                alert("Array no válido")
        }
    }











