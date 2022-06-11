const socketIo = require('socket.io');
//import { DBService } from '../api/apiSQL'
import { ProductosController } from '../api/apiFaker'
import { MensajesController } from '../api/apiArchivoMensajes';
let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');
    console.log(new Date());

    socket.on('allProducts', async () => {
      const productos = await ProductosController.get()

      productos.forEach((unProducto) => {
        socket.emit('producto', unProducto);
      });
    });
    socket.on('allMsgs', async () => {
      const mensajes = await MensajesController.get()
        socket.emit('mensaje', mensajes);
    });
  });

  return io;
};

 const socketEmit = (eventName, message) => {
   io.emit(eventName, message);
 };

module.exports = {
  initWsServer,
   socketEmit,
};
