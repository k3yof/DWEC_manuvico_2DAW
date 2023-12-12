let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

function empleadoTop(salarios) {
        let salarioMaximo = 0;
        let personaTopPagada = null;
    
        for (let [persona, salario] of Object.entries(salarios)) {
        if (salario > salarioMaximo) {
            salarioMaximo = salario;
            personaTopPagada = persona;
        }
        }
    
        return  "La persona mejor pagada es: "+personaTopPagada;
}

function empleadoTop2(salarios) {
    let salarioMaximo = 0;
    let personaTopPagada = null;
    
    for (let salario of Object.values(salarios)) {
        if (salario > salarioMaximo) {
            salarioMaximo = salario;
            personaTopPagada = Object.keys(salarios)[Object.values(salarios).indexOf(salario)];
        }
    }

    return "La persona mejor pagada es: "+personaTopPagada;
}

let salarios = {
    "John": 100,
    "Peter": 300,
    "Mary": 250
};
console.log(empleadoTop(salarios));
console.log(empleadoTop2(salarios));
    
