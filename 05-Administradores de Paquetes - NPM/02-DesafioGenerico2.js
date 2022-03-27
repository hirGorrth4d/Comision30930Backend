/*
A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.
Y obtenga la siguiente información de dicho array
A) Los nombres de los productos en un string separados por comas.
B) El precio total
C) El precio promedio
D) El producto con menor precio
E) El producto con mayor precio
F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola

*/


const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

//EJERCICIO A
//NOMBRES DE LOS PRODUCTOS
const nombresProductos = productos.map((unProducto => unProducto.nombre))
let ejercicioA = nombresProductos.join(',');

//EJERCICIO B
//PRECIO TOTAL
let ejercicioB = 0;
productos.forEach((unProducto) => {
    ejercicioB += unProducto.precio
})

//EJERCICIO C 
//PRECIO PROMEDIO
let ejercicioC = ejercicioB / productos.length;

//Ejercicio D y E => El producto con menor y mayor precio
//ordenamos el array por precio y sabemos que el primero va a ser el menor valor y el ultimo el de mayor valor.
const logicaDeComparacion = (a,b) => {
    if (a.precio > b.precio) return 1;
    else if (a.precio < b.precio) return -1;
    else 0;
}

const arrayOrdernado = productos.sort(logicaDeComparacion);

const ejercicioD = arrayOrdernado[0];
const ejercicioE = arrayOrdernado[arrayOrdernado.length - 1];

//EJERCICIO F

const salida = {
    ejercicioA,
    ejercicioB,
    ejercicioC,
    ejercicioD,
    ejercicioE,
  };

  console.log(salida);