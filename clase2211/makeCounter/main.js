function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function (value) {
    counter.count = value;
  };

  counter.decrease = function () {
    return --counter.count;
  };

  return counter;
}

// Usage
const counter = makeCounter();
console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
console.log(counter.set(8)); // Counter set to 8
console.log(counter()); // Output: 9
console.log(counter.decrease()); // Output: 8
