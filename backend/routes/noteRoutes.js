const express = require('express');
const { celebrate, Segments } = require('celebrate');
const { noteSchema } = require('../validators/noteValidator');
const { addNote, editNote, getNotes, deleteNote, pinNote } = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');
const Joi = require('joi');

const router = express.Router();

// Protect the route with authentication middleware
router.post('/add-note', authMiddleware, celebrate({
  [Segments.BODY]: noteSchema,
}), addNote);

router.put('/edit-note/:id', authMiddleware, celebrate({
  [Segments.BODY]: noteSchema,
}), editNote);

router.get('/notes', authMiddleware, getNotes);

router.delete('/delete-note/:id', authMiddleware, deleteNote);

router.patch('/pin-note/:id', authMiddleware, celebrate({
  [Segments.BODY]: Joi.object({
    isPinned: Joi.boolean().required()
  })
}), pinNote);

module.exports = router;