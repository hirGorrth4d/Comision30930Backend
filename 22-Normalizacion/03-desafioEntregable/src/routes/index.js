import { Router } from 'express';
import productsRouter from './productos'
import mensajesRouter from './mensajes';

const router = Router();

router.use('/productos', productsRouter);
router.use('/mensajes', mensajesRouter);

export default router;
