const express = require('express');
const cartRouter = require('./cart')
const productsRouter = require('./products')
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        msg: "Hola desde el ROUTER PRINCIPAL"
    })
})

router.use('/carrito', cartRouter);
router.use('/productos', productsRouter);


module.exports = router;