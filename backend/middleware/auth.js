const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if(!token) {
    return res
    .status(401)
    .json({
      success: false,
      payload: { message: "Access denied: no token"},
    });
  }

  const decoded = jwt.verify(token, process.env.SECRET);

  try {
    const user = await User.findById(decoded.id);
    if (!user) {
      return res
      .status(404)
      .json({
        success: false,
        payload: { message: "User does not exist" }
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("Error on auth:", err);
    return res
    .status(500)
    .json({
      success: false,
      payload: { message: "Internal server error" }
    });
  }
}