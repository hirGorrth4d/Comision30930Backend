const socket = io.connect();

socket.on('messages', function(data) { render(data)});
socket.on('productos', function(data) { renderProd(data)});

//funcion render de productos
function renderProd(data) {
  const html = data.map((elem) => {
      return(`<tr>
                <td><img id="img" class="imgTabla" src="${elem.thumbnail}" alt="${elem.nombre}"></td>
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

const formulario = document.getElementById("form")
const author = document.getElementById('username')
const text = document.getElementById('texto')

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
    let time = Date.now()
    console.log(time);
    const mensaje = {
        author: author.value,
        text: text.value,
        time : time
    };
    text.value = ''
    socket.emit('new-message', mensaje);
})

//funcion render de mensajes
function render(data) {

    const html = data.map((elem) => {
        return(`<div>
            <strong id="author">${elem.author}</strong> 
            (<span id="time">${elem.time}</span>):
            <em id="msg">${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
