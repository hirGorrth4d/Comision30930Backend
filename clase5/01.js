



const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};


const limiteInferior = 1;
const limiteSuperior = 21;
const salida = {};

for (let i = 0; i < 10000; i++) {
    const valor = between(limiteInferior,limiteSuperior);

    if (salida[valor])
    salida[valor]
    
}
