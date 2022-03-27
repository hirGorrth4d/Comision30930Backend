const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

//EJERCICIO A
const nombresProductos = productos.map((unProducto => unProducto.nombre))
let ejercicioA = nombresProductos.join(',');

//EJERCICIO B
let ejercicioB = 0;
productos.forEach((unProducto) => {
    ejercicioB += unProducto.precio
})

//EJERCICIO C 

let ejercicioC = ejercicioB / productos.length;

//EJERCICIO D

const logicaDeComparacion = (a,b) => {
    if (a.precio > b.precio) return 1;
    else if (a.precio < b.precio) return -1;
    else 0;
}