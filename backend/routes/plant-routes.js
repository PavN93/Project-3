const auth = require("../middleware/auth");
const router = require("express").Router();

// Mongoose models
const Plant = require("../models/plant");

// save new plant
router.post("/save", auth, async (req, res) => {
  try {
    const { trefleId, commonName, imageURL, sciName, familyName, occurence } = req.body
    const saveToDb = {
      trefleId,
      userId: req.user._id,
      commonName,
      imageURL,
      sciName,
      familyName,
      occurence
    }
    const isAlreadySaved = await Plant.findOne({ "trefleId": trefleId });
    if (isAlreadySaved) {
      return res
        .status(409)
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

// remove plant from db
router.post("/remove", auth, async (req, res) => {
  const { trefleId } = req.body;
  try {
    const plantToRemove = await Plant.findOne({ "trefleId": trefleId });
    if (!plantToRemove) {
      return res
        .status(500)
        .json({ success: false, payload: { message: "No such plant in database" } })
    }
    const { _id } = plantToRemove
    const removed = await Plant.findByIdAndDelete(_id);
    res
      .status(200)
      .json({
        success: true, payload: {
          message: "plant successfully removed",
          removed
        }
      });
  } catch (err) {
    console.log("Error on save:", err);
    res.json({ success: false, payload: { message: "Internal server error" } });
  }
});

// fetch all plants for user
router.get("/collection", auth, async (req, res) => {
  try {
    const { _id } = req.user;
    const collection = await Plant.find({ "userId": _id });
    res
      .status(200)
      .json({
        success: true,
        payload: {
          collection
        }
      })
  } catch (err) {
    console.log("Error on save:", err);
    res.json({ success: false, payload: { message: "Internal server error" } });
  }
});

module.exports = router;