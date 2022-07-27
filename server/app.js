/*=== Server ===*/
/* Module dependencies */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api.routes');
// const usersRouter = require('./routes/api/users.routes');

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
app.use('/api', apiRouter);
// app.use('/api/users', usersRouter);


/* export express */
module.exports = app;
