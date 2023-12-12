//MANUEL VICO REVELLES



  // Numero random entre un minimo y un maximo
  function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  //Probar que la funcion randomInteger funciona
  // alert( randomInteger(1, 7) );
  // alert( randomInteger(1, 7) );
  // alert( randomInteger(1, 7) );
  // alert( randomInteger(1, 2) );
  // alert( randomInteger(1, 2) );
  // alert( randomInteger(1, 2) );

  //Devuelve un array de una longitud con valores entre el min y max ordenados de menor a mayor
  function aleatorios(longitud,valorMinimo,valorMaximo)
  {
    //Hacemos las validaciones para que el programa no falle descontroladamente
    //Comprobar que la longitud no sea 0 o sea un numero negativo
    if (longitud===0 || longitud<0) {
        console.error("El array introducido esta vacio o has puesto un numero negativo");
        return undefined;
    }

    //Comprobar que la valorMinimo sea un numero
    if (typeof valorMinimo != 'number')
    {
      console.error ("Introduce un numero");
      return undefined;
    //Comprobar que la valorMaximo sea un numero
    }
    if (typeof valorMaximo != 'number')
    {
      console.error ("Introduce un numero");
      return undefined;

    }
    //Comprobar que el valorMinimo sea mas chico que el valorMaximo
    if (valorMinimo>valorMaximo) {
        console.error("El valor minimo no puede ser mayor que el de valorMaximo");
        return undefined;

    }
    //Para comprobar si el primer parametro es un array o no
    if (Array.isArray(longitud)) 
    {
      //Si es correcto entonces debemos crear un matriz
      return longitud.map(matriz => aleatorios(matriz, valorMinimo, valorMaximo)); 
    }
    else {
    //Comprobar que la longitud sea un numero
    if (typeof longitud != 'number' )
      {
        console.error ("Introduce un numero o un array");
        return undefined;
      }
    let arrayNuevo = [];  //Si es un numero creamos el array
    let cont =0;
    while (cont < longitud)
    {
      //Con la funcion randomInteger vista en clase podemos tener valores entre un numero min y un numero max
      //Vamos metiendo estos valores en el array
      arrayNuevo.push(randomInteger(valorMinimo,valorMaximo));
      //Subimos el cont para que no sea bucle infinito
      cont++;
    }
    //Ordenamos el array con la funcion flecha para que sea de menor a mayor
    arrayNuevo.sort((a, b) => a - b);
    return arrayNuevo;
    }
  }
  //Hacemos pruebas de que todo va correctamente
  let f =[1,2,3,5];
  let a = " a";
  console.log(aleatorios(0,10,20));
  console.log(aleatorios(undefined,10,20));
  console.log(aleatorios(20,-50,200));
  console.log(aleatorios(a,-5,20));
  console.log(aleatorios(f,10,20));


  // Ejercicio 2
  //Vamos a hacer un metodo slice de manera casera
  const tajada=(arr,inicio,fin)=>{

  
    // Comprobamos si los valores introducidos son validos
    //Comprobar que el array pasado no sea longitud 0 o negativa
    if (arr.length===0 || arr.length < 0) 
    {
        console.error("El array introducido esta vacio o es negativo");
        return undefined;
    }

    //Comprobamos que la posicion de fin sea menor que la longitud del array ya que si no estaria fuera
    if(fin>=arr.length)
    {
        console.error("La posición fin introducida se encuentra fuera del array");
        return undefined;

    }

    //Si el valor de inicio es mayor que el de fin,no se puede hacer
    if (inicio>fin) 
    {
        console.error("El valor de inicio no puede ser mayor que el de fin");
        return undefined;

    }

    //Comprobamos que no haya ningun numero negativo
    if (fin<0 || inicio<0) 
    {
        
        console.error("Se ha introducido un valor negativo");
        return undefined;

    }

    //creamos una array para introducir los valores que se van a devolver
    const arrayNuevo=[];
    //Creamos un array nuevo y vamos añadiendo desde inicio hasta fin
    for (let i = inicio; i < fin; i++) 
    {
        arrayNuevo.push(arr[i]);
    }

    return arrayNuevo;

}
let arr = [-1,10,3,5,7,9,22,50,100];
let b="a";
console.log(tajada(arr,5,8));
console.log(tajada(b,5,8));


// Ejercicio 3
//En este ejercicio hay que dibujar un rombo de numeros y letras rodeado de asteriscos
function romboTruncado(LongitudRombo){

  for (let i=0;i<LongitudRombo;i++)
  {
      //Creamos el rombo
      let romboTruncado='';
      //Le asignamos los puntos o espacios que van delante
      for (let puntos=1;puntos<LongitudRombo-i;puntos++)
      {
          romboTruncado +=' ';
      }
      //Pintamos la primera linea de * antes de empezar
      romboTruncado+='*';
      for (let num=1;num<LongitudRombo+(i*2)-1;num++)
      {
          if (i===0)
          {
              for (let num=-2;num<LongitudRombo/2;num++)
              {
                  //Ponemos rombos como longitud
                  romboTruncado+='*';
              }
              //Nos salimos para que no pinte de mas
              break;
          }
          else
          {
            //Convertimos a mayuscula las letras del rombo
              romboTruncado +=num.toString(36).toUpperCase(); 

          }

      }
      romboTruncado+='*';
      console.log(romboTruncado);
  }
  for (let i=LongitudRombo-2;i>=0;i--)
  {
      let romboTruncado='';
      for (let puntos=1;puntos<LongitudRombo-i;puntos++)
      {
          romboTruncado +=' ';
      }
      //Pintamos la primera linea de * antes de empezar
      romboTruncado+='*';
      for (let num=1;num<LongitudRombo+(i*2)-1;num++)
      {
          if (i===0){
            for (let num=-2;num<LongitudRombo/2;num++)
            {
                //Ponemos rombos como longitud
                romboTruncado+='*';
            }
             //Nos salimos para que no pinte de mas
              break;
          }
          else
          {
            //Convertimos a mayuscula las letras del rombo
            romboTruncado +=num.toString(36).toUpperCase(); 
          }

      }
      //ultima fila de asteriscos
      romboTruncado+='*';
      console.log(romboTruncado);
  }

}

romboTruncado(5);