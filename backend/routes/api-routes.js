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


module.exports = router;