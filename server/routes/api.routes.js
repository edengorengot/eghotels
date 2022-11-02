/* Import */
const express = require('express');
const router = express.Router();

/* Middleware */
const authMiddleware = require('../middleware/auth.middleware');

/* Routers */
const usersRouter = require('./api/users.routes');
const hotelsRouter = require('./api/hotels.routes');
const reservationsRouter = require('./api/reservations.routes');

/* Routes */
router.use('/users', usersRouter);
router.use('/hotels', hotelsRouter);
router.use('/reservations', reservationsRouter);

module.exports = router;