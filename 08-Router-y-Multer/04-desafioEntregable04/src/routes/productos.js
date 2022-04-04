const express = require('express');
const router= express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/**DATOS A MANIPULAR */

let productos = [];

/**MÉTODO GET */
router.get('/', (req,res) => {
    res.json({
        productos,
    })
})

/**GET BY ID */

router.get('/:id', (req,res) => {

    const id = parseInt(req.params.id)

    const productoEncontrado = productos.find(element => element.id == id)

   if (productoEncontrado) res.json({ productoEncontrado})
  
   else res.json({msg: "PRODUCTO NO ENCONTRADO"})

})

/**MÉTODO POST */
router.post('/', (req,res) => {
    
    const body = req.body;
    let id;

    if (productos.length === 0) id = 1;
    else id = productos[productos.length - 1].id + 1

    const nuevoProducto = {
        id: id,
        title: body.title,
        price: body.price,
        thumbnail:body.thumbnail
    }

    productos.push(nuevoProducto);

    res.json({
        productos
    })
})

/**MÉTODO PUT */
router.put('/:id', (req,res) => {
    
    const body = req.body;

    let productoEncontrado = productos.find(element => element.id == id)

   if (productoEncontrado) {
    productoEncontrado = {
        title: body.title,
        price: body.price,
        thumbnail:body.thumbnail
    }

    res.json({ productoEncontrado})
   }
  
   else res.json({msg: "PRODUCTO NO ENCONTRADO"})
})

/**DELETE */
router.delete('/:id', (req,res) => {

    const id = parseInt(req.params.id)

    let productoEncontrado = productos.find(element => element.id == id)

      if (productoEncontrado) {
        productos = productos.filter(
            (unProducto) => unProducto.id != id
          );
         res.json({ productos})
      }
      else res.json({msg: "PRODUCTO NO ENCONTRADO"})
})

module.exports = router