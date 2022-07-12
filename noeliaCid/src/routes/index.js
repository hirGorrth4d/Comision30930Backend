import { Router } from 'express';
import carts from './cart';
import products from './products'
import auth from './auth';

const router = Router();

router.use('/carts', carts);
router.use('/products', products);
router.use('/auth', auth)

router.get("/",(req, res) => {
  res.render('layouts/main')
 });
 

export default router;
