/* Password Encryption and Use */
const bcrypt = require('bcryptjs');

const createHash = (password) => {
    return bcrypt.hash(password, 10);
};

const compareHash = (password, hash) => {
    return bcrypt.compare(password, hash);
};

module.exports = {
    createHash,
    compareHash,
};
