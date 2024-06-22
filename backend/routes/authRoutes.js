const express = require('express');
const { celebrate, Segments } = require('celebrate');
const { signupSchema } = require('../validators/authValidator');
const { signup } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', celebrate({
  [Segments.BODY]: signupSchema,
}), signup);

module.exports = router;
