const mongoose = require("mongoose");

// const generalInformationSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         minlength: 5,
//         maxlength: 255,
//     },
//     telephone: {
//         type: String,
//         minlength: 9,
//         maxlength: 9,
//     },
//     address: {
//         type: String,
//         minlength: 2,
//         maxlength: 255,
//     },
//     city: {
//         type: String,
//         minlength: 2,
//         maxlength: 255,
//     },
//     country: {
//         type: String,
//         minlength: 2,
//         maxlength: 255,
//     },
//     region: {
//         type: String,
//         minlength: 2,
//         maxlength: 255,
//     },        
// });


const hotelSchema = new mongoose.Schema({
    hotelId: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 8,
        // unique: true,
    },
    hotelName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        // unique: true,
    },

    generalInformation: {
        // type: generalInformationSchema,
        type: Object,
        default: {},
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

    pricePerStage: {
        type: Number,
        default: 100,
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

const selectHotelByName = (name) => {
    return Hotels.find({hotelName: name}).exec();
};

const selectAllHotels = () => {
    return Hotels.find({});
};

const updateHotelData = (id, newHotelData) => {
    return Hotels.findByIdAndUpdate(id, newHotelData);
};

const deleteHotel = (id) => {
    return Hotels.findOneAndDelete({ _id: id }, (err, deletedHotel) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Deleted:", deletedHotel);
        };
    });
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

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// let favoriteHotels = ["001", "002"];


// /* Find user's favorite hotels */
// let user = User.findById({ _id: id });

// /* Array with the hotels ID */
// let favoriteHotels = user.favoriteHotels;

// /* Get the hotel names */
// let myFavoriteHotels = [];

// favoriteHotels.forEach((id) => {
//     if (id) {
//         let hotel = Hotel.findById({ _id: id });
//         myFavoriteCards.push(card);
//     }
// });

// res.json({ favoriteHotels: myFavoriteCards});







/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */



// availability: {
//     type: Object,
//     default: {},
// },

    // priceRates: {},
    // maxCapacity: {},


// year2023: {
//     year: 2023,

//     seasons: {
//         winter: {
//             january: {
//                 first: {
//                     day: "",
//                     numericalDay: 0,
//                     comment: "",
//                     note: "",

//                     checkInTime: "",
//                     checkOutTime: "",
//                 },
//                 second: {},
//                 third: {},
//                 fourth: {},
//                 fifth: {},
//                 sixth: {},
//                 seventh: {},
//                 eighth: {},
//                 ninth: {},
//                 tenth: {},
//                 eleventh: {},
//                 twelfth: {},
//                 thirteenth: {},
//                 fourteenth: {},
//                 fifteenth: {},
//                 sixteenth: {},
//                 seventeenth: {},
//                 eighteenth: {},
//                 nineteenth: {},
//                 twentieth: {},
//                 twentyFirst: {},
//                 twentySecond: {},
//                 twentyThird: {},
//                 twentyFourth: {},
//                 twentyFifth: {},
//                 twentySixth: {},
//                 twentySeventh: {},
//                 twentyEighth: {},
//                 twentyNinth: {},
//                 thirtieth: {},
//                 thirtyFirst: {},
//             },
//             february: {},
//             march: {},
//         },
//         spring: {
//             april: {},
//             may: {},
//             june: {},
//         },
//         summer: {
//             july: {},
//             august: {},
//             september: {},
//         },
//         autumn: {
//             october: {},
//             november: {},
//             december: {},
//         },
//     },
// },


/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// const dayTamplate = {
//     day: "Saturday",
//     numericalDay: 14,

//     holiday: "יום כיפור",
//     comment: "",
//     note: "",

//     checkInTime: this.checkInAndOut.checkInTime,
//     checkOutTime: this.checkInAndOut.checkOutTime,

//     avalibility: {
//         closeForSale: false,
//         priceStage: 10,

//         roomsAvailable: {
//             standardRoomsCategory: {
//                 categoryCloseForSale: false,
//                 standardRoomsTwins: {
//                     typeCloseForSale: false,
//                     amount: 20,
//                 },
//                 standardRoomsDouble: {
//                     typeCloseForSale: false,
//                     amount: 30,
//                 },
//             },
//             executiveRoomsCategory: {
//                 categoryCloseForSale: false,
//                 executiveRoomsTwins: {
//                     typeCloseForSale: false,
//                     amount: 20,
//                 },
//                 executiveRoomsDouble: {
//                     typeCloseForSale: false,
//                     amount: 20,
//                 },
//             },
//             suiteCategory: {
//                 categoryCloseForSale: false,
//                 suiteRoomsDouble: {
//                     typeCloseForSale: false,
//                     amount: 10,
//                 },
//             },
//         },
//     },
// };

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

// first, second, third, fourth, fifth,
// sixth, seventh, eighth, ninth,
// tenth, eleventh, twelfth, thirteenth, fourteenth, fifteenth,
// sixteenth, seventeenth, eighteenth, nineteenth,
// twentieth, twentyFirst, twentySecond, twentyThird,
// twentyFourth, twentyFifth, twentySixth,
// twentySeventh, twentyEighth, twentyNinth,
// thirtieth, thirtyFirst,

// January, February, march, April, May, June, July, August, September, October, November and December

// 1st: First   11th: Eleventh  21st: Twenty-First  31st: Thirty-First
// 2nd: Second  12th: Twelfth   22nd: Twenty-Second 32nd: Thirty-Second
// 3rd: Third   13th: Thirteenth    23rd: Twenty-Third
// 4th: Fourth  14th: Fourteenth    24th: Twenty-Fourth
// 5th: Fifth   15th: Fifteenth 25th: Twenty-Fifth
// 6th: Sixth   16th: Sixteenth 26th: Twenty-Sixth
// 7th: Seventh 17th: Seventeenth   27th: Twenty-Seventh
// 8th: Eighth  18th: Eighteenth    28th: Twenty-Eighth
// 9th: Ninth   19th: Nineteenth    29th: Twenty-Ninth
// 10th: Tenth  20th: Twentieth 30th: Thirtieth

// sunday monday tuesday wednesday thursday friday saturday