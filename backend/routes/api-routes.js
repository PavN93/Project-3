const User = require('../models/user');
const Image = require('../models/image');
const Plant = require('../models/plant');

const router = require('express').Router();
const { validateSingup, validateLogin } = require('../validators/authValidators');

router.post('/save', async ({ body }, res) => {
  try {
    // const saved = await User.create(body);
    // console.log('Saved to database:', saved);
    res.json({ message: 'User successfully saved in database.' });
  } catch (err) {
    console.log('Error on save:', err);
    res.json({ error: `could not save: ${err}` });
  }
});

router.post('/signup', (req, res) => {
  try {
    console.log('singup data:', req.body);
    const { values, error } = validateSingup.validate(req.body);
    if (error) {
      return res.json({
        success: false, payload: {
          message: error.message
        }
      });
    }
    // save to database
    res.json({ success: true, payload: values });
  } catch (err) {
    console.log('error on signup:', err);
  }
});

router.post('/login', (req, res) => {
  try {
    console.log('login data:', req.body);
    const { values, error } = validateLogin.validate(req.body);
    if (error) {
      return res.json({
        success: false, payload: {
          message: error.message
        }
      });
    }
    res.json({ success: true, payload: values });
  } catch (err) {
    console.log('error on login:', err);
  }
})

router.post('/status', (req, res) => {
  try {
    console.log('login data:', req.body);
    const { values, error } = validateLogin.validate(req.body);
    if (error) {
      return res.json({
        success: false, payload: {
          message: error.message
        }
      });
    }
    res.json({ success: true, payload: values });
  } catch (err) {
    console.log('error on login:', err);
  }
})


module.exports = router;