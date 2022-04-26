const express = require('express');
const { ProductosController } = require('../controller/productsController');
const router = express.Router();


//PARA INGRESO DE DATOS POR FORMULARIOS
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

////////////middleware de autenticación
function miMiddleware (req, res, next) {
  const esAdmin = true
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
    res.json({productos})
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
    res.json({productos})
   }
   catch (error) {
    res.json({msg: "PRODUCTO NO ENCONTRADO"})
  }
})

//post
router.post('/',miMiddleware, async(req,res) => {
  const nuevoProducto = req.body
  //TIMESTAMP
    const time = getClockTime()
    const newProd = {...nuevoProducto, timestamp:time} 

  await ProductosController.save(newProd)
  try {
    const productos = await ProductosController.getAll();
    res.json({productos})
  } catch (error) {
    res.json({msg: "ERROR AL CREAR PRODUCTO"})
  }
})

//put
router.put('/:id',miMiddleware, async (req,res) => {
  const body = req.body;
  const time = getClockTime()

  const prodUpdated = {...body, timestamp:time }

  const id = req.params.id
  try {
    await ProductosController.Update(id,prodUpdated);

    const productos = await ProductosController.getAll();
    res.json({productos})
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
    res.json({productos})
   }
   catch (error) {
    res.json({msg: "ERROR AL ELIMINAR EL PRODUCTO"})
  }
})




////////////////////////timestamp

function getClockTime(){
  let now    = new Date();
  let hour   = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth()+1;
  let year = now.getFullYear();
  let ap = "AM";

  if (hour   > 11) { ap = "PM";             }
  if (hour   > 12) { hour = hour - 12;      }
  if (hour   == 0) { hour = 12;             }
  if (hour   < 10) { hour   = "0" + hour;   }
  if (minute < 10) { minute = "0" + minute; }
  if (second < 10) { second = "0" + second; }

  var DateAndHour = `${day}/${month}/${year}-${hour}:${minute}:${second}-${ap}`;
  return DateAndHour;
}

module.exports = router;
