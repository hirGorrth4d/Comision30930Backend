//importamos EXPRESS
const express = require('express');
const path = require('path');

/**INICIALIZACION DE API CON EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
    console.log('Server up en puerto', puerto)
);
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
});
//DISPONIBILIZACION DE ARCHIVOS ESTÁTICOS

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//CONFIGURACIÓN DE PUG
app.set('view engine', 'pug');
const viewPath = path.resolve(__dirname, './views')
app.set('views', viewPath);

//prueba
app.get('/hello', (req, res) => {
    res.render('hello', { mensaje: 'BIENVENIDOS HUMANOS' }); // Se muestra la plantilla hello.pug
  });
//RUTA PARA LOS PARAMS: 
//   /datos?min=10&nivel=15&max=20&titulo=DESAFIO
app.get('/datos', (req,res) => {
    console.log(req.query);

    res.render('datos.pug', req.query)
})