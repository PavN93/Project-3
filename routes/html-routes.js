const router = require('express').Router();

router.get('/test', (req, res) => {
  console.log('endpoint hit');
  res.json({ message: 'Home Page' });
});

module.exports = router;