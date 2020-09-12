import mongoose from 'mongoose';
import express from 'express';
const router = express.Router();

// Student Model
import peopleSchema from '../Models/People.js';

// READ Students
router.route('/').get((req, res) => {
  peopleSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/:id').get((req, res) => {
  peopleSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

export default router;