const jwt = require('../config/jwt');

const authMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.token;

        if (!token) {
            res.status(401).send('Access denied. No token provided.');
            return;
        };

        req.userData = await jwt.verifyToken(token);
        next();
    } catch (err) {
        res.status(401).json({ err: "invalid token" });
    };
};

module.exports = authMiddleware;