class Sudoku {
    constructor(mezclas = 30) {
        this.datos = [
            // 1, 1, 1, 1, 1, 1, 1, 1, 1,
            // 2, 2, 2, 2, 2, 2, 2, 2, 2,
            // 3, 3, 3, 3, 3, 3, 3, 3, 3,
            // 4, 4, 4, 4, 4, 4, 4, 4, 4,
            // 5, 5, 5, 5, 5, 5, 5, 5, 5,
            // 1, 2, 3, 4, 5, 6, 7, 8, 9,
            // 1, 2, 3, 4, 5, 6, 7, 8, 9,
            // 1, 2, 3, 4, 5, 6, 7, 8, 9,
            // 1, 2, 3, 4, 5, 6, 7, 8, 9

            9,	2,	3,	8,	6,	1,	7,	4,	5,
            5,	4,	1,	2,	7,	9,	3,	8,	6,
            7,	6,	8,	4,	3,	5,	2,	9,	1,
            2,	8,	6,	7,	5,	3,	4,	1,	9,
            3,	7,	9,	6,	1,	4,	8,	5,	2,
            4,	1,	5,	9,	2,	8,	6,	3,	7,
            1,	9,	2,	3,	4,	7,	5,	6,	8,
            8,	3,	7,	5,	9,	6,	1,	2,	4,
            6,	5,	4,	1,	8,	2,	9,	7,	3
        ];
        this.nuevo(mezclas);
    }
    intercambiaFila(i = 10) {
        switch (i) {
            case 0:
                this.cambiaFilas(1, 2);
                break;
            case 1:
                this.cambiaFilas(0, 2);
                break;
            case 2:
                this.cambiaFilas(0, 1);
                break;
            case 3:
                this.cambiaFilas(4, 5);
                break;
            case 4:
                this.cambiaFilas(3, 5);
                break;
            case 5:
                this.cambiaFilas(3, 4);
                break;
            case 6:
                this.cambiaFilas(7, 8);
                break;
            case 7:
                this.cambiaFilas(6, 8);
                break;
            case 8:
                this.cambiaFilas(6, 7);
                break;
            default:
                this.intercambiaFila(Math.floor(Math.random() * 9));
                break;
        }
    }

    cambiaFilas(a, b) {
        const filaA = a * 9;
        const filaB = b * 9;
    
        // Intercambiar los valores de las filas en this.datos
        for (let i = 0; i < 9; i++) {
            const temp = this.datos[filaA + i];
            this.datos[filaA + i] = this.datos[filaB + i];
            this.datos[filaB + i] = temp;
        }
    }

    intercambiaColumna(i = 10) {
        switch (i) {
            case 0:
                this.cambiaColumnas(1, 2);
                break;
            case 1:
                this.cambiaColumnas(0, 2);
                break;
            case 2:
                this.cambiaColumnas(0, 1);
                break;
            case 3:
                this.cambiaColumnas(4, 5);
                break;
            case 4:
                this.cambiaColumnas(3, 5);
                break;
            case 5:
                this.cambiaColumnas(3, 4);
                break;
            case 6:
                this.cambiaColumnas(7, 8);
                break;
            case 7:
                this.cambiaColumnas(6, 8);
                break;
            case 8:
                this.cambiaColumnas(6, 7);
                break;
            default:
                this.intercambiaColumna(Math.floor(Math.random() * 9));
                break;
        }
    }

    cambiaColumnas(a, b) {
        for (let i = 0; i < 9; i++) {
            const colA = a * 9 + i;
            const colB = b * 9 + i;
    
            const temp = this.datos[colA];
            this.datos[colA] = this.datos[colB];
            this.datos[colB] = temp;  
        }
    }

    nuevo(mezclas = 10) {
        for (let i = 0; i < mezclas; i++) {
            this.intercambiaFila();
            this.intercambiaColumna();
        }
    }

    muestra(porcentaje=1) {
        for (let i = 0; i < 81; i++) {
            document.getElementById('td' + i).innerText = this.datos[i]; //Math.random()<porcentaje ? this.datos[i]:'';
        }
    }

    // estaResuelto() {
    //     const valido = (arr) => {
    //         const set = new Set(arr);
    //         return set.size === 9 && set.has(0) === false;
    //     };
    
    //     // Verificar filas
    //     for (let i = 0; i < 9; i++) {
    //         const fila = this.datos.slice(i * 9, (i + 1) * 9);
    //         if (!valido(fila)) {
    //             return false;
    //         }
    //     }
    
    //     // Verificar columnas
    //     for (let i = 0; i < 9; i++) {
    //         const columna = [];
    //         for (let j = 0; j < 9; j++) {
    //             columna.push(this.datos[i + j * 9]);
    //         }
    //         if (!valido(columna)) {
    //             return false;
    //         }
    //     }
    
    //     // Verificar bloques de 3x3
    //     for (let i = 0; i < 9; i += 3) {
    //         for (let j = 0; j < 9; j += 3) {
    //             const bloque = [];
    //             for (let k = 0; k < 3; k++) {
    //                 for (let l = 0; l < 3; l++) {
    //                     bloque.push(this.datos[i * 9 + j + k * 9 + l]);
    //                 }
    //             }
    //             if (!valido(bloque)) {
    //                 return false;
    //             }
    //         }
    //     }
    
    //     return true; 
    // }
}


const miSudoku = new Sudoku();

miSudoku.muestra(0.75);

function nuevoSudoku(evento) {
    evento.preventDefault();
    miSudoku.nuevo();
    miSudoku.muestra(0.75);
}
function cambiarFilas() {
    miSudoku.intercambiaFila();
    miSudoku.muestra(0.75);
}

function cambiarColumnas() {
    miSudoku.intercambiaColumna();
    miSudoku.muestra(0.75);
}

// function verificarResuelto() {
// const resuelto = miSudoku.estaResuelto();
//     if (resuelto) {
//     alert('¡El Sudoku está resuelto!');
//     } else {
//     alert('El Sudoku no está resuelto aún.');
//     }
// }


let celdaUltimoFoco = -1;

function clickEnTabla(evento) {
    if (evento.target.id.charAt(0) != 't' || evento.target.id.charAt(1) != 'd')
        return;
    console.log("click en el id: " + evento.target.id);
    console.log("último foco en " + celdaUltimoFoco);
    if (celdaUltimoFoco != -1) {
        document.getElementById(celdaUltimoFoco).classList.remove("gamehighlighttd");
    }
    evento.target.classList.add("gamehighlighttd");
    celdaUltimoFoco = evento.target.id;
}

document.getElementById('nuevoSudoku').addEventListener('click', nuevoSudoku);
document.getElementById('cFilas').addEventListener('click', cambiarFilas);
document.getElementById('cColumnas').addEventListener('click', cambiarColumnas);
// document.getElementById('estaResuelto').addEventListener('click', verificarResuelto);

document.getElementById('playtable').addEventListener('click', clickEnTabla);