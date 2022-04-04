const express = require('express');
const { v4: uuidv4 } = require('uuid')
const router= express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


/**DATOS A MANIPULAR */

const personas = [
    {
        nombre: "Noelia",
        apellido: "Cid",
        edad: 29
    }
]

/**METODO GET */
router.get('/', (req,res) => {
    res.json({
        personas,
    })
})
/**MÉTODO POST */
router.post('/', (req,res) => {
    const body = req.body;

    const nuevaPersona = {
        id: uuidv4(),
        nombre: body.nombre,
        apellido: body.apellido,
        edad:body.edad
    }

    personas.push(nuevaPersona);

    res.json({
        personas
    })
})

module.exports = router;