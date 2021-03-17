const Joi = require('joi');

const validateSingupObject = Joi.object({
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
      tlds: { allow: false }
    })
    .required(),
});

const validateLoginObject = Joi.object({
  email: Joi.string()
    .trim()
    .email({
      tlds: { allow: false }
    })
    .required(),
  password: Joi.string()
    .trim()
    .min(6)
    .max(255)
    .required(),
});

// const validateUsername = Joi.string()
//   .trim()
//   .min(5)
//   .max(30)
//   .required();

// const validateEmail = Joi.string()
//   .trim()
//   .email({
//     tlds: { allow: false }
//   })
//   .required();

export { validateSingupObject, validateLoginObject };