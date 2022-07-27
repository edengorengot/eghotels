const express = require('express');
const router = express.Router();
const userValidation = require('../../validation/users.validation');
const userModel = require('../../model/users.model');
const bcrypt = require('../../config/bcrypt');
const jwt = require('../../config/jwt');
const authMiddleware = require('../../middleware/auth.middleware');



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

router.post('/login', async (req, res) => {
  try {
    let validateData = await userValidation.validateLoginUsersSchema.validateAsync(req.body);
    let databaseChecker = await userModel.selectUserByEmail(validateData.email);

    if (databaseChecker.length === 1) {
      let userData = databaseChecker[0];
      let passwordChecker = await bcrypt.compareHash(validateData.password, userData.password);

      if (passwordChecker) {
        let jwtData = await jwt.createToken({
          id: userData._id,
          email: userData.email,
        });
        res.json({ token: jwtData });
      } else {
        res.json({ message: "The password are not match." });
      }
    } else {
      res.json({ message: "There are no user with this email..." });
    }    
  } catch (err) {
    res.status(401).json({ err });
  }
});

router.delete('/deleteuser', authMiddleware, async (req, res) => {
  try {
    let id = req.userData.id;
    if (!id) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let databaseChecker = await userModel.selectUserByID(id);
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

router.delete('/deleteall', authMiddleware, async (req, res) => {
  try {
    const deletedUsers = await userModel.deleteAll();
    console.log(deletedUsers);
    res.json('All users deleted!');
  } catch (err) {
    res.status(401).json({ message: "Something went wrong...", err });
  }
});

router.get('/userbyid', authMiddleware, async (req, res) => {
  try {
    let id = req.userData.id;
    if (!id) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let databaseChecker = await userModel.selectUserByID(id);
    res.json(databaseChecker);
  } catch (err) {
    res.status(401).json({ message: "User does not exists.", err });
  }
});

router.get('/userbyemail', authMiddleware, async (req, res) => {
  try {
    let email = req.userData.email;
    if (!email) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let databaseChecker = await userModel.selectUserByEmail(email);
    if (databaseChecker.length === 0) {
      res.json({ message: "User does not exists." });
    } else {
      res.json(databaseChecker[0]);
    }
  } catch (err) {
    res.status(401).json({ message: "User does not exists.", err });
  }
});

router.get('/allusers', authMiddleware, async (req, res) => {
  try {
    let databaseChecker = await userModel.selectALLUsers();
    res.json(databaseChecker);
  } catch (err) {
    res.status(401).json({ err });
  }
});

router.patch('/update', authMiddleware, async (req, res) => {
  try {
    let id = req.userData.id;
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
