
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path:'../.env' });
const cors = require('cors');


const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path:"../.env" });
const path = require("path")


const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || "mongodb://localhost/plantica";

// Middleware
const app = express();

app.use(express.urlencoded({limit:'50mb', extended: true }));
app.use(express.json({limit:'50mb'}));
app.use('/api/user', require('./routes/user-routes'));
app.use('/api/plant', require('./routes/plant-routes'));
app.use('/api', require('./routes/api-routes'));
app.use('/', require('./routes/html-routes'));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Connect to db, start server, handle error
(async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log("DB connected");
    app.listen(PORT);
    console.log("Server active on port:", PORT);
  } catch (error) {
    console.log("Error on app launch:", error);
    process.exit(1);
  }
})();