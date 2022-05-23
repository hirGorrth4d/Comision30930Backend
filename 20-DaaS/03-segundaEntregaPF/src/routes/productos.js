import { Router } from 'express';
import {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct,checkBodyProduct,} from '../controllers/productos';

const router = Router();

router.get('/', getAllProducts);

router.post('/', checkBodyProduct, createProduct);

 router.get('/:id', getProductById);

 router.put('/:id', checkBodyProduct, updateProduct);

 router.delete('/:id', deleteProduct);

export default router;
