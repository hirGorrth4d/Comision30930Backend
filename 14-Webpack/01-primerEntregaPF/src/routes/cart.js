const express = require('express');
const {CartController } = require('../controller/cartController');
const router= express.Router();
//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

    router.get('/', async (req, res) => {
        const cart = await CartController.getAll()
        try {
        res.render('pages/carrito', {cart} )
        }
        catch (error) {
        res.json({msg: "NO SE PUDO ACCEDER AL CARRITO"})
        }
    })


    router.post('/', async (req, res) => {
        const carrito = await CartController.createCart()
    
        try {
            res.json(carrito.id)
            const cart = await CartController.getAll()
            res.render('pages/carrito', {cart} )
        }
        catch (error) {
        res.json({msg: "NO SE PUDO CREAR CARRITO"})
        }
    })

    router.post('/:id/', async (req,res) =>{

        const idCarrito = req.params.id
        const productToAdd = req.body
        await CartController.saveProduct(idCarrito,productToAdd)

        try {
            res.json({msg: "PRODUCTO AGREGADO"})
        } catch (error) {
            res.json({msg: "NO SE PUDO AGREGAR EL PRODUCTO"})
        }
    })



module.exports = router;