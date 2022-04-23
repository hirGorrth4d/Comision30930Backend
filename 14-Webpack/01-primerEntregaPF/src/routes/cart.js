const express = require('express');
const router= express.Router();

router.get('/', (req,res) => {
    res.json({
        msg: "Hola desde el ROUTER CARRITO"
    })
})

module.exports = router;