const express = require('express');
const { ProductosController } = require('../controller/apiController');
const router = express.Router();


//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

////////////middleware de autenticación
function miMiddleware (req, res, next) {
  const esAdmin = false
  if (esAdmin == true) {
    next();
  } else {
    res.json({msg: "NO PUEDE ACCEDER POR QUE NO ES ADMINISTRADOR"})
  }
}


///////GET
router.get('/', async (req, res) => {
  const productos = await ProductosController.getAll();
  try {
    res.render('pages/productos', {productos})
  }
   catch (error) {
    res.json({msg: "NO SE PUDO ACCEDER A LOS PRODUCTOS"})
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
    res.json({msg: "PRODUCTO NO ENCONTRADO"})
  }
})

//post
router.post('/',miMiddleware, async(req,res) => {
  const nuevoProducto = req.body
  console.log('NUEVO PRODUCTO ===>>', nuevoProducto);
  await ProductosController.save(nuevoProducto)
  try {
    const productos = await ProductosController.getAll();
    res.render('pages/productos', {productos})
  } catch (error) {
    res.json({msg: "ERROR AL CREAR PRODUCTO"})
  }
})

//put
router.put('/:id',miMiddleware, async (req,res) => {
  const body = req.body;
  console.log(body);
  const id = req.params.id
  try {
    await ProductosController.Update(id,body);

    const productos = await ProductosController.getAll();
      res.render('pages/productos', {productos})
  }

  catch{
    res.json({msg: "ERROR AL EDITAR EL PRODUCTO"})
  }
})

///////DELETE by ID
router.delete('/:id',miMiddleware, async(req,res) => {
  const id = req.params.id
  await ProductosController.deleteById(id);
  try {
    const productos = ProductosController.getAll();
     res.render('pages/productos', {productos})
   }
   catch (error) {
    res.json({msg: "ERROR AL ELIMINAR EL PRODUCTO"})
  }
})


module.exports = router;
