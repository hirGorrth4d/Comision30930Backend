import { Router } from 'express';
import {checkBodyMsg, getAllMsg, sendMsg} from '../controllers/mensajes';
const router = Router();

router.get('/', getAllMsg);

router.post('/', checkBodyMsg, sendMsg);

export default router;
