import {Router, Request, Response} from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'Todos los productos'
    })
})
router.get('/:id', (req: Request, res: Response) =>{
    res.json({
        msg: 'Un producto por ID'
    })
})

router.post('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'Nuevo producto'
    })
})

router.put('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'Modifico un producto'
    })
})

router.delete('/:id', (req: Request, res: Response) =>{
    res.json({
        msg: 'Borro un producto'
    })
})

export default router