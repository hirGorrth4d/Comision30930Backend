const express = require('express');
const { ProductosController } = require('../controller/apiController');
const router = express.Router();


//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


///////GET
router.get('/', async (req, res) => {
  const productos = await ProductosController.getAll();
  try {
    res.render('pages/productos', {productos})
  }
   catch (error) {
    console.log('ERROR', error);
  }
})

///////GET by ID
router.get('/:id', async(req,res) => {
  const id = req.params.id
  const productoEncontrado = await ProductosController.getById(id);
  const productos = []
  productos.push(productoEncontrado)
  try {
     res.render('pages/productos', {productos})
   }
   catch (error) {
     console.log('ERROR', error);
  }
})

//post
router.post('/', async(req,res) => {
  const nuevoProducto = req.body
  console.log('NUEVO PRODUCTO ===>>', nuevoProducto);
  await ProductosController.save(nuevoProducto)
  try {
    const productos = await ProductosController.getAll();
    res.render('pages/productos', {productos})
  } catch (error) {
    console.log('ERROR', error);
  }
})


//put

router.put('/:id', async (req,res) => {
    
const body = req.body;
console.log(body);
const id = req.params.id
 try {
  await ProductosController.Update(id,body);

  const productos = await ProductosController.getAll();
    res.render('pages/productos', {productos})
 }

 catch{
   res.json({msg: "PRODUCTO NO ENCONTRADO"})
 }
})


module.exports = router;
