const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is required',
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: 'Password cannot be empty',
  },
  email: {
    type: String,
    trim: true,
    required: 'email is required',
    unique: true
  },
  location: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  avatar: String, // points to images collection
})

const User = mongoose.model("User", userSchema);

module.exports = User;


