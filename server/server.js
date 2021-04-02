const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const passport = require('passport');
const passportLibrary = require('passport');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcryptjs');
const expressSession = require("express-session");
const bodyParser = require("body-parser");

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

const usersRouter = require('./routes/users');
// const subjectsRouter = require('./routes/subjects');
// const projectsRouter = require('./routes/projects');

// app.use('/subjects', subjectsRouter);
app.use('/users', usersRouter);
// app.use('/projects', projectsRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});
