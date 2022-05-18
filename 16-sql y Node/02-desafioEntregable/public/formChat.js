const formulario = document.getElementById("formChat")
const author = document.getElementById('username')
const text = document.getElementById('texto')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const params = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify({
            nombre: author.value,
            mensaje: text.value
        })
  }
  nombre.value = mensaje.value = ''
  
  await fetch('http://localhost:8080/api/mensajes', params)

})