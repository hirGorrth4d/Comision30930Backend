/**
 * Considere la siguiente frase: ‘Frase inicial’
Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).

Aclaraciones:
Utilizar Postman para probar la funcionalidad.
El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

 */const express = require('express');

//DATOS A MANIPULAR
let frase = 'Frase inicial'


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

//01-GET
//01- Devuelve la frase completa
app.get('/api/frase',(req,res) => {
    res.json({
        frase,
    })
})

//02-GET
//DEVUELVE UNA PALABRA SEGUN LA POSICION RECIBIDA POR PARAMS

app.get('/api/palabras/:pos', (req, res) => {
    const posicion = parseInt(req.params.pos);
  
    const palabras = frase.split(' ');
    if (posicion < 1 || posicion > palabras.length) {
      return res.status(400).json({
        error: 'El parámetro está fuera de rango',
      });
    }
  
    res.json({
      palabra: palabras[posicion - 1],
    });
  });

//03-POST

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/palabras', (req, res) => {
  const { nuevaPalabra } = req.body;    //Es lo mismo que hacer const nuevaPalabra = req.body.nuevaPalabra

  if (!nuevaPalabra)
    return res.status(400).json({
      msg: 'Mandame una palabra',
    });

  frase += ' ' + nuevaPalabra;
  res.json({
    agregada: nuevaPalabra,
    pos: frase.split(' ').length,
    frase,
  });
});


//04. PUT
app.put('/api/palabras/:pos', (req, res) => {
    const posicion = parseInt(req.params.pos);
    const {palabra} = req.body;
  
    const palabras = frase.split(' ');
    if (posicion < 1 || posicion > palabras.length) {
      return res.status(400).json({
        error: 'El parámetro está fuera de rango',
      });
    }
  
    const palabraReemplazada = palabras[posicion - 1];
    palabras[posicion - 1] = palabra;
  
    frase = palabras.join(' ');
  
    res.json({
      actualizada: palabra,
      anterior: palabraReemplazada,
      frase,
    });
  });

  //05-DELETE

  app.delete('/api/palabras/:pos', (req, res) => {
    const posicion = parseInt(req.params.pos) - 1;
  
    const palabras = frase.split(' ');
    if (posicion < 1 || posicion > palabras.length) {
      return res.status(400).json({
        error: 'El parámetro está fuera de rango',
      });
    }
  
    palabras.splice(posicion, 1);
  
    frase = palabras.join(' ');
    res.json({
      frase,
    });
  });