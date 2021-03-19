const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateSingup, validateLogin } = require('../validators/authValidators');

// Mongoose models
const User = require('../models/user');

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
        .json({ success: false, payload: { message: 'This email has already been registered' } });
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
        .json({ success: false, payload: { message: 'Error while saving new user to database' } });
    }

    return res
      .status(200)
      .json({ success: true, payload: { username, email } });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, payload: { message: 'Internal server error - please try again later' } });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { value, error } = validateLogin.validate(req.body);

  if (error) {
    return res
      .status(400)
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
        .json({ success: false, payload: { message: "Credentials does't match" } });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res
        .status(401)
        .json({ success: false, payload: { message: "Credentials doesn't match" } });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '50d' });
    if (!token) {
      return res
        .status(500)
        .json({ payload: { message: 'Internal server error, please try again later' } });
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
      .json({ success: false, payload: { message: 'Internal server error, please try again later' } });
  }
});

// Logout
router.post('/logout', async (req, res) => {
  const { token, username, email, _id } = req.body
  console.log('logging out', username);
  res.json({ success: true });
});


module.exports = router;