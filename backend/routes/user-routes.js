const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateSignup, validateLogin } = require('../validators/authValidators');

// Mongoose models
const Image = require('../models/image');
const User = require('../models/user');
const auth = require('../middleware/auth');

// Register new user
router.post('/signup', async (req, res) => {
  const { value, error } = validateSignup.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, payload: { message: error.message } });
  }

  const { username, password, email, currentCity, dateOfBirth } = value;

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
      currentCity,
      dateOfBirth,
      password: hash
    });

    if (!newUser) {
      return res
        .status(500)
        .json({ success: false, payload: { message: 'Error while saving new user to database' } });
    }

    return res
      .status(200)
      .json({ success: true, payload: { username, email, currentCity, dateOfBirth } });
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
    let profilePic = await Image.findOne({ "userId": user._id });
    if(!profilePic) {
      profilePic = 'http://res.cloudinary.com/pavn93/image/upload/v1616753349/plantica/eegfqvugdvvzndicby9q.png';
    }
    console.log(profilePic);
    return res
      .status(200)
      .json({
        success: true,
        payload: {
          token, user: {
            username: user.username,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            currentCity: user.currentCity,
            _id: user._id,
            profilePic: profilePic.url
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
router.get('/logout', auth, async (req, res) => {
  const { username } = req.user;
  console.log("logging out", username);
  res.json({ success: true });
});

// fetch all users with a Plantica account
router.get("/members", auth, async (req, res) => {
  try {
    const members = await User.find();
    res.json(members)
  } catch (err) {
    console.log("Error on save:", err);
    res.json({ success: false, payload: { message: "Internal server error" } });
  }
});

router.post('/search', auth, async (req, res) => {
  try {
    const { username } = req.body;
    const searchedUsers = await User.find({ "username": username }, "username currentCity, imageURL, collections");
    res
      .status(200)
      .json({ success: true, payload: { searchedUsers } });
  } catch (err) {
    console.log("Error on save:", err);
    res.json({ success: false, payload: { message: "Internal server error" } });
  }
})


module.exports = router;