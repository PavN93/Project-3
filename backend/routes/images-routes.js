const router = require('express').Router();
const { cloudinary } = require('../utils/cloudinary.js');
const auth = require('../middleware/auth');

// Mongoose models
const Image = require('../models/image');

router.get('/imagedisplay', auth, async (req, res) => {
  try {
    const { _id } = req.user;
    const displaypic = await Image.find({ "userId": _id });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

router.post('/upload', auth, async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "plantica"
    });
    const { plantId, userId, name, } = req.body
    const saveToDb = {
      plantId: req.plant_id,
      userId: req.user._id,
      url: uploadResponse.url,
    }
    const savedImage = await Image.create(saveToDb);
    if (!savedImage) {
      return res
        .status(500)
        .json({ success: false, payload: { message: 'Error while saving image' } });
    }
    res.json({ url: uploadResponse.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
})

module.exports = router;