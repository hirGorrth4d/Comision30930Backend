const express = require('express');
const { v4: uuidv4 } = require('uuid')
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

    const nuevaMascota = {
        id: uuidv4(),
        nombre: body.nombre,
        raza: body.raza,
        edad:body.edad
    }

    mascotas.push(nuevaMascota);

    res.json({
        mascotas
    })
})


module.exports = router;