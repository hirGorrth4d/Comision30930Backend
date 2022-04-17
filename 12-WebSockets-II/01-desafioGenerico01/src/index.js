const express = require ('express')
const http = require('http')
const io = require('socket.io')   
const app = express()   

//Servidor en express instanciado dentro de http
const myServer = http.Server(app)
//servidor de websockets que recibe nuestro servidor express instanciado en https
const myWSServer = io(myServer)

//server up en puerto 8080                                  
const puerto = 8080                                     
myServer.listen(puerto, () => console.log('SERVER UP en puerto ', puerto)) 

//disponibilizamos los archivos estáticos
app.use(express.static('./public'))  

//mensajes que escuchara el cliente

const messages = [];


 myWSServer.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message',data => {
        messages.push(data);
        myWSServer.sockets.emit('messages', messages);
    });
});
