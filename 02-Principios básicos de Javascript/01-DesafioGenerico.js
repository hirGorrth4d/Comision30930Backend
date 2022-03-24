
//EJERCICIO 1
/*Definir la función mostrarLista que reciba una lista de datos y
 muestre su contenido, si no está vacía, 
 o de lo contrario muestre el mensaje: “lista vacía”. 
 Luego, invocarla con datos de prueba para verificar que 
 funciona bien en ambos casos.*/


// const dataList = [1, 2,3]


// function mostrarLista(lista) {
//     if (lista == "") {
//         console.log("Lista Vacia");
//     }
//     else{
//         console.log(lista);
//     }
// }
// mostrarLista(dataList);



//EJERCICIO 2
/*Definir una función anónima que haga lo mismo que la del punto 1,
 e invocarla inmediatamente,pasando una lista con 3 números como argumento*/

// (function (lista) {
//      if (lista.length === 0) {
//                  console.log("Lista Vacia");
//              }
//              else{
//                  console.log(lista);
//              }
// })([])

//EJERCICIO 3

/* Definir la función crearMultiplicador  que reciba un número y
 devuelva una función anónima que reciba segundo número y dé como 
 resultado el producto de ambos. Luego, a partir de la función definida,
  crear dos funciones duplicar y triplicar, 
  y probarlas con diferentes valores.*/


  function crearMultiplicador (numero1){
      return function (numero2) {
        return numero1 * numero2
      }
  }

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar(3));
console.log(triplicar(5));