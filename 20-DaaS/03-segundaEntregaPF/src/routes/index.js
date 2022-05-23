import { Router } from 'express';
import productsRouter from './productos'
import carritosRouter from './carritos';

const router = Router();

router.use('/productos', productsRouter);
router.use('/carrito', carritosRouter);

export default router;
