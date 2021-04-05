const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const passport = require('passport');
const passportLibrary = require('passport');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcryptjs');
const session = require("express-session");
const bodyParser = require("body-parser");
const flash = require("connect-flash");


require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Connect flash
  app.use(flash());
  
  // Global variables
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  
  // Routes
  app.use('/users', require('./routes/users.js'));
  
  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT, console.log(`Server running on  ${PORT}`));
  