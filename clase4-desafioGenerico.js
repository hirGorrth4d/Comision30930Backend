/*
Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen
*/


const mostrarLetras = (palabra, delay, cb) => {
 let i = 0;

    const timerId = setInterval(() => {
        console.log(new Date(), palabra[i]);
        i++
        if (i === palabra.length){
            clearInterval(timerId)
            cb()
        }
    }, delay);
}
const fin = () => console.log(new Date(), 'termine');
mostrarLetras('independiente', 1 , fin)