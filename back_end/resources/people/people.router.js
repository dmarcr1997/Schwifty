import { Router } from 'express';
import controllers from './people.controllers.js';

const router = Router();

router.route('/')
    .get(controllers.getPeople)
    .post(controllers.createPeople);
   
router.route('/:id')
    .get(controller.getPerson);

export default router