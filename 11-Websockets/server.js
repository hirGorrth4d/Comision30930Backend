const express = require('express')                                      //importamos express
const { Server: HttpServer } = require('http')                          //importamos http
const { Server: IOServer } = require('socket.io')   

const app = express()                                                   //inicializamos app
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))                                     //disponibilizamos los archivos estáticos

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })                     //Le indicamos que en la ruta principal renderice index.html
})

httpServer.listen(8080, () => console.log('SERVER UP'))                 //server up en puerto 8080

io.on('connection', (socket) => {                                       //'connection' se ejecuta la primera vez que se abre una conexión
    console.log('Nuevo cliente conectado!');                                   //El objeto 'socket' tiene diversos métodos,'emit' envia un mensaje al usuario que se ha conectado
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')   //recibe 2 parametros, el nombre del evento, y el mensaje que se va a enviar
                                                                        //como el emit esta declarado en connection, el mensaje se envia en cada conexión
    socket.on('notificacion', data => {                                 //recibimos el mensaje desde el cliente
        console.log(data)
    })
})                                                                      

