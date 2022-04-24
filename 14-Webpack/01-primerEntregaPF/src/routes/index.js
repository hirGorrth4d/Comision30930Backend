const express = require('express');
const cartRouter = require('./cart')
const productsRouter = require('./products')
const router = express.Router();
/**DISPONIBILIZACIÓN DE ARCHIVOS ESTÁTICOS */
const path = require('path')
const publicPath = path.resolve(__dirname,'../public');
router.use(express.static(publicPath));

router.get('/', (req,res) => {
    res.render('pages/index')
})

router.use('/carrito', cartRouter);
router.use('/productos', productsRouter);


module.exports = router;