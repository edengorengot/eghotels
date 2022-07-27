/* Import */
const express = require('express');
const router = express.Router();

/* Middleware */
const authMiddleware = require('../middleware/auth.middleware');

/* Routers */
const usersRouter = require('./api/users.routes');

/* Routes */
router.use('/users', usersRouter);

module.exports = router;