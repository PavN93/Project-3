const User = require('../models/user');

const router = require('express').Router();

router.get('/test', (req, res) => {
  // User.create({
  //   username: '',
  //   password: '',
  //   bio: '',
  //   avatar: ''
  // });
  console.log('endpoint hit');
  res.json({ message: 'Home Page' });
});


module.exports = router;