const express = require('express');
const mainRouter = require('./routes');
const path = require('path')

const app = express();
const puerto = 8080;

const server = app.listen(puerto, () => console.log('SERVER UP EN PUERTO ', puerto))
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
});


/**DISPONIBILIZACIÓN DE ARCHIVOS ESTÁTICOS */
const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

//CONFIGURACIÓN DE ejs
app.set('view engine', 'ejs');
const viewPath = path.resolve(__dirname, '../views')
app.set('views', viewPath);

/**DEFINICION DE LOS ROUTERS */
app.use('/', mainRouter)
app.use('/api', mainRouter)