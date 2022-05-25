import { Router } from 'express';
import { getCarritos, createCarrito, agregarProducto, getCarritoById, deleteCarrito} from '../controllers/carritos';
const router = Router();

router.get('/', getCarritos);

router.get('/:id', getCarritoById);

router.post('/',  createCarrito);

router.put('/:idCarrito/:idProducto' , agregarProducto)

router.delete('/:id', deleteCarrito);

export default router;
