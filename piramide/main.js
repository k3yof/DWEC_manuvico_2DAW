
const ASTERISCO = '*';
function pintaCuadrado(tamaño,caracter = ASTERISCO)
{
    let fila = '';
    for(let i=0;i<tamaño;i++)
    {
        fila+=caracter;
    }
    let figura='';
    for(let i=0;i<tamaño;i++)
    {
        figura += fila + '\n';
    }
    console.log(figura);

}
pintaCuadrado(4);

function pintaEscalera(tamaño,caracter = ASTERISCO)
{
  

    let fila = '';
    for(let i=0;i<tamaño;i++)
    {
        fila+=caracter;
        console.log(fila);
    }
    
}
pintaEscalera(4)
//    +
//   ++
//  +++
// ++++
function pintaEscaleraReves(tamaño,caracter = ASTERISCO)
{
  

    let triangulo='', fila='',espacio=' ';


    for (let i = 0; i < tamaño; i++) {

        //Hacer izquierda: los espacios
        let izq='';

        for (let j = 1; j < tamaño-i; j++) {

            izq=izq + espacio;
        }

        fila= fila +caracter;

        //Hacer derecha
        triangulo=triangulo + izq + fila + '\n';
    }
    console.log(triangulo);
}
pintaEscaleraReves(4);
function pintaTrianguloEntero(tamaño,caracter = ASTERISCO)
{
    let triangulo='';

    for(let i = 0; i < tamaño; i++){

        //Hacer izquierda: los espacios
        let izq='';

        for(let j=1; j < tamaño-i; j++){

            izq= izq + ' ';
        }

        //Hacer centro: los asteriscos
        let centro= '';

        for(let k=0; k < 2 * i+1; k++){ //Cogemos el indice de cada fila y lo multiplicamos por dos
            centro= centro + caracter;
        }

        //Hacer derecha: los espacios
        let der= '';

        for(let l= 0; l < tamaño-i; l++){ //Hacemos lo mismo que para izquierda solo que inicializamos en 0
            der= der + ' ';
        }


        triangulo=triangulo + izq + centro + der + '\n';
    }

    console.log(triangulo);
}
pintaTrianguloEntero(4);

function pintaRombo(tamaño) {
    //Hay que asegurarse que sea impar y para ello 
    if (tamaño % 2 === 0) {
        tamaño++; // Asegurarse de que el tamaño sea impar
    }

    let rombo = '';

    for (let i = 1; i <= tamaño; i += 2) {
        let espacios = '';
        let asteriscos = '';
        for (let j = 0; j < (tamaño - i) / 2; j++) {
            espacios += ' ';
        }
        for (let j = 0; j < i; j++) {
            asteriscos += '*';
        }
        rombo += espacios + asteriscos + '\n';
    }

    for (let i = tamaño - 2; i >= 1; i -= 2) {
        let espacios = '';
        let asteriscos = '';
        for (let j = 0; j < (tamaño - i) / 2; j++) {
            espacios += ' ';
        }
        for (let j = 0; j < i; j++) {
            asteriscos += '*';
        }
        rombo += espacios + asteriscos + '\n';
    }

    console.log(rombo);
}

pintaRombo(5);



function pintaRomboNumeros(tamaño) {
    //Hay que asegurarse que sea impar y para ello 
    if (tamaño % 2 === 0) {
        tamaño++; // Asegurarse de que el tamaño sea impar
    }

    let rombo = '';

    for (let i = 1; i <= tamaño; i += 2) {
        let espacios = '';
        let asteriscos = '';
        for (let j = 0; j < (tamaño - i) / 2; j++) {
            espacios += ' ';
        }
        cont=1;
        for (let j = 0; j < i; j++) {
            asteriscos += cont;
            cont++;
        }
        rombo += espacios + asteriscos + '\n';
    }

    for (let i = tamaño - 2; i >= 1; i -= 2) {
        let espacios = '';
        let asteriscos = '';
        for (let j = 0; j < (tamaño - i) / 2; j++) {
            espacios += ' ';
        }
        cont=1;
        for (let j = 0; j < i; j++) {
            asteriscos += cont;
            cont++;
        }
        rombo += espacios + asteriscos + '\n';
    }

    console.log(rombo);
}

pintaRomboNumeros(5);

function pintaRomboNumerosInvertidos(tamaño) 
{
    for (let i = 1; i <= tamaño; i++) 
    {
        let linea = "";
        //espacios
        for(let a = 0; a <= (tamaño - i - 1); a++)
        {
            linea += ' ';
        }
        //pinta el primer triangulo de numeros ascendiente
        for (let j = 1; j <= i; j++) 
        {
            linea += j;
        }

        //pinta el segundo triangulo de numeros descendiente
        for (let j = i - 1; j >= 1; j--) 
        {
            linea += j;
        }
        console.log(" " + linea);
    }
    for (let i = (tamaño - 1); i >= 1 ; i--) 
    {
        let linea = "";
        for(let a = 0; a <= (tamaño - i - 1); a++)
        {
            linea += ' ';
        }
        for (let j = 1; j <= i; j++) 
        {
            linea += j;
        }
        for (let j = i - 1; j >= 1; j--) 
        {
            linea += j;
        }
        console.log(' ' + linea);
    }
}
pintaRomboNumerosInvertidos(5);


function pintaRomboHueco(tamaño) {
    if (tamaño % 2 === 0) {
      tamaño++; // Asegurarse de que el tamaño sea impar
    }
    let rombo = '';
    
    for (let i = 1; i <= tamaño; i += 2) {
        let espacios = '';
        let asteriscos = '';
        for (let j = 0; j < (tamaño - i) / 2; j++) {
            espacios += ' ';
        }
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
            asteriscos += '*';
            } else {
            asteriscos += ' ';
            }
        }
        rombo += espacios + asteriscos + '\n';
    }
    
    for (let i = tamaño - 2; i >= 1; i -= 2) {
        let espacios = '';
        let asteriscos = '';
        for (let j = 0; j < (tamaño - i) / 2; j++) {
            espacios += ' ';
    }
    for (let j = 0; j < i; j++) {
        if (j === 0 || j === i - 1) {
            asteriscos += '*';
        } else {
            asteriscos += ' ';
        }
    }
      rombo += espacios + asteriscos + '\n';
    }
  
    console.log(rombo);
  }
  
  pintaRomboHueco(5);