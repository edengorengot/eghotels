const express = require('express');
const router = express.Router();
const hotelValidation = require('../../validation/hotels.validation');
const hotelModel = require('../../model/hotels.model');
const userModel = require('../../model/users.model');
const adminMiddleware = require('../../middleware/admin.middleware');



router.post('/create', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);

    let userDatabaseChecker = await userModel.selectUserByID(userId);
    
    if (admin < 1 || admin !== userDatabaseChecker.admin) {
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
    let hotelName = req.body.hotelName;

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
        res.json({ message: "There is no hotel with that ID!" });
    };
  } catch (err) {
      res.status(401).json({ message: "Something went wrong.", err });
  }
});

// add callender year

module.exports = router;
