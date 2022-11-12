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
    let hotelName = req.headers.hotelname;

    let userDatabaseChecker = await userModel.selectUserByID(userId);

    if (admin < 1 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await hotelValidation.validateSearchHotelsSchema.validateAsync({ hotelName });
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
        
    if (databaseCheckerHotelName.length === 1) {
      let HotelData = databaseCheckerHotelName[0];
      let yearKey = `year${validateData.year}`;

      if (HotelData.availability[yearKey]) {
        res.json({ message: "This year already created." });
        return;
      };

      let yearlyAvailability = await availabilityModel.createYearlyHotelAvailability(year);
      HotelData.availability[yearKey] = yearlyAvailability;

      let updatedHotel = await hotelModel.updateHotelData(HotelData._id, HotelData);

      res.json({ message: "The hotel has been updated!", updatedHotel });
    } else {
      res.json({ message: "There is no hotel with that name!" });
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  };
});


router.patch('/update', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);

    let userDatabaseChecker = await userModel.selectUserByID(userId);
    
    if (admin < 2 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await hotelValidation.validateUpdateHotelsSchema.validateAsync(req.body);
    let databaseCheckerName = await hotelModel.selectHotelByName(validateData.hotelName);
    let doubleNameChecker = await hotelModel.selectHotelByName(validateData.newHotelName);

    if (databaseCheckerName.length === 1 || doubleNameChecker.length === 0) {
      let updatedHotelData = databaseCheckerName[0];
      updatedHotelData.hotelName = validateData.newHotelName;

      let updatedHotel = await hotelModel.updateHotelData(updatedHotelData._id, updatedHotelData);
      res.json({ message: "Hotel was updated!", updatedHotel });
    } else {
      res.json({ message: "There are no hotel in the current name or there are other hotel with the new name already." });
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  };
});


router.delete('/delete', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);
    let hotelName = req.headers.hotelname;
    
    let userDatabaseChecker = await userModel.selectUserByID(userId);

    if (admin < 2 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await hotelValidation.validateSearchHotelsSchema.validateAsync({ hotelName });    
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



module.exports = router;