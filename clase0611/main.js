function shuffle(arr) {

    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      // Cambiamos las posiciones del arr
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const arr = [1, 2, 3,4,5,-1,-6];
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);