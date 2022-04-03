/**
 * Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos (Ejemplo con números 5 y 6)
a) Ruta get '/api/sumar/5/6
b) Ruta get '/api/sumar?num1=5&num2=62) 
c) Ruta get '/api/operacion/5+6
No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post/put/delete) según corresponda. Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión/error que correspondan.

 */

//IMPORTAMOS EXPRESS

const express = require('express')

//INICIALIZACION DE API CON EXPRESS
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
    console.log('Server up en puerto', puerto)
);
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
})

//DEFINICION DE RUTAS

//A) CON PARAMS
app.get('/api/sumar/:num1/:num2', (req,res) => {
    const n1 = parseInt(req.params.num1);
    const n2 = parseInt(req.params.num2);

    res.json({
        resultado: n1+n2,
    })
})

//B) CON QUERY PARAMS

app.get('/api/sumar', (req,res) => {
    const {num1 ,num2} = req.query
    const n1 = parseInt(num1) || 0;
    const n2 = parseInt(num2) || 0;

    res.json({
        resultado: n1 + n2,
    })
})

//Trayendo la operacion desde el cliente

app.get('/api/operacion/:op', (req, res) =>{
    res.json({
        resultado: eval(req.params.op), //Eval no era la mejor opción, pero el desafio es complicado para resolver con otra función
    })
})

//RUTAS POST, PUT Y DELETE, SOLO RESPONDERAN OK

///////PARA USAR POST PRIMERO DECLARAR LO SIGUIENTE
app.use(express.json()); //ESO ES PARA QUE EXPRESS GUARDE LA INFO EN REQ.BODY
app.use(express.urlencoded({extended: true }));/*ESTE ES SIMILAR PERO PARA USAR CON FORM DATA*/

app.post('/api', (req, res) => {
    const body = req.body
    console.log('BODY',body);
    res.json({
      msg: 'ok + post',
    });
  });
  
  app.put('/api', (req, res) => {
    res.json({
      msg: 'ok + put',
    });
  });
  
  app.delete('/api', (req, res) => {
    res.json({
      msg: 'ok + delete',
    });
  });