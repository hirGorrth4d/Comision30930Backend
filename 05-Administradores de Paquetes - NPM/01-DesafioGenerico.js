/*
A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

*/



const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};


const limiteInferior = 1;
const limiteSuperior = 21;
const salida = {};

for (let i = 0; i < 10000; i++) {
    const valor = between(limiteInferior,limiteSuperior);

    if(salida[valor])
        salida[valor] = salida[valor]+1;
    else
        salida[valor] = 1;
}

console.log(salida);
