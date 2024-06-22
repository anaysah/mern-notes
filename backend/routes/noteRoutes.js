const express = require('express');
const { celebrate, Segments } = require('celebrate');
const { addNoteSchema } = require('../validators/noteValidator');
const { addNote } = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protect the route with authentication middleware
router.post('/add-note', authMiddleware, celebrate({
  [Segments.BODY]: addNoteSchema,
}), addNote);

module.exports = router;
