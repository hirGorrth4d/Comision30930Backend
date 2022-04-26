const express = require('express');
const {CartController } = require('../controller/cartController');
const router= express.Router();
//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

    //CREA UN CARRITO
    router.post('/', async (req, res) => {
        const carrito = await CartController.createCart()
    
        try {
            res.json(carrito.id)
        }
        catch (error) {
        res.json({msg: "NO SE PUDO CREAR CARRITO"})
        }
    })
//INGRESA PRODUCTOS EN EL CARRITO
    router.post('/:id/productos', async (req,res) =>{

        const idCarrito = req.params.id
        const productToAdd = req.body.id

        await CartController.saveProduct(idCarrito,productToAdd)

        try {
            res.json({msg: "PRODUCTO AGREGADO"})
        } catch (error) {
            res.json({msg: "NO SE PUDO AGREGAR EL PRODUCTO"})
        }
    })
//LISTA LOS PRODUCTOS EN EL CARRITO
    router.get('/:id/productos', async (req, res) => {
        const idCarrito = req.params.id
        const cart = await CartController.getById(idCarrito)
        const productos = cart.productos
        try {
            res.json({productos})
        }
        catch (error) {
        res.json({msg: "NO SE PUDO ACCEDER AL CARRITO"})
        }
    })

//BORRA UN CARRITO
    router.delete('/:id', async (req,res) =>{
        const idCarrito = req.params.id

        await CartController.deleteById(idCarrito)

        try {
            res.json({msg: "CARRITO BORRADO"})
        } catch (error) {
            res.json({msg: "NO SE PUDO BORRAR EL CARRITO"})
        }
    })
//BORRA UN PRODUCTO
    router.delete('/:id/productos/:id_prod', async (req,res) =>{
        const idCarrito = req.params.id
        const idProd = req.params.id_prod

        await CartController.deleteProductById(idCarrito,idProd)

        try {
            res.json({msg: "PRODUCTO BORRADO"})
        } catch (error) {
            res.json({msg: "NO SE PUDO BORRAR EL PRODUCTO"})
        }
    })



module.exports = router;