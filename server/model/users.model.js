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
    reservations: [],
    clubPoints: 0,

    preferences: {
        accessibleRoom: false,
        accessibleParking: false,
        accessibleCar: {
            brand: "",
            model: "",
            color: "",
            carNumber: ""
        },
        twinBeds: false,
        doubleBed: false,
        balcony: false,
        bathtub: false,
        showerStall: false,
        DoorToDoor: false,
        adjoiningRooms: false,
        interconnectingRooms: false,
        farFromElevator: false,
        closeToElevator: false,
        quietRoom: false,
        highFloor: false,
        lowFloor: false,
        preferredFloor: "",
        shabbatObservant: false,
        preferBetterView: false,
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
    // return Users.find({email}).select('-password');
    return Users.find({email});
};

const selectUserByMobilePhone = (mobilePhone) => {
    // return Users.find({mobilePhone}).select('-password');
    return Users.find({mobilePhone});
};

const selectALLUsers = () => {
    return Users.find({}).select('-password');
};

const insertNewUser = (firstName, lastName, email, mobilePhone, telephone, password) => {
    let user = new Users({
        firstName,
        lastName,
        email,
        mobilePhone,
        telephone,
        password
    });
    return user.save();
};

const deleteUser = (id) => {
    return Users.findOneAndDelete({ _id: id }, (err, deletedUser) => {
        if (err) {
            console.log("Error:", err);
            // return err;
        } else{
            console.log("Deleted:", deletedUser);
        }
    });
};

const deleteAll = () => {
    return Users.deleteMany({});
};

const updateUserData = (id, newUserData) => {
    return Users.findByIdAndUpdate(id, newUserData);
};

module.exports = {
    selectUserByID,
    selectUserByEmail,
    selectUserByMobilePhone,
    selectALLUsers,
    insertNewUser,
    deleteUser,
    deleteAll,
    updateUserData,
};