const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  userId: String, // points to specific user
  name: String,
  description: String,
  occurence: String,
  // any more details that treffle.io provides
})

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;


