const jwt = require('../config/jwt');

const adminMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.token;
        let admin = req.headers.admin;

        if (!token) {
            res.status(401).send('Access denied. No token provided.');
            return;
        };

        if (!admin) {
            res.status(401).send('Access denied. No admin tier provided.');
        }

        req.userData = {
            token: await jwt.verifyToken(token),
            admin: admin,
        };
        next();
    } catch (err) {
        res.status(401).json({ err: "invalid token or error with the admin access" });
    };
};

module.exports = adminMiddleware;