const router = require('express').Router();
const fetch = require('node-fetch');
const {cloudinary} =  require ('../utils/cloudinary.js');

// Mongoose models
const User = require('../models/user');
const Image = require('../models/image');

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
  const queryURL = `https://trefle.io/api/v1/plants/search?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw&q=${search}`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});
 

router.post('/images',async(req,res)=>{
  try {
    const fileStr = req.body.data;
    console.log(fileStr)
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset:"plantica"
    });
    console.log(uploadResponse);
    res.json({ msg: 'yaya' });
} catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
}

});
 

router.get('/getPlantByID/:id', async (req, res) => {
  const id = req.params.id
  const queryURL = `https://trefle.io/api/v1/plants/${id}?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});

router.get('/getRandomPlant/', async (req, res) => {
  const results = req.params
  const queryURL = `https://trefle.io/api/v1/plants?token=ygxSP6ZBnAfDFaBTRKTtVkg7G56ajDSjvz5LkVnjHfw`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});


module.exports = router;