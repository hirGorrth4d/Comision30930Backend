import { getAllMsg } from './controllers/mensajes';
import { getAllProducts } from './controllers/productos';
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

app.get('/', async (req, res) => {

    const productos = await getAllProducts()
    const messages = getAllMsg()
    res.render('pages/index')

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


