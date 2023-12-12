function printNumbersUsingSetInterval(from, to) {
    let current = from;

    const intervalId = setInterval(function() {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

// Ejemplo de uso:
printNumbersUsingSetInterval(3, 8);

function printNumbersUsingSetTimeout(from, to) {
    const print = function(current) {
        console.log(current);
        if (current < to) {
            setTimeout(function() {
                print(current + 1);
            }, 1000);
        }
    };

    print(from);
}

// Ejemplo de uso:
printNumbersUsingSetTimeout(3, 8);
