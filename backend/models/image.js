const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  plantId: String, // points to a plant from a photo
  userId: String, // serves as avatar for user (as ID)
  name: {
    type: String,
    trim: true
  },
  url: String,
})

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;


