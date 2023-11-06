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

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings));