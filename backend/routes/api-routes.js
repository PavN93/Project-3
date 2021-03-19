const router = require('express').Router();
const fetch = require('node-fetch');

// Mongoose models
const User = require('../models/user');
const { response, json } = require('express');
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

router.get('/getplants/:search', async (req, res) => {
  const search = req.params.search
  console.log("hello world")
  const queryURL = `https://trefle.io/api/v1/plants/search?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw&q=${search}`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});


module.exports = router;