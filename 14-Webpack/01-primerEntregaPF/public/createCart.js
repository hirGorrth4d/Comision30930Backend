const btnCart = document.getElementById("btnCart")

  btnCart.addEventListener('click', async () => {
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
      body: JSON.stringify({})
    }
    await fetch('http://localhost:8080/api/carrito/',params)
  })
