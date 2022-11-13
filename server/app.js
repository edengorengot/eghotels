/*=== Server ===*/
/* Module dependencies */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api.routes');

/* Initialize Express */
const app = express();


/* Apply Middleware */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/* Routing */
app.use('/', indexRouter);
app.use('/api', apiRouter);


/* export express */
module.exports = app;
