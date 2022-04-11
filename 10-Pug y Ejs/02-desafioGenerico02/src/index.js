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
app.set('view engine', 'ejs');
const viewPath = path.resolve(__dirname, '../views')
app.set('views', viewPath);

//routes
app.get('/', (req,res) => {
    const data = {
        titulo: 'HOLA CODER',
        mensaje: 'Mi Mensaje dinamico con estilo',
      };
      res.render('index', data);
})