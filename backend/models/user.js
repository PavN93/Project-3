const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is required',
    unique
  },
  password: String,
  bio: String,
  avatar: String, // points to images collection
})

const User = mongoose.model("User", userSchema);

module.exports = User;


