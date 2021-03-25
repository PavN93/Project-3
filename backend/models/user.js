const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is required',
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
  currentCity: {
    type: String,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    trim: true
  },
  avatar: String, // points to images collection
})

const User = mongoose.model("User", userSchema);

module.exports = User;


