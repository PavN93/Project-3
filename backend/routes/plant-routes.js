const auth = require("../middleware/auth");
const router = require("express").Router();
// const fetch = require("node-fetch");

// Mongoose models
// const User = require("../models/user");
// const Image = require("../models/image");
const Plant = require("../models/plant");

// save new plant
router.post("/save", auth, async (req, res) => {
  const { _id, sciName, familyName, occurence } = req.body
  const saveToDb = {
    _id,
    userId: req.user._id,
    sciName,
    familyName,
    occurence
  }
  try {
    const isAlreadySaved = await Plant.findOne({ "_id": _id });
    if (isAlreadySaved) {
      return res
        .status(401)
        .json({ success: false, payload: { message: 'Plant already saved' } });
    }
    const savedPlant = await Plant.create(saveToDb);
    if (!savedPlant) {
      return res
        .status(500)
        .json({ success: false, payload: { message: 'Error while saving plant' } });
    }
    return res
      .status(200)
      .json({ success: true, payload: { savedPlant } });
  } catch (err) {
    console.log("Error on save:", err);
    res.json({ success: false, payload: { message: "Internal server error" } });
  }
});

// fetch all plants for user
router.post("/collection", auth, async (req, res) => {
  try {
    console.log("fetching plants...");
    const { _id } = req.user;
    const collection = Plant.find({ "userId": _id})
    console.log(collection);
  } catch (err) {
    console.log("Error on save:", err);
    res.json({ success: false, payload: { message: "Internal server error" } });
  }
});




module.exports = router;