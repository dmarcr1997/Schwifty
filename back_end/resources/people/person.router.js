import Router from 'express';
import controllers from './person.controllers.js';

const router = Router();

router.route('/')
    .get(controllers.getMany)
    .post(controllers.createOne);
   
router.route('/:id')
    .get(controllers.getOne);
router.route('/admin/call/:id')
    .get(controllers.call);
export default router