const User = require('../models/user');

const router = require('express').Router();

router.post('/save', async ({ body }, res) => {
  try {
    const saved = await User.create(body);
    console.log('Saved to database:', saved);
    res.json({ message: 'User successfully saved in database.' });
  } catch (err) {
    console.log('Error on save:', err);
    res.json({ error: `could not save: ${err}`});
  }
});

router.post('/signup', (req, res) => {
  try {
    console.log('singup data:', req.body);
    res.json({ message: 'user registered'});
  } catch (err) {
    console.log('error on signup:', err);
  }
});

router.post('/login', (req, res) => {
  try {
    console.log('login data:', req.body);
    res.json({ message: 'logged in'});
  } catch (err) {
    console.log('error on login:', err);
    res.json({ message: 'error on login'})
  }
})


module.exports = router;