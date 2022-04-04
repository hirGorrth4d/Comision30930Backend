const express = require('express');

const router= express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/**DATOS A MANIPULAR */

const mascotas = [
    {
        nombre: "Pummer",
        raza: "Pitbull",
        edad: 5
    }
]
/**MÉTODO GET */
router.get('/', (req,res) => {
    res.json({
        mascotas,
    })
})

/**MÉTODO POST */
router.post('/', (req,res) => {
    const body = req.body;

    mascotas.push(body);

    res.json({
        mascotas
    })
})


module.exports = router;