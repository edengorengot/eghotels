const express = require('express');
const router = express.Router();
const hotelValidation = require('../../validation/hotels.validation');
const hotelModel = require('../../model/hotels.model');


// const userValidation = require('../../validation/users.validation');
// const userModel = require('../../model/users.model');
// const authMiddleware = require('../../middleware/auth.middleware');
// const { sendResetEmail } = require('../../email/sendResetEmail');



router.post('/new-hotel', async (req, res) => {
    try {
      let validateData = await hotelValidation.validateCreateHotelsSchema.validateAsync(req.body);

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
  








module.exports = router;
