/*
>> Consigna:
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.

*/

const express = require('express');
const { Contenedor } = require('./contenedor');

//utilizar el módulo express
const app = express();

//usar puerto 8080
app.listen(8080, () => console.log('Escuchando puerto 8080'));

app.on("error", error => console.log(`Error en servidor ${error}`))



//ENDPOINTS

//PRODUCTOS
app.get('/productos', async (req, res) => {
    const resultado = await Contenedor.getAll();
    res.json({
        data: resultado,
      });
 })


//ID RANDOM
app.get('/productoRandom', async (req, res) => {

    const data = await Contenedor.getAll();
    
//obtengo un array con los id de los productos
    const ids = await data.map(e => e.id)

//FUNCIÓN PARA NÚMEROS RANDOM
const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

//genero un id random
const nroMax = ids.length

let random = between(0, nroMax);
    console.log('RANDOM', random);

const randomId = await ids[random]
    console.log('IDRANDOM', randomId);

const productoEncontrado = await Contenedor.getById(randomId)
console.log("ANTES DEL RESSSS",productoEncontrado);

res.json(productoEncontrado)

})