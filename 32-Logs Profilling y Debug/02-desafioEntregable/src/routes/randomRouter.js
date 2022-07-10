import { Router } from "express";
import { fork } from 'child_process'
import path from 'path'
import {logger} from '../utils/logger'


const scriptPath = path.resolve(__dirname, '../utils/operacion.js');
 
const router = Router();

router.get('/randoms', (req, res) => {
    try {
        logger.info('RUTA: /api/randoms || METODO: get')
        const cant = req.query.cant || 100000000

        const computo  = fork(scriptPath)
        computo.send(cant)

        computo.on('message', (resultado) => {
            res.json({
                result: resultado
            })
        })
        
    } catch (error) {
        logger.error('RUTA: /api/randoms || METODO: get')
    }
})




module.exports = router;