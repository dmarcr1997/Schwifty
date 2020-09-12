import mongoose from 'mongoose';
import express from 'express';

const router = express.Router();

import messageSchema from '../Models/Message.js';

// CREATE MESSAGE
router.route('/create-message').post((req, res, next) => {
  messageSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Messages
router.route('/:message_id').get((req, res) => {
  messageSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/:message_id').get((req, res) => {
  messageSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Delete Message
router.route('/delete-message/:id').delete((req, res, next) => {
  messageSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

export default router