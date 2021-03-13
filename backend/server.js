const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path:'../.env' });
const cors = require('cors');


const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || 'mongodb://localhost/plantica';

// Middleware
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes/api-routes'));
app.use('/', require('./routes/html-routes'));

// Connect to db, start server, handle error
(async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('DB connected');
    app.listen(PORT);
    console.log('Server active on port:', PORT);
  } catch (error) {
    console.log('Error on app launch:', error);
    process.exit(1);
  }
})();