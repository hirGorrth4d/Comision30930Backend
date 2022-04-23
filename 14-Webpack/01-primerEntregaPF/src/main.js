const express = require('express');
const mainRouter = require('./routes');
const path = require('path')

const app = express();
const puerto = 8080;

const server = app.listen(puerto, () => console.log('SERVER UP EN PUERTO ', puerto))
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**DISPONIBILAZACIÓN DE ARCHIVOS ESTÁTICOS */

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

/**DEFINICION DE LOS ROUTERS */
app.use('/api', mainRouter);