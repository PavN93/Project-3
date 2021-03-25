const Joi = require('joi');

const validateSignup = Joi.object({
  username: Joi.string()
  .trim()
  .min(5)
  .max(30)
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
  currentCity: Joi.string()
  .trim()
  .min(3)
  .max(50),
  dateOfBirth: Joi.date()
  .max('1-1-2020')
  .iso(),
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

module.exports = {
  validateSignup,
  validateLogin
}