import { Router } from 'express';
import { showDocere } from './controller/DocereController';
const router = Router();

router.get('/', showDocere);

export { router };
