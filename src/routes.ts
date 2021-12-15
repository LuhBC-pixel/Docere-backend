import { Router } from 'express';
import { DocereController } from './controller/DocereController';
const router = Router();

router.get('/', DocereController);

export { router };
