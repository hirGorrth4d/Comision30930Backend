const express = require('express');
const personasRouter = require('./personas')
const mascotasRouter = require('./mascotas')
const router= express.Router();

router.get('/hola', (req,res) => {
    res.json({
        msg: "Hola desde el ROUTER PRINCIPAL"
    })
})

router.use('/personas', personasRouter);
router.use('/mascotas', mascotasRouter);

module.exports = router;