const express = require('express');
const { ProductosController } = require('../controller/productos');
const router = express.Router();


///////GET
  router.get('/', async (req, res) => {
    const productos = await ProductosController.getAll();
    res.render('productos', {productos})
    });
////////POST
    router.post('/', async (req, res) => {
      const { precio, nombre, thumbnail } = req.body;
    
      if (!nombre || !precio || !thumbnail)
        return res.status(400).json({
          msg: 'Falta Nombre o Precio en el Body',
        });
    
      const nuevoProducto = {
        precio,
        nombre,
        thumbnail,
      };
      
      await ProductosController.save(nuevoProducto);
    
      res.json({
        msg: 'POST PRODUCTOS',
      });
    });
    

    module.exports = router;