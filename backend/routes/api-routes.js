const router = require('express').Router();
const bcrypt = require('bcrypt');
const { validateSingup, validateLogin } = require('../validators/authValidators');

const User = require('../models/user');
const Image = require('../models/image');
const Plant = require('../models/plant');

router.post('/save', async (req, res) => {
  try {
    // const saved = await User.create(req.body);
    // console.log('Saved to database:', saved);
    res.json({ message: 'User successfully saved in database.' });
  } catch (err) {
    console.log('Error on save:', err);
    res.json({ error: `could not save: ${err}` });
  }
});

router.post('/signup', async (req, res) => {

  const { value, error } = validateSingup.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, payload: { message: error.message } });
  }

  const { username, password, email } = value;

  try {
    const user = await User.findOne({ 'email': email });

    if (user) {
      return res
        .status(401)
        .json({ success: false, payload: { message: 'User already exists' } });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hash
    });

    if (!newUser) {
      return res
      .status(500)
      .json({ success: false, payload: { message: 'Error on save new user' } });
    }
    
    return res
    .status(200)
    .json({ success: true, payload: { username, email } });
  } catch (err) {
    console.log('error on signup:', err);
    return res
      .status(500)
      .json({ success: false, payload: { message: 'Internal server error' } });
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