const express = require('express')                                      //importamos express
const http = require('http')                          //importamos http
const io = require('socket.io')   
const app = express()   
                                                
const myServer = http.Server(app)

                                   
const puerto = 8080                                     //server up en puerto 8080
myServer.listen(puerto, () => console.log('SERVER UP en puerto ', puerto)) 

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })                     //Le indicamos que en la ruta principal renderice index.html
})

app.use(express.static('./public'))                     //disponibilizamos los archivos estáticos

const myWSServer = io(myServer)


const historial = []
myWSServer.on('connection', (socket) => {             //'connection' se ejecuta la primera vez que se abre una conexión                           
    console.log('Nuevo cliente conectado!');   
    console.log("Id socket Server: ", socket.id);
    console.log("Id socket CLIENTE: ", socket.client.id);

    //ESCUCHA DE LO EVENTOS, DENTRO DE CONNECTION! PARA MANTENER EL ID
    //SERIA COMO UNA CONEXION POR CLIENTE

    socket.on('message', (data) => {
        console.log('Data que envia el user: ', data);
        const nuevoMensaje = {
            id:socket.client.id,
            author: data.author,
            text: data.text,
        }
        historial.push(nuevoMensaje)
        
    })
    socket.emit('historial', historial)
})                                                                      

