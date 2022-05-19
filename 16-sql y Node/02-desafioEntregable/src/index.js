
import { ProductosController } from './api/apiArchivo';
import server from './services/server';
const io = require('socket.io') 


//import {initMongoDB} from './services/database';

// const init = async () => {
//   await initMongoDB();
// }
// init();

const puerto = 8080;
server.listen(puerto, () => console.log(`SERVER UP ON PORT ${puerto}`));
//cuando use mongo, estas dos lineas van dentro de init()

//servidor de websockets que recibe nuestro servidor express instanciado en https
const myWSServer = io(server)

    const prods = ProductosController.get()
    console.log(prods);
    
    const productos = []
    const messages = []

    myWSServer.on('connection', function(socket) {
        console.log('Un cliente se ha conectado');

        socket.emit('messages', messages);
        socket.emit('productos', productos);

        socket.on('new-message', data => {
            myWSServer.sockets.emit('messages', messages);
        });

        socket.on('new-product', async(nuevoProducto) => {
            myWSServer.sockets.emit('productos', productos);
        });

    });



