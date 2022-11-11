const express = require('express');
const router = express.Router();
const userValidation = require('../../validation/users.validation');
const hotelValidation = require('../../validation/hotels.validation');
const userModel = require('../../model/users.model');
const hotelModel = require('../../model/hotels.model');
const bcrypt = require('../../config/bcrypt');
const jwt = require('../../config/jwt');
const authMiddleware = require('../../middleware/auth.middleware');
const adminMiddleware = require('../../middleware/admin.middleware');
const { sendResetEmail } = require('../../email/sendResetEmail');
const { sendContactEmail } = require('../../email/sendContactEmail');
const { sendContactEmailUser } = require('../../email/sendContactEmailUser');



router.post('/signup', async (req, res) => {
  try {
    let validateData = await userValidation.validateUsersSchema.validateAsync(req.body);

    /* Digits Check */
    let passwordValidation = await userValidation.passwordVerification(validateData.password);

    if (passwordValidation) {
      let hashedPassword = await bcrypt.createHash(validateData.password);
      let databaseCheckerEmail = await userModel.selectUserByEmail(validateData.email);
      let databaseCheckerMobilePhone = await userModel.selectUserByMobilePhone(validateData.mobilePhone);    
  
      if (databaseCheckerEmail.length === 0 && databaseCheckerMobilePhone.length === 0) {
        let newUser = await userModel.insertNewUser(
          validateData.firstName,
          validateData.lastName,
          validateData.email,
          validateData.mobilePhone,
          validateData.telephone,
          hashedPassword,
        );
        res.json({ message: "New user inserted!" });
      } else {
        res.json({ message: "You already signed up with your email or phone." });
      };
    } else {
      res.json({ message: "The password is not strong enough!" });
    };
  }
  catch(err) {
    res.status(401).json({ message: "Something went wrong.", err });
  };
});


