const socket = io.connect();

socket.on('messages', function(data) { render(data)});
socket.on('productos', function(data) { renderProd(data)});

//funcion render de productos
function renderProd(data) {
  const html = data.map((elem) => {
      return(`<tr>
                <td><img id="img" class="imgTabla" src="${elem.thumbnail}" alt=""></td>
                <td id="id">${elem.id}</td>
                <td id="nombre">${elem.nombre}</td>
                <td id="nombre">${elem.precio}</td>
              </tr>`)
  }).join(" ")
  document.getElementById('tableContent').innerHTML = html;
}

//FUNCION PARA ENVIAR PRODUCTOS AL SERVER
const form = document.getElementById("formProductos")
const precio = document.getElementById('precio')
const nombre = document.getElementById('nombre')
const thumbnail = document.getElementById('thumbnail')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nuevoProducto = {
    precio: precio.value,
    nombre: nombre.value,
    thumbnail: thumbnail.value,
  };
  precio.value = '', nombre.value = '', thumbnail.value = '';

    socket.emit('new-product', nuevoProducto);
})


//FUNCION PARA ENVIAR MENSAJES AL SERVER

const formulario = document.getElementById("formChat")
const author = document.getElementById('username')
const text = document.getElementById('texto')

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
    const mensaje = {
        nombre: author.value,
        mensaje: text.value,
    };
    text.value = ''
    socket.emit('new-message', mensaje);
})

//funcion render de mensajes
function render(data) {

    const html = data.map((elem) => {
        return(`<div>
            <strong id="author">${elem.nombre}</strong> 
            (<span id="time">${elem.time}</span>):
            <em id="msg">${elem.mensaje}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
