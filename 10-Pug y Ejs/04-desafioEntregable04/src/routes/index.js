const express = require('express');
const productosRouter = require('./productos')
const formRouter = require('./form')
const router= express.Router();


router.use('/productos', productosRouter);
router.use('/', formRouter);


module.exports = router;