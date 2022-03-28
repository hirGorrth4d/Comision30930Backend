const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    const fecha = new Date()
    var hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
   

   if (hora = 19){
    respuesta.end("Buenas Noches")
   }
})

const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})


