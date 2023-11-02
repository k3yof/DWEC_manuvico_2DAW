'use strict';


function ordenarNum(num)
{
    const n = num.length;
    let cambiar;

    do {
    cambiar = false;
        for (let i = 0; i < n - 1; i++) {
            //Si el numero 1 es mayor que el 1 +1 hay que intercambiarlos para que se queden en orden
            //Orden es de menor a mayor

            if (num[i] > num[i + 1]) {
            // Intercambiar los elementos si están en el orden incorrecto
            //Para no perder el valor vamos a guardarlo en una variable temporal
            //Const o let,da igual porque la vamos creando en cada iteraccion
            const temp = num[i];
            num[i] = num[i + 1];
            num[i + 1] = temp;
            cambiar = true;
            }
        }
    } while (cambiar);

    return num;
}
const numeros = [4, 2, 7, 1, 9, 3,4,5,6];
const numerosOrdenados = ordenarNum(numeros);
console.log(numerosOrdenados);

