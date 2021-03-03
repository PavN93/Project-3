const express = require('express');
// const mongoose = require('mongoose');
require('dotenv').config({ path:'../.env' });


const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || 'mongodb://localhost/workout';

// Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./routes/html-routes'));

// Connect to db, start server, handle error
(async () => {
  try {
    // await mongoose.connect(db, {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    //   useUnifiedTopology: true
    // });
    app.listen(PORT);
    console.log('Server active on port:', PORT);
  } catch (error) {
    console.log('Error on app launch:', error);
    process.exit(1);
  }
})();