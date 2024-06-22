const express = require('express');
const { celebrate, Segments } = require('celebrate');
const { signupSchema, loginSchema } = require('../validators/authValidator');
const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', celebrate({
  [Segments.BODY]: signupSchema,
}), signup);

router.post('/login', celebrate({
  [Segments.BODY]: loginSchema,
}), login);


module.exports = router;
