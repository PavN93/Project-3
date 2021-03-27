const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  // trefleId is an id provided by trefle, it exists along with mongo _id
  trefleId: {
    type: String,
    unique: true
  },
  userId: String, // points to specific user
  imageURL: {
    type: String,
  },
  commonName: {
    type: String,
    trim: true
  },
  sciName: {
    type: String,
    trim: true
  },
  familyName: {
    type: String,
    trim: true
  },
  occurence: {
    type: String,
    trim: true
  },
})

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;


