const Joi = require('joi');

const noteSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required(),
  isPinned: Joi.boolean().optional(),
  tags: Joi.array().items(Joi.string()).optional()
});

module.exports = { noteSchema };
