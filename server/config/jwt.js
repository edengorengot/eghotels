const jwt = require('jsonwebtoken');

const createToken = (data) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            data,
            process.env.JWTSECRETKEY,
            { expiresIn: "3d" },
            (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                };
            }
        );
    });
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.JWTSECRETKEY,
            (err, dataFromToken) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(dataFromToken);
                };
            }
        );
    });
};

module.exports = {
    createToken,
    verifyToken
};