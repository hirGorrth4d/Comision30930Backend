const socket = io.connect();

socket.on('messages', function(data) { render(data); });

//FUNCION PARA ENVIAR MENSAJES AL SERVER

const formulario = document.getElementById("form")
const author = document.getElementById('username')
const text = document.getElementById('texto')

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

    const mensaje = {
        author: author.value,
        text: text.value
    };
    text.value = ''
    socket.emit('new-message', mensaje);
})

//funcion render de mensajes
function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
