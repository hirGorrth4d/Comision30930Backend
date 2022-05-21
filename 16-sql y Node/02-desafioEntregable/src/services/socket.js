const socketIo = require('socket.io');
import { DBService } from '../api/apiSQL'
let io;

const initWsServer = (server) => {
  io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('Nueva Conexion establecida!');
    console.log(new Date());

    socket.on('allProducts', async () => {
      const productos = await DBService.get('productos')

      productos.forEach((unProducto) => {
        socket.emit('producto', unProducto);
      });
    });
    socket.on('allMsgs', async () => {
      const mensajes = await DBService.get('mensajes')

      mensajes.forEach((unMensaje) => {
        socket.emit('mensaje', unMensaje);
      });
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
