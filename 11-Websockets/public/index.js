const socket = io();                                               //instanciamos socket.io en el cliente



socket.on('mi mensaje', data => {                                  //Desde el lado del cliente tomamos el evento que creamos en el server con 'socket.on'
    alert(data)                                                    // Esto lo recibe cuando el usuario se conecta por que esta declarado en connection
    socket.emit('notificacion', 'Mensaje recibido exitosamente')   // de esta forma le respondemos al servidor.Tambien usamos 'emit' 
})
