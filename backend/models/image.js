const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  plantId: String, // points to a plant from a photo
  userId: String, // points to a user that the plant comes from
  name: String,
  url: String,
})

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;


