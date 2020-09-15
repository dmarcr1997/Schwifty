import { Router } from 'express';
import controllers from './people.controllers.js';

const router = Router();

router.route('/')
    .get(controllers.getMessages)
    .post(controllers.createMessage);
   
router.route('/:id')
    .get(controller.getMessages);

export default router