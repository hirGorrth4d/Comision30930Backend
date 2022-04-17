//evento para conectar el cliente 
const socket = io.connect();   

//form
const formulario = document.getElementById("form")
const author = document.getElementById("nombreCliente")
const text = document.getElementById("inputText")
//log
const log = document.querySelector("#containerText")



formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const mensaje = {
    author: author.value,
    text: text.value,
  }
  author.value = ''
  text.value = ''

  socket.emit('message', mensaje)

  socket.on('historial', (newMsg) => {

      const msg = document.createElement("p")
      msg.innerHTML = `${newMsg.author}, ID: (${newMsg.id}) =======>>> says : ${newMsg.text}`
      log.append(msg)
  })
})

                       


    // Esto lo recibe cuando el usuario se conecta por que esta declarado en connection                                          
    //socket.emit('notificacion', 'Mensaje recibido exitosamente')   // de esta forma le respondemos al servidor.Tambien usamos 'emit' 
    
    //funcion para ir trasladando letra por letra lo que se ingresa en el input a un parrafo.
    /**
      const input = document.querySelector('#inputText');

  input.addEventListener('keydown', updateValue);

  function updateValue(e) {
    const log = document.querySelector('#containerText');
    log.innerHTML = e.target.value;
  }
     */


  