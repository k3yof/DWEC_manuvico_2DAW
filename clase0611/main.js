function shuffle(array) {

    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      // Cambiamos las posiciones del array
      [array[i], array[j]] = [array[j], array[i]];
    }
}

const myArray = [1, 2, 3,4,5,-1,-6];
console.log(myArray);
shuffle(myArray);
console.log(myArray);
shuffle(myArray);
console.log(myArray);
shuffle(myArray);
console.log(myArray);
shuffle(myArray);
console.log(myArray);