/*
Definiremos una función llamada operación que reciba como parámetro dos valores y una función con la operación que va a realizar. Deberá retornar el resultado.

Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo. Estas recibirán dos valores y devolverán el resultado. Serán pasadas como parámetro en la llamada a la función operación

Todas las funciones tendrán que ser realizadas con sintaxis flecha.

*/


const operación = (num1,num2,operaciónArealizar) => {
    return operaciónArealizar(num1,num2)
}

//SUMA
const  sumar = (num1, num2) => {
    const resultado = num1 + num2
    return resultado
}
//RESTA
const restar = (num1, num2) => {
    const resultado = num1 - num2
    return resultado
}
//MULTIPLICACIÓN
const  multiplicar = (num1, num2) => {
    const resultado = num1 * num2
    return resultado
}
//DIVISIÓN
const  dividir = (num1, num2) => {
    const resultado = num1 / num2
    return resultado
}
//MÓDULO / RESTO    
const  modulo = (num1, num2) => {
    const resultado = num1 % num2
    return resultado
}

console.log(operación(10, 5, multiplicar));



