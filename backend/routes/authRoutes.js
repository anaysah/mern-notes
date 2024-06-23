const express = require('express');
const { celebrate, Segments } = require('celebrate');
const { signupSchema, loginSchema } = require('../validators/authValidator');
const { signup, login, getUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', celebrate({
  [Segments.BODY]: signupSchema,
}), signup);

router.post('/login', celebrate({
  [Segments.BODY]: loginSchema,
}), login);

router.get('/user', authMiddleware, getUser);

module.exports = router;