router.post('/login', async (req, res) => {
  try {
    let validateData = await userValidation.validateLoginUsersSchema.validateAsync(req.body);
    let databaseCheckerEmail = await userModel.selectUserByEmailFull(validateData.email);

    if (databaseCheckerEmail.length === 1) {
      let userData = databaseCheckerEmail[0];
      let passwordChecker = await bcrypt.compareHash(validateData.password, userData.password);

      if (passwordChecker) {
        let jwtData = await jwt.createToken({
          id: userData._id,
          email: userData.email,
        });

        if (userData.admin > 0) {
          res.json({ message: "You have successfully logged in.", token: jwtData, admin: userData.admin });
        } else {
          res.json({ message: "You have successfully logged in.", token: jwtData });
        };
      } else {
        res.json({ message: "Incorrect password." });
      }
    } else {
      res.json({ message: "There are no user with this email." });
    }    
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.post('/contact', async (req, res) => {
  try {
    let validateData = await userValidation.validateContactSchema.validateAsync(req.body);
    let databaseCheckerEmail = await userModel.selectUserByEmail(validateData.email);

    if (databaseCheckerEmail.length === 0) {
      sendContactEmail(validateData.email, validateData);
      res.json({ message: "Your form has been successfully submitted."});
    } else {
      sendContactEmailUser(validateData.email, validateData, databaseCheckerEmail[0]);
      res.json({ message: "Your form has been successfully submitted."});
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.delete('/deleteuser', authMiddleware, async (req, res) => {
  try {
    let id = req.userData.id;
    if (!id) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let databaseCheckerId = await userModel.selectUserByID(id);
    if (databaseCheckerId) {
      userModel.deleteUser(databaseCheckerId._id);
      res.json({ message: "User deleted successfully." });
    } else {
      res.json({ message: "There are no user with this ID." });
    }
  }
  catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.delete('/deleteall', authMiddleware, async (req, res) => {
  try {
    const deletedUsers = await userModel.deleteAll();
    res.json('All users deleted!');
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.get('/userbyid', authMiddleware, async (req, res) => {
  try {
    let id = req.userData.id;
    if (!id) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let databaseCheckerId = await userModel.selectUserByID(id);
    if (!databaseCheckerId) {
      res.json({ message: "User does not exists."});
    } else {
      res.json({ message: "User's data sent successfully", databaseCheckerId });
    }
  } catch (err) {
    res.status(401).json({ message: "User does not exists.", err });
  }
});


router.get('/userbyemail', authMiddleware, async (req, res) => {
  try {
    let email = req.userData.email;
    if (!email) {
      res.status(401).json({ message: "There is no Email in the request." });
      return;
    };

    let databaseCheckerEmail = await userModel.selectUserByEmail(email);
    if (databaseCheckerEmail.length === 0) {
      res.json({ message: "User does not exists."});
    } else {
      res.json(databaseCheckerEmail[0]);
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
    res.status(401).json({ message: "Something went wrong.", err });
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

    // if password userValidation password check

    if (validateData.password) {
      hashedPassword = await bcrypt.createHash(validateData.password);
      validateData.password = hashedPassword;
    };

    let newUserData = await userModel.updateUserData(id, validateData);

    res.json({ message: "User was updated successfully." });
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.patch('/admin', adminMiddleware, async (req, res) => {
  try {
    let userId = req.userData.token.id;
    let admin = parseInt(req.userData.admin);

    let userDatabaseChecker = await userModel.selectUserByID(userId);
    
    if (admin < 3 || admin !== userDatabaseChecker.admin) {
      res.status(401).json({ message: "The admin tier is not at the right level or your info is not the same as the Database!" });
      return;
    };

    let validateData = await userValidation.validateAdminSchema.validateAsync(req.body);
    let databaseCheckerEmail = await userModel.selectUserByEmailFull(validateData.email);

    if (databaseCheckerEmail.length === 1) {
      let userData = databaseCheckerEmail[0];
      let updatedUserData = await userModel.updateUserData(userData.id, { admin: validateData.admin });

      res.json({message: "You have successfully changed the admin tier of your other account."});
    } else {
      res.json({ message: "There are no user with this email." });
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  };
});


router.patch('/forgot-password', async (req, res) => {
  try {
    let validateData = await userValidation.validateResetPasswordSchema.validateAsync(req.body);
    let databaseCheckerEmail = await userModel.selectUserByEmailFull(validateData.email);

    if (databaseCheckerEmail.length === 1) {
      let userData = databaseCheckerEmail[0];

      let resetPassword = "";
      
      for (let i = 0; i < 2; i++) {
        let abcId = Math.round(Math.random() * 25);
        let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        resetPassword = resetPassword + abc[abcId];
      };
      resetPassword = resetPassword.charAt(0).toLocaleUpperCase() + resetPassword.slice(1);

      let randomString = Math.round(Math.random() * 1000000);

      let symbolsId = Math.round(Math.random() * 7);
      let symbols = ["!", "@", "$", "^", "=", "&", "_", "*"];

      resetPassword = resetPassword + randomString + symbols[symbolsId];


      let hashedResetPassword = await bcrypt.createHash(resetPassword);
      let updatedUserData = await userModel.updateUserData(userData.id, { hashedResetPassword });

      sendResetEmail(validateData.email, resetPassword);

      res.json({message: "An email will be sent to you shortly."});
    } else {
      res.json({ message: "There are no user with this email." });
    }
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.patch('/reset-password/:resetPassword/:email', async (req, res) => {
  try {
    let resetPassword = req.params.resetPassword;
    let email = req.params.email;
    
    let validateEmail = await userValidation.validateResetPasswordSchema.validateAsync({ email });
    let validateResetPassword = await userValidation.validateUpdateUsersSchema.validateAsync({ password: resetPassword });

    let validateData = await userValidation.validateUpdateUsersSchema.validateAsync(req.body);
    let passwordValidation = await userValidation.passwordVerification(validateData.password);

    if (passwordValidation) {
      let databaseCheckerEmail = await userModel.selectUserByEmailFull(validateEmail.email);

      if (databaseCheckerEmail.length === 1) {
        let userData = databaseCheckerEmail[0];
  
        let passwordChecker = await bcrypt.compareHash(validateResetPassword.password, userData.hashedResetPassword);
  
        if (passwordChecker) {
          let hashedPassword = await bcrypt.createHash(validateData.password);
          let updatedUserData = await userModel.updateUserData(userData.id, { password: hashedPassword });
  
          res.json({ message: "You have successfully changed your password." });
        } else {
          res.json({ message: "The reset password is incorrect." });
        }
      } else {
        res.json({ message: "There are no user with this email." });
      }
    } else {
      res.json({ message: "The password is not strong enough!" });
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});


router.patch('/favorite-hotels', authMiddleware, async (req, res) => {
  try {
    let id = req.userData.id;
    
    if (!id) {
      res.status(401).json({ message: "There is no ID in the request." });
      return;
    };

    let databaseCheckerId = await userModel.selectUserByID(id);

    if (!databaseCheckerId) {
      res.json({ message: "User does not exists."});
    } else {
      let favoriteHotels = databaseCheckerId.favoriteHotels;
      let validateData = await hotelValidation.validateUpdateHotelsSchema.validateAsync(req.body);
      let databaseCheckerHotelName = await hotelModel.selectHotelByName(validateData.hotelName);

      if (databaseCheckerHotelName.length === 1) {
        let favoriteSearch = favoriteHotels.indexOf(validateData.hotelName);

        if (favoriteSearch === -1) {
          favoriteHotels.push(validateData.hotelName);
        } else {
          favoriteHotels = favoriteHotels.filter(element => element !== validateData.hotelName);
        };

        let updatedUserData = await userModel.updateUserData(id, { favoriteHotels: favoriteHotels });
                    
        res.json({ message: "Favorites hotels changed successfully" });
      } else {
        res.json({ message: "There is no hotel with that name!" });
      };
    };
  } catch (err) {
    res.status(401).json({ message: "Something went wrong.", err });
  }
});



module.exports = router;
