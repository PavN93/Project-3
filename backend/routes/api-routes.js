const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateSingup, validateLogin } = require('../validators/authValidators');

// Mongoose models
const User = require('../models/user');
// const Image = require('../models/image');
// const Plant = require('../models/plant');

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

// Register new user
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

// Login
router.post('/login', async (req, res) => {
  const { value, error } = validateLogin.validate(req.body);

  if (error) {
    return res
      .status
      .json({
        success: false, payload: {
          message: error.message
        }
      });
  }

  const { email, password } = value;
  try {
    const user = await User.findOne({ 'email': email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, payload: { message: "User doesn't exist" } });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res
        .status(401)
        .json({ success: false, payload: { message: 'Password is incorrect' } });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '50d' });
    if (!token) {
      return res
        .status(500)
        .json({ payload: { message: 'Error on token sign' } });
    }
    return res
      .status(200)
      .json({
        success: true,
        payload: {
          token, user: {
            username: user.username,
            email: user.email,
            _id: user._id
          }
        }
      })
  } catch (err) {
    console.log('Error on login:', err);
    return res
      .status(500)
      .json({ success: false, payload: { message: 'Internal server error' } });
  }
});


module.exports = router;