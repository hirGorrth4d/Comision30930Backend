const express = require('express');
const router= express.Router();

//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req,res) => {
    res.render(
        'pages/productos'
    )
})

module.exports = router;