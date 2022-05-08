import {Router, Request, Response} from "express"
import productosRouter from './productos'
import mensajesRouter from './mensajes'

const router = Router()

router.use('/mensajes', mensajesRouter)

router.use('/productos', productosRouter)

export default router