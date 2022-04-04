const express = require('express');

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

    personas.push(body);

    res.json({
        personas
    })
})

module.exports = router;