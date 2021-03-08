const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  userId: String, // points to specific user
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  occurence: {
    type: String,
    trim: true
  },
  // any more details that treffle.io provides
})

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;


