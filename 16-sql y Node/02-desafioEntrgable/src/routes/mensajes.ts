import {Router, Request, Response} from 'express'
import { getAllMsgs } from '../controller/messagges'


const router = Router()

router.get('/', async(req: Request, res: Response) =>{

    const data = await getAllMsgs()
    res.json({
        msg: 'Todos los mensajes',
        data
    })
})

router.post('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'Nuevo mensaje'
    })
})

export default router