const router = require('express').Router();

router.get('/test', (req, res) => {
  console.log('get endpoint hit (html-routes), triggered after page load');
  res.json({ message: 'Home page' });
});


module.exports = router;