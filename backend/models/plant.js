const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  trefleId: {
    type: String,
    required: "Plant ID is required",
    unique: true
  },
  userId: String, // points to specific user
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
  // description: {
  //   type: String,
  //   trim: true
  // },
  // any more details that treffle.io provides
})

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;


