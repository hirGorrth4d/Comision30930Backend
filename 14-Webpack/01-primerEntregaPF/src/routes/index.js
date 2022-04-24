const express = require('express');
const cartRouter = require('./cart')
const productsRouter = require('./products')
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pages/index')
})

router.use('/carrito', cartRouter);
router.use('/productos', productsRouter);


module.exports = router;