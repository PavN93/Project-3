const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path:"../.env" });
const path = require("path")


const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || "mongodb://localhost/plantica";

// Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}
app.use("/api", require("./routes/api-routes"));
app.use("/", require("./routes/html-routes"));

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