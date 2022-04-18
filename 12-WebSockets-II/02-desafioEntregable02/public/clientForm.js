
const boton = document.getElementById("boton")

const nombre = document.getElementById("nombre")
const precio = document.getElementById("precio")
const thumbnail = document.getElementById("thumbnail")

boton.addEventListener('click', async () => {
    const params = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            nombre: nombre.value,
            precio: precio.value,
            thumbnail: thumbnail.value
        })
  }
  nombre.value = precio.value = thumbnail.value = ''
  
  await fetch('http://localhost:8080/', params)

})


