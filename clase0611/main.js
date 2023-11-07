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
  let arrFinal = [];

  for (let str of arr) {
    if (!arrFinal.includes(str)) {
      arrFinal.push(str);
    }
  }

  return arrFinal;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
unique(strings); 
console.log(strings);
console.log("Soy manuel y me huele la boca a tocino rancio");
