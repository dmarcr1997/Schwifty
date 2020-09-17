import { Router } from 'express';
import controllers from './people.controllers.js';

const router = Router();

router.route('/')
    .get(controllers.getMany)
    .post(controllers.createOne);
   
router.route('/:id')
    .get(controllers.getOne);

export default router