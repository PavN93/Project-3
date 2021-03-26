const Joi = require("joi");

const validateSignupObject = Joi.object({
  username: Joi.string()
  .trim()
  .min(5)
  .max(30)
  .required(),
  password: Joi.string()
  .trim()
  .min(6)
  .max(255)
  .required(),
  email: Joi.string()
    .trim()
    .email({
      tlds: { allow: false },
    })
    .required(),
  currentCity: Joi.string()
  .trim()
  .min(3)
  .max(50),
  dateOfBirth: Joi.date()
  .max('1-1-2020')
  .iso(),
});

const validateLoginObject = Joi.object({
  email: Joi.string()
    .trim()
    .email({
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string().trim().min(6).max(255).required(),
});

export { validateSignupObject, validateLoginObject };
