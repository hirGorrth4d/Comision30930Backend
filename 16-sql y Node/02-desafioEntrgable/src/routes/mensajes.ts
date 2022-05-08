import {Router, Request, Response} from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'Todos los mensajes'
    })
})

router.post('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'Nuevo mensaje'
    })
})

export default router