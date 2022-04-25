const express = require('express');
const {CartController } = require('../controller/cartController');
const router= express.Router();
//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
    const carrito = await CartController.getAll()
    try {
      res.render('pages/carrito', {carrito} )
    }
     catch (error) {
      res.json({msg: "NO SE PUDO ACCEDER AL CARRITO"})
    }
  })


router.post('/', async (req, res) => {
    const carrito = await CartController.createCart()
   
    try {
        res.json(carrito.id)
        
    }
     catch (error) {
      res.json({msg: "NO SE PUDO CREAR CARRITO"})
    }
  })



module.exports = router;