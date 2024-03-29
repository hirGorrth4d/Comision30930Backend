const express = require('express');
const mainRouter = require('./routes/index');

/**INICIALIZACION DE API CON EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
    console.log('Server up en puerto', puerto)
);
server.on('error', (err) => {
    console.log('ERROR ATAJADO', err);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**DEFINICION DE LOS ROUTERS */

app.use('/api', mainRouter); //Ya no tengo que repetir Api por que lo engloba

