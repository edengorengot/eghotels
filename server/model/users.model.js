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
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    telephone: {
        type: String,
        required: false,
        minlength: 9,
        maxlength: 9,
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
const selectUserByID = (_id) => {
    return Users.findById({_id}).select('-password');
};

const selectUserByEmail = (email) => {
    return Users.find({email}).select('-password');
};

const insertNewUser = (firstName, lastName, email, mobilePhone, telephone, password, profileImg) => {
    let user = new Users({
        firstName,
        lastName,
        email,
        mobilePhone,
        telephone,
        password,
        profileImg
    });
    return user.save();
};

const deleteUser = (_id) => {
    // console.log(_id);
    console.log(Users.findById({_id}));
    // Users.findByIdAndDelete({_id});
    // Users.find
};

const deleteAll = () => {
    Users.deleteMany({});
};

const updateUser = (id) => {
    // Users.find({email});

};



module.exports = {
    selectUserByID,
    selectUserByEmail,
    insertNewUser,
    deleteUser,
    deleteAll,
    updateUser,
};