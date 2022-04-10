//LEVANTAMOS EL SERVIDOR CON EXPRESS


const express = require('express');

/**INICIALIZACION DE API CON EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
    console.log('Server up en puerto', puerto)
);
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
});


//CONFIGURACIÓN DE PUG

app.set('views','./views');
app.set('view engine', 'pug');

app.get('/meter', (req,res) => {
    console.log(req.query);

    res.render('meter.pug', req.query)
})