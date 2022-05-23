import { Router } from 'express';
import { getCarritos, createCarrito, agregarProducto, getCarritoById, deleteCarrito} from '../controllers/carritos';
const router = Router();

router.get('/', getCarritos);

router.post('/',  createCarrito);

router.post('/:id/productos' , agregarProducto)

router.get('/:id', getCarritoById);

router.delete('/:id', deleteCarrito);

export default router;
