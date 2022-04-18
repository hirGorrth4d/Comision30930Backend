const express = require('express');
const path = require('path')
const http = require('http')
const io = require('socket.io') 
const app = express();
const { ProductosController } = require('./controller/productos');
const productos = require('./controller/productos');

//Servidor en express instanciado dentro de http
const myServer = http.Server(app)
//servidor de websockets que recibe nuestro servidor express instanciado en https
const myWSServer = io(myServer)

//server up en puerto 8080                                  
const puerto = 8080                                     
myServer.listen(puerto, () => console.log('SERVER UP en puerto ', puerto)) 

app.use(express.json())


/**DISPONIBILAZACIÓN DE ARCHIVOS ESTÁTICOS */

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

//CONFIGURACIÓN DE ejs
app.set('view engine', 'ejs');

const viewPath = path.resolve(__dirname, '../views')
app.set('views', viewPath);

app.get('/', async (req, res) => {
    const productos = await ProductosController.getAll();
    res.render('pages/index')

    const messages = [];

/////////////////////conf socket io
    myWSServer.on('connection', function(socket) {
        console.log('Un cliente se ha conectado');

        socket.emit('messages', messages);
        socket.emit('productos', productos);

        socket.on('new-message', data => {
            messages.push(data);
            myWSServer.sockets.emit('messages', messages);
        });

        socket.on('new-product', async(nuevoProducto) => {
            await ProductosController.save(nuevoProducto);
            myWSServer.sockets.emit('productos', productos);
        });

    });
});





