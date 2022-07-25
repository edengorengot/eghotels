const express = require('express');
const router = express.Router();
const userValidation = require('../validation/users.validation');
const userModel = require('../model/users.model');
const bcrypt = require('../config/bcrypt');



router.post('/signup', async (req, res) => {
  try {
    let validateData = await userValidation.validateUsersSchema.validateAsync(req.body);
    let hashedPassword = await bcrypt.createHash(validateData.password);
    let databaseChecker = await userModel.selectUserByEmail(validateData.email);

    if (databaseChecker.length === 0) {
      let newUser = await userModel.insertNewUser(
        validateData.firstName,
        validateData.lastName,
        validateData.email,
        validateData.mobilePhone,
        validateData.telephone,
        hashedPassword,
        validateData.profileImg,
      );
      res.json({ message: "New user inserted" });
    } else {
      res.json({ message: "The user already exists..." });
    }
  }
  catch(err) {
    res.status(401).json({ err });
  }
});

router.delete('/deleteuser', async (req, res) => { // auth needed
  try {
    let databaseChecker = await userModel.selectUserByID(req.body.id);
    console.log(databaseChecker);
    if (databaseChecker) {
      userModel.deleteUser(databaseChecker._id);
      console.log(databaseChecker._id);
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "The user isn't exists." });
    }
  }
  catch (err) {
    res.status(401).json({ err });
  }
});

router.delete('/deleteall', async (req, res) => { // auth needed
  try {
    const deletedUsers = await userModel.deleteAll();
    console.log(deletedUsers);
    res.json('All users deleted!');
  } catch (err) {
    res.status(401).json({ message: "Something went wrong...", err });
  }
});

router.get('/userbyid', async (req, res) => { // auth needed
  try {
    let databaseChecker = await userModel.selectUserByID(req.body.id);
    res.json(databaseChecker);
  } catch (err) {
    res.status(401).json({ message: "User does not exists.", err });
  }
});

router.get('/userbyemail', async (req, res) => { // auth needed
  try {
    let databaseChecker = await userModel.selectUserByEmail(req.body.email);
    if (databaseChecker.length === 0) {
      res.json({ message: "User does not exists." });
    } else {
      res.json(databaseChecker[0]);
    }
  } catch (err) {
    res.status(401).json({ message: "User does not exists.", err });
  }
});

router.get('/allusers', async (req, res) => { // auth needed
  try {
    let databaseChecker = await userModel.selectALLUsers();
    res.json(databaseChecker);
  } catch (err) {
    res.status(401).json({ err });
  }
});

router.patch('/update', async (req, res) => { // auth needed
  try {
    let id = req.headers.id;
    if (!id) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let validateData = await userValidation.validateUpdateUsersSchema.validateAsync(req.body);

    if (validateData.password) {
      hashedPassword = await bcrypt.createHash(validateData.password);
      validateData.password = hashedPassword;
    };

    let newUserData = await userModel.updateUserData(id, validateData);


    let databaseChecker = await userModel.selectUserByID(id);
    res.json({ message: "User was updated", databaseChecker });
  } catch (err) {
    res.status(401).json({ message: "Something went wrong...", err });
  }
});

module.exports = router;
