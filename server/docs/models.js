const Users = {
	id,
	firstName,
	lastName,
	email,
	mobilePhone,
	telephone,
	password,
	// profileImg,
	createdAt,

    reservations: [ "000001", "000024", "000450" ],
    clubPoints: 5,

    preferences: {
        accessibleRoom: true,
        accessibleParking: true,
        accessibleCar: {
            brand: "Toyota",
            model: "Corolla",
            color: "White",
            carNumber: "12-345-67"
        },
        twinBeds: true, // separatedBeds
        doubleBed: false,
        balcony: true,
        bathtub: false,
        showerStall: true, // (מקלחון)
        DoorToDoor: false, // (דלת מול דלת)
        adjoiningRooms: true, // (דלתות צמודות)
        interconnectingRooms: true, // (דלת מקשרת [וצמוד]),
        farFromElevator: true,
        closeToElevator: false,
        quietRoom: true,
        highFloor: true,
        lowFloor: false,
        preferredFloor: 5,
        shabbatObservant: false, // (שומר שבת),
        preferBetterView: true,
    }
};

const Hotels = {
    id,
	Name,
	checkInTime: "15:00",
	checkOutTime: "12:00",
	checkInTimeSaturdaysAndHolidays: "18:00",
	checkOutTimeSaturdaysAndHolidays: "15:00",
    checkInTimePeakPeriods: "18:00",
    checkOutTimePeakPeriods: "12:00",

    freeCancellationPolicyHours: 48, // 2 days before arrival
    freeCancellationPolicyHoursPeak: 168, // 7 days before arrival
    freeCancellationPolicyHoursDoublePeak: 336, // 14 days before arrival
    freeCancellationPolicyHoursTopPeak: 720, // 30 days before arrival

    accommodationArrangement: [RO, BB, HB, FB],
    mealPrices: {
        midweekBreakfastForAdult: 100,
        midweekBreakfastForKid: 50,
        midweekDinnerForAdult: 200,
        midweekDinnerForKid: 100,
        midweekLunchForAdult: 150,
        midweekLunchForKid: 75,
        fridayDinnerForAdult: 250,
        fridayDinnerForKid: 125,
        saturdayBreakfastForAdult: 120,
        saturdayBreakfastForKid: 60,
        saturdayLunchForAdult: 180,
        saturdayLunchForKid: 90,
    },

    basePriceForOneStage: 200,
    
    rooms: [
        {
            id: "001",
            name: "Deluxe Room",
            numberOfRooms: 50,
            prices: {
                priceRate: {
                    single: 0.9,
                    double: 1, // { adults: 2, kids: 0, babies: 0 } || { adults: 1, kids: 1, babies: 0 }
                    triple: 1.25,
                    tripleAdults: 1.3,
                    quad: 1.5,
                },
                baby: 40,
            },


            maxCapacity: [
                { adults: 3, kids: 0, babies: 0 },
                { adults: 2, kids: 0, babies: 2 },
                { adults: 2, kids: 1, babies: 1 },
                { adults: 2, kids: 2, babies: 0 },
            ],
            minCapacity: [
                { adults: 1, kids: 0, babies: 0 },
                { adults: 0, kids: 1, babies: 0 }, // תלוי בחדר נוסף עם מבוגר
            ],
            ProhibitedCapacity: [
                { adults: 0, kids: 0, babies: 1 }, // אין אפשרות לשים תינוק לבד
            ],
        },
        {
            id: "002",
            name: "Executive Room",
            numberOfRooms: 30,
            prices: {
                priceRate: {
                    single: 1.2,
                    double: 1.3, // { adults: 2, kids: 0, babies: 0 } || { adults: 1, kids: 1, babies: 0 }
                    triple: 1.55,
                    tripleAdults: 1.6,
                },
                baby: 40,
            },
            maxCapacity: [
                { adults: 3, kids: 0, babies: 0 },
                { adults: 2, kids: 0, babies: 1 },
                { adults: 2, kids: 1, babies: 0 },
                { adults: 1, kids: 2, babies: 0 },
                { adults: 1, kids: 1, babies: 1 },
                { adults: 1, kids: 0, babies: 2 },
            ],
            minCapacity: [
                { adults: 1, kids: 0, babies: 0 },
                { adults: 0, kids: 1, babies: 0 }, // תלוי בחדר נוסף עם מבוגר
            ],
            ProhibitedCapacity: [
                { adults: 0, kids: 0, babies: 1 }, // אין אפשרות לשים תינוק לבד
            ],
        },
        {
            id: "003",
            name: "Suite",
            numberOfRooms: 5,
            prices: {
                priceRate: {
                    single: 4.8,
                    double: 5, // { adults: 2, kids: 0, babies: 0 } || { adults: 1, kids: 1, babies: 0 }
                },
                baby: 40,
            },
            maxCapacity: [
                { adults: 2, kids: 0, babies: 0 },
                { adults: 1, kids: 0, babies: 1 },
                { adults: 1, kids: 1, babies: 0 },
                { adults: 0, kids: 2, babies: 0 }, // תלוי בחדר נוסף עם מבוגר
                { adults: 0, kids: 1, babies: 1 }, // תלוי בחדר נוסף עם מבוגר
            ],
            minCapacity: [
                { adults: 1, kids: 0, babies: 0 },
                { adults: 0, kids: 1, babies: 0 }, // תלוי בחדר נוסף עם מבוגר
            ],
            ProhibitedCapacity: [
                { adults: 0, kids: 0, babies: 1 }, // אין אפשרות לשים תינוק לבד
            ],
        },
    ],
};


const Reservations = {
    id,
    hotelName,
    userID, // and all the other data
    arrivalDate,
    departureDate,
    nights,
    accommodationArrangement, // plan BB, HB, FB, All Included
};


