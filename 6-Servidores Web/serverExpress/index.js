const express = require('express');

const aplicacion = express();

const puerto = 8080;
const servidor = aplicacion.listen(puerto, () => {
    console.log(("Server listo. Escuchando el Puerto"));
})

servidor.on ('error', (err) => {
    console.log("Hubo un error", err);
})
aplicacion.get('/',(request, response) => {
    response.json({
        mensaje: "Hola desde la ruta principal"
    })
})