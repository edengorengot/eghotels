/*=== Server ===*/
/* Module dependencies */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/* Initialize Express */
const app = express();


/* Apply Middleware */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'build'))); // שימוש בבילד מריאקט


/* Routing */
app.use('/', indexRouter);
app.use('/users', usersRouter);


/* export express */
module.exports = app;
