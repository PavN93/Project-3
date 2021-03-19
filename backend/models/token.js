const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  userId: String, // points to user which holds the token
  token: String,
})

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;

