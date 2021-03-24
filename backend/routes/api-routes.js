const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();


router.get('/getplants/:search', async (req, res) => {
  const apikey = process.env.TREFFLE_API_KEY
  const search = req.params.search
  const queryURL = `https://trefle.io/api/v1/plants/search?token=${apikey}&q=${search}`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});

router.get('/getPlantByID/:id', async (req, res) => {
  const apikeytwo = process.env.TREFFLE_API_KEY_TWO
  const id = req.params.id
  const queryURL = `https://trefle.io/api/v1/plants/${id}?token=${apikeytwo}`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});

router.get('/getRandomPlant/', async (req, res) => {
  const apikeythree = process.env.TREFFLE_API_KEY_THREE
  const results = req.params
  const queryURL = `https://trefle.io/api/v1/plants?token=${apikeythree}`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});


module.exports = router;