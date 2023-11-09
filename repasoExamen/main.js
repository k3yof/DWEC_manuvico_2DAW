
// Mezclar un array

  // function shuffle(arr) {
  //     for (let i = 0; i < arr.length; i++) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       // Cambiamos las posiciones del arr
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //     }
  // }

  // const arr = [1, 2, 3,4,5,-1,-6];
  // console.log(arr);
  // shuffle(arr);
  // console.log(arr);
  // shuffle(arr);
  // console.log(arr);
  // shuffle(arr);
  // console.log(arr);
  // shuffle(arr);
  // console.log(arr);

// Valores que no esten repetidos

  // function unique(arr) {
  //   let arrFinal = [];

  //   for (let str of arr) {
  //     if (!arrFinal.includes(str)) {
  //       arrFinal.push(str);
  //     }
  //   }

  //   return arrFinal;
  // }

  // let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  // unique(strings); 
  // console.log(strings);
  // console.log("Soy manuel y me huele la boca a tocino rancio");

//Detras de cada guion pone mayuscula

  // function camelize(str)
  // {
  //     let strPalabras = str.split('-');
  //     let frase = strPalabras[0].toLowerCase();
  //     // background-color
  //     for ( let i =1 ;i<strPalabras.length;i++)
  //     {
  //         frase += strPalabras[i].charAt(0).toUpperCase() + strPalabras[i].slice(1);
  //     }
  //     console.log(frase);
  //     return frase;
  // }
  // camelize("el-victor-esta-bueno");

  
//Coge los numeros que hay entre el min y el max incluyendolos
  // function filterRange(arr,min,max)
  // {
  //     let dev = arr.filter(element => element >= min && element <= max);
  //     return dev;
  // }
  // const originalArray = [1, 5, 8, 10, 15, 20];
  // const resultArray = filterRange(originalArray, 5, 15);


//Ordenar array de forma decreciente
  // const decreciente = (a, b) => b - a;
  // let arr = [5, 2, 1, -10, 8];

  // arr.sort(decreciente);

  // console.log(arr.toString());

//Ordena palabras
  // function copySorted(arr) {
  //   return arr.slice().sort();
  // }

  // let arrayNuevo = ["Arbol", "Virgen", "Estrella"];

  // let sorted = copySorted(arrayNuevo);

  // console.log( sorted );
  // console.log( arrayNuevo );

//Lee numeros hasta que sea null y mientras sea un numero
  // function readNumber() {
  //   let numero;

  //   do {
  //       numero= prompt("Introduce un numero: ")
  //   } while (numero!== null && !isFinite(numero));

  //   return numero=== null ? null : +numero;
  // }

//Numero random entre un minimo y un maximo
  // function randomInteger(min, max) {
  //   // now rand is from  (min-0.5) to (max+0.5)
  //   let rand = min - 0.5 + Math.random() * (max - min + 1);
  //   return Math.round(rand);
  // }
  // alert( randomInteger(1, 3) );

//mira a ver si tiene una palabra que no debe
  // function checkSpam(str) {

  //   str = str.toLowerCase();

  //   if (str.includes('viagra') || str.includes('xxx')) {
  //       return true;
  //   } else {
  //       return false;
  //   }
  // }
  // console.log("Tiene la palabra prohibida: "+checkSpam("Buy xxx"));


//Trunca el numero de caracteres que le dejemos por parametro
  // function trunca(str,maxlength)
  // {
  //     if (str.length <= maxlength) {
  //         return str; //Si la longitud de la cadena es menor o igual que la longitud del usuario no necesitamos truncar
  //     } else {
  //         // Truncamos la cadena para que sea hasta maxlength y le ponemos tres puntos 
  //         return str.slice(0, maxlength) + '…';
  //     }
  // }

  // console.log(trunca("que lo que pasa manin como ta",5));

//Un ordenar de menor a mayor
  // function ordenarNum(num)
  // {
  //     const n = num.length;
  //     let cambiar;

  //     do {
  //     cambiar = false;
  //         for (let i = 0; i < n - 1; i++) {
  //             //Si el numero 1 es mayor que el 1 +1 hay que intercambiarlos para que se queden en orden
  //             //Orden es de menor a mayor

  //             if (num[i] > num[i + 1]) {
  //             // Intercambiar los elementos si están en el orden incorrecto
  //             //Para no perder el valor vamos a guardarlo en una variable temporal
  //             //Const o let,da igual porque la vamos creando en cada iteraccion
  //             const temp = num[i];
  //             num[i] = num[i + 1];
  //             num[i + 1] = temp;
  //             cambiar = true;
  //             }
  //         }
  //     } while (cambiar);

  //     return num;
  // }
  // const numeros = [4, 2, 7, 1, 9, 3,4,5,6];
  // const numerosOrdenados = ordenarNum(numeros);
  // console.log(numerosOrdenados);