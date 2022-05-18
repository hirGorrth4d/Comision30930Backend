import { Router } from 'express';
import {getAllMsg, sendMsg} from '../controllers/mensajes';
const router = Router();

router.get('/', getAllMsg);

router.post('/', sendMsg);

export default router;
