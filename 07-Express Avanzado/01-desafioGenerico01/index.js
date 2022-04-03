/*
Dada la siguiente constante: const frase = 'Hola mundo cómo están'
Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.
Aclaraciones:
- En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
{ error: "El parámetro no es un número" } cuando el parámetro no es numérico
{ error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

*/

const express = require('express');

//DATOS A MANIPULAR
const frase = 'Hola mundo cómo están';


//INICIALIZACIÓN API CON EXPRESS
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () => 
    console.log('Server up en puerto', puerto)
);

//EN CASO DE ERROR
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
})

//DEFINIMOS LAS RUTAS 


//01- Devuelve la frase completa
app.get('/api/frase',(req,res) => {
    res.json({
        data: frase,
    })
})

//02- Devuelve una letra segun una posicion dada

app.get('/api/letras/:num', (req,res) => {
    const numeroLetra= parseInt(req.params.num);
    console.log(numeroLetra);

    //VERIFICAMOS QUE SEA UN NÚMERO
    if (isNaN(numeroLetra)){
        return res.status(400).json({
            error:'El parámetro debe ser numérico',
        })
    }
    //VERIFICAMOS SI ESTA DENTRO DEL RANGO DE  LA EXTENSIÓN DE LA FRASE
    if ( numeroLetra < 0 || numeroLetra >= frase.length){
        return res.status(400).json({
            error: 'El parámetro esta fuera de rango',
        })
    }
    res.json({
        data: frase[numeroLetra],
    })
})

//DEVUELVE UNA PALABRA SEGUN LA POSICION RECIBIDA POR PARAMS

app.get('/api/palabras/:num', (req,res) => {
    const numeroPalabra = parseInt(req.params.num);
    const palabras = frase.split(' ');
    console.log(palabras);

    //VERIFICAMOS QUE SEA UN NÚMERO
    if (isNaN(numeroPalabra)){
        return res.status(400).json({
            error:'El parámetro debe ser numérico',
        })
    }
    //VERIFICAMOS SI ESTA DENTRO DEL RANGO DE  LA EXTENSIÓN DE LA FRASE
    if ( numeroPalabra < 0 || numeroPalabra >= palabras.length){
        return res.status(400).json({
            error: 'El parámetro esta fuera de rango',
        })
    }
    res.json({
        data: palabras[numeroPalabra],
    })
})