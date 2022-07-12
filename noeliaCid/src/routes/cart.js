import { Router } from 'express'
import CartsController from '../controllers/cartsController'

const router = Router()

router.get('/:id', CartsController.hasIdParam, CartsController.getCart)
router.put('/:id',CartsController.hasIdParam, CartsController.updateCart)
router.delete('/:id', CartsController.hasIdParam, CartsController.emptyCart)
router.get('/buy/:id', CartsController.hasIdParam, CartsController.buy)

export default router
