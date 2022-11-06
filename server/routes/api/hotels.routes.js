const express = require('express');
const router = express.Router();
const hotelValidation = require('../../validation/hotels.validation');
const hotelModel = require('../../model/hotels.model');
const userModel = require('../../model/users.model');
const availabilityModel = require('../../model/availability.model');
const adminMiddleware = require('../../middleware/admin.middleware');



router.post('/create', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);

    let userDatabaseChecker = await userModel.selectUserByID(userId);
    
    if (admin < 2 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await hotelValidation.validateNewHotelsSchema.validateAsync(req.body);

    let databaseCheckerHotelID = await hotelModel.selectHotelByHotelID(validateData.hotelId);
    let databaseCheckerName = await hotelModel.selectHotelByName(validateData.hotelName);

    if (databaseCheckerHotelID.length === 0 && databaseCheckerName.length === 0) {
      let newHotel = await hotelModel.insertNewHotel(validateData.hotelId, validateData.hotelName);
      res.json({ message: "New hotel was created!", newHotel });
    } else {
      res.json({ message: "You already created a hotel with this ID or name." });
    };
  }
  catch(err) {
    res.status(401).json({ message: "Something went wrong.", err });
  };
});


router.get('/find', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);

    let userDatabaseChecker = await userModel.selectUserByID(userId);

    if (admin < 1 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await hotelValidation.validateSearchHotelsSchema.validateAsync(req.body);
    let databaseCheckerHotelName = await hotelModel.selectHotelByName(validateData.hotelName);

    if (databaseCheckerHotelName.length === 1) {
        res.json({ message: "The hotel has been loaded!", databaseCheckerHotelName });
    } else {
        res.json({ message: "There is no hotel with that name!" });
    };
  } catch (err) {
      res.status(401).json({ message: "Something went wrong.", err });
  };
});


router.patch('/adding-availability', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);
    let year = parseInt(req.body.year);
    req.body.year = year;

    
    let userDatabaseChecker = await userModel.selectUserByID(userId);
    
    if (admin < 2 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };
    
    let validateData = await hotelValidation.validateUpdateHotelsSchema.validateAsync(req.body);
    let databaseCheckerHotelName = await hotelModel.selectHotelByName(validateData.hotelName);

    
    console.log("validateData:", validateData);


    if (databaseCheckerHotelName.length === 1) {
      let updatedHotelData = databaseCheckerHotelName[0];

      let yearlyAvailability = await availabilityModel.createYearlyHotelAvailability(year);
      

      // if (validateData.year % 4 === 0) {
      //   let yearlyAvailability = await availabilityModel.skipYearTemplate(year);
      //   console.log("skip year");
      //   console.log("yearly Availability:", yearlyAvailability);
      //   // updatedHotelData.availability = 3;
      // } else {
      //   let yearlyAvailability = await availabilityModel.regularYearTemplate(year);
      //   console.log("regular year");
      //   console.log("yearly Availability:", yearlyAvailability);
      // };

      // let updatedHotel = await hotelModel.updateHotelData(databaseCheckerHotelName.id, updatedHotelData);
      // let updatedHotel = yearlyAvailability;

      res.json({ message: "The hotel has been updated!", yearlyAvailability });
    } else {
      res.json({ message: "There is no hotel with that name!" });
    };
  } catch (err) {
      res.status(401).json({ message: "Something went wrong.", err });
  };
});



// router.patch('update', adminMiddleware, async (req, res) => {

// });



// router.patch('/update-hotel', async (req, res) => {
//   try {
//       let validateData = await hotelValidation.validateUpdateHotelSchema(req.body);
//       let databaseCheckerId = await hotelModel.selectHotelByID(validateData.Id);

//       if (databaseCheckerId.length === 1) {
//           let updatedHotel = databaseCheckerId;

//           console.log("validateData:", validateData);



//           res.json({ message: "The hotel has been updated!", updatedHotel });
//       } else {
//           res.json({ message: "There is no hotel with that ID!" });
//       };
//   } catch (err) {
//       res.status(401).json({ message: "Something went wrong.", err });
//   }
// });


router.delete('/delete', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);

    let userDatabaseChecker = await userModel.selectUserByID(userId);

    if (admin < 2 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await hotelValidation.validateSearchHotelsSchema.validateAsync(req.body)
    let databaseCheckerHotelName = await hotelModel.selectHotelByName(validateData.hotelName);

    if (databaseCheckerHotelName.length === 1) {

      let deletedHotel = await hotelModel.deleteHotel(databaseCheckerHotelName[0]._id);
      res.json({ message: "The hotel has been deleted!", deletedHotel });
    } else {
      res.json({ message: "There is no hotel with that name!" });
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  };
});

// add callender year

module.exports = router;
