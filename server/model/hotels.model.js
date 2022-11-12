const mongoose = require("mongoose");



const hotelSchema = new mongoose.Schema({
    hotelId: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 8,
        unique: true,
    },
    hotelName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        unique: true,
    },

    generalInformation: {
        type: Object,
        default: {
            email: "",
            telephone: "",
            address: "",
            city: "",
            country: "",
            region: "",
        },
    },

    checkInAndOut: {
        type: Object,
        default: {
            checkInTime: "15:00",
            checkInTimeSaterdayAndHoliday: "18:00",
            checkInTimePeakTime: "18:00",
            checkInTimeSpecial: "12:00",
            checkOutTime: "12:00",
            checkOutTimeSaterdayAndHoliday: "15:00",
            checkOutTimePeakTime: "12:00",
            checkOutTimeSpecial: "12:00",
        },
    },

    cancellationPolicy: {
        type: Object,
        default: {
            freeCancellationPolicyDays: 2,
            freeCancellationPolicyDaysPeak: 7,
            freeCancellationPolicyDaysDoublePeak: 14,
            freeCancellationPolicyDaysTopPeak: 30,
        },
    },

    accommodationArrangement: {
        type: Array,
        default: ["RO", "BB", "HB", "FB"],
    }, 

    mealPrices: {
        type: Object,
        default: {
            breakfastForAdult: 100,
            breakfastForKid: 50,
            dinnerForAdult: 200,
            dinnerForKid: 100,
            lunchForAdult: 150,
            lunchForKid: 75,
        },
    },

    pricePerStage: {
        type: Number,
        default: 100,
    },

    availability: {
        type: Object,
        default: {},
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

/* Connection to Mongo DB */
const Hotels = mongoose.model("Hotels", hotelSchema);


/* Functions */
const insertNewHotel = (hotelId, hotelName) => {
    let hotel = new Hotels({
        hotelId,
        hotelName,
    });

    return hotel.save();
};

const selectHotelByID = (_id) => {
    return Hotels.findById({_id});
};

const selectHotelByHotelID = (hotelId) => {
    return Hotels.find({hotelId});
};

const selectHotelByName = (hotelName) => {
    return Hotels.find({hotelName}).exec();
};

const selectAllHotels = async () => {
    let allHotels = await Hotels.find({});
    let filletedHotels = [];

    allHotels.forEach(element => {
        let shortenHotel = {
            id: element._id,
            hotelId: element.hotelId,
            hotelName: element.hotelName,
        };
        
        filletedHotels.push(shortenHotel);
    });

    return filletedHotels;
};

const updateHotelData = (id, newHotelData) => {
    return Hotels.findByIdAndUpdate(id, newHotelData);
};

const deleteHotel = async (id) => {
    return await Hotels.findOneAndDelete({ _id: id }, (err, deletedHotel) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Deleted:", deletedHotel);
        };
    });

    // return await Hotels.findByIdAndDelete(id, (err, deletedHotel) => {
    //     if (err) {
    //         console.log("Error:", err);
    //     } else {
    //         console.log("Deleted:", deletedHotel);
    //     };
    // });
};

const deleteAllHotels = () => {
    return Hotels.deleteMany({});
};


module.exports = {
    insertNewHotel,
    selectHotelByID,
    selectHotelByHotelID,
    selectHotelByName,
    selectAllHotels,
    updateHotelData,
    deleteHotel,
    deleteAllHotels,
};