

  const btnAddToCart = document.querySelectorAll("#btnAddToCart");

  btnAddToCart.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idProd= e.target.id
      console.log("ID PROD ==>>", idProd)
      // const params = {
      //   method: 'POST',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   credentials: 'same-origin',
      //   headers: {
      //   'Content-Type': 'application/json'
      //   },
      //   redirect: 'follow', 
      //   referrerPolicy: 'no-referrer',
      //   body: JSON.stringify({
          
      //   })
      // }
      // await fetch('http://localhost:8080/api/carrito/',params)
    })
  });