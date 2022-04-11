
const express = require('express');
const mainRouter = require('./routes');
const path = require('path')

const app = express();
app.use(express.static('public'));
app.listen(8080, () => console.log('ESTAMOS LISTOS'));

app.use(express.json())


/**DISPONIBILAZACIÓN DE ARCHIVOS ESTÁTICOS */

const publicPath = path.resolve(__dirname,'../public');
console.log(publicPath);

app.use(express.static(publicPath));


//CONFIGURACIÓN DE ejs
app.set('view engine', 'ejs');
const viewPath = path.resolve(__dirname, '../views')
app.set('views', viewPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRouter);

