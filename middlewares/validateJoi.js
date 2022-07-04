const joi = require('joi');

const validateName = joi.object({
  name: joi
    .string()
    .min(5)
    .required()
    .messages({
      'string.min': '"name" length must be at least 5 characters long',
      'any.required': '"name" is required',
    }),
});

const validateJoi = (req, res, next) => {
  const { error } = validateName.validate(req.body, { abortEarly: false });
  console.log('joi', error);

  if (error) {
    const messages = error.details[0].message;

    const status = messages.includes('required') ? 400 : 422;
    return res.status(status).json({ message: messages });
  }
  next();
};

module.exports = validateJoi;
