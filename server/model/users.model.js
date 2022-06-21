const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    mobilePhone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 10,
        unique: true
    },
    telephone: {
        type: String,
        required: false,
        minlength: 9,
        maxlength: 10,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
    },
    profileImg: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 255,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


/* Connection between MongoDB's collection to Mongoose's Schema */
const Users = mongoose.model("Users", usersSchema);


/* Actions */


module.exports = {
    // selectUserByEmail,
    // insertUser,
};