const Joi = require('joi');

const validateSingup = Joi.object({
  username: Joi.string()
  .min(5)
  .max(30)
  .trim()
  .required(),
  password: Joi.string()
  .min(6)
  .max(255)
  .trim()
  .required(),
  email: Joi.string()
  .email({
    tlds: { allow: false }
  })
  .required(),
})

const validateLogin = Joi.object({
  email: Joi.string()
  .email({
    tlds: { allow: false }
  })
  .required(),
  password: Joi.string()
  .min(6)
  .max(255)
  .trim()
  .required(),
})

// module.exports.validateSingup = validateSingup;
// module.exports.validateLogin = validateLogin;
module.exports = {
  validateSingup,
  validateLogin
}